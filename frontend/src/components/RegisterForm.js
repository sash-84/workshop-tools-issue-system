import React, {useState} from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Form = () => {
    const [formData, setFormData] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        regId: "",
        password: "",
        c_password: "",
    });

    const [showPasswords, setShowPasswords] = useState({
        password: false,
        c_password: false
    });

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData, [event.target.name]: event.target.value,
        }));
    }

    function toggleVisibility(field) {
        setShowPasswords((prevState) => ({
            ...prevState,
            [field]: !prevState[field] 
        }));
    }

    return (
        <section className="text-gray-600 body-font relative bg-gray-100">
          <div className="w-2/3 md:w-1/3 container px-5 py-20 mx-auto flex flex-wrap">
            <h2 className="text-black text-lg mb-1 font-medium title-font">Register</h2>
            <form className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div className='flex space-x-4'>
                <div className="relative mb-4 w-1/2">
                  <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">First Name<sup className='text-red-500'>*</sup></label>
                  <input type="text" id="firstName" name="firstName" className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" required value={formData.firstName} onChange={changeHandler} />
                </div>
                <div className="relative mb-4 w-1/2">
                  <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">Last Name<sup className='text-red-500'>*</sup></label>
                  <input type="text" id="lastName" name="lastName" className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" required value={formData.lastName} onChange={changeHandler} />
                </div>
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email<sup className='text-red-500'>*</sup></label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" required value={formData.email} onChange={changeHandler} />
              </div>  
              <div className="relative mb-4">
                <label htmlFor="regId" className="leading-7 text-sm text-gray-600">Enrollment No.<sup className='text-red-500'>*</sup></label>
                <input type="text" id="regId" name="regId" className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" required value={formData.regId} onChange={changeHandler} />
              </div>       
              <div className='flex space-x-4'>
                <div className="relative mb-6 w-1/2">
                  <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password<sup className='text-red-500'>*</sup></label>
                  <div className='flex pr-3 border border-gray-300 rounded bg-white'>
                    <input type={showPasswords.password ? "text" : "password"} id="password" name="password" className="w-full rounded text-base outline-none text-gray-700 bg-white py-1 px-3 leading-8" required value={formData.password} onChange={changeHandler} />
                    {showPasswords.password ? (
                      <IoEyeOffOutline className='text-red-500 mt-1 h-[2.5rem] w-[1.3rem] cursor-pointer' onClick={() => toggleVisibility('password')} />
                    ) : (
                      <IoEyeOutline className='text-green-500 mt-1 h-[2.5rem] w-[1.3rem] cursor-pointer' onClick={() => toggleVisibility('password')} />
                    )}
                  </div>
                </div>
                <div className="relative mb-6 w-1/2">
                  <label htmlFor="c_password" className="leading-7 text-sm text-gray-600">Confirm Password<sup className='text-red-500'>*</sup></label>
                  <div className='flex pr-3 border border-gray-300 rounded bg-white'>
                    <input type={showPasswords.c_password ? "text" : "password"} id="c_password" name="c_password" className="w-full rounded text-base outline-none text-gray-700 bg-white py-1 px-3 leading-8" required value={formData.c_password} onChange={changeHandler} />
                    {showPasswords.c_password ? (
                      <IoEyeOffOutline className='text-red-500 mt-1 h-[2.5rem] w-[1.3rem] cursor-pointer' onClick={() => toggleVisibility('c_password')} />
                    ) : (
                      <IoEyeOutline className='text-green-500 mt-1 h-[2.5rem] w-[1.3rem] cursor-pointer' onClick={() => toggleVisibility('c_password')} />
                    )}
                  </div>
                </div>
              </div>
              <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Log In</button>
            </form>
          </div>
        </section>
    );
};

export default Form;
