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
 * BrandedContentEligibleSponsorIDs
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandedContentEligibleSponsorIDs extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      fb_page: 'fb_page',
      ig_account_v2: 'ig_account_v2',
      ig_approval_needed: 'ig_approval_needed',
    });
  }

}
