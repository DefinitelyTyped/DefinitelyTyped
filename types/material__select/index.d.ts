// Type definitions for Material Components Web 0.26
// Project: https://material.io/components/
// Definitions by: Brent Douglas <https://github.com/BrentDouglas>
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

import { MDCComponent } from 'material__base';
import { MDCSimpleMenu } from 'material__menu';

import { MDCSelectAdapter } from './adapter';
import MDCSelectFoundation from './foundation';

export {MDCSelectAdapter, MDCSelectFoundation};

export class MDCSelect extends MDCComponent<MDCSelectAdapter, MDCSelectFoundation> {
    static attachTo(root: Element): MDCSelect;

    readonly value: string;

    readonly options: Element[];

    readonly selectedOptions: NodeListOf<Element>;

    selectedIndex: number;

    disabled: boolean;

    item(index: number): Element|null;

    nameditem(key: string): Element|null;

    initialize(menuFactory?: (el: Element) => MDCSimpleMenu): void;

    getDefaultFoundation(): MDCSelectFoundation;

    initialSyncWithDOM(): void;
}
