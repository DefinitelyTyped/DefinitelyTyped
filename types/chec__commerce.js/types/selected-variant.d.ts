import { Price } from './price';

export interface SelectedVariant {
  variant_id: string;
  variant_name: string;
  option_id: string;
  option_name: string;
  price: Price;
}
