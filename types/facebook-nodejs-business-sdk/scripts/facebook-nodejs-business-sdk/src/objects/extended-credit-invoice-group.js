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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdAccount from './ad-account';

/**
 * ExtendedCreditInvoiceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditInvoiceGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      auto_enroll: 'auto_enroll',
      bill_to_address: 'bill_to_address',
      customer_po_number: 'customer_po_number',
      email: 'email',
      emails: 'emails',
      id: 'id',
      liable_address: 'liable_address',
      name: 'name',
      sold_to_address: 'sold_to_address',
    });
  }


  deleteAdAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/ad_accounts',
      params
    );
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

  createAdAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdAccount> {
    return this.createEdge(
      '/ad_accounts',
      fields,
      params,
      AdAccount,
      pathOverride,
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): ExtendedCreditInvoiceGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): ExtendedCreditInvoiceGroup {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
