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
 * DogNotificationSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DogNotificationSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      dog_check_key: 'dog_check_key',
      id: 'id',
      subscription_status_per_channel: 'subscription_status_per_channel',
    });
  }



  get (fields: Array<string>, params: Object = {}): DogNotificationSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
