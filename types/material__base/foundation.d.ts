/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface MDCStrings {
    [key: string]: string;
}

export interface MDCNumbers {
    [key: string]: number;
}

export default class MDCFoundation<A> {
    static readonly cssClasses: MDCStrings;

    static readonly strings: MDCStrings;

    static readonly numbers: MDCNumbers;

    static readonly defaultAdapter: any;

    constructor(adapter: A);

    // Subclasses should override this method to perform initialization routines (registering events, etc.)
    init(): void;

    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    destroy(): void;
}
