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
 * PageGetStartedNullstate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageGetStartedNullstate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      cta_title: 'cta_title',
      processed_greeting: 'processed_greeting',
      responsiveness: 'responsiveness',
    });
  }

}
