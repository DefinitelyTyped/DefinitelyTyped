export default class Disposable {
    constructor();
    protected disposed: boolean;
    protected disposeInternal(): void;
    dispose(): void;
}
