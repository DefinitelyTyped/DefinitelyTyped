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
 * VideoStatusUploadingPhase
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStatusUploadingPhase extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      bytes_transferred: 'bytes_transferred',
      errors: 'errors',
      source_file_size: 'source_file_size',
      status: 'status',
    });
  }

}
