/**
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
    ROOT: 'mdc-snackbar';
    TEXT: 'mdc-snackbar__text';
    ACTION_WRAPPER: 'mdc-snackbar__action-wrapper';
    ACTION_BUTTON: 'mdc-snackbar__action-button';
    ACTIVE: 'mdc-snackbar--active';
    MULTILINE: 'mdc-snackbar--multiline';
    ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom';
}

export interface strings extends MDCStrings {
    TEXT_SELECTOR: '.mdc-snackbar__text';
    ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper';
    ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button';
}

export interface numbers extends MDCNumbers {
    MESSAGE_TIMEOUT: 2750;
}
