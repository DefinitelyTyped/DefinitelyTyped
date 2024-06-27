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
 * Privacy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Privacy extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      allow: 'allow',
      deny: 'deny',
      description: 'description',
      friends: 'friends',
      networks: 'networks',
      value: 'value',
    });
  }

}
