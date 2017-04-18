declare module goog.disposable {

    /**
     * Interface for a disposable object.  If a instance requires cleanup
     * (references COM objects, DOM notes, or other disposable objects), it should
     * implement this interface (it may subclass goog.Disposable).
     * @interface
     */
    interface IDisposable {
        
        /**
         * Disposes of the object and its resources.
         * @return {void} Nothing.
         */
        dispose(): void;
        
        /**
         * @return {boolean} Whether the object has been disposed of.
         */
        isDisposed(): boolean;
    }
}
