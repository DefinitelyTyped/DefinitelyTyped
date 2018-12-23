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
import MDCFloatingLabelAdapter from './adapter';
import { cssClasses } from './constants';

export default class MDCFloatingLabelFoundation extends MDCFoundation<MDCFloatingLabelAdapter> {
    static readonly cssClasses: cssClasses;

    static readonly defaultAdapter: MDCFloatingLabelAdapter;

    /**
     * Returns the width of the label element.
     */
    getWidth(): number;

    /**
     * Styles the label to produce the label shake for errors.
     */
    shake(shouldShake: boolean): void;

    /**
     * Styles the label to float or dock.
     */
    float(shouldFloat: boolean): void;
}
