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

export interface MDCSlidableDrawerAdapter {
    addClass(className: string): void;

    removeClass(className: string): void;

    hasClass(className: string): void;

    hasNecessaryDom(): boolean;

    registerInteractionHandler(evt: string, handler: EventListener): void;

    deregisterInteractionHandler(evt: string, handler: EventListener): void;

    registerDrawerInteractionHandler(evt: string, handler: EventListener): void;

    deregisterDrawerInteractionHandler(evt: string, handler: EventListener): void;

    registerTransitionEndHandler(handler: EventListener): void;

    deregisterTransitionEndHandler(handler: EventListener): void;

    registerDocumentKeydownHandler(handler: EventListener): void;

    deregisterDocumentKeydownHandler(handler: EventListener): void;

    setTranslateX(value: number | null): void;

    getFocusableElements(): NodeList;

    saveElementTabState(el: Element): void;

    restoreElementTabState(el: Element): void;

    makeElementUntabbable(el: Element): void;

    notifyOpen(): void;

    notifyClose(): void;

    isRtl(): boolean;

    getDrawerWidth(): number;
}
