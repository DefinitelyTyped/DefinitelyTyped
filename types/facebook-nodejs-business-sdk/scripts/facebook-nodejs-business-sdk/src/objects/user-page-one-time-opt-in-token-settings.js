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
 * UserPageOneTimeOptInTokenSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserPageOneTimeOptInTokenSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_timestamp: 'creation_timestamp',
      next_eligible_time: 'next_eligible_time',
      notification_messages_frequency: 'notification_messages_frequency',
      notification_messages_reoptin: 'notification_messages_reoptin',
      notification_messages_timezone: 'notification_messages_timezone',
      notification_messages_token: 'notification_messages_token',
      recipient_id: 'recipient_id',
      token_expiry_timestamp: 'token_expiry_timestamp',
      topic_title: 'topic_title',
      user_token_status: 'user_token_status',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): UserPageOneTimeOptInTokenSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
