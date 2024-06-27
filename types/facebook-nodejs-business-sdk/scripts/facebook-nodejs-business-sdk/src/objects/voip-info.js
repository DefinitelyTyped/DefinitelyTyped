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
 * VoipInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VoipInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      has_mobile_app: 'has_mobile_app',
      has_permission: 'has_permission',
      is_callable: 'is_callable',
      is_callable_webrtc: 'is_callable_webrtc',
      is_pushable: 'is_pushable',
      reason_code: 'reason_code',
      reason_description: 'reason_description',
    });
  }

}
