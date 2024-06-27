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
import Cursor from './../cursor';
import Profile from './profile';

/**
 * LifeEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LifeEvent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      end_time: 'end_time',
      from: 'from',
      id: 'id',
      is_hidden: 'is_hidden',
      start_time: 'start_time',
      title: 'title',
      updated_time: 'updated_time',
    });
  }


  getLikes (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }


  get (fields: Array<string>, params: Object = {}): LifeEvent {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
