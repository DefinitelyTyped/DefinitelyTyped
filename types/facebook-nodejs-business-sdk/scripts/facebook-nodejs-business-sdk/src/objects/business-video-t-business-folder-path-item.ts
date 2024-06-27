import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessVideoTBusinessFolderPathItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessVideoTBusinessFolderPathItem extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      parent_folder_id: 'parent_folder_id',
      type: 'type'
    });
  }

}