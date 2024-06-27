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
 * ThirdPartyMeasurementReportDataset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyMeasurementReportDataset extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      category: 'category',
      id: 'id',
      partner: 'partner',
      product: 'product',
      schema: 'schema',
    });
  }



  get (fields: Array<string>, params: Object = {}): ThirdPartyMeasurementReportDataset {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
