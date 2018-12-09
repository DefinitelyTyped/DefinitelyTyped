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

import { MDCStrings, MDCNumbers } from 'material__base';

export interface cssClasses extends MDCStrings {
    ROOT: 'mdc-menu';
    OPEN: 'mdc-menu--open';
    ANIMATING_OPEN: 'mdc-menu--animating-open';
    ANIMATING_CLOSED: 'mdc-menu--animating-closed';
    SELECTED_LIST_ITEM: 'mdc-list-item--selected';
}

export interface strings extends MDCStrings {
    ITEMS_SELECTOR: '.mdc-menu__items';
    SELECTED_EVENT: 'MDCMenu:selected';
    CANCEL_EVENT: 'MDCMenu:cancel';
    ARIA_DISABLED_ATTR: 'aria-disabled';
}

export interface numbers extends MDCNumbers {
    // Amount of time to wait before triggering a selected event on the menu. Note that this time
    // will most likely be bumped up once interactive lists are supported to allow for the ripple to
    // animate before closing the menu
    SELECTED_TRIGGER_DELAY: 50;
    // Total duration of menu open animation.
    TRANSITION_OPEN_DURATION: 120;
    // Total duration of menu close animation.
    TRANSITION_CLOSE_DURATION: 75;
    // Margin left to the edge of the viewport when menu is at maximum possible height.
    MARGIN_TO_EDGE: 32;
    // Ratio of anchor width to menu width for switching from corner positioning to center positioning.
    ANCHOR_TO_MENU_WIDTH_RATIO: 0.67;
    // Ratio of vertical offset to menu height for switching from corner to mid-way origin positioning.
    OFFSET_TO_MENU_HEIGHT_RATIO: 0.1;
}

/**
 * Enum for bits in the {@see Corner) bitmap.
 */
export interface CornerBit extends MDCNumbers {
    BOTTOM: 1;
    CENTER: 2;
    RIGHT: 4;
    FLIP_RTL: 8;
}
/**
 * Enum for representing an element corner for positioning the menu.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
export interface Corner extends MDCNumbers {
    TOP_LEFT: 0;
    TOP_RIGHT: 4;
    BOTTOM_LEFT: 1;
    BOTTOM_RIGHT: 5;
    TOP_START: 8;
    TOP_END: 12;
    BOTTOM_START: 9;
    BOTTOM_END: 13;
}
