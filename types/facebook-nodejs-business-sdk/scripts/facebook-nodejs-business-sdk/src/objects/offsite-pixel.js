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
 * OffsitePixel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OffsitePixel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creator: 'creator',
      id: 'id',
      js_pixel: 'js_pixel',
      last_firing_time: 'last_firing_time',
      name: 'name',
      tag: 'tag',
    });
  }



  get (fields: Array<string>, params: Object = {}): OffsitePixel {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
