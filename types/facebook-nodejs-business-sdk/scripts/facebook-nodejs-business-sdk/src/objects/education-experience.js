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
 * EducationExperience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EducationExperience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      classes: 'classes',
      concentration: 'concentration',
      degree: 'degree',
      id: 'id',
      school: 'school',
      type: 'type',
      with: 'with',
      year: 'year',
    });
  }



  get (fields: Array<string>, params: Object = {}): EducationExperience {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
