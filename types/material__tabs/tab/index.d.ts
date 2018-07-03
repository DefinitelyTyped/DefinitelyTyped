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

import MDCComponent from 'material__base/component';
import MDCTabFoundation from './foundation';
import MDCTabAdapter from './adapter';

export {MDCTabAdapter, MDCTabFoundation};

export class MDCTab extends MDCComponent<MDCTabAdapter, MDCTabFoundation> {
    static attachTo(root: Element): MDCTab;

    readonly computedWidth: number;

    readonly computedLeft: number;

    isActive: boolean;

    preventDefaultOnClick: boolean;

    initialSyncWithDOM(): void;

    measureSelf(): void;
}
