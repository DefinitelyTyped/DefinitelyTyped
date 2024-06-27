import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGUpcomingEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGUpcomingEvent extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      end_time: 'end_time',
      id: 'id',
      start_time: 'start_time',
      title: 'title'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): IGUpcomingEvent {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): IGUpcomingEvent {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}