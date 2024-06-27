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
 * AdAssetTargetRuleTargeting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetTargetRuleTargeting extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      age_max: 'age_max',
      age_min: 'age_min',
      audience_network_positions: 'audience_network_positions',
      device_platforms: 'device_platforms',
      facebook_positions: 'facebook_positions',
      geo_locations: 'geo_locations',
      instagram_positions: 'instagram_positions',
      publisher_platforms: 'publisher_platforms',
    });
  }

  static get DevicePlatforms () {
    return Object.freeze({
      desktop: 'desktop',
      mobile: 'mobile',
    });
  }
}
