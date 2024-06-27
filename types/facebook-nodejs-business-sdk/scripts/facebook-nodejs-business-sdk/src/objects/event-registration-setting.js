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
 * EventRegistrationSetting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventRegistrationSetting extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      questions: 'questions',
      target_type: 'target_type',
      ticket_tier_ids: 'ticket_tier_ids',
    });
  }



  get (fields: Array<string>, params: Object = {}): EventRegistrationSetting {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
