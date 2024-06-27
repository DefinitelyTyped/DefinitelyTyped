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
 * LeadGenConditionalQuestionsGroupChoices
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenConditionalQuestionsGroupChoices extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      customized_token: 'customized_token',
      next_question_choices: 'next_question_choices',
      value: 'value',
    });
  }

}
