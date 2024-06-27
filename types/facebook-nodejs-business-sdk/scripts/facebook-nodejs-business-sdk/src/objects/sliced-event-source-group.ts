import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SlicedEventSourceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class SlicedEventSourceGroup extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      event_source_group: 'event_source_group',
      filter: 'filter',
      id: 'id',
      name: 'name'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): SlicedEventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}