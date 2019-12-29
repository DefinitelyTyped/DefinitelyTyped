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
import { strings } from './constants';
import MDCTextFieldIconAdapter from './adapter';

export default class MDCTextFieldIconFoundation extends MDCFoundation<MDCTextFieldIconAdapter> {
    static readonly strings: strings;

    static readonly defaultAdapter: MDCTextFieldIconAdapter;

    /**
     * Sets the content of the helper text field.
     */
    setDisabled(disabled: boolean): void;

    /**
     * Handles an interaction event
     */
    handleInteraction(evt: Event): void;
}
