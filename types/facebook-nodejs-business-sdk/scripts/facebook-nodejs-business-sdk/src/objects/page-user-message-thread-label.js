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

/**
 * PageUserMessageThreadLabel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUserMessageThreadLabel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      page_label_name: 'page_label_name',
    });
  }


  deleteLabel (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/label',
      params
    );
  }

  createLabel (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<PageUserMessageThreadLabel> {
    return this.createEdge(
      '/label',
      fields,
      params,
      PageUserMessageThreadLabel,
      pathOverride,
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): PageUserMessageThreadLabel {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
