import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsCohortQueryResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AnalyticsCohortQueryResult extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      data: 'data',
      error: 'error',
      query_id: 'query_id',
      status: 'status'
    });
  }

}