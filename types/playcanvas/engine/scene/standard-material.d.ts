declare namespace pc {

    /**
     * @name pc.StandardMaterial
     * @class A Standard material is the main, general purpose material that is most often used for rendering.
     * It can approximate a wide variety of surface types and can simulate dynamic reflected light.
     * @property {pc.Color} ambient The ambient color of the material. This color value is 3-component (RGB),
     * where each component is between 0 and 1.
     * @property {pc.Color} diffuse The diffuse color of the material. This color value is 3-component (RGB),
     * where each component is between 0 and 1.
     * @property {pc.Texture} diffuseMap The diffuse map of the material. This must be a 2D texture rather
     * than a cube map. If this property is set to a valid texture, the texture is used as the source for diffuse
     * color in preference to the 'diffuse' property.
     * @property {Number} diffuseMapUv Diffuse map UV channel
     * @property {String} diffuseMapChannel Color channels of the diffuse map to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
     * @property {Boolean} diffuseMapVertexColor Use vertex colors for diffuse instead of a map
     * @property {pc.Vec2} diffuseMapTiling Controls the 2D tiling of the diffuse map.
     * @property {pc.Vec2} diffuseMapOffset Controls the 2D offset of the diffuse map. Each component is between 0 and 1.
     * @property {pc.Color} specular The specular color of the material. This color value is 3-component (RGB),
     * @property {pc.Texture} specularMap The per-pixel specular map of the material. This must be a 2D texture
     * rather than a cube map. If this property is set to a valid texture, the texture is used as the source for
     * specular color in preference to the 'specular' property.
     * @property {Number} specularMapUv Specular map UV channel
     * @property {String} specularMapChannel Color channels of the specular map to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
     * @property {Boolean} specularMapVertexColor Use vertex colors for specular instead of a map
     * @property {pc.Vec2} specularMapTiling Controls the 2D tiling of the specular map.
     * @property {pc.Vec2} specularMapOffset Controls the 2D offset of the specular map. Each component is between 0 and 1.
     * @property {Number} metalness Defines how much the surface is metallic. From 0 (dielectric) to 1 (metal).
     * This can be used as alternative to specular color to save space.
     * Metallic surfaces have their reflection tinted with diffuse color.
     * @property {pc.Texture} metalnessMap Monochrome metalness map.
     * @property {Number} metalnessMapUv Metalness map UV channel
     * @property {String} metalnessMapChannel Color channel of the metalness map to use. Can be "r", "g", "b" or "a".
     * @property {Boolean} metalnessMapVertexColor Use vertex colors for metalness instead of a map
     * @property {pc.Vec2} metalnessMapTiling Controls the 2D tiling of the metalness map.
     * @property {pc.Vec2} metalnessMapOffset Controls the 2D offset of the metalness map. Each component is between 0 and 1.
     * @property {Boolean} useMetalness Use metalness properties instead of specular.
     * @property {Number} shininess Defines glossiness of the material from 0 (rough) to 100 (mirror).
     * A higher shininess value results in a more focussed specular highlight.
     * @property {pc.Texture} glossMap The per-pixel gloss of the material. This must be a 2D texture
     * rather than a cube map. If this property is set to a valid texture, the texture is used as the source for
     * shininess in preference to the 'shininess' property.
     * @property {Number} glossMapUv Gloss map UV channel
     * @property {String} glossMapChannel Color channel of the gloss map to use. Can be "r", "g", "b" or "a".
     * @property {Boolean} glossMapVertexColor Use vertex colors for glossiness instead of a map
     * @property {pc.Vec2} glossMapTiling Controls the 2D tiling of the gloss map.
     * @property {pc.Vec2} glossMapOffset Controls the 2D offset of the gloss map. Each component is between 0 and 1.
     * @property {Number} refraction Defines the visibility of refraction. Material can refract the same cube map as used for reflections.
     * @property {Number} refractionIndex Defines the index of refraction, i.e. the amount of distortion.
     * The value is calculated as (outerIor / surfaceIor), where inputs are measured indices of refraction, the one around the object and the one of it's own surface.
     * In most situations outer medium is air, so outerIor will be approximately 1. Then you only need to do (1.0 / surfaceIor).
     * @property {pc.Color} emissive The emissive color of the material. This color value is 3-component (RGB),
     * where each component is between 0 and 1.
     * @property {pc.Texture} emissiveMap The emissive map of the material. This must be a 2D texture rather
     * than a cube map. If this property is set to a valid texture, the texture is used as the source for emissive
     * color in preference to the 'emissive' property.
     * @property {Number} emissiveIntensity Emissive color multiplier.
     * @property {Number} emissiveMapUv Emissive map UV channel
     * @property {String} emissiveMapChannel Color channels of the emissive map to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
     * @property {Boolean} emissiveMapVertexColor Use vertex colors for emission instead of a map
     * @property {pc.Vec2} emissiveMapTiling Controls the 2D tiling of the emissive map.
     * @property {pc.Vec2} emissiveMapOffset Controls the 2D offset of the emissive map. Each component is between 0 and 1.
     * @property {Number} opacity The opacity of the material. This value can be between 0 and 1, where 0 is fully
     * transparent and 1 is fully opaque. If you want the material to be transparent you also need to
     * set the {@link pc.Material#blendType} to pc.BLEND_NORMAL or pc.BLEND_ADDITIVE.
     * @property {pc.Texture} opacityMap The opacity map of the material. This must be a 2D texture rather
     * than a cube map. If this property is set to a valid texture, the texture is used as the source for opacity
     * in preference to the 'opacity' property. If you want the material to be transparent you also need to
     * set the {@link pc.Material#blendType} to pc.BLEND_NORMAL or pc.BLEND_ADDITIVE.
     * @property {Number} opacityMapUv Opacity map UV channel
     * @property {String} opacityMapChannel Color channel of the opacity map to use. Can be "r", "g", "b" or "a".
     * @property {Boolean} opacityMapVertexColor Use vertex colors for opacity instead of a map
     * @property {pc.Vec2} opacityMapTiling Controls the 2D tiling of the opacity map.
     * @property {pc.Vec2} opacityMapOffset Controls the 2D offset of the opacity map. Each component is between 0 and 1.
     * @property {pc.Texture} normalMap The normal map of the material. This must be a 2D texture rather
     * than a cube map. The texture must contains normalized, tangent space normals.
     * @property {Number} normalMapUv Normal map UV channel
     * @property {pc.Vec2} normalMapTiling Controls the 2D tiling of the normal map.
     * @property {pc.Vec2} normalMapOffset Controls the 2D offset of the normal map. Each component is between 0 and 1.
     * @property {pc.Texture} heightMap The height map of the material. This must be a 2D texture rather
     * than a cube map. The texture contain values defining the height of the surface at that point where darker
     * pixels are lower and lighter pixels are higher.
     * @property {Number} heightMapUv Height map UV channel
     * @property {String} heightMapChannel Color channel of the height map to use. Can be "r", "g", "b" or "a".
     * @property {pc.Vec2} heightMapTiling Controls the 2D tiling of the height map.
     * @property {pc.Vec2} heightMapOffset Controls the 2D offset of the height map. Each component is between 0 and 1.
     * @property {Number} bumpiness The bumpiness of the material. This value scales the assigned normal map
     * and can be between 0 and 1, where 0 shows no contribution from the normal map and 1 results in a full contribution.
     * @property {Number} heightMapFactor Height map multiplier. Height maps are used to create a parallax mapping effect
     * and modifying this value will alter the strength of the parallax effect.
     * @property {pc.Texture} sphereMap The spherical environment map of the material.
     * @property {pc.Texture} cubeMap The cubic environment map of the material.
     * @property {Number} cubeMapProjection The type of projection applied to the cubeMap property:
     * <ul>
     *     <li>{@link pc.CUBEPROJ_NONE}: The cube map is treated as if it is infinitely far away.</li>
     *     <li>{@link pc.CUBEPROJ_BOX}: Box-projection based on a world space axis-aligned bounding box.</li>
     * </ul>
     * Defaults to pc.CUBEPROJ_NONE.
     * @property {pc.BoundingBox} cubeMapProjectionBox The world space axis-aligned bounding box defining the
     * box-projection used for the cubeMap property. Only used when cubeMapProjection is set to pc.CUBEPROJ_BOX.
     * @property {Number} reflectivity The reflectivity of the material. This value scales the reflection map and
     * can be between 0 and 1, where 0 shows no reflection and 1 is fully reflective.
     * @property {pc.Texture} lightMap The light map of the material.
     * @property {Number} lightMapUv Lightmap UV channel
     * @property {String} lightMapChannel Color channels of the lightmap to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
     * @property {Boolean} lightMapVertexColor Use vertex lightmap instead of a texture-based one
     * @property {pc.Vec2} lightMapTiling Controls the 2D tiling of the lightmap.
     * @property {pc.Vec2} lightMapOffset Controls the 2D offset of the lightmap. Each component is between 0 and 1.
     * @property {Boolean} ambientTint Enables scene ambient multiplication by material ambient color.
     * @property {Boolean} diffuseMapTint Enables diffuseMap multiplication by diffuse color.
     * @property {Boolean} specularMapTint Enables specularMap multiplication by specular color.
     * @property {Boolean} emissiveMapTint Enables emissiveMap multiplication by emissive color.
     * @property {pc.Texture} aoMap Baked ambient occlusion map. Modulates ambient color.
     * @property {Number} aoMapUv AO map UV channel
     * @property {String} aoMapChannel Color channel of the AO map to use. Can be "r", "g", "b" or "a".
     * @property {Boolean} aoMapVertexColor Use vertex colors for AO instead of a map
     * @property {pc.Vec2} aoMapTiling Controls the 2D tiling of the AO map.
     * @property {pc.Vec2} aoMapOffset Controls the 2D offset of the AO map. Each component is between 0 and 1.
     * @property {Number} occludeSpecular Uses aoMap to occlude specular/reflection. It's a hack, because real specular occlusion is view-dependent. However, it's much better than nothing.
     * <ul>
     *     <li>{@link pc.SPECOCC_NONE}: No specular occlusion</li>
     *     <li>{@link pc.SPECOCC_AO}: Use AO map directly to occlude specular.</li>
     *     <li>{@link pc.SPECOCC_GLOSSDEPENDENT}: Modify AO map based on material glossiness/view angle to occlude specular.</li>
     * </ul>
     * @property {Number} occludeSpecularIntensity Controls visibility of specular occlusion.
     * @property {Boolean} specularAntialias Enables Toksvig AA for mipmapped normal maps with specular.
     * @property {Boolean} conserveEnergy Defines how diffuse and specular components are combined when Fresnel is on.
        It is recommended that you leave this option enabled, although you may want to disable it in case when all reflection comes only from a few light sources, and you don't use an environment map, therefore having mostly black reflection.
     * @property {Number} shadingModel Defines the shading model.
     * <ul>
     *     <li>{@link pc.SPECULAR_PHONG}: Phong without energy conservation. You should only use it as a backwards compatibility with older projects.</li>
     *     <li>{@link pc.SPECULAR_BLINN}: Energy-conserving Blinn-Phong.</li>
     * </ul>
     * @property {Number} fresnelModel Defines the formula used for Fresnel effect.
     As a side-effect, enabling any Fresnel model changes the way diffuse and reflection components are combined.
     When Fresnel is off, legacy non energy-conserving combining is used. When it is on, combining behaviour is defined by conserveEnergy parameter.
     * <ul>
     *     <li>{@link pc.FRESNEL_NONE}: No Fresnel.</li>
     *     <li>{@link pc.FRESNEL_SCHLICK}: Schlick's approximation of Fresnel (recommended). Parameterized by specular color.</li>
     * </ul>
     * @property {Boolean} useFog Apply fogging (as configured in scene settings)
     * @property {Boolean} useLighting Apply lighting
     * @property {Boolean} useSkybox Apply scene skybox as prefiltered environment map
     * @property {Boolean} useGammaTonemap Apply gamma correction and tonemapping (as configured in scene settings)
     * @property {Boolean} twoSidedLighting Calculate proper normals (and therefore lighting) on backfaces
     *
     * @example
     * // Create a new Standard material
     * var material = new pc.StandardMaterial();
     *
     * // Update the material's diffuse and specular properties
     * material.diffuse.set(1, 0, 0);
     * material.specular.set(1, 1, 1);
     *
     * // Notify the material that it has been modified
     * material.update();
     *
     * @extends pc.Material
     * @author Will Eastcott and Arthur Rahteenko
     */
    class StandardMaterial extends pc.Material {
        ambient: pc.Color;
        diffuse: pc.Color;
        diffuseMap: pc.Texture;
        diffuseMapUv: number;
        diffuseMapChannel: string;
        diffuseMapVertexColor: boolean;
        diffuseMapTiling: pc.Vec2;
        diffuseMapOffset: pc.Vec2;
        specular: pc.Color;
        specularMap: pc.Texture;
        specularMapUv: number;
        specularMapChannel: string;
        specularMapVertexColor: boolean;
        specularMapTiling: pc.Vec2;
        specularMapOffset: pc.Vec2;
        metalness: number;
        metalnessMap: pc.Texture;
        metalnessMapUv: number;
        metalnessMapChannel: string;
        metalnessMapVertexColor: boolean;
        metalnessMapTiling: pc.Vec2;
        metalnessMapOffset: pc.Vec2;
        useMetalness: boolean;
        shininess: number;
        glossMap: pc.Texture;
        glossMapUv: number;
        glossMapChannel: string;
        glossMapVertexColor: boolean;
        glossMapTiling: pc.Vec2;
        glossMapOffset: pc.Vec2;
        refraction: number;
        refractionIndex: number;
        emissive: pc.Color;
        emissiveMap: pc.Texture;
        emissiveIntensity: number;
        emissiveMapUv: number;
        emissiveMapChannel: string;
        emissiveMapVertexColor: boolean;
        emissiveMapTiling: pc.Vec2;
        emissiveMapOffset: pc.Vec2;
        opacity: number;
        opacityMap: pc.Texture;
        opacityMapUv: number;
        opacityMapChannel: string;
        opacityMapVertexColor: boolean;
        opacityMapTiling: pc.Vec2;
        opacityMapOffset: pc.Vec2;
        normalMap: pc.Texture;
        normalMapUv: number;
        normalMapTiling: pc.Vec2;
        normalMapOffset: pc.Vec2;
        heightMap: pc.Texture;
        heightMapUv: number;
        heightMapChannel: string;
        heightMapTiling: pc.Vec2;
        heightMapOffset: pc.Vec2;
        bumpiness: number;
        heightMapFactor: number;
        shereMap: pc.Texture;
        cubeMap: pc.Texture;
        cubeMapProjection: number;
        cubeMapProjectionBox: pc.BoundingBox;
        reflectivity: number;
        lightMap: pc.Texture;
        lightMapUv: number;
        lightMapChannel: string;
        lightMapVertexColor: boolean;
        lightMapTiling: pc.Vec2;
        lightMapOffset: pc.Vec2;
        ambientTint: boolean;
        diffuseMapTint: boolean;
        specularMapTing: boolean;
        emissiveMapTint: boolean;
        aoMap: pc.Texture;
        aoMapUv: number;
        aoMapChannel: string;
        aoMapVertexColor: boolean;
        aoMapTiling: pc.Vec2;
        aoMapOffset: pc.Vec2;
        occludeSpecular: number;
        occludeSpecularIntensity: number;
        specularAntialias: boolean;
        conserveEnergy: boolean;
        shadingModel: number;
        fresnelModel: number;
        useFog: boolean;
        useLighting: boolean;
        useSkybox: boolean;
        useGammaTonemap: boolean;
        twoSidedLighting: boolean;
    }
}
