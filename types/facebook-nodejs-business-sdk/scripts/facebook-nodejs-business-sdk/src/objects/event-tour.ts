import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventTour
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class EventTour extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      description: 'description',
      dominant_color: 'dominant_color',
      end_time: 'end_time',
      id: 'id',
      is_past: 'is_past',
      last_event_timestamp: 'last_event_timestamp',
      name: 'name',
      num_events: 'num_events',
      photo: 'photo',
      scheduled_publish_timestamp: 'scheduled_publish_timestamp',
      start_time: 'start_time',
      ticketing_uri: 'ticketing_uri',
      video: 'video'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): EventTour {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}