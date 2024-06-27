import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Organization
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Organization extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      hq_country: 'hq_country',
      id: 'id',
      legal_entity_name: 'legal_entity_name',
      master_bm_id: 'master_bm_id',
      owner_business: 'owner_business'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Organization {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}