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
 * AdsPixelDeliveryRecommendations
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelDeliveryRecommendations extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_event_type: 'custom_event_type',
      optimization_goal: 'optimization_goal',
    });
  }

}
