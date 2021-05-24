import Commerce = require('@chec/commerce.js');
import { LineItem } from '../types/line-item';

export enum RequestMethod {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Patch = 'patch',
  Delete = 'delete',
}

export class Cart {
  constructor(commerce: Commerce);

  refresh(): Promise<Cart>;
  id(): string|null;
  request(endpoint: string, method: RequestMethod, data?: object, returnFullRequest?: boolean): Promise<any>;
  add(productId: string, quantity: number, options?: object, variant_id?: string): Promise<any>;
  retrieve(cardId?: string): Promise<Cart>;
  remove(lineId: string): Promise<any>;
  delete(): Promise<any>;
  update(lineId: string, data: object): Promise<any>;
  contents(): Promise<LineItem[]>;
  empty(): Promise<any>;
}
