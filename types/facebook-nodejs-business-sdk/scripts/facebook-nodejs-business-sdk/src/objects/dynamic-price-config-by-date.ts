import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicPriceConfigByDate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class DynamicPriceConfigByDate extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      checkin_date: 'checkin_date',
      prices: 'prices',
      prices_pretty: 'prices_pretty',
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): DynamicPriceConfigByDate {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}