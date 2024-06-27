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
 * AudiencePermission
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudiencePermission extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience: 'audience',
      share_account_id: 'share_account_id',
      share_account_name: 'share_account_name',
    });
  }

}
