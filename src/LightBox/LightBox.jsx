import React, { useState } from 'react'
import "./LightBox.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const LightBox = ({onClose}) => {

    const [duration, setDuration] = useState(0);

    const [price, setPrice] = useState(0);

    const [parti, setParti] = useState(0);

    var hour = duration/60;

    var rent = parti/10;

    var yourPercent = (((parti*price) - (hour*parti*rent))/parti*price)*100

    var platformPercent = (hour*parti*20/parti*price)*100

    const data = {
        labels: ['MyProfit', 'PlatformProfit'],
        datasets: [{
            label: 'Poll',
            data: [yourPercent, platformPercent],
            backgroundColor: ['rgb(10, 191, 152)', 'rgb(195, 193, 193)'],
            borderColor: ['rgb(10, 191, 152)', 'rgb(195, 193, 193)']
        }]
    }

    const options = {

    }

  return (
    <div className='Light-box'>
    <div className='Light-box-Container'>
        <div className='lightbox-controller'>

            <div className='inputCon' id='typed'>
            <label>No. of expected invitee</label>
            <input type='number' min={10} max={1000} value={parti} onChange={(eve) => setParti(eve.target.value)}></input>
            </div>

            <div className='inputCon' id='range'>
            <label>Duration of Event</label>
            <input type='range' min={30} max={300} step={15} value={duration} 
                onChange={(e) => setDuration(e.target.value)}/>
            <div className='calculus'>
            <h1>{duration}<span>min</span></h1>
            <span class="material-symbols-outlined">width</span>
            <h1>{duration/60}<span>Hrs.</span></h1>
            </div>
            </div>

            <div className='inputCon' id='selected'>
            <label>Price of Ticket</label>
            <select value={price} onChange={(e) => setPrice(e.target.value)}>
                <option value=''>Choose</option>
                <option value={99}>99</option>
                <option value={199}>199</option>
                <option value={299}>299</option>
                <option value={399}>399</option>
                <option value={499}>499</option>
                <option value={599}>599</option>
                <option value={699}>699</option>
                <option value={799}>799</option>
                <option value={899}>899</option>
                
            </select>
            </div>

            
            <div className='earn'>
                <div className='tex'>Your Earning : </div><div className='amt'><span class="material-symbols-outlined">currency_rupee</span>{(parti*price) - (parti*hour*20)}</div>
            </div>
            

        </div>
        <div className='chart'>
            <Doughnut
            data = {data}
            options = {options}
            >

            </Doughnut>
        </div>
        

    </div>
    
    <button onClick={onClose}><span class="material-symbols-outlined">close</span></button>
    </div>
  )
}

export default LightBox