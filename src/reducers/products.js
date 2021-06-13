import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes';

// Reducers for corresponding Actions
export const getProducts = state => {
  return state.products;
};

export const getProduct = (state, productId) => {
  let pr;
  state.map(product => {
    if (product.id === productId) {
      pr = product;
    }
  });
  return pr;
};

export const getVisibleProducts = state => {
  return state;
};
const products = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => Object.assign({}, product));

    case ADD_TO_CART:
      return state.map(product => {
        if (action.productId === product.id) {
          return Object.assign({}, product, {
            inventory: product.inventory - 1
          });
        }
        return product;
      });
    default:
      return state;
  }
};

export default products;
