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
 * ChildEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ChildEvent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      end_time: 'end_time',
      id: 'id',
      start_time: 'start_time',
      ticket_uri: 'ticket_uri',
    });
  }

}
