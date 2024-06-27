import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeLinkDataTemplateVideoSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeLinkDataTemplateVideoSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      categorization_criteria: 'categorization_criteria',
      customization: 'customization',
      template_id: 'template_id'
    });
  }

}