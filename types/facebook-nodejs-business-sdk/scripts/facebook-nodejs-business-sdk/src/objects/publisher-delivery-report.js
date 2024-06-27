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
 * PublisherDeliveryReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PublisherDeliveryReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      content_types: 'content_types',
      estimated_impressions: 'estimated_impressions',
      name: 'name',
      status: 'status',
      url: 'url',
    });
  }

}
