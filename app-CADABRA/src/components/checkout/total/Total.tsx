import React, { useMemo } from 'react';
import { Typography, Divider, Button } from '@mui/material';
import { ProductsDTO, OrderDTO, ProductDTO } from '../../../models';
import { API_URL } from '../../../models/config';
import { useNavigate } from 'react-router-dom';

type TotalProps = {
  readonly total: number;
  readonly products: ProductsDTO;
};

export const Total: React.FC<TotalProps> = ({ total, products }) => {
  const navigate = useNavigate();
  const deliveryFee = useMemo(() => (total / 100) * 8, [total]);

  const handleCheckout = async(e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const orders: OrderDTO[] = products.map(p => ({ productId: p.id, count: p.count || 1 }));
    console.log('checkout', orders);
    const response = await fetch(`${API_URL}/orders`, {headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify(orders)});
    navigate('/');
  }

  return (
    <div style={{ width: '200px', height: '100%', paddingTop: '20px' }}>
      <Typography style={{ fontSize: '18px', fontWeight: 'bolder' }}>Total: ${(total + deliveryFee).toFixed(2)} </Typography>
      <Divider style={{ marginTop: '4px', marginBottom: '20px' }} />

      <div
        style={{
          width: '100%',
        }}
      >
        <div
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div>Sub-Total:</div>
          <div>${total.toFixed(2)}</div>
        </div>

        <div
          style={{
            fontSize: '14px',
            color: 'gray',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            lineHeight: 3,
          }}
        >
          <div>Delivery Fee</div>
          <div>${deliveryFee.toFixed(2)}</div>
        </div>
      </div>

      <div style={{ paddingTop: '24px' }}>
        <Button
          variant='contained'
          size='small'
          style={{ width: '100%' }}
          color='success'
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
