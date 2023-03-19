import React from 'react';
import './App.css';
import NetFate from './img/netflixFate.png';
import NetGam from './img/netflixGambit.png';
import NetStar from './img/netflixStarTrek.png';
import NetWit from './img/netflixWitcher.png';
import AirCab from './img/airbnbCabin.png'
import AirHom from './img/airbnbHome.png'
import AirPet from './img/airbnbPets.png'
import AirUni from './img/airbnbUnique.png'
import bbcMor from './img/bbcMorgan.png'
import bbcPan from './img/bbcPandemic.png'
import bbcUni from './img/bbcUnilever.png'
import bbcPay from './img/bbcPay.png'

const App = () => {
  return (
    <div className="container">
      <div className="section">
        <h1>Netflix</h1>
        <div className='images'>
          <img src={NetFate} alt='img' className='image' />
          <img src={NetGam} alt="" className="image" />
          <img src={NetStar} alt="" className="image" />
          <img src={NetWit} alt="" className="image" />
        </div>
      </div>
      <div className="section">
        <h1>AirBnB</h1>
        <div className='images'>
        <div className='airtext'>
            <img src={AirHom} alt="" className="image2" />
            <p>Home</p>
          </div>
          <div className='airtext'>
            <img src={AirUni} alt="" className="image2" />
            <p>Unique</p>
          </div>
          <div className='airtext'>
            <img src={AirCab} alt="" className="image2" />
            <p>Cabin</p>
          </div>
          <div className='airtext'>
            <img src={AirPet} alt="" className="image2" />
            <p>Pet</p>
          </div>
        </div>
      </div>
      <div className="section">
        <h3>BBC NEWS</h3>
        <div className='images'>
          <div className='bbctext'>
          <img src={bbcPan} alt="" className="image3" />
          <p>Panorama</p>
          </div>
          <div className='bbctext'>
          <img src={bbcPay} alt="" className="image3" />
          <p>pay</p>
          </div>
          <div className='bbctext'>
          <img src={bbcMor} alt="" className="image3" />
          <p>Piers Morgan</p>
          </div>
          <div className='bbctext'>
          <img src={bbcUni} alt="" className="image3" />
          <p>Unilever</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;

