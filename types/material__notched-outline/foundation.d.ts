/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
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
import { cssClasses, strings } from './constants';
import MDCNotchedOutlineAdapter from './adapter';

export default class MDCNotchedOutlineFoundation extends MDCFoundation<MDCNotchedOutlineAdapter> {
    static readonly strings: strings;

    static readonly cssClasses: cssClasses;

    static readonly defaultAdapter: MDCNotchedOutlineAdapter;

    /**
     * Adds the outline notched selector and updates the notch width
     * calculated based off of notchWidth and isRtl.
     */
    notch(notchWidth: number, isRtl?: boolean): void;

    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    closeNotch(): void;
}
