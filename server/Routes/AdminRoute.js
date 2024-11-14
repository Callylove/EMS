// import express from 'express'
// import conn from '../utils/db.js'
// import jwt from 'jsonwebtoken'

// const router = express.Router()

// router.post('/login', (req,res)=>{
//     const sql = "SELECT * from admin where email = ? and password = ?"
//     conn.query(sql,[req.body.email,req.body.password], (err,result) =>{
//         if (err) return res.json({loginStatus: false, Error:'Query Error'})
//         if (result.length > 0) {
//             const email  = result[0].email
//             const token = jwt.sign({role:'admin', email:email}, 'jwt_secret_key',{expiresIn: '1d'})
//             res.cookie('token',token)
//             return res.json({loginStatus: true,role:'admin',})
//         }else {
//             return res.json({loginStatus: false,  Error:'Wrong Email or Password'})
//         }
//     })
    
// })

// export {router as AdminRouter}

import express from 'express'
import conn from '../utils/db.js'
import jwt from 'jsonwebtoken'


const router = express.Router()

// Middleware to protect admin routes
router.use('/dashboard', (req, res, next) => {
  
    
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  jwt.verify(token, 'jwt_secret_key', (err, decoded) => {
    if (err || decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized as admin' });
    }
    next(); // Allow access to the route if admin
  });
});
// POST route to add a category
router.post('/add_category', (req, res) => {
    const sql = 'INSERT INTO category (`name`) VALUES (?)';
    conn.query(sql, [req.body.category], (err, queryRes) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.json({ Status: false, error: 'Query Error' });
        }
        return res.json({ Status: true });
    });
});


// Set up multer for file upload (store files in memory)
// const storage = multer.memoryStorage();  // Store the file in memory
// const upload = multer({ storage: storage });

// POST route to handle employee form submission

 
  
  
  
  
  
  
 
router.get('/category', (req,res)=>{
    const sql = 'SELECT * from category'
    conn.query(sql, (err,result)=>{
        if (err) {
            console.error('Error executing query:', err);
            return res.json({ Status: false, error: 'Query Error' });
        }
        return res.json({ Status: true, Result: result });
    })
})
//Admin dashboard route
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Welcome to the Admin Dashboard' });
});

export {router as AdminRouter}
