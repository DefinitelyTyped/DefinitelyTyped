import { Price } from './price';

export interface VariantOption {
  id: string;
  name: string;
  is: {
    quantity_limited: boolean;
  };
  price: Price;
  quantity: number;
}
