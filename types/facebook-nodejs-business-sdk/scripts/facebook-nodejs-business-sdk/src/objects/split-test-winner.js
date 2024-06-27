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
 * SplitTestWinner
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SplitTestWinner extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_object_level: 'ad_object_level',
      confidences: 'confidences',
      winner_ad_object_id: 'winner_ad_object_id',
    });
  }

}
