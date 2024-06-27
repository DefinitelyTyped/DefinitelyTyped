import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGProductTaggingInvalidationError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGProductTaggingInvalidationError extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      description: 'description',
      taggability_state: 'taggability_state',
      title: 'title'
    });
  }

}