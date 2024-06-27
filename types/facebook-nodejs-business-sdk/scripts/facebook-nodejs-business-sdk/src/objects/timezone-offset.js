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
 * TimezoneOffset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TimezoneOffset extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      abbr: 'abbr',
      isdst: 'isdst',
      offset: 'offset',
      time: 'time',
      ts: 'ts',
    });
  }

}
