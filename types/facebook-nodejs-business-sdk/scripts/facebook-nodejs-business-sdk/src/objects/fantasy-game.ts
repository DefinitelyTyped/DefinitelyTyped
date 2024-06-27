import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FantasyGame
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class FantasyGame extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name: 'name'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): FantasyGame {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}