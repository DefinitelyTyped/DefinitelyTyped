export default class Disposable {
    constructor();
    /**
     * The object has already been disposed.
     */
    protected disposed: boolean;
    /**
     * Extension point for disposable objects.
     */
    protected disposeInternal(): void;
    /**
     * Clean up.
     */
    dispose(): void;
}
