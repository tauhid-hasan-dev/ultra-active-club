import React from 'react';

const Break = (props) => {
    const {time, handleBreak, id} = props;
    return (
        <p   onClick={()=> handleBreak(id)} className='bg-item-color hover:bg-cyan-900 rounded-full p-1 lg:p-2  cursor-pointer '> <span className='font-bold' >{time} </span> <span className='text-slate-500 '>min</span> </p> 
    );
};

export default Break;