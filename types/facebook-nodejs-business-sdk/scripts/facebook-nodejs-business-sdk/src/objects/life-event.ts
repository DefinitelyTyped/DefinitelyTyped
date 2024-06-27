import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Profile from "./profile";
/**
 * LifeEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LifeEvent extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      description: 'description',
      end_time: 'end_time',
      from: 'from',
      id: 'id',
      is_hidden: 'is_hidden',
      start_time: 'start_time',
      title: 'title',
      updated_time: 'updated_time'
    });
  }

  getLikes(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Profile, fields, params, fetchFirstPage, '/likes');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): LifeEvent {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}