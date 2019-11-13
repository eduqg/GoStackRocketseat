import { produce } from 'immer';

export default function cart(state = [], action) {
  console.tron.log('Log no reducer', action);
  switch (action.type) {
    case '@cart/ADD_SUCCESS': {
      console.tron.log('Adicionou no carrinho com sucesso');
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
      break;
    }
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
