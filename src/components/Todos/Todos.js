import React from 'react';


const Todos = (props) => {
    const {todo} = props;
    const {picture, name, time, weekday,about} = todo;
    return (
        <div className=' shadow-2xl rounded-lg relative bg-item-color  border border-slate-800'>
            <div className='p-4'>
                <img src={picture} alt=""  className='rounded'/>
                <div className='flex flex-col pt-3  h-52 '>
                    <div >
                        <p className='font-semibold text-2xl'>{name}</p>
                        <p className='text-slate-500'> {about}</p>
                    </div>
                    <div className='mt-8'>
                        <p className='text-slate-500'>{weekday} </p>
                        <p>Total Time: <span className='font-bold'>{time}</span>  hrs</p>
                    </div>
                </div>
            </div>
            <button  className="bg-cart-btn-color hover:bg-cyan-500 text-black py-3 px-4 rounded-b absolute bottom-0 w-full flex items-center justify-center gap-3">
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Todos;