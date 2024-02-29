import { Color, ColorRepresentation } from "../math/Color.js";
import { Texture } from "../textures/Texture.js";
import { Material, MaterialParameters } from "./Material.js";

export interface SpriteMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    rotation?: number | undefined;
    sizeAttenuation?: boolean | undefined;
    fog?: boolean | undefined;
}

export class SpriteMaterial extends Material {
    constructor(parameters?: SpriteMaterialParameters);
    /**
     * Read-only flag to check if a given object is of type {@link SpriteMaterial}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSpriteMaterial: true;

    /**
     * @default 'SpriteMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default 0
     */
    rotation: number;

    /**
     * @default true
     */
    sizeAttenuation: boolean;

    /**
     * @default true
     */
    transparent: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: SpriteMaterialParameters): void;
    copy(source: SpriteMaterial): this;
}
