import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessCreativeFolder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessCreativeFolder extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      creative_insight_permissions: 'creative_insight_permissions',
      description: 'description',
      id: 'id',
      media_library_url: 'media_library_url',
      name: 'name',
      owner_business: 'owner_business'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): BusinessCreativeFolder {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}