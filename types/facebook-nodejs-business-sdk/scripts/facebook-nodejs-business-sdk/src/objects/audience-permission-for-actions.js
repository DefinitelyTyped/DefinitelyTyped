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
 * AudiencePermissionForActions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudiencePermissionForActions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_edit: 'can_edit',
      can_see_insight: 'can_see_insight',
      can_share: 'can_share',
      subtype_supports_lookalike: 'subtype_supports_lookalike',
      supports_recipient_lookalike: 'supports_recipient_lookalike',
    });
  }

}
