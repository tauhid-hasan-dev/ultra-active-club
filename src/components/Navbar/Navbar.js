import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='flex bg-slate-800 text-white items-center px-20 py-10'>
            <div className='text-5xl mr-5'>
            <FontAwesomeIcon icon={faRectangleList} ></FontAwesomeIcon>
            </div>
            
            <h1 className='text-5xl font-bold '>.tasan-todo-app</h1>
        </div>
    );
};

export default Navbar;