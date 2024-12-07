import React, { useCallback } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { ProductsDTO, ProductDTO } from '../../../models/Category';
import { API_URL } from '../../../models/config';

type MyBagProps = {
  readonly total: number;
  readonly products: ProductsDTO;
  readonly removeProduct: (productId: string) => void;
};

export const MyBag: React.FC<MyBagProps> = ({
  total,
  products,
  removeProduct,
}) => {
  const handleRemoveProduct = useCallback(
    (itemId: string) => {
      removeProduct(itemId);
    },
    [removeProduct],
  );

  return (
    <div style={{ width: '600px', height: '100%', paddingTop: '20px' }}>
      <Typography style={{ fontSize: '18px' }}>My Bag</Typography>

      <Divider style={{ marginTop: '4px', marginBottom: '20px' }} />

      {products.map((product: ProductDTO) => (
        <Card
          key={product.id}
          sx={{ display: 'flex', marginBottom: 2 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <CardMedia
            component='img'
            src={`${API_URL}/images/${product.image}`}
            alt={product.title}
            sx={{ width: 150 }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <CardContent>
              <Typography variant='h6'>{product.title}</Typography>
              <Typography variant='body1'>{product.description}</Typography>
              <Typography variant='body2' color='textSecondary'>
                Items: {product.count} Price: ${product.price}
              </Typography>
            </CardContent>
          </Box>
          <div>
            <IconButton
              aria-label='Remove'
              onClick={() => handleRemoveProduct(product.id)}
              sx={{ alignSelf: 'flex-start', height: '100%' }}
            >
              <Delete />
            </IconButton>
          </div>
        </Card>
      ))}

      <Divider style={{ marginTop: '20px', marginBottom: '4px' }} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
        <Typography style={{ fontSize: '18px' }}>
          Sub-Total: ${total}
        </Typography>
      </Box>
    </div>
  );
};
