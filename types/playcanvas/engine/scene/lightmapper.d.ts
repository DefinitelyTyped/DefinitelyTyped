declare namespace pc {

    /**
     * @name pc.Lightmapper
     * @class The lightmapper is used to bake scene lights into textures.
     */
    class Lightmapper {
        constructor(device: pc.GraphicsDevice, root: pc.Entity, scene: pc.Scene, renderer: any, assets: pc.Asset[])

        /**
         * @function
         * @name pc.Lightmapper#bake
         * @description Generates and applies the lightmaps.
         * @param {pc.Entity} nodes An array of models to render lightmaps for. If not supplied, full scene will be baked.
         * @param {Number} mode Baking mode. Possible values:
         * <ul>
         *     <li>pc.BAKE_COLOR: single color lightmap
         *     <li>pc.BAKE_COLORDIR: single color lightmap + dominant light direction (used for bump/specular)
         * </ul>
         * Only lights with bakeDir=true will be used for generating the dominant light direction.
         */
        bake(nodes: pc.Entity, mode: number): void;
    }
}