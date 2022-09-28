import React, { useEffect, useState } from 'react';

import ManageTodos from '../ManageTodos/ManageTodos';
import Todos from '../Todos/Todos';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [breaktime, setBreakTime] = useState([]);
    const [cart, setCart] = useState([])
    const [takenBreak, setTakenBreak] = useState(0);
 
    
    
    const handleBreak = (id)=>{
         const selected = breaktime.find(p => p.id === id);
         console.log(selected);
         setTakenBreak(selected.break);
    }


    const handleAddtoList = (todo) =>{
        const selected = cart.find(p => p.id === todo.id);
        const rest = cart.filter(p => p.id !== todo.id);
        let newCart;
        if(!selected){
            todo.quantity = 1;
            newCart = [...cart, todo]
        }else{
            selected.quantity = selected.quantity + 1;
            newCart = [...rest, selected ]
        }
        setCart(newCart) 
    }

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
                        todos.map(todo =>  <Todos todo={todo} key={todo.id} handleAddtoList ={handleAddtoList}></Todos>)
                    }
                </div>
                <div className="products bg-item-color border-l border-slate-800 col-span-7 lg:col-span-2 ">
                    <ManageTodos takenBreak={takenBreak} breaktime ={breaktime} key={breaktime.id} cart={cart} handleBreak={handleBreak}> </ManageTodos>
                </div>
            </div>
            
        </div>
        
    );
};

export default Main;