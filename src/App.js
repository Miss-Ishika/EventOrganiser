import './App.css';
import Navbar from './Navbar/Navbar';
import LineChartComp from './LineChartComp/LineChartComp';
import Navi from './Navi/Navi';
import Blog from './Blog/Blog';
import Grid from './Grid/Grid';
import Active from './Active/Active';
import LightBox from './LightBox/LightBox';
import { useState } from 'react';


function App() {

  const [showLightBox, setShowLightBox] = useState(false)

  return (
    <div className='project'>
      <div className='dashboard'>
        <Navbar />
        <div className='main-con'>
          <div className='left'>
            <Navi />
            <LineChartComp />
            <Blog />
          </div>
          <div className='right'>
            <Grid />
            <Active />
          </div>
        </div>
        <button onClick={() => setShowLightBox(true)} className='invite'>Invite</button>
      </div>

      <div className='light-box'>
          {showLightBox && <LightBox onClose={() => setShowLightBox(false)}/>}
      </div>
    </div>
  );
}

export default App;
