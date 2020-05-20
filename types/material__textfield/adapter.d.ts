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

import { MDCTextFieldHelperTextFoundation } from './helper-text';
import { MDCTextFieldIconFoundation } from './icon';

export interface NativeInputType {
    value: string;
    disabled: boolean;
    badInput: boolean;
    validity: {
        badInput: boolean;
        valid: boolean;
    };
}

export interface FoundationMapType {
    helperText?: MDCTextFieldHelperTextFoundation;
    icon?: MDCTextFieldIconFoundation;
}

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 */
export default interface MDCTextFieldAdapter {
    /**
     * Adds a class to the root Element.
     */
    addClass(className: string): void;

    /**
     * Removes a class from the root Element.
     */
    removeClass(className: string): void;

    /**
     * Returns true if the root element contains the given class name.
     */
    hasClass(className: string): boolean;

    /**
     * Registers an event handler on the root element for a given event.
     */
    registerTextFieldInteractionHandler(type: string, handler: EventListener): void;

    /**
     * Deregisters an event handler on the root element for a given event.
     */
    deregisterTextFieldInteractionHandler(type: string, handler: EventListener): void;

    /**
     * Registers an event listener on the native input element for a given event.
     */
    registerInputInteractionHandler(evtType: string, handler: EventListener): void;

    /**
     * Deregisters an event listener on the native input element for a given event.
     */
    deregisterInputInteractionHandler(evtType: string, handler: EventListener): void;

    /**
     * Registers a validation attribute change listener on the input element.
     */
    registerValidationAttributeChangeHandler(handler: EventListener): void;

    /**
     * Disconnects a validation attribute observer on the input element.
     */
    deregisterValidationAttributeChangeHandler(observer: MutationObserver): void;

    /**
     * Returns an object representing the native text input element, with a
     * similar API shape. The object returned should include the value, disabled
     * and badInput properties, as well as the checkValidity() function. We never
     * alter the value within our code, however we do update the disabled
     * property, so if you choose to duck-type the return value for this method
     * in your implementation it's important to keep this in mind. Also note that
     * this method can return null, which the foundation will handle gracefully.
     */
    getNativeInput(): (Element | (NativeInputType | null)) | null;

    /**
     * Returns true if the textfield is focused.
     * We achieve this via `document.activeElement === this.root_`.
     */
    isFocused(): boolean;

    /**
     * Returns true if the direction of the root element is set to RTL.
     */
    isRtl(): boolean;

    /**
     * Activates the line ripple.
     */
    activateLineRipple(): void;

    /**
     * Deactivates the line ripple.
     */
    deactivateLineRipple(): void;

    /**
     * Sets the transform origin of the line ripple.
     */
    setLineRippleTransformOrigin(normalizedX: number): void;

    /**
     * Only implement if label exists.
     * Shakes label if shouldShake is true.
     */
    shakeLabel(shouldShake: boolean): void;

    /**
     * Only implement if label exists.
     * Floats the label above the input element if shouldFloat is true.
     */
    floatLabel(shouldFloat: boolean): void;

    /**
     * Returns true if label element exists, false if it doesn't.
     */
    hasLabel(): boolean;

    /**
     * Only implement if label exists.
     * Returns width of label in pixels.
     */
    getLabelWidth(): number;

    /**
     * Returns true if outline element exists, false if it doesn't.
     */
    hasOutline(): boolean;

    /**
     * Only implement if outline element exists.
     * Updates SVG Path and outline element based on the
     * label element width and RTL context.
     */
    notchOutline(labelWidth: number, isRtl: boolean | undefined): void;

    /**
     * Only implement if outline element exists.
     * Closes notch in outline element.
     */
    closeOutline(): void;
}
