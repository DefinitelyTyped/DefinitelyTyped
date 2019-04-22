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

import { MDCStrings } from 'material__base';

export interface cssClasses extends MDCStrings {
    ROOT: 'mdc-dialog';
    OPEN: 'mdc-dialog--open';
    ANIMATING: 'mdc-dialog--animating';
    BACKDROP: 'mdc-dialog__backdrop';
    SCROLL_LOCK: 'mdc-dialog-scroll-lock';
    ACCEPT_BTN: 'mdc-dialog__footer__button--accept';
    CANCEL_BTN: 'mdc-dialog__footer__button--cancel';
}

export interface strings extends MDCStrings {
    OPEN_DIALOG_SELECTOR: '.mdc-dialog--open';
    DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface';
    ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept';
    ACCEPT_EVENT: 'MDCDialog:accept';
    CANCEL_EVENT: 'MDCDialog:cancel';
}
