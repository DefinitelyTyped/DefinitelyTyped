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
import MDCTextFieldHelperTextAdapter from './adapter';
import { cssClasses, strings } from './constants';

export default class MDCTextFieldHelperTextFoundation extends MDCFoundation<MDCTextFieldHelperTextAdapter> {
    static readonly cssClasses: cssClasses;

    static readonly strings: strings;

    static readonly defaultAdapter: MDCTextFieldHelperTextAdapter;

    /**
     * Sets the content of the helper text field.
     */
    setContent(content: string): void;

    /** Makes the helper text visible to the screen reader. */
    showToScreenReader(): void;

    /**
     * Sets the validity of the helper text based on the input validity.
     */
    setValidity(inputIsValid: boolean): void;
}
