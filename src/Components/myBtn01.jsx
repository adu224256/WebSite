import React from 'react'
import { useState } from 'react'

function MyBtn01() {
    const [count, setCount] = useState(0);
    const myFun = () => setCount(count+1);
    return (
        <div>
            <button onClick={myFun}>count is {count}</button>
        </div>
    )
}

export default MyBtn01