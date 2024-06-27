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
 * CanvasDynamicSetting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasDynamicSetting extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      child_documents: 'child_documents',
      product_set_id: 'product_set_id',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): CanvasDynamicSetting {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
