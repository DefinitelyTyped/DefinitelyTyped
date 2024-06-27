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
 * OrderIDAttributions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OrderIDAttributions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_id: 'app_id',
      attribution_type: 'attribution_type',
      attributions: 'attributions',
      conversion_device: 'conversion_device',
      dataset_id: 'dataset_id',
      holdout_status: 'holdout_status',
      order_id: 'order_id',
      order_timestamp: 'order_timestamp',
      pixel_id: 'pixel_id',
    });
  }

}
