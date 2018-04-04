declare namespace pc {

    /**
     * @name pc.Skin
     * @class A skin contains data about the bones in a hierarchy that drive a skinned mesh animation.
     * Specifically, the skin stores the bone name and inverse bind matrix and for each bone.
     * Inverse bind matrices are instrumental in the mathematics of vertex skinning.
     * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this skin.
     * @param {pc.Mat4[]} ibp The array of inverse bind matrices.
     * @param {String[]} boneNames The array of bone names for the bones referenced by this skin.
     * @author Will Eastcott
     */
    class Skin {
        constructor(graphicsDevice: pc.GraphicsDevice, ibp: pc.Mat4[], boneNames: string[])
    }

    /**
     * @name pc.SkinInstance
     * @class A skin instance is responsible for generating the matrix palette that is used to
     * skin vertices from object space to world space.
     * @param {pc.Skin} skin The skin that will provide the inverse bind pose matrices to
     * generate the final matrix palette.
     * @author Will Eastcott
     */
    class SkinInstance {
        constructor(skin: pc.Skin, node: pc.GraphNode)
    }
}
