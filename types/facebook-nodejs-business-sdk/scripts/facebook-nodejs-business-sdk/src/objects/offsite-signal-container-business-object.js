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
import AdsDataset from './ads-dataset';
import Page from './page';

/**
 * OffsiteSignalContainerBusinessObject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OffsiteSignalContainerBusinessObject extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      id: 'id',
      is_eligible_for_sharing_to_ad_account: 'is_eligible_for_sharing_to_ad_account',
      is_eligible_for_sharing_to_business: 'is_eligible_for_sharing_to_business',
      is_unavailable: 'is_unavailable',
      name: 'name',
      primary_container_id: 'primary_container_id',
    });
  }


  getLinkedApplication (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsDataset,
      fields,
      params,
      fetchFirstPage,
      '/linked_application'
    );
  }

  getLinkedPage (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/linked_page'
    );
  }


  get (fields: Array<string>, params: Object = {}): OffsiteSignalContainerBusinessObject {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
