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

/**
 * OmegaCustomerTrx
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OmegaCustomerTrx extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account_ids: 'ad_account_ids',
      advertiser_name: 'advertiser_name',
      amount: 'amount',
      amount_due: 'amount_due',
      billed_amount_details: 'billed_amount_details',
      billing_period: 'billing_period',
      cdn_download_uri: 'cdn_download_uri',
      currency: 'currency',
      download_uri: 'download_uri',
      due_date: 'due_date',
      entity: 'entity',
      id: 'id',
      invoice_date: 'invoice_date',
      invoice_id: 'invoice_id',
      invoice_type: 'invoice_type',
      liability_type: 'liability_type',
      payment_status: 'payment_status',
      payment_term: 'payment_term',
      type: 'type',
    });
  }

  static get Type () {
    return Object.freeze({
      cm: 'CM',
      dm: 'DM',
      inv: 'INV',
      pro_forma: 'PRO_FORMA',
    });
  }

  getCampaigns (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/campaigns'
    );
  }


  get (fields: Array<string>, params: Object = {}): OmegaCustomerTrx {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
