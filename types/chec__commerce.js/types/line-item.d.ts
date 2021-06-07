import { Price } from './price';
import { SelectedVariant } from './selected-variant';

export interface LineItem {
  id: string;
  name: string;
  quantity: number;
  product_id: string;
  product_name: string;
  sku: string;
  media: any; // todo
  variants: SelectedVariant[];
  price: Price;
  line_total: Price;
}
