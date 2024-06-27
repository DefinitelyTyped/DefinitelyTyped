import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Status
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Status extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      event: 'event',
      from: 'from',
      id: 'id',
      message: 'message',
      place: 'place',
      updated_time: 'updated_time'
    });
  }

  createLike(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<Status> {
    return this.createEdge('/likes', fields, params, Status, pathOverride);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): Status {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}