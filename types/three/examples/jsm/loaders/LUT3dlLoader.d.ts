import { Data3DTexture, DataTexture, FloatType, Loader, LoadingManager, UnsignedByteType } from "three";

export interface LUT3dlResult {
    size: number;
    texture: DataTexture;
    texture3D: Data3DTexture;
}

/**
 * A 3D LUT loader that supports the .3dl file format.
 *
 * Based on the following references:
 *
 * http://download.autodesk.com/us/systemdocs/help/2011/lustre/index.html?url=./files/WSc4e151a45a3b785a24c3d9a411df9298473-7ffd.htm,topicNumber=d0e9492
 * https://community.foundry.com/discuss/topic/103636/format-spec-for-3dl?mode=Post&postID=895258
 */
export class LUT3dlLoader extends Loader<LUT3dlResult> {
    type: typeof UnsignedByteType | typeof FloatType;

    /**
     * Creates a new {@link LUT3dlLoader}.
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
     * Parse a 3dl data string and fire {@link onLoad} callback when complete. The argument to {@link onLoad} will be an
     * object containing the following LUT data: {@link LUT3dlResult.size}, {@link LUT3dlResult.texture} and
     * {@link LUT3dlResult.texture3D}.
     * @param input The 3dl data string.
     */
    parse(input: string): LUT3dlResult;
}
