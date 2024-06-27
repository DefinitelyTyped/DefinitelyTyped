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
 * VideoCopyrightRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightRule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      condition_groups: 'condition_groups',
      copyrights: 'copyrights',
      created_date: 'created_date',
      creator: 'creator',
      id: 'id',
      is_in_migration: 'is_in_migration',
      name: 'name',
    });
  }

  static get Source () {
    return Object.freeze({
      match_settings_dialog: 'MATCH_SETTINGS_DIALOG',
      rules_selector: 'RULES_SELECTOR',
      rules_tab: 'RULES_TAB',
    });
  }


  get (fields: Array<string>, params: Object = {}): VideoCopyrightRule {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
