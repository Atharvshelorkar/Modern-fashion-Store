export enum Category {
  MEN = 'Men',
  WOMEN = 'Women',
  KIDS = 'Kids'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  sizes: string[];
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export interface User {
  email: string;
  name: string;
  password?: string;
}

export type ViewState = 
  | { type: 'HOME' }
  | { type: 'CATALOG'; category?: Category; searchQuery?: string }
  | { type: 'PRODUCT'; productId: string }
  | { type: 'CART' }
  | { type: 'CHECKOUT' }
  | { type: 'CONTACT' };
