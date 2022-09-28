import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='flex bg-nav-color border-b border-slate-800 text-cyan-500 items-center px-20 py-10'>
            <div className='text-2xl lg:text-5xl mr-3 lg:mr-5'>
            <FontAwesomeIcon icon={faRectangleList} ></FontAwesomeIcon>
            </div>
            
            <h1 className='text-2xl lg:text-5xl font-bold '>.tasan-todo-app</h1>
        </div>
    );
};

export default Navbar;