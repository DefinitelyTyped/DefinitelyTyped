/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MDCStrings, MDCNumbers } from 'material__base';

export interface cssClasses extends MDCStrings {
    ACTIVE: 'mdc-slider--active';
    DISABLED: 'mdc-slider--disabled';
    DISCRETE: 'mdc-slider--discrete';
    FOCUS: 'mdc-slider--focus';
    IN_TRANSIT: 'mdc-slider--in-transit';
    IS_DISCRETE: 'mdc-slider--discrete';
    HAS_TRACK_MARKER: 'mdc-slider--display-markers';
}

export interface strings extends MDCStrings {
    TRACK_SELECTOR: '.mdc-slider__track';
    TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container';
    LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child';
    THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container';
    PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker';
    ARIA_VALUEMIN: 'aria-valuemin';
    ARIA_VALUEMAX: 'aria-valuemax';
    ARIA_VALUENOW: 'aria-valuenow';
    ARIA_DISABLED: 'aria-disabled';
    STEP_DATA_ATTR: 'data-step';
    CHANGE_EVENT: 'MDCSlider:change';
    INPUT_EVENT: 'MDCSlider:input';
}

export interface numbers extends MDCNumbers {
    PAGE_FACTOR: 4;
}
