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
 * AdCreativePromotionMetadataSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePromotionMetadataSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      end_date: 'end_date',
      id: 'id',
      promotion_source: 'promotion_source',
      promotion_type: 'promotion_type',
      promotion_value: 'promotion_value',
      required_code: 'required_code',
      start_date: 'start_date',
    });
  }

}
