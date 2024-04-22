import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from '../footer/Footer'
import Product from '../product/Products'


import BarBattery from './assets/BarBattery.jpg';
import BarChargingPort from './assets/BarChargingPort.jpg';
import BarPowerButton from './assets/BarPowerButton.jpg';
import BarPowerVolumeButton from './assets/BarPowerVolumeButton.jpg';
import CameraModules from './assets/CameraModules.jpg';
import LcdDisplay from './assets/LcdDisplay.jpg';
import LcdDisplay2 from './assets/LcdDisplay2.jpg';

const products = [
    {
        image: BarBattery,
        title: "Bar Battery",
        description: "Battery For Your Smartphone"
    },
    {
        image: BarChargingPort,
        title: "Bar Charging Port",
        description: " Charging Port for Mobile Phones"
    },
    {
        image: BarPowerButton,
        title: "Bar Power Button",
        description: "Power Button for your Mobile Phones"
    },
    {
        image: BarPowerVolumeButton,
        title: "CameraModules",
        description: "Camera Modules for your Mobile Phones"
    },
    {
        image: CameraModules,
        title: "Camera Modules",
        description: "Variety of Camera MOdules"
    },
    {
        image: LcdDisplay,
        title: "LCD Display",
        description: "LCD Display for ALl types of Mobiles"
    }
];

const accessories = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
        filterProducts(value);

    }


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
        <div className="accessories">
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <h2>Accessories</h2>
                    <div className="searchBar">
                        <input
                            type="text"
                            placeholder="Search Products...."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="product-container">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <Product key={index}
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                />
                            ))
                        ) : (
                            <p>No Products found.</p>
                        )}
                    </div>

                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )


};

export default accessories;