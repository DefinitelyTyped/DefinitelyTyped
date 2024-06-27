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
 * AdsPixelEventSuggestionRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelEventSuggestionRule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      value_7d_volume: '7d_volume',
      dismissed: 'dismissed',
      end_time: 'end_time',
      event_type: 'event_type',
      rank: 'rank',
      rule: 'rule',
      sample_urls: 'sample_urls',
      start_time: 'start_time',
    });
  }

}
