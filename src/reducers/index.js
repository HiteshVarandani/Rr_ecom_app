import { combineReducers } from 'redux';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';

const reducer = combineReducers({
  cart,
  products
});
export default reducer;

// Reducers for corresponding Actions
export const getTotal = state => {
  var tot = 0;
  if (state.products && state.cart.addedIds) {
    fromCart.getCart(state).addedIds.forEach(pId => {
      tot +=
        fromProducts.getProducts(state).byId[pId - 1].price *
        fromCart.getCart(state).quantityById[pId];
    });
  }
  return JSON.stringify(tot);
};

export const getCartProducts = state => {
  var Obj = [];
  // console.log('2 ->', state);
  if (state.products.byId && state.cart.addedIds) {
    fromCart.getCart(state).addedIds.forEach(pId => {
      Obj.push(
        Object.assign({}, fromProducts.getProducts(state).byId[pId - 1], {
          quantity: fromCart.getCart(state).quantityById[pId]
        })
      );
    });
  }
  // console.log(Obj);
  return Obj;
};

// export const getTotal = (state) => {
//   reducer(state, {}).addedIds.forEach(pId => {
//     tot += reducer(state, {}).byId[pId].price*reducer(state, {}).quantityById[pId]
//   });
//   return tot;
// }

// export const getCartProducts = (state) => {
//   var Obj = []
//   reducer(state, {}).addedIds.forEach(pId => {
//     Obj.push(Object.assign({}, reducer(state, {}).byId[pId], {
//             quantity: reducer(state, {}).quantityById[pId]
//           }))
//   });
//   return Obj;
// }
