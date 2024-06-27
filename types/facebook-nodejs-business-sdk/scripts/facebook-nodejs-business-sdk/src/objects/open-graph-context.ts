import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OpenGraphContext
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class OpenGraphContext extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): OpenGraphContext {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}