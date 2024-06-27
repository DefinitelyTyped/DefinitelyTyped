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
 * CustomAudienceSession
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceSession extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      end_time: 'end_time',
      num_invalid_entries: 'num_invalid_entries',
      num_matched: 'num_matched',
      num_received: 'num_received',
      progress: 'progress',
      session_id: 'session_id',
      stage: 'stage',
      start_time: 'start_time',
    });
  }

}
