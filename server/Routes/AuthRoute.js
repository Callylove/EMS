

// import bcrypt from 'bcryptjs'
// import express from 'express'
// import conn from '../utils/db.js'
// import jwt from 'jsonwebtoken'

// const router = express.Router()
// router.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   // Check if the email belongs to an admin
//   const adminSql = "SELECT * FROM admin WHERE email = ?";
//   conn.query(adminSql, [email, password], (err, adminResult) => {
//     if (err) {
//       return res.json({ loginStatus: false, error: 'Database error' });
//     }

//     // If the admin exists
//     if (adminResult.length > 0) {
//       const admin = adminResult[0];
//       console.log(admin);
      
//       // bcrypt.compare(password, admin.password, (err, isMatch) => {
//       //   if (err) {
//       //     return res.json({ loginStatus: false, error: 'Server error' });
//       //   }

//       //   if (isMatch) {
//       //     const token = jwt.sign({ role: 'admin', email: admin.email }, 'jwt_secret_key', { expiresIn: '1d' });
//       //     res.cookie('token', token, { httpOnly: true });
//       //     return res.json({ loginStatus: true, role: 'admin' });
//       //   } else {
//       //     return res.json({ loginStatus: false, error: 'Incorrect password' });
//       //   }
//       // });
//     } else {
//       // If it's not an admin, check if it's a user
//       const userSql = "SELECT * FROM users WHERE email = ?";
//       conn.query(userSql, [email], (err, userResult) => {
//         if (err) {
//           return res.json({ loginStatus: false, error: 'Database error' });
//         }

//         if (userResult.length > 0) {
//           const user = userResult[0];
//           console.log();
          
//           // bcrypt.compare(password, user.password, (err, isMatch) => {
//           //   if (err) {
//           //     return res.json({ loginStatus: false, error: 'Server error' });
//           //   }

//           //   if (isMatch) {
//           //     const token = jwt.sign({ role: 'user', email: user.email }, 'jwt_secret_key', { expiresIn: '1d' });
//           //     res.cookie('token', token, { httpOnly: true });
//           //     return res.json({ loginStatus: true, role: 'user' });
//           //   } else {
//           //     return res.json({ loginStatus: false, error: 'Incorrect password' });
//           //   }
//           // });
//         } else {
//           return res.json({ loginStatus: false, error: 'User not found' });
//         }
//       });
//     }
//   });
// });

// export {router as AuthRouter}

import express from 'express';
import conn from '../utils/db.js';  // Assuming this is your MySQL connection setup
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the email belongs to an admin
  const adminSql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  conn.query(adminSql, [email, password], (err, adminResult) => {
    if (err) {
      return res.json({ loginStatus: false, error: 'Database error' });
    }

    // If the admin exists
    if (adminResult.length > 0) {
      const admin = adminResult[0];
      const token = jwt.sign({ role: 'admin', email: admin.email }, 'jwt_secret_key', { expiresIn: '1d' });

      // Set JWT token as a cookie (httpOnly for security)
      res.cookie('token', token, { httpOnly: true });

      return res.json({ loginStatus: true, role: 'admin' });
    } else {
      // If not an admin, check if it's a user
      const userSql = "SELECT * FROM users WHERE email = ? AND password = ?";
      conn.query(userSql, [email, password], (err, userResult) => {
        if (err) {
          return res.json({ loginStatus: false, error: 'Database error' });
        }

        if (userResult.length > 0) {
          const user = userResult[0];
          const token = jwt.sign({ role: 'user', email: user.email }, 'jwt_secret_key', { expiresIn: '1d' });

          // Set JWT token as a cookie (httpOnly for security)
          res.cookie('token', token, { httpOnly: true });

          return res.json({ loginStatus: true, role: 'user' });
        } else {
          return res.json({ loginStatus: false, error: 'User not found or incorrect password' });
        }
      });
    }
  });
});

export { router as AuthRouter };
