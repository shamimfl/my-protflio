import React from 'react';

const Bakend = () => {
    return (
        <div className='p-10'>
            <h1 className='text-xl font-bold text-slate-300 mt-20'>For Bakend</h1>

            <div className='flex justify-center'>
                <div className='flex justify-between mt-10 bg-slate-700 rounded-xl  lg:w-2/4  p-2 pb-10'>
                    <div className='h-40 '>
                        <div className='bg-white h-[25%] rounded-t-3xl w-2 ml-6'></div>
                        <div className='bg h-[75%] w-2 rounded-b-3xl ml-6'>
                            <div className='ml-3 font-bold text'>75%</div>
                        </div>
                        <p className='text-slate-300 font-bold'>Node js</p>
                    </div>
                    <div className='h-40 '>
                        <div className='bg-white h-[20%] rounded-t-3xl w-2 ml-6'></div>
                        <div className='bg h-[80%] w-2 rounded-b-3xl ml-6'>
                            <div className='ml-3 font-bold text'>80%</div>
                        </div>
                        <p className='text-slate-300 font-bold'>MongoDB</p>

                    </div>
                    <div className='h-40 '>
                        <div className='bg-white h-[20%] rounded-t-3xl w-2 ml-5'></div>
                        <div className='bg h-[80%] w-2 rounded-b-3xl ml-5'>
                            <div className='ml-3 font-bold text'>80%</div>
                        </div>
                        <p className='text-slate-300 font-bold'>Express js</p>
                    </div>
                </div>




                <div className='lg:w-2/4'>
                    <h1 className='text-xl font-bold text-slate-300 mt-10'>Familiar</h1>
                    <span>
                        <img src="https://img.icons8.com/color/96/typescript.png" alt="" />
                        <p>Type-Script</p>
                    </span>
                    <span>
                        <img src="https://img.icons8.com/color/96/javascript--v1.png" alt="" />
                        <p>Next js</p>
                    </span>
                </div>
            </div>
            {/* // */}
            <h1 className='text-xl font-bold text-slate-300 mt-20'>Tools</h1>
            <div className='grid lg:grid-cols-2 gap-20 mt-20'>
                <div className='flex justify-between w-full bg-slate-700 p-5 rounded-2xl'>
                    <span>
                        <img className='h-14 w-14' src="https://img.icons8.com/fluency/96/github.png" alt="" />
                        <p className='mt-5 text-xl font-bold text-slate-300'>GitHub</p>
                    </span>
                    <span>
                        <img className='h-14 w-14' src="https://img.icons8.com/fluency/96/merge-git.png" alt="" />
                        <p className='mt-5 text-xl font-bold text-slate-300'>Git</p>
                    </span>
                    <span>
                        <img className='h-14 w-14' src="https://img.icons8.com/fluency/96/visual-studio-code-2019.png" alt="" />
                        <p className='mt-5 text-xl font-bold text-slate-300'>VS Code</p>
                    </span>
                </div>


                <div className='flex justify-between bg-slate-700 w-full p-5  rounded-2xl'>
                    <div>
                        <img className='h-14 w-14' src="https://img.icons8.com/fluency/96/roku.png" alt="" />
                        <p className='mt-5 text-xl font-bold text-slate-300'>Heroku</p>
                    </div>
                    <span>
                        <img className='h-14 w-14' src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="" />
                        <p className='mt-5 text-xl font-bold text-slate-300'>Netlify</p>
                    </span>
                    <div>
                        <img className='h-14 w-14' src="https://img.icons8.com/color/96/firebase.png" alt="" />
                        <p className='mt-5 text-xl font-bold text-slate-300'>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bakend;