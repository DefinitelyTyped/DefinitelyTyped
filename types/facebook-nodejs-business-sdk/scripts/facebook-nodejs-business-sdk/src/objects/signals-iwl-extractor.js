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
 * SignalsIWLExtractor
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SignalsIWLExtractor extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      domain_uri: 'domain_uri',
      event_type: 'event_type',
      extractor_type: 'extractor_type',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): SignalsIWLExtractor {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
