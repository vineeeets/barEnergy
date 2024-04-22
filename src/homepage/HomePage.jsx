import React, { useState } from 'react';
import './homepage.css';
import Product from '../product/Products'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Audio from '../audio/Audio';
import { useNavigate } from 'react-router-dom';



// Import images
import barAirImage from './assets/BarAir.jpeg';
import barAir2Image from './assets/BarAir2.jpeg';
import barBudsImage from './assets/BarBuds.jpeg';
import barNeckbandImage from './assets/BarNeckBand.jpeg';
import barClassicNeckbandImage from './assets/BarClassicNeckBand.jpeg';
import barClassicSportsNeckbandImage from './assets/BarClassicSportsNeckBand.jpeg';
import barEchoNeckbandImage from './assets/BarEchoNeckBand.jpeg';
import barSportsNeckbandImage from './assets/BarSportsNeckBand.jpeg';

const products = [
  {
    image: barAirImage,
    title: 'Bar Air',
    description: 'Music All Around, True Wireless Earbuds'
  },
  {
    image: barAir2Image,
    title: 'Bar Air2',
    description: '12.4mm Extra Large Driver, Enco Master Equalizer'
  },
  {
    image: barBudsImage,
    title: 'Bar Buds',
    description: '12.4mm Extra Large Driver, Enco Master Equalizer'
  },
  {
    image: barClassicNeckbandImage,
    title: 'Bar Classic NeckBand',
    description: 'HiFi 5 DSP, 13.4mm Large Composite Driver'
  },
  {
    image: barClassicSportsNeckbandImage,
    title: 'Bar Classic Sports NeckBand',
    description: 'HiFi 5 DSP, 13.4mm Large Composite Driver'
  },
  {
    image: barEchoNeckbandImage,
    title: 'Bar Echo NeckBand',
    description: 'HiFi 5 DSP, 13.4mm Large Composite Driver'
  },
  {
    image: barNeckbandImage,
    title: 'Bar Neckband',
    description: 'HiFi 5 DSP, 13.4mm Large Composite Driver'
  },
  {
    image: barSportsNeckbandImage,
    title: 'Bar Sports Neckband',
    description: '12.4mm Extra Large Driver, Enco Master Equalizer'
  }
];

const HomePage = () => {
  const Navigate = useNavigate();

  const goToAudio = () => {
    Navigate('/audio');
  }


  return (
    <div className="HomePage">
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <div className='homePage'>
            <div className="wholesale-pricing">
              Enjoy the benefits of wholesale pricing
            </div>
            <div className="earbuds-advertisement">
              <h1 className="title">True Wireless Earbuds</h1>
              <p className="price">Starting from ₹999*</p>
              <div className="earbuds-container">
                <div className="earbud-item black">
                  <div className="case open">
                    <img src={barAirImage} alt='Bar Air' />
                  </div>
                </div>

                <div className="earbud-item black">
                  <div className="case open">
                    <img src={barAir2Image} alt='Bar Air2' />
                  </div>
                </div>

                <div className="earbud-item black">
                  <div className="case open">
                    <img src={barBudsImage} alt='Bar Buds' />
                  </div>
                </div>
              </div>
              <button className="shop-button" onClick={goToAudio}>Shop Products</button>
              <h1 className="budsAbout">Experience Sound Unleashed</h1>
            </div>
          </div>

        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
