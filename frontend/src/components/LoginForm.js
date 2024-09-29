import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const LoginForm = () => {
  const [isStudent, setIsStudent] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsStudent(!isStudent);
  };

  function handleClick () {
    navigate('/register');
  }

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    password: false
  });

  function toggleVisibility(field) {
    setShowPasswords((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  }

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <section className="text-gray-600 body-font relative bg-gray-100">
      <div className="w-2/3 md:w-1/3 container px-5 py-20 mx-auto flex flex-wrap">
        <h2 className="text-black text-lg mb-1 font-medium title-font">
          {isStudent ? 'Student Log In' : 'Admin Log In'}
        </h2>
        <form className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className='text-black flex space-x-5 mb-6 rounded-full'>
            <button type="button" className={`px-5 py-2 rounded-full ${isStudent ? "bg-green-500 text-white" : "bg-gray-200"} `} onClick={handleToggle}>Student</button>
            <button type="button" className={`px-5 py-2 rounded-full ${!isStudent ? "bg-green-500 text-white" : "bg-gray-200"}`} onClick={handleToggle}>Instructor</button>
          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Username<sup className='text-red-500'>*</sup></label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" required value={formData.name} onChange={changeHandler} />
          </div>
          <div className="relative mb-6">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password<sup className='text-red-500'>*</sup></label>
            <div className='flex pr-3 border border-gray-300 rounded bg-white'>
              <input type={showPasswords.password ? "text" : "password"} id="password" name="password" className="w-full rounded text-base outline-none text-gray-700 bg-white py-1 px-3 leading-8" required value={formData.password} onChange={changeHandler} />
              {showPasswords.password ?
                <IoEyeOffOutline className='text-red-500 mt-1 h-[2.5rem] w-[1.3rem] cursor-pointer' onClick={() => toggleVisibility('password')} />
                :
                <IoEyeOutline className='text-green-500 mt-1 h-[2.5rem] w-[1.3rem] cursor-pointer' onClick={() => toggleVisibility('password')} />
              }
            </div>
          </div>

          {isStudent && (
            <p className="text-gray-600 mb-1">
              Not registered? <span className="text-green-600 cursor-pointer" onClick={handleClick}>Please register</span>
            </p>
          )}
          <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Log In</button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
