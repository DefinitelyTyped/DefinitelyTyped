import { Price } from './price';
import { SelectedVariant } from './selected-variant';
import { OrderTaxLine } from './order-tax-line';

export interface OrderLineItem {
  id: string,
  name: string,
  quantity: number,
  product_id: string,
  product_name: string,
  sku: string,
  variants: SelectedVariant[],
  price: Price,
  line_total: Price,
  is_taxable: boolean,
  taxable_amount: Price,
  tax_rate: number,
  tax_rate_percentage: string,
  tax_amount: Price,
  tax_lines: OrderTaxLine[],
}
