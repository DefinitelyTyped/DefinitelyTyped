/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { MDCDrawerAdapter } from '../adapter';
import MDCFoundation from 'material__base/foundation';
import { cssClasses, strings } from '../constants';

export class MDCDismissibleDrawerFoundation extends MDCFoundation<MDCDrawerAdapter> {
  static readonly strings: strings;
  static readonly cssClasses: cssClasses;
  static readonly defaultAdapter: MDCDrawerAdapter;

  constructor(adapter: MDCDrawerAdapter);

  destroy(): void;

  /**
   * Function to open the drawer.
   */
  open(): void;

  /**
   * Function to close the drawer.
   */
  close(): void;

  /**
   * Returns true if drawer is in open state.
   */
  isOpen(): boolean;

  /**
   * Returns true if drawer is animating open.
   */
  isOpening(): boolean;

  /**
   * Returns true if drawer is animating closed.
   */
  isClosing(): boolean;

  /**
   * Keydown handler to close drawer when key is escape.
   */
  handleKeydown(evt: KeyboardEvent): void;

  /**
   * Handles a transition end event on the root element.
   */
  handleTransitionEnd(evt: Event): void;
}
