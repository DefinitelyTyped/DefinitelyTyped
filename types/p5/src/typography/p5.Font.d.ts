// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  class Font {
    /**
     *   Returns a tight bounding box for the given text
     *   string using this font (currently only supports
     *   single lines)
     *   @param line a line of text
     *   @param x x-position
     *   @param y y-position
     *   @param [fontSize] font size to use (optional)
     *   @param [options] opentype options (optional)
     *   @return a rectangle object with properties: x, y,
     *   w, h
     */
    textBounds(
      line: string,
      x: number,
      y: number,
      fontSize?: number,
      options?: object
    ): object;

    /**
     *   Computes an array of points following the path for
     *   specified text
     *   @param txt a line of text
     *   @param x x-position
     *   @param y y-position
     *   @param fontSize font size to use (optional)
     *   @param [options] an (optional) object that can
     *   contain:
     *
     *
     *   sampleFactor - the ratio of path-length to number
     *   of samples (default=.25); higher values yield more
     *   points and are therefore more precise
     *
     *
     *   simplifyThreshold - if set to a non-zero value,
     *   collinear points will be be removed from the
     *   polygon; the value represents the threshold angle
     *   to use when determining whether two edges are
     *   collinear
     *   @return an array of points, each with x, y, alpha
     *   (the path angle)
     */
    textToPoints(
      txt: string,
      x: number,
      y: number,
      fontSize: number,
      options?: object
    ): any[];

    /**
     *   Underlying opentype font implementation
     */
    font: any;
  }
}
