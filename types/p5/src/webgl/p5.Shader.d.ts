// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Shader {
        // TODO: Fix p5.Shader() errors in src/webgl/p5.Shader.js, line 11:
        //
        //    param "renderer" has invalid type: p5.RendererGL
        //
        // constructor(renderer: RendererGL, vertSrc: string, fragSrc: string);

        /**
         *   Shaders belong to the main canvas or a
         *   p5.Graphics. Once they are compiled, they can only
         *   be used in the context they were compiled on. Use
         *   this method to make a new copy of a shader that
         *   gets compiled on a different context.
         *   @param context The graphic or instance to copy
         *   this shader to. Pass window if you need to copy to
         *   the main canvas.
         *   @return A new shader on the target context.
         */
        copyToContext(context: Graphics): Shader;

        /**
         *   Used to set the uniforms of a p5.Shader object.
         *   Uniforms are used as a way to provide shader
         *   programs (which run on the GPU) with values from a
         *   sketch (which runs on the CPU).
         *
         *   Here are some examples of uniforms you can make:
         *
         *   - booleans Example: setUniform('x', true) becomes
         *   uniform float x with the value 1.0
         *   - Example: setUniform('x', true) becomes uniform
         *   float x with the value 1.0
         *   - numbers Example: setUniform('x', -2) becomes
         *   uniform float x with the value -2.0
         *   - Example: setUniform('x', -2) becomes uniform
         *   float x with the value -2.0
         *   - arrays of numbers Example: setUniform('x', [0,
         *   0.5, 1]) becomes uniform vec3 x with the value
         *   vec3(0.0, 0.5, 1.0)
         *   - Example: setUniform('x', [0, 0.5, 1]) becomes
         *   uniform vec3 x with the value vec3(0.0, 0.5, 1.0)
         *   - a p5.Image, p5.Graphics, p5.MediaElement, or
         *   p5.Texture Example: setUniform('x', img) becomes
         *   uniform sampler2D x
         *   - Example: setUniform('x', img) becomes uniform
         *   sampler2D x
         *   @param uniformName the name of the uniform. Must
         *   correspond to the name used in the vertex and
         *   fragment shaders
         *   @param data the data to associate with the
         *   uniform. The type can be a boolean (true/false), a
         *   number, an array of numbers, or an image
         *   (p5.Image, p5.Graphics, p5.MediaElement,
         *   p5.Texture)
         *   @chainable
         */
        setUniform(uniformName: string, data: boolean | number | number[] | Image | Graphics | MediaElement): Shader;
    }
}
