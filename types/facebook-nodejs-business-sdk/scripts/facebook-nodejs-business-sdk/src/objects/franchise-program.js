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
 * FranchiseProgram
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FranchiseProgram extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business_asset_group: 'business_asset_group',
      creator_business: 'creator_business',
      description: 'description',
      end_date: 'end_date',
      id: 'id',
      name: 'name',
      program_access_type: 'program_access_type',
      program_approval_type: 'program_approval_type',
      program_image_link: 'program_image_link',
      program_url: 'program_url',
      shared_custom_audience: 'shared_custom_audience',
      start_date: 'start_date',
    });
  }



  get (fields: Array<string>, params: Object = {}): FranchiseProgram {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
