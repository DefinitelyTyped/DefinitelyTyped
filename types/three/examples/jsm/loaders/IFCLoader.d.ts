import { Loader, LoadingManager, Object3D } from '../../../src/Three';

// tslint:disable-next-line:interface-name
export interface IFC extends Object3D {
    [key: string]: any;
}

export class IFCLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
        url: string,
        onLoad: (ifc: IFC) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): IFC;

    parse(data: ArrayBuffer | string): void;
}
