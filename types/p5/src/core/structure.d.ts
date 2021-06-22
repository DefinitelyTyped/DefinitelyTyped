// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Stops p5.js from continuously executing the code
         *   within draw(). If loop() is called, the code in
         *   draw() begins to run continuously again. If using
         *   noLoop() in setup(), it should be the last line
         *   inside the block.  When noLoop() is used, it's not
         *   possible to manipulate or access the screen inside
         *   event handling functions such as mousePressed() or
         *   keyPressed(). Instead, use those functions to call
         *   redraw() or loop(), which will run draw(), which
         *   can update the screen properly. This means that
         *   when noLoop() has been called, no drawing can
         *   happen, and functions like saveFrame() or
         *   loadPixels() may not be used.
         *
         *
         *   Note that if the sketch is resized, redraw() will
         *   be called to update the sketch, even after
         *   noLoop() has been specified. Otherwise, the sketch
         *   would enter an odd state until loop() was called.
         */
        noLoop(): void;

        /**
         *   By default, p5.js loops through draw()
         *   continuously, executing the code within it.
         *   However, the draw() loop may be stopped by calling
         *   noLoop(). In that case, the draw() loop can be
         *   resumed with loop(). Avoid calling loop() from
         *   inside setup().
         */
        loop(): void;

        /**
         * By default, p5.js loops through <a href="#/p5/draw">draw()</a> continuously,
         * executing the code within it. If the sketch is stopped with
         * <a href="#/p5/noLoop">noLoop()</a> or resumed with <a href="#/p5/loop">loop()</a>,
         * isLooping() returns the current state for use within custom event handlers.
         *
         */
        isLooping(): boolean;

        /**
         *   The push() function saves the current drawing
         *   style settings and transformations, while pop()
         *   restores these settings. Note that these functions
         *   are always used together. They allow you to change
         *   the style and transformation settings and later
         *   return to what you had. When a new state is
         *   started with push(), it builds on the current
         *   style and transform information. The push() and
         *   pop() functions can be embedded to provide more
         *   control. (See the second example for a
         *   demonstration.)  push() stores information related
         *   to the current transformation state and style
         *   settings controlled by the following functions:
         *   fill(), stroke(), tint(), strokeWeight(),
         *   strokeCap(), strokeJoin(), imageMode(),
         *   rectMode(), ellipseMode(), colorMode(),
         *   textAlign(), textFont(), textSize(),
         *   textLeading().
         *
         *
         *   In WEBGL mode additional style settings are
         *   stored. These are controlled by the following
         *   functions: setCamera(), ambientLight(),
         *   directionalLight(), pointLight(), texture(),
         *   specularMaterial(), shininess(), normalMaterial()
         *   and shader().
         */
        push(): void;

        /**
         *   The push() function saves the current drawing
         *   style settings and transformations, while pop()
         *   restores these settings. Note that these functions
         *   are always used together. They allow you to change
         *   the style and transformation settings and later
         *   return to what you had. When a new state is
         *   started with push(), it builds on the current
         *   style and transform information. The push() and
         *   pop() functions can be embedded to provide more
         *   control. (See the second example for a
         *   demonstration.)  push() stores information related
         *   to the current transformation state and style
         *   settings controlled by the following functions:
         *   fill(), stroke(), tint(), strokeWeight(),
         *   strokeCap(), strokeJoin(), imageMode(),
         *   rectMode(), ellipseMode(), colorMode(),
         *   textAlign(), textFont(), textSize(),
         *   textLeading().
         *
         *
         *   In WEBGL mode additional style settings are
         *   stored. These are controlled by the following
         *   functions: setCamera(), ambientLight(),
         *   directionalLight(), pointLight(), texture(),
         *   specularMaterial(), shininess(), normalMaterial()
         *   and shader().
         */
        pop(): void;

        /**
         *   Executes the code within draw() one time. This
         *   functions allows the program to update the display
         *   window only when necessary, for example when an
         *   event registered by mousePressed() or keyPressed()
         *   occurs.  In structuring a program, it only makes
         *   sense to call redraw() within events such as
         *   mousePressed(). This is because redraw() does not
         *   run draw() immediately (it only sets a flag that
         *   indicates an update is needed).
         *
         *
         *   The redraw() function does not work properly when
         *   called inside draw(). To enable/disable
         *   animations, use loop() and noLoop().
         *
         *
         *   In addition you can set the number of redraws per
         *   method call. Just add an integer as single
         *   parameter for the number of redraws.
         *   @param [n] Redraw for n-times. The default value
         *   is 1.
         */
        redraw(n?: number): void;
    }
}
