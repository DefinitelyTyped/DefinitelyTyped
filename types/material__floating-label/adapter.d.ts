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
 * Adapter for MDC Floating Label.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the floating label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 */

export default interface MDCFloatingLabelAdapter {
    /**
     * Adds a class to the label element.
     */
    addClass(className: string): void;

    /**
     * Removes a class from the label element.
     */
    removeClass(className: string): void;

    /**
     * Returns the width of the label element.
     */
    getWidth(): number;

    /**
     * Registers an event listener on the root element for a given event.
     */
    registerInteractionHandler(evtType: string, handler: EventListener): void;

    /**
     * Deregisters an event listener on the root element for a given event.
     */
    deregisterInteractionHandler(evtType: string, handler: EventListener): void;
}
