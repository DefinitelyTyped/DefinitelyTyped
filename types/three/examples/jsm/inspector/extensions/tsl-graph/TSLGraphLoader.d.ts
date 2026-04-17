import { FileLoader, LoadingManager, Scene } from "three";

declare class TSLGraphLoaderApplier {
    constructor(tslGraphFns: never);

    apply(scene: Scene): void;
}

export class TSLGraphLoader extends FileLoader<TSLGraphLoaderApplier> {
    constructor(manager?: LoadingManager);
}
