import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  // Women
  {
    id: 'w1',
    name: 'Oversized Wool Coat',
    price: 10990,
    category: Category.WOMEN,
    description: 'A structured wool blend coat with a lapel collar and long sleeves. Front flap pockets. Double-breasted button fastening.',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'w2',
    name: 'Satin Midi Dress',
    price: 4990,
    category: Category.WOMEN,
    description: 'Flowing midi dress made of satin fabric. V-neckline and thin straps. Side slit at the hem.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'w3',
    name: 'High-Waist Trousers',
    price: 3590,
    category: Category.WOMEN,
    description: 'High-waist trousers with front darts. Side pockets and false rear welt pockets. Zip and hook fastening.',
    image: 'https://images.unsplash.com/photo-1509631179647-b849171540ca?q=80&w=800&auto=format&fit=crop',
    sizes: ['34', '36', '38', '40', '42']
  },
  {
    id: 'w4',
    name: 'Knitted Sweater',
    price: 2990,
    category: Category.WOMEN,
    description: 'Round neck sweater with long sleeves. Ribbed trims. Soft touch fabric.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    sizes: ['S', 'M', 'L', 'XL']
  },
  
  // Men
  {
    id: 'm1',
    name: 'Structured Blazer',
    price: 7990,
    category: Category.MEN,
    description: 'Slim fit blazer featuring a notched lapel collar. Chest pocket and hip flap pockets. Button-up front.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    sizes: ['48', '50', '52', '54']
  },
  {
    id: 'm2',
    name: 'Cotton Chino Pants',
    price: 2990,
    category: Category.MEN,
    description: 'Slim fit trousers made of stretch cotton. Front pockets and back buttoned welt pockets.',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800&auto=format&fit=crop',
    sizes: ['30', '31', '32', '34', '36']
  },
  {
    id: 'm3',
    name: 'Oxford Shirt',
    price: 3990,
    category: Category.MEN,
    description: 'Regular fit shirt made of cotton fabric. Button-down collar and long sleeves with buttoned cuffs.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'm4',
    name: 'Minimalist Leather Boots',
    price: 8990,
    category: Category.MEN,
    description: 'Leather ankle boots with elastic side gores. Back pull tab for ease. Chunky track sole.',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop',
    sizes: ['40', '41', '42', '43', '44']
  },

  // Kids
  {
    id: 'k1',
    name: 'Denim Jacket',
    price: 2490,
    category: Category.KIDS,
    description: 'Collared denim jacket with long sleeves. Button fastening on the front.',
    image: 'https://images.unsplash.com/photo-1519238263496-6353673502a5?q=80&w=800&auto=format&fit=crop',
    sizes: ['6Y', '8Y', '10Y', '12Y']
  },
  {
    id: 'k2',
    name: 'Printed T-Shirt',
    price: 990,
    category: Category.KIDS,
    description: 'Round neck T-shirt with short sleeves. Graphic print on the front.',
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop',
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y']
  },
  {
    id: 'k3',
    name: 'Jogger Pants',
    price: 1590,
    category: Category.KIDS,
    description: 'Plush trousers with elastic waistband and drawstrings. Elastic cuffs.',
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=800&auto=format&fit=crop',
    sizes: ['6Y', '8Y', '10Y', '12Y']
  }
];