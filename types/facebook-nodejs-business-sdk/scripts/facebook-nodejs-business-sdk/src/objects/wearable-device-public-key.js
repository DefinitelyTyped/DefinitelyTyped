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
 * WearableDevicePublicKey
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WearableDevicePublicKey extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      base64_encoded_public_key: 'base64_encoded_public_key',
      creation_time_on_device: 'creation_time_on_device',
      device_uuid: 'device_uuid',
      id: 'id',
      key_type: 'key_type',
      owner_id: 'owner_id',
      product_use_case: 'product_use_case',
      version: 'version',
    });
  }



  get (fields: Array<string>, params: Object = {}): WearableDevicePublicKey {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
