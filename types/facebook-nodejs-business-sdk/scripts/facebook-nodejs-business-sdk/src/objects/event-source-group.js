 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import AdAccount from './ad-account';

/**
 * EventSourceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventSourceGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      event_sources: 'event_sources',
      id: 'id',
      name: 'name',
      owner_business: 'owner_business',
    });
  }


  getShareDAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/shared_accounts'
    );
  }

  createShareDAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<EventSourceGroup> {
    return this.createEdge(
      '/shared_accounts',
      fields,
      params,
      EventSourceGroup,
      pathOverride,
    );
  }


  get (fields: Array<string>, params: Object = {}): EventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): EventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
