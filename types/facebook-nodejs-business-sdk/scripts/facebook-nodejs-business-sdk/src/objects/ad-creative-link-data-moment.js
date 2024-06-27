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
 * AdCreativeLinkDataMoment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataMoment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      type: 'type',
    });
  }

  static get Type () {
    return Object.freeze({
      fb_live_shopping: 'FB_LIVE_SHOPPING',
      ig_drops: 'IG_DROPS',
      ig_live_shopping: 'IG_LIVE_SHOPPING',
    });
  }
}
