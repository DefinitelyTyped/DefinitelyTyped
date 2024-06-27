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
 * AdAccountBusinessConstraints
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountBusinessConstraints extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience_controls: 'audience_controls',
      campaigns_with_error: 'campaigns_with_error',
      placement_controls: 'placement_controls',
      status: 'status',
    });
  }

  static get Status () {
    return Object.freeze({
      active: 'ACTIVE',
      application_in_progress: 'APPLICATION_IN_PROGRESS',
      with_campaign_error: 'WITH_CAMPAIGN_ERROR',
    });
  }
}
