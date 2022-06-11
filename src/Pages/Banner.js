import React from 'react';


const Banner = () => {
    
    return (
        <div className='flex justify-between items-center bg-slate-700 p-5'>
           <div className='w-2/4'>
           <img className='' src='https://cdni.iconscout.com/illustration/premium/thumb/male-developer-doing-coding-5151943-4309537.png' alt="" />
           </div>
            <div className='w-2/4  mt-10'>
                <h1 className='text-4xl text font-bold'>Hi</h1>
                <h1 className='text-slate-300 font-bold'>I'm  Shamim Islam</h1>
                <h3  className='text-2xl font-bold text-slate-300'><span className='text'>MERN</span> Stack Developer</h3>
            </div>
        </div>
    );
};

export default Banner;