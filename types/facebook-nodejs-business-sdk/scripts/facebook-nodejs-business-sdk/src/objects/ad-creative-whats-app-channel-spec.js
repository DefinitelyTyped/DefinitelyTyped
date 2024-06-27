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
 * AdCreativeWhatsAppChannelSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeWhatsAppChannelSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      channel_id: 'channel_id',
      channel_url: 'channel_url',
    });
  }

}
