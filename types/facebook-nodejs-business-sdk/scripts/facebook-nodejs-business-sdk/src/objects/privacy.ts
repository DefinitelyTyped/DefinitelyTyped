import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Privacy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Privacy extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      allow: 'allow',
      deny: 'deny',
      description: 'description',
      friends: 'friends',
      networks: 'networks',
      value: 'value'
    });
  }

}