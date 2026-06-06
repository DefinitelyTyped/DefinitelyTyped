import { Data3DTexture, FloatType, Loader, LoadingManager, UnsignedByteType, Vector3 } from "three";

export interface LUTCubeResult {
    title: string;
    size: number;
    domainMin: Vector3;
    domainMax: Vector3;
    texture3D: Data3DTexture;
}

/**
 * A 3D LUT loader that supports the .cube file format.
 *
 * Based on the following reference:
 *
 * https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf
 */
export class LUTCubeLoader extends Loader<LUTCubeResult> {
    type: typeof UnsignedByteType | typeof FloatType;

    /**
     * Creates a new {@link LUTCubeLoader}.
     * @param manager The LoadingManager to use. Defaults to {@link DefaultLoadingManager}
     */
    constructor(manager?: LoadingManager);

    /**
     * Sets the desired texture type. Only {@link THREE.UnsignedByteType} and {@link THREE.FloatType} are supported. The
     * default is {@link THREE.UnsignedByteType}.
     * @param type The texture type. See the Textures texture constants page for details.
     */
    setType(type: typeof UnsignedByteType | typeof FloatType): this;

    /**
     * Parse a cube data string and fire {@link onLoad} callback when complete. The argument to {@link onLoad} will be
     * an object containing the following LUT data: {@link LUTCubeResult.title}, {@link LUTCubeResult.size},
     * {@link LUTCubeResult.domainMin}, {@link LUTCubeResult.domainMax}, {@link LUTCubeResult.texture} and
     * {@link LUTCubeResult.texture3D}.
     * @param input The cube data string.
     */
    parse(input: string): LUTCubeResult;
}
