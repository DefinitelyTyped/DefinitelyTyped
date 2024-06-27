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

/**
 * McomInvoiceDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomInvoiceDetails extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      additional_amounts: 'additional_amounts',
      buyer_notes: 'buyer_notes',
      currency_amount: 'currency_amount',
      external_invoice_id: 'external_invoice_id',
      features: 'features',
      invoice_created: 'invoice_created',
      invoice_id: 'invoice_id',
      invoice_instructions: 'invoice_instructions',
      invoice_instructions_image_url: 'invoice_instructions_image_url',
      invoice_updated: 'invoice_updated',
      outstanding_amount: 'outstanding_amount',
      paid_amount: 'paid_amount',
      payments: 'payments',
      platform_logo_url: 'platform_logo_url',
      platform_name: 'platform_name',
      product_items: 'product_items',
      shipping_address: 'shipping_address',
      status: 'status',
      tracking_info: 'tracking_info',
    });
  }

}
