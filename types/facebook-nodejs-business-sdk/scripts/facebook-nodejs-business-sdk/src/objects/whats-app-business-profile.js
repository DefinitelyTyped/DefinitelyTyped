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
 * WhatsAppBusinessProfile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessProfile extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name_verification: 'name_verification',
      whatsapp_business_api_data: 'whatsapp_business_api_data',
    });
  }



  get (fields: Array<string>, params: Object = {}): WhatsAppBusinessProfile {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): WhatsAppBusinessProfile {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
