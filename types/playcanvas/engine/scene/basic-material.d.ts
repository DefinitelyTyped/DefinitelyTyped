declare namespace pc {

    /**
     * @name pc.BasicMaterial
     * @class A Basic material is for rendering unlit geometry, either using a constant color or a
     * color map modulated with a color.
     * @property {pc.Color} color The flat color of the material (RGBA, where each component is 0 to 1).
     * @property {pc.Texture} colorMap The color map of the material. If specified, the color map is
     * modulated by the color property.
     * @example
     * // Create a new Basic material
     * var material = new pc.BasicMaterial();
     *
     * // Set the material to have a texture map that is multiplied by a red color
     * material.color.set(1, 0, 0);
     * material.colorMap = diffuseMap;
     *
     * // Notify the material that it has been modified
     * material.update();
     *
     * @extends pc.Material
     * @author Will Eastcott
     */
    class BasicMaterial extends pc.Material {

        /**
         * @function
         * @name pc.BasicMaterial#clone
         * @description Duplicates a Basic material. All properties are duplicated except textures
         * where only the references are copied.
         * @returns {pc.BasicMaterial} A cloned Basic material.
         */
        clone(): pc.BasicMaterial;
    }
}
