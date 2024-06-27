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
 * WorkUserFrontline
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkUserFrontline extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      has_access: 'has_access',
      is_frontline: 'is_frontline',
    });
  }

}
