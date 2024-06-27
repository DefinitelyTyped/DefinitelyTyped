import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomAudienceSharingStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CustomAudienceSharingStatus extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      sharing_relationship_id: 'sharing_relationship_id',
      status: 'status'
    });
  }

}