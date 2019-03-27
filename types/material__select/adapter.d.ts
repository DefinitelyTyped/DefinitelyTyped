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

export default interface MDCSelectAdapter {
    addClass(className: string): void;

    removeClass(className: string): void;

    floatLabel(value: boolean): void;

    activateBottomLine(): void;

    deactivateBottomLine(): void;

    registerInteractionHandler(type: string, handler: EventListener): void;

    deregisterInteractionHandler(type: string, handler: EventListener): void;

    getSelectedIndex(): number;

    setSelectedIndex(index: number): void;

    setDisabled(disabled: boolean): void;

    getValue(): string;

    setValue(value: string): void;
}
