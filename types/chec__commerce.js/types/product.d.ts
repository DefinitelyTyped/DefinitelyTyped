import { Price } from './price';
import { Variant } from './variant';
import { Asset } from './asset';

export interface Product {
  id: string;
  name: string;
  sku: string;
  permalink: string;
  description: string;
  active: boolean;
  price: Price;
  quantity: number;
  media: any; // todo
  conditionals: {
    is_active: boolean;
    is_free: boolean;
    is_pay_what_you_want: boolean;
    is_quantity_limited: boolean;
    is_sold_out: boolean;
    has_digital_delivery: boolean;
    has_physical_delivery: boolean;
    has_images: boolean;
    has_video: boolean;
    has_rich_embed: boolean;
    collects_fullname: boolean;
    collects_shipping_address: boolean;
    collects_billing_address: boolean;
    collects_extra_fields: boolean;
  };
  is: {
    active: boolean;
    free: boolean;
    pay_what_you_want: boolean;
    quantity_limited: boolean;
    sold_out: boolean;
  };
  has: {
    digital_delivery: boolean;
    physical_delivery: boolean;
    images: boolean;
    video: boolean;
    rich_embed: boolean;
  };
  collects: {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extra_fields: boolean;
  };
  checkout_url: {
    checkout: string;
    display: string;
  };
  variants: Variant[];
  assets: Asset[];
  created: number;
  last_updated: number;
}
