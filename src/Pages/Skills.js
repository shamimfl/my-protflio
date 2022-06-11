import React from 'react';
import Skil from './Skil';

const Skills = () => {
    return (
        <div id='service' className='p-2'>
            <h1 className='text-center text-xl font-bold mt-20 text-slate-300'>What i Do ?</h1>
            <h1 className='text-center font-semibold underline uppercase text mb-10'>Service</h1>
            <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-20'>
                <div className='p-5 bg-slate-700 rounded-md Shadow'>
                    <span className='flex items-center justify-between'>
                        <img className='h-24 w-24' src="https://www.hexamarvel.com/wp-content/themes/hexamarvel/assets/images/services-common/technology/redis.svg" alt="" />
                        <h2 className='text-slate-300 font-semibold'>MERN Stack Development</h2>
                    </span>
                    <p className='text-slate-300 mt-3 font-semibold'>I have enough skill about MongoDB, React, Express,  Node. I can make your website to your needs</p>
                </div>
                <div className='p-5 bg-slate-700 rounded-md Shadow'>
                    <span className='flex items-center justify-between'>
                        <img className='h-24 w-24' src="https://symphony-solutions.com/wp-content/uploads/sites/5/2019/07/backend-development-icon.svg" alt="" />
                        <h2 className='text-slate-300 font-semibold'>Backend Development</h2>
                    </span>
                    <p className='text-slate-300 mt-3 font-semibold'>I am comfortable to Backend Development.i use to Backend development. Node js, Mongodb, Express</p>
                </div>
                <div className='p-5 bg-slate-700 rounded-md Shadow'>
                    <span className='flex items-center justify-between'>
                        <img className='h-24 w-24' src="https://miro.medium.com/max/1084/1*1-VpQLVKsDSoAnh0_gjihg.png" alt="" />
                        <h2 className='text-slate-300 font-semibold'>Backend Development</h2>
                    </span>
                    <p className='text-slate-300 font-semibold mt-3'>I am comfortable to Frontend Development.i use to Frontnd development. HTMl, CSS, Tailwind, Bootstrap, React, Javascript</p>
                </div>
                <div className='p-5 bg-slate-700 rounded-md Shadow'>
                    <span className='flex items-center justify-between'>
                        <img className='h-24 w-24' src="https://images.vexels.com/media/users/3/131493/isolated/lists/78bc6071bf1a8a024005fa25fd844189-molecule-icon.png" alt="" />
                        <h2 className='text-slate-300 font-semibold'>Backend Development</h2>
                    </span>
                    <p className='text-slate-300 font-semibold  mt-3'>I am comfortable to React Development.</p>
                </div>
                <div className='p-5 bg-slate-700 rounded-md Shadow'>
                    <span className='flex items-center justify-between'>
                        <img className='h-24 w-24' src="https://icon-library.com/images/javascript-icon/javascript-icon-17.jpg" alt="" />
                        <h2 className='text-slate-300 font-semibold'>JavaScript Development</h2>
                    </span>
                    <p className='text-slate-300 font-semibold mt-3'>I am comfortable to JavaScript Development. I can problem Solving with javascript.</p>
                </div>
                <div className='p-5 bg-slate-700 rounded-md Shadow'>
                    <span className='flex items-center justify-between text-end'>
                        <img className='h-24 w-24' src="https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/android-2-icon-14-256.png" alt="" />
                        <h2 className='text-slate-300 font-semibold'>React Native  Development</h2>
                    </span>
                    <p className='text-slate-300  mt-3 font-semibold'>I am Familiar to React Native DevelopMent.</p>
                </div>
            </section>
            <Skil></Skil>
        </div>
    );
};

export default Skills;