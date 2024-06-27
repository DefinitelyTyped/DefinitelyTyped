import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * AdsValueAdjustmentRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsValueAdjustmentRule extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      base_value: 'base_value',
      id: 'id'
    });
  }

  getCriterias(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/criterias');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdsValueAdjustmentRule {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}