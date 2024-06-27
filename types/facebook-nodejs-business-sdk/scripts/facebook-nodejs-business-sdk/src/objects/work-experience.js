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
 * WorkExperience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkExperience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      employer: 'employer',
      end_date: 'end_date',
      from: 'from',
      id: 'id',
      location: 'location',
      position: 'position',
      projects: 'projects',
      start_date: 'start_date',
      with: 'with',
    });
  }



  get (fields: Array<string>, params: Object = {}): WorkExperience {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
