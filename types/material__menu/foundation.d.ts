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

import MDCFoundation from 'material__base/foundation';
import { cssClasses, strings, numbers, CornerBit, Corner } from './constants';
import MDCMenuAdapter from './adapter';

export interface AnchorMargin {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export default class MDCMenuFoundation extends MDCFoundation<MDCMenuFoundation> {
    static readonly cssClasses: cssClasses;

    static readonly strings: strings;

    static readonly numbers: numbers;

    static readonly Corner: Corner;

    static readonly defaultAdapter: MDCMenuAdapter;

    /**
     * @param corner Default anchor corner alignment of top-left menu corner.
     */
    setAnchorCorner(corner: number): void;

    /**
     * @param margin 4-plet of margins from anchor.
     */
    setAnchorMargin(margin: AnchorMargin): void;

    setRememberSelection(rememberSelection: boolean): void;

    setQuickOpen(quickOpen: boolean): void;

    open({focusIndex}?: {
        focusIndex?: null;
    }): void;

    close(evt?: Event): void;

    isOpen(): boolean;

    getSelectedIndex(): number;

    /**
     * @param index Index of the item to set as selected.
     */
    setSelectedIndex(index: number): void;
}
