import React from 'react';

const AboutMe = () => {
    return (
        <div id='about' className='lg:flex justify-between p-5'>
            <div className='lg:w-2/4 font-semibold mt-20 text-white bg-slate-700 p-5 rounded-lg'>
                <h1 className='text-2xl font-bold mb-5 text-slate-300'>About Me </h1>
                <p className='text-slate-300'>Hello I'm Shamim  . i am  MERN stack developer And i can build website as you want. I can build website single page web Application now i am available to work.</p>

                <h1 className='text-slate-300  mt-10 mb-5 uppercase'>Find me</h1>
                <div className='flex'>
                <img className='h-10 w-10 p-2 bg-slate-600 rounded Shadow' src="https://img.icons8.com/fluency/96/facebook-new.png" alt="" />
                <img className='ml-5 h-10 w-10 p-2 bg-slate-600 rounded Shadow' src="https://img.icons8.com/fluency/96/linkedin-2.png" alt="" />
                <img className='ml-5 h-10 w-10 p-2 bg-slate-600 rounded Shadow' src="https://img.icons8.com/fluency/96/github.png" alt="" />

                </div>
                <button className='bg-s Shadow border-0  text-slate-100 font-bold mt-10 px-6 py-2 rounded hover:bg-yellow-400 btn'>My Resume</button>
            </div>
            <div>
                <div className=''>
                    <img className='' src="https://cdni.iconscout.com/illustration/premium/thumb/female-freelancer-working-on-project-3839583-3202977.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutMe;