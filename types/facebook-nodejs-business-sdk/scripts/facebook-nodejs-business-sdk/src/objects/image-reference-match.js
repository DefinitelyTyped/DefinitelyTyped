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
 * ImageReferenceMatch
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ImageReferenceMatch extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      conflicting_countries: 'conflicting_countries',
      country_resolution_history: 'country_resolution_history',
      creation_time: 'creation_time',
      current_conflict_resolved_countries: 'current_conflict_resolved_countries',
      displayed_match_state: 'displayed_match_state',
      dispute_form_data_entries_with_translations: 'dispute_form_data_entries_with_translations',
      expiration_time: 'expiration_time',
      id: 'id',
      match_state: 'match_state',
      matched_reference_copyright: 'matched_reference_copyright',
      matched_reference_owner: 'matched_reference_owner',
      modification_history: 'modification_history',
      reference_copyright: 'reference_copyright',
      reference_owner: 'reference_owner',
      rejection_form_data_entries_with_translations: 'rejection_form_data_entries_with_translations',
      resolution_reason: 'resolution_reason',
      update_time: 'update_time',
    });
  }



  get (fields: Array<string>, params: Object = {}): ImageReferenceMatch {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
