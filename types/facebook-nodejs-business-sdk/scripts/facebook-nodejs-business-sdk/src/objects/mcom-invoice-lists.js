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
 * McomInvoiceLists
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomInvoiceLists extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      invoice_details: 'invoice_details',
      invoice_ids: 'invoice_ids',
      page_id: 'page_id',
    });
  }

}
