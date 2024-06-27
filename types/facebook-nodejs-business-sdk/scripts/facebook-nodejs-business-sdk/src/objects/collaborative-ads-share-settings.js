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
 * CollaborativeAdsShareSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CollaborativeAdsShareSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      agency_business: 'agency_business',
      id: 'id',
      product_catalog_proxy_id: 'product_catalog_proxy_id',
      utm_campaign: 'utm_campaign',
      utm_medium: 'utm_medium',
      utm_source: 'utm_source',
    });
  }



  get (fields: Array<string>, params: Object = {}): CollaborativeAdsShareSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
