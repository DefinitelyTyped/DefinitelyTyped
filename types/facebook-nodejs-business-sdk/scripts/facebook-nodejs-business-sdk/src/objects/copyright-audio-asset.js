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
 * CopyrightAudioAsset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightAudioAsset extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audio_availability_status: 'audio_availability_status',
      audio_library_policy: 'audio_library_policy',
      creation_time: 'creation_time',
      id: 'id',
      reference_files: 'reference_files',
      title: 'title',
      update_time: 'update_time',
    });
  }

}
