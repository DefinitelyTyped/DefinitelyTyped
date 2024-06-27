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
 * CPASBusinessSetupConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASBusinessSetupConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      accepted_collab_ads_tos: 'accepted_collab_ads_tos',
      business: 'business',
      business_capabilities_status: 'business_capabilities_status',
      capabilities_compliance_status: 'capabilities_compliance_status',
      id: 'id',
    });
  }


  getAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/ad_accounts'
    );
  }


  get (fields: Array<string>, params: Object = {}): CPASBusinessSetupConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
