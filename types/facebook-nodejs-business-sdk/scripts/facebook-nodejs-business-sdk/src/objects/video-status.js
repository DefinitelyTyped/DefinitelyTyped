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
 * VideoStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStatus extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      copyright_check_status: 'copyright_check_status',
      processing_phase: 'processing_phase',
      processing_progress: 'processing_progress',
      publishing_phase: 'publishing_phase',
      uploading_phase: 'uploading_phase',
      video_status: 'video_status',
    });
  }

}
