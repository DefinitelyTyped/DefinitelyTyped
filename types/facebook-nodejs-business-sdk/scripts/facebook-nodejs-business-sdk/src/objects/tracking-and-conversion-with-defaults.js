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
 * TrackingAndConversionWithDefaults
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TrackingAndConversionWithDefaults extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_conversion: 'custom_conversion',
      custom_tracking: 'custom_tracking',
      default_conversion: 'default_conversion',
      default_tracking: 'default_tracking',
    });
  }

}
