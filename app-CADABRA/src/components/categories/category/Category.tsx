import React, { FC } from 'react';
import { ProductsByCategoriesDTO } from '../../../models';
import { Products } from '../../products';
import { useStyles } from './Category.styles';

type CategoryProps = {
  readonly category: ProductsByCategoriesDTO;
  readonly dispatch: any;
};

export const Category: FC<CategoryProps> = ({ category, dispatch }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div style={{ display: 'flex', padding: '12px', fontSize: 24, background: 'white' }}>
        {category.category.title}
      </div>
      <Products
        categoryId={category.category.id}
        products={category.products}
        dispatch={dispatch}
      />
    </div>
  );
};
