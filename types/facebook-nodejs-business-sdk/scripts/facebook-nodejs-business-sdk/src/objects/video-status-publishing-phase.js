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
 * VideoStatusPublishingPhase
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStatusPublishingPhase extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      errors: 'errors',
      publish_status: 'publish_status',
      publish_time: 'publish_time',
      status: 'status',
    });
  }

}
