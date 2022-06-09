import React, { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className='md:flex justify-between items-center bg-black sticky top-0 z-[44444444444444444444]'>

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
            <ul className={`md:flex justify-end absolute p-5 md:static bg-black w-full duration-500 ease-in ${open ? 'top-20': 'top-[-520px]'}`}>
                <li className='md:mr-10 font-bold text-white focus:text-red-500'>Home</li>
                <li className='md:mr-10 font-bold text-white focus:text-red-500'>About</li>
                <li className='md:mr-10 font-bold text-white focus:text-red-500'>Contact</li>
                <li className='md:mr-10 font-bold text-white focus:text-red-500'>Service</li>
                <li className='md:mr-10 font-bold text-white focus:text-red-500'>Portfolio</li>
            </ul>
        </div>
    );
};

export default Header;