import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsEntityUserConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AnalyticsEntityUserConfig extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      dismissed_notices: 'dismissed_notices'
    });
  }

}