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
 * MessengerDestinationPageWelcomeMessage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerDestinationPageWelcomeMessage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      page_welcome_message_body: 'page_welcome_message_body',
      page_welcome_message_type: 'page_welcome_message_type',
      template_name: 'template_name',
      time_created: 'time_created',
      time_last_used: 'time_last_used',
    });
  }

}
