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
 * LeadGenPostSubmissionCheckResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenPostSubmissionCheckResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      api_call_result: 'api_call_result',
      api_error_message: 'api_error_message',
      shown_thank_you_page: 'shown_thank_you_page',
    });
  }

}
