// Copyright (c) 2020 Target Brands, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/// <reference types="node" />

export class Context {
    constructor(stream: any, contextId: string);

    /**
     * getState queries the validator state for data at each of the
     * addresses in the given list. The addresses that have been set are
     * returned in a list.
     *
     * @param addresses an array of addresses
     * @param [timeout] - an optional timeout
     * @throws {AuthorizationException}
     */
    getState(addresses: string[], timeout?: number): Promise<any>;

    /**
     * setState requests that each address in the provided dictionary
     * be set in validator state to its corresponding value. A list is
     * returned containing the successfully set addresses.
     *
     * @param addressValuePairs - a map of (address, buffer)
     * entries, where the buffer is the encoded value to be set at the
     * the given address.
     * @param [timeout] - an optional timeout
     * @throws {AuthorizationException}
     */
    setState(addressValuePairs: object, timeout?: number): Promise<any>;

    /**
     * deleteState requests that each of the provided addresses be
     * unset in validator state. A list of successfully deleted
     * addresses is returned.
     *
     * @param addresses -  an array of addresses
     * @param [timeout] - an optional timeout
     * @throws {AuthorizationException}
     */
    deleteState(addresses: string[], timeout?: number): Promise<any>;

    /**
     * Add a blob to the execution result for this transaction.
     *
     * @param data - the data to add
     * @param [timeout] - an optional timeout
     */
    addReceiptData(data: Buffer, timeout?: number): Promise<any>;

    /**
     * Add a new event to the execution result for this transaction.
     *
     * @param eventType - This is used to subscribe to events. It should
     * be globally unique and describe what, in general, has occurred
     * @param attributes - Additional information about the event that
     * is transparent to the validator.  Attributes can be used by subscribers to
     * filter the type of events they receive.
     * @param data - Additional information about the event that is
     * opaque to the validator.
     * @param [timeout] - an optional timeout
     */
    addEvent(eventType: string, attributes: string[][], data: Buffer, timeout?: number): Promise<any>;
}
