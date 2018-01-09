declare namespace pc {

    /**
     * @name pc.Shader
     * @class A shader is a program that is responsible for rendering graphical primitives on a device's
     * graphics processor. The shader is generated from a shader definition. This shader definition specifies
     * the code for processing vertices and fragments processed by the GPU. The language of the code is GLSL
     * (or more specifically ESSL, the OpenGL ES Shading Language). The shader definition also describes how
     * the PlayCanvas engine should map vertex buffer elements onto the attributes specified in the vertex
     * shader code.
     * @description Creates a new shader object.
     * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this shader.
     * @param {Object} definition The shader definition from which to build the shader.
     * @param {Object} definition.attributes Object detailing the mapping of vertex shader attribute names
     * to semantics (pc.SEMANTIC_*). This enables the engine to match vertex buffer data as inputs to the
     * shader.
     * @param {String} definition.vshader Vertex shader source (GLSL code).
     * @param {String} definition.fshader Fragment shader source (GLSL code).
     * @param {Boolean} definition.useTransformFeedback Specifies that this shader outputs post-VS data to a buffer
     * @example
     * // Create a shader that renders primitives with a solid red color
     * var shaderDefinition = {
     *     attributes: {
     *         aPosition: pc.SEMANTIC_POSITION
     *     },
     *     vshader: [
     *         "attribute vec3 aPosition;",
     *         "",
     *         "void main(void)",
     *         "{",
     *         "    gl_Position = vec4(aPosition, 1.0);",
     *         "}"
     *     ].join("\n"),
     *     fshader: [
     *         "precision " + graphicsDevice.precision + " float;",
     *         "",
     *         "void main(void)",
     *         "{",
     *         "    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);",
     *         "}"
     *     ].join("\n")
     * };
     *
     * shader = new pc.Shader(graphicsDevice, shaderDefinition);
     * @author Will Eastcott
     */
    class Shader {
        constructor(graphicsDevice: pc.GraphicsDevice, definition: { 
            attributes: {},
            vshader: string,
            fshader: string,
            useTransformFeedback: boolean
        })

        /**
         * @function
         * @name pc.Shader#destroy
         * @description Frees resources associated with this shader.
         */
        destroy(): void;


    }
}