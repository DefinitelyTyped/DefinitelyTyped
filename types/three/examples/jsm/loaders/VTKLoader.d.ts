import { BufferGeometry, Loader, LoadingManager } from "three";

/**
 * @deprecated The loader has been deprecated and will be removed with r194. Export your VTK files to glTF before using them on the web.
 */
export class VTKLoader extends Loader<BufferGeometry> {
    /**
     * @deprecated The loader has been deprecated and will be removed with r194. Export your VTK files to glTF before using them on the web.
     */
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer | string, path: string): BufferGeometry;
}
