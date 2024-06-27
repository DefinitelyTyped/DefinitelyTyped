import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * Avatar
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Avatar extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id'
    });
  }

  getModels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/models');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Avatar {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}