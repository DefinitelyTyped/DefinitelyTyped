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
 * BrandedContentShadowIGMediaID
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandedContentShadowIGMediaID extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      eligibility_errors: 'eligibility_errors',
      has_permission_for_partnership_ad: 'has_permission_for_partnership_ad',
      id: 'id',
      owner_id: 'owner_id',
      permalink: 'permalink',
    });
  }

}
