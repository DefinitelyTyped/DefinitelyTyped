/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
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
 * Adapter for MDC TextField Line Ripple.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the line ripple into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 */

export default interface MDCLineRippleAdapter {
    /**
     * Adds a class to the line ripple element.
     */
    addClass(className: string): void;

    /**
     * Removes a class from the line ripple element.
     */
    removeClass(className: string): void;

    hasClass(className: string): boolean;

    /**
     * Sets the style property with propertyName to value on the root element.
     */
    setStyle(propertyName: string, value: string): void;

    /**
     * Registers an event listener on the line ripple element for a given event.
     */
    registerEventHandler(evtType: string, handler: EventListener): void;

    /**
     * Deregisters an event listener on the line ripple element for a given event.
     */
    deregisterEventHandler(evtType: string, handler: EventListener): void;
}
