/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import MDCFoundation from 'material__base/foundation';
import MDCSimpleMenuAdapter from './adapter';
import { cssClasses, strings, numbers } from './constants';
import { clamp, bezierProgress } from '../util';

export default class MDCSimpleMenuFoundation extends MDCFoundation<MDCSimpleMenuAdapter> {
    static readonly cssClasses: cssClasses;

    static readonly strings: strings;

    static readonly numbers: numbers;

    static readonly defaultAdapter: MDCSimpleMenuAdapter;

    /**
     * Open the menu.
     */
    open(options?: {focusIndex?: number}): void;

    /**
     * Closes the menu.
     */
    close(evt?: Event): void;

    isOpen(): boolean;
}
