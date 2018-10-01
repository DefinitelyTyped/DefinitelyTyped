// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   Sets the current alignment for drawing text.
     *   Accepts two arguments: horizAlign (LEFT, CENTER,
     *   or RIGHT) and vertAlign (TOP, BOTTOM, CENTER, or
     *   BASELINE). The horizAlign parameter is in
     *   reference to the x value of the text() function,
     *   while the vertAlign parameter is in reference to
     *   the y value.
     *
     *   So if you write textAlign(LEFT), you are aligning
     *   the left edge of your text to the x value you give
     *   in text(). If you write textAlign(RIGHT, TOP), you
     *   are aligning the right edge of your text to the x
     *   value and the top of edge of the text to the y
     *   value.
     *   @param horizAlign horizontal alignment, either
     *   LEFT, CENTER, or RIGHT
     *   @param [vertAlign] vertical alignment, either TOP,
     *   BOTTOM, CENTER, or BASELINE
     *   @chainable
     */
    textAlign(
      horizAlign: HORIZ_ALIGN,
      vertAlign?: VERT_ALIGN
    ): p5;

    /**
     *   Sets the current alignment for drawing text.
     *   Accepts two arguments: horizAlign (LEFT, CENTER,
     *   or RIGHT) and vertAlign (TOP, BOTTOM, CENTER, or
     *   BASELINE). The horizAlign parameter is in
     *   reference to the x value of the text() function,
     *   while the vertAlign parameter is in reference to
     *   the y value.
     *
     *   So if you write textAlign(LEFT), you are aligning
     *   the left edge of your text to the x value you give
     *   in text(). If you write textAlign(RIGHT, TOP), you
     *   are aligning the right edge of your text to the x
     *   value and the top of edge of the text to the y
     *   value.
     */
    textAlign(): object;

    /**
     *   Sets/gets the spacing, in pixels, between lines of
     *   text. This setting will be used in all subsequent
     *   calls to the text() function.
     *   @param leading the size in pixels for spacing
     *   between lines
     *   @chainable
     */
    textLeading(
      leading: number
    ): p5;

    /**
     *   Sets/gets the spacing, in pixels, between lines of
     *   text. This setting will be used in all subsequent
     *   calls to the text() function.
     */
    textLeading(): number;

    /**
     *   Sets/gets the current font size. This size will be
     *   used in all subsequent calls to the text()
     *   function. Font size is measured in pixels.
     *   @param theSize the size of the letters in units of
     *   pixels
     *   @chainable
     */
    textSize(
      theSize: number
    ): p5;

    /**
     *   Sets/gets the current font size. This size will be
     *   used in all subsequent calls to the text()
     *   function. Font size is measured in pixels.
     */
    textSize(): number;

    /**
     *   Sets/gets the style of the text for system fonts
     *   to NORMAL, ITALIC, or BOLD. Note: this may be is
     *   overridden by CSS styling. For non-system fonts
     *   (opentype, truetype, etc.) please load styled
     *   fonts instead.
     *   @param theStyle styling for text, either NORMAL,
     *   ITALIC, or BOLD
     *   @chainable
     */
    textStyle(
      theStyle: THE_STYLE
    ): p5;

    /**
     *   Sets/gets the style of the text for system fonts
     *   to NORMAL, ITALIC, or BOLD. Note: this may be is
     *   overridden by CSS styling. For non-system fonts
     *   (opentype, truetype, etc.) please load styled
     *   fonts instead.
     */
    textStyle(): string;

    /**
     *   Calculates and returns the width of any character
     *   or text string.
     *   @param theText the String of characters to measure
     */
    textWidth(
      theText: string
    ): number;

    /**
     *   Returns the ascent of the current font at its
     *   current size. The ascent represents the distance,
     *   in pixels, of the tallest character above the
     *   baseline.
     */
    textAscent(): number;

    /**
     *   Returns the descent of the current font at its
     *   current size. The descent represents the distance,
     *   in pixels, of the character with the longest
     *   descender below the baseline.
     */
    textDescent(): number;
  }
}
