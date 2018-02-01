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

// Remap touch events to pointer events, if the browser doesn't support touch events.
export function remapEvent(eventName: string, globalObj?: Window): string;

// Choose the correct transform property to use on the current browser.
export function getTransformPropertyName(globalObj?: Window, forceRefresh?: boolean): string;

// Determine whether the current browser supports CSS properties.
export function supportsCssCustomProperties(globalObj?: Window): boolean;

// Determine whether the current browser supports passive event listeners, and if so, use them.
export function applyPassive(globalObj?: Window, forceRefresh?: boolean): boolean;

// Save the tab state for an element.
export function saveElementTabState(el: Element): void;

// Restore the tab state for an element, if it was saved.
export function restoreElementTabState(el: Element): void;
