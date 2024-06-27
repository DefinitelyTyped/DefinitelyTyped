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
 * AdCreativeStaticFallbackSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeStaticFallbackSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      call_to_action: 'call_to_action',
      description: 'description',
      image_hash: 'image_hash',
      link: 'link',
      message: 'message',
      name: 'name',
    });
  }

}
