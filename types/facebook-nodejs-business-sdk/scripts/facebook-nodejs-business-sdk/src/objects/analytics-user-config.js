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
 * AnalyticsUserConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsUserConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      demo_app_nux_config: 'demo_app_nux_config',
      flags: 'flags',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): AnalyticsUserConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
