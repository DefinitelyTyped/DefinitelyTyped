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

import MDCTextFieldBottomLineFoundation from './bottom-line/foundation';
import MDCTextFieldHelperTextFoundation from './helper-text/foundation';

export interface NativeInputType {
    value: string;
    disabled: boolean;
    badInput: boolean;
    checkValidity(): boolean;
}

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
export class MDCTextFieldAdapter {
    /**
     * Adds a class to the root Element.
     */
    addClass(className: string): void;

    /**
     * Removes a class from the root Element.
     */
    removeClass(className: string): void;

    /**
     * Adds a class to the label Element. We recommend you add a conditional
     * check here, and in removeClassFromLabel for whether or not the label is
     * present so that the JS component could be used with text fields that don't
     * require a label, such as the full-width text field.
     */
    addClassToLabel(className: string): void;

    /**
     * Removes a class from the label Element.
     */
    removeClassFromLabel(className: string): void;

    /**
     * Sets an attribute on the icon Element.
     */
    setIconAttr(name: string, value: string): void;

    /**
     * Returns true if classname exists for a given target element.
     */
    eventTargetHasClass(target: EventTarget, className: string): boolean;

    /**
     * Registers an event handler on the root element for a given event.
     */
    registerTextFieldInteractionHandler(type: string, handler: EventListener): void;

    /**
     * Deregisters an event handler on the root element for a given event.
     */
    deregisterTextFieldInteractionHandler(type: string, handler: EventListener): void;

    /**
     * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
     */
    notifyIconAction(): void;

    /**
     * Adds a class to the helper text element. Note that in our code we check for
     * whether or not we have a helper text element and if we don't, we simply
     * return.
     */
    addClassToHelperText(className: string): void;

    /**
     * Removes a class from the helper text element.
     */
    removeClassFromHelperText(className: string): void;

    /**
     * Returns whether or not the helper text element contains the given class.
     */
    helperTextHasClass(className: string): boolean;

    /**
     * Registers an event listener on the native input element for a given event.
     */
    registerInputInteractionHandler(evtType: string, handler: EventListener): void;

    /**
     * Deregisters an event listener on the native input element for a given event.
     */
    deregisterInputInteractionHandler(evtType: string, handler: EventListener): void;

    /**
     * Registers an event listener on the bottom line element for a given event.
     */
    registerBottomLineEventHandler(evtType: string, handler: EventListener): void;

    /**
     * Deregisters an event listener on the bottom line element for a given event.
     */
    deregisterBottomLineEventHandler(evtType: string, handler: EventListener): void;

    /**
     * Sets an attribute with a given value on the helper text element.
     */
    setHelperTextAttr(name: string, value: string): void;

    /**
     * Removes an attribute from the helper text element.
     */
    removeHelperTextAttr(name: string): void;

    /**
     * Sets the text content for the help text element
     */
    setHelperTextContent(content: string): void;

    /**
     * Returns an object representing the native text input element, with a
     * similar API shape. The object returned should include the value, disabled
     * and badInput properties, as well as the checkValidity() function. We never
     * alter the value within our code, however we do update the disabled
     * property, so if you choose to duck-type the return value for this method
     * in your implementation it's important to keep this in mind. Also note that
     * this method can return null, which the foundation will handle gracefully.
     */
    getNativeInput(): Element|NativeInputType;

    /**
     * Returns the foundation for the bottom line element. Returns undefined if
     * there is no bottom line element.
     */
    getBottomLineFoundation(): MDCTextFieldBottomLineFoundation;

    /**
     * Returns the foundation for the helper text element. Returns undefined if
     * there is no helper text element.
     */
    getHelperTextFoundation(): MDCTextFieldHelperTextFoundation;
}
