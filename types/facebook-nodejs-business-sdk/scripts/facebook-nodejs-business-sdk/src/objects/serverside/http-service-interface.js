/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import HttpMethod from './http-method';
import EventResponse from './event-response';

export default class HttpServiceInterface {
    /**
    * @param {String} $url The graph API endpoint that will be requested
    * @param {HttpMethod} $method The HTTP request method
    * @param {Object} $headers Contains HTTP request headers including User-Agent and Accept-Encoding
    * @param {Object} $params Contains request parameters including access_token, data, test_event_code, etc.
    * @return {Promise<Object>}
    */
    executeRequest(url: string, method: string, headers: Object, params: Object): Promise<Object> {
        return new Promise((resolve, reject) => null);
    }
}
