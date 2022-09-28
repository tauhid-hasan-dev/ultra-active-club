import React from 'react';

const ManageTodos = () => {
    return (
        <div className='bg-item-color sticky top-0 text-white'>
            <div className='flex flex-col gap-10 sticky top-0 p-10 '>
                <div className='flex items-center'>
                    <img className='w-12 h-12 rounded-full mr-3' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                    <div>
                        <p className='text-2xl font-semibold'>Tauhid Hasan</p>
                        <p className='text-slate-500 font-semibold'>Istanbul, Turkey</p>
                    </div>
                </div>
                <div className='flex items-center bg-main-color px-10 py-5 rounded-2xl justify-between'>
                    <div className='flex justify-center flex-col' >
                        <p > <span className='text-3xl font-semibold'>72</span> <span className='font-semibold text-slate-600'>kg</span> </p>
                        <p className='text-slate-500 font-semibold'>Weight</p>
                    </div>
                    <div className='flex justify-center flex-col' >
                        <p > <span className='text-3xl font-semibold'>5.8</span> <span className='font-semibold text-slate-600'>kg</span> </p>
                        <p className='text-slate-500 font-semibold'>Height</p>
                    </div>
                    <div className='flex justify-center flex-col' >
                        <p > <span className='text-3xl font-semibold'>75</span> <span className='font-semibold text-slate-600'>yrs</span> </p>
                        <p className='text-slate-500 font-semibold'>Age</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ManageTodos;