import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserNotificationSeenStateData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class UserNotificationSeenStateData extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      seen_state: 'seen_state'
    });
  }

}