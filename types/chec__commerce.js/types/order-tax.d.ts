import { Price } from './price';
import { OrderTaxLine } from './order-tax-line';

export interface OrderTax {
  amount: Price;
  included_in_price: boolean;
  breakdown: OrderTaxLine[];
  zone: {
    country: string;
    region: string;
    postal_zip_code: string;
    ip_address: string;
  };
}
