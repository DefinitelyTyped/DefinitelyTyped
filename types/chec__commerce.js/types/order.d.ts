import { Price } from './price';
import { Currency } from './currency';
import { Customer } from './customer';
import { Extrafield } from './extrafield';
import { Address } from './address';
import { LineItem } from './line-item';
import { ShippingMethod } from './shipping-method';
import { OrderTax } from './order-tax';
import { Transaction } from './transaction';
import { OrderShipment } from './order-shipment';
import { OrderShipmentItem } from './order-shipment-item';
import { OrderDownload } from './order-download';

export enum PaymentStatus {
  Paid = 'paid',
  NotPaid = 'not_paid',
  PartiallyPaid = 'partially_paid',
  Pending = 'pending',
  Refunded = 'refunded',
}

export enum FulfillmentStatus {
  Open = 'open',
  Fulfilled = 'fulfilled',
  NotFulfilled = 'not_fulfilled',
  PartiallyFulfilled = 'partially_fulfilled',
  Returned = 'returned',
}

export interface Order {
  id: string;
  version: string;
  sandbox: boolean;
  checkout_token_id: string;
  cart_id: string | null;
  customer_reference: string;
  status_payment: PaymentStatus;
  status_fulfillment: FulfillmentStatus;
  currency: Currency;
  order_value: Price;
  customer: Customer;
  extra_fields: Extrafield[];
  shipping?: Address;
  billing?: Address;
  order: {
    line_items: LineItem[];
    subtotal: Price;
    discount: any[]; // todo
    shipping?: ShippingMethod;
    tax: OrderTax;
    total: Price;
    total_with_tax: Price;
    pay_what_you_want: {
      enabled: boolean;
      minimum?: Price;
      customer_set_price?: Price;
    };
  };
  tax: OrderTax;
  transactions: Transaction[];
  fulfillment: {
    digital: {
      downloads: OrderDownload[];
    };
    physical: {
      items: OrderShipmentItem[];
      shipments: OrderShipment[];
    };
  };
  created: number;
  last_updated: number;
}
