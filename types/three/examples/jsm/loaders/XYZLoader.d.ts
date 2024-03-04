import { BufferGeometry, Loader, LoadingManager } from "three";

export class XYZLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(data: string, onLoad: (geometry: BufferGeometry) => void): object;
}
