import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto';
import "./LineChartComp.css"
const LineChartComp = () => {

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if(chartInstance.current){
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type:"line",
            data:{
                labels: ['2021-02-03','2021-02-04','2021-02-05','2021-02-06','2021-02-07','2021-02-08','2021-02-09', ' '],
                datasets: [
                    {
                        label:"Line Chart",
                        data:[0, 0, 0, 0, 0, 0, 0, 1],
                        fill:false,
                        borderColor: 'rgb(10, 191, 152)',
                        borderWidth: 1.5
                    }
                ]
            }
        })
        return()=>{
            if(chartInstance.current){
                chartInstance.current.destroy();
            }
        }
    }, []);



  return (
    <div className='line'>
        <canvas ref={chartRef} style={{width:"6rem", height:"4rem"}}/>
    </div>
  )
}

export default LineChartComp