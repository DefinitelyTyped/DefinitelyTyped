// Type definitions for Material Components Web 0.26
// Project: https://material.io/components/
// Definitions by: Brent Douglas <https://github.com/BrentDouglas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

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

import MDCComponent from 'material__base/component';
import { MDCRipple } from 'material__ripple';

import { cssClasses, strings } from './constants';
import { MDCTextFieldAdapter } from './adapter';
import MDCTextFieldFoundation from './foundation';
import { MDCTextFieldBottomLine } from './bottom-line/index';
import { MDCTextFieldHelperText } from './helper-text/index';

export {MDCTextFieldAdapter, MDCTextFieldFoundation};

export class MDCTextField extends MDCComponent<MDCTextFieldAdapter, MDCTextFieldFoundation> {
    static attachTo(root: Element): MDCTextField;

    initialize(
      rippleFactory?: (el: Element) => MDCRipple,
      bottomLineFactory?: (el: Element) => MDCTextFieldBottomLine
    ): void;

    destroy(): void;

    /**
     * Initiliazes the Text Field's internal state based on the environment's
     * state.
     */
    initialSyncWithDom(): void;

    disabled: boolean;

    valid: boolean;

    /**
     * Sets the helper text element content.
     */
    helperTextContent: string;

    getDefaultFoundation(): MDCTextFieldFoundation;
}
