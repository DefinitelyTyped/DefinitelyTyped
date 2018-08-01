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
/**
 * Adapter for MDC Chip Set.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Chip Set into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 */

import { MDCChip } from '../chip';

export default interface MDCChipSetAdapter {
    /**
     * Returns true if the root element contains the given class name.
     */
    hasClass(className: string): boolean;
    /**
     * Registers an event handler on the root element for a given event.
     */
    registerInteractionHandler(evtType: string, handler: EventListener): void;
    /**
     * Deregisters an event handler on the root element for a given event.
     */
    deregisterInteractionHandler(evtType: string, handler: EventListener): void;
    /**
     * Appends and returns a new chip element with the given text, leading icon, and trailing icon.
     */
    appendChip(text: string, leadingIcon?: Element | null, trailingIcon?: Element | null): Element;
    /**
     * Removes the chip object from the chip set.
     */
    removeChip(chip: MDCChip): void;
}
