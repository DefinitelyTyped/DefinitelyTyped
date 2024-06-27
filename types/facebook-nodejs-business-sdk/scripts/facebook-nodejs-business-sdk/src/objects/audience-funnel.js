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
 * AudienceFunnel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudienceFunnel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience_type_param_name: 'audience_type_param_name',
      audience_type_param_tags: 'audience_type_param_tags',
      custom_audience_groups_info: 'custom_audience_groups_info',
    });
  }

}
