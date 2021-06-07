import { Price } from './price';

export interface OrderTaxLine {
  amount: Price;
  rate: number;
  rate_percentage: string;
  type: string;
}
