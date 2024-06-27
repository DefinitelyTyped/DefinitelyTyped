import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenContextCard
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LeadGenContextCard extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      button_text: 'button_text',
      content: 'content',
      cover_photo: 'cover_photo',
      id: 'id',
      style: 'style',
      title: 'title'
    });
  }

}