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
 * DynamicPriceConfigByDate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicPriceConfigByDate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      checkin_date: 'checkin_date',
      prices: 'prices',
      prices_pretty: 'prices_pretty',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): DynamicPriceConfigByDate {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
