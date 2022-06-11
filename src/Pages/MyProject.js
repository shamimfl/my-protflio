import React, { useState } from 'react';

const MyProject = () => {

    const [project, setProject] = useState([])
    const [detail, setdetail] = useState([])
    fetch('project.json')
        .then(res => res.json())
        .then(data => setProject(data))
    const details = e => {
        setdetail(e)
    }
    return (
        <div id='project' className='p-5 '>
            <h1 className='text-xl font-bold text-slate-300 text-center mt-10 mb-10'>My Full Stack Project</h1>
            <div className='grid lg:grid-cols-3 gap-20'>
                {
                    project.map(project =>
                        <div className='bg-slate-700 shadow-current rounded-lg Shadow p-5 '>
                            <div className="h-80 overflow-scroll">
                                <img className='rounded-lg' src={project?.img} alt="" />
                            </div>
                            <div className='flex justify-between mt-5'>
                                <label onClick={() => details(project)} for="my-modal-3" className=' px-3 py-1 rounded bg text-slate-200 font-bold Shadow'>Details</label>
                                <h1 className='font-bold text-green-300'>{project?.name}</h1>
                            </div>
                        </div>)
                }
            </div>

            {/* // */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative bg-white">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2 bg-red-400 z-50">✕</label>
                    <div className="h-60  overflow-scroll">
                        <img  src={detail?.img} alt="" />
                    </div>
                    <p className='text-slate-700 mt-3 font-semibold'>{detail.desc}</p>
                    <span className='flex justify-between mt-5'>
                        <a href={detail.gits} className='flex justify-center items-center bg-s Shadow border-0  text-slate-100 font-bold mt-10 px-3 py-1 bg-slate-700 rounded hover:bg-yellow-400 btn'><img className='h-5 w-5' src="https://img.icons8.com/fluency/96/github.png" alt="" /> <p>Server</p></a>
                        <a href={detail.gitc} className='flex justify-center items-center bg-s Shadow border-0  text-slate-100 font-bold mt-10 px-3 py-1 bg-slate-700 rounded hover:bg-yellow-400 btn'><img className='h-5 w-5' src="https://img.icons8.com/fluency/96/github.png" alt="" /> <p>client</p></a>
                        <a href={detail.live} className='flex justify-center items-center bg-s Shadow border-0  text-slate-100 font-bold mt-10 px-3 py-1 bg-slate-700 rounded hover:bg-yellow-400 btn'><img className='h-5 w-5' src="https://img.icons8.com/fluency/96/live-photos.png" alt="" /> <p>Demo</p></a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MyProject;