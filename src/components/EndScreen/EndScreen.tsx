import React, {useEffect, useState} from 'react'
import classes from './EndScreen.module.css'
import Item from "../Item/Item"

type Props = {
    setIsEnd: React.Dispatch<boolean>
    count: number,
    setCount: React.Dispatch<number>
}
const EndScreen = ({setIsEnd, setCount, count}: Props) => {
    const [result, setResult] = useState('')
    useEffect(() => {
        const userValue = localStorage.getItem('userValue')
        const computerValue = localStorage.getItem('computerValue')
        const count = +localStorage.getItem('count')!
        if (userValue === computerValue) {
            setResult('Ничья')
            return
        }
        if (userValue === 'rock') {
            if (computerValue === 'paper') {
                setResult('Вы проиграли')
                setCount(count - 1)
            }
            if (computerValue === 'scissors') {
                setResult('Вы выиграли')
                setCount(count + 1)
            }
            setIsEnd(true)
            return
        }
        if (userValue === 'paper') {
            if (computerValue === 'rock') {
                setResult('Вы выиграли')
                setCount(count + 1)

            }
            if (computerValue === 'scissors') {
                setResult('Вы проиграли')
                setCount(count - 1)
            }
            return
        }
        if (userValue === 'scissors') {
            if (computerValue === 'paper') {
                setResult('Вы выиграли')
                setCount(count + 1)
            }
            if (computerValue === 'rock') {
                setResult('Вы проиграли')
                setCount(count - 1)
            }
            return
        }
    }, [localStorage.getItem('userValue'), localStorage.getItem('computerValue')])
    return (
        <div className={classes.container}>
            <div className={classes.column}>
                <p>Вы выбрали</p>
                <Item id={1} name={localStorage.getItem('userValue')!} color={'#054cff'} isWin={result === 'Вы выиграли'}/>
            </div>
            <div className={classes.column}>
                <p>{result}</p>
                <button onClick={() => setIsEnd(false)}>Играть снова</button>
            </div>
            <div className={classes.column}>
                <p>Компьютер выбрал</p>
                <Item id={1} name={localStorage.getItem('computerValue')!} color={'#ee3030'} isWin={result === 'Вы проиграли'}/>
            </div>

        </div>
    )
}

export default EndScreen