import React, {useEffect, useState} from 'react'
import classes from './Header.module.css'
import Logo from "../../assests/Logo"

type Props = {
    count: number
}
const Header = ({count}: Props) => {
    return (
        <div className={classes.container}>
            <Logo/>
            <div className={classes.countContainer}>
                <p className={classes.countLabel}>Счет</p>
                <p className={classes.count}>{count}</p>
            </div>
        </div>
    )
}

export default Header