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
 * VideoCopyrightGeoGate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightGeoGate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      excluded_countries: 'excluded_countries',
      included_countries: 'included_countries',
    });
  }

}
