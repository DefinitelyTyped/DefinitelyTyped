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

import { TransactionProcessor } from 'sawtooth-sdk/processor';
import { TransactionHandler } from 'sawtooth-sdk/processor/handler';
import { Context } from 'sawtooth-sdk/processor/context';
/*
 * Test setup
 */

/**
 *  processor/handler.d.ts tests
 */

// $ExpectType TransactionHandler
const handler = new TransactionHandler('test', ['test'], ['test']);

/**
 *  processor/index.d.ts tests
 */

// $ExpectType TransactionProcessor
const processor = new TransactionProcessor('test.url');

// $ExpectType void
processor.addHandler(handler);

/**
 *  processor/context.d.ts tests
 */

// $ExpectType Context
const context = new Context('', 'test');
