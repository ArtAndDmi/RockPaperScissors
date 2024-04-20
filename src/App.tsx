import React, {useEffect, useState} from 'react'
import './App.css'
import Game from "./components/Game/Game"
import Header from "./components/Header/Header"
import Rules from "./components/Rules/Rules"

function App() {
    const [count, setCount] = useState(+localStorage.getItem('count')! || 0)
    useEffect(() => {
        if (!localStorage.getItem('count')) {
            localStorage.setItem('count', '0')
        } else {
            localStorage.setItem('count', `${count}`)
        }
    }, [count])
    return (
        <div className='app'>
            <Header count={count}/>
            <Game count={count} setCount={setCount}/>
            <Rules/>
        </div>
    )
}

export default App
