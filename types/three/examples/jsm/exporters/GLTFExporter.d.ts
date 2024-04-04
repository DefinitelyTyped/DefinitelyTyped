import { AnimationClip, Material, Mesh, Object3D, Texture } from "three";

export interface GLTFExporterOptions {
    /**
     * Export position, rotation and scale instead of matrix per node. Default is false
     */
    trs?: boolean;

    /**
     * Export only visible objects. Default is true.
     */
    onlyVisible?: boolean;

    /**
     * Export just the attributes within the drawRange, if defined, instead of exporting the whole array. Default is true.
     */
    truncateDrawRange?: boolean;

    /**
     * Export in binary (.glb) format, returning an ArrayBuffer. Default is false.
     */
    binary?: boolean;

    /**
     * Export with images embedded into the glTF asset. Default is true.
     */
    embedImages?: boolean;

    /**
     * Restricts the image maximum size (both width and height) to the given value. This option works only if embedImages is true. Default is Infinity.
     */
    maxTextureSize?: number;

    /**
     * List of animations to be included in the export.
     */
    animations?: AnimationClip[];

    /**
     * Generate indices for non-index geometry and export with them. Default is false.
     */
    forceIndices?: boolean;

    /**
     * Export custom glTF extensions defined on an object's userData.gltfExtensions property. Default is false.
     */
    includeCustomExtensions?: boolean;
}

export class GLTFExporter {
    constructor();

    register(callback: (writer: GLTFWriter) => GLTFExporterPlugin): this;
    unregister(callback: (writer: GLTFWriter) => GLTFExporterPlugin): this;

    /**
     * Generates a .gltf (JSON) or .glb (binary) output from the input (Scenes or Objects)
     *
     * @param input Scenes or objects to export. Valid options:
     * - Export scenes
     *   ```js
     *   exporter.parse( scene1, ... )
     *   exporter.parse( [ scene1, scene2 ], ... )
     *   ```
     * - Export objects (It will create a new Scene to hold all the objects)
     *   ```js
     *   exporter.parse( object1, ... )
     *   exporter.parse( [ object1, object2 ], ... )
     *   ```
     * - Mix scenes and objects (It will export the scenes as usual but it will create a new scene to hold all the single objects).
     *   ```js
     *   exporter.parse( [ scene1, object1, object2, scene2 ], ... )
     *   ```
     * @param onDone Will be called when the export completes. The argument will be the generated glTF JSON or binary ArrayBuffer.
     * @param onError Will be called if there are any errors during the gltf generation.
     * @param options Export options
     */
    parse(
        input: Object3D | Object3D[],
        onDone: (gltf: ArrayBuffer | { [key: string]: any }) => void,
        onError: (error: ErrorEvent) => void,
        options?: GLTFExporterOptions,
    ): void;

    parseAsync(
        input: Object3D | Object3D[],
        options?: GLTFExporterOptions,
    ): Promise<ArrayBuffer | { [key: string]: any }>;
}

export class GLTFWriter {
    constructor();

    setPlugins(plugins: GLTFExporterPlugin[]): void;

    /**
     * Parse scenes and generate GLTF output
     *
     * @param input Scene or Array of THREE.Scenes
     * @param onDone Callback on completed
     * @param options options
     */
    write(
        input: Object3D | Object3D[],
        onDone: (gltf: ArrayBuffer | { [key: string]: any }) => void,
        options?: GLTFExporterOptions,
    ): Promise<void>;
}

export interface GLTFExporterPlugin {
    writeTexture?: (map: Texture, textureDef: { [key: string]: any }) => void;
    writeMaterial?: (material: Material, materialDef: { [key: string]: any }) => void;
    writeMesh?: (mesh: Mesh, meshDef: { [key: string]: any }) => void;
    writeNode?: (object: Object3D, nodeDef: { [key: string]: any }) => void;
    beforeParse?: (input: Object3D | Object3D[]) => void;
    afterParse?: (input: Object3D | Object3D[]) => void;
}
