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
 * IGAccessTokenForIGOnlyAPI
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGAccessTokenForIGOnlyAPI extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      access_token: 'access_token',
      expires_in: 'expires_in',
      token_type: 'token_type',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): IGAccessTokenForIGOnlyAPI {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
