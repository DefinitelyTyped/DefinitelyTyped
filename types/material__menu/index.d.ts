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
import MDCMenuFoundation, { AnchorMargin } from './foundation';
import MDCMenuAdapter from './adapter';
import { Corner, CornerBit } from './constants';

export { MDCMenuFoundation, MDCMenuAdapter, AnchorMargin, Corner, CornerBit };

export class MDCMenu extends MDCComponent<MDCMenuAdapter, MDCMenuFoundation> {
    static attachTo(root: Element): MDCMenu;

    open: boolean;

    show(options?: { focusIndex?: number | null; }): void;

    hide(): void;

    /**
     * @param corner Default anchor corner alignment of top-left menu corner.
     */
    setAnchorCorner(corner: number): void;

    setAnchorMargin(margin: AnchorMargin): void;

    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     */
    readonly items: Element[];

    /**
     * Return the item within the menu that is selected.
     */
    getOptionByIndex(index: number): Element | null;

    selectedItemIndex: number;

    rememberSelection: boolean;

    quickOpen: boolean;
}
