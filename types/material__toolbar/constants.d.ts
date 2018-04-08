/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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
    FIXED: 'mdc-toolbar--fixed';
    FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only';
    FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row';
    TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible';
    FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior';
    FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized';
    FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized';
}

export interface strings extends MDCStrings {
    TITLE_SELECTOR: '.mdc-toolbar__title';
    FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child';
    CHANGE_EVENT: 'MDCToolbar:change';
}

export interface numbers extends MDCNumbers {
    MAX_TITLE_SIZE: 2.125;
    MIN_TITLE_SIZE: 1.25;
    TOOLBAR_ROW_HEIGHT: 64;
    TOOLBAR_ROW_MOBILE_HEIGHT: 56;
    TOOLBAR_MOBILE_BREAKPOINT: 600;
}
