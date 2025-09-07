import { NormalMapTypes } from "../constants.js";
import { Color } from "../math/Color.js";
import { Vector2 } from "../math/Vector2.js";
import { Texture } from "../textures/Texture.js";
import { MapColorPropertiesToColorRepresentations, Material, MaterialProperties } from "./Material.js";

export interface MeshMatcapMaterialProperties extends MaterialProperties {
    /**
     * Color of the material.
     *
     * @default (1,1,1)
     */
    color: Color;
    /**
     * The matcap map.
     *
     * @default null
     */
    matcap: Texture | null;
    /**
     * The color map. May optionally include an alpha channel, typically combined
     * with {@link Material#transparent} or {@link Material#alphaTest}. The texture map
     * color is modulated by the diffuse `color`.
     *
     * @default null
     */
    map: Texture | null;
    /**
     * The texture to create a bump map. The black and white values map to the
     * perceived depth in relation to the lights. Bump doesn't actually affect
     * the geometry of the object, only the lighting. If a normal map is defined
     * this will be ignored.
     *
     * @default null
     */
    bumpMap: Texture | null;
    /**
     * How much the bump map affects the material. Typical range is `[0,1]`.
     *
     * @default 1
     */
    bumpScale: number;
    /**
     * The texture to create a normal map. The RGB values affect the surface
     * normal for each pixel fragment and change the way the color is lit. Normal
     * maps do not change the actual shape of the surface, only the lighting. In
     * case the material has a normal map authored using the left handed
     * convention, the `y` component of `normalScale` should be negated to compensate
     * for the different handedness.
     *
     * @default null
     */
    normalMap: Texture | null;
    /**
     * The type of normal map.
     *
     * @default TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;
    /**
     * How much the normal map affects the material. Typical value range is `[0,1]`.
     *
     * @default (1,1)
     */
    normalScale: Vector2;
    /**
     * The displacement map affects the position of the mesh's vertices. Unlike
     * other maps which only affect the light and shade of the material the
     * displaced vertices can cast shadows, block other objects, and otherwise
     * act as real geometry. The displacement texture is an image where the value
     * of each pixel (white being the highest) is mapped against, and
     * repositions, the vertices of the mesh.
     *
     * @default null
     */
    displacementMap: Texture | null;
    /**
     * How much the displacement map affects the mesh (where black is no
     * displacement, and white is maximum displacement). Without a displacement
     * map set, this value is not applied.
     *
     * @default 0
     */
    displacementScale: number;
    /**
     * The offset of the displacement map's values on the mesh's vertices.
     * The bias is added to the scaled sample of the displacement map.
     * Without a displacement map set, this value is not applied.
     *
     * @default 0
     */
    displacementBias: number;
    /**
     * The alpha map is a grayscale texture that controls the opacity across the
     * surface (black: fully transparent; white: fully opaque).
     *
     * Only the color of the texture is used, ignoring the alpha channel if one
     * exists. For RGB and RGBA textures, the renderer will use the green channel
     * when sampling this texture due to the extra bit of precision provided for
     * green in DXT-compressed and uncompressed RGB 565 formats. Luminance-only and
     * luminance/alpha textures will also still work as expected.
     *
     * @default null
     */
    alphaMap: Texture | null;
    /**
     * Whether the material is rendered with flat shading or not.
     *
     * @default false
     */
    flatShading: boolean;
    /**
     * Whether the material is affected by fog or not.
     *
     * @default true
     */
    fog: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshMatcapMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<MeshMatcapMaterialProperties>>
{}

/**
 * This material is defined by a MatCap (or Lit Sphere) texture, which encodes the
 * material color and shading.
 *
 * `MeshMatcapMaterial` does not respond to lights since the matcap image file encodes
 * baked lighting. It will cast a shadow onto an object that receives shadows
 * (and shadow clipping works), but it will not self-shadow or receive
 * shadows.
 */
export class MeshMatcapMaterial extends Material {
    /**
     * Constructs a new mesh matcap material.
     *
     * @param {Object} [parameters] - An object with one or more properties
     * defining the material's appearance. Any property of the material
     * (including any property from inherited materials) can be passed
     * in here. Color values can be passed any type of value accepted
     * by {@link Color#set}.
     */
    constructor(parameters?: MeshMatcapMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshMatcapMaterial: boolean;
    setValues(values?: MeshMatcapMaterialParameters): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshMatcapMaterial extends MeshMatcapMaterialProperties {}
