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
import Cursor from './../cursor';
import ProductImage from './product-image';

/**
 * CPASLsbImageBank
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASLsbImageBank extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_group_id: 'ad_group_id',
      catalog_segment_proxy_id: 'catalog_segment_proxy_id',
      id: 'id',
    });
  }


  getBackupImages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductImage,
      fields,
      params,
      fetchFirstPage,
      '/backup_images'
    );
  }


  get (fields: Array<string>, params: Object = {}): CPASLsbImageBank {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): CPASLsbImageBank {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
