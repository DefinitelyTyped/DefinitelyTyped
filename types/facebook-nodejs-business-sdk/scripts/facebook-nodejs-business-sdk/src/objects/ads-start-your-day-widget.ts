import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsStartYourDayWidget
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsStartYourDayWidget extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      widget_id: 'widget_id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdsStartYourDayWidget {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}