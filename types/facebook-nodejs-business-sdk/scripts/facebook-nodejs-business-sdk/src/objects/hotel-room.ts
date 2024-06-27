import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import DynamicPriceConfigByDate from "./dynamic-price-config-by-date";
/**
 * HotelRoom
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class HotelRoom extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      applinks: 'applinks',
      base_price: 'base_price',
      currency: 'currency',
      description: 'description',
      id: 'id',
      images: 'images',
      margin_level: 'margin_level',
      name: 'name',
      room_id: 'room_id',
      sale_price: 'sale_price',
      url: 'url'
    });
  }

  getPricingVariables(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(DynamicPriceConfigByDate, fields, params, fetchFirstPage, '/pricing_variables');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): HotelRoom {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}