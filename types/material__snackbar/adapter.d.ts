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

export interface MDCSnackbarAdapter {
    addClass(className: string): void;
    removeClass(className: string): void;
    setAriaHidden(): void;
    unsetAriaHidden(): void;
    setActionAriaHidden(): void;
    unsetActionAriaHidden(): void;
    setActionText(actionText: string): void;
    setMessageText(message: string): void;
    setFocus(): void;
    visibilityIsHidden(): boolean;
    registerCapturedBlurHandler(handler: EventListener): void;
    deregisterCapturedBlurHandler(handler: EventListener): void;
    registerVisibilityChangeHandler(handler: EventListener): void;
    deregisterVisibilityChangeHandler(handler: EventListener): void;
    registerCapturedInteractionHandler(evtType: string, handler: EventListener): void;
    deregisterCapturedInteractionHandler(evtType: string, handler: EventListener): void;
    registerActionClickHandler(handler: EventListener): void;
    deregisterActionClickHandler(handler: EventListener): void;
    registerTransitionEndHandler(handler: EventListener): void;
    deregisterTransitionEndHandler(handler: EventListener): void;
}
