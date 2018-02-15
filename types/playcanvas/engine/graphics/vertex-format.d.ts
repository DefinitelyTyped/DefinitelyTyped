declare namespace pc {

    /**
     * @name pc.VertexFormat
     * @class A vertex format is a descriptor that defines the layout of vertex data inside
     * a {@link pc.VertexBuffer}.
     * @description Returns a new pc.VertexFormat object.
     * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this vertex format.
     * @param {Object[]} description An array of vertex attribute descriptions.
     * @param {Number} description[].semantic The meaning of the vertex element. This is used to link
     * the vertex data to a shader input. Can be:
     * <ul>
     *     <li>pc.SEMANTIC_POSITION</li>
     *     <li>pc.SEMANTIC_NORMAL</li>
     *     <li>pc.SEMANTIC_TANGENT</li>
     *     <li>pc.SEMANTIC_BLENDWEIGHT</li>
     *     <li>pc.SEMANTIC_BLENDINDICES</li>
     *     <li>pc.SEMANTIC_COLOR</li>
     *     <li>pc.SEMANTIC_TEXCOORD0</li>
     *     <li>pc.SEMANTIC_TEXCOORD1</li>
     *     <li>pc.SEMANTIC_TEXCOORD2</li>
     *     <li>pc.SEMANTIC_TEXCOORD3</li>
     *     <li>pc.SEMANTIC_TEXCOORD4</li>
     *     <li>pc.SEMANTIC_TEXCOORD5</li>
     *     <li>pc.SEMANTIC_TEXCOORD6</li>
     *     <li>pc.SEMANTIC_TEXCOORD7</li>
     * </ul>
     * If vertex data has a meaning other that one of those listed above, use the user-defined
     * semantics: pc.SEMANTIC_ATTR0 to pc.SEMANTIC_ATTR15.
     * @param {Number} description[].components The number of components of the vertex attribute.
     * Can be 1, 2, 3 or 4.
     * @param {Number} description[].type The data type of the attribute. Can be:
     * <ul>
     *     <li>pc.TYPE_INT8</li>
     *     <li>pc.TYPE_UINT8</li>
     *     <li>pc.TYPE_INT16</li>
     *     <li>pc.TYPE_UINT16</li>
     *     <li>pc.TYPE_INT32</li>
     *     <li>pc.TYPE_UINT32</li>
     *     <li>pc.TYPE_FLOAT32</li>
     * </ul>
     * @param {Boolean} description[].normalize If true, vertex attribute data will be mapped from a
     * 0 to 255 range down to 0 to 1 when fed to a shader. If false, vertex attribute data is left
     * unchanged. If this property is unspecified, false is assumed.
     * @example
     * // Specify 3-component positions (x, y, z)
     * var vertexFormat = new pc.VertexFormat(graphicsDevice, [
     *     { semantic: pc.SEMANTIC_POSITION, components: 3, type: pc.TYPE_FLOAT32 },
     * ]);
     * @example
     * // Specify 2-component positions (x, y), a texture coordinate (u, v) and a vertex color (r, g, b, a)
     * var vertexFormat = new pc.VertexFormat(graphicsDevice, [
     *     { semantic: pc.SEMANTIC_POSITION, components: 2, type: pc.TYPE_FLOAT32 },
     *     { semantic: pc.SEMANTIC_TEXCOORD0, components: 2, type: pc.TYPE_FLOAT32 },
     *     { semantic: pc.SEMANTIC_COLOR, components: 4, type: pc.TYPE_UINT8, normalize: true }
     * ]);
     * @author Will Eastcott
     */
    class VertexFormat {
        constructor(graphicsDevice: pc.GraphicsDevice, description: {
            semantic: number,
            components: number,
            type: number,
            normalize: boolean
        }[])
    }
}