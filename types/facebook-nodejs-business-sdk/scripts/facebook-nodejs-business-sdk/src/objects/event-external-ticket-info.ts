import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventExternalTicketInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class EventExternalTicketInfo extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      max_sales_price: 'max_sales_price',
      min_sales_price: 'min_sales_price',
      sales_status: 'sales_status'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): EventExternalTicketInfo {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}