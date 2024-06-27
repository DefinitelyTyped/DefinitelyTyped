import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PlayableContent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PlayableContent extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name: 'name',
      owner: 'owner'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): PlayableContent {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}