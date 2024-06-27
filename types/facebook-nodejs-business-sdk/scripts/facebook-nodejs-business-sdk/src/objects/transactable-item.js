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
import CatalogItemChannelsToIntegrityStatus from './catalog-item-channels-to-integrity-status';

/**
 * TransactableItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TransactableItem extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      action_title: 'action_title',
      applinks: 'applinks',
      category_specific_fields: 'category_specific_fields',
      currency: 'currency',
      description: 'description',
      duration_time: 'duration_time',
      duration_type: 'duration_type',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      order_index: 'order_index',
      price: 'price',
      price_type: 'price_type',
      sanitized_images: 'sanitized_images',
      session_type: 'session_type',
      time_padding_after_end: 'time_padding_after_end',
      title: 'title',
      transactable_item_id: 'transactable_item_id',
      url: 'url',
      visibility: 'visibility',
    });
  }

  static get ImageFetchStatus () {
    return Object.freeze({
      direct_upload: 'DIRECT_UPLOAD',
      fetched: 'FETCHED',
      fetch_failed: 'FETCH_FAILED',
      no_status: 'NO_STATUS',
      outdated: 'OUTDATED',
      partial_fetch: 'PARTIAL_FETCH',
    });
  }
  static get Visibility () {
    return Object.freeze({
      published: 'PUBLISHED',
      staging: 'STAGING',
    });
  }

  getChannelsToIntegrityStatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CatalogItemChannelsToIntegrityStatus,
      fields,
      params,
      fetchFirstPage,
      '/channels_to_integrity_status'
    );
  }


  get (fields: Array<string>, params: Object = {}): TransactableItem {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
