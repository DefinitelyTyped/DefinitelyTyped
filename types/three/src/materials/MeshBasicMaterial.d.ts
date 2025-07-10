import { Combine } from "../constants.js";
import { Color } from "../math/Color.js";
import { Euler } from "../math/Euler.js";
import { Texture } from "../textures/Texture.js";
import { MapColorPropertiesToColorRepresentations, Material, MaterialProperties } from "./Material.js";

export interface MeshBasicMaterialProperties extends MaterialProperties {
    /**
     * Color of the material.
     *
     * @default (1,1,1)
     */
    color: Color;
    /**
     * The color map. May optionally include an alpha channel, typically combined
     * with {@link Material#transparent} or {@link Material#alphaTest}. The texture map
     * color is modulated by the diffuse `color`.
     *
     * @default null
     */
    map: Texture | null;
    /**
     * The light map. Requires a second set of UVs.
     *
     * @default null
     */
    lightMap: Texture | null;
    /**
     * Intensity of the baked light.
     *
     * @default 1
     */
    lightMapIntensity: number;
    /**
     * The red channel of this texture is used as the ambient occlusion map.
     * Requires a second set of UVs.
     *
     * @default null
     */
    aoMap: Texture | null;
    /**
     * Intensity of the ambient occlusion effect. Range is `[0,1]`, where `0`
     * disables ambient occlusion. Where intensity is `1` and the AO map's
     * red channel is also `1`, ambient light is fully occluded on a surface.
     *
     * @default 1
     */
    aoMapIntensity: number;
    /**
     * Specular map used by the material.
     *
     * @default null
     */
    specularMap: Texture | null;
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
     * The environment map.
     *
     * @default null
     */
    envMap: Texture | null;
    /**
     * The rotation of the environment map in radians.
     *
     * @default (0,0,0)
     */
    envMapRotation: Euler;
    /**
     * How to combine the result of the surface's color with the environment map, if any.
     *
     * When set to `MixOperation`, the {@link MeshBasicMaterial#reflectivity} is used to
     * blend between the two colors.
     *
     * @default MultiplyOperation
     */
    combine: Combine;
    /**
     * How much the environment map affects the surface.
     * The valid range is between `0` (no reflections) and `1` (full reflections).
     *
     * @default 1
     */
    reflectivity: number;
    /**
     * The index of refraction (IOR) of air (approximately 1) divided by the
     * index of refraction of the material. It is used with environment mapping
     * modes {@link CubeRefractionMapping} and {@link EquirectangularRefractionMapping}.
     * The refraction ratio should not exceed `1`.
     *
     * @default 0.98
     */
    refractionRatio: number;
    /**
     * Renders the geometry as a wireframe.
     *
     * @default false
     */
    wireframe: boolean;
    /**
     * Controls the thickness of the wireframe.
     *
     * Can only be used with {@link SVGRenderer}.
     *
     * @default 1
     */
    wireframeLinewidth: number;
    /**
     * Defines appearance of wireframe ends.
     *
     * Can only be used with {@link SVGRenderer}.
     *
     * @default 'round'
     */
    wireframeLinecap: "round" | "bevel" | "miter";
    /**
     * Defines appearance of wireframe joints.
     *
     * Can only be used with {@link SVGRenderer}.
     *
     * @default 'round'
     */
    wireframeLinejoin: "round" | "bevel" | "miter";
    /**
     * Whether the material is affected by fog or not.
     *
     * @default true
     */
    fog: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshBasicMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<MeshBasicMaterialProperties>>
{}

/**
 * A material for drawing geometries in a simple shaded (flat or wireframe) way.
 *
 * This material is not affected by lights.
 */
export class MeshBasicMaterial extends Material {
    /**
     * Constructs a new mesh basic material.
     *
     * @param {Object} [parameters] - An object with one or more properties
     * defining the material's appearance. Any property of the material
     * (including any property from inherited materials) can be passed
     * in here. Color values can be passed any type of value accepted
     * by {@link Color#set}.
     */
    constructor(parameters?: MeshBasicMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshBasicMaterial: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshBasicMaterial extends MeshBasicMaterialProperties {}
