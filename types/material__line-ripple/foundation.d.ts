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
import MDCFoundation from 'material__base/foundation';
import { cssClasses } from './constants';
import MDCLineRippleAdapter from './adapter';

export default class MDCLineRippleFoundation extends MDCFoundation<MDCLineRippleAdapter> {
    static readonly cssClasses: cssClasses;

    static readonly defaultAdapter: MDCLineRippleAdapter;

    /**
     * Activates the line ripple
     */
    activate(): void;

    /**
     * Sets the center of the ripple animation to the given X coordinate.
     */
    setRippleCenter(xCoordinate: number): void;

    /**
     * Deactivates the line ripple
     */
    deactivate(): void;

    /**
     * Handles a transition end event
     */
    handleTransitionEnd(evt: Event): void;
}
