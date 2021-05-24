import Commerce = require('@chec/commerce.js');
import { Order } from '../types/order';
import { Live } from '../types/live';

export type IdentifierType = 'product_id' | 'cart' | 'permalink';

export class Checkout {
  constructor(commerce: Commerce);

  protect(token: string): Promise<any>;
  generateToken(identifier: string, data: object): Promise<Checkout>;
  generateTokenFrom(type: IdentifierType, identifier: string): Promise<Checkout>;
  capture(token: string, data: object): Promise<Order>;
  receipt(token: string): Promise<Order>;

  checkPayWhatYouWant(token: string, data: object): Promise<any>;
  fields(identifier: string): Promise<any>;
  setTaxZene(identifier: string): Promise<any>;
  getLocationFromIP(token: string, ipAddress: string): Promise<any>;
  isFree(token: string): Promise<any>;
  checkVariant(token: string, lineItemId: string, data: object): Promise<any>;
  checkDiscount(token: string, data: object): Promise<any>;
  checkShippingOption(token: string, data: object): Promise<any>;
  getShippingOptions(token: string, data: object): Promise<any>;
  setTaxZone(token: string, data: object): Promise<any>;
  checkQuantity(token: string, lineItem: string, data: object): Promise<any>;
  helperValidation(token: string): Promise<any>;
  getLive(token: string): Promise<Live>;
  getToken(token: string): Promise<Checkout>;
  checkGiftcard(token: string, data: object): Promise<any>;
}
