import React, { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className='md:flex justify-between items-center bg-slate-700 sticky  top-0 z-[44444444444444444444]'>

            <div className='flex justify-between p-5'>
                <h1 className='text-4xl text w-40 font-bold font'>S<span className='text-white'>hamim</span></h1>
                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                  
                            <div>
                                <div className='bg-white rounded-md w-5 h-1'></div>
                                <div className='bg-white rounded-md w-5 h-1 mt-1'></div>
                                <div className='bg-white rounded-md w-5 h-1 mt-1'></div>
                            </div>
                </div>
            </div>
            <ul className={`md:flex justify-end absolute p-5 md:static bg-slate-700 w-full duration-500 ease-in ${open ? 'top-20': 'top-[-520px]'}`}>
                <a href='#home' className='md:mr-10 font-bold block text-white focus:text-red-500'>Home</a>
                <a href='#about' className='md:mr-10 font-bold block text-white focus:text-red-500'>About</a>
                <a href='#contact' className='md:mr-10 font-bold block text-white focus:text-red-500'>Contact</a>
                <a href='#service' className='md:mr-10 font-bold block text-white focus:text-red-500'>Service</a>
                <a href='#project' className='md:mr-10 font-bold block text-white focus:text-red-500'>Project</a>
            </ul>
        </div>
    );
};

export default Header; 