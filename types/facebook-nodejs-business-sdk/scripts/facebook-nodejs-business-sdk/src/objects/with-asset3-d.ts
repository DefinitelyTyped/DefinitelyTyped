import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WithAsset3D
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WithAsset3D extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): WithAsset3D {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}