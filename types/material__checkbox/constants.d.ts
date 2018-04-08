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
    UPGRADED: 'mdc-checkbox--upgraded';
    CHECKED: 'mdc-checkbox--checked';
    INDETERMINATE: 'mdc-checkbox--indeterminate';
    DISABLED: 'mdc-checkbox--disabled';
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked';
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate';
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked';
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate';
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked';
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked';
}

export interface strings extends MDCStrings {
    NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control';
    TRANSITION_STATE_INIT: 'init';
    TRANSITION_STATE_CHECKED: 'checked';
    TRANSITION_STATE_UNCHECKED: 'unchecked';
    TRANSITION_STATE_INDETERMINATE: 'indeterminate';
}

export interface numbers extends MDCNumbers {
    ANIM_END_LATCH_MS: 100;
}
