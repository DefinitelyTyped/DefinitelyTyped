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
 * AdsPixelCapabilityOverride
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelCapabilityOverride extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      capability: 'capability',
      id: 'id',
      override_value: 'override_value',
      reason: 'reason',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdsPixelCapabilityOverride {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
