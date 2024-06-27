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
 * RecommendedPagePost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RecommendedPagePost extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      intent_score: 'intent_score',
      is_ig_media: 'is_ig_media',
      post_id: 'post_id',
    });
  }

}
