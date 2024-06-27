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
 * AdRecommendation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRecommendation extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      blame_field: 'blame_field',
      code: 'code',
      confidence: 'confidence',
      importance: 'importance',
      message: 'message',
      recommendation_data: 'recommendation_data',
      title: 'title',
      value: 'value',
    });
  }

  static get Confidence () {
    return Object.freeze({
      high: 'HIGH',
      low: 'LOW',
      medium: 'MEDIUM',
    });
  }
  static get Importance () {
    return Object.freeze({
      high: 'HIGH',
      low: 'LOW',
      medium: 'MEDIUM',
    });
  }
}
