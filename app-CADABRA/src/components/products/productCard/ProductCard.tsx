import React, { FC, useCallback } from 'react';
import { Card, CardMedia, CardContent, Button } from '@mui/material';
import { ProductDTO } from '../../../models';
import { useStyles } from './ProductCard.styles';
import { API_URL } from '../../../models/config';

type ProductCardProps = {
  readonly product: ProductDTO;
  readonly onAddToCart: (product: ProductDTO) => void;
};

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = useCallback(() => {
    onAddToCart(product);
  }, [onAddToCart, product]);

  return (
    <Card className={classes.root}>
      <CardMedia image={`${API_URL}/images/${product.image}`} className={classes.image} />

      <CardContent className={classes.content}>
        <div className={classes.name}>{product.title}</div>
        <div className={classes.description}>{product.description}</div>
      </CardContent>

      <div className={classes.footer}>
        <div className={classes.price}>${product.price}</div>

        <Button
          variant='outlined'
          color='primary'
          size='small'
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
