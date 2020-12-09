import { MercadoPagoConfig } from './configuration';
import { MercadoPagoCard } from './resources/cards';
import { MercadoPagoCustomer } from './resources/customers';
import { MercadoPagoMerchantOrder } from './resources/merchantOrders';
import { MercadoPagoPayment } from './resources/payment';
import { MercadoPagoPreApproval } from './resources/preapproval';
import { MercadoPagoPreference } from './resources/preferences';

export interface MercadoPago {
  configure: MercadoPagoConfig['configure'];
  utils: any;
  configurations: MercadoPagoConfig;
  payment: MercadoPagoPayment;
  preferences: MercadoPagoPreference;
  preapproval: MercadoPagoPreApproval;
  merchant_orders: MercadoPagoMerchantOrder;
  customers: MercadoPagoCustomer;
  ipn: any;
  connect: any;
  money_requests: any;
  card: MercadoPagoCard;
  card_token: any;
  refund: any;
  discount_campaign: any;
}
