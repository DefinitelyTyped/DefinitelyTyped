declare namespace pc {

    interface MorphTargetOptions {
        deltaPositions: number[];
        deltaNormals?: number[];
        deltaTangents?: number[];
        indices?: number[];
        name?: string;
        aabb?: pc.BoundingBox;
    }

    /**
     * @private
     * @name pc.MorphTarget
     * @class A Morph Target (also known as Blend Shape) contains deformation data to apply to existing mesh.
     * Multiple morph targets can be blended together on a mesh. This is useful for effects that are hard to achieve with conventional animation and skinning.
     * @param {Object} options Object for passing optional arguments.
     * @param {Number[]} deltaPositions An array of 3-dimensional vertex position offsets.
     * @param {Number[]} [deltaNormals] An array of 3-dimensional vertex normal offsets.
     * @param {Number[]} [deltaTangents] An array of 4-dimensional vertex normal tangents.
     * @param {Number[]} [options.indices] A morph target doesn't have to contain a full copy of the original mesh with added deformations.
     * Instead, only deformed vertices can be stored. This array contains indices to the original mesh's vertices and must be of the same size
     * as other arrays.
     * @param {String} [name] Name
     * @param {pc.BoundingBox} [aabb] Bounding box. Will be automatically generated, if undefined.
     */
    class MorphTarget {
        constructor(optionsi: MorphTargetOptions);
        deltaPositions: number[];
        deltaNormals: number[];
        deltaTangents: number[];
        indices: number[];
        name: string;
        aabb: pc.BoundingBox;
    }

    /**
     * @private
     * @name pc.Morph
     * @class Contains a list of pc.MorphTarget, a combined AABB and some associated data.
     * @param {pc.MoprhTarget[]} targets A list of morph targets
     */
    class Morph {
        constructor(targets: pc.MorphTarget[]);

        aabb: pc.BoundingBox;

        /**
         * @private
         * @function
         * @name pc.Morph#addTarget
         * @description Adds a new morph target to the list
         * @param {pc.MoprhTarget} target A new morph target
         */
        addTarget(target: pc.MorphTarget): void;

        /**
         * @private
         * @function
         * @name pc.Morph#removeTarget
         * @description Remove the specified morph target from the list
         * @param {pc.MoprhTarget} target A morph target to delete
         */
        removeTarget(target: pc.MorphTarget): void;

        /**
         * @private
         * @function
         * @name pc.Morph#getTarget
         * @description Gets the morph target by index
         * @param {Number} index An index of morph target.
         * @returns {pc.MorphTarget} A morph target object
         */
        getTarget(index: number): pc.MorphTarget;
    }

    /**
     * @private
     * @name pc.MorphInstance
     * @class An instance of pc.Morph. Contains weights to assign to every pc.MorphTarget, holds morphed buffer and associated data.
     * @param {pc.Morph} morph The pc.Morph to instance.
     */
    class MorphInstance {
        constructor(morph: pc.Morph);

        morph: pc.Morph;

        /**
         * @function
         * @name pc.MorphInstance#destroy
         * @description Frees video memory allocated by this object.
         */
        destroy(): void;

        /**
         * @private
         * @function
         * @name pc.MorphInstance#getWeight
         * @description Gets current weight of the specified morph target.
         * @param {Number} index An index of morph target.
         * @returns {Number} Weight
         */
        getWeight(index: number): number;

        /**
         * @private
         * @function
         * @name pc.MorphInstance#setWeight
         * @description Sets weight of the specified morph target.
         * @param {Number} index An index of morph target.
         * @param {Number} weight Weight
         */
        setWeight(index: number, weight: number): void;

        /**
         * @private
         * @function
         * @name pc.MorphInstance#updateBounds
         * @description Calculates AABB for this morph instance. Called automatically by renderer.
         */
        updateBounds(): void;

        /**
         * @private
         * @function
         * @name pc.MorphInstance#update
         * @description Performs morphing. Called automatically by renderer.
         */
        update(mesh: pc.Mesh): void;
    }
}