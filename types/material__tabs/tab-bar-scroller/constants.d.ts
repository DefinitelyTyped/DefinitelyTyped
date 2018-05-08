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

import { MDCStrings } from 'material__base';

export interface cssClasses extends MDCStrings {
    INDICATOR_FORWARD: 'mdc-tab-bar-scroller__indicator--forward';
    INDICATOR_BACK: 'mdc-tab-bar-scroller__indicator--back';
    INDICATOR_ENABLED: 'mdc-tab-bar-scroller__indicator--enabled';
    TAB: 'mdc-tab';
}

export interface strings extends MDCStrings {
    FRAME_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame';
    TABS_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame__tabs';
    TAB_SELECTOR: '.mdc-tab';
    INDICATOR_FORWARD_SELECTOR: '.mdc-tab-bar-scroller__indicator--forward';
    INDICATOR_BACK_SELECTOR: '.mdc-tab-bar-scroller__indicator--back';
}
