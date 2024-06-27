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
 * AdConversionValues
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdConversionValues extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adgroup_id: 'adgroup_id',
      campaign_id: 'campaign_id',
      values: 'values',
    });
  }

}
