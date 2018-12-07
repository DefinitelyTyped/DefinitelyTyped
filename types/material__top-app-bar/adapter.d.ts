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
 * Adapter for MDC Top App Bar
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Top App Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 */
export default interface MDCTopAppBarAdapter {
    /**
     * Adds a class to the root Element.
     */
    addClass(className: string): void;

    /**
     * Removes a class from the root Element.
     */
    removeClass(className: string): void;

    /**
     * Returns true if the root Element contains the given class.
     */
    hasClass(className: string): boolean;

    /**
     * Sets the specified inline style property on the root Element to the given value.
     */
    setStyle(property: string, value: string): void;

    /**
     * Gets the height of the top app bar.
     */
    getTopAppBarHeight(): number;

    /**
     * Registers an event handler on the navigation icon element for a given event.
     */
    registerNavigationIconInteractionHandler(type: string, handler: EventListener): void;

    /**
     * Deregisters an event handler on the navigation icon element for a given event.
     */
    deregisterNavigationIconInteractionHandler(type: string, handler: EventListener): void;

    /**
     * Emits an event when the navigation icon is clicked.
     */
    notifyNavigationIconClicked(): void;

    registerScrollHandler(handler: EventListener): void;

    deregisterScrollHandler(handler: EventListener): void;

    registerResizeHandler(handler: EventListener): void;

    deregisterResizeHandler(handler: EventListener): void;

    getViewportScrollY(): number;

    getTotalActionItems(): number;
}
