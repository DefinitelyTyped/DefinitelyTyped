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
 * LeadGenLegalContent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenLegalContent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_disclaimer: 'custom_disclaimer',
      id: 'id',
      privacy_policy: 'privacy_policy',
    });
  }

}
