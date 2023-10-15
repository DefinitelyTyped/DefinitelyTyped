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

import { TransactionHandler } from './handler';

export class TransactionProcessor {
    /** Constructs a new TransactionProcessor */
    constructor(url: string);

    /**
     * addHandler adds the given handler to the transaction processor so
     * it can receive transaction processing requests. All handlers must
     * be added prior to starting the processor.
     *
     * @param handler - a handler to be added
     */
    addHandler(handler: TransactionHandler): void;

    /**
     * start connects the transaction processor to a validator and
     * starts listening for requests and routing them to an appropriate
     * handler.
     */
    start(): void;

    private _handleShutdown(): void;
}
