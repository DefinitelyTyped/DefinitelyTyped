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
 * AdCreativeLinkDataSponsorshipInfoSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataSponsorshipInfoSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      sponsor_image_url: 'sponsor_image_url',
      sponsor_name: 'sponsor_name',
    });
  }

}
