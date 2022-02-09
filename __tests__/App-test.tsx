/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import ProductItems from '../src/components/ProductItems';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

it('renders correctly', () => {
  renderer.create(
    <ProductItems
      item={{
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: {
          rate: 4.1,
          count: 259,
        },
      }}
      onPressFavorite={() => null}
      favorite={false}
    />,
  );
});
