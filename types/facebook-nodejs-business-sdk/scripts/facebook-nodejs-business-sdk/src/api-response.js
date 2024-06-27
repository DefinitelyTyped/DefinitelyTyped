/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */

import HTTP_STATUS from './http-status';
import {FacebookRequestError} from './exceptions';
/**
 * Encapsulates an http response from Facebook's Graph API.
 */
class APIResponse {
  _body: Object;
  _httpStatus: string;
  _headers: Object;
  _call: Object;
  _response: Object;

  constructor(response: Object, call?: Object): void {
    response.body = JSON.parse(response.body);
    this._body = response.body;
    this._httpStatus = response.code;
    this._headers = response.headers;
    this._call = call;
    this._response = response;
  }

  /**
   * @return {Object} The response body
   */
  get body(): any {
    return this._body;
  }

  get headers(): any {
    return this._headers;
  }

  get etag(): any {
    return this._headers['ETag'];
  }

  get status(): string {
    return this._httpStatus;
  }

  get isSuccess(): boolean {
    const body = this._body;

    if ('error' in body) {
      return false;
    } else if (Object.keys(body).length !== 0) {
      if ('success' in body) {
        return body['success'];
      }
      return !('Service Unavailable' in body);
    } else if (this._httpStatus === HTTP_STATUS.NOT_MODIFIED) {
      // ETag Hit
      return true;
    } else if (this._httpStatus === HTTP_STATUS.OK) {
      // HTTP OK
      return true;
    } else {
      // Something else
      return false;
    }
  }

  get error(): any {
    if (this.isSuccess) {
      return null;
    }

    return new FacebookRequestError(
      this._response,
      this._call.method,
      this._call.relativeUrl,
      this._call.body,
    );
  }
}

export default APIResponse;
