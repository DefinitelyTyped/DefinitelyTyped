import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogItemChannelsToIntegrityStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CatalogItemChannelsToIntegrityStatus extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      channels: 'channels',
      rejection_information: 'rejection_information'
    });
  }

}