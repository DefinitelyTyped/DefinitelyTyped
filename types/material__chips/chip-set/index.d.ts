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
import MDCChipSetFoundation from './foundation';
import MDCChipSetAdapter from './adapter';
import { MDCChip } from '../chip';

export { MDCChipSetFoundation, MDCChipSetAdapter };

export class MDCChipSet extends MDCComponent<MDCChipSetAdapter, MDCChipSetFoundation> {
    static attachTo(root: any): MDCChipSet;

    initialize(chipFactory?: (el: Element) => MDCChip): void;

    initialSyncWithDOM(): void;

    /**
     * Creates a new chip in the chip set with the given text, leading icon, and trailing icon.
     */
    addChip(text: string, leadingIcon?: Element | null, trailingIcon?: Element | null): void;
}
