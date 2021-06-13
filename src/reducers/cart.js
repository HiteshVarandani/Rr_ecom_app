import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
  addedIds: [],
  quantityById: {}
};

// Reducers for corresponding Actions
export const getCart = state => {
  return state.cart;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let myvar;
      if (state.addedIds.includes(action.productId)) {
        // myvar = Object.assign(state, {quantityById: Object.assign({}, state.quantityById, {1:1, 2:2})});
        state.quantityById[action.productId]++;
      } else {
        // myvar = Object.assign(state, {addedIds: [1], quantityById: Object.assign({}, state.quantityById, {1:1})});
        state.addedIds.push(action.productId);
        state.quantityById[action.productId] = 1;
      }
      return state;
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return 'cart state';
    case CHECKOUT_SUCCESS:
      return 'Success';
    default:
      return state;
  }
};

export default cart;
