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
 * ResearchPollStudy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ResearchPollStudy extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account: 'account',
      id: 'id',
      name: 'name',
    });
  }



  get (fields: Array<string>, params: Object = {}): ResearchPollStudy {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
