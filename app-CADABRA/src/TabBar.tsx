import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Tab, Tabs, Badge } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { AppState } from './models';

export const TabBar: React.FC<{ state: AppState }> = ({ state }) => {
  const location = useLocation();

  console.log('state.checkout.products', state.checkout.products);
  const addedProductLength = state.checkout.products.reduce((acc, curr) => (acc += (curr.count || 1)), 0);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflowX: 'hidden',
        position: 'sticky',
        top: '0px',
        background: 'white',
        zIndex: 999,
      }}
    >
      <Tabs
        value={location.pathname}
        textColor='primary'
        indicatorColor='primary'
      >
        <Tab component={NavLink} to='/' color='primary' label='CADABRA' value='/' />
      </Tabs>

      <Tab
        component={NavLink}
        to='/checkout'
        disabled={!addedProductLength}
        color='primary'
        label={
          <Box component='span' sx={{ display: 'flex', alignItems: 'center' }} color='primary'>
            <span color='primary'>Checkout</span>
            <Badge
              badgeContent={addedProductLength}
              color='primary'
              sx={{ marginLeft: 1 }}
            >
              <AddShoppingCart color='primary' sx={{ marginLeft: 1 }} />
            </Badge>
          </Box>
        }
      />
    </Box>
  );
};
