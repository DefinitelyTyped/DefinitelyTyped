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
 * AdsPixelSignalsIWLNux
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelSignalsIWLNux extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      background_color: 'background_color',
      content: 'content',
      content_color: 'content_color',
      content_size: 'content_size',
      img_url: 'img_url',
    });
  }

}
