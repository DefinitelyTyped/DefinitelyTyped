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
 * PartnershipAdsIdentity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnershipAdsIdentity extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      post_types: 'post_types',
      secondary_identities: 'secondary_identities',
    });
  }

}
