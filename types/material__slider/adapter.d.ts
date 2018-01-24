/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface MDCSliderAdapter {
    hasClass(className: string): boolean;

    addClass(className: string): void;

    removeClass(className: string): void;

    getAttribute(name: string): string|null;

    setAttribute(name: string, value: string): void;

    removeAttribute(name: string): void;

    computeBoundingRect(): ClientRect;

    getTabIndex(): number;

    registerInteractionHandler(type: string, handler: EventListener): void;

    deregisterInteractionHandler(type: string, handler: EventListener): void;

    registerThumbContainerInteractionHandler(type: string, handler: EventListener): void;

    deregisterThumbContainerInteractionHandler(type: string, handler: EventListener): void;

    registerBodyInteractionHandler(type: string, handler: EventListener): void;

    deregisterBodyInteractionHandler(type: string, handler: EventListener): void;

    registerResizeHandler(handler: EventListener): void;

    deregisterResizeHandler(handler: EventListener): void;

    notifyInput(): void;

    notifyChange(): void;

    setThumbContainerStyleProperty(propertyName: string, value: string): void;

    setTrackStyleProperty(propertyName: string, value: string): void;

    setMarkerValue(value: number): void;

    appendTrackMarkers(numMarkers: number): void;

    removeTrackMarkers(): void;

    setLastTrackMarkersStyleProperty(propertyName: string, value: string): void;

    isRTL(): boolean;
}
