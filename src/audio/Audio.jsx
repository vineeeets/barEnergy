import React, { useState } from 'react';
import './audio.css';
import Product from '../product/Products'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

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
    description: 'Music All Around, True Wireless Earbuds',
    price: '₹ 349/piece Min 10 Qty'
  },
  {
    image: barAir2Image,
    title: 'Bar Air2',
    description: '12.4mm Extra Large Driver, Enco Master Equalizer',
    price: '₹ 349/piece Min 10 Qty'
  },
  {
    image: barBudsImage,
    title: 'Bar Buds',
    description: '12.4mm Extra Large Driver, Enco Master Equalizer',
    price: '₹ 349/piece Min 10 Qty'
  },
  {
    image: barClassicNeckbandImage,
    title: 'Bar Classic NeckBand',
    description: 'HiFi 5 DSP, 13.4mm Large Composite Driver',
    price: '₹ 349/piece Min 10 Qty'
  },
  {
    image: barClassicSportsNeckbandImage,
    title: 'Bar Classic Sports NeckBand',
    description: 'HiFi 5 DSP, 13.4mm Large Composite Driver',
    price: '₹ 349/piece Min 10 Qty'
  },
  {
    image: barEchoNeckbandImage,
    title: 'Bar Echo NeckBand',
    description: 'HiFi 5 DSP, 13.4mm Large Composite Driver',
    price: '₹ 349/piece Min 10 Qty'
  },
  {
    image: barNeckbandImage,
    title: 'Bar Neckband',
    description: 'HiFi 5 DSP, 13.4mm Large Composite Driver',
    price: '₹ 349/piece Min 10 Qty'
  },
  {
    image: barSportsNeckbandImage,
    title: 'Bar Sports Neckband',
    description: '12.4mm Extra Large Driver, Enco Master Equalizer',
    price: '₹ 349/piece Min 10 Qty'
  }
];

const Audio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    filterProducts(value);
  };

  const filterProducts = (query) => {
    const filtered = products.filter((product) => {
      const titleLowerCase = product.title.toLowerCase();
      const descriptionLowerCase = product.description.toLowerCase();
      const queryLowerCase = query.toLowerCase();
      return (
        titleLowerCase.includes(queryLowerCase) ||
        descriptionLowerCase.includes(queryLowerCase)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="HomePage">
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <h2>Audio</h2>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="product-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Product
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Audio;
