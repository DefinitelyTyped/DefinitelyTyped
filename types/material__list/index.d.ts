// Type definitions for Material Components Web 0.43
// Project: https://material.io/components/
// Definitions by: Arthur Groupp <https://github.com/agroupp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import MDCComponent from 'material__base/component';
import { MDCListFoundation } from './foundation';
import { MDCListAdapter } from './adapter';
import { matches } from 'material__dom/ponyfill';
import { cssClasses, strings, Index } from './constants'; // eslint-disable-line no-unused-vars

declare class MDCList {
  /** @param {...?} args */
  constructor(...args: any);

  /**
   * @param {!Element} root
   * @return {!MDCList}
   */
  static attachTo(root: Element): MDCList;

  destroy(): void;

  initialSyncWithDOM():void;

  layout(): void;

  /**
   * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
   */
  initializeListType(): void;

  /** @param {boolean} value */
  vertical: boolean;

  /** @return Array<!Element>*/
  readonly listElements: Element[];

  /** @param {boolean} value */
  wrapFocus: boolean;

  /** @param {boolean} isSingleSelectionList */
  singleSelection: boolean;

  /** @return {!Index} */
  selectedIndex: Index;

  /** @return {!MDCListFoundation} */
  getDefaultFoundation(): MDCListFoundation;
}

export {MDCList, MDCListFoundation};
