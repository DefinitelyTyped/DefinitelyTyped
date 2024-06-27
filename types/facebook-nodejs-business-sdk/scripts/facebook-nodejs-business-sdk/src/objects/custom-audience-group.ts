import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomAudienceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CustomAudienceGroup extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      audience_type_param_name: 'audience_type_param_name',
      existing_customer_tag: 'existing_customer_tag',
      new_customer_tag: 'new_customer_tag'
    });
  }

}