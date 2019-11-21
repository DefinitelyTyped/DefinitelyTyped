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
 * Adapter for MDC Notched Outline.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Notched Outline into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 */

export default interface MDCNotchedOutlineAdapter {
    /**
     * Returns the width of the root element.
     */
    getWidth(): number;

    /**
     * Returns the height of the root element.
     */
    getHeight(): number;

    /**
     * Adds a class to the root element.
     */
    addClass(className: string): void;

    /**
     * Removes a class from the root element.
     */
    removeClass(className: string): void;

    /**
     * Sets the "d" attribute of the outline element's SVG path.
     */
    setOutlinePathAttr(value: string): void;

    /**
     * Returns the idle outline element's computed style value of the given css property `propertyName`.
     * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
     */
    getIdleOutlineStyleValue(propertyName: string): string;
}
