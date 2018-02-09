/**
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

export interface MDCSelectAdapter {
    addClass(className: string): void;

    removeClass(className: string): void;

    addBodyClass(className: string): void;

    removeBodyClass(className: string): void;

    setAttr(attr: string, value: string): void;

    rmAttr(attr: string): void;

    computeBoundingRect(): {left: number, top: number};

    registerInteractionHandler(type: string, handler: EventListener): void;

    deregisterInteractionHandler(type: string, handler: EventListener): void;

    focus(): void;

    makeTabbable(): void;

    makeUntabbable(): void;

    getComputedStyleValue(propertyName: string): string;

    setStyle(propertyName: string, value: string): void;

    create2dRenderingContext(): {font: string, measureText: (val: string) => {width: number}};

    setMenuElStyle(propertyName: string, value: string): void;

    setMenuElAttr(attr: string, value: string): void;

    rmMenuElAttr(attr: string): void;

    getMenuElOffsetHeight(): number;

    openMenu(focusIndex: number): void;

    isMenuOpen(): boolean;

    setSelectedTextContent(textContent: string): void;

    getNumberOfOptions(): number;

    getTextForOptionAtIndex(index: number): string;

    getValueForOptionAtIndex(index: number): string;

    setAttrForOptionAtIndex(index: number, attr: string, value: string): void;

    rmAttrForOptionAtIndex(index: number, attr: string): void;

    getOffsetTopForOptionAtIndex(index: number): number;

    registerMenuInteractionHandler(type: string, handler: EventListener): void;

    deregisterMenuInteractionHandler(type: string, handler: EventListener): void;

    notifyChange(): void;

    getWindowInnerHeight(): number;
}
