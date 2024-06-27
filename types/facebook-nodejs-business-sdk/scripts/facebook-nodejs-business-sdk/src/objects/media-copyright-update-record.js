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
 * MediaCopyrightUpdateRecord
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaCopyrightUpdateRecord extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      action_types: 'action_types',
      actor: 'actor',
      actor_type: 'actor_type',
      creation_time: 'creation_time',
      id: 'id',
      ownership_countries: 'ownership_countries',
      whitelisted_accounts: 'whitelisted_accounts',
    });
  }



  get (fields: Array<string>, params: Object = {}): MediaCopyrightUpdateRecord {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
