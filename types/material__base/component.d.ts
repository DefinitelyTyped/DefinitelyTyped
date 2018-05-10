/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import MDCFoundation from './foundation';

export default class MDCComponent<A, F extends MDCFoundation<A>> {
    static attachTo(root: Element): MDCComponent<any, MDCFoundation<any>>;

    constructor(root: Element, foundation?: F, ...args: any[]);

    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
    initialize(...args: any[]): void;

    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    getDefaultFoundation(): F;

    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    initialSyncWithDOM(): void;

    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    destroy(): void;

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     */
    listen(evtType: string, handler: EventListener): void;

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     */
    unlisten(evtType: string, handler: EventListener): void;

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     */
    emit(evtType: string, evtData: any, shouldBubble?: boolean): void;
}
