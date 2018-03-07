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
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    ROOT: 'mdc-ripple-upgraded';
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded';
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused';
    BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill';
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation';
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation';
}

export interface strings extends MDCStrings {
    VAR_FG_SIZE: '--mdc-ripple-fg-size';
    VAR_LEFT: '--mdc-ripple-left';
    VAR_TOP: '--mdc-ripple-top';
    VAR_FG_SCALE: '--mdc-ripple-fg-scale';
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start';
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end';
}

export interface numbers extends MDCNumbers {
    PADDING: 10;
    INITIAL_ORIGIN_SCALE: 0.6;
    DEACTIVATION_TIMEOUT_MS: 300;
    FG_DEACTIVATION_MS: 83;
}
