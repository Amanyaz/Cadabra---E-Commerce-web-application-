import React, { FC, useCallback } from 'react';
import { ProductDTO, ProductsDTO } from '../../models';
import { ProductCard } from './productCard';
import { useStyles } from './Products.styles';

type ProducstsProps = {
  readonly categoryId: string;
  readonly products: ProductsDTO;
  readonly dispatch: any;
};

export const Products: FC<ProducstsProps> = ({
  categoryId,
  products,
  dispatch,
}) => {
  const classes = useStyles();

  const handleAddToCart = useCallback(
    (product: ProductDTO) => {
      console.log(`Adding ${product.title} to cart!`, categoryId);
      dispatch({
        type: 'ADD_TO_CART',
        payload: { categoryId, productId: product.id },
      });
    },
    [categoryId, dispatch],
  );

  return (
    <div className={classes.root}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};
