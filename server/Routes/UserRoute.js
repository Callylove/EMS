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
      return res.status(403).json({ message: 'Not authorized as user' });
    }
    next(); // Allow access to the route if user
  });
});

//User dashboard route
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Welcome to the User Dashboard' });
});

export {router as UserRouter}
