// Type definitions for Material Components Web 0.35
// Project: https://material.io/components/, https://github.com/material-components/material-components-web
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

import { MDCComponent } from 'material__base';
import MDCSelectFoundation from './foundation';
import MDCSelectAdapter from './adapter';
import { MDCFloatingLabel } from 'material__floating-label';
import { MDCLineRipple } from 'material__line-ripple';

export { MDCSelectAdapter, MDCSelectFoundation };

export class MDCSelect extends MDCComponent<MDCSelectAdapter, MDCSelectFoundation> {
    static attachTo(root: Element): MDCSelect;

    value: string;

    selectedIndex: number;

    disabled: boolean;

    initialize(labelFactory?: (el: Element) => MDCFloatingLabel, lineRippleFactory?: (el: Element) => MDCLineRipple): void;

    initialSyncWithDOM(): void;
}
