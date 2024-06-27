/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */

import HttpServiceInterface from './http-service-interface';

export default class HttpServiceClientConfig {
    static _client: HttpServiceInterface;

    static setClient(client: HttpServiceInterface) {
        this._client = client;
    }

    static getClient() {
        return this._client;
    }
}
