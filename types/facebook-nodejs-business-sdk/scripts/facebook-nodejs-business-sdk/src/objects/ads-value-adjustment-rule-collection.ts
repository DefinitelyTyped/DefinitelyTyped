import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * AdsValueAdjustmentRuleCollection
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsValueAdjustmentRuleCollection extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name: 'name'
    });
  }

  getPersonas(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/personas');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdsValueAdjustmentRuleCollection {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}