// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Stops p5.js from continuously executing the code
         *   within draw(). If loop() is called, the code in
         *   draw() begins to run continuously again. If using
         *   noLoop() in setup(), it should be the last line
         *   inside the block. When noLoop() is used, it's not
         *   possible to manipulate or access the screen inside
         *   event handling functions such as mousePressed() or
         *   keyPressed(). Instead, use those functions to call
         *   redraw() or loop(), which will run draw(), which
         *   can update the screen properly. This means that
         *   when noLoop() has been called, no drawing can
         *   happen, and functions like saveFrames() or
         *   loadPixels() may not be used.
         *
         *   Note that if the sketch is resized, redraw() will
         *   be called to update the sketch, even after
         *   noLoop() has been specified. Otherwise, the sketch
         *   would enter an odd state until loop() was called.
         *
         *   Use isLooping() to check the current state of
         *   loop().
         */
        noLoop(): void;

        /**
         *   By default, p5.js loops through draw()
         *   continuously, executing the code within it.
         *   However, the draw() loop may be stopped by calling
         *   noLoop(). In that case, the draw() loop can be
         *   resumed with loop(). Avoid calling loop() from
         *   inside setup().
         *
         *   Use isLooping() to check the current state of
         *   loop().
         */
        loop(): void;

        /**
         *   By default, p5.js loops through draw()
         *   continuously, executing the code within it. If the
         *   sketch is stopped with noLoop() or resumed with
         *   loop(), isLooping() returns the current state for
         *   use within custom event handlers.
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
         *   demonstration.) push() stores information related
         *   to the current transformation state and style
         *   settings controlled by the following functions:
         *   fill(), noFill(), noStroke(), stroke(), tint(),
         *   noTint(), strokeWeight(), strokeCap(),
         *   strokeJoin(), imageMode(), rectMode(),
         *   ellipseMode(), colorMode(), textAlign(),
         *   textFont(), textSize(), textLeading(),
         *   applyMatrix(), resetMatrix(), rotate(), scale(),
         *   shearX(), shearY(), translate(), noiseSeed().
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
         *   demonstration.) push() stores information related
         *   to the current transformation state and style
         *   settings controlled by the following functions:
         *   fill(), noFill(), noStroke(), stroke(), tint(),
         *   noTint(), strokeWeight(), strokeCap(),
         *   strokeJoin(), imageMode(), rectMode(),
         *   ellipseMode(), colorMode(), textAlign(),
         *   textFont(), textSize(), textLeading(),
         *   applyMatrix(), resetMatrix(), rotate(), scale(),
         *   shearX(), shearY(), translate(), noiseSeed().
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
         *   function allows the program to update the display
         *   window only when necessary, for example when an
         *   event registered by mousePressed() or keyPressed()
         *   occurs. In structuring a program, it only makes
         *   sense to call redraw() within events such as
         *   mousePressed(). This is because redraw() does not
         *   run draw() immediately (it only sets a flag that
         *   indicates an update is needed).
         *
         *   The redraw() function does not work properly when
         *   called inside draw().To enable/disable animations,
         *   use loop() and noLoop().
         *
         *   In addition you can set the number of redraws per
         *   method call. Just add an integer as single
         *   parameter for the number of redraws.
         *   @param [n] Redraw for n-times. The default value
         *   is 1.
         */
        redraw(n?: number): void;

        /**
         *   The p5() constructor enables you to activate
         *   "instance mode" instead of normal "global mode".
         *   This is an advanced topic. A short description and
         *   example is included below. Please see  Dan
         *   Shiffman's Coding Train video tutorial or this
         *   tutorial page for more info. By default, all p5.js
         *   functions are in the global namespace (i.e. bound
         *   to the window object), meaning you can call them
         *   simply ellipse(), fill(), etc. However, this might
         *   be inconvenient if you are mixing with other JS
         *   libraries (synchronously or asynchronously) or
         *   writing long programs of your own. p5.js currently
         *   supports a way around this problem called
         *   "instance mode". In instance mode, all p5
         *   functions are bound up in a single variable
         *   instead of polluting your global namespace.
         *
         *   Optionally, you can specify a default container
         *   for the canvas and any other elements to append to
         *   with a second argument. You can give the ID of an
         *   element in your html, or an html node itself.
         *
         *   Note that creating instances like this also allows
         *   you to have more than one p5 sketch on a single
         *   web page, as they will each be wrapped up with
         *   their own set up variables. Of course, you could
         *   also use iframes to have multiple sketches in
         *   global mode.
         *   @param sketch a function containing a p5.js sketch
         *   @param node ID or pointer to HTML DOM node to
         *   contain sketch in
         */
        p5(sketch: object, node: string | object): void;
    }
}
