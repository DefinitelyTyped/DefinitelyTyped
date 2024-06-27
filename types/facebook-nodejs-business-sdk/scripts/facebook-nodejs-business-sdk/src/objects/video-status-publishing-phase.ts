import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoStatusPublishingPhase
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VideoStatusPublishingPhase extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      errors: 'errors',
      publish_status: 'publish_status',
      publish_time: 'publish_time',
      status: 'status'
    });
  }

}