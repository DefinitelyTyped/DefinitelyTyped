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

export function supportsCssVariables(windowObj: Window, forceRefresh?: boolean): boolean|undefined;

/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 */
export function applyPassive(globalObj?: Window, forceRefresh?: boolean): boolean|{passive: boolean};

export function getMatchesProperty(HTMLElementPrototype: object): string[];

export function getNormalizedEventCoords(ev: Event, pageOffset: {x: number, y: number}, clientRect: ClientRect): {x: number, y: number};
