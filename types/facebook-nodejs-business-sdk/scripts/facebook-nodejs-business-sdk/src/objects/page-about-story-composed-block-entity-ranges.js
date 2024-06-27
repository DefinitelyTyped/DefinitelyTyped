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
 * PageAboutStoryComposedBlockEntityRanges
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAboutStoryComposedBlockEntityRanges extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      key: 'key',
      length: 'length',
      offset: 'offset',
    });
  }

}
