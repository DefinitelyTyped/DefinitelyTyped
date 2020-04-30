// Type definitions for sawtooth-sdk 1.1
// Project: https://www.hyperledger.org/projects/sawtooth, https://github.com/hyperledger/sawtooth-core
// Definitions by: Patrick Erichsen <https://github.com/Patrick-Erichsen>
//                 Trevor McDonald  <https://github.com/trevormcdonald>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

export as namespace sawtooth;

import * as signing from './signing';
import * as protobuf from './protobuf';
import * as exceptions from './processor/exceptions';
import * as processor from './processor';

export { signing, protobuf, exceptions, processor };
