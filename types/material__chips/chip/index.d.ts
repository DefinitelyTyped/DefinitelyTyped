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
import MDCChipFoundation from './foundation';
import MDCChipAdapter from './adapter';
import { MDCRipple } from 'material__ripple';

export {  MDCChipFoundation, MDCChipAdapter };

export class MDCChip extends MDCComponent<MDCChipAdapter, MDCChipFoundation> {
    static attachTo(root: Element): MDCChip;
    /**
     * Returns true if the chip is selected.
     */
    isSelected(): boolean;

    /**
     * Destroys the chip and removes the root element from the DOM.
     */
    remove(): void;

    readonly foundation: MDCChipFoundation;

    readonly ripple: MDCRipple;
}
