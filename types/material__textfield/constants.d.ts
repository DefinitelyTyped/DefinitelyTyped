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

import { MDCStrings } from 'material__base';

export interface strings extends MDCStrings {
    ARIA_CONTROLS: 'aria-controls';
    INPUT_SELECTOR: '.mdc-text-field__input';
    LABEL_SELECTOR: '.mdc-text-field__label';
    ICON_SELECTOR: '.mdc-text-field__icon';
    ICON_EVENT: 'MDCTextField:icon';
    BOTTOM_LINE_SELECTOR: '.mdc-text-field__bottom-line';
}

export interface cssClasses extends MDCStrings {
    ROOT: 'mdc-text-field';
    UPGRADED: 'mdc-text-field--upgraded';
    DISABLED: 'mdc-text-field--disabled';
    FOCUSED: 'mdc-text-field--focused';
    INVALID: 'mdc-text-field--invalid';
    LABEL_FLOAT_ABOVE: 'mdc-text-field__label--float-above';
    LABEL_SHAKE: 'mdc-text-field__label--shake';
    BOX: 'mdc-text-field--box';
    TEXT_FIELD_ICON: 'mdc-text-field__icon';
    TEXTAREA: 'mdc-text-field--textarea';
}
