import React from 'react';

const Skills = () => {
    return (
        <div className='mt-5 p-5'>
            <h1 className='text-3xl text text-center font-bold mb-10'>MY SKILLS</h1>

        <h1 className='text text-xl font-bold mb-4'>For Forntent Development</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
      <div className=''>
                <div className='bg-slate-700 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <div className=' text w-28 p-1 rounded-2xl text-center font-bold'>HTML</div>
                        <div className='bg text-white w-28 p-1 rounded-2xl text-center'>90%</div>
                    </div>
                    <div className='flex mt-3 '>
                        <div className='h-2 bg   tooltip tooltip-openbg rounded-l-lg w-[90%]' data-tip="90%" ></div>
                        <div className='h-2  bg-white rounded-r-lg w-[10%]'></div>
                    </div>
                </div>
            </div>


            <div className=''>
            <div className='bg-slate-700 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <div className=' text w-28 p-1 rounded-2xl text-center font-bold'>CSS</div>
                        <div className='bg text-white w-28 p-1 rounded-2xl text-center'>75%</div>
                    </div>
                    <div className='flex mt-3 '>
                        <div className='h-2 bg   rounded-l-lg w-[75%]' ></div>
                        <div className='h-2  bg-white rounded-r-lg w-[25%]'></div>
                    </div>
                </div>
            </div>


            <div className='mt-5'>
            <div className='bg-slate-700 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <div className=' text w-28 p-1 rounded-2xl text-center font-bold'>Tailwind</div>
                        <div className='bg text-white w-28 p-1 rounded-2xl text-center'>90%</div>
                    </div>
                    <div className='flex mt-3'>
                        <div className='h-2 bg   rounded-l-lg w-[90%]' ></div>
                        <div className='h-2  bg-white rounded-r-lg w-[10%]'></div>
                    </div>
                </div>
            </div>


            <div className='mt-5'>
            <div className='bg-slate-700 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <div className='text w-28 p-1 rounded-2xl text-center font-bold'>Bootstrap</div>
                        <div className='bg text-white w-28 p-1 rounded-2xl text-center'>80%</div>
                    </div>
                    <div className='flex mt-3'>
                        <div className='h-2 bg   rounded-l-lg w-[80%]' ></div>
                        <div className='h-2  bg-white rounded-r-lg w-[20%]'></div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
            <div className='bg-slate-700 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <div className=' text w-28 p-1 rounded-2xl text-center font-bold'>JavaScript</div>
                        <div className='bg text-white w-28 p-1 rounded-2xl text-center'>60%</div>
                    </div>
                    <div className='flex mt-3'>
                        <div className='h-2 bg   rounded-l-lg w-[60%]' ></div>
                        <div className='h-2  bg-white rounded-r-lg w-[40%]'></div>
                    </div>
                </div >
            </div>

            <div className='mt-5'>
            <div className='bg-slate-700 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <div className=' text w-28 p-1 rounded-2xl text-center font-bold'>React</div>
                        <div className='bg text-white w-28 p-1 rounded-2xl text-center'>60%</div>
                    </div>
                    <div className='flex mt-3'>
                        <div className='h-2 bg   rounded-l-lg w-[60%]' ></div>
                        <div className='h-2  bg-white rounded-r-lg w-[40%]'></div>
                    </div>
                </div >
            </div>

      </div>

        </div>
    );
};

export default Skills;