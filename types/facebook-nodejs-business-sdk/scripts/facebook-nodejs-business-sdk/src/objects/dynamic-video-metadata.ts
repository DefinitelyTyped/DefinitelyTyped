import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicVideoMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class DynamicVideoMetadata extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      tags: 'tags',
      url: 'url',
      video: 'video'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): DynamicVideoMetadata {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}