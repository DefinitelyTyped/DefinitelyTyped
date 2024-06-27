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
 * CPASAdCreationTemplate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASAdCreationTemplate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      id: 'id',
      is_unused_template: 'is_unused_template',
      name: 'name',
      optimization_goal: 'optimization_goal',
      targeting_type: 'targeting_type',
      template_type: 'template_type',
    });
  }



  get (fields: Array<string>, params: Object = {}): CPASAdCreationTemplate {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
