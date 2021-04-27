declare namespace google.maps {
    namespace event {
        /**
         * Cross browser event handler registration. This listener is removed by
         * calling removeListener(handle) for the handle that is returned by this
         * function.
         */
        function addDomListener(
            instance: object,
            eventName: string,
            handler: (event: Event) => void,
            capture?: boolean,
        ): MapsEventListener;

        /**
         * Wrapper around addDomListener that removes the listener after the first
         * event.
         */
        function addDomListenerOnce(
            instance: object,
            eventName: string,
            handler: (event: Event) => void,
            capture?: boolean,
        ): MapsEventListener;

        /**
         * Adds the given listener function to the given event name for the given
         * object instance. Returns an identifier for this listener that can be used
         * with removeListener().
         */
        function addListener(instance: object, eventName: string, handler: (...args: any[]) => void): MapsEventListener;

        /**
         * Like addListener, but the handler removes itself after handling the first
         * event.
         */
        function addListenerOnce(
            instance: object,
            eventName: string,
            handler: (...args: any[]) => void,
        ): MapsEventListener;

        /**
         * Removes all listeners for all events for the given instance.
         */
        function clearInstanceListeners(instance: object): void;

        /**
         * Removes all listeners for the given event for the given instance.
         */
        function clearListeners(instance: object, eventName: string): void;

        /**
         * Removes the given listener, which should have been returned by
         * addListener above. Equivalent to calling listener.remove().
         */
        function removeListener(listener: MapsEventListener): void;

        /**
         * Triggers the given event. All arguments after eventName are passed as
         * arguments to the listeners.
         */
        function trigger(instance: any, eventName: string, ...args: any[]): void;
    }

    interface MapsEventListener {
        /**
         * Removes the listener.  Equivalent to calling
         * google.maps.event.removeListener(listener).
         */
        remove(): void;
    }

    class MVCObject {
        /**
         * The MVCObject constructor is guaranteed to be an empty function, and so
         * you may inherit from MVCObject by simply writing MySubclass.prototype =
         * new google.maps.MVCObject();. Unless otherwise noted, this is not true of
         * other classes in the API, and inheriting from other classes in the API is
         * not supported.
         */
        constructor();

        /**
         * Adds the given listener function to the given event name. Returns an
         * identifier for this listener that can be used with
         * google.maps.event.removeListener.
         */
        addListener(eventName: string, handler: (this: this, ...args: any[]) => void): MapsEventListener;

        /** Binds a View to a Model. */
        bindTo(key: string, target: MVCObject, targetKey?: string, noNotify?: boolean): void;

        changed(key: string): void;

        /** Gets a value. */
        get(key: string): any;

        /**
         * Notify all observers of a change on this property. This notifies both
         * objects that are bound to the object's property as well as the object
         * that it is bound to.
         */
        notify(key: string): void;

        /** Sets a value. */
        set(key: string, value: any): void;

        /** Sets a collection of key-value pairs. */
        setValues(values: any): void;

        /**
         * Removes a binding. Unbinding will set the unbound property to the current
         * value. The object will not be notified, as the value has not changed.
         */
        unbind(key: string): void;

        /** Removes all bindings. */
        unbindAll(): void;
    }

    interface MVCArrayHandlerMap<C extends MVCArray<T>, T> {
        /**
         * This event is fired when {@link MVCArray.insertAt insertAt}() is called. The event passes the index that was
         * passed to {@link MVCArray.insertAt insertAt}().
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.insert_at Maps JavaScript API}
         */
        insert_at: (this: C, index: number) => void;

        /**
         * This event is fired when {@link MVCArray.removeAt removeAt}() is called. The event passes the index that was
         * passed to {@link MVCArray.removeAt removeAt}() and the element that was removed from the array.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.remove_at Maps JavaScript API}
         */
        remove_at: (this: C, index: number, removed: T) => void;

        /**
         * This event is fired when {@link MVCArray.setAt setAt}() is called. The event passes the index that was passed
         * to {@link MVCArray.setAt setAt}() and the element that was previously in the array at that index.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.set_at Maps JavaScript API}
         */
        set_at: (this: C, index: number, previous: T) => void;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray Maps JavaScript API}
     */
    class MVCArray<T> extends MVCObject {
        /**
         * A mutable MVC Array.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.constructor Maps JavaScript API}
         */
        constructor(array?: T[]);

        /**
         * @see {@link MVCArrayHandlerMap#insert_at insert_at} event
         * @see {@link MVCArrayHandlerMap#remove_at remove_at} event
         * @see {@link MVCArrayHandlerMap#set_at set_at} event
         */
        addListener<N extends keyof MVCArrayHandlerMap<this, T>>(
            eventName: N,
            handler: MVCArrayHandlerMap<this, T>[N],
        ): MapsEventListener;

        /** @deprecated */
        addListener(eventName: string, handler: (this: this, ...args: any[]) => void): MapsEventListener;

        /**
         * Removes all elements from the array.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.clear Maps JavaScript API}
         * @see {@link pop}
         * @see {@link removeAt}
         */
        clear(): void;

        /**
         * Iterate over each element, calling the provided callback. The callback is called for each element like:
         * `callback(element, index)`.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.forEach Maps JavaScript API}
         * @see {@link getArray}
         * @see {@link getAt}
         */
        forEach(callback: (elem: T, i: number) => void): void;

        /**
         * Returns a reference to the underlying Array. Warning: if the Array is mutated, no events will be fired by
         * this object.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.getArray Maps JavaScript API}
         * @see {@link forEach}
         * @see {@link getAt}
         */
        getArray(): T[];

        /**
         * Returns the element at the specified index.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.getAt Maps JavaScript API}
         * @see {@link forEach}
         * @see {@link getArray}
         * @see {@link insertAt}
         * @see {@link removeAt}
         * @see {@link setAt}
         */
        getAt(i: number): T;

        /**
         * Returns the number of elements in this array.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.getLength Maps JavaScript API}
         */
        getLength(): number;

        /**
         * Inserts an element at the specified index.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.insertAt Maps JavaScript API}
         * @see {@link getAt}
         * @see {@link push}
         * @see {@link removeAt}
         * @see {@link setAt}
         * @see {@link MVCArrayHandlerMap#insert_at insert_at} event
         */
        insertAt(i: number, elem: T): void;

        /**
         * Removes the last element of the array and returns that element.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.pop Maps JavaScript API}
         * @see {@link clear}
         * @see {@link removeAt}
         */
        pop(): T;

        /**
         * Adds one element to the end of the array and returns the new length of the array.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.push Maps JavaScript API}
         * @see {@link insertAt}
         * @see {@link setAt}
         */
        push(elem: T): number;

        /**
         * Removes an element from the specified index.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.removeAt Maps JavaScript API}
         * @see {@link clear}
         * @see {@link getAt}
         * @see {@link insertAt}
         * @see {@link pop}
         * @see {@link setAt}
         * @see {@link MVCArrayHandlerMap#remove_at remove_at} event
         */
        removeAt(i: number): T;

        /**
         * Sets an element at the specified index.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.setAt Maps JavaScript API}
         * @see {@link getAt}
         * @see {@link insertAt}
         * @see {@link push}
         * @see {@link removeAt}
         * @see {@link MVCArrayHandlerMap#set_at set_at} event
         */
        setAt(i: number, elem: T): void;
    }
}
