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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';

/**
 * MessengerAdsPartialAutomatedStepList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerAdsPartialAutomatedStepList extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      fblead_form: 'fblead_form',
      first_step_id: 'first_step_id',
      id: 'id',
      page: 'page',
      privacy_url: 'privacy_url',
      reminder_text: 'reminder_text',
      stop_question_message: 'stop_question_message',
    });
  }


  getSteps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/steps'
    );
  }


  get (fields: Array<string>, params: Object = {}): MessengerAdsPartialAutomatedStepList {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
