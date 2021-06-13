import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Cart = ({ products, total, onCheckoutClicked }) => {
  // Cart component should display total products
  // It should display a message "You can add some products to cart."
  // When product is added it should display title, price and quantity.
  const nodes = [];

  if (products.length === 0) {
    nodes.push(1)
    nodes.push('You can add some products to cart.');
  } else {
    products.map(product =>
      nodes.push(
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
        />
      )
    );
  }

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button
        onClick={onCheckoutClicked}
        // Should diable button only when no products are there in the cart.
        disabled={products.length ? '' : 'disabled'}
      >
        {
          // When checkout is clicked the cart should be refreshed and the button should be disabled. Checkout
        }
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

export default Cart;
