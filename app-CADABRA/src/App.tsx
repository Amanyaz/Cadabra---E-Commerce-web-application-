import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Categories, Checkout } from './components';
import { TabBar } from './TabBar';
import { appReducer, initialState } from './hooks';

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <Router>
      <TabBar state={state} />
      <Routes>
        <Route
          path='/'
          element={<Categories state={state} dispatch={dispatch} />}
        />
        <Route path='/checkout' element={<Checkout state={state} />} />
      </Routes>
    </Router>
  );
};
