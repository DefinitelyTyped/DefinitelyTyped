declare module goog {
    function require(name: 'goog.Disposable'): typeof goog.Disposable;
}

declare module goog {

    /**
     * Class that provides the basic implementation for disposable objects. If your
     * class holds one or more references to COM objects, DOM nodes, or other
     * disposable objects, it should extend this class or implement the disposable
     * interface (defined in goog.disposable.IDisposable).
     * @constructor
     * @implements {goog.disposable.IDisposable}
     */
    class Disposable {
        constructor();
        
        /**
         * @return {!Array<!goog.Disposable>} All {@code goog.Disposable} objects that
         *     haven't been disposed of.
         */
        static getUndisposedObjects(): Array<goog.Disposable>;
        
        /**
         * Clears the registry of undisposed objects but doesn't dispose of them.
         */
        static clearUndisposedObjects(): void;
        
        /**
         * If monitoring the goog.Disposable instances is enabled, stores the creation
         * stack trace of the Disposable instance.
         * @const {string}
         */
        creationStack(): void;
        
        /**
         * @return {boolean} Whether the object has been disposed of.
         * @override
         */
        isDisposed(): boolean;
        
        /**
         * @return {boolean} Whether the object has been disposed of.
         * @deprecated Use {@link #isDisposed} instead.
         */
        getDisposed(): boolean;
        
        /**
         * Disposes of the object. If the object hasn't already been disposed of, calls
         * {@link #disposeInternal}. Classes that extend {@code goog.Disposable} should
         * override {@link #disposeInternal} in order to delete references to COM
         * objects, DOM nodes, and other disposable objects. Reentrant.
         *
         * @return {void} Nothing.
         * @override
         */
        dispose(): void;
        
        /**
         * Associates a disposable object with this object so that they will be disposed
         * together.
         * @param {goog.disposable.IDisposable} disposable that will be disposed when
         *     this object is disposed.
         */
        registerDisposable(disposable: goog.disposable.IDisposable): void;
        
        /**
         * Invokes a callback function when this object is disposed. Callbacks are
         * invoked in the order in which they were added. If a callback is added to
         * an already disposed Disposable, it will be called immediately.
         * @param {function(this:T):?} callback The callback function.
         * @param {T=} opt_scope An optional scope to call the callback in.
         * @template T
         */
        addOnDisposeCallback<T>(callback: () => any, opt_scope?: T): void;
        
        /**
         * Deletes or nulls out any references to COM objects, DOM nodes, or other
         * disposable objects. Classes that extend {@code goog.Disposable} should
         * override this method.
         * Not reentrant. To avoid calling it twice, it must only be called from the
         * subclass' {@code disposeInternal} method. Everywhere else the public
         * {@code dispose} method must be used.
         * For example:
         * <pre>
         *   mypackage.MyClass = function() {
         *     mypackage.MyClass.base(this, 'constructor');
         *     // Constructor logic specific to MyClass.
         *     ...
         *   };
         *   goog.inherits(mypackage.MyClass, goog.Disposable);
         *
         *   mypackage.MyClass.prototype.disposeInternal = function() {
         *     // Dispose logic specific to MyClass.
         *     ...
         *     // Call superclass's disposeInternal at the end of the subclass's, like
         *     // in C++, to avoid hard-to-catch issues.
         *     mypackage.MyClass.base(this, 'disposeInternal');
         *   };
         * </pre>
         * @protected
         */
        disposeInternal(): void;
        
        /**
         * Returns True if we can verify the object is disposed.
         * Calls {@code isDisposed} on the argument if it supports it.  If obj
         * is not an object with an isDisposed() method, return false.
         * @param {*} obj The object to investigate.
         * @return {boolean} True if we can verify the object is disposed.
         */
        static isDisposed(obj: any): boolean;
    }

    /**
     * Calls {@code dispose} on the argument if it supports it. If obj is not an
     *     object with a dispose() method, this is a no-op.
     * @param {*} obj The object to dispose of.
     */
    function dispose(obj: any): void;

    /**
     * Calls {@code dispose} on each member of the list that supports it. (If the
     * member is an ArrayLike, then {@code goog.disposeAll()} will be called
     * recursively on each of its members.) If the member is not an object with a
     * {@code dispose()} method, then it is ignored.
     * @param {...*} var_args The list.
     */
    function disposeAll(...var_args: any[]): void;
}

declare module goog.Disposable {

    /**
     * @enum {number} Different monitoring modes for Disposable.
     */
    type MonitoringMode = number;
    var MonitoringMode: {
        OFF: MonitoringMode;
        PERMANENT: MonitoringMode;
        INTERACTIVE: MonitoringMode;
    };
}
