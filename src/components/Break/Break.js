import React from 'react';

const Break = (props) => {
    const {time} = props;
    return (
        <p className='bg-item-color rounded-full p-1 lg:p-3'> <span className='font-bold' >{time} </span> <span className='text-slate-500 '>min</span> </p> 
    );
};

export default Break;