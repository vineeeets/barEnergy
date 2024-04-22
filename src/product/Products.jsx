import React, { useState } from 'react';
import './Product.css'

const Product = ({ image, title, description }) => {
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
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={openModal}>See Details</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
