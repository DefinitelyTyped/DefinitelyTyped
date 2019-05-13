declare module 'ol/Disposable' {

  export default class Disposable {
    constructor();
    protected disposeInternal(): void;
    dispose(): void;
  }

}
