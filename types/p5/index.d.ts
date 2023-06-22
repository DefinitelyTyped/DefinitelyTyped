// Type definitions for p5 1.6
// Project: https://github.com/processing/p5.js
// Definitions by: p5-types <https://github.com/p5-types>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.9

// This file was auto-generated. Please do not edit it.
/// <reference path="./src/accessibility/describe.d.ts" />
/// <reference path="./src/accessibility/outputs.d.ts" />
/// <reference path="./src/color/creating_reading.d.ts" />
/// <reference path="./src/color/setting.d.ts" />
/// <reference path="./src/core/shape/2d_primitives.d.ts" />
/// <reference path="./src/core/shape/attributes.d.ts" />
/// <reference path="./src/core/shape/curves.d.ts" />
/// <reference path="./src/core/shape/vertex.d.ts" />
/// <reference path="./src/core/constants.d.ts" />
/// <reference path="./src/core/environment.d.ts" />
/// <reference path="./src/core/rendering.d.ts" />
/// <reference path="./src/core/structure.d.ts" />
/// <reference path="./src/core/transform.d.ts" />
/// <reference path="./src/data/local_storage.d.ts" />
/// <reference path="./src/data/p5.TypedDict.d.ts" />
/// <reference path="./src/dom/dom.d.ts" />
/// <reference path="./src/events/acceleration.d.ts" />
/// <reference path="./src/events/keyboard.d.ts" />
/// <reference path="./src/events/mouse.d.ts" />
/// <reference path="./src/events/touch.d.ts" />
/// <reference path="./src/image/image.d.ts" />
/// <reference path="./src/image/loading_displaying.d.ts" />
/// <reference path="./src/image/pixels.d.ts" />
/// <reference path="./src/io/files.d.ts" />
/// <reference path="./src/math/calculation.d.ts" />
/// <reference path="./src/math/math.d.ts" />
/// <reference path="./src/math/noise.d.ts" />
/// <reference path="./src/math/random.d.ts" />
/// <reference path="./src/math/trigonometry.d.ts" />
/// <reference path="./src/typography/attributes.d.ts" />
/// <reference path="./src/typography/loading_displaying.d.ts" />
/// <reference path="./src/utilities/array_functions.d.ts" />
/// <reference path="./src/utilities/conversion.d.ts" />
/// <reference path="./src/utilities/string_functions.d.ts" />
/// <reference path="./src/utilities/time_date.d.ts" />
/// <reference path="./src/webgl/3d_primitives.d.ts" />
/// <reference path="./src/webgl/interaction.d.ts" />
/// <reference path="./src/webgl/light.d.ts" />
/// <reference path="./src/webgl/loading.d.ts" />
/// <reference path="./src/webgl/material.d.ts" />
/// <reference path="./src/webgl/p5.Camera.d.ts" />
/// <reference path="./src/webgl/p5.RendererGL.d.ts" />
/// <reference path="./src/color/p5.Color.d.ts" />
/// <reference path="./src/core/p5.Element.d.ts" />
/// <reference path="./src/core/p5.Graphics.d.ts" />
/// <reference path="./src/image/p5.Image.d.ts" />
/// <reference path="./src/io/p5.Table.d.ts" />
/// <reference path="./src/io/p5.TableRow.d.ts" />
/// <reference path="./src/io/p5.XML.d.ts" />
/// <reference path="./src/math/p5.Vector.d.ts" />
/// <reference path="./src/typography/p5.Font.d.ts" />
/// <reference path="./src/webgl/p5.Geometry.d.ts" />
/// <reference path="./src/webgl/p5.Shader.d.ts" />
/// <reference path="./src/core/p5.Renderer.d.ts" />
/// <reference path="./literals.d.ts" />
/// <reference path="./constants.d.ts" />
export = p5;
declare class p5 {
    /**
     *   This is the p5 instance constructor. A p5 instance
     *   holds all the properties and methods related to a
     *   p5 sketch. It expects an incoming sketch closure
     *   and it can also take an optional node parameter
     *   for attaching the generated p5 canvas to a node.
     *   The sketch closure takes the newly created p5
     *   instance as its sole argument and may optionally
     *   set preload(), setup(), and/or draw() properties
     *   on it for running a sketch.
     *
     *   A p5 sketch can run in "global" or "instance"
     *   mode: "global" - all properties and methods are
     *   attached to the window "instance" - all properties
     *   and methods are bound to this p5 object
     *
     *   @param sketch a closure that can set optional
     *   preload(), setup(), and/or draw() properties on
     *   the given p5 instance
     *   @param [node] element to attach canvas to
     *   @return a p5 instance
     */
    constructor(sketch: (...args: any[]) => any, node?: HTMLElement);

    /**
     *   Called directly before setup(), the preload()
     *   function is used to handle asynchronous loading of
     *   external files in a blocking way. If a preload
     *   function is defined, setup() will wait until any
     *   load calls within have finished. Nothing besides
     *   load calls (loadImage, loadJSON, loadFont,
     *   loadStrings, etc.) should be inside the preload
     *   function. If asynchronous loading is preferred,
     *   the load methods can instead be called in setup()
     *   or anywhere else with the use of a callback
     *   parameter. By default the text "loading..." will
     *   be displayed. To make your own loading page,
     *   include an HTML element with id "p5_loading" in
     *   your page. More information here.
     */
    preload(): void;

    /**
     *   The setup() function is called once when the
     *   program starts. It's used to define initial
     *   environment properties such as screen size and
     *   background color and to load media such as images
     *   and fonts as the program starts. There can only be
     *   one setup() function for each program and it
     *   shouldn't be called again after its initial
     *   execution. Note: Variables declared within setup()
     *   are not accessible within other functions,
     *   including draw().
     */
    setup(): void;

    /**
     *   Called directly after setup(), the draw() function
     *   continuously executes the lines of code contained
     *   inside its block until the program is stopped or
     *   noLoop() is called. Note if noLoop() is called in
     *   setup(), draw() will still be executed once before
     *   stopping. draw() is called automatically and
     *   should never be called explicitly. It should
     *   always be controlled with noLoop(), redraw() and
     *   loop(). After noLoop() stops the code in draw()
     *   from executing, redraw() causes the code inside
     *   draw() to execute once, and loop() will cause the
     *   code inside draw() to resume executing
     *   continuously.
     *
     *   The number of times draw() executes in each second
     *   may be controlled with the frameRate() function.
     *
     *   There can only be one draw() function for each
     *   sketch, and draw() must exist if you want the code
     *   to run continuously, or to process events such as
     *   mousePressed(). Sometimes, you might have an empty
     *   call to draw() in your program, as shown in the
     *   above example.
     *
     *   It is important to note that the drawing
     *   coordinate system will be reset at the beginning
     *   of each draw() call. If any transformations are
     *   performed within draw() (ex: scale, rotate,
     *   translate), their effects will be undone at the
     *   beginning of draw(), so transformations will not
     *   accumulate over time. On the other hand, styling
     *   applied (ex: fill, stroke, etc) will remain in
     *   effect.
     */
    draw(): void;

    /**
     *   Removes the entire p5 sketch. This will remove the
     *   canvas and any elements created by p5.js. It will
     *   also stop the draw loop and unbind any properties
     *   or methods from the window global scope. It will
     *   leave a variable p5 in case you wanted to create a
     *   new p5 sketch. If you like, you can set p5 = null
     *   to erase it. While all functions and variables and
     *   objects created by the p5 library will be removed,
     *   any other global variables created by your code
     *   will remain.
     */
    remove(): void;

    /**
     *   Turn off some features of the friendly error
     *   system (FES), which can give a significant boost
     *   to performance when needed. Note that this will
     *   disable the parts of the FES that cause
     *   performance slowdown (like argument checking).
     *   Friendly errors that have no performance cost
     *   (like giving a descriptive error if a file load
     *   fails, or warning you if you try to override p5.js
     *   functions in the global space), will remain in
     *   place.
     *
     *   See  disabling the friendly error system.
     */
    disableFriendlyErrors: boolean;
}

// tslint:disable-next-line:no-empty-interface
interface p5 extends p5.p5InstanceExtensions {}

declare namespace p5 {
    type UNKNOWN_P5_CONSTANT = any;
    // tslint:disable-next-line:no-empty-interface
    interface p5InstanceExtensions {}
}
