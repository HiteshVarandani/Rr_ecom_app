import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ title, price, quantity }) => (
  // product component should render title and price
  // It should render title, price and quantity when given inventory
  <div>
    <p>
      {title} - ${price} {(quantity)?`x ${quantity}`:''}
    </p>
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
};

export default Product;
