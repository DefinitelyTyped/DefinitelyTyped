// Type definitions for Material Components Web 0.35
// Project: https://material.io/components/, https://github.com/material-components/material-components-web
// Definitions by: Brent Douglas <https://github.com/BrentDouglas>, Collin Kostichuk <https://github.com/ckosti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

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

import MDCComponent from 'material__base/component';
import MDCRippleAdapter from './adapter';
import MDCRippleFoundation from './foundation';
import * as util from './util';

export { MDCRippleAdapter, MDCRippleFoundation, util };

export class MDCRipple extends MDCComponent<MDCRippleAdapter, MDCRippleFoundation> {
    static attachTo(root: Element, options?: { isUnbounded?: boolean; }): MDCRipple;

    static createAdapter(instance: RippleCapableSurface): MDCRippleAdapter;

    unbounded: boolean;

    activate(): void;

    deactivate(): void;

    layout(): void;

    initialSyncWithDOM(): void;
}

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */
export class RippleCapableSurface {
    protected root_: Element;

    /**
     * Whether or not the ripple bleeds out of the bounds of the element.
     */
    unbounded: boolean | undefined;

    /**
     * Whether or not the ripple is attached to a disabled component.
     */
    disabled: boolean | undefined;
}
