// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   The print() function writes to the console area of
     *   your browser. This function is often helpful for
     *   looking at the data a program is producing. This
     *   function creates a new line of text for each call
     *   to the function. Individual elements can be
     *   separated with quotes ("") and joined with the
     *   addition operator (+). Note that calling print()
     *   without any arguments invokes the window.print()
     *   function which opens the browser's print dialog.
     *   To print a blank line to console you can write
     *   print('\n').
     *   @param contents any combination of Number, String,
     *   Object, Boolean, Array to print
     */
    print(
      contents: any
    ): void;

    /**
     *   Sets the cursor to a predefined symbol or an
     *   image, or makes it visible if already hidden. If
     *   you are trying to set an image as the cursor, the
     *   recommended size is 16x16 or 32x32 pixels. The
     *   values for parameters x and y must be less than
     *   the dimensions of the image.
     *   @param type either ARROW, CROSS, HAND, MOVE, TEXT,
     *   or WAIT, or path for image
     *   @param [x] the horizontal active spot of the
     *   cursor
     *   @param [y] the vertical active spot of the cursor
     */
    cursor(
      type:
        | string
        | CURSOR_TYPE,
      x?: number,
      y?: number
    ): void;

    /**
     *   Specifies the number of frames to be displayed
     *   every second. For example, the function call
     *   frameRate(30) will attempt to refresh 30 times a
     *   second. If the processor is not fast enough to
     *   maintain the specified rate, the frame rate will
     *   not be achieved. Setting the frame rate within
     *   setup() is recommended. The default frame rate is
     *   based on the frame rate of the display (here also
     *   called "refresh rate"), which is set to 60 frames
     *   per second on most computers. A frame rate of 24
     *   frames per second (usual for movies) or above will
     *   be enough for smooth animations This is the same
     *   as setFrameRate(val).  Calling frameRate() with no
     *   arguments returns the current framerate. The draw
     *   function must run at least once before it will
     *   return a value. This is the same as
     *   getFrameRate().
     *
     *
     *   Calling frameRate() with arguments that are not of
     *   the type numbers or are non positive also returns
     *   current framerate.
     *   @param fps number of frames to be displayed every
     *   second
     *   @chainable
     */
    frameRate(
      fps: number
    ): p5;

    /**
     *   Specifies the number of frames to be displayed
     *   every second. For example, the function call
     *   frameRate(30) will attempt to refresh 30 times a
     *   second. If the processor is not fast enough to
     *   maintain the specified rate, the frame rate will
     *   not be achieved. Setting the frame rate within
     *   setup() is recommended. The default frame rate is
     *   based on the frame rate of the display (here also
     *   called "refresh rate"), which is set to 60 frames
     *   per second on most computers. A frame rate of 24
     *   frames per second (usual for movies) or above will
     *   be enough for smooth animations This is the same
     *   as setFrameRate(val).  Calling frameRate() with no
     *   arguments returns the current framerate. The draw
     *   function must run at least once before it will
     *   return a value. This is the same as
     *   getFrameRate().
     *
     *
     *   Calling frameRate() with arguments that are not of
     *   the type numbers or are non positive also returns
     *   current framerate.
     *   @return current frameRate
     */
    frameRate(): number;

    /**
     *   Hides the cursor from view.
     */
    noCursor(): void;

    /**
     *   The windowResized() function is called once every
     *   time the browser window is resized. This is a good
     *   place to resize the canvas or do any other
     *   adjustments to accommodate the new window size.
     */
    windowResized(): void;

    /**
     *   If argument is given, sets the sketch to
     *   fullscreen or not based on the value of the
     *   argument. If no argument is given, returns the
     *   current fullscreen state. Note that due to browser
     *   restrictions this can only be called on user
     *   input, for example, on mouse press like the
     *   example below.
     *   @param [val] whether the sketch should be in
     *   fullscreen mode or not
     *   @return current fullscreen state
     */
    fullscreen(
      val?: boolean
    ): boolean;

    /**
     *   Sets the pixel scaling for high pixel density
     *   displays. By default pixel density is set to match
     *   display density, call pixelDensity(1) to turn this
     *   off. Calling pixelDensity() with no arguments
     *   returns the current pixel density of the sketch.
     *   @param val whether or how much the sketch should
     *   scale
     *   @chainable
     */
    pixelDensity(
      val: number
    ): p5;

    /**
     *   Sets the pixel scaling for high pixel density
     *   displays. By default pixel density is set to match
     *   display density, call pixelDensity(1) to turn this
     *   off. Calling pixelDensity() with no arguments
     *   returns the current pixel density of the sketch.
     *   @return current pixel density of the sketch
     */
    pixelDensity(): number;

    /**
     *   Returns the pixel density of the current display
     *   the sketch is running on.
     *   @return current pixel density of the display
     */
    displayDensity(): number;

    /**
     *   Gets the current URL.
     *   @return url
     */
    getURL(): string;

    /**
     *   Gets the current URL path as an array.
     *   @return path components
     */
    getURLPath(): string[];

    /**
     *   Gets the current URL params as an Object.
     *   @return URL params
     */
    getURLParams(): object;

    /**
     *   The system variable frameCount contains the number
     *   of frames that have been displayed since the
     *   program started. Inside setup() the value is 0,
     *   after the first iteration of draw it is 1, etc.
     */
    frameCount: number;

    /**
     *   Confirms if the window a p5.js program is in is
     *   "focused," meaning that the sketch will accept
     *   mouse or keyboard input. This variable is "true"
     *   if the window is focused and "false" if not.
     */
    focused: boolean;

    /**
     *   System variable that stores the width of the
     *   screen display according to The default
     *   pixelDensity. This is used to run a full-screen
     *   program on any display size. To return actual
     *   screen size, multiply this by pixelDensity.
     */
    displayWidth: number;

    /**
     *   System variable that stores the height of the
     *   screen display according to The default
     *   pixelDensity. This is used to run a full-screen
     *   program on any display size. To return actual
     *   screen size, multiply this by pixelDensity.
     */
    displayHeight: number;

    /**
     *   System variable that stores the width of the inner
     *   window, it maps to window.innerWidth.
     */
    windowWidth: number;

    /**
     *   System variable that stores the height of the
     *   inner window, it maps to window.innerHeight.
     */
    windowHeight: number;

    /**
     *   System variable that stores the width of the
     *   drawing canvas. This value is set by the first
     *   parameter of the createCanvas() function. For
     *   example, the function call createCanvas(320, 240)
     *   sets the width variable to the value 320. The
     *   value of width defaults to 100 if createCanvas()
     *   is not used in a program.
     */
    width: number;

    /**
     *   System variable that stores the height of the
     *   drawing canvas. This value is set by the second
     *   parameter of the createCanvas() function. For
     *   example, the function call createCanvas(320, 240)
     *   sets the height variable to the value 240. The
     *   value of height defaults to 100 if createCanvas()
     *   is not used in a program.
     */
    height: number;
  }
}
