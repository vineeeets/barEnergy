import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <div className="about">
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <h2>About Bar Energy</h2>
          <p>
            Your Trusted Partner in Mobile Technology
            BAR ENERGY is proud to be your reliable source for all your mobile phone needs.
            We are a well-established company dedicated to providing exceptional quality mobile
            phone hardware and accessories.
          </p>
          <h3>Dependable Supplier</h3>
          <p>
            We have a strong reputation as a trusted importer and exporter of mobile phone parts and
            charger such as motherboards, screens, ICs, and USB cables, Sensor.
          </p>
          <h3>Extensive Selection</h3>
          <p>
            We offer a comprehensive selection of Bluetooth devices, including neckbands, AirPods, and
            headphones, to complement your mobile lifestyle.
          </p>
          <h3>Reliable Source for Mobile Parts</h3>
          <p>
            Source essential mobile phone parts from us, including motherboards, screens, ICs, sensors,
            and CC boards. Our reputation is built on dependability and high quality.

          </p>
          <h3> Wholesale Advantages</h3>
          <p>
            Enjoy the benefits of wholesale pricing, ensuring you maximize your profit margins.
            Partner with BAR ENERGY and elevate your mobile wholesale business
          </p>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
