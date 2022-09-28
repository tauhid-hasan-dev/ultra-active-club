import React from 'react';

import ManageTodos from '../ManageTodos/ManageTodos';
import Todos from '../Todos/Todos';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='grid grid-cols-5'>
                <div className="products bg-red-500 col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-20 ">
                    <Todos></Todos>
                </div>
                <div className="products bg-lime-500">
                    <ManageTodos></ManageTodos>
                </div>
            </div>
            
        </div>
        
    );
};

export default Main;