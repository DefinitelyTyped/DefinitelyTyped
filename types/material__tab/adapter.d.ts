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
 * Adapter for MDC Tab.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab  into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 */
export default interface MDCTabAdapter {
    /**
     * Registers an event listener on the root element for a given event.
     */
    registerEventHandler(evtType: string, handler: EventListener): void;

    /**
     * Deregisters an event listener on the root element for a given event.
     */
    deregisterEventHandler(evtType: string, handler: EventListener): void;

    /**
     * Adds the given className to the root element.
     */
    addClass(className: string): void;

    /**
     * Removes the given className from the root element.
     */
    removeClass(className: string): void;

    /**
     * Returns whether the root element has the given className.
     */
    hasClass(className: string): boolean;

    /**
     * Sets the given attrName of the root element to the given value.
     */
    setAttr(attr: string, value: string): void;
}
