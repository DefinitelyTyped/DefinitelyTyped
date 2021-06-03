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

// tslint:disable:no-unnecessary-class
export class _TransactionProcessorError {
    protected constructor(message?: string, extendedData?: Buffer | Uint8Array);
}

/**
 * Constructs a new InvalidTransaction.
 *
 * @param [message] - an optional message, defaults to the empty
 * string
 * @param [extendedData] - optional, application-specific
 * serialized data to returned to the transaction submitter.
 */
export class InvalidTransaction extends _TransactionProcessorError {}

/**
 * Constructs a new InternalError
 * @param [message] - an optional message, defaults to the empty
 * string
 * @param [extendedData] - optional, application-specific
 * serialized data to returned to the transaction submitter.
 */
export class InternalError extends _TransactionProcessorError {}

/**
 * Construcs a new ValidatorConnectionError
 *
 * @param [message] - an optional message, defaults to the empty
 * string
 */
export class ValidatorConnectionError extends Error {
    /**
     * Construcs a new ValidatorConnectionError
     *
     * @param [message] - an optional message, defaults to the empty
     * string
     */
    constructor(message?: string);
}

/**
 * Construcs a new AuthorizationException
 *
 * @param [message] - an optional message, defaults to the empty
 * string
 */
export class AuthorizationException extends Error {
    /**
     * Construcs a new AuthorizationException
     *
     * @param [message] - an optional message, defaults to the empty
     * string
     */
    constructor(message?: string);
}
