import React, { useEffect, useState } from 'react';

import ManageTodos from '../ManageTodos/ManageTodos';
import Todos from '../Todos/Todos';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    const [todos, setTodos] = useState([]);
    const loadData = async()=>{
        const res = await fetch('data.json');
        const data = await res.json();
        setTodos(data);
    }
    console.log(todos)

    useEffect(()=>{
        loadData()
    },[])

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='grid grid-cols-5 '>
                <div className="products bg-main-color col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-10 lg:p-20 text-white">
                    {
                        todos.map(todo =>  <Todos todo={todo}></Todos>)
                    }
                </div>
                <div className="products bg-slate-900 col-span-5 lg:col-span-1">
                    <ManageTodos></ManageTodos>
                </div>
            </div>
            
        </div>
        
    );
};

export default Main;