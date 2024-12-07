import { CategoriesDTO, ProductsDTO } from './Category';

export type AppStateWithCategories = {
  readonly categories: {
    categories: CategoriesDTO;
  };
};

export type AppStateWithCheckout = {
  readonly checkout: {
    products: ProductsDTO;
  };
};

export type AppState = AppStateWithCategories & AppStateWithCheckout;
