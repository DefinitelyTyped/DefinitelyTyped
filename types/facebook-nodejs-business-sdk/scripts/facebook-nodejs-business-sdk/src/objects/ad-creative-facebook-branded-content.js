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
 * AdCreativeFacebookBrandedContent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeFacebookBrandedContent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      shared_to_sponsor_status: 'shared_to_sponsor_status',
      sponsor_page_id: 'sponsor_page_id',
      sponsor_relationship: 'sponsor_relationship',
    });
  }

}
