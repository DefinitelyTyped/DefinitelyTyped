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

import { Context } from './context';

/**
 * @param transactionFamilyName - the name of the
 * transaction family that this handler can process, e.g. "intkey"
 * @param versions - the versions of the transaction
 * family that this handler can process, e.g. ["1.0", "1.5"]
 * @param namespaces - a list containing all of the
 * handler's namespaces, e.g. ["abcdef"]
 */
export class TransactionHandler {
    /**
     * @param transactionFamilyName - the name of the
     * transaction family that this handler can process, e.g. "intkey"
     * @param versions - the versions of the transaction
     * family that this handler can process, e.g. ["1.0", "1.5"]
     * @param namespaces - a list containing all of the
     * handler's namespaces, e.g. ["abcdef"]
     */
    constructor(transactionFamilyName: string, versions: string[], namespaces: string[]);

    /**
     * Apply is the single method where all the business logic for a
     * transaction family is defined. The method will be called by the
     * transaction processor upon receiving a TpProcessRequest that the
     * handler understands and will pass in the TpProcessRequest and an
     * initialized instance of the Context type.
     *
     * @param transactionProcessRequest - the
     * transaction to be processed, currently type any but should be
     * TpProcessRequest
     * @param context - the context the handler can use to
     * access state
     */
    apply(transactionProcessRequest: any, context: Context): void;
}
