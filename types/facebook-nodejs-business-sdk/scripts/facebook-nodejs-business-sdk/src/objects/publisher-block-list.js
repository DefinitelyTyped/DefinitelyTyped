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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import WebPublisher from './web-publisher';

/**
 * PublisherBlockList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PublisherBlockList extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_publishers: 'app_publishers',
      business_owner_id: 'business_owner_id',
      id: 'id',
      is_auto_blocking_on: 'is_auto_blocking_on',
      is_eligible_at_campaign_level: 'is_eligible_at_campaign_level',
      last_update_time: 'last_update_time',
      last_update_user: 'last_update_user',
      name: 'name',
      owner_ad_account_id: 'owner_ad_account_id',
      web_publishers: 'web_publishers',
    });
  }


  createAppendPublisherUrl (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/append_publisher_urls',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getPagedWebPublishers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      WebPublisher,
      fields,
      params,
      fetchFirstPage,
      '/paged_web_publishers'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): PublisherBlockList {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): PublisherBlockList {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
