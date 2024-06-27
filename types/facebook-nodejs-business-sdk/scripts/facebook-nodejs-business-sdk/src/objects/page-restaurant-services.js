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
 * PageRestaurantServices
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageRestaurantServices extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      catering: 'catering',
      delivery: 'delivery',
      groups: 'groups',
      kids: 'kids',
      outdoor: 'outdoor',
      pickup: 'pickup',
      reserve: 'reserve',
      takeout: 'takeout',
      waiter: 'waiter',
      walkins: 'walkins',
    });
  }

}
