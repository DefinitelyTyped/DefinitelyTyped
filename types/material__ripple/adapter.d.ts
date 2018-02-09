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
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */
export default class MDCRippleAdapter {
    browserSupportsCssVars(): boolean;

    isUnbounded(): boolean;

    isSurfaceActive(): boolean;

    isSurfaceDisabled(): boolean;

    addClass(className: string): void;

    removeClass(className: string): void;

    registerInteractionHandler(evtType: string, handler: EventListener): void;

    deregisterInteractionHandler(evtType: string, handler: EventListener): void;

    registerResizeHandler(handler: EventListener): void;

    deregisterResizeHandler(handler: EventListener): void;

    updateCssVariable(varName: string, value: number|string): void;

    computeBoundingRect(): ClientRect;

    getWindowPageOffset(): {x: number, y: number};
}
