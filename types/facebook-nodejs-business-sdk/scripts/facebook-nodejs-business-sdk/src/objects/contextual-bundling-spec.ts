import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ContextualBundlingSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ContextualBundlingSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      status: 'status'
    });
  }

}