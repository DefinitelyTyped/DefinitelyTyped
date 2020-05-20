/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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

export default interface MDCDialogAdapter {
    addClass(className: string): void;

    removeClass(className: string): void;

    addBodyClass(className: string): void;

    removeBodyClass(className: string): void;

    eventTargetHasClass(target: EventTarget, className: string): boolean;

    registerInteractionHandler(evt: string, handler: EventListener): void;

    deregisterInteractionHandler(evt: string, handler: EventListener): void;

    registerSurfaceInteractionHandler(evt: string, handler: EventListener): void;

    deregisterSurfaceInteractionHandler(evt: string, handler: EventListener): void;

    registerDocumentKeydownHandler(handler: EventListener): void;

    deregisterDocumentKeydownHandler(handler: EventListener): void;

    registerTransitionEndHandler(handler: EventListener): void;

    deregisterTransitionEndHandler(handler: EventListener): void;

    notifyAccept(): void;

    notifyCancel(): void;

    trapFocusOnSurface(): void;

    untrapFocusOnSurface(): void;

    isDialog(el: Element): boolean;
}
