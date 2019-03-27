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

export default interface MDCTabBarAdapter {
    addClass(className: string): void;

    removeClass(className: string): void;

    bindOnMDCTabSelectedEvent(): void;

    unbindOnMDCTabSelectedEvent(): void;

    registerResizeHandler(handler: EventListener): void;

    deregisterResizeHandler(handler: EventListener): void;

    getOffsetWidth(): number;

    setStyleForIndicator(propertyName: string, value: string): void;

    getOffsetWidthForIndicator(): number;

    notifyChange(evtData: {activeTabIndex: number}): void;

    getNumberOfTabs(): number;

    isTabActiveAtIndex(index: number): boolean;

    setTabActiveAtIndex(index: number, isActive: true): void;

    isDefaultPreventedOnClickForTabAtIndex(index: number): boolean;

    setPreventDefaultOnClickForTabAtIndex(index: number, preventDefaultOnClick: boolean): void;

    measureTabAtIndex(index: number): void;

    getComputedWidthForTabAtIndex(index: number): number;

    getComputedLeftForTabAtIndex(index: number): number;
}
