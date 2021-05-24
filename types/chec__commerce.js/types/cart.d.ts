import { Price } from './price';
import { Currency } from './currency';
import { LineItem } from './line-item';

export interface Cart {
  id: string,
  total_items: number,
  total_unique_items: number,
  subtotal: Price,
  currency: Currency,
  line_items: LineItem[],
  hosted_checkout_url: string,
  discount_code: any, // todo
  created: number,
  last_updated: number,
  expires: number,
}