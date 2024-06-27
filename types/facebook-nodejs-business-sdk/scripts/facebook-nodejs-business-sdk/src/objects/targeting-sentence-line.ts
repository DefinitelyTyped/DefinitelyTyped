import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingSentenceLine
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TargetingSentenceLine extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      params: 'params',
      targetingsentencelines: 'targetingsentencelines'
    });
  }

}