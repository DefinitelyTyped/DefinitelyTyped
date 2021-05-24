import { Price } from './price';

export interface Giftcard {
  id: string;
  code: string;
  balance: Price;
  initial_value: Price;
  note: string;
  created: number;
  last_updated: number;
}
