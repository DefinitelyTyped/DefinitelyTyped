import { Color } from "../math/Color.js";
import { Vector2 } from "../math/Vector2.js";
import { Texture } from "../textures/Texture.js";
import { MapColorPropertiesToColorRepresentations } from "./Material.js";
import { MeshStandardMaterial, MeshStandardMaterialProperties } from "./MeshStandardMaterial.js";

export interface MeshPhysicalMaterialProperties extends MeshStandardMaterialProperties {
    /**
     * The rotation of the anisotropy in tangent, bitangent space, measured in radians
     * counter-clockwise from the tangent. When `anisotropyMap` is present, this
     * property provides additional rotation to the vectors in the texture.
     *
     * @default 1
     */
    anisotropyRotation: number;
    /**
     * Red and green channels represent the anisotropy direction in `[-1, 1]` tangent,
     * bitangent space, to be rotated by `anisotropyRotation`. The blue channel
     * contains strength as `[0, 1]` to be multiplied by `anisotropy`.
     *
     * @default null
     */
    anisotropyMap: Texture | null;
    /**
     * The red channel of this texture is multiplied against `clearcoat`,
     * for per-pixel control over a coating's intensity.
     *
     * @default null
     */
    clearcoatMap: Texture | null;
    /**
     * Roughness of the clear coat layer, from `0.0` to `1.0`.
     *
     * @default 0
     */
    clearcoatRoughness: number;
    /**
     * The green channel of this texture is multiplied against
     * `clearcoatRoughness`, for per-pixel control over a coating's roughness.
     *
     * @default null
     */
    clearcoatRoughnessMap: Texture | null;
    /**
     * How much `clearcoatNormalMap` affects the clear coat layer, from
     * `(0,0)` to `(1,1)`.
     *
     * @default (1,1)
     */
    clearcoatNormalScale: Vector2;
    /**
     * Can be used to enable independent normals for the clear coat layer.
     *
     * @default null
     */
    clearcoatNormalMap: Texture | null;
    /**
     * Index-of-refraction for non-metallic materials, from `1.0` to `2.333`.
     *
     * @default 1.5
     */
    ior: number;
    /**
     * Degree of reflectivity, from `0.0` to `1.0`. Default is `0.5`, which
     * corresponds to an index-of-refraction of `1.5`.
     *
     * This models the reflectivity of non-metallic materials. It has no effect
     * when `metalness` is `1.0`
     *
     * @name MeshPhysicalMaterial#reflectivity
     * @default 0.5
     */
    get reflectivity(): number;
    set reflectivity(reflectivity: number);
    /**
     * The red channel of this texture is multiplied against `iridescence`, for per-pixel
     * control over iridescence.
     *
     * @default null
     */
    iridescenceMap: Texture | null;
    /**
     * Strength of the iridescence RGB color shift effect, represented by an index-of-refraction.
     * Between `1.0` to `2.333`.
     *
     * @default 1.3
     */
    iridescenceIOR: number;
    /**
     *Array of exactly 2 elements, specifying minimum and maximum thickness of the iridescence layer.
     Thickness of iridescence layer has an equivalent effect of the one `thickness` has on `ior`.
     *
     * @default [100,400]
     */
    iridescenceThicknessRange: [number, number];
    /**
     * A texture that defines the thickness of the iridescence layer, stored in the green channel.
     * Minimum and maximum values of thickness are defined by `iridescenceThicknessRange` array:
     * - `0.0` in the green channel will result in thickness equal to first element of the array.
     * - `1.0` in the green channel will result in thickness equal to second element of the array.
     * - Values in-between will linearly interpolate between the elements of the array.
     *
     * @default null
     */
    iridescenceThicknessMap: Texture | null;
    /**
     * The sheen tint.
     *
     * @default (0,0,0)
     */
    sheenColor: Color;
    /**
     * The RGB channels of this texture are multiplied against  `sheenColor`, for per-pixel control
     * over sheen tint.
     *
     * @default null
     */
    sheenColorMap: Texture | null;
    /**
     * Roughness of the sheen layer, from `0.0` to `1.0`.
     *
     * @default 1
     */
    sheenRoughness: number;
    /**
     * The alpha channel of this texture is multiplied against `sheenRoughness`, for per-pixel control
     * over sheen roughness.
     *
     * @default null
     */
    sheenRoughnessMap: Texture | null;
    /**
     * The red channel of this texture is multiplied against `transmission`, for per-pixel control over
     * optical transparency.
     *
     * @default null
     */
    transmissionMap: Texture | null;
    /**
     * The thickness of the volume beneath the surface. The value is given in the
     * coordinate space of the mesh. If the value is `0` the material is
     * thin-walled. Otherwise the material is a volume boundary.
     *
     * @default 0
     */
    thickness: number;
    /**
     * A texture that defines the thickness, stored in the green channel. This will
     * be multiplied by `thickness`.
     *
     * @default null
     */
    thicknessMap: Texture | null;
    /**
     * Density of the medium given as the average distance that light travels in
     * the medium before interacting with a particle. The value is given in world
     * space units, and must be greater than zero.
     *
     * @default Infinity
     */
    attenuationDistance: number;
    /**
     * The color that white light turns into due to absorption when reaching the
     * attenuation distance.
     *
     * @default (1,1,1)
     */
    attenuationColor: Color;
    /**
     * A float that scales the amount of specular reflection for non-metals only.
     * When set to zero, the model is effectively Lambertian. From `0.0` to `1.0`.
     *
     * @default 1
     */
    specularIntensity: number;
    /**
     * The alpha channel of this texture is multiplied against `specularIntensity`,
     * for per-pixel control over specular intensity.
     *
     * @default null
     */
    specularIntensityMap: Texture | null;
    /**
     * Tints the specular reflection at normal incidence for non-metals only.
     *
     * @default (1,1,1)
     */
    specularColor: Color;
    /**
     * The RGB channels of this texture are multiplied against `specularColor`,
     * for per-pixel control over specular color.
     *
     * @default null
     */
    specularColorMap: Texture | null;
    set anisotropy(value: number);
    /**
     * The anisotropy strength, from `0.0` to `1.0`.
     *
     * @default 0
     */
    get anisotropy(): number;
    set clearcoat(value: number);
    /**
     * Represents the intensity of the clear coat layer, from `0.0` to `1.0`. Use
     * clear coat related properties to enable multilayer materials that have a
     * thin translucent layer over the base layer.
     *
     * @default 0
     */
    get clearcoat(): number;
    set iridescence(value: number);
    /**
     * The intensity of the iridescence layer, simulating RGB color shift based on the angle between
     * the surface and the viewer, from `0.0` to `1.0`.
     *
     * @default 0
     */
    get iridescence(): number;
    set dispersion(value: number);
    /**
     * Defines the strength of the angular separation of colors (chromatic aberration) transmitting
     * through a relatively clear volume. Any value zero or larger is valid, the typical range of
     * realistic values is `[0, 1]`. This property can be only be used with transmissive objects.
     *
     * @default 0
     */
    get dispersion(): number;
    set sheen(value: number);
    /**
     * The intensity of the sheen layer, from `0.0` to `1.0`.
     *
     * @default 0
     */
    get sheen(): number;
    set transmission(value: number);
    /**
     * Degree of transmission (or optical transparency), from `0.0` to `1.0`.
     *
     * Thin, transparent or semitransparent, plastic or glass materials remain
     * largely reflective even if they are fully transmissive. The transmission
     * property can be used to model these materials.
     *
     * When transmission is non-zero, `opacity` should be  set to `1`.
     *
     * @default 0
     */
    get transmission(): number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshPhysicalMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<MeshPhysicalMaterialProperties>>
{}

/**
 * An extension of the {@link MeshStandardMaterial}, providing more advanced
 * physically-based rendering properties:
 *
 * - Anisotropy: Ability to represent the anisotropic property of materials
 * as observable with brushed metals.
 * - Clearcoat: Some materials — like car paints, carbon fiber, and wet surfaces — require
 * a clear, reflective layer on top of another layer that may be irregular or rough.
 * Clearcoat approximates this effect, without the need for a separate transparent surface.
 * - Iridescence: Allows to render the effect where hue varies  depending on the viewing
 * angle and illumination angle. This can be seen on soap bubbles, oil films, or on the
 * wings of many insects.
 * - Physically-based transparency: One limitation of {@link Material#opacity} is that highly
 * transparent materials are less reflective. Physically-based transmission provides a more
 * realistic option for thin, transparent surfaces like glass.
 * - Advanced reflectivity: More flexible reflectivity for non-metallic materials.
 * - Sheen: Can be used for representing cloth and fabric materials.
 *
 * As a result of these complex shading features, `MeshPhysicalMaterial` has a
 * higher performance cost, per pixel, than other three.js materials. Most
 * effects are disabled by default, and add cost as they are enabled. For
 * best results, always specify an environment map when using this material.
 */
export class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(parameters?: MeshPhysicalMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshPhysicalMaterial: boolean;
    setValues(values?: MeshPhysicalMaterialParameters): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshPhysicalMaterial extends MeshPhysicalMaterialProperties {}
