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
 * VideoPoll
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoPoll extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      close_after_voting: 'close_after_voting',
      default_open: 'default_open',
      id: 'id',
      question: 'question',
      show_gradient: 'show_gradient',
      show_results: 'show_results',
      status: 'status',
    });
  }

  static get Status () {
    return Object.freeze({
      closed: 'closed',
      results_open: 'results_open',
      voting_open: 'voting_open',
    });
  }
  static get Action () {
    return Object.freeze({
      attach_to_video: 'ATTACH_TO_VIDEO',
      close: 'CLOSE',
      delete_poll: 'DELETE_POLL',
      show_results: 'SHOW_RESULTS',
      show_voting: 'SHOW_VOTING',
    });
  }

  getPollOptions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/poll_options'
    );
  }


  get (fields: Array<string>, params: Object = {}): VideoPoll {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): VideoPoll {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
