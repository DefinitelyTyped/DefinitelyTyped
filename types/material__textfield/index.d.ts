// Type definitions for Material Components Web 0.35
// Project: https://material.io/components/, https://github.com/material-components/material-components-web
// Definitions by: Brent Douglas <https://github.com/BrentDouglas>, Collin Kostichuk <https://github.com/ckosti>
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
import MDCTextFieldFoundation from './foundation';
import MDCTextFieldAdapter, { FoundationMapType } from './adapter';
import { MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, MDCTextFieldHelperTextAdapter } from './helper-text';
import { MDCTextFieldIcon, MDCTextFieldIconFoundation, MDCTextFieldIconAdapter } from './icon';
import { MDCRipple, MDCRippleFoundation } from 'material__ripple';
import { MDCLineRipple } from 'material__line-ripple';
import { MDCFloatingLabel } from 'material__floating-label';
import { MDCNotchedOutline } from 'material__notched-outline';

export { MDCTextFieldFoundation, MDCTextFieldAdapter, MDCTextFieldHelperText };
export { MDCTextFieldHelperTextFoundation, MDCTextFieldHelperTextAdapter, MDCTextFieldIcon };
export { MDCTextFieldIconFoundation, MDCTextFieldIconAdapter };

export class MDCTextField extends MDCComponent<MDCTextFieldAdapter, MDCTextFieldFoundation> {
    static attachTo(root: Element): MDCTextField;

    initialize(
        rippleFactory?: (el: Element, foundation: MDCRippleFoundation) => MDCRipple,
        lineRippleFactory?: (el: Element) => MDCLineRipple,
        helperTextFactory?: (el: Element) => MDCTextFieldHelperText,
        iconFactory?: (el: Element) => MDCTextFieldIcon,
        labelFactory?: (el: Element) => MDCFloatingLabel,
        outlineFactory?: (el: Element) => MDCNotchedOutline): void;

    /**
     * Initiliazes the Text Field's internal state based on the environment's
     * state.
     */
    initialSyncWithDom(): void;

    value: string;

    disabled: boolean;

    valid: boolean;

    required: boolean;

    pattern: string;

    minLength: number;

    maxLength: number;

    min: string;

    max: string;

    step: string;

    helperTextContent: string;

    /**
     * Recomputes the outline SVG path for the outline element.
     */
    layout(): void;

    /**
     * Ideally we would use a 'writeonly' modifier here since this is a setter,
     * but such a thing does not exist.
     * https://github.com/Microsoft/TypeScript/issues/4839
     * https://github.com/Microsoft/TypeScript/issues/21759
     */
    useNativeValidation: boolean;
}
