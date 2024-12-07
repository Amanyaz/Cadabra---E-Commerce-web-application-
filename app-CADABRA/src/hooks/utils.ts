import { AppState } from '../models';

export type AddToCartPayload = {
  categoryId: string;
  productId: string;
};

export const addToCart = (state: AppState, payload: AddToCartPayload) => {
  const { categoryId, productId } = payload;
  const { categories } = state.categories;

  const _categories = [...categories];
  const categoryIndex = _categories.findIndex((c) => c.category.id === categoryId);

  if (categoryIndex === -1) {
    throw new Error(`No category found with categoryId:${categoryId}`);
  }

  const product = _categories[categoryIndex].products.find(
    (p) => p.id === productId,
  );

  if (!product) {
    throw new Error(`No product found with productId:${productId}`);
  }

  const currProducts = [...state.checkout.products];
  const index = currProducts.findIndex((p) => p.id === productId);

  if (index === -1) {
    return {
      ...state,
      checkout: {
        ...state.checkout,
        products: [...state.checkout.products, product],
      },
    };
  }

  return {
    ...state,
    checkout: {
      ...state.checkout,
      products: currProducts.map((p, i) =>
        i === index
          ? { ...p, count: (p.count || 1) + 1 }
          : { ...p, count: p.count || 1 },
      ),
    },
  };
};
