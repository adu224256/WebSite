import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import MyBtn01 from '../Components/myBtn01.jsx'

function Home() {
    const myAry = [3, 10, 6, 35];
    const [count, setCount] = useState(0);
    const myFun = () => setCount(count+1);
  return (
    <div className='APP'>
        <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <MyBtn01 />
            <MyBtn01 />
            <MyBtn01 />
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
        <ol>
            {myAry.map((ele,idx)=>(
            <li>{ele}</li>
            ))}
        </ol>
  </div>
  )
}

export default Home
