import React from 'react';
import { Link } from 'react-router-dom';

const Employees = () => {
  return (
   <div className="px-5 mt-5 h-auto">
        <div className="flex justify-center">
        <h2 className="text-3xl">Employee List</h2>
        </div>
        <Link to='/admin/add_employee' className="border rounded border-green-600 bg-green-600 h-4 w-16 p-4 text-xl  text-white mt-6">Add Employee</Link>
        <div className='mt-6 mb-12'>

        </div>
    </div>
  );
};

export default Employees;
