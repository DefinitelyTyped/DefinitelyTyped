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
    ENTRY_ANIMATION_NAME: 'mdc-chip-entry';
    INTERACTION_EVENT: 'MDCChip:interaction';
    TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction';
    REMOVAL_EVENT: 'MDCChip:removal';
    CHECKMARK_SELECTOR: '.mdc-chip__checkmark';
    LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading';
    TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing';
}

export interface cssClasses extends MDCStrings {
    CHECKMARK: 'mdc-chip__checkmark';
    CHIP: 'mdc-chip';
    CHIP_EXIT: 'mdc-chip--exit';
    HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden';
    LEADING_ICON: 'mdc-chip__icon--leading';
    TRAILING_ICON: 'mdc-chip__icon--trailing';
    SELECTED: 'mdc-chip--selected';
    TEXT: 'mdc-chip__text';
}
