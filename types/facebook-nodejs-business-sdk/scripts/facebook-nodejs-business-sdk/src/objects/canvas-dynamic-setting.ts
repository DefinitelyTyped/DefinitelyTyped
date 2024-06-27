import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CanvasDynamicSetting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CanvasDynamicSetting extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      child_documents: 'child_documents',
      product_set_id: 'product_set_id',
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): CanvasDynamicSetting {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}