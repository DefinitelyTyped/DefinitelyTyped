import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessImageTBusinessFolderPathItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessImageTBusinessFolderPathItem extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      parent_folder_id: 'parent_folder_id',
      type: 'type'
    });
  }

}