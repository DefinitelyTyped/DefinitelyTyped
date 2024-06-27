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
 * CloudGame
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CloudGame extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name',
      owner: 'owner',
      playable_ad_file_size: 'playable_ad_file_size',
      playable_ad_orientation: 'playable_ad_orientation',
      playable_ad_package_name: 'playable_ad_package_name',
      playable_ad_reject_reason: 'playable_ad_reject_reason',
      playable_ad_status: 'playable_ad_status',
      playable_ad_upload_time: 'playable_ad_upload_time',
    });
  }



  get (fields: Array<string>, params: Object = {}): CloudGame {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
