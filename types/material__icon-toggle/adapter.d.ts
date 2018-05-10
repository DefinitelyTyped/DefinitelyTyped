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

/**
 * Adapter for MDC Icon Toggle. Provides an interface for managing
 * - classes
 * - dom
 * - inner text
 * - event handlers
 * - event dispatch
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 */
export default interface MDCIconToggleAdapter {
    addClass(className: string): void;

    removeClass(className: string): void;

    registerInteractionHandler(type: string, handler: EventListener): void;

    deregisterInteractionHandler(type: string, handler: EventListener): void;

    setText(text: string): void;

    getTabIndex(): number;

    setTabIndex(tabIndex: number): void;

    getAttr(name: string): string;

    setAttr(name: string, value: string): void;

    rmAttr(name: string): void;

    notifyChange(evtData: IconToggleEvent): void;
}

export interface IconToggleEvent {
    isOn: boolean;
}
