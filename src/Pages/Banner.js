import React from 'react';
import banner from './img.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center bg-slate-700 p-5'>
           <div className='lg:w-2/4'>
           <img className='' src={banner} alt="" />
           </div>
            <div className='w-full mt-10'>
                <h1 className='text-4xl text font-bold'>Hi</h1>
                <h1 className='text-white font-bold'>I'm  Shamim Islam</h1>
                <h3 className='text-2xl font-bold text-white'><span className='text'>MERN</span> Stack Developer</h3>
            </div>
        </div>
    );
};

export default Banner;