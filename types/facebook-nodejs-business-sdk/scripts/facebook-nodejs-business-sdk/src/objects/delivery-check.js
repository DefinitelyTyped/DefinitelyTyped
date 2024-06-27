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
 * DeliveryCheck
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DeliveryCheck extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      check_name: 'check_name',
      description: 'description',
      extra_info: 'extra_info',
      summary: 'summary',
    });
  }

}
