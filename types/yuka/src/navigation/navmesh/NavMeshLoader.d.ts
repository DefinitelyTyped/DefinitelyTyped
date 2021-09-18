import { NavMesh } from "./NavMesh";

export interface NavMeshLoaderOptions {
    /**
     * The tolerance value for the coplanar test.
     */
    epsilonCoplanarTest?: number | undefined;

    /**
     * The tolerance value for the containment test.
     */
    epsilonContainsTest?: number | undefined;
}

/**
 * Class for loading navigation meshes as glTF assets. The loader supports
 * *glTF* and *glb* files, embedded buffers, index and non-indexed geometries.
 * Interleaved geometry data are not yet supported.
 */
export class NavMeshLoader {
    /**
     * Loads a {@link NavMesh navigation mesh} from the given URL. The second parameter can be used
     * to influence the parsing of the navigation mesh.
     *
     * @param url - The URL of the glTF asset.
     * @param [options] - The (optional) configuration object.
     * @return A promise representing the loading and parsing process.
     */
    load(url: string, options?: NavMeshLoaderOptions): Promise<NavMesh>;

    /**
     * Use this method if you are loading the contents of a navmesh not via {@link NavMeshLoader#load}.
     * This is for example useful in a node environment.
     *
     * It's mandatory to use glb files with embedded buffer data if you are going to load nav meshes
     * in node.js.
     *
     * @param arrayBuffer - The array buffer.
     * @param [url] - The (optional) URL.
     * @param [options] - The (optional) configuration object.
     * @return A promise representing the parsing process.
     */
    parse(arrayBuffer: ArrayBuffer, url?: string, options?: NavMeshLoaderOptions): Promise<NavMesh>;
}
