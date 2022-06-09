import React from 'react';

const AboutMe = () => {
    return (
        <div  className='lg:flex justify-between p-5'>
            <div>
                <div className='bg-slate-700 w-80 text-white font-semibold bg-black p-2 mt-14 rounded-lg shadow-lg shadow-black z-50 block relative'>
                    <h1>Name</h1>
                    <h1 className='mb-2'>MD: Shamim Islam</h1>

                    <h1>BrithDay :</h1>
                    <h1 className='mb-5'>19 December / 2004</h1>

                  <div className='mb-5'>
                  <h1>Phone & Email</h1>
                    <div className='flex items-center  font-semibold'>
                        <span> 01867585183</span>
                    </div>
                    <div className='flex items-center font-bold'>
                        <span>mdshamimislam3069@gmail.com</span>
                    </div>
                  </div>
                    <div>
                        <h1>Address</h1>
                        <h1>Abdullahpur ,  Dhaka</h1>
                    </div>
                    <div className='mt-5'>
                        Nationality:
                        <p>Bangladesh</p>
                    </div>
                </div>
                <div className='h-96 w-[21rem] lg:w-96  bg absolute top-[28rem] lg:top-[45rem] z-10 rounded-2xl'>

                </div>
            </div>
            <div className='lg:w-2/4 font-semibold mt-20 text-white bg-slate-700 p-5 rounded-lg'>
                <h1 className='text-2xl font-bold mb-5 text'>About Me </h1>
                <p>Hello I'm Shamim  . i am vary intersting working as MERN stack developer</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis perspiciatis nostrum ullam nulla est porro! Provident tempora suscipit aliquam magni.</p>

                <h1 className='text-xl text font-bold mt-10 mb-5'>Contact With Me </h1>
                <div className='flex'>
                <img className='h-10 w-10' src="https://img.icons8.com/fluency/96/facebook-new.png" alt="" />
                <img className='ml-5 h-10 w-10' src="https://img.icons8.com/fluency/96/instagram-new.png" alt="" />
                <img className='ml-5 h-10 w-10' src="https://img.icons8.com/fluency/96/twitter.png" alt="" />
                <img className='ml-5 h-10 w-10' src="https://img.icons8.com/fluency/96/youtube-play.png" alt="" />
                </div>
                <button className='bg text-white font-bold mt-10 px-6 py-2 rounded-lg hover:bg-green-400'>Download MY CV</button>
            </div>
        </div>
    );
};

export default AboutMe;