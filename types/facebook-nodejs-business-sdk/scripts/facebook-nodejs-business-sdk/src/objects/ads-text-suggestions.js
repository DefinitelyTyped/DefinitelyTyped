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
 * AdsTextSuggestions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsTextSuggestions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      bodies: 'bodies',
      descriptions: 'descriptions',
      inactive_session_tally: 'inactive_session_tally',
      long: 'long',
      short: 'short',
      titles: 'titles',
    });
  }

}
