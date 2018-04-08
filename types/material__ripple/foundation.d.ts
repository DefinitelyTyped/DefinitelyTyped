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

import MDCFoundation from 'material__base/foundation';
import MDCRippleAdapter from './adapter';
import { cssClasses, strings, numbers } from './constants';
import { getNormalizedEventCoords } from './util';

export interface ActivationStateType {
    isActivated: boolean|undefined;
    hasDeactivationUXRun: boolean|undefined;
    wasActivatedByPointer: boolean|undefined;
    wasElementMadeActive: boolean|undefined;
    activationStartTime: number|undefined;
    activationEvent: Event;
    isProgrammatic: boolean|undefined;
}

export interface ListenerInfoType {
    activate: string|undefined;
    deactivate: string|undefined;
    focus: string|undefined;
    blur: string|undefined;
}

export interface ListenersType {
    activate(e: Event): void;

    deactivate(e: Event): void;

    focus(): void;

    blur(): void;
}

export interface PointType {
    x: number;
    y: number;
}

export default class MDCRippleFoundation extends MDCFoundation<MDCRippleAdapter> {
    static readonly cssClasses: cssClasses;

    static readonly strings: strings;

    static readonly numbers: numbers;

    static readonly defaultAdapter: MDCRippleAdapter;

    activate(event?: Event): void;

    deactivate(event?: Event): void;

    layout(): void;
}
