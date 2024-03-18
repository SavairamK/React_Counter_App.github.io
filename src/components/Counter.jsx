import React from 'react'
import {useState} from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1)
    }
    return (
        <>
            <div className='container my-5 text-center'>
                <h1 className='header'>Counter App Using React</h1>

                <div className='my-5'>
                    <button className='my-3 btn btn-success' onClick={incrementCount}>Click here to Increment</button>
                    <h1 className='counter'>{count}</h1>
                    <button className='my-3 btn btn-danger' onClick={decrementCount}>Click here to Decrement</button>
                </div>
             </div>
        </>
    )
};

export default Counter;