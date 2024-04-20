import React, {useState} from 'react'
import classes from './Game.module.css'
import Item from "../Item/Item"
import EndScreen from "../EndScreen/EndScreen"
import Triangle from "../../assests/Triangle"

type Props = {
    count: number,
    setCount: React.Dispatch<number>
}
const Game = ({count, setCount}:Props) => {
    const [isEnd, setIsEnd] = useState(false)
    const items = [
        {
            color: '#54b91c',
            name: 'paper',
        },
        {
            color: '#ee3030',
            name: 'scissors',
        },
        {
            color: '#054cff',
            name: 'rock',
        },
    ]
    return (
        <div className={classes.container}>
            {
                !isEnd
                    ? items.map((item, index) => (
                        <Item id={index} name={item.name} color={item.color} key={item.name} setIsEnd={setIsEnd}/>
                    ))
                    : <EndScreen setIsEnd={setIsEnd} setCount={setCount} count={count}/>
            }
            {!isEnd &&
                <div className={classes.triangleContainer}>
                    <Triangle/>
                </div>
            }
        </div>
    )
}

export default Game