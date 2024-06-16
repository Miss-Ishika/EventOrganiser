import React from 'react'
import "./Grid.css"
import {grid_data} from "../utils/data2"
import { color } from 'chart.js/helpers'

const Grid = () => {
  return (
    <div className='grid'>
        <div className='grid-container'>
          {grid_data.map((item) => (
        <div className='grid-content'>
        <span class="material-symbols-outlined">{item.icon}</span>
        <span className='grid-name'>{item.name}</span>
        <span className='grid-no'>{item.quantity}</span>
        </div>
      ))}
      </div>

      <div className='second'>
        <div className='circle'>
          <span className='trial'>Trial Period</span>
          <div className='innerCircle'>
            <div className='no'>30</div>
            <span>DAYS LEFT</span>
          </div>
        </div>
        <div className='up'>
        <span class="material-symbols-outlined">hourglass_empty</span>
        <button>
          <div className='text'>Upgrade Now!</div> <span class="material-symbols-outlined">double_arrow</span>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Grid