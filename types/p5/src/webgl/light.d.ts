// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   Creates an ambient light with a color
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param [alpha] the alpha value
     *   @chainable
     */
    ambientLight(
      v1: number,
      v2: number,
      v3: number,
      alpha?: number
    ): p5;

    /**
     *   Creates an ambient light with a color
     *   @param value a color string
     *   @chainable
     */
    ambientLight(
      value: string
    ): p5;

    /**
     *   Creates an ambient light with a color
     *   @param gray a gray value
     *   @param [alpha] the alpha value
     *   @chainable
     */
    ambientLight(
      gray: number,
      alpha?: number
    ): p5;

    /**
     *   Creates an ambient light with a color
     *   @param values an array containing the
     *   red,green,blue & and alpha components of the color
     *   @chainable
     */
    ambientLight(
      values: number[]
    ): p5;

    /**
     *   Creates an ambient light with a color
     *   @param color the ambient light color
     *   @chainable
     */
    ambientLight(
      color: Color
    ): p5;

    /**
     *   Creates a directional light with a color and a
     *   direction
     *   @param v1 red or hue value (depending on the
     *   current color mode),
     *   @param v2 green or saturation value
     *   @param v3 blue or brightness value
     *   @param position the direction of the light
     *   @chainable
     */
    directionalLight(
      v1: number,
      v2: number,
      v3: number,
      position: Vector
    ): p5;

    /**
     *   Creates a directional light with a color and a
     *   direction
     *   @param color color Array, CSS color string, or
     *   p5.Color value
     *   @param x x axis direction
     *   @param y y axis direction
     *   @param z z axis direction
     *   @chainable
     */
    directionalLight(
      color:
        | number[]
        | string
        | Color,
      x: number,
      y: number,
      z: number
    ): p5;

    /**
     *   Creates a directional light with a color and a
     *   direction
     *   @param color color Array, CSS color string, or
     *   p5.Color value
     *   @param position the direction of the light
     *   @chainable
     */
    directionalLight(
      color:
        | number[]
        | string
        | Color,
      position: Vector
    ): p5;

    /**
     *   Creates a directional light with a color and a
     *   direction
     *   @param v1 red or hue value (depending on the
     *   current color mode),
     *   @param v2 green or saturation value
     *   @param v3 blue or brightness value
     *   @param x x axis direction
     *   @param y y axis direction
     *   @param z z axis direction
     *   @chainable
     */
    directionalLight(
      v1: number,
      v2: number,
      v3: number,
      x: number,
      y: number,
      z: number
    ): p5;

    /**
     *   Creates a point light with a color and a light
     *   position
     *   @param v1 red or hue value (depending on the
     *   current color mode),
     *   @param v2 green or saturation value
     *   @param v3 blue or brightness value
     *   @param x x axis position
     *   @param y y axis position
     *   @param z z axis position
     *   @chainable
     */
    pointLight(
      v1: number,
      v2: number,
      v3: number,
      x: number,
      y: number,
      z: number
    ): p5;

    /**
     *   Creates a point light with a color and a light
     *   position
     *   @param v1 red or hue value (depending on the
     *   current color mode),
     *   @param v2 green or saturation value
     *   @param v3 blue or brightness value
     *   @param position the position of the light
     *   @chainable
     */
    pointLight(
      v1: number,
      v2: number,
      v3: number,
      position: Vector
    ): p5;

    /**
     *   Creates a point light with a color and a light
     *   position
     *   @param color color Array, CSS color string, or
     *   p5.Color value
     *   @param x x axis position
     *   @param y y axis position
     *   @param z z axis position
     *   @chainable
     */
    pointLight(
      color:
        | number[]
        | string
        | Color,
      x: number,
      y: number,
      z: number
    ): p5;

    /**
     *   Creates a point light with a color and a light
     *   position
     *   @param color color Array, CSS color string, or
     *   p5.Color value
     *   @param position the position of the light
     *   @chainable
     */
    pointLight(
      color:
        | number[]
        | string
        | Color,
      position: Vector
    ): p5;
  }
}
