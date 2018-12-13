// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   Loads a custom shader from the provided vertex and
     *   fragment shader paths. The shader files are loaded
     *   asynchronously in the background, so this method
     *   should be used in preload(). For now, there are
     *   three main types of shaders. p5 will automatically
     *   supply appropriate vertices, normals, colors, and
     *   lighting attributes if the parameters defined in
     *   the shader match the names.
     *   @param [vertFilename] path to file containing
     *   vertex shader source code
     *   @param [fragFilename] path to file containing
     *   fragment shader source code
     *   @return a shader object created from the provided
     *   vertex and fragment shader files.
     */
    loadShader(
      vertFilename?: string,
      fragFilename?: string
    ): Shader;
    createShader(
      vertSrc: string,
      fragSrc: string
    ): Shader;

    /**
     *   The shader() function lets the user provide a
     *   custom shader to fill in shapes in WEBGL mode.
     *   Users can create their own shaders by loading
     *   vertex and fragment shaders with loadShader().
     *   @param [s] the desired p5.Shader to use for
     *   rendering shapes.
     *   @chainable
     */
    shader(
      s?: Shader
    ): p5;

    /**
     *   Normal material for geometry. You can view all
     *   possible materials in this example.
     *   @chainable
     */
    normalMaterial(): p5;

    /**
     *   Texture for geometry. You can view other possible
     *   materials in this example.
     *   @param tex 2-dimensional graphics to render as
     *   texture
     *   @chainable
     */
    texture(
      tex:
        | Image
        | MediaElement
        | Graphics
    ): p5;

    /**
     *   Ambient material for geometry with a given color.
     *   You can view all possible materials in this
     *   example.
     *   @param v1 gray value, red or hue value (depending
     *   on the current color mode),
     *   @param [v2] green or saturation value
     *   @param [v3] blue or brightness value
     *   @param [a] opacity
     *   @chainable
     */
    ambientMaterial(
      v1: number,
      v2?: number,
      v3?: number,
      a?: number
    ): p5;

    /**
     *   Ambient material for geometry with a given color.
     *   You can view all possible materials in this
     *   example.
     *   @param color color, color Array, or CSS color
     *   string
     *   @chainable
     */
    ambientMaterial(
      color:
        | number[]
        | string
        | Color
    ): p5;

    /**
     *   Specular material for geometry with a given color.
     *   You can view all possible materials in this
     *   example.
     *   @param v1 gray value, red or hue value (depending
     *   on the current color mode),
     *   @param [v2] green or saturation value
     *   @param [v3] blue or brightness value
     *   @param [a] opacity
     *   @chainable
     */
    specularMaterial(
      v1: number,
      v2?: number,
      v3?: number,
      a?: number
    ): p5;

    /**
     *   Specular material for geometry with a given color.
     *   You can view all possible materials in this
     *   example.
     *   @param color color Array, or CSS color string
     *   @chainable
     */
    specularMaterial(
      color:
        | number[]
        | string
        | Color
    ): p5;
  }
}
