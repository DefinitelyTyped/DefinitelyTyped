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
 * PartnerCategory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerCategory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      approximate_count: 'approximate_count',
      country: 'country',
      description: 'description',
      details: 'details',
      id: 'id',
      is_private: 'is_private',
      name: 'name',
      parent_category: 'parent_category',
      source: 'source',
      status: 'status',
      targeting_type: 'targeting_type',
    });
  }

}
