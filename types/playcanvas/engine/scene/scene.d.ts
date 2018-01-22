declare namespace pc {
    /**
     * @enum pc.BLEND
     * @name pc.BLEND_SUBTRACTIVE
     * @description Subtract the color of the source fragment from the destination fragment
     * and write the result to the frame buffer.
     */
    const BLEND_SUBTRACTIVE: 0;
    /**
     * @enum pc.BLEND
     * @name pc.BLEND_ADDITIVE
     * @description Add the color of the source fragment to the destination fragment
     * and write the result to the frame buffer.
     */
    const BLEND_ADDITIVE: 1;
    /**
     * @enum pc.BLEND
     * @name pc.BLEND_NORMAL
     * @description Enable simple translucency for materials such as glass. This is
     * equivalent to enabling a source blend mode of pc.BLENDMODE_SRC_ALPHA and a destination
     * blend mode of pc.BLENDMODE_ONE_MINUS_SRC_ALPHA.
     */
    const BLEND_NORMAL: 2;
    /**
     * @enum pc.BLEND
     * @name pc.BLEND_NONE
     * @description Disable blending.
     */
    const BLEND_NONE: 3;
    /**
     * @enum pc.BLEND
     * @name pc.BLEND_PREMULTIPLIED
     * @description Similar to pc.BLEND_NORMAL expect the source fragment is assumed to have
     * already been multiplied by the source alpha value.
     */
    const BLEND_PREMULTIPLIED: 4;
    /**
     * @enum pc.BLEND
     * @name pc.BLEND_MULTIPLICATIVE
     * @description Multiply the color of the source fragment by the color of the destination
     * fragment and write the result to the frame buffer.
     */
    const BLEND_MULTIPLICATIVE: 5;
    /**
     * @enum pc.BLEND
     * @name pc.BLEND_ADDITIVEALPHA
     * @description Same as pc.BLEND_ADDITIVE except the source RGB is multiplied by the source alpha.
     */
    const BLEND_ADDITIVEALPHA: 6;

    /**
     * @enum pc.BLEND
     * @name pc.BLEND_MULTIPLICATIVE2X
     * @description Multiplies colors and doubles the result
     */
    const BLEND_MULTIPLICATIVE2X: 7;

    /**
     * @enum pc.BLEND
     * @name pc.BLEND_SCREEN
     * @description Softer version of additive
     */
    const BLEND_SCREEN: 8;

    /**
     * @enum pc.BLEND
     * @name pc.BLEND_MIN
     * @description Minimum color. Check app.graphicsDevice.extBlendMinmax for support.
     */
    const BLEND_MIN: 9;

    /**
     * @enum pc.BLEND
     * @name pc.BLEND_MAX
     * @description Maximum color. Check app.graphicsDevice.extBlendMinmax for support.
     */
    const BLEND_MAX: 10;

    /**
     * @enum pc.FOG
     * @name pc.FOG_NONE
     * @description No fog is applied to the scene.
     */
    const FOG_NONE: 'none';
    /**
     * @enum pc.FOG
     * @name pc.FOG_LINEAR
     * @description Fog rises linearly from zero to 1 between a start and end depth.
     */
    const FOG_LINEAR: 'linear';
    /**
     * @enum pc.FOG
     * @name pc.FOG_EXP
     * @description Fog rises according to an exponential curve controlled by a density value.
     */
    const FOG_EXP: 'exp';
    /**
     * @enum pc.FOG
     * @name pc.FOG_EXP2
     * @description Fog rises according to an exponential curve controlled by a density value.
     */
    const FOG_EXP2: 'exp2';

    const FRESNEL_NONE: 0;
    const FRESNEL_SCHLICK: 2;

    const LAYER_HUD: 0;
    const LAYER_GIZMO: 1;
    const LAYER_FX: 2;
    // 3 - 14 are custom user layers
    const LAYER_WORLD: 15;

    /**
     * @enum pc.LIGHTTYPE
     * @name pc.LIGHTTYPE_DIRECTIONAL
     * @description Directional (global) light source.
     */
    const LIGHTTYPE_DIRECTIONAL: 0;
    /**
     * @enum pc.LIGHTTYPE
     * @name pc.LIGHTTYPE_POINT
     * @description Point (local) light source.
     */
    const LIGHTTYPE_POINT: 1;
    /**
     * @enum pc.LIGHTTYPE
     * @name pc.LIGHTTYPE_SPOT
     * @description Spot (local) light source.
     */
    const LIGHTTYPE_SPOT: 2;

    const LIGHTFALLOFF_LINEAR: 0;
    const LIGHTFALLOFF_INVERSESQUARED: 1;

    const SHADOW_PCF3: 0;
    const SHADOW_DEPTH: 0; // alias for SHADOW_PCF3 for backwards compatibility
    const SHADOW_VSM8: 1;
    const SHADOW_VSM16: 2;
    const SHADOW_VSM32: 3;
    const SHADOW_PCF5: 4;

    const BLUR_BOX: 0;
    const BLUR_GAUSSIAN: 1;

    const PARTICLESORT_NONE: 0;
    const PARTICLESORT_DISTANCE: 1;
    const PARTICLESORT_NEWER_FIRST: 2;
    const PARTICLESORT_OLDER_FIRST: 3;
    const PARTICLEMODE_GPU: 0;
    const PARTICLEMODE_CPU: 1;
    const EMITTERSHAPE_BOX: 0;
    const EMITTERSHAPE_SPHERE: 1;

    /**
     * @enum pc.PROJECTION
     * @name pc.PROJECTION_PERSPECTIVE
     * @description A perspective camera projection where the frustum shape is essentially pyramidal.
     */
    const PROJECTION_PERSPECTIVE: 0;
    /**
     * @enum pc.PROJECTION
     * @name pc.PROJECTION_ORTHOGRAPHIC
     * @description An orthographic camera projection where the frustum shape is essentially a cuboid.
     */
    const PROJECTION_ORTHOGRAPHIC: 1;

    const RENDERSTYLE_SOLID: 0;
    const RENDERSTYLE_WIREFRAME: 1;
    const RENDERSTYLE_POINTS: 2;

    const CUBEPROJ_NONE: 0;
    const CUBEPROJ_BOX: 1;

    const SPECULAR_PHONG: 0;
    const SPECULAR_BLINN: 1;

    const GAMMA_NONE: 0;
    const GAMMA_SRGB: 1;
    const GAMMA_SRGBFAST: 2; // deprecated
    const GAMMA_SRGBHDR: 3;

    const TONEMAP_LINEAR: 0;
    const TONEMAP_FILMIC: 1;
    const TONEMAP_HEJL: 2;
    const TONEMAP_ACES: 3;
    const TONEMAP_ACES2: 4;

    const SPECOCC_NONE: 0;
    const SPECOCC_AO: 1;
    const SPECOCC_GLOSSDEPENDENT: 2;

    const SHADERDEF_NOSHADOW: 1;
    const SHADERDEF_SKIN: 2;
    const SHADERDEF_UV0: 4;
    const SHADERDEF_UV1: 8;
    const SHADERDEF_VCOLOR: 16;
    const SHADERDEF_INSTANCING: 32;
    const SHADERDEF_LM: 64;
    const SHADERDEF_DIRLM: 128;
    const SHADERDEF_SCREENSPACE: 256;

    const LINEBATCH_WORLD: 0;
    const LINEBATCH_OVERLAY: 1;
    const LINEBATCH_GIZMO: 2;

    const SHADOWUPDATE_NONE: 0;
    const SHADOWUPDATE_THISFRAME: 1;
    const SHADOWUPDATE_REALTIME: 2;

    const SORTKEY_FORWARD: 0;
    const SORTKEY_DEPTH: 1;

    const SHADER_FORWARD: 0;
    const SHADER_FORWARDHDR: 1;
    const SHADER_DEPTH: 2;
    const SHADER_SHADOW: 3; // PCF3
    // 4: VSM8,
    // 5: VSM16,
    // 6: VSM32,
    // 7: PCF5,
    // 8: PCF3 POINT
    // 9: VSM8 POINT,
    // 10: VSM16 POINT,
    // 11: VSM32 POINT,
    // 12: PCF5 POINT
    // 13: PCF3 SPOT
    // 14: VSM8 SPOT,
    // 15: VSM16 SPOT,
    // 16: VSM32 SPOT,
    // 17: PCF5 SPOT
    const SHADER_PICK: 18;

    const BAKE_COLOR: 0;
    const BAKE_COLORDIR: 1;

    const VIEW_CENTER: 0;
    const VIEW_LEFT: 1;
    const VIEW_RIGHT: 2

    /**
     * @name pc.Scene
     * @class A scene is graphical representation of an environment. It manages the scene hierarchy, all
     * graphical objects, lights, and scene-wide properties.
     * @description Creates a new Scene.
     * @property {pc.Color} ambientLight The color of the scene's ambient light. Defaults to black (0, 0, 0).
     * @property {String} fog The type of fog used by the scene. Can be:
     * <ul>
     *     <li>pc.FOG_NONE</li>
     *     <li>pc.FOG_LINEAR</li>
     *     <li>pc.FOG_EXP</li>
     *     <li>pc.FOG_EXP2</li>
     * </ul>
     * Defaults to pc.FOG_NONE.
     * @property {pc.Color} fogColor The color of the fog (if enabled). Defaults to black (0, 0, 0).
     * @property {Number} fogDensity The density of the fog (if enabled). This property is only valid if the
     * fog property is set to pc.FOG_EXP or pc.FOG_EXP2. Defaults to 0.
     * @property {Number} fogEnd The distance from the viewpoint where linear fog reaches its maximum. This
     * property is only valid if the fog property is set to pc.FOG_LINEAR. Defaults to 1000.
     * @property {Number} fogStart The distance from the viewpoint where linear fog begins. This property is
     * only valid if the fog property is set to pc.FOG_LINEAR. Defaults to 1.
     * @property {Number} gammaCorrection The gamma correction to apply when rendering the scene. Can be:
     * <ul>
     *     <li>pc.GAMMA_NONE</li>
     *     <li>pc.GAMMA_SRGB</li>
     * </ul>
     * Defaults to pc.GAMMA_NONE.
     * @property {Number} toneMapping The tonemapping transform to apply when writing fragments to the
     * frame buffer. Can be:
     * <ul>
     *     <li>pc.TONEMAP_LINEAR</li>
     *     <li>pc.TONEMAP_FILMIC</li>
     *     <li>pc.TONEMAP_HEJL</li>
     *     <li>pc.TONEMAP_ACES</li>
     * </ul>
     * Defaults to pc.TONEMAP_LINEAR.
     * @property {pc.Texture} skybox A cube map texture used as the scene's skybox. Defaults to null.
     * @property {Number} skyboxIntensity Multiplier for skybox intensity. Defaults to 1.
     * @property {Number} skyboxMip The mip level of the skybox to be displayed. Only valid for prefiltered
     * cubemap skyboxes. Defaults to 0 (base level).
     * @property {Number} lightmapSizeMultiplier The lightmap resolution multiplier. Defaults to 1.
     * @property {Number} lightmapMaxResolution The maximum lightmap resolution. Defaults to 2048.
     * @property {Number} lightmapMode The lightmap baking mode. Can be:
     * <ul>
     *     <li>pc.BAKE_COLOR: single color lightmap
     *     <li>pc.BAKE_COLORDIR: single color lightmap + dominant light direction (used for bump/specular)
     * </ul>
     * Only lights with bakeDir=true will be used for generating the dominant light direction. Defaults to
     * pc.BAKE_COLORDIR.
     */
    class Scene {
        ambientLight: pc.Color;
        fog: string;
        fogColor: pc.Color;
        fogDensity: number;
        fogEnd: number;
        fogStart: number;
        gammaCorrection: number;
        lightmapMaxResolution: number;
        lightmapMode: number;
        lightmapSizeMultiplier: number;
        skybox: pc.Texture;
        skyboxIntensity: number;
        skyboxMip: number;
        toneMapping: number;

        /**
         * @function
         * @name pc.Scene#addModel
         * @description Adds the specified model to the scene.
         * @author Will Eastcott
         */
        addModel(model: pc.Model): void;

        /**
         * @function
         * @name pc.Scene#removeModel
         * @description Removes the specified model from the scene.
         * @author Will Eastcott
         */
        removeModel(model: pc.Model): void;

        /**
         * @function
         * @name pc.Scene#update
         * @description Synchronizes the graph node hierarchy of every model in the scene.
         * @author Will Eastcott
         */
        update(): void;
    }
}