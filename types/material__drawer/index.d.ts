// Type definitions for Material Components Web 0.43
// Project: https://material.io/components/, https://github.com/material-components/material-components-web
// Definitions by: Brent Douglas <https://github.com/BrentDouglas>, Collin Kostichuk <https://github.com/ckosti>, Arthur Groupp <https://github.com/agroupp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/**
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
import { MDCDismissibleDrawerFoundation } from './dismissible/foundation';
import { MDCModalDrawerFoundation } from './modal/foundation';
import { MDCDrawerAdapter } from './adapter';
import { MDCList, MDCListFoundation } from 'material__list/index';
import { strings } from './constants';
import * as util from './util';
import createFocusTrap, { FocusTrap } from './focus-trap';

export class MDCDrawer extends MDCComponent<MDCDrawer, MDCDismissibleDrawerFoundation | MDCModalDrawerFoundation> {
  constructor(...args: any[]);
  static attachTo(root: Element): MDCDrawer;

  /**
   * Returns true if drawer is in the open position.
   */
  open: boolean;

  initialize(focusTrapFactory: FocusTrap, listFactory: MDCList): void;

  initialSyncWithDOM(): void;

  destroy(): void;

  getDefaultFoundation(): MDCDismissibleDrawerFoundation | MDCModalDrawerFoundation;
}

export { MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation, util };
