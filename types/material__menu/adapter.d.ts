/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
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
 * Adapter for MDC Menu. Provides an interface for managing
 * - classes
 * - dom
 * - focus
 * - position
 * - dimensions
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 */

export default interface MDCMenuAdapter {
    addClass(className: string): void;

    removeClass(className: string): void;

    hasClass(className: string): boolean;

    hasNecessaryDom(): boolean;

    getAttributeForEventTarget(target: EventTarget, attributeName: string): string;

    getInnerDimensions(): { width: number; height: number; };

    hasAnchor(): boolean;

    getAnchorDimensions(): { width: number; height: number; top: number; right: number; bottom: number; left: number; };

    getWindowDimensions(): { width: number; height: number; };

    getNumberOfItems(): number;

    registerInteractionHandler(type: string, handler: EventListener): void;

    deregisterInteractionHandler(type: string, handler: EventListener): void;

    registerBodyClickHandler(handler: EventListener): void;

    deregisterBodyClickHandler(handler: EventListener): void;

    getIndexForEventTarget(target: EventTarget): number;

    notifySelected(evtData: { index: number; }): void;

    notifyCancel(): void;

    saveFocus(): void;

    restoreFocus(): void;

    isFocused(): boolean;

    focus(): void;

    getFocusedItemIndex(): number;

    focusItemAtIndex(index: number): void;

    isRtl(): boolean;

    setTransformOrigin(origin: string): void;

    setPosition(position: {
        top: (string|undefined),
        right: (string|undefined),
        bottom: (string|undefined),
        left: (string|undefined)
    }): void;

    setMaxHeight(height: number): void;

    setAttrForOptionAtIndex(index: number, attr: string, value: string): void;

    rmAttrForOptionAtIndex(index: number, attr: string): void;

    addClassForOptionAtIndex(index: number, className: string): void;

    rmClassForOptionAtIndex(index: number, className: string): void;
}
