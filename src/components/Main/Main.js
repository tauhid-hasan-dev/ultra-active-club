import React, { useEffect, useState } from 'react';

import ManageTodos from '../ManageTodos/ManageTodos';
import Todos from '../Todos/Todos';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [breaktime, setBreakTime] = useState([])
    //console.log(breaktime);

    const loadTodosData = async()=>{
        const res = await fetch('data.json');
        const data = await res.json();
        setTodos(data);
    }


    const loadBreakData = async()=>{
        const res = await fetch('break.json');
        const data = await res.json();
        setBreakTime(data);
    }
   

    useEffect(()=>{
        loadTodosData()
    },[])

    useEffect(()=>{
        loadBreakData()
    },[])


    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='grid grid-cols-7 '>
                <div className="products bg-main-color col-span-7 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-7 lg:p-20 text-white">
                    {
                        todos.map(todo =>  <Todos todo={todo} key={todo.id}></Todos>)
                    }
                </div>
                <div className="products bg-item-color border-l border-slate-800 col-span-7 lg:col-span-2 ">
                    <ManageTodos breaktime ={breaktime} key={breaktime.id}></ManageTodos>
                </div>
            </div>
            
        </div>
        
    );
};

export default Main;