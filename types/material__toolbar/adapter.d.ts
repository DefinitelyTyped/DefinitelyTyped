/**
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

export interface MDCToolbarAdapter {
    hasClass(className: string): boolean;

    addClass(className: string): void;

    removeClass(className: string): void;

    registerScrollHandler(handler: EventListener): void;

    deregisterScrollHandler(handler: EventListener): void;

    registerResizeHandler(handler: EventListener): void;

    deregisterResizeHandler(handler: EventListener): void;

    getViewportWidth(): number;

    getViewportScrollY(): number;

    getOffsetHeight(): number;

    getFirstRowElementOffsetHeight(): number;

    notifyChange(evtData: {flexibleExpansionRatio: number}): void;

    setStyle(property: string, value: string): void;

    setStyleForTitleElement(property: string, value: string): void;

    setStyleForFlexibleRowElement(property: string, value: string): void;

    setStyleForFixedAdjustElement(property: string, value: string): void;
}
