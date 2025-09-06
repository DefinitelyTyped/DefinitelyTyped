import { Combine, NormalMapTypes } from "../constants.js";
import { Color } from "../math/Color.js";
import { Euler } from "../math/Euler.js";
import { Vector2 } from "../math/Vector2.js";
import { Texture } from "../textures/Texture.js";
import { MapColorPropertiesToColorRepresentations, Material, MaterialProperties } from "./Material.js";

export interface MeshPhongMaterialProperties extends MaterialProperties {
    /**
     * Color of the material.
     *
     * @default (1,1,1)
     */
    color: Color;
    /**
     * Specular color of the material. The default color is set to `0x111111` (very dark grey)
     *
     * This defines how shiny the material is and the color of its shine.
     */
    specular: Color;
    /**
     * How shiny the specular highlight is; a higher value gives a sharper highlight.
     *
     * @default 30
     */
    shininess: number;
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
     * Emissive (light) color of the material, essentially a solid color
     * unaffected by other lighting.
     *
     * @default (0,0,0)
     */
    emissive: Color;
    /**
     * Intensity of the emissive light. Modulates the emissive color.
     *
     * @default 1
     */
    emissiveIntensity: number;
    /**
     * Set emissive (glow) map. The emissive map color is modulated by the
     * emissive color and the emissive intensity. If you have an emissive map,
     * be sure to set the emissive color to something other than black.
     *
     * @default null
     */
    emissiveMap: Texture | null;
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
     * The specular map value affects both how much the specular surface
     * highlight contributes and how much of the environment map affects the
     * surface.
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
export interface MeshPhongMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<MeshPhongMaterialProperties>>
{}

/**
 * A material for shiny surfaces with specular highlights.
 *
 * The material uses a non-physically based [Blinn-Phong]{@link https://en.wikipedia.org/wiki/Blinn-Phong_shading_model}
 * model for calculating reflectance. Unlike the Lambertian model used in the
 * {@link MeshLambertMaterial} this can simulate shiny surfaces with specular
 * highlights (such as varnished wood). `MeshPhongMaterial` uses per-fragment shading.
 *
 * Performance will generally be greater when using this material over the
 * {@link MeshStandardMaterial} or {@link MeshPhysicalMaterial}, at the cost of
 * some graphical accuracy.
 */
export class MeshPhongMaterial extends Material {
    /**
     * Constructs a new mesh phong material.
     *
     * @param {Object} [parameters] - An object with one or more properties
     * defining the material's appearance. Any property of the material
     * (including any property from inherited materials) can be passed
     * in here. Color values can be passed any type of value accepted
     * by {@link Color#set}.
     */
    constructor(parameters?: MeshPhongMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshPhongMaterial: boolean;
    setValues(values?: MeshPhongMaterialParameters): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshPhongMaterial extends MeshPhongMaterialProperties {}
