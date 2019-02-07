// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   Creates a new p5.Image (the datatype for storing
     *   images). This provides a fresh buffer of pixels to
     *   play with. Set the size of the buffer with the
     *   width and height parameters.  .pixels gives access
     *   to an array containing the values for all the
     *   pixels in the display window. These values are
     *   numbers. This array is the size (including an
     *   appropriate factor for the pixelDensity) of the
     *   display window x4, representing the R, G, B, A
     *   values in order for each pixel, moving from left
     *   to right across each row, then down each column.
     *   See .pixels for more info. It may also be simpler
     *   to use set() or get().
     *
     *
     *   Before accessing the pixels of an image, the data
     *   must loaded with the loadPixels() function. After
     *   the array data has been modified, the
     *   updatePixels() function must be run to update the
     *   changes.
     *   @param width width in pixels
     *   @param height height in pixels
     *   @return the p5.Image object
     */
    createImage(
      width: number,
      height: number
    ): Image;

    /**
     *   Save the current canvas as an image. The browser
     *   will either save the file immediately, or prompt
     *   the user with a dialogue window.
     *   @param selectedCanvas a variable representing a
     *   specific html5 canvas (optional)
     *   @param [extension] 'jpg' or 'png'
     */
    saveCanvas(
      selectedCanvas:
        | Element
        | HTMLCanvasElement,
      filename?: string,
      extension?: string
    ): void;

    /**
     *   Save the current canvas as an image. The browser
     *   will either save the file immediately, or prompt
     *   the user with a dialogue window.
     *   @param [extension] 'jpg' or 'png'
     */
    saveCanvas(
      filename?: string,
      extension?: string
    ): void;

    /**
     *   Capture a sequence of frames that can be used to
     *   create a movie. Accepts a callback. For example,
     *   you may wish to send the frames to a server where
     *   they can be stored or converted into a movie. If
     *   no callback is provided, the browser will pop up
     *   save dialogues in an attempt to download all of
     *   the images that have just been created. With the
     *   callback provided the image data isn't saved by
     *   default but instead passed as an argument to the
     *   callback function as an array of objects, with the
     *   size of array equal to the total number of frames.
     *   Note that saveFrames() will only save the first 15
     *   frames of an animation. To export longer
     *   animations, you might look into a library like
     *   ccapture.js.
     *   @param extension 'jpg' or 'png'
     *   @param duration Duration in seconds to save the
     *   frames for.
     *   @param framerate Framerate to save the frames in.
     *   @param [callback] A callback function that will be
     *   executed to handle the image data. This function
     *   should accept an array as argument. The array will
     *   contain the specified number of frames of objects.
     *   Each object has three properties: imageData - an
     *   image/octet-stream, filename and extension.
     */
    saveFrames(
      filename: string,
      extension: string,
      duration: number,
      framerate: number,
      callback?: (
        p1: any[]
      ) => any
    ): void;
  }
}
