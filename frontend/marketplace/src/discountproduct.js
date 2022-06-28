import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button } from '@mui/material';

export default function DiscountedItems() {
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
    img: 'https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg',
    title: 'Mocha Coffee',
    price: 'Rp. 30.000',
  },
  {
    img: 'https://awsimages.detik.net.id/community/media/visual/2022/05/24/macchiato-dan-cappuccino-3.jpeg?w=1200',
    title: 'Macchiato',
    price: 'Rp. 35.000',
  },
];
