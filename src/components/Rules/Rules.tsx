import React, {useState} from 'react'
import classes from './Rules.module.css'
import RulesIcon from "../../assests/RulesIcon"

const Rules = () => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <div className={classes.container}>

            {
                isVisible && <RulesIcon/>
            }
            <button
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >Правила</button>
        </div>
    )
}

export default Rules