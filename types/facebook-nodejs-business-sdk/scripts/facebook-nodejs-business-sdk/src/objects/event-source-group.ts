import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import AdAccount from "./ad-account";
/**
 * EventSourceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class EventSourceGroup extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      business: 'business',
      event_sources: 'event_sources',
      id: 'id',
      name: 'name',
      owner_business: 'owner_business'
    });
  }

  getShareDAccounts(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdAccount, fields, params, fetchFirstPage, '/shared_accounts');
  }

  createShareDAccount(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<EventSourceGroup> {
    return this.createEdge('/shared_accounts', fields, params, EventSourceGroup, pathOverride);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): EventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): EventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}