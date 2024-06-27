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
 * EventTicketSetting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventTicketSetting extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      ticket_delivery_type: 'ticket_delivery_type',
    });
  }



  get (fields: Array<string>, params: Object = {}): EventTicketSetting {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
