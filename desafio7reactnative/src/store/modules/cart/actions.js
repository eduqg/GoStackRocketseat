// Para criar novo fluxo, sempre começar pela action

export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

// export function addToCartSuccess(product) {
//   return {
//     type: '@cart/ADD_SUCCESS',
//     product,
//   };
// }

// Colocar @cart para identificar mais fácil no reactotron onde quero referenciar
export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}

// export function updateAmountSuccess(id, amount) {
//   return {
//     type: '@cart/UPDATE_AMOUNT_SUCCESS',
//     id,
//     amount,
//   };
// }