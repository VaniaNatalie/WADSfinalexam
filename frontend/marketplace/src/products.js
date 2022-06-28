import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button } from '@mui/material';

export default function HotItems() {
  return (
    <ImageList >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            
            position="below"
            subtitle={item.price}
          />
          <Button variant="contained" color="success" size="small">
            Order Now
          </Button>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.nescafe.com/id/sites/default/files/Kopi-Hitam-Americano-dan-Espresso%2C-Apa-Bedanya%2C-Ya.jpg',
    title: 'Americano',
    price: 'Rp. 30.000',
  },
  {
    img: 'https://awsimages.detik.net.id/community/media/visual/2019/07/01/844ad4d1-38e3-4d89-b45f-f2fb172dcacc.jpeg?w=700&q=90',
    title: 'Cappuccino',
    price: 'Rp. 40.000',
  },
];
