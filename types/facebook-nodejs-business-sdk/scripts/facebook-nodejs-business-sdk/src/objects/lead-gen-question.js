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
 * LeadGenQuestion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenQuestion extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      conditional_questions_choices: 'conditional_questions_choices',
      conditional_questions_group_id: 'conditional_questions_group_id',
      dependent_conditional_questions: 'dependent_conditional_questions',
      id: 'id',
      inline_context: 'inline_context',
      key: 'key',
      label: 'label',
      options: 'options',
      type: 'type',
    });
  }

}
