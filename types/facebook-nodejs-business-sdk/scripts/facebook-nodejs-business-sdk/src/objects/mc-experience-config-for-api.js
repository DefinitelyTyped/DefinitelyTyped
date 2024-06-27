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
 * MCExperienceConfigForApi
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MCExperienceConfigForApi extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      is_campaign_enabled: 'is_campaign_enabled',
      is_terms_signed: 'is_terms_signed',
      merchant_type: 'merchant_type',
    });
  }

}
