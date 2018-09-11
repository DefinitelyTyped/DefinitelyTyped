// Type definitions for Material Components Web 0.35
// Project: https://material.io/components/
// Definitions by: Brent Douglas <https://github.com/BrentDouglas>, Collin Kostichuk <https://github.com/ckosti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

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

export type MDCLogger = (message?: any, ...optionalParams: any[]) => void;

export interface MDCAutoInit {
    (root?: Document, warn?: MDCLogger): MDCAutoInit;
    register(componentName: string, Ctor: (...args: any[]) => any, warn?: MDCLogger): void;
    deregister(componentName: string): void;
    deregisterAll(): void;
}

/**
 * Auto-initializes all mdc components on a page.
 */
// tslint:disable-next-line:strict-export-declare-modifiers
declare const mdcAutoInit: MDCAutoInit;

// tslint:disable-next-line:strict-export-declare-modifiers
export default mdcAutoInit;
