import { Category, Product } from './types';

// Helper to generate consistent images
const getImg = (id: string, width = 600, height = 900) => 
  `https://picsum.photos/seed/${id}/${width}/${height}`;

export const PRODUCTS: Product[] = [
  // Women
  {
    id: 'w1',
    name: 'Oversized Wool Coat',
    price: 129.99,
    category: Category.WOMEN,
    description: 'A structured wool blend coat with a lapel collar and long sleeves. Front flap pockets. Double-breasted button fastening.',
    image: getImg('fashion_w1'),
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'w2',
    name: 'Satin Midi Dress',
    price: 59.99,
    category: Category.WOMEN,
    description: 'Flowing midi dress made of satin fabric. V-neckline and thin straps. Side slit at the hem.',
    image: getImg('fashion_w2'),
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'w3',
    name: 'High-Waist Trousers',
    price: 45.99,
    category: Category.WOMEN,
    description: 'High-waist trousers with front darts. Side pockets and false rear welt pockets. Zip and hook fastening.',
    image: getImg('fashion_w3'),
    sizes: ['34', '36', '38', '40', '42']
  },
  {
    id: 'w4',
    name: 'Knitted Sweater',
    price: 39.99,
    category: Category.WOMEN,
    description: 'Round neck sweater with long sleeves. Ribbed trims. Soft touch fabric.',
    image: getImg('fashion_w4'),
    sizes: ['S', 'M', 'L', 'XL']
  },
  
  // Men
  {
    id: 'm1',
    name: 'Structured Blazer',
    price: 89.99,
    category: Category.MEN,
    description: 'Slim fit blazer featuring a notched lapel collar. Chest pocket and hip flap pockets. Button-up front.',
    image: getImg('fashion_m1'),
    sizes: ['48', '50', '52', '54']
  },
  {
    id: 'm2',
    name: 'Cotton Chino Pants',
    price: 35.99,
    category: Category.MEN,
    description: 'Slim fit trousers made of stretch cotton. Front pockets and back buttoned welt pockets.',
    image: getImg('fashion_m2'),
    sizes: ['30', '31', '32', '34', '36']
  },
  {
    id: 'm3',
    name: 'Oxford Shirt',
    price: 49.99,
    category: Category.MEN,
    description: 'Regular fit shirt made of cotton fabric. Button-down collar and long sleeves with buttoned cuffs.',
    image: getImg('fashion_m3'),
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'm4',
    name: 'Minimalist Leather Boots',
    price: 110.00,
    category: Category.MEN,
    description: 'Leather ankle boots with elastic side gores. Back pull tab for ease. Chunky track sole.',
    image: getImg('fashion_m4'),
    sizes: ['40', '41', '42', '43', '44']
  },

  // Kids
  {
    id: 'k1',
    name: 'Denim Jacket',
    price: 29.99,
    category: Category.KIDS,
    description: 'Collared denim jacket with long sleeves. Button fastening on the front.',
    image: getImg('fashion_k1'),
    sizes: ['6Y', '8Y', '10Y', '12Y']
  },
  {
    id: 'k2',
    name: 'Printed T-Shirt',
    price: 12.99,
    category: Category.KIDS,
    description: 'Round neck T-shirt with short sleeves. Graphic print on the front.',
    image: getImg('fashion_k2'),
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y']
  },
  {
    id: 'k3',
    name: 'Jogger Pants',
    price: 19.99,
    category: Category.KIDS,
    description: 'Plush trousers with elastic waistband and drawstrings. Elastic cuffs.',
    image: getImg('fashion_k3'),
    sizes: ['6Y', '8Y', '10Y', '12Y']
  }
];
