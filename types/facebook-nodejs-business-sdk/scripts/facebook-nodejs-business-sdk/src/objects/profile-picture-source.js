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
 * ProfilePictureSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProfilePictureSource extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      bottom: 'bottom',
      cache_key: 'cache_key',
      height: 'height',
      is_silhouette: 'is_silhouette',
      left: 'left',
      right: 'right',
      top: 'top',
      url: 'url',
      width: 'width',
    });
  }

  static get Type () {
    return Object.freeze({
      album: 'album',
      small: 'small',
      thumbnail: 'thumbnail',
    });
  }
}
