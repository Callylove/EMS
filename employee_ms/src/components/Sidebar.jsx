
import { Link, useLocation } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
// import React from 'react';

// eslint-disable-next-line react/prop-types
const SidebarItem = ({ to, children }) => {
  const location = useLocation(); // Get current location
  const isActive = location.pathname === to; // Check if the current path matches the link
  console.log(isActive);
  console.log(location.pathname);
  console.log(to);
  
  
  

  return (
    <div className={`flex cursor-pointer items-center ${isActive ? 'bg-gray-400' : 'hover:bg-gray-400'} px-0 md:px-6`}>


      <Link
        to={to}
        className={`block py-2 px-4 rounded `}
      >
        {children}
      </Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-32 md:w-64 bg-gray-700 text-white  ">
         <div className="p-4 bg-gray-700 cursor-pointer">
        <Link to='/admin/dashboard' class="text-xl font-semibold">EMS</Link>
      </div >
      <SidebarItem to="/admin/dashboard"><div className=' flex items-center gap-1 md:gap-4'>
        <FaHouse/> Dashboard
        </div></SidebarItem>
        <SidebarItem to="/admin/employees"><div className='flex items-center gap-1 md:gap-4'>
        <FaUserFriends className='h-8 w-6 md:h-4 md:w-4' /> Manage Employees
        </div></SidebarItem>
        <SidebarItem to="/admin/category"><div className='flex items-center gap-1 md:gap-4'>
        <TbCategoryFilled/> Category
        </div></SidebarItem>
        <SidebarItem to="/admin/profile"><div className='flex items-center gap-1 md:gap-4'>
        <IoPersonSharp /> Profile
        </div></SidebarItem>
        <SidebarItem to="/admin/logout"><div className='flex items-center gap-1 md:gap-4'>
        <FaPowerOff/> Logout
        </div></SidebarItem>

    </div>
  );
};

export default Sidebar;
