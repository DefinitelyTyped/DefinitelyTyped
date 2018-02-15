declare namespace pc {

    /**
     * @name pc.Mesh
     * @class A graphical primitive. The mesh is defined by a {@link pc.VertexBuffer} and an optional
     * {@link pc.IndexBuffer}. It also contains a primitive definition which controls the type of the
     * primitive and the portion of the vertex or index buffer to use.
     * @description Create a new mesh.
     * @property {pc.VertexBuffer} vertexBuffer The vertex buffer holding the vertex data of the mesh.
     * @property {pc.IndexBuffer[]} indexBuffer An array of index buffers. For unindexed meshes, this array can
     * be empty. The first index buffer in the array is used by {@link pc.MeshInstance}s with a renderStyle
     * property set to pc.RENDERSTYLE_SOLID. The second index buffer in the array is used if renderStyle is
     * set to pc.RENDERSTYLE_WIREFRAME.
     * @property {Object[]} primitive Array of primitive objects defining how vertex (and index) data in the
     * mesh should be interpreted by the graphics device. For details on the primitive object, see
     * {@link pc.GraphicsDevice#draw}. The primitive is ordered based on render style like the indexBuffer property.
     * @property {pc.BoundingBox} aabb The axis-aligned bounding box for the object space vertices of this mesh.
     */
    class Mesh {
        vertexBuffer: pc.VertexBuffer;
        indexBuffer: pc.IndexBuffer;
        primitive: {}[];
        aabb: pc.BoundingBox;
    }

    /**
     * @name pc.MeshInstance
     * @class An instance of a {@link pc.Mesh}. A single mesh can be referenced by many
     * mesh instances that can have different transforms and materials.
     * @description Create a new mesh instance.
     * @param {pc.GraphNode} node The graph node defining the transform for this instance.
     * @param {pc.Mesh} mesh The graphics mesh being instanced.
     * @param {pc.Material} material The material used to render this instance.
     * @example
     * // Create a mesh instance pointing to a 1x1x1 'cube' mesh
     * var mesh = pc.createBox(graphicsDevice);
     * var material = new pc.StandardMaterial();
     * var node = new pc.GraphNode();
     * var meshInstance = new pc.MeshInstance(node, mesh, material);
     * @property {pc.BoundingBox} aabb The world space axis-aligned bounding box for this
     * mesh instance.
     * @property {Boolean} castShadow Controls whether the mesh instance casts shadows.
     * Defaults to false.
     * @property {Boolean} visible Enable rendering for this mesh instance. Use visible property to enable/disable rendering without overhead of removing from scene.
     * But note that the mesh instance is still in the hierarchy and still in the draw call list.
     * @property {Number} layer The layer used by this mesh instance. Layers define drawing order. Can be:
     * <ul>
     *     <li>pc.LAYER_WORLD or 15</li>
     *     <li>pc.LAYER_FX or 2</li>
     *     <li>pc.LAYER_GIZMO or 1</li>
     *     <li>pc.LAYER_HUD or 0</li>
     *     <li>Any number between 3 and 14 can be used as a custom layer.</li>
     * </ul>
     * Defaults to pc.LAYER_WORLD.
     * @property {pc.Material} material The material used by this mesh instance.
     * @property {Number} renderStyle The render style of the mesh instance. Can be:
     * <ul>
     *     <li>pc.RENDERSTYLE_SOLID</li>
     *     <li>pc.RENDERSTYLE_WIREFRAME</li>
     *     <li>pc.RENDERSTYLE_POINTS</li>
     * </ul>
     * Defaults to pc.RENDERSTYLE_SOLID.
     * @property {Boolean} cull Controls whether the mesh instance can be culled with frustum culling
     */
    class MeshInstance {
        constructor(node: pc.GraphNode, mesh: pc.Mesh, material: pc.Material)

        aabb: pc.BoundingBox;
        castShadow: boolean;
        visible: boolean;
        layer: number;
        material: pc.Material;
        renderStyle: number;
        cull: boolean;

        /**
         * @name pc.MeshInstance#mask
         * @type Number
         * @description Mask controlling which {@link pc.LightComponent}s light this mesh instance.
         * To ignore all dynamic lights, set mask to 0. Defaults to 1.
         */
        mask: number;


    }
}