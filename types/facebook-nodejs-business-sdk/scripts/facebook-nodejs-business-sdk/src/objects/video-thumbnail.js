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
 * VideoThumbnail
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoThumbnail extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      height: 'height',
      id: 'id',
      is_preferred: 'is_preferred',
      name: 'name',
      scale: 'scale',
      uri: 'uri',
      width: 'width',
    });
  }

}
