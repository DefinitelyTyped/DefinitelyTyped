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

export const configure: MercadoPagoConfig['configure'];
export const utils: any;
export const configurations: MercadoPagoConfig;
export const payment: MercadoPagoPayment;
export const preferences: MercadoPagoPreference;
export const preapproval: MercadoPagoPreApproval;
export const merchant_orders: MercadoPagoMerchantOrder;
export const customers: MercadoPagoCustomer;
export const ipn: any;
export const connect: any;
export const money_requests: any;
export const card: MercadoPagoCard;
export const card_token: any;
export const refund: any;
export const discount_campaign: any;
