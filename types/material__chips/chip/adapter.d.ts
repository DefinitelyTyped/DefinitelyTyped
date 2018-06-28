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
 * Adapter for MDC Chip.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Chip into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 */
export default interface MDCChipAdapter {
    addClass(className: string): void;

    removeClass(className: string): void;

    hasClass(className: string): boolean;

    addClassToLeadingIcon(className: string): void;

    removeClassFromLeadingIcon(className: string): void;
    /**
     * Returns true if target has className, false otherwise.
     */
    eventTargetHasClass(target: EventTarget, className: string): boolean;
    /**
     * Registers an event listener on the root element for a given event.
     */
    registerEventHandler(evtType: string, handler: EventListener): void;
    /**
     * Deregisters an event listener on the root element for a given event.
     */
    deregisterEventHandler(evtType: string, handler: EventListener): void;
    /**
     * Registers an event listener on the trailing icon element for a given event.
     */
    registerTrailingIconInteractionHandler(evtType: string, handler: EventListener): void;
    /**
     * Deregisters an event listener on the trailing icon element for a given event.
     */
    deregisterTrailingIconInteractionHandler(evtType: string, handler: EventListener): void;
    /**
     * Emits a custom "MDCChip:interaction" event denoting the chip has been
     * interacted with (typically on click or keydown).
     */
    notifyInteraction(): void;
    /**
     * Emits a custom "MDCChip:trailingIconInteraction" event denoting the trailing icon has been
     * interacted with (typically on click or keydown).
     */
    notifyTrailingIconInteraction(): void;
    /**
     * Emits a custom event "MDCChip:removal" denoting the chip will be removed.
     */
    notifyRemoval(): void;
    /**
     * Returns the computed property value of the given style property on the root element.
     */
    getComputedStyleValue(propertyName: string): string;
    /**
     * Sets the property value of the given style property on the root element.
     */
    setStyleProperty(propertyName: string, value: string): void;
}
