import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category = () => {
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
  return (
    <div className="px-5 mt-5 h-auto">
        <div className="flex justify-center">
        <h2 className="text-3xl">Category List</h2>
        </div>
    
    

      <div className="mt-6 mb-12">
        <table className="w-full">
            <thead className="border-b-2 w-full flex items-start mt-4 pb-4">
                <th>Name</th>
            </thead>
            <tbody>
{
    category.map(c=>{
       return <tr key={c.id} className="w-full">
            <td className="border-b-2 w-full flex items-start mt-4 pb-4">
                {c.name}
            </td>
        </tr>
    })
}
            </tbody>
        </table>
      </div>
      <Link to='/admin/add_category' className="border rounded border-green-600 bg-green-600 h-4 w-16 p-4 text-xl  text-white mt-6">Add Category</Link>
    </div>
  );
};

export default Category;