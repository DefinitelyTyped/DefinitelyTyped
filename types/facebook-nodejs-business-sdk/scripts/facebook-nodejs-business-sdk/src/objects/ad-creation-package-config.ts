import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreationPackageConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreationPackageConfig extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      api_version: 'api_version',
      id: 'id',
      is_eligible_for_default_opt_in: 'is_eligible_for_default_opt_in',
      objective: 'objective',
      package_id: 'package_id',
      status: 'status'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdCreationPackageConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}