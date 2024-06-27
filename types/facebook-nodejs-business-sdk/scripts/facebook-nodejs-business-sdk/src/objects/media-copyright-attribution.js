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
 * MediaCopyrightAttribution
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaCopyrightAttribution extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attribution_ig_target_id: 'attribution_ig_target_id',
      attribution_target_email_address: 'attribution_target_email_address',
      attribution_target_id: 'attribution_target_id',
      attribution_target_name: 'attribution_target_name',
      attribution_type: 'attribution_type',
      attribution_uri: 'attribution_uri',
      copyright_count: 'copyright_count',
      creation_time: 'creation_time',
      creator: 'creator',
      id: 'id',
      is_enabled: 'is_enabled',
      link_title: 'link_title',
      match_count: 'match_count',
      owner: 'owner',
      status: 'status',
      title: 'title',
    });
  }



  get (fields: Array<string>, params: Object = {}): MediaCopyrightAttribution {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
