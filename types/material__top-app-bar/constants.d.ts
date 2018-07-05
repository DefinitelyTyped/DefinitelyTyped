/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
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
    FIXED_CLASS: 'mdc-top-app-bar--fixed';
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled';
    SHORT_CLASS: 'mdc-top-app-bar--short';
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item';
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed';
}

export interface numbers extends MDCNumbers {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100;
    MAX_TOP_APP_BAR_HEIGHT: 128;
}

export interface strings extends MDCStrings {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item';
    NAVIGATION_EVENT: 'MDCTopAppBar:nav';
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon';
    ROOT_SELECTOR: '.mdc-top-app-bar';
    TITLE_SELECTOR: '.mdc-top-app-bar__title';
}
