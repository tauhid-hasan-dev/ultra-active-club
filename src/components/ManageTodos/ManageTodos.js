import React from 'react';
import Break from '../Break/Break';

const ManageTodos = (props) => {
    const {breaktime, cart, handleBreak, takenBreak} = props;
    console.log(takenBreak);
    
    let totalTime = 0;
    let totalTodos = 0;
    for(const todo of cart){             
        totalTodos = totalTodos + todo.quantity 
        totalTime = totalTime + (todo.time * todo.quantity)  ;
    }
    
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
                        <p > <span className='text-3xl font-semibold'>5.8</span> <span className='font-semibold text-slate-600'></span> </p>
                        <p className='text-slate-500 font-semibold'>Height</p>
                    </div>
                    <div className='flex justify-center flex-col' >
                        <p > <span className='text-3xl font-semibold'>75</span> <span className='font-semibold text-slate-600'>yrs</span> </p>
                        <p className='text-slate-500 font-semibold'>Age</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <p className='text-2xl font-bold'>Add a Break</p>
                        </div>
                        <div className='flex items-center bg-main-color px-5 lg:px-10 py-4 lg:py-5 rounded-2xl justify-between'>
                            <div className='flex justify-between item-center gap-2 lg:gap-3' >
                                {
                                    breaktime.map(time => <Break id={time.id} time = {time.break} key={time.id} handleBreak={handleBreak} ></Break>) 
                                }
                            </div>
                        </div>
                    </div>
                </div>

               <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-2xl font-bold'>Activity Details</p>
                    </div>
                    <div className='flex items-center bg-main-color px-10 py-5 rounded-2xl justify-between'>
                        <div className='flex justify-between item-center br-red-500' >
                            <p > <span className='text-2xl '>Activity Time</span> </p>
                        </div>
                        <div>
                            <p > <span className='text-slate-300 text-2xl font-bold'>{totalTime} </span> <span className='font-semibold text-slate-600'>hrs</span> </p>
                        </div>
                    </div>
                    <div className='flex items-center bg-main-color px-10 py-5 rounded-2xl justify-between'>
                        <div className='flex justify-between item-center br-red-500' >
                            <p > <span className='text-2xl '>Break Time</span> </p>
                        </div>
                        <div>
                            <p ><span className='text-slate-300 text-2xl'>{takenBreak}</span> <span className='text-slate-500 ' > min</span></p>
                        </div>
                    </div>
               </div>
               <div >
               <button  className="bg-cart-btn-color hover:bg-cyan-500 text-black py-4 px-4 rounded-lg  bottom-0 w-full flex items-center justify-center gap-3">
                <p className='font-semibold text-2xl text-slate-100'>Activity Completed</p>
            </button>
               </div>
                
            </div>
        </div>
    );
};

export default ManageTodos;