import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Register() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        emp_id: '', 
        nin: '',
        category: '',
        salary: '',
        image: null,
      });
    
      // Function to generate Employee ID
      const generateEmployeeId = () => {
        const prefix = 'ems-';
        const randomString = Math.random().toString(36).substr(2, 10); 
        return prefix + randomString;
      };
    
      // Handle form data change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle file upload
      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
      };
    
   // Handle form submission
   const handleSubmit = (e) => {
    e.preventDefault();

    // Auto-generate the Employee ID before submitting
    const employeeId = generateEmployeeId();

    // Set the employee ID in form data
    const updatedData = { ...formData, emp_id: employeeId };

    // Send data to the backend (Express)
    axios.post('http://localhost:3000/auth/register', updatedData)
      .then((response) => {
        if (response.data.Status) {
          alert('Employee added successfully!');
        } else {
          alert('Error: ' + response.data.error);
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('An error occurred while adding the employee.');
      });
  };
  return (
    <div className='w-full flex flex-col min-h-screen justify-start items-center '>
       
    <div className='flex flex-col border rounded shadow p-6'>
  
        <h2 className='text-xl font-bold tracking-medium mb-6 text-center text-green-600'>Register</h2>
        <form className="grid grid-rows-2 gap-2" onSubmit={handleSubmit}>
      <label htmlFor="fullname" className="font-normal tracking-medium">Full Name</label>
      <input
        type="text"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        placeholder="Enter Full Name"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
      />
      <label htmlFor="email" className="font-normal tracking-medium">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
      />
      <label htmlFor="phone" className="font-normal tracking-medium">Phone Number</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter Phone Number"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
      />
      <label htmlFor="password" className="font-normal tracking-medium">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter Password"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
      />
      <label htmlFor="emp_id" className="font-normal tracking-medium">Employee ID</label>
      <input
        type="text"
        name="emp_id"
        value={formData.emp_id} 
        onChange={handleChange}
        placeholder="Employee ID will be auto-generated"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
        disabled
      />
      <label htmlFor="nin" className="font-normal tracking-medium">NIN number</label>
      <input
        type="text"
        name="nin"
        value={formData.nin}
        onChange={handleChange}
        placeholder="Enter NIN number"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
      />
      <label htmlFor="category" className="font-normal tracking-medium">Category</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Enter Category"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
      />
      <label htmlFor="salary" className="font-normal tracking-medium">Salary</label>
      <input
        type="text"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Enter Salary"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
      />
      <label htmlFor="image" className="font-normal tracking-medium">Image</label>
      <input
        type="file"
        name="image"
        onChange={handleFileChange}
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
      />
  <div className="flex gap-4">
        <p>Already have an account?</p>
        <Link to='/auth/login' className="border-b border-green-600 text-green-600">login</Link>
        </div>
      <button
        type="submit"
        className="border w-[150px] h-10 self-center justify-self-center mt-6 rounded border-green-600 bg-green-600 text-white hover:bg-green-500"
      >
        Create account
      </button>
    
      </form>
    </div>
</div>
  )
}
