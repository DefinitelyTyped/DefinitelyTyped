import { DepthPackingStrategies } from "../constants.js";
import { Texture } from "../textures/Texture.js";
import { MapColorPropertiesToColorRepresentations, Material, MaterialProperties } from "./Material.js";

export interface MeshDepthMaterialProperties extends MaterialProperties {
    /**
     * Type for depth packing.
     *
     * @default BasicDepthPacking
     */
    depthPacking: DepthPackingStrategies;
    /**
     * The color map. May optionally include an alpha channel, typically combined
     * with {@link Material#transparent} or {@link Material#alphaTest}.
     *
     * @default null
     */
    map: Texture | null;
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
     * Renders the geometry as a wireframe.
     *
     * @default false
     */
    wireframe: boolean;
    /**
     * Controls the thickness of the wireframe.
     *
     * WebGL and WebGPU ignore this property and always render
     * 1 pixel wide lines.
     *
     * @default 1
     */
    wireframeLinewidth: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshDepthMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<MeshDepthMaterialProperties>>
{}

/**
 * A material for drawing geometry by depth. Depth is based off of the camera
 * near and far plane. White is nearest, black is farthest.
 */
export class MeshDepthMaterial extends Material {
    /**
     * Constructs a new mesh depth material.
     *
     * @param {Object} [parameters] - An object with one or more properties
     * defining the material's appearance. Any property of the material
     * (including any property from inherited materials) can be passed
     * in here. Color values can be passed any type of value accepted
     * by {@link Color#set}.
     */
    constructor(parameters?: MeshDepthMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshDepthMaterial: boolean;
    setValues(values?: MeshDepthMaterialParameters): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshDepthMaterial extends MeshDepthMaterialProperties {}
