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
 * SiteLink
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SiteLink extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      link_image_hash: 'link_image_hash',
      link_title: 'link_title',
      link_type: 'link_type',
      link_url: 'link_url',
    });
  }



  get (fields: Array<string>, params: Object = {}): SiteLink {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
