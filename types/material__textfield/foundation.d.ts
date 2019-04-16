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
import { cssClasses, strings, numbers } from './constants';
import MDCTextFieldAdapter, { FoundationMapType } from './adapter';

export default class MDCTextFieldFoundation extends MDCFoundation<MDCTextFieldAdapter> {
    static readonly cssClasses: cssClasses;

    static readonly strings: strings;

    static readonly numbers: numbers;

    readonly shouldShake: boolean;

    readonly shouldFloat: boolean;

    static readonly defaultAdapter: MDCTextFieldAdapter;

    constructor(adapter: MDCTextFieldAdapter, foundationMap?: FoundationMapType);

    /**
     * Handles user interactions with the Text Field.
     */
    handleTextFieldInteraction(): void;

    /**
     * Opens/closes the notched outline.
     */

    notchOutline(openNotch: boolean): void;
    /**
     * Activates the text field focus state.
     */

    activateFocus(): void;
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    setTransformOrigin(evt: Event): void;

    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programatically).
     */
    autoCompleteFocus(): void;

    deactivateFocus(): void;

    getValue(): string;

    setValue(value: string): void;

    isValid(): boolean;

    setValid(isValid: boolean): void;

    setUseNativeValidation(useNativeValidation: boolean): void;

    isDisabled(): boolean;

    setDisabled(disabled: boolean): void;

    setHelperTextContent(content: string): void;
}
