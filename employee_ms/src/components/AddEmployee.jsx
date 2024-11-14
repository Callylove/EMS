import axios from "axios";
import { useEffect, useState } from "react";


export default function AddEmployee() {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/admin/category').then(res=>{
            if(res.data.Status){
                console.log(res.data.Result);
                
                setCategory(res.data.Result)
            }else {
                alert(res.data.error)
            }
    }).catch(err=>console.log(err))
    },[])
    const [employee, setEmployee] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        emp_id: '', 
        nin: '',
        category: '',
        salary: '',
        image: '',
      });
    
      // Function to generate Employee ID
      const generateEmployeeId = () => {
        const prefix = 'EMS-';
        const randomString = Math.random().toString(36).substr(2, 10); 
        return prefix + randomString;
      };
    
      // Handle form data change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
      };
    
      // Handle file upload
      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setEmployee({ ...employee, [name]: files[0] });
      };
    
   const handleSubmit = (e) => {
    e.preventDefault()

   }
  return (
    <div className='w-full flex flex-col min-h-screen justify-start items-center '>
       
    <div className='flex flex-col border rounded shadow p-6'>
  
        <h2 className='text-xl font-bold tracking-medium mb-6 text-center text-green-600'>Add Employee</h2>
        <form className="grid grid-rows-2 gap-2" onSubmit={handleSubmit}>
      <label htmlFor="fullname" className="font-normal tracking-medium">Full Name</label>
      <input
        type="text"
        name="fullname"
        value={employee.fullname}
        onChange={handleChange}
        placeholder="Enter Full Name"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
      />
      <label htmlFor="email" className="font-normal tracking-medium">Email</label>
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Enter Email"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
      />
      <label htmlFor="phone" className="font-normal tracking-medium">Phone Number</label>
      <input
        type="text"
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Enter Phone Number"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
      />
      <label htmlFor="password" className="font-normal tracking-medium">Password</label>
      <input
        type="password"
        name="password"
        value={employee.password}
        onChange={handleChange}
        placeholder="Enter Password"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
      />
      <label htmlFor="emp_id" className="font-normal tracking-medium">Employee ID</label>
      <input
        type="text"
        name="emp_id"
        value={employee.emp_id} 
        onChange={handleChange}
        placeholder="Employee ID will be auto-generated"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
        disabled
      />
      <label htmlFor="nin" className="font-normal tracking-medium">NIN number</label>
      <input
        type="text"
        name="nin"
        value={employee.nin}
        onChange={handleChange}
        placeholder="Enter NIN number"
        className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"
      />
      <label htmlFor="category" className="font-normal tracking-medium">Category</label>
      <select name="category" id="category"  className="rounded px-4 h-8 focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-opacity-50"  onChange={handleChange}>
        {category.map(c=>{
            return <option value={c.id} key={c.id}>{c.name}</option>
        })}
      </select>
       
      <label htmlFor="salary" className="font-normal tracking-medium">Salary</label>
      <input
        type="text"
        name="salary"
        value={employee.salary}
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

      <button
        type="submit"
        className="border w-[150px] h-10 self-center justify-self-center mt-6 rounded border-green-600 bg-green-600 text-white hover:bg-green-500"
      >
        Add Employee
      </button>
      </form>
    </div>
</div>
  )
}
