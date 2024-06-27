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
 * WoodhengeSupporter
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WoodhengeSupporter extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      id: 'id',
      is_gifted_subscription: 'is_gifted_subscription',
      most_recent_subscription_time: 'most_recent_subscription_time',
      number_of_months_subscribed: 'number_of_months_subscribed',
      user: 'user',
    });
  }



  get (fields: Array<string>, params: Object = {}): WoodhengeSupporter {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
