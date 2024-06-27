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
 * OfflineConversionDataSetPermissions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetPermissions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_edit: 'can_edit',
      can_edit_or_upload: 'can_edit_or_upload',
      can_upload: 'can_upload',
      should_block_vanilla_business_employee_access: 'should_block_vanilla_business_employee_access',
    });
  }

}
