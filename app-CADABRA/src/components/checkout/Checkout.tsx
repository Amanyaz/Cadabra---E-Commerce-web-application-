import React, { useMemo } from 'react';
import { MyBag } from './mybag';
import { Total } from './total';
import { AppState, ProductDTO } from '../../models';

type CheckoutProps = {
  readonly state: AppState;
};

export const Checkout: React.FC<CheckoutProps> = ({ state }) => {
  const products = state.checkout.products;
  console.log(products);

  const total = useMemo(
    () => products.reduce((p: number, c: ProductDTO) => p + c.price, 0),
    [products],
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
        height: '100%',
        gap: '20px',
      }}
    >
      <MyBag products={products} total={total} removeProduct={() => {}} />
      <Total products={products} total={total} />
    </div>
  );
};
