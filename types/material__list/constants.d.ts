/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { MDCStrings } from 'material__base';

export interface cssClasses extends MDCStrings {
    ROOT: 'mdc-list';
    LIST_ITEM_CLASS: 'mdc-list-item';
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected';
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated';
}

export interface strings extends MDCStrings {
    ARIA_ORIENTATION: 'aria-orientation';
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal';
    ARIA_SELECTED: 'aria-selected';
    ARIA_CHECKED: 'aria-checked';
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]';
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]';
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]';
    RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)';
    CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)';
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)';
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: '.mdc-list-item button:not(:disabled), .mdc-list-item a';
    FOCUSABLE_CHILD_ELEMENTS: '.mdc-list-item button:not(:disabled), .mdc-list-item a, .mdc-list-item input[type="radio"]:not(:disabled), .mdc-list-item input[type="checkbox"]:not(:disabled)';
    ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)';
}

export type Index = number | number[];
