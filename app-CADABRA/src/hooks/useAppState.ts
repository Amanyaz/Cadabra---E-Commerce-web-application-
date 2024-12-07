import { AppState } from '../models';
import { categoriesData } from '../data';
import { addToCart } from './utils';

export const initialState: AppState = {
  categories: {
    categories: categoriesData,
  },
  checkout: {
    products: [],
  },
};

export const appReducer = (state: AppState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action.payload);
    case 'UPDATE_CATEGORIES':
      return {
        ...state,
        categories: {
          categories: [...action.payload]
        }
      }
    default:
      return state;
  }
};
