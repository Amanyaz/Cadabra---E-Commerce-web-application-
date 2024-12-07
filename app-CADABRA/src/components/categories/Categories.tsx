import React, { FC } from 'react';
import { Category } from './category';
import { AppState, ProductsByCategoriesDTO } from '../../models';
import { API_URL } from '../../models/config';

type CategoriesProps = {
  readonly state: AppState;
  readonly dispatch: any;
};

export const Categories: FC<CategoriesProps> = ({ state, dispatch }) => {
  const fetchData = async() => {
    const response = await fetch(`${API_URL}/products-by-categories`);
    const data = await response.json();
    dispatch({type: 'UPDATE_CATEGORIES', payload: data});
  };

  React.useEffect(() => {        
      fetchData();
  }, []);
  const categories = state.categories.categories;
  return (
    <div>
      {categories.map((category: ProductsByCategoriesDTO) => (
        <Category key={category.category.id} category={category} dispatch={dispatch} />
      ))}
    </div>
  );
};
