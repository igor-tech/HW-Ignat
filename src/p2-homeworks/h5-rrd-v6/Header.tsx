import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.sideBar}>
            <div>
                <NavLink className={styles.preJunior} to={'/pre-junior'}>Pre-Junior</NavLink>
                <NavLink className={styles.junior} to={'/junior'}>Junior</NavLink>
                <NavLink className={styles.juniorPlus} to={'/junior-plus'}>Junior-Plus</NavLink>
            </div>
            <div className={styles.btn}></div>
        </div>
    )
}

export default Header
