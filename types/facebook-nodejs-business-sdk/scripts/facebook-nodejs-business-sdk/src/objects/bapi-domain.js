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
 * BAPIDomain
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BAPIDomain extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      domain: 'domain',
      in_cool_down_until: 'in_cool_down_until',
      is_eligible_for_vo: 'is_eligible_for_vo',
      is_in_cool_down: 'is_in_cool_down',
    });
  }

}
