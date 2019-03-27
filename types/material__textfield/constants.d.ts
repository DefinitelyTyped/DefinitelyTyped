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

export interface strings extends MDCStrings {
    ARIA_CONTROLS: 'aria-controls';
    INPUT_SELECTOR: '.mdc-text-field__input';
    LABEL_SELECTOR: '.mdc-floating-label';
    ICON_SELECTOR: '.mdc-text-field__icon';
    OUTLINE_SELECTOR: '.mdc-notched-outline';
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple';
}

export interface cssClasses extends MDCStrings {
    ROOT: 'mdc-text-field';
    UPGRADED: 'mdc-text-field--upgraded';
    DISABLED: 'mdc-text-field--disabled';
    DENSE: 'mdc-text-field--dense';
    FOCUSED: 'mdc-text-field--focused';
    INVALID: 'mdc-text-field--invalid';
    BOX: 'mdc-text-field--box';
    OUTLINED: 'mdc-text-field--outlined';
}

export interface numbers extends MDCNumbers {
    LABEL_SCALE: 0.75;
    DENSE_LABEL_SCALE: 0.923;
}
