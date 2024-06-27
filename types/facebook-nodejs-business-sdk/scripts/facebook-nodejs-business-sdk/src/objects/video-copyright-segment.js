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
 * VideoCopyrightSegment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightSegment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      duration_in_sec: 'duration_in_sec',
      media_type: 'media_type',
      start_time_in_sec: 'start_time_in_sec',
    });
  }

}
