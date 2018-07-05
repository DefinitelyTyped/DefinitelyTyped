// Type definitions for Material Components Web 0.35
// Project: https://material.io/components/
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
import MDCFloatingLabelFoundation from './foundation';
import MDCFloatingLabelAdapter from './adapter';

export { MDCFloatingLabelFoundation, MDCFloatingLabelAdapter };

export class MDCFloatingLabel extends MDCComponent<MDCFloatingLabelAdapter, MDCFloatingLabelFoundation> {
    static attachTo(root: Element): MDCFloatingLabel;

    /**
     * Styles the label to produce the label shake for errors.
     * @param  shouldShake styles the label to shake by adding shake class
     * if true, otherwise will stop shaking by removing shake class.
     */
    shake(shouldShake: boolean): void;

    /**
     * Styles label to float/dock.
     * @param shouldFloat styles the label to float by adding float class
     * if true, otherwise docks the label by removing the float class.
     */
    float(shouldFloat: boolean): void;

    getWidth(): number;
}
