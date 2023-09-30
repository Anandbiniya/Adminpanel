import React from 'react'
import styles from "./nav.module.css"
import { FaBeer } from 'react-icons/fa';


function Navbar() {
  return (
    <div>
        <div className={styles.navbar}>
        <button>Create a post</button>

            <button>Feeling</button>
            <button>Activity</button>
            <button>Dashboard</button>
            <nav>
            <FaBeer />
            </nav>




        </div>
    </div>
  )
}

export default Navbar