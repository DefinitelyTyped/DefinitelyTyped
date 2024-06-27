import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExternalEventSourceCPASEventsDebuggingInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ExternalEventSourceCPASEventsDebuggingInfo extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      counts: 'counts',
      diagnostic: 'diagnostic',
      event_name: 'event_name'
    });
  }

}