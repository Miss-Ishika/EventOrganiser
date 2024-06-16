import React from 'react'
import "./Navi.css"
import { navi_con } from '../utils/data'

const Navi = () => {
  return (
    <div className='navi-container'>
        <div className='school'>
            <span class="material-symbols-outlined">calendar_month</span>
            <span>Your School</span>
        </div>
        <div className='navi-content'>
            <div className='navigate'>
            {navi_con.map((item, index) => (
                    <React.Fragment key={`navi_${index}`}>
                        <div className='item'>{item.name}</div>
                    </React.Fragment>
                ))}
            </div>
            <div className='days'>
                <select name='days'>
                    <option value="Last 7 days">Last 7 days</option>
                    <option value="Last 6 days">Last 6 days</option>
                    <option value="Last 7 days">Last 7 days</option>
                    <option value="Last 8 days">Last 8 days</option>
                    <option value="Last 9 days">Last 9 days</option>
                    <option value="Last 10 days">Last 10 days</option>
                </select>
            </div>

        </div>
    </div>
  )
}

export default Navi