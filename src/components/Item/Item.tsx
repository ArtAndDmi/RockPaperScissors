import React from 'react'
import classes from './Item.module.css'
import Scissors from "../../assests/Scissors"
import Rock from "../../assests/Rock"
import Paper from "../../assests/Paper"

type Props = {
    color?: string,
    id: number,
    name: string,
    setIsEnd?: React.Dispatch<boolean>,
    isWin?: boolean
}

const Item = ({color = '#f00', name, setIsEnd = () => {}, isWin = false}: Props) => {
    const items = ['rock', 'paper', 'scissors']
    let rootStyles = classes.border
    if (isWin) {
        rootStyles = [classes.border, classes.win].join(' ')
    }
    const playGame = () => {
        const item = items[(Math.floor(Math.random() * 3))]
        localStorage.setItem('computerValue', item)
        localStorage.setItem('userValue', name)
        setIsEnd(true)
    }
    return (
        <div className={classes.wrapper}>
            <div className={rootStyles} style={{background: color}} onClick={playGame}>
                <div className={classes.container}>
                    {name === 'scissors' && <Scissors/>}
                    {name === 'rock' && <Rock/>}
                    {name === 'paper' && <Paper/>}
                </div>
            </div>
        </div>

    )
}

export default Item