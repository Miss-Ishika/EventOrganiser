import React from 'react'
import "./Navbar.css"
import "../utils/data"
import { nav_con } from '../utils/data'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-content'>
            <div className='logo'>Dashboard</div>
            <div className='content'>
                <div className='item'>
                {nav_con.map((item, index) => (
                    <React.Fragment key={`nav_bar_${index}`}>
                        {/* <div className='icon'>{item.pic}</div> */}
                        <span class="material-symbols-outlined">{item.pic}</span>
                        <div className='icon-name'>{item.name}</div>
                    </React.Fragment>    
                ))}
                </div>
            </div>
        </div>
        <div className='help'>
        <span class="material-symbols-outlined">question_mark</span>
                <div className='help_text'>Help</div>
        </div>
    </div>
  )
}

export default Navbar