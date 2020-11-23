// Type definitions for mercadopago 1.5
// Project: https://github.com/mercadopago/dx-nodejs
// Definitions by: Daniel Pereira <https://github.com/danieldspx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

import { MercadoPagoConfig } from './configuration';
import { MercadoPagoCard } from './resources/cards';
import { MercadoPagoCustomer } from './resources/customers';
import { MercadoPagoMerchantOrder } from './resources/merchantOrders';
import { MercadoPagoPayment } from './resources/payment';
import { MercadoPagoPreApproval } from './resources/preapproval';
import { MercadoPagoPreference } from './resources/preferences';

declare namespace MercadoPago {
  const configure: MercadoPagoConfig['configure'];
  const utils: any;
  const configurations: MercadoPagoConfig;
  const payment: MercadoPagoPayment;
  const preferences: MercadoPagoPreference;
  const preapproval: MercadoPagoPreApproval;
  const merchant_orders: MercadoPagoMerchantOrder;
  const customers: MercadoPagoCustomer;
  const ipn: any;
  const connect: any;
  const money_requests: any;
  const card: MercadoPagoCard;
  const card_token: any;
  const refund: any;
  const discount_campaign: any;
}

// tslint:disable-next-line export-just-namespace
export = MercadoPago;
