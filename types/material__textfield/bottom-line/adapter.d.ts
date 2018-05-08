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
 * Adapter for MDC TextField Bottom Line.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField bottom line into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
export default class MDCTextFieldBottomLineAdapter {
    /**
     * Adds a class to the bottom line element.
     */
    addClass(className: string): void;

    /**
     * Removes a class from the bottom line element.
     */
    removeClass(className: string): void;

    /**
     * Sets an attribute with a given value on the bottom line element.
     */
    setAttr(attr: string, value: string): void;

    /**
     * Registers an event listener on the bottom line element for a given event.
     */
    registerEventHandler(evtType: string, handler: EventListener): void;

    /**
     * Deregisters an event listener on the bottom line element for a given event.
     */
    deregisterEventHandler(evtType: string, handler: EventListener): void;

    /**
     * Emits a custom event "MDCTextFieldBottomLine:animation-end" denoting the
     * bottom line has finished its animation; either the activate or
     * deactivate animation
     */
    notifyAnimationEnd(): void;
}
