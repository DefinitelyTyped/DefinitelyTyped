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

export default interface MDCTabBarScrollerAdapter {
    addClass(className: string): void;

    removeClass(className: string): void;

    eventTargetHasClass(target: EventTarget, className: string): boolean;

    addClassToForwardIndicator(className: string): void;

    removeClassFromForwardIndicator(className: string): void;

    addClassToBackIndicator(className: string): void;

    removeClassFromBackIndicator(className: string): void;

    isRTL(): boolean;

    registerBackIndicatorClickHandler(handler: EventListener): void;

    deregisterBackIndicatorClickHandler(handler: EventListener): void;

    registerForwardIndicatorClickHandler(handler: EventListener): void;

    deregisterForwardIndicatorClickHandler(handler: EventListener): void;

    registerCapturedInteractionHandler(evt: string, handler: EventListener): void;

    deregisterCapturedInteractionHandler(evt: string, handler: EventListener): void;

    registerWindowResizeHandler(handler: EventListener): void;

    deregisterWindowResizeHandler(handler: EventListener): void;

    getNumberOfTabs(): number;

    getComputedWidthForTabAtIndex(): number;

    getComputedLeftForTabAtIndex(): number;

    getOffsetWidthForScrollFrame(): number;

    getScrollLeftForScrollFrame(): number;

    setScrollLeftForScrollFrame(scrollLeftAmount: number): void;

    getOffsetWidthForTabBar(): number;

    setTransformStyleForTabBar(value: string): void;

    getOffsetLeftForEventTarget(target: EventTarget): number;

    getOffsetWidthForEventTarget(target: EventTarget): number;
}
