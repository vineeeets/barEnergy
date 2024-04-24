import React, { useState } from 'react';
import './Product.css'

const Product = ({ image, title, description, price }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} onClick={openModal} />
      <div className='product-price'>
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
      <button onClick={openModal}>See Details</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <h2>{price}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
