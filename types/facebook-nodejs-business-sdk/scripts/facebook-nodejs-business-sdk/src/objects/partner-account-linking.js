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
 * PartnerAccountLinking
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerAccountLinking extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adaccount: 'adaccount',
      app: 'app',
      business: 'business',
      externalidentifier: 'externalidentifier',
      externalidentifieruri: 'externalidentifieruri',
      id: 'id',
      partnername: 'partnername',
      pixel: 'pixel',
    });
  }



  get (fields: Array<string>, params: Object = {}): PartnerAccountLinking {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
