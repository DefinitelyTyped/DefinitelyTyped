import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoCopyrightGeoGate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VideoCopyrightGeoGate extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      excluded_countries: 'excluded_countries',
      included_countries: 'included_countries'
    });
  }

}