import React from 'react';

const Question = () => {
    return (
        <div className="products bg-nav-color col-span-7 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-7 lg:p-20 text-white">
            <div className=' shadow-2xl rounded-lg relative bg-item-color  border border-slate-800'>
                <div className='p-4  '>
                    <p className='text-2xl font-bold mb-2'>How Does React Works</p>
                    <div className='bg-main-color p-2 rounded text-slate-300 flex flex-col gap-3 '>
                        <p>At its very core, React basically maintains a tree for you. React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>

                        <p className='text-lg font-bold text-slate-200'>JSX is syntactic sugar</p>
                        <p>JSX has full power of Javascript and we can write html as well.Babel compiler compiles jsx into Javascript object.</p>

                        <p className='text-lg font-bold text-slate-200'>React Renderer</p>
                        <p>React DOM renders the Javascript component App. App is huge Javascript object</p>

                        <p className='text-lg font-bold text-slate-200'>React Reconciliation</p>
                        <p>With diff algorithm React compare the current dom and previous dom in case of changing state and updates the dom. This process called reconciliation</p>
                    </div>
                </div>
            </div>
            <div className=' shadow-2xl rounded-lg relative bg-item-color  border border-slate-800'>
                <div className='p-4  '>
                    <p className='text-2xl font-bold mb-2'>Differences between props and state</p>
                    <div className='bg-main-color p-2 rounded text-slate-300 flex flex-col gap-3 '>
                        <p className='text-lg font-bold text-slate-200'>Props</p>
                        <p>The Data is passed from one component to another is called props</p>
                        <p>Props is Immutable (cannot be modified).</p>
                        <p>Props can be used with state and functional components.</p>
                        <p className='mb-3'>Props are read-only.</p>

                        <p className='text-lg font-bold text-slate-200'>State</p>
                        <p>The Data is passed within the component only is called state</p>
                        <p>State is Mutable ( can be modified).</p>
                        <p>State can be used only with the state components/class component .</p>
                        <p>State is both read and write.</p>
                    </div>
                </div>
            </div>
            
            <div className=' shadow-2xl rounded-lg relative bg-item-color  border border-slate-800'>
                <div className='p-4  '>
                    <p className='text-2xl font-bold mb-2'>What are the uses of useEffect</p>
                    <div className='bg-main-color p-2 rounded text-slate-300 flex flex-col gap-2 '>
                        <p>The useEffect Hook allows you to perform side effects in your components.</p>

                        <p>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>

                        <p>useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</p>
                        <p>We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>
                        <p>Some effects require cleanup to reduce memory leaks.</p>
                        <p>Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.</p>
                        <p>We do this by including a return function at the end of the useEffect Hook.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Question;