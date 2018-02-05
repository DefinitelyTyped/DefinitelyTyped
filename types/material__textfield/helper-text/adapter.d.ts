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
 * Adapter for MDC Text Field Helper Text.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField helper text into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
export default class MDCTextFieldHelperTextAdapter {
    /**
     * Adds a class to the helper text element.
     */
    addClass(className: string): void;

    /**
     * Removes a class from the helper text element.
     */
    removeClass(className: string): void;

    /**
     * Returns whether or not the helper text element contains the given class.
     */
    hasClass(className: string): boolean;

    /**
     * Sets an attribute with a given value on the helper text element.
     */
    setAttr(attr: string, value: string): void;

    /**
     * Removes an attribute from the helper text element.
     */
    removeAttr(attr: string): void;

    /**
     * Sets the text content for the helper text element.
     */
    setContent(content: string): void;
}
