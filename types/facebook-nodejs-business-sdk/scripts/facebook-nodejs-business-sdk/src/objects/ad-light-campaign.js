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
 * AdLightCampaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLightCampaign extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      campaign_id: 'campaign_id',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdLightCampaign {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
