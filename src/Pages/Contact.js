import React from 'react';

const Contact = () => {
    return (
        <section className='p-10 lg:flex justify-around items-center'>
            <div>
                <img src="https://i.ibb.co/Tmj9sbd/705-7055276-creative-web-design-web-design-vector-png-transparent-removebg-preview.png" alt="705-7055276-creative-web-design-web-design-vector-png-transparent-removebg-preview" border="0" />
            </div>
            <div className='lg:w-2/4'>
                <h1 className='text-xl font-bold text-slate-300 mb-5'>Contact With me</h1>
                <form>
                    <input placeholder='Enter Your Name' className='text-slate-100 font-bold w-full p-3 shadow-inner shadow-black bg-slate-800 focus:outline-none rounded-md ' type="text" name="name" id="" />
                    <input placeholder='Enter Your Email' className='text-slate-100 mt-5 font-bold w-full p-3 shadow-inner shadow-black bg-slate-800 focus:outline-none rounded-md ' type="email" name="email" id="" />
                    <textarea name="" id="" cols="" placeholder='Write Message' rows="5" className='w-full bg-slate-800 mt-5 focus:outline-none shadow-inner shadow-slate-900 font-bold p-4 rounded-md text-slate-100'></textarea>
                    <div  className='flex justify-center mt-5'>
                    <input type="submit" value="send" className='text-slate-400 bg-slate-600 Shadow w-2/4 py-2 rounded-md  font-bold'  />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;