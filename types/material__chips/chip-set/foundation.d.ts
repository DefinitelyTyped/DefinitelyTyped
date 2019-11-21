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
import MDCChipFoundation from './foundation';
import MDCChipSetAdapter from './adapter';
import { strings, cssClasses } from './constants';

export default class MDCChipSetFoundation extends MDCFoundation<MDCChipSetAdapter> {
    static readonly strings: strings;

    static readonly cssClasses: cssClasses;

    static readonly defaultAdapter: MDCChipSetAdapter;

    /**
     * Returns a new chip element with the given text, leading icon, and trailing icon,
     * added to the root chip set element.
     */
    addChip(text: string, leadingIcon?: Element | null, trailingIcon?: Element | null): Element;

    /**
     * Selects the given chip. Deselects all other chips if the chip set is of the choice variant.
     */
    select(chipFoundation: MDCChipFoundation): void;

    /**
     * Deselects the given chip.
     */
    deselect(chipFoundation: MDCChipFoundation): void;
}
