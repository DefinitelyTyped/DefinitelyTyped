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

import MDCComponent from 'material__base/component';
import MDCSimpleMenuFoundation from './foundation';
import MDCSimpleMenuAdapter from './adapter';
import { getTransformPropertyName } from '../util';

export {MDCSimpleMenuAdapter, MDCSimpleMenuFoundation};

export class MDCSimpleMenu extends MDCComponent<MDCSimpleMenuAdapter, MDCSimpleMenuFoundation> {
  static attachTo(root: Element): MDCSimpleMenu;

  open: boolean;

  show(options?: {focusIndex?: number}): void;

  hide(): void;

  /**
   * Return the items within the menu. Note that this only contains the set of elements within
   * the items container that are proper list items, and not supplemental / presentational DOM
   * elements.
   */
  readonly items: Element[];

  getDefaultFoundation(): MDCSimpleMenuFoundation;
}
