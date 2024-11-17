// import express from 'express'
// import conn from '../utils/db.js'
// import jwt from 'jsonwebtoken'

// const router = express.Router()

// router.post('/login', (req,res)=>{
//     const sql = "SELECT * from users where email = ? and password = ?"
//     conn.query(sql,[req.body.email,req.body.password], (err,result) =>{
//         if (err) return res.json({loginStatus: false, Error:'Query Error'})
//         if (result.length > 0) {
//             const email  = result[0].email
//             const token = jwt.sign({role:'user', email:email}, 'jwt_secret_key',{expiresIn: '1d'})
//             res.cookie('token',token)
//             return res.json({loginStatus: true,role:'user',})
//         }else {
//             return res.json({loginStatus: false,  Error:'Wrong Email or Password'})
//         }
//     })
    
// })

// export {router as UserRouter}

import express from 'express'
import conn from '../utils/db.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

// Middleware to protect user routes
router.use('/dashboard', (req, res, next) => {
    console.log(res.body);
    
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  jwt.verify(token, 'jwt_secret_key', (err, decoded) => {
    if (err || decoded.role !== 'user') {
      return res.status(403).json({ message: 'Not authorized as user',Result: decoded.role });
    }
    next(); // Allow access to the route if user
  });
});

// const authenticateJWT = (req, res, next) => {
//   const token = req.cookies.token;  // Retrieve token from cookies

//   if (!token) {
//     return res.status(401).json({ error: 'Access denied. No token provided.' });
//   }

//   try {
//     // Verify the token and decode it
//     const decoded = jwt.verify(token, 'jwt_secret_key');
//     req.user = decoded;  // Attach user information to the request
//     next();  // Proceed to the next route handler
//   } catch (error) {
//     return res.status(400).json({ error: 'Invalid or expired token' });
//   }
// };

// // Protect the /user/role route
// router.get('/role', authenticateJWT, (req, res) => {
//   const { role } = req.user;  // Extract role from decoded token
//   console.log(role);
  
//   return res.json({ role });
// });

//User dashboard route
router.get('/dashboard', (req, res) => {
    // If no token is found, return unauthorized error
    if (!token) {
      return res.status(403).json({ message: 'Not authorized' });
    }
  
    // Log the token to ensure it's being sent correctly
    // console.log('Token:', token);
  
    // Verify the token
    jwt.verify(token, 'jwt_secret_key', (err, decoded) => {
      if (err) {
        // console.log('JWT verification error:', err);
        return res.status(403).json({ message: 'Not authorized, invalid token' });
      }
  
      // Log decoded token to ensure the contents are correct
      console.log('Decoded token:', decoded);
  
      // Check if the decoded role is 'admin'
      if (decoded.role !== 'user') {
        // console.log('Role:', decoded.role);  // Log role for debugging
        return res.status(403).json({ message: 'Not authorized as admin', role: decoded.role });
      }
  
      // All checks passed, send a response with the admin dashboard message
      return res.json({ message: 'Welcome to the User Dashboard', role: decoded.role });
    });

});

export {router as UserRouter}
