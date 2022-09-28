import React from 'react';
import ManageTodos from '../ManageTodos/ManageTodos';
import Todos from '../Todos/Todos';

const Main = () => {
    return (
        <div>
            <div>
                <Todos></Todos>
            </div>
            <div>
                <ManageTodos></ManageTodos>
            </div>
        </div>
        
    );
};

export default Main;