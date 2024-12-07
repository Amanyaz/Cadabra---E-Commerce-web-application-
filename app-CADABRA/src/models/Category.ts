export type ProductDTO = {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly price: number;
  readonly description: string;
  readonly count?: number;
};
export type ProductsDTO = ReadonlyArray<ProductDTO>;

export type CategoryDTO = {
  readonly id: string;
  readonly title: string;
}

export type ProductsByCategoriesDTO = {
  readonly category: CategoryDTO;
  readonly products: ProductsDTO;
};
export type CategoriesDTO = ReadonlyArray<ProductsByCategoriesDTO>;
