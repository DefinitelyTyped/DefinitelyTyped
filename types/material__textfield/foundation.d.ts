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
import { MDCTextFieldAdapter, NativeInputType } from './adapter';
import MDCTextFieldBottomLineFoundation from './bottom-line/foundation';
import { cssClasses, strings } from './constants';

export default class MDCTextFieldFoundation extends MDCFoundation<MDCTextFieldAdapter> {
    static readonly cssClasses: cssClasses;

    static readonly strings: strings;

    static readonly defaultAdapter: MDCTextFieldAdapter;

    handleTextFieldInteraction(evt: Event): void;

    /**
     * Activates the text field focus state.
     */
    activateFocus(): void;

    /**
     * Sets the bottom line's transform origin, so that the bottom line activate
     * animation will animate out from the user's click location.
     */
    setBottomLineTransformOrigin(evt: Event): void;

    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programatically).
     */
    autoCompleteFocus(): void;

    /**
     * Handles when bottom line animation ends, performing actions that must wait
     * for animations to finish.
     */
    handleBottomLineAnimationEnd(): void;

    /**
     * Deactives the Text Field's focus state.
     */
    deactivateFocus(): void;

    /**
     * True if the Text Field is disabled.
     */
    isDisabled(): boolean;

    /**
     * Sets the text-field disabled or enabled.
     */
    setDisabled(disabled: boolean): void;

    /**
     * Sets the content of the helper text.
     */
    setHelperTextContent(content: string): void;

    /**
     * Sets the validity state of the Text Field.
     */
    setValid(isValid: boolean): void;
}
