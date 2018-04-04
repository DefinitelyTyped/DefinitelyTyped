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
import MDCCheckboxAdapter from './adapter';
import { MDCSelectionControl } from 'material__selection-control';
import MDCCheckboxFoundation from './foundation';
import { MDCRipple } from 'material__ripple';

export {MDCCheckboxAdapter, MDCCheckboxFoundation};

export class MDCCheckbox extends MDCComponent<MDCCheckboxAdapter, MDCCheckboxFoundation> implements MDCSelectionControl {
    static attachTo(root: Element): MDCCheckbox;

    getDefaultFoundation(): MDCCheckboxFoundation;

    readonly ripple: MDCRipple;

    checked: boolean;

    indeterminate: boolean;

    disabled: boolean;

    value: string;

    destroy(): void;
}
