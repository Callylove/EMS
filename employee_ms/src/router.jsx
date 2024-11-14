
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import AdminDashboard from './pages/AdminDashboard';  
import Employees from './pages/Employees';
import Profile from './pages/Profile';
import Category from './pages/Category';
import Login from './components/Login';
import AddCategory from './components/AddCategory';
import UserDashboard from './pages/UserDashboard';
import AuthLayout from './Authlayout';
import AddEmployee from './components/AddEmployee';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
    
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "category",
        element: <Category />,
      },
     
      {
        path:'add_category',
        element:<AddCategory/>
      },
      {
        path:'add_employee',
        element:<AddEmployee/>
      }
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      // Redirect /auth to /auth/login
      {
        index: true, // This will match when the user visits /auth directly
        element: <Navigate to="auth/login" />
      },
      // Define the login and register routes
      {
        path: 'auth/login',
        element: <Login />
      },
      {
        path: 'auth/register',
        element: <Register />
      }
    ]
  },
  {
    path: "user/dashboard",
    element: <UserDashboard />,
  },
]);


const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
