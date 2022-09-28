import React from 'react';


const Todos = (props) => {
    const {todo} = props;
    const {picture, name, time, weekday,about} = todo;
    return (
        <div className=' border-[1px] rounded-lg relative bg-slate-900'>
            <div className='p-3'>
                <img src={picture} alt=""  className='rounded'/>
                <div className='flex flex-col pt-3  h-52 '>
                    <div >
                        <p className='font-semibold text-2xl'>{name}</p>
                        <p> {about}</p>
                    </div>
                    <div className='mt-8'>
                        <p>{weekday} </p>
                        <p>Total Time: {time} hrs</p>
                    </div>
                </div>
            </div>
            <button  className="bg-btn-color hover:bg-orange-400 text-black py-3 px-4 rounded-b absolute bottom-0 w-full flex items-center justify-center gap-3">
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Todos;