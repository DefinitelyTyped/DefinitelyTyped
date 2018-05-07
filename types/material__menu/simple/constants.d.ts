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
    ROOT: 'mdc-simple-menu';
    OPEN: 'mdc-simple-menu--open';
    ANIMATING: 'mdc-simple-menu--animating';
    TOP_RIGHT: 'mdc-simple-menu--open-from-top-right';
    BOTTOM_LEFT: 'mdc-simple-menu--open-from-bottom-left';
    BOTTOM_RIGHT: 'mdc-simple-menu--open-from-bottom-right';
}

export interface strings extends MDCStrings {
    ITEMS_SELECTOR: '.mdc-simple-menu__items';
    SELECTED_EVENT: 'MDCSimpleMenu:selected';
    CANCEL_EVENT: 'MDCSimpleMenu:cancel';
    ARIA_DISABLED_ATTR: 'aria-disabled';
}

export interface numbers extends MDCNumbers {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50;
  // Total duration of the menu animation.
  TRANSITION_DURATION_MS: 300;
  // The menu starts its open animation with the X axis at this time value (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_X: 0.5;
  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2;
  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
  TRANSITION_X1: 0;
  TRANSITION_Y1: 0;
  TRANSITION_X2: 0.2;
  TRANSITION_Y2: 1;
}
