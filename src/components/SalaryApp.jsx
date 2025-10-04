import React, { useState } from 'react'

const SalaryApp = () => {

   const [allData, setAllData] = useState([]);

   const [formData, setFormData] = useState({
    name:"",
    salary:"",
    profession:""
   });

     const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.salary || !formData.profession) return;

    setAllData(prev => [...prev, formData]); // add new employee
    setFormData({ name: '', salary: '', profession: '' }); // reset form
  };

  return (
      <div className=' flex flex-col items-center gap-5 '>
          <h1  className='title'>Salary App</h1>
          <form className='emmployee-form'  onSubmit={handleSubmit} > 
          
          <input
            className='input'
            type="text"
            name='name'
            placeholder='Name'
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
          className='input'
          type="number"
          name='salary'
          placeholder='Salary'
          required
          value={formData.salary}
          onChange={handleChange}
        />
          
        <input
          className='input'
          type="text"
          name='profession'
          placeholder='Profession'
          required
          value={formData.profession}
          onChange={handleChange}
        />

          <button className='btn' type="submit">Submit</button>

          <div className='flex flex-col items-center gap-5'>
            <input 
            type="text"
            placeholder='Search Data'
             />
             <button className='px-3 border cursor-pointer' type="button">Search</button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center min-h-screen gap-5">
         <h1 className='title'>Employee list</h1>
           <ul>
            {allData.map((el, idx) => (
             <li key={idx} className="employee flex gap-5 border p-2 rounded">
              <span>{el.name}</span>
              <span>{el.salary}</span>
              <span>{el.profession}</span>
             </li>
            ))}
         </ul>
      </div>
    </div>
  )
}

export default SalaryApp
