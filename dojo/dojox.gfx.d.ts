// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dojo.d.ts" />
declare module dojox {
    
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.html
     *
     * 
     */
    interface gfx {
        /**
         * This module contains the core graphics Arc functions.
         * 
         */
        arc: Object;
        /**
         * 
         */
        bezierutils: Object;
        /**
         * This the graphics rendering bridge for W3C Canvas compliant browsers.
         * Since Canvas is an immediate mode graphics api, with no object graph or
         * eventing capabilities, use of this module alone will only add in drawing support.
         * The additional module, canvasWithEvents extends this module with additional support
         * for handling events on Canvas.  By default, the support for events is now included
         * however, if only drawing capabilities are needed, canvas event module can be disabled
         * using the dojoConfig option, canvasEvents:true|false.
         * The id of the Canvas renderer is 'canvas'.  This id can be used when switch Dojo's
         * graphics context between renderer implementations.  See dojox/gfx/_base.switchRenderer
         * API.
         * 
         */
        canvas: Object;
        /**
         * 
         */
        canvas_attach: Object;
        /**
         * 
         */
        canvasext: Object;
        /**
         * This the graphics rendering bridge for W3C Canvas compliant browsers which extends
         * the basic canvas drawing renderer bridge to add additional support for graphics events
         * on Shapes.
         * Since Canvas is an immediate mode graphics api, with no object graph or
         * eventing capabilities, use of the canvas module alone will only add in drawing support.
         * This additional module, canvasWithEvents extends this module with additional support
         * for handling events on Canvas.  By default, the support for events is now included
         * however, if only drawing capabilities are needed, canvas event module can be disabled
         * using the dojoConfig option, canvasEvents:true|false.
         * 
         */
        canvasWithEvents: Object;
        /**
         * points per centimeter (constant)
         * 
         */
        cm_in_pt: number;
        /**
         * An object defining the default Circle prototype.
         * 
         */
        defaultCircle: Object;
        /**
         * Defines the default Ellipse prototype.
         * 
         */
        defaultEllipse: Object;
        /**
         * An object specifying the default properties for a Font used in text operations.
         * 
         */
        defaultFont: Object;
        /**
         * Defines the default Image prototype.
         * 
         */
        defaultImage: Object;
        /**
         * An object defining the default Line prototype.
         * 
         */
        defaultLine: Object;
        /**
         * An object defining the default stylistic properties used for Linear Gradient fills.
         * Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.
         * 
         */
        defaultLinearGradient: Object;
        /**
         * Defines the default Path prototype object.
         * 
         */
        defaultPath: Object;
        /**
         * An object specifying the default properties for a Pattern using in fill operations.
         * 
         */
        defaultPattern: Object;
        /**
         * Defines the default PolyLine prototype.
         * 
         */
        defaultPolyline: Object;
        /**
         * An object specifying the default properties for RadialGradients using in fills patterns.
         * 
         */
        defaultRadialGradient: Object;
        /**
         * Defines the default Rect prototype.
         * 
         */
        defaultRect: Object;
        /**
         * A stroke defines stylistic properties that are used when drawing a path.
         * This object defines the default Stroke prototype.
         * 
         */
        defaultStroke: Object;
        /**
         * Defines the default Text prototype.
         * 
         */
        defaultText: Object;
        /**
         * Defines the default TextPath prototype.
         * 
         */
        defaultTextPath: Object;
        /**
         * 
         */
        defaultVectorFont: Object;
        /**
         * 
         */
        defaultVectorText: Object;
        /**
         * Defines how to fill a shape. Four types of fills can be used: solid, linear gradient, radial gradient and pattern.
         * See dojox/gfx.LinearGradient, dojox/gfx.RadialGradient and dojox/gfx.Pattern respectively for more information about the properties supported by each type.
         * 
         */
        Fill: Object;
        /**
         * An object specifying the properties for a Font used in text operations.
         * 
         */
        Font: Object;
        /**
         * 
         */
        fx: Object;
        /**
         * 
         */
        getDefault: Object;
        /**
         * 
         */
        gradient: Object;
        /**
         * 
         */
        gradutils: Object;
        /**
         * An object defining the default stylistic properties used for Linear Gradient fills.
         * Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.
         * 
         */
        LinearGradient: Object;
        /**
         * 
         */
        matrix: Object;
        /**
         * points per millimeter (constant)
         * 
         */
        mm_in_pt: number;
        /**
         * 
         */
        move: Object;
        /**
         * This module contains the core graphics Path API.
         * Path command format follows the W3C SVG 1.0 Path api.
         * 
         */
        path: Object;
        /**
         * 
         */
        pathSvgRegExp: RegExp;
        /**
         * a constant regular expression used to split a SVG/VML path into primitive components
         * 
         */
        pathVmlRegExp: RegExp;
        /**
         * An object specifying the default properties for a Pattern using in fill operations.
         * 
         */
        Pattern: Object;
        /**
         * Specifies the properties for RadialGradients using in fills patterns.
         * 
         */
        RadialGradient: Object;
        /**
         * Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the renderer
         * object to switch to.
         * 
         */
        renderer: string;
        /**
         * This module contains the core graphics Shape API.
         * Different graphics renderer implementation modules (svg, canvas, vml, silverlight, etc.) extend this
         * basic api to provide renderer-specific implementations for each shape.
         * 
         */
        shape: Object;
        /**
         * This the graphics rendering bridge for the Microsoft Silverlight plugin.
         * Silverlight is a faster implementation on IE6-8 than the default 2d graphics, VML
         * 
         */
        silverlight: Object;
        /**
         * 
         */
        silverlight_attach: Object;
        /**
         * A stroke defines stylistic properties that are used when drawing a path.
         * 
         */
        Stroke: Object;
        /**
         * This the graphics rendering bridge for browsers compliant with W3C SVG1.0.
         * This is the preferred renderer to use for interactive and accessible graphics.
         * 
         */
        svg: Object;
        /**
         * 
         */
        svgext: Object;
        /**
         * 
         */
        utils: Object;
        /**
         * 
         */
        vectorFontFitting: Object;
        /**
         * 
         */
        VectorText: Object;
        /**
         * This the default graphics rendering bridge for IE6-7.
         * This renderer is very slow.  For best performance on IE6-8, use Silverlight plugin.
         * IE9+ defaults to the standard W3C SVG renderer.
         * 
         */
        vml: Object;
        /**
         * 
         */
        Circle(): void;
        /**
         * creates a surface
         * 
         * @param parentNode a parent node             
         * @param width width of surface, e.g., "100px" or 100             
         * @param height height of surface, e.g., "100px" or 100             
         */
        createSurface(parentNode: HTMLElement, width: String, height: String): dojox.gfx.Surface;
        /**
         * creates a surface
         * 
         * @param parentNode a parent node             
         * @param width width of surface, e.g., "100px" or 100             
         * @param height height of surface, e.g., "100px" or 100             
         */
        createSurface(parentNode: HTMLElement, width: number, height: String): dojox.gfx.Surface;
        /**
         * creates a surface
         * 
         * @param parentNode a parent node             
         * @param width width of surface, e.g., "100px" or 100             
         * @param height height of surface, e.g., "100px" or 100             
         */
        createSurface(parentNode: HTMLElement, width: String, height: number): dojox.gfx.Surface;
        /**
         * creates a surface
         * 
         * @param parentNode a parent node             
         * @param width width of surface, e.g., "100px" or 100             
         * @param height height of surface, e.g., "100px" or 100             
         */
        createSurface(parentNode: HTMLElement, width: number, height: number): dojox.gfx.Surface;
        /**
         * Decompose a 2D matrix into translation, scaling, and rotation components.
         * This function decompose a matrix into four logical components:
         * translation, rotation, scaling, and one more rotation using SVD.
         * The components should be applied in following order:
         * 
         * [translate, rotate(angle2), scale, rotate(angle1)]
         * 
         * @param matrix a 2D matrix-like object             
         */
        decompose(matrix: dojox.gfx.matrix.Matrix2D): void;
        /**
         * 
         */
        Ellipse(): void;
        /**
         * compares event sources, returns true if they are equal
         * 
         * @param a             
         * @param b             
         */
        equalSources(a: any, b: any): void;
        /**
         * converts a number to a string using a fixed notation
         * 
         * @param x number to be converted             
         * @param addSpace whether to add a space before a positive number             
         */
        formatNumber(x: number, addSpace: boolean): String;
        /**
         * 
         * @param url             
         */
        getVectorFont(url: String): any;
        /**
         * 
         */
        Group(): void;
        /**
         * 
         */
        Line(): void;
        /**
         * converts a font object to a CSS font string
         * 
         * @param font font object (see dojox/gfx.defaultFont)             
         */
        makeFontString(font: Object): String;
        /**
         * copies the original object, and all copied properties from the
         * 'update' object
         * 
         * @param defaults the object to be cloned before updating             
         * @param update the object, which properties are to be cloned during updating             
         */
        makeParameters(defaults: Object, update: Object): Object;
        /**
         * a 2D matrix object
         * Normalizes a 2D matrix-like object. If arrays is passed,
         * all objects of the array are normalized and multiplied sequentially.
         * 
         * @param arg a 2D matrix-like object, a number, or an array of such objects             
         */
        Matrix2D(arg: Object): void;
        /**
         * 
         */
        Moveable(): void;
        /**
         * 
         */
        Mover(): void;
        /**
         * converts any legal color representation to normalized
         * dojo/Color object
         * 
         * @param color A color representation.             
         */
        normalizeColor(color: dojo._base.Color ): any;
        /**
         * converts any legal color representation to normalized
         * dojo/Color object
         * 
         * @param color A color representation.             
         */
        normalizeColor(color: any[]): any;
        /**
         * converts any legal color representation to normalized
         * dojo/Color object
         * 
         * @param color A color representation.             
         */
        normalizeColor(color: String): any;
        /**
         * converts any legal color representation to normalized
         * dojo/Color object
         * 
         * @param color A color representation.             
         */
        normalizeColor(color: Object): any;
        /**
         * converts any length value to pixels
         * 
         * @param len a length, e.g., '12pc'             
         */
        normalizedLength(len: String): number;
        /**
         * updates an existing object with properties from an 'update'
         * object
         * 
         * @param existed the target object to be updated             
         * @param update the 'update' object, whose properties will be used to updatethe existed object             
         */
        normalizeParameters(existed: Object, update: Object): Object;
        /**
         * 
         */
        Path(): void;
        /**
         * 
         */
        Point(): void;
        /**
         * 
         */
        Polyline(): void;
        /**
         * converts points to pixels
         * 
         * @param len a value in points             
         */
        pt2px(len: number): number;
        /**
         * converts pixels to points
         * 
         * @param len a value in pixels             
         */
        px2pt(len: number): number;
        /**
         * returns the current number of pixels per point.
         * 
         */
        px_in_pt(): number;
        /**
         * 
         */
        Rect(): void;
        /**
         * 
         */
        Rectangle(): void;
        /**
         * converts a CSS font string to a font object
         * Converts a CSS font string to a gfx font object. The CSS font
         * string components should follow the W3C specified order
         * (see http://www.w3.org/TR/CSS2/fonts.html#font-shorthand):
         * style, variant, weight, size, optional line height (will be
         * ignored), and family. Note that the Font.size attribute is limited to numeric CSS length.
         * 
         * @param str a CSS font string.             
         */
        splitFontString(str: String): Object;
        /**
         * 
         */
        Surface(): void;
        /**
         * switch the graphics implementation to the specified renderer.
         * 
         * @param renderer Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the rendererobject to switch to.             
         */
        switchTo(renderer: String): void;
        /**
         * switch the graphics implementation to the specified renderer.
         * 
         * @param renderer Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the rendererobject to switch to.             
         */
        switchTo(renderer: Object): void;
        /**
         * 
         */
        Text(): void;
        /**
         * 
         */
        TextPath(): void;
        /**
         * 
         */
        VectorFont(): void;
    }
    module gfx {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.__MoveableCtorArgs.html
         *
         * The arguments used for dojox/gfx/Moveable constructor.
         * 
         */
        class __MoveableCtorArgs {
            constructor();
            /**
             * delay move by this number of pixels
             * 
             */
            "delay": number;
            /**
             * a constructor of custom Mover
             * 
             */
            mover(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Circle.html
         *
         * a generic circle
         * 
         * @param rawNode a DOM Node     
         */
        class Circle {
            constructor(rawNode: HTMLElement);
            /**
             * multiplies the existing matrix with an argument on left side
             * (matrix * this.matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * multiplies the existing matrix with an argument on right side
             * (this.matrix * matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * connects a handler to an event on this shape
             * 
             * @param name             
             * @param object             
             * @param method             
             */
            connect(name: any, object: any, method: any): any;
            /**
             * Releases all internal resources owned by this shape. Once this method has been called,
             * the instance is considered destroyed and should not be used anymore.
             * 
             */
            destroy(): void;
            /**
             * connects a handler by token from an event on this shape
             * 
             * @param token             
             */
            disconnect(token: any): any;
            /**
             * returns the bounding box
             * 
             */
            getBoundingBox(): Object;
            /**
             * 
             */
            getClip(): any;
            /**
             * returns a Node, which is used as
             * a source of events for this shape
             * 
             */
            getEventSource(): any;
            /**
             * Returns the current fill object or null
             * (see dojox/gfx.defaultLinearGradient,
             * dojox/gfx.defaultRadialGradient,
             * dojox/gfx.defaultPattern,
             * or dojo/Color)
             * 
             */
            getFill(): any;
            /**
             * Different graphics rendering subsystems implement shapes in different ways.  This
             * method provides access to the underlying graphics subsystem object.  Clients calling this
             * method and using the return value must be careful not to try sharing or using the underlying node
             * in a general way across renderer implementation.
             * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
             * 
             */
            getNode(): any;
            /**
             * Returns the parent Shape, Group or null if this Shape is unparented.
             * (see dojox/gfx/shape.Surface,
             * or dojox/gfx.Group)
             * 
             */
            getParent(): any;
            /**
             * returns the current Shape object or null
             * (see dojox/gfx.defaultPath,
             * dojox/gfx.defaultPolyline,
             * dojox/gfx.defaultRect,
             * dojox/gfx.defaultEllipse,
             * dojox/gfx.defaultCircle,
             * dojox/gfx.defaultLine,
             * or dojox/gfx.defaultImage)
             * 
             */
            getShape(): any;
            /**
             * Returns the current stroke object or null
             * (see dojox/gfx.defaultStroke)
             * 
             */
            getStroke(): any;
            /**
             * Returns the current transformation matrix applied to this Shape or null
             * 
             */
            getTransform(): any;
            /**
             * returns an array of four points or null
             * four points represent four corners of the untransformed bounding box
             * 
             */
            getTransformedBoundingBox(): any;
            /**
             * moves a shape to back of its parent's list of shapes
             * 
             */
            moveToBack(): Function;
            /**
             * moves a shape to front of its parent's list of shapes
             * 
             */
            moveToFront(): Function;
            /**
             * Connects an event to this shape.
             * 
             * @param type             
             * @param listener             
             */
            on(type: any, listener: any): any;
            /**
             * removes the shape from its parent's list of shapes
             * 
             * @param silently if true, do not redraw a picture yet             
             */
            removeShape(silently: boolean): Function;
            /**
             * sets the clipping area of this shape.
             * The clipping area defines the shape area that will be effectively visible. Everything that
             * would be drawn outside of the clipping area will not be rendered.
             * The possible clipping area types are rectangle, ellipse, polyline and path, but all are not
             * supported by all the renderers. vml only supports rectangle clipping, while the gfx silverlight renderer does not
             * support path clipping.
             * The clip parameter defines the clipping area geometry, and should be an object with the following properties:
             * 
             * {x:Number, y:Number, width:Number, height:Number} for rectangular clip
             * {cx:Number, cy:Number, rx:Number, ry:Number} for ellipse clip
             * {points:Array} for polyline clip
             * {d:String} for a path clip.
             * The clip geometry coordinates are expressed in the coordinate system used to draw the shape. In other
             * words, the clipping area is defined in the shape parent coordinate system and the shape transform is automatically applied.
             * 
             * @param clip             
             */
            setClip(clip: any): void;
            /**
             * sets a fill object
             * (the default implementation simply ignores it)
             * 
             * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
             */
            setFill(fill: Object): Function;
            /**
             * sets a shape object
             * (the default implementation simply ignores it)
             * 
             * @param shape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
             */
            setShape(shape: Object): Function;
            /**
             * sets a stroke object
             * (the default implementation simply ignores it)
             * 
             * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
             */
            setStroke(stroke: Object): Function;
            /**
             * sets a transformation matrix
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Ellipse.html
         *
         * a generic ellipse
         * 
         * @param rawNode a DOM Node     
         */
        class Ellipse {
            constructor(rawNode: HTMLElement);
            /**
             * multiplies the existing matrix with an argument on left side
             * (matrix * this.matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * multiplies the existing matrix with an argument on right side
             * (this.matrix * matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * connects a handler to an event on this shape
             * 
             * @param name             
             * @param object             
             * @param method             
             */
            connect(name: any, object: any, method: any): any;
            /**
             * Releases all internal resources owned by this shape. Once this method has been called,
             * the instance is considered destroyed and should not be used anymore.
             * 
             */
            destroy(): void;
            /**
             * connects a handler by token from an event on this shape
             * 
             * @param token             
             */
            disconnect(token: any): any;
            /**
             * returns the bounding box
             * 
             */
            getBoundingBox(): Object;
            /**
             * 
             */
            getClip(): any;
            /**
             * returns a Node, which is used as
             * a source of events for this shape
             * 
             */
            getEventSource(): any;
            /**
             * Returns the current fill object or null
             * (see dojox/gfx.defaultLinearGradient,
             * dojox/gfx.defaultRadialGradient,
             * dojox/gfx.defaultPattern,
             * or dojo/Color)
             * 
             */
            getFill(): any;
            /**
             * Different graphics rendering subsystems implement shapes in different ways.  This
             * method provides access to the underlying graphics subsystem object.  Clients calling this
             * method and using the return value must be careful not to try sharing or using the underlying node
             * in a general way across renderer implementation.
             * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
             * 
             */
            getNode(): any;
            /**
             * Returns the parent Shape, Group or null if this Shape is unparented.
             * (see dojox/gfx/shape.Surface,
             * or dojox/gfx.Group)
             * 
             */
            getParent(): any;
            /**
             * returns the current Shape object or null
             * (see dojox/gfx.defaultPath,
             * dojox/gfx.defaultPolyline,
             * dojox/gfx.defaultRect,
             * dojox/gfx.defaultEllipse,
             * dojox/gfx.defaultCircle,
             * dojox/gfx.defaultLine,
             * or dojox/gfx.defaultImage)
             * 
             */
            getShape(): any;
            /**
             * Returns the current stroke object or null
             * (see dojox/gfx.defaultStroke)
             * 
             */
            getStroke(): any;
            /**
             * Returns the current transformation matrix applied to this Shape or null
             * 
             */
            getTransform(): any;
            /**
             * returns an array of four points or null
             * four points represent four corners of the untransformed bounding box
             * 
             */
            getTransformedBoundingBox(): any;
            /**
             * moves a shape to back of its parent's list of shapes
             * 
             */
            moveToBack(): Function;
            /**
             * moves a shape to front of its parent's list of shapes
             * 
             */
            moveToFront(): Function;
            /**
             * Connects an event to this shape.
             * 
             * @param type             
             * @param listener             
             */
            on(type: any, listener: any): any;
            /**
             * removes the shape from its parent's list of shapes
             * 
             * @param silently if true, do not redraw a picture yet             
             */
            removeShape(silently: boolean): Function;
            /**
             * sets the clipping area of this shape.
             * The clipping area defines the shape area that will be effectively visible. Everything that
             * would be drawn outside of the clipping area will not be rendered.
             * The possible clipping area types are rectangle, ellipse, polyline and path, but all are not
             * supported by all the renderers. vml only supports rectangle clipping, while the gfx silverlight renderer does not
             * support path clipping.
             * The clip parameter defines the clipping area geometry, and should be an object with the following properties:
             * 
             * {x:Number, y:Number, width:Number, height:Number} for rectangular clip
             * {cx:Number, cy:Number, rx:Number, ry:Number} for ellipse clip
             * {points:Array} for polyline clip
             * {d:String} for a path clip.
             * The clip geometry coordinates are expressed in the coordinate system used to draw the shape. In other
             * words, the clipping area is defined in the shape parent coordinate system and the shape transform is automatically applied.
             * 
             * @param clip             
             */
            setClip(clip: any): void;
            /**
             * sets a fill object
             * (the default implementation simply ignores it)
             * 
             * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
             */
            setFill(fill: Object): Function;
            /**
             * sets a shape object
             * (the default implementation simply ignores it)
             * 
             * @param shape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
             */
            setShape(shape: Object): Function;
            /**
             * sets a stroke object
             * (the default implementation simply ignores it)
             * 
             * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
             */
            setStroke(stroke: Object): Function;
            /**
             * sets a transformation matrix
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Line.html
         *
         * a generic line (do not instantiate it directly)
         * 
         * @param rawNode a DOM Node     
         */
        class Line {
            constructor(rawNode: HTMLElement);
            /**
             * multiplies the existing matrix with an argument on left side
             * (matrix * this.matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * multiplies the existing matrix with an argument on right side
             * (this.matrix * matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * connects a handler to an event on this shape
             * 
             * @param name             
             * @param object             
             * @param method             
             */
            connect(name: any, object: any, method: any): any;
            /**
             * Releases all internal resources owned by this shape. Once this method has been called,
             * the instance is considered destroyed and should not be used anymore.
             * 
             */
            destroy(): void;
            /**
             * connects a handler by token from an event on this shape
             * 
             * @param token             
             */
            disconnect(token: any): any;
            /**
             * returns the bounding box
             * 
             */
            getBoundingBox(): Object;
            /**
             * 
             */
            getClip(): any;
            /**
             * returns a Node, which is used as
             * a source of events for this shape
             * 
             */
            getEventSource(): any;
            /**
             * Returns the current fill object or null
             * (see dojox/gfx.defaultLinearGradient,
             * dojox/gfx.defaultRadialGradient,
             * dojox/gfx.defaultPattern,
             * or dojo/Color)
             * 
             */
            getFill(): any;
            /**
             * Different graphics rendering subsystems implement shapes in different ways.  This
             * method provides access to the underlying graphics subsystem object.  Clients calling this
             * method and using the return value must be careful not to try sharing or using the underlying node
             * in a general way across renderer implementation.
             * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
             * 
             */
            getNode(): any;
            /**
             * Returns the parent Shape, Group or null if this Shape is unparented.
             * (see dojox/gfx/shape.Surface,
             * or dojox/gfx.Group)
             * 
             */
            getParent(): any;
            /**
             * returns the current Shape object or null
             * (see dojox/gfx.defaultPath,
             * dojox/gfx.defaultPolyline,
             * dojox/gfx.defaultRect,
             * dojox/gfx.defaultEllipse,
             * dojox/gfx.defaultCircle,
             * dojox/gfx.defaultLine,
             * or dojox/gfx.defaultImage)
             * 
             */
            getShape(): any;
            /**
             * Returns the current stroke object or null
             * (see dojox/gfx.defaultStroke)
             * 
             */
            getStroke(): any;
            /**
             * Returns the current transformation matrix applied to this Shape or null
             * 
             */
            getTransform(): any;
            /**
             * returns an array of four points or null
             * four points represent four corners of the untransformed bounding box
             * 
             */
            getTransformedBoundingBox(): any;
            /**
             * moves a shape to back of its parent's list of shapes
             * 
             */
            moveToBack(): Function;
            /**
             * moves a shape to front of its parent's list of shapes
             * 
             */
            moveToFront(): Function;
            /**
             * Connects an event to this shape.
             * 
             * @param type             
             * @param listener             
             */
            on(type: any, listener: any): any;
            /**
             * removes the shape from its parent's list of shapes
             * 
             * @param silently if true, do not redraw a picture yet             
             */
            removeShape(silently: boolean): Function;
            /**
             * sets the clipping area of this shape.
             * The clipping area defines the shape area that will be effectively visible. Everything that
             * would be drawn outside of the clipping area will not be rendered.
             * The possible clipping area types are rectangle, ellipse, polyline and path, but all are not
             * supported by all the renderers. vml only supports rectangle clipping, while the gfx silverlight renderer does not
             * support path clipping.
             * The clip parameter defines the clipping area geometry, and should be an object with the following properties:
             * 
             * {x:Number, y:Number, width:Number, height:Number} for rectangular clip
             * {cx:Number, cy:Number, rx:Number, ry:Number} for ellipse clip
             * {points:Array} for polyline clip
             * {d:String} for a path clip.
             * The clip geometry coordinates are expressed in the coordinate system used to draw the shape. In other
             * words, the clipping area is defined in the shape parent coordinate system and the shape transform is automatically applied.
             * 
             * @param clip             
             */
            setClip(clip: any): void;
            /**
             * sets a fill object
             * (the default implementation simply ignores it)
             * 
             * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
             */
            setFill(fill: Object): Function;
            /**
             * sets a shape object
             * (the default implementation simply ignores it)
             * 
             * @param shape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
             */
            setShape(shape: Object): Function;
            /**
             * sets a stroke object
             * (the default implementation simply ignores it)
             * 
             * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
             */
            setStroke(stroke: Object): Function;
            /**
             * sets a transformation matrix
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Group.html
         *
         * a group shape, which can be used
         * to logically group shapes (e.g, to propagate matricies)
         * 
         */
        class Group {
            constructor();
            /**
             * Will be used for inheritance, or as default for text objects
             * that textDir wasn't directly specified for them but the bidi support was required.
             * 
             */
            "textDir": string;
            /**
             * adds a shape to the list
             * 
             * @param shape the shape to add to the list             
             */
            add(shape: dojox.gfx.shape.Shape): any;
            /**
             * multiplies the existing matrix with an argument on left side
             * (matrix * this.matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * multiplies the existing matrix with an argument on right side
             * (this.matrix * matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * removes all shapes from a group/surface.
             * 
             * @param destroy               OptionalIndicates whether the children should be destroyed. Optional.             
             */
            clear(destroy: boolean): Function;
            /**
             * submits the current batch, append all pending child shapes to DOM
             * On canvas, this method flushes the pending redraws queue.
             * 
             */
            closeBatch(): Function;
            /**
             * connects a handler to an event on this shape
             * 
             * @param name             
             * @param object             
             * @param method             
             */
            connect(name: any, object: any, method: any): any;
            /**
             * creates a circle shape
             * 
             * @param circle a circle object (see dojox/gfx.defaultCircle)             
             */
            createCircle(circle: Object): any;
            /**
             * creates an ellipse shape
             * 
             * @param ellipse an ellipse object (see dojox/gfx.defaultEllipse)             
             */
            createEllipse(ellipse: Object): any;
            /**
             * creates a group shape
             * 
             */
            createGroup(): any;
            /**
             * creates a image shape
             * 
             * @param image an image object (see dojox/gfx.defaultImage)             
             */
            createImage(image: Object): any;
            /**
             * creates a line shape
             * 
             * @param line a line object (see dojox/gfx.defaultLine)             
             */
            createLine(line: Object): any;
            /**
             * creates an instance of the passed shapeType class
             * 
             * @param shapeType a class constructor to create an instance of             
             * @param rawShape properties to be passed in to the classes 'setShape' method             
             */
            createObject(shapeType: Function, rawShape: Object): any;
            /**
             * creates a path shape
             * 
             * @param path a path object (see dojox/gfx.defaultPath)             
             */
            createPath(path: Object): any;
            /**
             * creates a polyline/polygon shape
             * 
             * @param points a points object (see dojox/gfx.defaultPolyline)or an Array of points             
             */
            createPolyline(points: Object): any;
            /**
             * creates a rectangle shape
             * 
             * @param rect a path object (see dojox/gfx.defaultRect)             
             */
            createRect(rect: Object): any;
            /**
             * creates a shape object based on its type; it is meant to be used
             * by group-like objects
             * 
             * @param shape a shape descriptor object             
             */
            createShape(shape: Object): any;
            /**
             * creates a text shape
             * 
             * @param text a text object (see dojox/gfx.defaultText)             
             */
            createText(text: Object): any;
            /**
             * creates a text shape
             * 
             * @param text a textpath object (see dojox/gfx.defaultTextPath)             
             */
            createTextPath(text: Object): any;
            /**
             * Releases all internal resources owned by this shape. Once this method has been called,
             * the instance is considered destroyed and should not be used anymore.
             * 
             */
            destroy(): void;
            /**
             * connects a handler by token from an event on this shape
             * 
             * @param token             
             */
            disconnect(token: any): any;
            /**
             * Returns the bounding box Rectangle for this shape.
             * 
             */
            getBoundingBox(): any;
            /**
             * 
             */
            getClip(): any;
            /**
             * returns a Node, which is used as
             * a source of events for this shape
             * 
             */
            getEventSource(): any;
            /**
             * Returns the current fill object or null
             * (see dojox/gfx.defaultLinearGradient,
             * dojox/gfx.defaultRadialGradient,
             * dojox/gfx.defaultPattern,
             * or dojo/Color)
             * 
             */
            getFill(): any;
            /**
             * Different graphics rendering subsystems implement shapes in different ways.  This
             * method provides access to the underlying graphics subsystem object.  Clients calling this
             * method and using the return value must be careful not to try sharing or using the underlying node
             * in a general way across renderer implementation.
             * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
             * 
             */
            getNode(): any;
            /**
             * Returns the parent Shape, Group or null if this Shape is unparented.
             * (see dojox/gfx/shape.Surface,
             * or dojox/gfx.Group)
             * 
             */
            getParent(): any;
            /**
             * returns the current Shape object or null
             * (see dojox/gfx.defaultPath,
             * dojox/gfx.defaultPolyline,
             * dojox/gfx.defaultRect,
             * dojox/gfx.defaultEllipse,
             * dojox/gfx.defaultCircle,
             * dojox/gfx.defaultLine,
             * or dojox/gfx.defaultImage)
             * 
             */
            getShape(): any;
            /**
             * Returns the current stroke object or null
             * (see dojox/gfx.defaultStroke)
             * 
             */
            getStroke(): any;
            /**
             * 
             */
            getTextDir(): any;
            /**
             * Returns the current transformation matrix applied to this Shape or null
             * 
             */
            getTransform(): any;
            /**
             * returns an array of four points or null
             * four points represent four corners of the untransformed bounding box
             * 
             */
            getTransformedBoundingBox(): any;
            /**
             * moves a shape to back of its parent's list of shapes
             * 
             */
            moveToBack(): Function;
            /**
             * moves a shape to front of its parent's list of shapes
             * 
             */
            moveToFront(): Function;
            /**
             * Connects an event to this shape.
             * 
             * @param type             
             * @param listener             
             */
            on(type: any, listener: any): any;
            /**
             * starts a new batch, subsequent new child shapes will be held in
             * the batch instead of appending to the container directly.
             * Because the canvas renderer has no DOM hierarchy, the canvas implementation differs
             * such that it suspends the repaint requests for this container until the current batch is closed by a call to closeBatch().
             * 
             */
            openBatch(): Function;
            /**
             * removes a shape from the list
             * 
             * @param shape the shape to remove             
             * @param silently if true, do not redraw a picture yet             
             */
            remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
            /**
             * removes the shape from its parent's list of shapes
             * 
             * @param silently if true, do not redraw a picture yet             
             */
            removeShape(silently: boolean): Function;
            /**
             * sets the clipping area of this shape.
             * The clipping area defines the shape area that will be effectively visible. Everything that
             * would be drawn outside of the clipping area will not be rendered.
             * The possible clipping area types are rectangle, ellipse, polyline and path, but all are not
             * supported by all the renderers. vml only supports rectangle clipping, while the gfx silverlight renderer does not
             * support path clipping.
             * The clip parameter defines the clipping area geometry, and should be an object with the following properties:
             * 
             * {x:Number, y:Number, width:Number, height:Number} for rectangular clip
             * {cx:Number, cy:Number, rx:Number, ry:Number} for ellipse clip
             * {points:Array} for polyline clip
             * {d:String} for a path clip.
             * The clip geometry coordinates are expressed in the coordinate system used to draw the shape. In other
             * words, the clipping area is defined in the shape parent coordinate system and the shape transform is automatically applied.
             * 
             * @param clip             
             */
            setClip(clip: any): void;
            /**
             * sets a fill object
             * (the default implementation simply ignores it)
             * 
             * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
             */
            setFill(fill: Object): Function;
            /**
             * sets a shape object
             * (the default implementation simply ignores it)
             * 
             * @param shape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
             */
            setShape(shape: Object): Function;
            /**
             * sets a stroke object
             * (the default implementation simply ignores it)
             * 
             * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
             */
            setStroke(stroke: Object): Function;
            /**
             * Used for propagation and change of textDir.
             * newTextDir will be forced as textDir for all of it's children (Group/Text/TextPath).
             * 
             * @param newTextDir             
             */
            setTextDir(newTextDir: String): void;
            /**
             * sets a transformation matrix
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/Moveable.html
         *
         * 
         * @param shape a shape object to be moved.     
         * @param params an optional configuration object.     
         */
        class Moveable {
            constructor(shape: dojox.gfx.shape.Shape, params: Object);
            /**
             * stops watching for possible move, deletes all references, so the object can be garbage-collected
             * 
             */
            destroy(): void;
            /**
             * called during the very first move notification,
             * can be used to initialize coordinates, can be overwritten.
             * 
             * @param mover A Mover instance that fired the event.             
             */
            onFirstMove(mover: dojox.gfx.Mover): void;
            /**
             * event processor for onmousedown, creates a Mover for the shape
             * 
             * @param e mouse event             
             */
            onMouseDown(e: Event): void;
            /**
             * event processor for onmousemove, used only for delayed drags
             * 
             * @param e mouse event             
             */
            onMouseMove(e: Event): void;
            /**
             * event processor for onmouseup, used only for delayed delayed drags
             * 
             * @param e mouse event             
             */
            onMouseUp(e: Event): void;
            /**
             * called during every move notification,
             * should actually move the node, can be overwritten.
             * 
             * @param mover A Mover instance that fired the event.             
             * @param shift An object as {dx,dy} that represents the shift.             
             */
            onMove(mover: dojox.gfx.Mover, shift: Object): void;
            /**
             * called after every incremental move,
             * can be overwritten.
             * 
             * @param mover A Mover instance that fired the event.             
             * @param shift An object as {dx,dy} that represents the shift.             
             */
            onMoved(mover: dojox.gfx.Mover, shift: Object): void;
            /**
             * called before every move operation
             * 
             * @param mover A Mover instance that fired the event.             
             */
            onMoveStart(mover: dojox.gfx.Mover): void;
            /**
             * called after every move operation
             * 
             * @param mover A Mover instance that fired the event.             
             */
            onMoveStop(mover: dojox.gfx.Mover): void;
            /**
             * called before every incremental move,
             * can be overwritten.
             * 
             * @param mover A Mover instance that fired the event.             
             * @param shift An object as {dx,dy} that represents the shift.             
             */
            onMoving(mover: dojox.gfx.Mover, shift: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/path.html
         *
         * This module contains the core graphics Path API.
         * Path command format follows the W3C SVG 1.0 Path api.
         * 
         */
        class path {
            constructor();
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/Mover.html
         *
         * 
         * @param shape a shape object to be moved     
         * @param e a mouse event, which started the move;only clientX and clientY properties are used     
         * @param host       Optionalobject which implements the functionality of the move, and defines proper events (onMoveStart and onMoveStop)     
         */
        class Mover {
            constructor(shape: dojox.gfx.shape.Shape, e: Event, host?: Object);
            /**
             * stops the move, deletes all references, so the object can be garbage-collected
             * 
             */
            destroy(): void;
            /**
             * it is meant to be called only once
             * 
             */
            onFirstMove(): void;
            /**
             * event processor for onmousemove
             * 
             * @param e mouse event             
             */
            onMouseMove(e: Event): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Point.html
         *
         * 2D point for drawings - {x, y}
         * Do not use this object directly!
         * Use the naked object instead: {x: 1, y: 2}.
         * 
         */
        class Point {
            constructor();
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Polyline.html
         *
         * a generic polyline/polygon (do not instantiate it directly)
         * 
         * @param rawNode a DOM Node     
         */
        class Polyline {
            constructor(rawNode: HTMLElement);
            /**
             * multiplies the existing matrix with an argument on left side
             * (matrix * this.matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * multiplies the existing matrix with an argument on right side
             * (this.matrix * matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * connects a handler to an event on this shape
             * 
             * @param name             
             * @param object             
             * @param method             
             */
            connect(name: any, object: any, method: any): any;
            /**
             * Releases all internal resources owned by this shape. Once this method has been called,
             * the instance is considered destroyed and should not be used anymore.
             * 
             */
            destroy(): void;
            /**
             * connects a handler by token from an event on this shape
             * 
             * @param token             
             */
            disconnect(token: any): any;
            /**
             * returns the bounding box
             * 
             */
            getBoundingBox(): Object;
            /**
             * 
             */
            getClip(): any;
            /**
             * returns a Node, which is used as
             * a source of events for this shape
             * 
             */
            getEventSource(): any;
            /**
             * Returns the current fill object or null
             * (see dojox/gfx.defaultLinearGradient,
             * dojox/gfx.defaultRadialGradient,
             * dojox/gfx.defaultPattern,
             * or dojo/Color)
             * 
             */
            getFill(): any;
            /**
             * Different graphics rendering subsystems implement shapes in different ways.  This
             * method provides access to the underlying graphics subsystem object.  Clients calling this
             * method and using the return value must be careful not to try sharing or using the underlying node
             * in a general way across renderer implementation.
             * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
             * 
             */
            getNode(): any;
            /**
             * Returns the parent Shape, Group or null if this Shape is unparented.
             * (see dojox/gfx/shape.Surface,
             * or dojox/gfx.Group)
             * 
             */
            getParent(): any;
            /**
             * returns the current Shape object or null
             * (see dojox/gfx.defaultPath,
             * dojox/gfx.defaultPolyline,
             * dojox/gfx.defaultRect,
             * dojox/gfx.defaultEllipse,
             * dojox/gfx.defaultCircle,
             * dojox/gfx.defaultLine,
             * or dojox/gfx.defaultImage)
             * 
             */
            getShape(): any;
            /**
             * Returns the current stroke object or null
             * (see dojox/gfx.defaultStroke)
             * 
             */
            getStroke(): any;
            /**
             * Returns the current transformation matrix applied to this Shape or null
             * 
             */
            getTransform(): any;
            /**
             * returns an array of four points or null
             * four points represent four corners of the untransformed bounding box
             * 
             */
            getTransformedBoundingBox(): any;
            /**
             * moves a shape to back of its parent's list of shapes
             * 
             */
            moveToBack(): Function;
            /**
             * moves a shape to front of its parent's list of shapes
             * 
             */
            moveToFront(): Function;
            /**
             * Connects an event to this shape.
             * 
             * @param type             
             * @param listener             
             */
            on(type: any, listener: any): any;
            /**
             * removes the shape from its parent's list of shapes
             * 
             * @param silently if true, do not redraw a picture yet             
             */
            removeShape(silently: boolean): Function;
            /**
             * sets the clipping area of this shape.
             * The clipping area defines the shape area that will be effectively visible. Everything that
             * would be drawn outside of the clipping area will not be rendered.
             * The possible clipping area types are rectangle, ellipse, polyline and path, but all are not
             * supported by all the renderers. vml only supports rectangle clipping, while the gfx silverlight renderer does not
             * support path clipping.
             * The clip parameter defines the clipping area geometry, and should be an object with the following properties:
             * 
             * {x:Number, y:Number, width:Number, height:Number} for rectangular clip
             * {cx:Number, cy:Number, rx:Number, ry:Number} for ellipse clip
             * {points:Array} for polyline clip
             * {d:String} for a path clip.
             * The clip geometry coordinates are expressed in the coordinate system used to draw the shape. In other
             * words, the clipping area is defined in the shape parent coordinate system and the shape transform is automatically applied.
             * 
             * @param clip             
             */
            setClip(clip: any): void;
            /**
             * sets a fill object
             * (the default implementation simply ignores it)
             * 
             * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
             */
            setFill(fill: Object): Function;
            /**
             * sets a polyline/polygon shape object
             * 
             * @param points a polyline/polygon shape object, or an array of points             
             * @param closed close the polyline to make a polygon             
             */
            setShape(points: Object, closed: boolean): Function;
            /**
             * sets a polyline/polygon shape object
             * 
             * @param points a polyline/polygon shape object, or an array of points             
             * @param closed close the polyline to make a polygon             
             */
            setShape(points: any[], closed: boolean): Function;
            /**
             * sets a stroke object
             * (the default implementation simply ignores it)
             * 
             * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
             */
            setStroke(stroke: Object): Function;
            /**
             * sets a transformation matrix
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Rectangle.html
         *
         * rectangle - {x, y, width, height}
         * Do not use this object directly!
         * Use the naked object instead: {x: 1, y: 2, width: 100, height: 200}.
         * 
         */
        class Rectangle {
            constructor();
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Rect.html
         *
         * a generic rectangle
         * 
         * @param rawNode The underlying graphics system object (typically a DOM Node)     
         */
        class Rect {
            constructor(rawNode: HTMLElement);
            /**
             * multiplies the existing matrix with an argument on left side
             * (matrix * this.matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * multiplies the existing matrix with an argument on right side
             * (this.matrix * matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * connects a handler to an event on this shape
             * 
             * @param name             
             * @param object             
             * @param method             
             */
            connect(name: any, object: any, method: any): any;
            /**
             * Releases all internal resources owned by this shape. Once this method has been called,
             * the instance is considered destroyed and should not be used anymore.
             * 
             */
            destroy(): void;
            /**
             * connects a handler by token from an event on this shape
             * 
             * @param token             
             */
            disconnect(token: any): any;
            /**
             * returns the bounding box (its shape in this case)
             * 
             */
            getBoundingBox(): any;
            /**
             * 
             */
            getClip(): any;
            /**
             * returns a Node, which is used as
             * a source of events for this shape
             * 
             */
            getEventSource(): any;
            /**
             * Returns the current fill object or null
             * (see dojox/gfx.defaultLinearGradient,
             * dojox/gfx.defaultRadialGradient,
             * dojox/gfx.defaultPattern,
             * or dojo/Color)
             * 
             */
            getFill(): any;
            /**
             * Different graphics rendering subsystems implement shapes in different ways.  This
             * method provides access to the underlying graphics subsystem object.  Clients calling this
             * method and using the return value must be careful not to try sharing or using the underlying node
             * in a general way across renderer implementation.
             * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
             * 
             */
            getNode(): any;
            /**
             * Returns the parent Shape, Group or null if this Shape is unparented.
             * (see dojox/gfx/shape.Surface,
             * or dojox/gfx.Group)
             * 
             */
            getParent(): any;
            /**
             * returns the current Shape object or null
             * (see dojox/gfx.defaultPath,
             * dojox/gfx.defaultPolyline,
             * dojox/gfx.defaultRect,
             * dojox/gfx.defaultEllipse,
             * dojox/gfx.defaultCircle,
             * dojox/gfx.defaultLine,
             * or dojox/gfx.defaultImage)
             * 
             */
            getShape(): any;
            /**
             * Returns the current stroke object or null
             * (see dojox/gfx.defaultStroke)
             * 
             */
            getStroke(): any;
            /**
             * Returns the current transformation matrix applied to this Shape or null
             * 
             */
            getTransform(): any;
            /**
             * returns an array of four points or null
             * four points represent four corners of the untransformed bounding box
             * 
             */
            getTransformedBoundingBox(): any;
            /**
             * moves a shape to back of its parent's list of shapes
             * 
             */
            moveToBack(): Function;
            /**
             * moves a shape to front of its parent's list of shapes
             * 
             */
            moveToFront(): Function;
            /**
             * Connects an event to this shape.
             * 
             * @param type             
             * @param listener             
             */
            on(type: any, listener: any): any;
            /**
             * removes the shape from its parent's list of shapes
             * 
             * @param silently if true, do not redraw a picture yet             
             */
            removeShape(silently: boolean): Function;
            /**
             * sets the clipping area of this shape.
             * The clipping area defines the shape area that will be effectively visible. Everything that
             * would be drawn outside of the clipping area will not be rendered.
             * The possible clipping area types are rectangle, ellipse, polyline and path, but all are not
             * supported by all the renderers. vml only supports rectangle clipping, while the gfx silverlight renderer does not
             * support path clipping.
             * The clip parameter defines the clipping area geometry, and should be an object with the following properties:
             * 
             * {x:Number, y:Number, width:Number, height:Number} for rectangular clip
             * {cx:Number, cy:Number, rx:Number, ry:Number} for ellipse clip
             * {points:Array} for polyline clip
             * {d:String} for a path clip.
             * The clip geometry coordinates are expressed in the coordinate system used to draw the shape. In other
             * words, the clipping area is defined in the shape parent coordinate system and the shape transform is automatically applied.
             * 
             * @param clip             
             */
            setClip(clip: any): void;
            /**
             * sets a fill object
             * (the default implementation simply ignores it)
             * 
             * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
             */
            setFill(fill: Object): Function;
            /**
             * sets a shape object
             * (the default implementation simply ignores it)
             * 
             * @param shape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
             */
            setShape(shape: Object): Function;
            /**
             * sets a stroke object
             * (the default implementation simply ignores it)
             * 
             * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
             */
            setStroke(stroke: Object): Function;
            /**
             * sets a transformation matrix
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Surface.html
         *
         * a surface object to be used for drawings
         * 
         */
        class Surface {
            constructor();
            /**
             * 
             */
            "isLoaded": boolean;
            /**
             * Will be used as default for Text/TextPath/Group objects that created by this surface
             * and textDir wasn't directly specified for them, though the bidi support was loaded.
             * Can be set in two ways:
             * 
             * When the surface is created and textDir value passed to it as fourth
             * parameter.
             * Using the setTextDir(String) function, when this function is used the value
             * of textDir propagates to all of it's children and the children of children (for Groups) etc.
             * 
             */
            "textDir": string;
            /**
             * adds a shape to the list
             * 
             * @param shape the shape to add to the list             
             */
            add(shape: dojox.gfx.shape.Shape): any;
            /**
             * removes all shapes from a group/surface.
             * 
             * @param destroy               OptionalIndicates whether the children should be destroyed. Optional.             
             */
            clear(destroy: boolean): Function;
            /**
             * submits the current batch, append all pending child shapes to DOM
             * On canvas, this method flushes the pending redraws queue.
             * 
             */
            closeBatch(): Function;
            /**
             * connects a handler to an event on this shape
             * 
             * @param name             
             * @param object             
             * @param method             
             */
            connect(name: any, object: any, method: any): any;
            /**
             * creates a circle shape
             * 
             * @param circle a circle object (see dojox/gfx.defaultCircle)             
             */
            createCircle(circle: Object): any;
            /**
             * creates an ellipse shape
             * 
             * @param ellipse an ellipse object (see dojox/gfx.defaultEllipse)             
             */
            createEllipse(ellipse: Object): any;
            /**
             * creates a group shape
             * 
             */
            createGroup(): any;
            /**
             * creates a image shape
             * 
             * @param image an image object (see dojox/gfx.defaultImage)             
             */
            createImage(image: Object): any;
            /**
             * creates a line shape
             * 
             * @param line a line object (see dojox/gfx.defaultLine)             
             */
            createLine(line: Object): any;
            /**
             * creates an instance of the passed shapeType class
             * 
             * @param shapeType a class constructor to create an instance of             
             * @param rawShape properties to be passed in to the classes 'setShape' method             
             */
            createObject(shapeType: Function, rawShape: Object): any;
            /**
             * creates a path shape
             * 
             * @param path a path object (see dojox/gfx.defaultPath)             
             */
            createPath(path: Object): any;
            /**
             * creates a polyline/polygon shape
             * 
             * @param points a points object (see dojox/gfx.defaultPolyline)or an Array of points             
             */
            createPolyline(points: Object): any;
            /**
             * creates a rectangle shape
             * 
             * @param rect a path object (see dojox/gfx.defaultRect)             
             */
            createRect(rect: Object): any;
            /**
             * creates a shape object based on its type; it is meant to be used
             * by group-like objects
             * 
             * @param shape a shape descriptor object             
             */
            createShape(shape: Object): any;
            /**
             * creates a text shape
             * 
             * @param text a text object (see dojox/gfx.defaultText)             
             */
            createText(text: Object): any;
            /**
             * creates a text shape
             * 
             * @param text a textpath object (see dojox/gfx.defaultTextPath)             
             */
            createTextPath(text: Object): any;
            /**
             * 
             */
            createViewport(): any;
            /**
             * destroy all relevant external resources and release all
             * external references to make this object garbage-collectible
             * 
             */
            destroy(): void;
            /**
             * connects a handler by token from an event on this shape
             * 
             * @param token             
             */
            disconnect(token: any): any;
            /**
             * Returns the bounding box Rectangle for this shape.
             * 
             */
            getBoundingBox(): any;
            /**
             * gets current width and height in pixels
             * 
             */
            getDimensions(): Object;
            /**
             * returns a node, which can be used to attach event listeners
             * 
             */
            getEventSource(): any;
            /**
             * 
             */
            getTextDir(): any;
            /**
             * Connects an event to this shape.
             * 
             * @param type             
             * @param listener             
             */
            on(type: any, listener: any): any;
            /**
             * starts a new batch, subsequent new child shapes will be held in
             * the batch instead of appending to the container directly.
             * Because the canvas renderer has no DOM hierarchy, the canvas implementation differs
             * such that it suspends the repaint requests for this container until the current batch is closed by a call to closeBatch().
             * 
             */
            openBatch(): Function;
            /**
             * removes a shape from the list
             * 
             * @param shape the shape to remove             
             * @param silently if true, do not redraw a picture yet             
             */
            remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
            /**
             * sets the width and height of the rawNode
             * 
             * @param width width of surface, e.g., "100px"             
             * @param height height of surface, e.g., "100px"             
             */
            setDimensions(width: String, height: String): Function;
            /**
             * Used for propagation and change of textDir.
             * newTextDir will be forced as textDir for all of it's children (Group/Text/TextPath).
             * 
             * @param newTextDir             
             */
            setTextDir(newTextDir: String): void;
            /**
             * 
             * @param context             
             * @param method             
             */
            whenLoaded(context: Object, method: Function): void;
            /**
             * 
             * @param context             
             * @param method             
             */
            whenLoaded(context: any, method: Function): void;
            /**
             * 
             * @param context             
             * @param method             
             */
            whenLoaded(context: Object, method: String): void;
            /**
             * 
             * @param context             
             * @param method             
             */
            whenLoaded(context: any, method: String): void;
            /**
             * local event, fired once when the surface is created
             * asynchronously, used only when isLoaded is false, required
             * only for Silverlight.
             * 
             * @param surface             
             */
            onLoad(surface: dojox.gfx.shape.Surface): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Text.html
         *
         * a generic text (do not instantiate it directly)
         * 
         * @param rawNode a DOM Node     
         */
        class Text {
            constructor(rawNode: HTMLElement);
            /**
             * Used for displaying bidi scripts in right layout.
             * Defines the base direction of text that displayed, can have 3 values:
             * 
             * "ltr" - base direction is left to right.
             * "rtl" - base direction is right to left.
             * "auto" - base direction is contextual (defined by first strong character).
             * 
             */
            "textDir": string;
            /**
             * multiplies the existing matrix with an argument on left side
             * (matrix * this.matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * multiplies the existing matrix with an argument on right side
             * (this.matrix * matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * 
             * @param newShape             
             */
            bidiPreprocess(newShape: any): any;
            /**
             * connects a handler to an event on this shape
             * 
             * @param name             
             * @param object             
             * @param method             
             */
            connect(name: any, object: any, method: any): any;
            /**
             * Releases all internal resources owned by this shape. Once this method has been called,
             * the instance is considered destroyed and should not be used anymore.
             * 
             */
            destroy(): void;
            /**
             * connects a handler by token from an event on this shape
             * 
             * @param token             
             */
            disconnect(token: any): any;
            /**
             * Applies the right transform on text, according to renderer.
             * Finds the right transformation that should be applied on the text, according to renderer.
             * Was tested in:
             * 
             * Renderers (browser for testing):
             * 
             * canvas (FF, Chrome, Safari),
             * vml (IE),
             * svg (FF, Chrome, Safari, Opera),
             * silverlight (IE, Chrome, Safari, Opera),
             * svgWeb(FF, Chrome, Safari, Opera, IE).
             * Browsers [browser version that was tested]:
             * 
             * IE [6,7,8], FF [3.6],
             * Chrome (latest for March 2011),
             * Safari [5.0.3],
             * Opera [11.01].
             * 
             * @param text the string for manipulation, by default return value.             
             * @param textDir Text direction.Can be:"ltr" - for left to right layout."rtl" - for right to left layout"auto" - for contextual layout: the first strong letter decides the direction.             
             */
            formatText(text: String, textDir: String): any;
            /**
             * 
             */
            getBoundingBox(): any;
            /**
             * 
             */
            getClip(): any;
            /**
             * returns a Node, which is used as
             * a source of events for this shape
             * 
             */
            getEventSource(): any;
            /**
             * Returns the current fill object or null
             * (see dojox/gfx.defaultLinearGradient,
             * dojox/gfx.defaultRadialGradient,
             * dojox/gfx.defaultPattern,
             * or dojo/Color)
             * 
             */
            getFill(): any;
            /**
             * returns the current font object or null
             * 
             */
            getFont(): any;
            /**
             * Different graphics rendering subsystems implement shapes in different ways.  This
             * method provides access to the underlying graphics subsystem object.  Clients calling this
             * method and using the return value must be careful not to try sharing or using the underlying node
             * in a general way across renderer implementation.
             * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
             * 
             */
            getNode(): any;
            /**
             * Returns the parent Shape, Group or null if this Shape is unparented.
             * (see dojox/gfx/shape.Surface,
             * or dojox/gfx.Group)
             * 
             */
            getParent(): any;
            /**
             * returns the current Shape object or null
             * (see dojox/gfx.defaultPath,
             * dojox/gfx.defaultPolyline,
             * dojox/gfx.defaultRect,
             * dojox/gfx.defaultEllipse,
             * dojox/gfx.defaultCircle,
             * dojox/gfx.defaultLine,
             * or dojox/gfx.defaultImage)
             * 
             */
            getShape(): any;
            /**
             * Returns the current stroke object or null
             * (see dojox/gfx.defaultStroke)
             * 
             */
            getStroke(): any;
            /**
             * Returns the current transformation matrix applied to this Shape or null
             * 
             */
            getTransform(): any;
            /**
             * returns an array of four points or null
             * four points represent four corners of the untransformed bounding box
             * 
             */
            getTransformedBoundingBox(): any;
            /**
             * moves a shape to back of its parent's list of shapes
             * 
             */
            moveToBack(): Function;
            /**
             * moves a shape to front of its parent's list of shapes
             * 
             */
            moveToFront(): Function;
            /**
             * Connects an event to this shape.
             * 
             * @param type             
             * @param listener             
             */
            on(type: any, listener: any): any;
            /**
             * removes the shape from its parent's list of shapes
             * 
             * @param silently if true, do not redraw a picture yet             
             */
            removeShape(silently: boolean): Function;
            /**
             * sets the clipping area of this shape.
             * The clipping area defines the shape area that will be effectively visible. Everything that
             * would be drawn outside of the clipping area will not be rendered.
             * The possible clipping area types are rectangle, ellipse, polyline and path, but all are not
             * supported by all the renderers. vml only supports rectangle clipping, while the gfx silverlight renderer does not
             * support path clipping.
             * The clip parameter defines the clipping area geometry, and should be an object with the following properties:
             * 
             * {x:Number, y:Number, width:Number, height:Number} for rectangular clip
             * {cx:Number, cy:Number, rx:Number, ry:Number} for ellipse clip
             * {points:Array} for polyline clip
             * {d:String} for a path clip.
             * The clip geometry coordinates are expressed in the coordinate system used to draw the shape. In other
             * words, the clipping area is defined in the shape parent coordinate system and the shape transform is automatically applied.
             * 
             * @param clip             
             */
            setClip(clip: any): void;
            /**
             * sets a fill object
             * (the default implementation simply ignores it)
             * 
             * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
             */
            setFill(fill: Object): Function;
            /**
             * sets a font for text
             * 
             * @param newFont a font object (see dojox/gfx.defaultFont) or a font string             
             */
            setFont(newFont: Object): Function;
            /**
             * sets a shape object
             * (the default implementation simply ignores it)
             * 
             * @param shape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
             */
            setShape(shape: Object): Function;
            /**
             * sets a stroke object
             * (the default implementation simply ignores it)
             * 
             * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
             */
            setStroke(stroke: Object): Function;
            /**
             * sets a transformation matrix
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.TextPath.html
         *
         * a generalized TextPath shape
         * 
         * @param rawNode a DOM node to be used by this TextPath object     
         */
        class TextPath {
            constructor(rawNode: HTMLElement);
            /**
             * Used for displaying bidi scripts in right layout.
             * Defines the base direction of text that displayed, can have 3 values:
             * 
             * "ltr" - base direction is left to right.
             * "rtl" - base direction is right to left.
             * "auto" - base direction is contextual (defined by first strong character).
             * 
             */
            "textDir": string;
            /**
             * multiplies the existing matrix with an argument on left side
             * (matrix * this.matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * multiplies the existing matrix with an argument on right side
             * (this.matrix * matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
            /**
             * forms an elliptic arc segment
             * 
             */
            arcTo(): Function;
            /**
             * 
             * @param newText             
             */
            bidiPreprocess(newText: any): any;
            /**
             * closes a path
             * 
             */
            closePath(): Function;
            /**
             * connects a handler to an event on this shape
             * 
             * @param name             
             * @param object             
             * @param method             
             */
            connect(name: any, object: any, method: any): any;
            /**
             * forms a curve segment
             * 
             */
            curveTo(): Function;
            /**
             * Releases all internal resources owned by this shape. Once this method has been called,
             * the instance is considered destroyed and should not be used anymore.
             * 
             */
            destroy(): void;
            /**
             * connects a handler by token from an event on this shape
             * 
             * @param token             
             */
            disconnect(token: any): any;
            /**
             * Applies the right transform on text, according to renderer.
             * Finds the right transformation that should be applied on the text, according to renderer.
             * Was tested in:
             * 
             * Renderers:
             * canvas (FF, Chrome, Safari), vml (IE), svg (FF, Chrome, Safari, Opera), silverlight (IE8), svgWeb(FF, Chrome, Safari, Opera, IE).
             * 
             * Browsers:
             * IE [6,7,8], FF [3.6], Chrome (latest for February 2011), Safari [5.0.3], Opera [11.01].
             * 
             * @param text the string for manipulation, by default return value.             
             * @param textDir text direction direction.Can be:"ltr" - for left to right layout."rtl" - for right to left layout"auto" - for contextual layout: the first strong letter decides the direction.             
             */
            formatText(text: String, textDir: String): any;
            /**
             * returns a current value of the absolute mode
             * 
             */
            getAbsoluteMode(): any;
            /**
             * returns the bounding box {x, y, width, height} or null
             * 
             */
            getBoundingBox(): any;
            /**
             * 
             */
            getClip(): any;
            /**
             * returns a Node, which is used as
             * a source of events for this shape
             * 
             */
            getEventSource(): any;
            /**
             * Returns the current fill object or null
             * (see dojox/gfx.defaultLinearGradient,
             * dojox/gfx.defaultRadialGradient,
             * dojox/gfx.defaultPattern,
             * or dojo/Color)
             * 
             */
            getFill(): any;
            /**
             * returns the current font object or null
             * 
             */
            getFont(): any;
            /**
             * returns the last point in the path, or null
             * 
             */
            getLastPosition(): any;
            /**
             * Different graphics rendering subsystems implement shapes in different ways.  This
             * method provides access to the underlying graphics subsystem object.  Clients calling this
             * method and using the return value must be careful not to try sharing or using the underlying node
             * in a general way across renderer implementation.
             * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
             * 
             */
            getNode(): any;
            /**
             * Returns the parent Shape, Group or null if this Shape is unparented.
             * (see dojox/gfx/shape.Surface,
             * or dojox/gfx.Group)
             * 
             */
            getParent(): any;
            /**
             * returns the current Shape object or null
             * (see dojox/gfx.defaultPath,
             * dojox/gfx.defaultPolyline,
             * dojox/gfx.defaultRect,
             * dojox/gfx.defaultEllipse,
             * dojox/gfx.defaultCircle,
             * dojox/gfx.defaultLine,
             * or dojox/gfx.defaultImage)
             * 
             */
            getShape(): any;
            /**
             * Returns the current stroke object or null
             * (see dojox/gfx.defaultStroke)
             * 
             */
            getStroke(): any;
            /**
             * returns the current text object or null
             * 
             */
            getText(): any;
            /**
             * Returns the current transformation matrix applied to this Shape or null
             * 
             */
            getTransform(): any;
            /**
             * returns an array of four points or null
             * four points represent four corners of the untransformed bounding box
             * 
             */
            getTransformedBoundingBox(): any;
            /**
             * forms a horizontal line segment
             * 
             */
            hLineTo(): Function;
            /**
             * forms a line segment
             * 
             */
            lineTo(): Function;
            /**
             * forms a move segment
             * 
             */
            moveTo(): Function;
            /**
             * moves a shape to back of its parent's list of shapes
             * 
             */
            moveToBack(): Function;
            /**
             * moves a shape to front of its parent's list of shapes
             * 
             */
            moveToFront(): Function;
            /**
             * Connects an event to this shape.
             * 
             * @param type             
             * @param listener             
             */
            on(type: any, listener: any): any;
            /**
             * forms a quadratic curve segment
             * 
             */
            qCurveTo(): Function;
            /**
             * forms a quadratic smooth curve segment
             * 
             */
            qSmoothCurveTo(): Function;
            /**
             * removes the shape from its parent's list of shapes
             * 
             * @param silently if true, do not redraw a picture yet             
             */
            removeShape(silently: boolean): Function;
            /**
             * sets an absolute or relative mode for path points
             * 
             * @param mode true/false or "absolute"/"relative" to specify the mode             
             */
            setAbsoluteMode(mode: boolean): Function;
            /**
             * sets the clipping area of this shape.
             * The clipping area defines the shape area that will be effectively visible. Everything that
             * would be drawn outside of the clipping area will not be rendered.
             * The possible clipping area types are rectangle, ellipse, polyline and path, but all are not
             * supported by all the renderers. vml only supports rectangle clipping, while the gfx silverlight renderer does not
             * support path clipping.
             * The clip parameter defines the clipping area geometry, and should be an object with the following properties:
             * 
             * {x:Number, y:Number, width:Number, height:Number} for rectangular clip
             * {cx:Number, cy:Number, rx:Number, ry:Number} for ellipse clip
             * {points:Array} for polyline clip
             * {d:String} for a path clip.
             * The clip geometry coordinates are expressed in the coordinate system used to draw the shape. In other
             * words, the clipping area is defined in the shape parent coordinate system and the shape transform is automatically applied.
             * 
             * @param clip             
             */
            setClip(clip: any): void;
            /**
             * sets a fill object
             * (the default implementation simply ignores it)
             * 
             * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
             */
            setFill(fill: Object): Function;
            /**
             * sets a font for text
             * 
             * @param newFont             
             */
            setFont(newFont: any): Function;
            /**
             * forms a path using a shape
             * 
             * @param newShape an SVG path string or a path object (see dojox/gfx.defaultPath)             
             */
            setShape(newShape: Object): Function;
            /**
             * sets a stroke object
             * (the default implementation simply ignores it)
             * 
             * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
             */
            setStroke(stroke: Object): Function;
            /**
             * sets a text to be drawn along the path
             * 
             * @param newText             
             */
            setText(newText: any): Function;
            /**
             * sets a transformation matrix
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
             */
            setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            /**
             * forms a smooth curve segment
             * 
             */
            smoothCurveTo(): Function;
            /**
             * forms a vertical line segment
             * 
             */
            vLineTo(): Function;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.VectorFont.html
         *
         * An implementation of the SVG Font 1.1 spec, using dojox/gfx.
         * 
         * Basic interface:
         * 
         * var f = new gfx.Font(url|string);
         * surface||group.createVectorText(text)
         * .setFill(fill)
         * .setStroke(stroke)
         * .setFont(fontStyleObject);
         * The arguments passed to createVectorText are the same as you would
         * pass to surface||group.createText; the difference is that this
         * is entirely renderer-agnostic, and the return value is a subclass
         * of dojox/gfx.Group.
         * 
         * Note also that the "defaultText" object is slightly different:
         * { type:"vectortext", x:0, y:0, width:null, height: null,
         * text: "", align: "start", decoration: "none" }
         * 
         * ...as well as the "defaultVectorFont" object:
         * { type:"vectorfont", size:"10pt" }
         * 
         * The reason for this should be obvious: most of the style for the font is defined
         * by the font object itself.
         * 
         * Note that this will only render IF and WHEN you set the font.
         * 
         * @param url An url pointing to the SVG Font definition.     
         */
        class VectorFont {
            constructor(url: String);
            /**
             * based on the passed parameters, draw the given text using paths
             * defined by this font.
             * The main method of a VectorFont, draw() will take a text fragment
             * and render it in a set of groups and paths based on the parameters
             * passed.
             * 
             * The basics of drawing text are simple enough: pass it your text as
             * part of the textArgs object, pass size and family info as part of
             * the fontArgs object, pass at least a color as the fillArgs object,
             * and if you are looking to create an outline, pass the strokeArgs
             * object as well. fillArgs and strokeArgs are the same as any other
             * gfx fill and stroke arguments; they are simply applied to any path
             * object generated by this method.
             * 
             * Resulting GFX structure
             * The result of this function is a set of gfx objects in the following structure:
             * 
             * gfx.Group           //      the parent group generated by this function
             * +   gfx.Group[]     //      a group generated for each line of text
             *     +   gfx.Path[]  //      each glyph/character in the text
             * Scaling transformations (i.e. making the generated text the correct size)
             * are always applied to the parent Group that is generated (i.e. the top
             * node in the above example).  In theory, if you are looking to do any kind
             * of other transformations (such as a translation), you should apply it to
             * the group reference you pass to this method.  If you find that you need
             * to apply transformations to the group that is returned by this method,
             * you will need to reapply the scaling transformation as the last transform,
             * like so:
             * 
             * textGroup.setTransform(new matrix.Matrix2D([
             *     matrix.translate({ dx: dx, dy: dy }),
             *     textGroup.getTransform()
             * ]));
             * In general, this should never be necessary unless you are doing advanced
             * placement of your text.
             * 
             * Advanced Layout Functionality
             * In addition to straight text fragments, draw() supports a few advanced
             * operations not normally available with vector graphics:
             * 
             * Flow operations (i.e. wrap to a given width)
             * Fitting operations (i.e. find a best fit to a given rectangle)
             * To enable either, pass a fitting property along with the textArgs object.
             * The possible values are contained in the dojox/gfx.vectorFontFitting enum
             * (NONE, FLOW, FIT).
             * 
             * Flow fitting
             * Flow fitting requires both a passed size (in the fontArgs object) and a
             * width (passed with the textArgs object).  draw() will attempt to split the
             * passed text up into lines, at the closest whitespace according to the
             * passed width.  If a width is missing, it will revert to NONE.
             * 
             * Best fit fitting
             * Doing a "best fit" means taking the passed text, and finding the largest
             * size and line breaks so that it is the closest fit possible.  With best
             * fit, any size arguments are ignored; if a height is missing, it will revert
             * to NONE.
             * 
             * Other notes
             * a11y
             * Since the results of this method are rendering using pure paths (think
             * "convert to outlines" in Adobe Illustrator), any text rendered by this
             * code is NOT considered a11y-friendly.  If a11y is a requirement, we
             * suggest using other, more a11y-friendly methods.
             * 
             * Font sources
             * Always make sure that you are legally allowed to use any fonts that you
             * convert to SVG format; we claim no responsibility for any licensing
             * infractions that may be caused by the use of this code.
             * 
             * @param group             
             * @param textArgs             
             * @param fontArgs             
             * @param fillArgs             
             * @param strokeArgs             
             */
            draw(group: dojox.gfx.shape.Container, textArgs: dojox.gfx.Text, fontArgs: dojox.gfx.Font, fillArgs: dojox.gfx.Fill, strokeArgs: dojox.gfx.Stroke): any;
            /**
             * Find the baseline coord for alignment; adjust for scale if passed.
             * 
             * @param scale               Optionalan optional scaling factor.             
             */
            getBaseline(scale: number): number;
            /**
             * return the y coordinate that is the center of the viewbox.
             * 
             * @param scale               Optionalan optional scaling factor.             
             */
            getCenterline(scale: number): number;
            /**
             * return the height of a single line, sans leading, based on scale.
             * 
             * @param scale               Optionalan optional scaling factor.             
             */
            getLineHeight(scale: number): number;
            /**
             * Get the width of the rendered text without actually rendering it.
             * 
             * @param text The string to measure.             
             * @param scale               Optionalan optional scaling factor.             
             */
            getWidth(text: String, scale: number): number;
            /**
             * Return if we've loaded a font def, and the parsing was successful.
             * 
             */
            initialized(): boolean;
            /**
             * Load the passed SVG and send it to the parser for parsing.
             * 
             * @param url The svg to parse.             
             */
            load(url: String): Function;
            /**
             * Load the passed SVG and send it to the parser for parsing.
             * 
             * @param url The svg to parse.             
             */
            load(url:  dojo._base.url): Function;
            /**
             * 
             * @param font             
             */
            onLoad(font: dojox.gfx.VectorText): void;
            /**
             * 
             * @param url             
             */
            onLoadBegin(url: String): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/VectorText.html
         *
         * An implementation of the SVG Font 1.1 spec, using dojox/gfx.
         * 
         * Basic interface:
         * 
         * var f = new gfx.Font(url|string);
         * surface||group.createVectorText(text)
         * .setFill(fill)
         * .setStroke(stroke)
         * .setFont(fontStyleObject);
         * The arguments passed to createVectorText are the same as you would
         * pass to surface||group.createText; the difference is that this
         * is entirely renderer-agnostic, and the return value is a subclass
         * of dojox/gfx.Group.
         * 
         * Note also that the "defaultText" object is slightly different:
         * { type:"vectortext", x:0, y:0, width:null, height: null,
         * text: "", align: "start", decoration: "none" }
         * 
         * ...as well as the "defaultVectorFont" object:
         * { type:"vectorfont", size:"10pt" }
         * 
         * The reason for this should be obvious: most of the style for the font is defined
         * by the font object itself.
         * 
         * Note that this will only render IF and WHEN you set the font.
         * 
         * @param url An url pointing to the SVG Font definition.     
         */
        class VectorText {
            constructor(url: String);
            /**
             * based on the passed parameters, draw the given text using paths
             * defined by this font.
             * The main method of a VectorFont, draw() will take a text fragment
             * and render it in a set of groups and paths based on the parameters
             * passed.
             * 
             * The basics of drawing text are simple enough: pass it your text as
             * part of the textArgs object, pass size and family info as part of
             * the fontArgs object, pass at least a color as the fillArgs object,
             * and if you are looking to create an outline, pass the strokeArgs
             * object as well. fillArgs and strokeArgs are the same as any other
             * gfx fill and stroke arguments; they are simply applied to any path
             * object generated by this method.
             * 
             * Resulting GFX structure
             * The result of this function is a set of gfx objects in the following structure:
             * 
             * gfx.Group           //      the parent group generated by this function
             * +   gfx.Group[]     //      a group generated for each line of text
             *     +   gfx.Path[]  //      each glyph/character in the text
             * Scaling transformations (i.e. making the generated text the correct size)
             * are always applied to the parent Group that is generated (i.e. the top
             * node in the above example).  In theory, if you are looking to do any kind
             * of other transformations (such as a translation), you should apply it to
             * the group reference you pass to this method.  If you find that you need
             * to apply transformations to the group that is returned by this method,
             * you will need to reapply the scaling transformation as the last transform,
             * like so:
             * 
             * textGroup.setTransform(new matrix.Matrix2D([
             *     matrix.translate({ dx: dx, dy: dy }),
             *     textGroup.getTransform()
             * ]));
             * In general, this should never be necessary unless you are doing advanced
             * placement of your text.
             * 
             * Advanced Layout Functionality
             * In addition to straight text fragments, draw() supports a few advanced
             * operations not normally available with vector graphics:
             * 
             * Flow operations (i.e. wrap to a given width)
             * Fitting operations (i.e. find a best fit to a given rectangle)
             * To enable either, pass a fitting property along with the textArgs object.
             * The possible values are contained in the dojox/gfx.vectorFontFitting enum
             * (NONE, FLOW, FIT).
             * 
             * Flow fitting
             * Flow fitting requires both a passed size (in the fontArgs object) and a
             * width (passed with the textArgs object).  draw() will attempt to split the
             * passed text up into lines, at the closest whitespace according to the
             * passed width.  If a width is missing, it will revert to NONE.
             * 
             * Best fit fitting
             * Doing a "best fit" means taking the passed text, and finding the largest
             * size and line breaks so that it is the closest fit possible.  With best
             * fit, any size arguments are ignored; if a height is missing, it will revert
             * to NONE.
             * 
             * Other notes
             * a11y
             * Since the results of this method are rendering using pure paths (think
             * "convert to outlines" in Adobe Illustrator), any text rendered by this
             * code is NOT considered a11y-friendly.  If a11y is a requirement, we
             * suggest using other, more a11y-friendly methods.
             * 
             * Font sources
             * Always make sure that you are legally allowed to use any fonts that you
             * convert to SVG format; we claim no responsibility for any licensing
             * infractions that may be caused by the use of this code.
             * 
             * @param group             
             * @param textArgs             
             * @param fontArgs             
             * @param fillArgs             
             * @param strokeArgs             
             */
            draw(group: dojox.gfx.shape.Container, textArgs: dojox.gfx.Text, fontArgs: dojox.gfx.Font, fillArgs: dojox.gfx.Fill, strokeArgs: dojox.gfx.Stroke): any;
            /**
             * Find the baseline coord for alignment; adjust for scale if passed.
             * 
             * @param scale               Optionalan optional scaling factor.             
             */
            getBaseline(scale: number): number;
            /**
             * return the y coordinate that is the center of the viewbox.
             * 
             * @param scale               Optionalan optional scaling factor.             
             */
            getCenterline(scale: number): number;
            /**
             * return the height of a single line, sans leading, based on scale.
             * 
             * @param scale               Optionalan optional scaling factor.             
             */
            getLineHeight(scale: number): number;
            /**
             * Get the width of the rendered text without actually rendering it.
             * 
             * @param text The string to measure.             
             * @param scale               Optionalan optional scaling factor.             
             */
            getWidth(text: String, scale: number): number;
            /**
             * Return if we've loaded a font def, and the parsing was successful.
             * 
             */
            initialized(): boolean;
            /**
             * Load the passed SVG and send it to the parser for parsing.
             * 
             * @param url The svg to parse.             
             */
            load(url: String): Function;
            /**
             * Load the passed SVG and send it to the parser for parsing.
             * 
             * @param url The svg to parse.             
             */
            load(url:  dojo._base.url): Function;
            /**
             * 
             * @param font             
             */
            onLoad(font: dojox.gfx.VectorText): void;
            /**
             * 
             * @param url             
             */
            onLoadBegin(url: String): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/_base.html
         *
         * 
         */
        interface _base {
            /**
             * This module contains the core graphics Arc functions.
             * 
             */
            arc: Object;
            /**
             * 
             */
            bezierutils: Object;
            /**
             * This the graphics rendering bridge for W3C Canvas compliant browsers.
             * Since Canvas is an immediate mode graphics api, with no object graph or
             * eventing capabilities, use of this module alone will only add in drawing support.
             * The additional module, canvasWithEvents extends this module with additional support
             * for handling events on Canvas.  By default, the support for events is now included
             * however, if only drawing capabilities are needed, canvas event module can be disabled
             * using the dojoConfig option, canvasEvents:true|false.
             * The id of the Canvas renderer is 'canvas'.  This id can be used when switch Dojo's
             * graphics context between renderer implementations.  See dojox/gfx/_base.switchRenderer
             * API.
             * 
             */
            canvas: Object;
            /**
             * 
             */
            canvas_attach: Object;
            /**
             * 
             */
            canvasext: Object;
            /**
             * This the graphics rendering bridge for W3C Canvas compliant browsers which extends
             * the basic canvas drawing renderer bridge to add additional support for graphics events
             * on Shapes.
             * Since Canvas is an immediate mode graphics api, with no object graph or
             * eventing capabilities, use of the canvas module alone will only add in drawing support.
             * This additional module, canvasWithEvents extends this module with additional support
             * for handling events on Canvas.  By default, the support for events is now included
             * however, if only drawing capabilities are needed, canvas event module can be disabled
             * using the dojoConfig option, canvasEvents:true|false.
             * 
             */
            canvasWithEvents: Object;
            /**
             * points per centimeter (constant)
             * 
             */
            cm_in_pt: number;
            /**
             * An object defining the default Circle prototype.
             * 
             */
            defaultCircle: Object;
            /**
             * Defines the default Ellipse prototype.
             * 
             */
            defaultEllipse: Object;
            /**
             * An object specifying the default properties for a Font used in text operations.
             * 
             */
            defaultFont: Object;
            /**
             * Defines the default Image prototype.
             * 
             */
            defaultImage: Object;
            /**
             * An object defining the default Line prototype.
             * 
             */
            defaultLine: Object;
            /**
             * An object defining the default stylistic properties used for Linear Gradient fills.
             * Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.
             * 
             */
            defaultLinearGradient: Object;
            /**
             * Defines the default Path prototype object.
             * 
             */
            defaultPath: Object;
            /**
             * An object specifying the default properties for a Pattern using in fill operations.
             * 
             */
            defaultPattern: Object;
            /**
             * Defines the default PolyLine prototype.
             * 
             */
            defaultPolyline: Object;
            /**
             * An object specifying the default properties for RadialGradients using in fills patterns.
             * 
             */
            defaultRadialGradient: Object;
            /**
             * Defines the default Rect prototype.
             * 
             */
            defaultRect: Object;
            /**
             * A stroke defines stylistic properties that are used when drawing a path.
             * This object defines the default Stroke prototype.
             * 
             */
            defaultStroke: Object;
            /**
             * Defines the default Text prototype.
             * 
             */
            defaultText: Object;
            /**
             * Defines the default TextPath prototype.
             * 
             */
            defaultTextPath: Object;
            /**
             * 
             */
            defaultVectorFont: Object;
            /**
             * 
             */
            defaultVectorText: Object;
            /**
             * Defines how to fill a shape. Four types of fills can be used: solid, linear gradient, radial gradient and pattern.
             * See dojox/gfx.LinearGradient, dojox/gfx.RadialGradient and dojox/gfx.Pattern respectively for more information about the properties supported by each type.
             * 
             */
            Fill: Object;
            /**
             * An object specifying the properties for a Font used in text operations.
             * 
             */
            Font: Object;
            /**
             * 
             */
            fx: Object;
            /**
             * 
             */
            getDefault: Object;
            /**
             * 
             */
            gradient: Object;
            /**
             * 
             */
            gradutils: Object;
            /**
             * An object defining the default stylistic properties used for Linear Gradient fills.
             * Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.
             * 
             */
            LinearGradient: Object;
            /**
             * 
             */
            matrix: Object;
            /**
             * points per millimeter (constant)
             * 
             */
            mm_in_pt: number;
            /**
             * 
             */
            move: Object;
            /**
             * This module contains the core graphics Path API.
             * Path command format follows the W3C SVG 1.0 Path api.
             * 
             */
            path: Object;
            /**
             * 
             */
            pathSvgRegExp: RegExp;
            /**
             * a constant regular expression used to split a SVG/VML path into primitive components
             * 
             */
            pathVmlRegExp: RegExp;
            /**
             * An object specifying the default properties for a Pattern using in fill operations.
             * 
             */
            Pattern: Object;
            /**
             * Specifies the properties for RadialGradients using in fills patterns.
             * 
             */
            RadialGradient: Object;
            /**
             * Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the renderer
             * object to switch to.
             * 
             */
            renderer: string;
            /**
             * This module contains the core graphics Shape API.
             * Different graphics renderer implementation modules (svg, canvas, vml, silverlight, etc.) extend this
             * basic api to provide renderer-specific implementations for each shape.
             * 
             */
            shape: Object;
            /**
             * This the graphics rendering bridge for the Microsoft Silverlight plugin.
             * Silverlight is a faster implementation on IE6-8 than the default 2d graphics, VML
             * 
             */
            silverlight: Object;
            /**
             * 
             */
            silverlight_attach: Object;
            /**
             * A stroke defines stylistic properties that are used when drawing a path.
             * 
             */
            Stroke: Object;
            /**
             * This the graphics rendering bridge for browsers compliant with W3C SVG1.0.
             * This is the preferred renderer to use for interactive and accessible graphics.
             * 
             */
            svg: Object;
            /**
             * 
             */
            svgext: Object;
            /**
             * 
             */
            utils: Object;
            /**
             * 
             */
            vectorFontFitting: Object;
            /**
             * 
             */
            VectorText: Object;
            /**
             * This the default graphics rendering bridge for IE6-7.
             * This renderer is very slow.  For best performance on IE6-8, use Silverlight plugin.
             * IE9+ defaults to the standard W3C SVG renderer.
             * 
             */
            vml: Object;
            /**
             * 
             */
            Circle(): void;
            /**
             * creates a surface
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: String, height: String): dojox.gfx.Surface;
            /**
             * creates a surface
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: number, height: String): dojox.gfx.Surface;
            /**
             * creates a surface
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: String, height: number): dojox.gfx.Surface;
            /**
             * creates a surface
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: number, height: number): dojox.gfx.Surface;
            /**
             * Decompose a 2D matrix into translation, scaling, and rotation components.
             * This function decompose a matrix into four logical components:
             * translation, rotation, scaling, and one more rotation using SVD.
             * The components should be applied in following order:
             * 
             * [translate, rotate(angle2), scale, rotate(angle1)]
             * 
             * @param matrix a 2D matrix-like object             
             */
            decompose(matrix: dojox.gfx.matrix.Matrix2D): void;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * compares event sources, returns true if they are equal
             * 
             * @param a             
             * @param b             
             */
            equalSources(a: any, b: any): void;
            /**
             * converts a number to a string using a fixed notation
             * 
             * @param x number to be converted             
             * @param addSpace whether to add a space before a positive number             
             */
            formatNumber(x: number, addSpace: boolean): String;
            /**
             * 
             * @param url             
             */
            getVectorFont(url: String): any;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * converts a font object to a CSS font string
             * 
             * @param font font object (see dojox/gfx.defaultFont)             
             */
            makeFontString(font: Object): String;
            /**
             * copies the original object, and all copied properties from the
             * 'update' object
             * 
             * @param defaults the object to be cloned before updating             
             * @param update the object, which properties are to be cloned during updating             
             */
            makeParameters(defaults: Object, update: Object): Object;
            /**
             * a 2D matrix object
             * Normalizes a 2D matrix-like object. If arrays is passed,
             * all objects of the array are normalized and multiplied sequentially.
             * 
             * @param arg a 2D matrix-like object, a number, or an array of such objects             
             */
            Matrix2D(arg: Object): void;
            /**
             * 
             */
            Moveable(): void;
            /**
             * 
             */
            Mover(): void;
            /**
             * converts any legal color representation to normalized
             * dojo/Color object
             * 
             * @param color A color representation.             
             */
            normalizeColor(color: dojo._base.Color ): any;
            /**
             * converts any legal color representation to normalized
             * dojo/Color object
             * 
             * @param color A color representation.             
             */
            normalizeColor(color: any[]): any;
            /**
             * converts any legal color representation to normalized
             * dojo/Color object
             * 
             * @param color A color representation.             
             */
            normalizeColor(color: String): any;
            /**
             * converts any legal color representation to normalized
             * dojo/Color object
             * 
             * @param color A color representation.             
             */
            normalizeColor(color: Object): any;
            /**
             * converts any length value to pixels
             * 
             * @param len a length, e.g., '12pc'             
             */
            normalizedLength(len: String): number;
            /**
             * updates an existing object with properties from an 'update'
             * object
             * 
             * @param existed the target object to be updated             
             * @param update the 'update' object, whose properties will be used to updatethe existed object             
             */
            normalizeParameters(existed: Object, update: Object): Object;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Point(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * converts points to pixels
             * 
             * @param len a value in points             
             */
            pt2px(len: number): number;
            /**
             * converts pixels to points
             * 
             * @param len a value in pixels             
             */
            px2pt(len: number): number;
            /**
             * returns the current number of pixels per point.
             * 
             */
            px_in_pt(): number;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Rectangle(): void;
            /**
             * converts a CSS font string to a font object
             * Converts a CSS font string to a gfx font object. The CSS font
             * string components should follow the W3C specified order
             * (see http://www.w3.org/TR/CSS2/fonts.html#font-shorthand):
             * style, variant, weight, size, optional line height (will be
             * ignored), and family. Note that the Font.size attribute is limited to numeric CSS length.
             * 
             * @param str a CSS font string.             
             */
            splitFontString(str: String): Object;
            /**
             * 
             */
            Surface(): void;
            /**
             * switch the graphics implementation to the specified renderer.
             * 
             * @param renderer Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the rendererobject to switch to.             
             */
            switchTo(renderer: String): void;
            /**
             * switch the graphics implementation to the specified renderer.
             * 
             * @param renderer Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the rendererobject to switch to.             
             */
            switchTo(renderer: Object): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
            /**
             * 
             */
            VectorFont(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx._svgFontCache.html
         *
         * 
         */
        interface _svgFontCache {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/_gfxBidiSupport.html
         *
         * 
         */
        interface _gfxBidiSupport {
            /**
             * This module contains the core graphics Arc functions.
             * 
             */
            arc: Object;
            /**
             * 
             */
            bezierutils: Object;
            /**
             * This the graphics rendering bridge for W3C Canvas compliant browsers.
             * Since Canvas is an immediate mode graphics api, with no object graph or
             * eventing capabilities, use of this module alone will only add in drawing support.
             * The additional module, canvasWithEvents extends this module with additional support
             * for handling events on Canvas.  By default, the support for events is now included
             * however, if only drawing capabilities are needed, canvas event module can be disabled
             * using the dojoConfig option, canvasEvents:true|false.
             * The id of the Canvas renderer is 'canvas'.  This id can be used when switch Dojo's
             * graphics context between renderer implementations.  See dojox/gfx/_base.switchRenderer
             * API.
             * 
             */
            canvas: Object;
            /**
             * 
             */
            canvas_attach: Object;
            /**
             * 
             */
            canvasext: Object;
            /**
             * This the graphics rendering bridge for W3C Canvas compliant browsers which extends
             * the basic canvas drawing renderer bridge to add additional support for graphics events
             * on Shapes.
             * Since Canvas is an immediate mode graphics api, with no object graph or
             * eventing capabilities, use of the canvas module alone will only add in drawing support.
             * This additional module, canvasWithEvents extends this module with additional support
             * for handling events on Canvas.  By default, the support for events is now included
             * however, if only drawing capabilities are needed, canvas event module can be disabled
             * using the dojoConfig option, canvasEvents:true|false.
             * 
             */
            canvasWithEvents: Object;
            /**
             * points per centimeter (constant)
             * 
             */
            cm_in_pt: number;
            /**
             * An object defining the default Circle prototype.
             * 
             */
            defaultCircle: Object;
            /**
             * Defines the default Ellipse prototype.
             * 
             */
            defaultEllipse: Object;
            /**
             * An object specifying the default properties for a Font used in text operations.
             * 
             */
            defaultFont: Object;
            /**
             * Defines the default Image prototype.
             * 
             */
            defaultImage: Object;
            /**
             * An object defining the default Line prototype.
             * 
             */
            defaultLine: Object;
            /**
             * An object defining the default stylistic properties used for Linear Gradient fills.
             * Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.
             * 
             */
            defaultLinearGradient: Object;
            /**
             * Defines the default Path prototype object.
             * 
             */
            defaultPath: Object;
            /**
             * An object specifying the default properties for a Pattern using in fill operations.
             * 
             */
            defaultPattern: Object;
            /**
             * Defines the default PolyLine prototype.
             * 
             */
            defaultPolyline: Object;
            /**
             * An object specifying the default properties for RadialGradients using in fills patterns.
             * 
             */
            defaultRadialGradient: Object;
            /**
             * Defines the default Rect prototype.
             * 
             */
            defaultRect: Object;
            /**
             * A stroke defines stylistic properties that are used when drawing a path.
             * This object defines the default Stroke prototype.
             * 
             */
            defaultStroke: Object;
            /**
             * Defines the default Text prototype.
             * 
             */
            defaultText: Object;
            /**
             * Defines the default TextPath prototype.
             * 
             */
            defaultTextPath: Object;
            /**
             * 
             */
            defaultVectorFont: Object;
            /**
             * 
             */
            defaultVectorText: Object;
            /**
             * Defines how to fill a shape. Four types of fills can be used: solid, linear gradient, radial gradient and pattern.
             * See dojox/gfx.LinearGradient, dojox/gfx.RadialGradient and dojox/gfx.Pattern respectively for more information about the properties supported by each type.
             * 
             */
            Fill: Object;
            /**
             * An object specifying the properties for a Font used in text operations.
             * 
             */
            Font: Object;
            /**
             * 
             */
            fx: Object;
            /**
             * 
             */
            getDefault: Object;
            /**
             * 
             */
            gradient: Object;
            /**
             * 
             */
            gradutils: Object;
            /**
             * An object defining the default stylistic properties used for Linear Gradient fills.
             * Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.
             * 
             */
            LinearGradient: Object;
            /**
             * 
             */
            matrix: Object;
            /**
             * points per millimeter (constant)
             * 
             */
            mm_in_pt: number;
            /**
             * 
             */
            move: Object;
            /**
             * This module contains the core graphics Path API.
             * Path command format follows the W3C SVG 1.0 Path api.
             * 
             */
            path: Object;
            /**
             * 
             */
            pathSvgRegExp: RegExp;
            /**
             * a constant regular expression used to split a SVG/VML path into primitive components
             * 
             */
            pathVmlRegExp: RegExp;
            /**
             * An object specifying the default properties for a Pattern using in fill operations.
             * 
             */
            Pattern: Object;
            /**
             * Specifies the properties for RadialGradients using in fills patterns.
             * 
             */
            RadialGradient: Object;
            /**
             * Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the renderer
             * object to switch to.
             * 
             */
            renderer: string;
            /**
             * This module contains the core graphics Shape API.
             * Different graphics renderer implementation modules (svg, canvas, vml, silverlight, etc.) extend this
             * basic api to provide renderer-specific implementations for each shape.
             * 
             */
            shape: Object;
            /**
             * This the graphics rendering bridge for the Microsoft Silverlight plugin.
             * Silverlight is a faster implementation on IE6-8 than the default 2d graphics, VML
             * 
             */
            silverlight: Object;
            /**
             * 
             */
            silverlight_attach: Object;
            /**
             * A stroke defines stylistic properties that are used when drawing a path.
             * 
             */
            Stroke: Object;
            /**
             * This the graphics rendering bridge for browsers compliant with W3C SVG1.0.
             * This is the preferred renderer to use for interactive and accessible graphics.
             * 
             */
            svg: Object;
            /**
             * 
             */
            svgext: Object;
            /**
             * 
             */
            utils: Object;
            /**
             * 
             */
            vectorFontFitting: Object;
            /**
             * 
             */
            VectorText: Object;
            /**
             * This the default graphics rendering bridge for IE6-7.
             * This renderer is very slow.  For best performance on IE6-8, use Silverlight plugin.
             * IE9+ defaults to the standard W3C SVG renderer.
             * 
             */
            vml: Object;
            /**
             * 
             */
            Circle(): void;
            /**
             * creates a surface
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: String, height: String): dojox.gfx.Surface;
            /**
             * creates a surface
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: number, height: String): dojox.gfx.Surface;
            /**
             * creates a surface
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: String, height: number): dojox.gfx.Surface;
            /**
             * creates a surface
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: number, height: number): dojox.gfx.Surface;
            /**
             * Decompose a 2D matrix into translation, scaling, and rotation components.
             * This function decompose a matrix into four logical components:
             * translation, rotation, scaling, and one more rotation using SVD.
             * The components should be applied in following order:
             * 
             * [translate, rotate(angle2), scale, rotate(angle1)]
             * 
             * @param matrix a 2D matrix-like object             
             */
            decompose(matrix: dojox.gfx.matrix.Matrix2D): void;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * compares event sources, returns true if they are equal
             * 
             * @param a             
             * @param b             
             */
            equalSources(a: any, b: any): void;
            /**
             * converts a number to a string using a fixed notation
             * 
             * @param x number to be converted             
             * @param addSpace whether to add a space before a positive number             
             */
            formatNumber(x: number, addSpace: boolean): String;
            /**
             * 
             * @param url             
             */
            getVectorFont(url: String): any;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * converts a font object to a CSS font string
             * 
             * @param font font object (see dojox/gfx.defaultFont)             
             */
            makeFontString(font: Object): String;
            /**
             * copies the original object, and all copied properties from the
             * 'update' object
             * 
             * @param defaults the object to be cloned before updating             
             * @param update the object, which properties are to be cloned during updating             
             */
            makeParameters(defaults: Object, update: Object): Object;
            /**
             * a 2D matrix object
             * Normalizes a 2D matrix-like object. If arrays is passed,
             * all objects of the array are normalized and multiplied sequentially.
             * 
             * @param arg a 2D matrix-like object, a number, or an array of such objects             
             */
            Matrix2D(arg: Object): void;
            /**
             * 
             */
            Moveable(): void;
            /**
             * 
             */
            Mover(): void;
            /**
             * converts any legal color representation to normalized
             * dojo/Color object
             * 
             * @param color A color representation.             
             */
            normalizeColor(color: dojo._base.Color ): any;
            /**
             * converts any legal color representation to normalized
             * dojo/Color object
             * 
             * @param color A color representation.             
             */
            normalizeColor(color: any[]): any;
            /**
             * converts any legal color representation to normalized
             * dojo/Color object
             * 
             * @param color A color representation.             
             */
            normalizeColor(color: String): any;
            /**
             * converts any legal color representation to normalized
             * dojo/Color object
             * 
             * @param color A color representation.             
             */
            normalizeColor(color: Object): any;
            /**
             * converts any length value to pixels
             * 
             * @param len a length, e.g., '12pc'             
             */
            normalizedLength(len: String): number;
            /**
             * updates an existing object with properties from an 'update'
             * object
             * 
             * @param existed the target object to be updated             
             * @param update the 'update' object, whose properties will be used to updatethe existed object             
             */
            normalizeParameters(existed: Object, update: Object): Object;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Point(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * converts points to pixels
             * 
             * @param len a value in points             
             */
            pt2px(len: number): number;
            /**
             * converts pixels to points
             * 
             * @param len a value in pixels             
             */
            px2pt(len: number): number;
            /**
             * returns the current number of pixels per point.
             * 
             */
            px_in_pt(): number;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Rectangle(): void;
            /**
             * converts a CSS font string to a font object
             * Converts a CSS font string to a gfx font object. The CSS font
             * string components should follow the W3C specified order
             * (see http://www.w3.org/TR/CSS2/fonts.html#font-shorthand):
             * style, variant, weight, size, optional line height (will be
             * ignored), and family. Note that the Font.size attribute is limited to numeric CSS length.
             * 
             * @param str a CSS font string.             
             */
            splitFontString(str: String): Object;
            /**
             * 
             */
            Surface(): void;
            /**
             * switch the graphics implementation to the specified renderer.
             * 
             * @param renderer Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the rendererobject to switch to.             
             */
            switchTo(renderer: String): void;
            /**
             * switch the graphics implementation to the specified renderer.
             * 
             * @param renderer Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the rendererobject to switch to.             
             */
            switchTo(renderer: Object): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
            /**
             * 
             */
            VectorFont(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx._vectorFontCache.html
         *
         * 
         */
        interface _vectorFontCache {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/arc.html
         *
         * This module contains the core graphics Arc functions.
         * 
         */
        interface arc {
            /**
             * an object with properties of an arc around a unit circle from 0 to pi/4
             * 
             */
            curvePI4: Object;
            /**
             * calculates an arc as a series of Bezier curves
             * given the last point and a standard set of SVG arc parameters,
             * it returns an array of arrays of parameters to form a series of
             * absolute Bezier curves.
             * 
             * @param last a point-like object as a start of the arc             
             * @param rx a horizontal radius for the virtual ellipse             
             * @param ry a vertical radius for the virtual ellipse             
             * @param xRotg a rotation of an x axis of the virtual ellipse in degrees             
             * @param large which part of the ellipse will be used (the larger arc if true)             
             * @param sweep direction of the arc (CW if true)             
             * @param x the x coordinate of the end point of the arc             
             * @param y the y coordinate of the end point of the arc             
             */
            arcAsBezier(last: Object, rx: number, ry: number, xRotg: number, large: boolean, sweep: boolean, x: number, y: number): any[];
            /**
             * return a start point, 1st and 2nd control points, and an end point of
             * a an arc, which is reflected on the x axis
             * 
             * @param alpha angle in radians, the arc will be 2 * angle size             
             */
            unitArcAsBezier(alpha: number): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/bezierutils.html
         *
         * 
         */
        interface bezierutils {
            /**
             * Returns the length of the given bezier curve.
             * 
             * @param points The bezier points. Should be [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y] for a cubicbezier curve or [p1x, p1y, cx, cy, p2x, p2y] for a quadratic bezier curve.             
             */
            computeLength(points: number[]): number;
            /**
             * Returns the distance between the specified points.
             * 
             * @param x1             
             * @param y1             
             * @param x2             
             * @param y2             
             */
            distance(x1: any, y1: any, x2: any, y2: any): any;
            /**
             * 
             * @param points             
             * @param t             
             */
            splitBezierAtT(points: any, t: any): any;
            /**
             * Returns the t corresponding to the given length for the specified bezier curve.
             * 
             * @param points The bezier points. Should be [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y] for a cubicbezier curve or [p1x, p1y, cx, cy, p2x, p2y] for a quadratic bezier curve.             
             * @param length The length.             
             */
            tAtLength(points: number[], length: number): number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/canvas.html
         *
         * This the graphics rendering bridge for W3C Canvas compliant browsers.
         * Since Canvas is an immediate mode graphics api, with no object graph or
         * eventing capabilities, use of this module alone will only add in drawing support.
         * The additional module, canvasWithEvents extends this module with additional support
         * for handling events on Canvas.  By default, the support for events is now included
         * however, if only drawing capabilities are needed, canvas event module can be disabled
         * using the dojoConfig option, canvasEvents:true|false.
         * The id of the Canvas renderer is 'canvas'.  This id can be used when switch Dojo's
         * graphics context between renderer implementations.  See dojox/gfx/_base.switchRenderer
         * API.
         * 
         */
        interface canvas {
            /**
             * 
             */
            attachNode(): void;
            /**
             * 
             */
            attachSurface(): void;
            /**
             * 
             */
            Circle(): void;
            /**
             * creates a surface (Canvas)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px"             
             * @param height height of surface, e.g., "100px"             
             */
            createSurface(parentNode: HTMLElement, width: String, height: String): any;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Image(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Shape(): void;
            /**
             * 
             */
            Surface(): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/canvas_attach.html
         *
         * This the graphics rendering bridge for W3C Canvas compliant browsers.
         * Since Canvas is an immediate mode graphics api, with no object graph or
         * eventing capabilities, use of this module alone will only add in drawing support.
         * The additional module, canvasWithEvents extends this module with additional support
         * for handling events on Canvas.  By default, the support for events is now included
         * however, if only drawing capabilities are needed, canvas event module can be disabled
         * using the dojoConfig option, canvasEvents:true|false.
         * The id of the Canvas renderer is 'canvas'.  This id can be used when switch Dojo's
         * graphics context between renderer implementations.  See dojox/gfx/_base.switchRenderer
         * API.
         * 
         */
        interface canvas_attach {
            /**
             * 
             */
            attachNode(): void;
            /**
             * 
             */
            attachSurface(): void;
            /**
             * 
             */
            Circle(): void;
            /**
             * creates a surface (Canvas)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px"             
             * @param height height of surface, e.g., "100px"             
             */
            createSurface(parentNode: HTMLElement, width: String, height: String): any;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Image(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Shape(): void;
            /**
             * 
             */
            Surface(): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/canvasext.html
         *
         * A module that adds canvas-specific features to the gfx api. You should require this module
         * when your application specifically targets the HTML5 Canvas renderer.
         * 
         */
        interface canvasext {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/canvasWithEvents.html
         *
         * This the graphics rendering bridge for W3C Canvas compliant browsers which extends
         * the basic canvas drawing renderer bridge to add additional support for graphics events
         * on Shapes.
         * Since Canvas is an immediate mode graphics api, with no object graph or
         * eventing capabilities, use of the canvas module alone will only add in drawing support.
         * This additional module, canvasWithEvents extends this module with additional support
         * for handling events on Canvas.  By default, the support for events is now included
         * however, if only drawing capabilities are needed, canvas event module can be disabled
         * using the dojoConfig option, canvasEvents:true|false.
         * 
         */
        interface canvasWithEvents {
            /**
             * 
             */
            Circle(): void;
            /**
             * creates a surface (Canvas)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px"             
             * @param height height of surface, e.g., "100px"             
             */
            createSurface(parentNode: HTMLElement, width: String, height: String): void;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Image(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Shape(): void;
            /**
             * 
             */
            Surface(): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultCircle.html
         *
         * An object defining the default Circle prototype.
         * 
         */
        interface defaultCircle {
            /**
             * The X coordinate of the center of the circle, default value 0.
             * 
             */
            cx: number;
            /**
             * The Y coordinate of the center of the circle, default value 0.
             * 
             */
            cy: number;
            /**
             * The radius, default value 100.
             * 
             */
            r: number;
            /**
             * Specifies this object is a circle, value 'circle'
             * 
             */
            type: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultEllipse.html
         *
         * Defines the default Ellipse prototype.
         * 
         */
        interface defaultEllipse {
            /**
             * The X coordinate of the center of the ellipse, default value 0.
             * 
             */
            cx: number;
            /**
             * The Y coordinate of the center of the ellipse, default value 0.
             * 
             */
            cy: number;
            /**
             * The radius of the ellipse in the X direction, default value 200.
             * 
             */
            rx: number;
            /**
             * The radius of the ellipse in the Y direction, default value 200.
             * 
             */
            ry: number;
            /**
             * Specifies that this object is a type of Ellipse, value is 'ellipse'
             * 
             */
            type: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultFont.html
         *
         * An object specifying the default properties for a Font used in text operations.
         * 
         */
        interface defaultFont {
            /**
             * The font family, one of 'serif', 'sanserif', ..., default value 'serif'.
             * 
             */
            family: string;
            /**
             * The font size (including units), default value '10pt'.
             * 
             */
            size: string;
            /**
             * The font style, one of 'normal', 'bold', default value 'normal'.
             * 
             */
            style: string;
            /**
             * Specifies this object is a Font, value 'font'.
             * 
             */
            type: string;
            /**
             * The font variant, one of 'normal', ... , default value 'normal'.
             * 
             */
            variant: string;
            /**
             * The font weight, one of 'normal', ..., default value 'normal'.
             * 
             */
            weight: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultImage.html
         *
         * Defines the default Image prototype.
         * 
         */
        interface defaultImage {
            /**
             * The height of the image, default value 0.
             * 
             */
            height: number;
            /**
             * The src url of the image, defaults to empty string.
             * 
             */
            src: string;
            /**
             * Specifies this object is an image, value 'image'.
             * 
             */
            type: string;
            /**
             * The width of the image, default value 0.
             * 
             */
            width: number;
            /**
             * The X coordinate of the image's position, default value 0.
             * 
             */
            x: number;
            /**
             * The Y coordinate of the image's position, default value 0.
             * 
             */
            y: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultLine.html
         *
         * An object defining the default Line prototype.
         * 
         */
        interface defaultLine {
            /**
             * Specifies this is a Line, value 'line'
             * 
             */
            type: string;
            /**
             * The X coordinate of the start of the line, default value 0.
             * 
             */
            x1: number;
            /**
             * The X coordinate of the end of the line, default value 100.
             * 
             */
            x2: number;
            /**
             * The Y coordinate of the start of the line, default value 0.
             * 
             */
            y1: number;
            /**
             * The Y coordinate of the end of the line, default value 100.
             * 
             */
            y2: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultPath.html
         *
         * Defines the default Path prototype object.
         * 
         */
        interface defaultPath {
            /**
             * The path commands. See W32C SVG 1.0 specification.
             * Defaults to empty string value.
             * 
             */
            path: string;
            /**
             * Specifies this object is a Path, default value 'path'.
             * 
             */
            type: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultLinearGradient.html
         *
         * An object defining the default stylistic properties used for Linear Gradient fills.
         * Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.
         * 
         */
        interface defaultLinearGradient {
            /**
             * An array of colors at given offsets (from the start of the line).  The start of the line is
             * defined at offest 0 with the end of the line at offset 1.
             * Default value, [{ offset: 0, color: 'black'},{offset: 1, color: 'white'}], is a gradient from black to white.
             * 
             */
            colors: any[];
            /**
             * Specifies this object is a Linear Gradient, value 'linear'
             * 
             */
            type: string;
            /**
             * The X coordinate of the start of the virtual line along which the gradient is drawn, default value 0.
             * 
             */
            x1: number;
            /**
             * The X coordinate of the end of the virtual line along which the gradient is drawn, default value 100.
             * 
             */
            x2: number;
            /**
             * The Y coordinate of the start of the virtual line along which the gradient is drawn, default value 0.
             * 
             */
            y1: number;
            /**
             * The Y coordinate of the end of the virtual line along which the gradient is drawn, default value 100.
             * 
             */
            y2: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultPattern.html
         *
         * An object specifying the default properties for a Pattern using in fill operations.
         * 
         */
        interface defaultPattern {
            /**
             * The height of the pattern image, default value is 0.
             * 
             */
            height: number;
            /**
             * A url specifying the image to use for the pattern.
             * 
             */
            src: string;
            /**
             * Specifies this object is a Pattern, value 'pattern'.
             * 
             */
            type: string;
            /**
             * The width of the pattern image, default value is 0.
             * 
             */
            width: number;
            /**
             * The X coordinate of the position of the pattern, default value is 0.
             * 
             */
            x: number;
            /**
             * The Y coordinate of the position of the pattern, default value is 0.
             * 
             */
            y: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultPolyline.html
         *
         * Defines the default PolyLine prototype.
         * 
         */
        interface defaultPolyline {
            /**
             * An array of point objects [{x:0,y:0},...] defining the default polyline's line segments. Value is an empty array [].
             * 
             */
            points: any[];
            /**
             * Specifies this object is a PolyLine, default value 'polyline'.
             * 
             */
            type: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultRadialGradient.html
         *
         * An object specifying the default properties for RadialGradients using in fills patterns.
         * 
         */
        interface defaultRadialGradient {
            /**
             * An array of colors at given offsets (from the center of the radial gradient).
             * The center is defined at offest 0 with the outer edge of the gradient at offset 1.
             * Default value, [{ offset: 0, color: 'black'},{offset: 1, color: 'white'}], is a gradient from black to white.
             * 
             */
            colors: any[];
            /**
             * The X coordinate of the center of the radial gradient, default value 0.
             * 
             */
            cx: number;
            /**
             * The Y coordinate of the center of the radial gradient, default value 0.
             * 
             */
            cy: number;
            /**
             * The radius to the end of the radial gradient, default value 100.
             * 
             */
            r: number;
            /**
             * Specifies this is a RadialGradient, value 'radial'
             * 
             */
            type: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultRect.html
         *
         * Defines the default Rect prototype.
         * 
         */
        interface defaultRect {
            /**
             * The height of the default rectangle, value 100.
             * 
             */
            height: number;
            /**
             * The corner radius for the default rectangle, value 0.
             * 
             */
            r: number;
            /**
             * Specifies this default object is a type of Rect. Value is 'rect'
             * 
             */
            type: string;
            /**
             * The width of the default rectangle, value 100.
             * 
             */
            width: number;
            /**
             * The X coordinate of the default rectangles position, value 0.
             * 
             */
            x: number;
            /**
             * The Y coordinate of the default rectangle's position, value 0.
             * 
             */
            y: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultText.html
         *
         * Defines the default Text prototype.
         * 
         */
        interface defaultText {
            /**
             * The horizontal text alignment, one of 'start', 'end', 'center'. Default value 'start'.
             * 
             */
            align: string;
            /**
             * The text decoration , one of 'none', ... . Default value 'none'.
             * 
             */
            decoration: string;
            /**
             * Whether kerning is used on the text, boolean default value true.
             * 
             */
            kerning: boolean;
            /**
             * Whether the text is rotated, boolean default value false.
             * 
             */
            rotated: boolean;
            /**
             * The text to be displayed, default value empty string.
             * 
             */
            text: string;
            /**
             * Specifies this is a Text shape, value 'text'.
             * 
             */
            type: string;
            /**
             * The X coordinate of the text position, default value 0.
             * 
             */
            x: number;
            /**
             * The Y coordinate of the text position, default value 0.
             * 
             */
            y: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultStroke.html
         *
         * A stroke defines stylistic properties that are used when drawing a path.
         * This object defines the default Stroke prototype.
         * 
         */
        interface defaultStroke {
            /**
             * The endcap style of the path. One of 'butt', 'round', ... . Default value 'butt'.
             * 
             */
            cap: string;
            /**
             * The color of the stroke, default value 'black'.
             * 
             */
            color: string;
            /**
             * The join style to use when combining path segments. Default value 4.
             * 
             */
            join: number;
            /**
             * The style of the stroke, one of 'solid', ... . Default value 'solid'.
             * 
             */
            style: string;
            /**
             * Specifies this object is a type of Stroke, value 'stroke'.
             * 
             */
            type: string;
            /**
             * The width of a stroke, default value 1.
             * 
             */
            width: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultTextPath.html
         *
         * Defines the default TextPath prototype.
         * 
         */
        interface defaultTextPath {
            /**
             * The horizontal text alignment, one of 'start', 'end', 'center'. Default value 'start'.
             * 
             */
            align: string;
            /**
             * The text decoration , one of 'none', ... . Default value 'none'.
             * 
             */
            decoration: string;
            /**
             * Whether kerning is used on the text, boolean default value true.
             * 
             */
            kerning: boolean;
            /**
             * Whether the text is rotated, boolean default value false.
             * 
             */
            rotated: boolean;
            /**
             * The text to be displayed, default value empty string.
             * 
             */
            text: string;
            /**
             * Specifies this is a TextPath, value 'textpath'.
             * 
             */
            type: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultVectorFont.html
         *
         * 
         */
        interface defaultVectorFont {
            /**
             * 
             */
            family: Object;
            /**
             * 
             */
            size: string;
            /**
             * 
             */
            type: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.defaultVectorText.html
         *
         * 
         */
        interface defaultVectorText {
            /**
             * 
             */
            align: string;
            /**
             * 
             */
            decoration: string;
            /**
             * 
             */
            fitting: number;
            /**
             * 
             */
            height: Object;
            /**
             * 
             */
            leading: number;
            /**
             * 
             */
            text: string;
            /**
             * 
             */
            type: string;
            /**
             * 
             */
            width: Object;
            /**
             * 
             */
            x: number;
            /**
             * 
             */
            y: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Fill.html
         *
         * Defines how to fill a shape. Four types of fills can be used: solid, linear gradient, radial gradient and pattern.
         * See dojox/gfx.LinearGradient, dojox/gfx.RadialGradient and dojox/gfx.Pattern respectively for more information about the properties supported by each type.
         * 
         */
        interface Fill {
            /**
             * The color of a solid fill type.
             * 
             */
            color: string;
            /**
             * The type of fill. One of 'linear', 'radial', 'pattern' or undefined. If not specified, a solid fill is assumed.
             * 
             */
            type: Object;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Font.html
         *
         * An object specifying the properties for a Font used in text operations.
         * 
         */
        interface Font {
            /**
             * The font family, one of 'serif', 'sanserif', ..., default value 'serif'.
             * 
             */
            family: string;
            /**
             * The font size (including units), default value '10pt'.
             * 
             */
            size: string;
            /**
             * The font style, one of 'normal', 'bold', default value 'normal'.
             * 
             */
            style: string;
            /**
             * Specifies this object is a Font, value 'font'.
             * 
             */
            type: string;
            /**
             * The font variant, one of 'normal', ... , default value 'normal'.
             * 
             */
            variant: string;
            /**
             * The font weight, one of 'normal', ..., default value 'normal'.
             * 
             */
            weight: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/fx.html
         *
         * 
         */
        interface fx {
            /**
             * Returns an animation which will change fill color over time.
             * Only solid fill color is supported at the moment
             * 
             * @param args an object defining the animation setting.             
             */
            animateFill(args: Object): any;
            /**
             * Returns an animation which will change font properties over time.
             * 
             * @param args an object defining the animation setting.             
             */
            animateFont(args: Object): void;
            /**
             * Returns an animation which will change stroke properties over time.
             * 
             * @param args an object defining the animation setting.             
             */
            animateStroke(args: Object): void;
            /**
             * Returns an animation which will change transformation over time.
             * 
             * @param args an object defining the animation setting.             
             */
            animateTransform(args: Object): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/gradient.html
         *
         * 
         */
        interface gradient {
            /**
             * Returns a new gradient using the "VML algorithm" and suitable for VML.
             * 
             * @param matrix matrix to apply to a shape and its gradient             
             * @param gradient a linear gradient object to be transformed             
             * @param tl top-left corner of shape's bounding box             
             * @param rb right-bottom corner of shape's bounding box             
             * @param ttl top-left corner of shape's transformed bounding box             
             * @param trb right-bottom corner of shape's transformed bounding box             
             */
            project(matrix: dojox.gfx.matrix.Matrix2D , gradient: Object, tl: Object, rb: Object, ttl: Object, trb: Object): Object;
            /**
             * Returns a new gradient using the "VML algorithm" and suitable for VML.
             * 
             * @param matrix matrix to apply to a shape and its gradient             
             * @param gradient a linear gradient object to be transformed             
             * @param tl top-left corner of shape's bounding box             
             * @param rb right-bottom corner of shape's bounding box             
             * @param ttl top-left corner of shape's transformed bounding box             
             * @param trb right-bottom corner of shape's transformed bounding box             
             */
            project(matrix: any, gradient: Object, tl: Object, rb: Object, ttl: Object, trb: Object): Object;
            /**
             * Recalculates a gradient from 0-1 window to
             * "from"-"to" window blending and replicating colors,
             * if necessary.
             * 
             * @param stops input gradient as a list of colors with offsets(see dojox/gfx.defaultLinearGradient and dojox/gfx.defaultRadialGradient)             
             * @param from the beginning of the window, should be less than "to"             
             * @param to the end of the window, should be more than "from"             
             */
            rescale(stops: any[], from: number, to: number): any[];
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/gradutils.html
         *
         * 
         */
        interface gradutils {
            /**
             * sample a color from a gradient using a point
             * 
             * @param fill fill object             
             * @param pt point where to sample a color             
             */
            getColor(fill: Object, pt: Object): void;
            /**
             * reverses a gradient
             * 
             * @param fill fill object             
             */
            reverse(fill: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.LinearGradient.html
         *
         * An object defining the default stylistic properties used for Linear Gradient fills.
         * Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.
         * 
         */
        interface LinearGradient {
            /**
             * An array of colors at given offsets (from the start of the line).  The start of the line is
             * defined at offest 0 with the end of the line at offset 1.
             * Default value, [{ offset: 0, color: 'black'},{offset: 1, color: 'white'}], is a gradient from black to white.
             * 
             */
            colors: any[];
            /**
             * Specifies this object is a Linear Gradient, value 'linear'
             * 
             */
            type: string;
            /**
             * The X coordinate of the start of the virtual line along which the gradient is drawn, default value 0.
             * 
             */
            x1: number;
            /**
             * The X coordinate of the end of the virtual line along which the gradient is drawn, default value 100.
             * 
             */
            x2: number;
            /**
             * The Y coordinate of the start of the virtual line along which the gradient is drawn, default value 0.
             * 
             */
            y1: number;
            /**
             * The Y coordinate of the end of the virtual line along which the gradient is drawn, default value 100.
             * 
             */
            y2: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/move.html
         *
         * 
         */
        interface move {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/matrix.html
         *
         * 
         */
        interface matrix {
            /**
             * a matrix, which reflects points at x = 0 line: flipX * (x, y) == (-x, y)
             * 
             */
            flipX: Object;
            /**
             * a matrix, which reflects points at the origin of coordinates: flipXY * (x, y) == (-x, -y)
             * 
             */
            flipXY: Object;
            /**
             * a matrix, which reflects points at y = 0 line: flipY * (x, y) == (x, -y)
             * 
             */
            flipY: Object;
            /**
             * an identity matrix constant: identity * (x, y) == (x, y)
             * 
             */
            identity: Object;
            /**
             * creates a copy of a 2D matrix
             * 
             * @param matrix a 2D matrix-like object to be cloned             
             */
            clone(matrix: dojox.gfx.matrix.Matrix2D): dojox.gfx.matrix.Matrix2D;
            /**
             * inverts a 2D matrix
             * 
             * @param matrix a 2D matrix-like object to be inverted             
             */
            invert(matrix: dojox.gfx.matrix.Matrix2D): dojox.gfx.matrix.Matrix2D;
            /**
             * returns whether the specified matrix is the identity.
             * 
             * @param matrix a 2D matrix object to be tested             
             */
            isIdentity(matrix: dojox.gfx.matrix.Matrix2D): boolean;
            
            /**
             * combines matrices by multiplying them sequentially in the given order
             * 
             * @param matrix a 2D matrix-like object,all subsequent arguments are matrix-like objects too             
             */
            multiply(matrix: dojox.gfx.matrix.Matrix2D): any;
            /**
             * applies a matrix to a point
             * 
             * @param matrix a 2D matrix object to be applied             
             * @param a an x coordinate of a point, or a point             
             * @param b               Optionala y coordinate of a point             
             */
            multiplyPoint(matrix: dojox.gfx.matrix.Matrix2D, a: number, b: number): dojox.gfx.Point;
            /**
             * applies a matrix to a point
             * 
             * @param matrix a 2D matrix object to be applied             
             * @param a an x coordinate of a point, or a point             
             * @param b               Optionala y coordinate of a point             
             */
            multiplyPoint(matrix: dojox.gfx.matrix.Matrix2D, a:  dojox.gfx.Point, b: number): dojox.gfx.Point;
            /**
             * Applies a matrix to a rectangle.
             * The method applies the transformation on all corners of the
             * rectangle and returns the smallest rectangle enclosing the 4 transformed
             * points.
             * 
             * @param matrix a 2D matrix object to be applied.             
             * @param rect the rectangle to transform.             
             */
            multiplyRectangle(matrix: dojox.gfx.matrix.Matrix2D, rect: dojox.gfx.shape.Rect): dojox.gfx.Rectangle;
            /**
             * converts an object to a matrix, if necessary
             * Converts any 2D matrix-like object or an array of
             * such objects to a valid dojox/gfx/matrix.Matrix2D object.
             * 
             * @param matrix an object, which is converted to a matrix, if necessary             
             */
            normalize(matrix: Object): dojox.gfx.matrix.Matrix2D;
            /**
             * forms an orthogonal projection matrix
             * The resulting matrix is used to project points orthogonally on a vector,
             * which goes through the origin.
             * 
             * @param a a point-like object, which specifies a vector of projection, oran x coordinate value             
             * @param b               Optionala y coordinate value             
             */
            project(a: dojox.gfx.Point , b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms an orthogonal projection matrix
             * The resulting matrix is used to project points orthogonally on a vector,
             * which goes through the origin.
             * 
             * @param a a point-like object, which specifies a vector of projection, oran x coordinate value             
             * @param b               Optionala y coordinate value             
             */
            project(a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a reflection matrix
             * The resulting matrix is used to reflect points around a vector,
             * which goes through the origin.
             * 
             * @param a a point-like object, which specifies a vector of reflection, or an X value             
             * @param b               Optionala Y value             
             */
            reflect(a: dojox.gfx.Point , b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a reflection matrix
             * The resulting matrix is used to reflect points around a vector,
             * which goes through the origin.
             * 
             * @param a a point-like object, which specifies a vector of reflection, or an X value             
             * @param b               Optionala Y value             
             */
            reflect(a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a rotating matrix
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified angle.
             * 
             * @param angle an angle of rotation in radians (>0 for CW)             
             */
            rotate(angle: number): dojox.gfx.matrix.Matrix2D;
            /**
             * rotates a picture using a specified point as a center of rotation
             * Compare with dojox/gfx/matrix.rotate().
             * 
             * @param angle an angle of rotation in radians (>0 for CW)             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            rotateAt(angle: number, a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * rotates a picture using a specified point as a center of rotation
             * Compare with dojox/gfx/matrix.rotate().
             * 
             * @param angle an angle of rotation in radians (>0 for CW)             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            rotateAt(angle: number, a:  dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a rotating matrix
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified degree.
             * See dojox/gfx/matrix.rotate() for comparison.
             * 
             * @param degree an angle of rotation in degrees (>0 for CW)             
             */
            rotateg(degree: number): dojox.gfx.matrix.Matrix2D;
            /**
             * rotates a picture using a specified point as a center of rotation
             * Compare with dojox/gfx/matrix.rotateg().
             * 
             * @param degree an angle of rotation in degrees (>0 for CW)             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            rotategAt(degree: number, a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * rotates a picture using a specified point as a center of rotation
             * Compare with dojox/gfx/matrix.rotateg().
             * 
             * @param degree an angle of rotation in degrees (>0 for CW)             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            rotategAt(degree: number, a:  dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a scaling matrix
             * The resulting matrix is used to scale (magnify) points by specified offsets.
             * 
             * @param a a scaling factor used for the x coordinate, ora uniform scaling factor used for the both coordinates, ora point-like object, which specifies scale factors for both dimensions             
             * @param b               Optionala scaling factor used for the y coordinate             
             */
            scale(a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a scaling matrix
             * The resulting matrix is used to scale (magnify) points by specified offsets.
             * 
             * @param a a scaling factor used for the x coordinate, ora uniform scaling factor used for the both coordinates, ora point-like object, which specifies scale factors for both dimensions             
             * @param b               Optionala scaling factor used for the y coordinate             
             */
            scale(a:  dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * scales a picture using a specified point as a center of scaling
             * Compare with dojox/gfx/matrix.scale().
             * 
             * @param a a scaling factor used for the x coordinate, or a uniform scaling factor used for both coordinates             
             * @param b               Optionala scaling factor used for the y coordinate             
             * @param c an x component of a central point, or a central point             
             * @param d a y component of a central point             
             */
            scaleAt(a: number, b: number, c: number, d: number): dojox.gfx.matrix.Matrix2D;
            /**
             * scales a picture using a specified point as a center of scaling
             * Compare with dojox/gfx/matrix.scale().
             * 
             * @param a a scaling factor used for the x coordinate, or a uniform scaling factor used for both coordinates             
             * @param b               Optionala scaling factor used for the y coordinate             
             * @param c an x component of a central point, or a central point             
             * @param d a y component of a central point             
             */
            scaleAt(a: number, b: number, c: dojox.gfx.Point, d: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms an x skewing matrix
             * The resulting matrix is used to skew points in the x dimension
             * around the origin of coordinates (0, 0) by specified angle.
             * 
             * @param angle a skewing angle in radians             
             */
            skewX(angle: number): dojox.gfx.matrix.Matrix2D;
            /**
             * skews a picture along the x axis using a specified point as a center of skewing
             * Compare with dojox/gfx/matrix.skewX().
             * 
             * @param angle a skewing angle in radians             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            skewXAt(angle: number, a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * skews a picture along the x axis using a specified point as a center of skewing
             * Compare with dojox/gfx/matrix.skewX().
             * 
             * @param angle a skewing angle in radians             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            skewXAt(angle: number, a:  dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms an x skewing matrix
             * The resulting matrix is used to skew points in the x dimension
             * around the origin of coordinates (0, 0) by specified degree.
             * See dojox/gfx/matrix.skewX() for comparison.
             * 
             * @param degree a skewing angle in degrees             
             */
            skewXg(degree: number): dojox.gfx.matrix.Matrix2D;
            /**
             * skews a picture along the x axis using a specified point as a center of skewing
             * Compare with dojox/gfx/matrix.skewXg().
             * 
             * @param degree a skewing angle in degrees             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            skewXgAt(degree: number, a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * skews a picture along the x axis using a specified point as a center of skewing
             * Compare with dojox/gfx/matrix.skewXg().
             * 
             * @param degree a skewing angle in degrees             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            skewXgAt(degree: number, a:  dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a y skewing matrix
             * The resulting matrix is used to skew points in the y dimension
             * around the origin of coordinates (0, 0) by specified angle.
             * 
             * @param angle a skewing angle in radians             
             */
            skewY(angle: number): dojox.gfx.matrix.Matrix2D;
            /**
             * skews a picture along the y axis using a specified point as a center of skewing
             * Compare with dojox/gfx/matrix.skewY().
             * 
             * @param angle a skewing angle in radians             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            skewYAt(angle: number, a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * skews a picture along the y axis using a specified point as a center of skewing
             * Compare with dojox/gfx/matrix.skewY().
             * 
             * @param angle a skewing angle in radians             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            skewYAt(angle: number, a:  dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a y skewing matrix
             * The resulting matrix is used to skew points in the y dimension
             * around the origin of coordinates (0, 0) by specified degree.
             * See dojox/gfx/matrix.skewY() for comparison.
             * 
             * @param degree a skewing angle in degrees             
             */
            skewYg(degree: number): dojox.gfx.matrix.Matrix2D;
            /**
             * skews a picture along the y axis using a specified point as a center of skewing
             * Compare with dojox/gfx/matrix.skewYg().
             * 
             * @param degree a skewing angle in degrees             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            skewYgAt(degree: number, a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * skews a picture along the y axis using a specified point as a center of skewing
             * Compare with dojox/gfx/matrix.skewYg().
             * 
             * @param degree a skewing angle in degrees             
             * @param a an x component of a central point, or a central point             
             * @param b               Optionala y component of a central point             
             */
            skewYgAt(degree: number, a:  dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a translation matrix
             * The resulting matrix is used to translate (move) points by specified offsets.
             * 
             * @param a an x coordinate value, or a point-like object, which specifies offsets for both dimensions             
             * @param b               Optionala y coordinate value             
             */
            translate(a: number, b: number): dojox.gfx.matrix.Matrix2D;
            /**
             * forms a translation matrix
             * The resulting matrix is used to translate (move) points by specified offsets.
             * 
             * @param a an x coordinate value, or a point-like object, which specifies offsets for both dimensions             
             * @param b               Optionala y coordinate value             
             */
            translate(a:  dojox.gfx.Point, b: number): dojox.gfx.matrix.Matrix2D;
        }
        module matrix {
            /**
             * a 2D matrix object
             * Normalizes a 2D matrix-like object. If arrays is passed,
             * all objects of the array are normalized and multiplied sequentially.
             * 
             * @param arg a 2D matrix-like object, a number, or an array of such objects             
             */
            class Matrix2D {
                constructor(arg: Object);
            }
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Pattern.html
         *
         * An object specifying the default properties for a Pattern using in fill operations.
         * 
         */
        interface Pattern {
            /**
             * The height of the pattern image, default value is 0.
             * 
             */
            height: number;
            /**
             * A url specifying the image to use for the pattern.
             * 
             */
            src: string;
            /**
             * Specifies this object is a Pattern, value 'pattern'.
             * 
             */
            type: string;
            /**
             * The width of the pattern image, default value is 0.
             * 
             */
            width: number;
            /**
             * The X coordinate of the position of the pattern, default value is 0.
             * 
             */
            x: number;
            /**
             * The Y coordinate of the position of the pattern, default value is 0.
             * 
             */
            y: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.RadialGradient.html
         *
         * Specifies the properties for RadialGradients using in fills patterns.
         * 
         */
        interface RadialGradient {
            /**
             * An array of colors at given offsets (from the center of the radial gradient).
             * The center is defined at offest 0 with the outer edge of the gradient at offset 1.
             * Default value, [{ offset: 0, color: 'black'},{offset: 1, color: 'white'}], is a gradient from black to white.
             * 
             */
            colors: any[];
            /**
             * The X coordinate of the center of the radial gradient, default value 0.
             * 
             */
            cx: number;
            /**
             * The Y coordinate of the center of the radial gradient, default value 0.
             * 
             */
            cy: number;
            /**
             * The radius to the end of the radial gradient, default value 100.
             * 
             */
            r: number;
            /**
             * Specifies this is a RadialGradient, value 'radial'
             * 
             */
            type: string;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/shape.html
         *
         * This module contains the core graphics Shape API.
         * Different graphics renderer implementation modules (svg, canvas, vml, silverlight, etc.) extend this
         * basic api to provide renderer-specific implementations for each shape.
         * 
         */
        interface shape {
            
            /**
             * Returns the shape that matches the specified id.
             * 
             * @param id The unique identifier for this Shape.             
             */
            byId(id: String): dojox.gfx.shape.Shape;
            
            /**
             * Removes the specified shape from the registry.
             * 
             * @param s The shape to unregister.             
             * @param recurse               Optional            
             */
            dispose(s: dojox.gfx.shape.Shape, recurse: boolean): void;
            
            /**
             * Register the specified shape into the graphics registry.
             * 
             * @param s The shape to register.             
             */
            register(s: dojox.gfx.shape.Shape): number;
            
        }
        module shape {
            /**
             * a container of shapes, which can be used
             * as a foundation for renderer-specific groups, or as a way
             * to logically group shapes (e.g, to propagate matricies)
             * 
             */
            class Container { }
            /**
             * shape creators
             * 
             */
            class Creator { }
            /**
             * 
             */
            class Circle{}
            /**
             * 
             */
            class Ellipse{}
            /**
             * 
             */
            class Image{}
            /**
             * 
             */
            class Line{}
            /**
             * 
             */
            class Polyline{}
            /**
             * 
             */
            class Rect{}
            /**
             * 
             */
            class Shape{}
            /**
             * 
             */
            class Surface{}
            /**
             * 
             */
            class Text{}
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/silverlight_attach.html
         *
         * This the graphics rendering bridge for the Microsoft Silverlight plugin.
         * Silverlight is a faster implementation on IE6-8 than the default 2d graphics, VML
         * 
         */
        interface silverlight_attach {
            /**
             * creates a shape from a Node
             * 
             * @param node a Silverlight node             
             */
            attachNode(node: HTMLElement): void;
            /**
             * creates a surface from a Node
             * 
             * @param node a Silverlight node             
             */
            attachSurface(node: HTMLElement): void;
            /**
             * 
             */
            Circle(): void;
            /**
             * creates a surface (Silverlight)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px"             
             * @param height height of surface, e.g., "100px"             
             */
            createSurface(parentNode: HTMLElement, width: String, height: String): void;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Image(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Shape(): void;
            /**
             * 
             */
            Surface(): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/silverlight.html
         *
         * This the graphics rendering bridge for the Microsoft Silverlight plugin.
         * Silverlight is a faster implementation on IE6-8 than the default 2d graphics, VML
         * 
         */
        interface silverlight {
            /**
             * creates a shape from a Node
             * 
             * @param node a Silverlight node             
             */
            attachNode(node: HTMLElement): void;
            /**
             * creates a surface from a Node
             * 
             * @param node a Silverlight node             
             */
            attachSurface(node: HTMLElement): void;
            /**
             * 
             */
            Circle(): void;
            /**
             * creates a surface (Silverlight)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px"             
             * @param height height of surface, e.g., "100px"             
             */
            createSurface(parentNode: HTMLElement, width: String, height: String): void;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Image(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Shape(): void;
            /**
             * 
             */
            Surface(): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.Stroke.html
         *
         * A stroke defines stylistic properties that are used when drawing a path.
         * 
         */
        interface Stroke {
            /**
             * The endcap style of the path. One of 'butt', 'round', ... . Default value 'butt'.
             * 
             */
            cap: string;
            /**
             * The color of the stroke, default value 'black'.
             * 
             */
            color: string;
            /**
             * The join style to use when combining path segments. Default value 4.
             * 
             */
            join: number;
            /**
             * The style of the stroke, one of 'solid', ... . Default value 'solid'.
             * 
             */
            style: string;
            /**
             * The width of a stroke, default value 1.
             * 
             */
            width: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svgext.html
         *
         * A module that adds svg-specific features to the gfx api. You should require this module
         * when your application specifically targets the SVG renderer.
         * 
         */
        interface svgext {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/utils.html
         *
         * 
         */
        interface utils {
            /**
             * Takes a surface or a shape and populates it with an object produced by serialize().
             * 
             * @param parent The destination container for the deserialized shapes.             
             * @param object The shapes to deserialize.             
             */
            deserialize(parent:  dojox.gfx.shape.Shape, object: dojox.gfx.shape.Shape ): any;
            /**
             * Takes a surface or a shape and populates it with an object produced by serialize().
             * 
             * @param parent The destination container for the deserialized shapes.             
             * @param object The shapes to deserialize.             
             */
            deserialize(parent:  dojox.gfx.shape.Shape, object: any[]): any;
            /**
             * Takes a shape or a surface and applies a function "f" to in the context of "o"
             * (or global, if missing). If "shape" was a surface or a group, it applies the same
             * function to all children recursively effectively visiting all shapes of the underlying scene graph.
             * 
             * @param object The gfx container to iterate.             
             * @param f The function to apply.             
             * @param o               OptionalThe scope.             
             */
            forEach(object:  dojox.gfx.shape.Shape, f: Function, o: Object): void;
            /**
             * Takes a shape or a surface and applies a function "f" to in the context of "o"
             * (or global, if missing). If "shape" was a surface or a group, it applies the same
             * function to all children recursively effectively visiting all shapes of the underlying scene graph.
             * 
             * @param object The gfx container to iterate.             
             * @param f The function to apply.             
             * @param o               OptionalThe scope.             
             */
            forEach(object:  dojox.gfx.shape.Shape, f: String, o: Object): void;
            /**
             * Takes a shape or a surface and applies a function "f" to in the context of "o"
             * (or global, if missing). If "shape" was a surface or a group, it applies the same
             * function to all children recursively effectively visiting all shapes of the underlying scene graph.
             * 
             * @param object The gfx container to iterate.             
             * @param f The function to apply.             
             * @param o               OptionalThe scope.             
             */
            forEach(object:  dojox.gfx.shape.Shape, f: any[], o: Object): void;
            /**
             * Works just like deserialize() but takes a JSON representation of the object.
             * 
             * @param parent The destination container for the deserialized shapes.             
             * @param json The shapes to deserialize.             
             */
            fromJson(parent:  dojox.gfx.shape.Shape, json: String): any;
            /**
             * Takes a shape or a surface and returns an object, which describes underlying shapes.
             * 
             * @param object The container to serialize.             
             */
            serialize(object:  dojox.gfx.shape.Shape): any;
            /**
             * Works just like serialize() but returns a JSON string. If prettyPrint is true, the string is pretty-printed to make it more human-readable.
             * 
             * @param object The container to serialize.             
             * @param prettyPrint               OptionalIndicates whether the output string should be formatted.             
             */
            toJson(object:  dojox.gfx.shape.Shape, prettyPrint: boolean): String;
            /**
             * Function to serialize a GFX surface to SVG text.
             * Function to serialize a GFX surface to SVG text.  The value of this output
             * is that there are numerous serverside parser libraries that can render
             * SVG into images in various formats.  This provides a way that GFX objects
             * can be captured in a known format and sent serverside for serialization
             * into an image.
             * 
             * @param surface The GFX surface to serialize.             
             */
            toSvg(surface: dojox.gfx.shape.Surface): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg.html
         *
         * This the graphics rendering bridge for browsers compliant with W3C SVG1.0.
         * This is the preferred renderer to use for interactive and accessible graphics.
         * 
         */
        interface svg {
            /**
             * 
             */
            dasharray: Object;
            /**
             * 
             */
            useSvgWeb: boolean;
            /**
             * 
             */
            xmlns: Object;
            /**
             * creates a shape from a Node
             * 
             * @param node an SVG node             
             */
            attachNode(node: HTMLElement): void;
            /**
             * creates a surface from a Node
             * 
             * @param node an SVG node             
             */
            attachSurface(node: HTMLElement): void;
            /**
             * 
             */
            Circle(): void;
            /**
             * 
             * @param parentNode             
             * @param width             
             * @param height             
             */
            createSurface(parentNode: any, width: any, height: any): void;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * Adds the gfxElement to event.gfxTarget if none exists. This new
             * property will carry the GFX element associated with this event.
             * 
             * @param event The current input event (MouseEvent or TouchEvent)             
             * @param gfxElement The GFX target element             
             */
            fixTarget(event: Object, gfxElement: Object): void;
            /**
             * looks up a node by its external name
             * 
             * @param name an SVG external reference             
             */
            getRef(name: String): any;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Image(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Shape(): void;
            /**
             * 
             */
            Surface(): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx.vectorFontFitting.html
         *
         * 
         */
        interface vectorFontFitting {
            /**
             * 
             */
            FIT: number;
            /**
             * 
             */
            FLOW: number;
            /**
             * 
             */
            NONE: number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml.html
         *
         * This the default graphics rendering bridge for IE6-7.
         * This renderer is very slow.  For best performance on IE6-8, use Silverlight plugin.
         * IE9+ defaults to the standard W3C SVG renderer.
         * 
         */
        interface vml {
            /**
             * 
             */
            text_alignment: Object;
            /**
             * 
             */
            xmlns: string;
            /**
             * creates a shape from a Node
             * 
             * @param node a VML node             
             */
            attachNode(node: HTMLElement): void;
            /**
             * creates a surface from a Node
             * 
             * @param node a VML node             
             */
            attachSurface(node: HTMLElement): void;
            /**
             * 
             */
            Circle(): void;
            /**
             * creates a surface (VML)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: String, height: String): any;
            /**
             * creates a surface (VML)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: number, height: String): any;
            /**
             * creates a surface (VML)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: String, height: number): any;
            /**
             * creates a surface (VML)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: number, height: number): any;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * Adds the gfxElement to event.gfxTarget if none exists. This new
             * property will carry the GFX element associated with this event.
             * 
             * @param event The current input event (MouseEvent or TouchEvent)             
             * @param gfxElement The GFX target element             
             */
            fixTarget(event: Object, gfxElement: Object): void;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Image(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Shape(): void;
            /**
             * 
             */
            Surface(): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/filters.html
         *
         * A module that defines a minimal API to create SVG filter definition objects to be used with the
         * dojox/gfx/svgext/Shape.setFilter() API, as well as a set of predefined filters.
         * The module defines the following API:
         * - filters.createFilter(config, primitives) : Creates a filter object from the specified config and the
         * given filter primitives.
         * - a set of methods to create the corresponding SVG filter primitives, based on the same
         * naming as the specification (e.g. filters.feGaussianBlur() ). A filter primitive method follows the
         * following signature (taking feGaussianBlur as an example):
         *     filters.feGaussianBlur(properties, children?)
         *     filters.feGaussianBlur(children)
         * The "properties" parameter must define the primitive attributes as defined by the specification.
         * The "children" array parameter is an array of child filter primitives.
         * In addition to this API, the module provides the following predefined filters:
         * - filters.convolutions.boxBlur3,
         * - filters.convolutions.boxBlur5,
         * - filters.convolutions.verticalEdges,
         * - filters.convolutions.horizontalEdges,
         * - filters.convolutions.allEdges3,
         * - filters.convolutions.edgeEnhance,
         * - filters.shadows.fastSmallDropShadow,
         * - filters.shadows.fastDropShadow,
         * - filters.shadows.fastDropShadowLight,
         * - filters.shadows.dropShadow,
         * - filters.shadows.dropShadowLight,
         * - filters.shadows.smallDropShadow,
         * - filters.shadows.smallDropShadowLight,
         * - filters.blurs.blur1,
         * - filters.blurs.blur2,
         * - filters.blurs.blur4,
         * - filters.blurs.blur8,
         * - filters.blurs.glow,
         * - filters.colors.negate,
         * - filters.colors.sepia,
         * - filters.colors.grayscale,
         * - filters.colors.showRed,
         * - filters.colors.showGreen,
         * - filters.colors.showBlue,
         * - filters.colors.hueRotate60,
         * - filters.colors.hueRotate120,
         * - filters.colors.hueRotate180,
         * - filters.colors.hueRotate270,
         * - filters.miscs.thinEmbossDropShadow,
         * - filters.miscs.embossDropShadow,
         * - filters.miscs.largeEmbossDropShadow,
         * - filters.miscs.thinEmbossDropShadowLight,
         * - filters.miscs.embossDropShadowLight,
         * - filters.miscs.largeEmbossDropShadowLight,
         * - filters.miscs.fuzzy,
         * - filters.miscs.veryFuzzy,
         * - filters.miscs.melting,
         * - filters.miscs.impressionist,
         * - filters.miscs.holes,
         * - filters.miscs.holesComplement,
         * - filters.reliefs.bumpIn,
         * - filters.reliefs.bumpOut,
         * - filters.reliefs.thinEmboss,
         * - filters.reliefs.emboss,
         * - filters.reliefs.largeEmboss,
         * - filters.textures.paper,
         * - filters.textures.swirl,
         * - filters.textures.swirl2,
         * - filters.textures.gold
         * Note: the dojox/gfx/tests/test_filter.html test shows the rendering of all the predefined filters.
         * 
         */
        interface filters {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/renderer.html
         *
         * This module is an AMD loader plugin that loads the appropriate graphics renderer
         * implementation based on detected environment and current configuration settings.
         * 
         */
        interface renderer {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/registry.html
         *
         * 
         */
        interface registry {
            /**
             * Returns the shape that matches the specified id.
             * 
             * @param id The unique identifier for this Shape.             
             */
            byId(id: String): dojox.gfx.shape.Shape;
            /**
             * Removes the specified shape from the registry.
             * 
             * @param s The shape to unregister.             
             * @param recurse               Optional            
             */
            dispose(s: dojox.gfx.shape.Shape, recurse: boolean): void;
            /**
             * Register the specified shape into the graphics registry.
             * 
             * @param s The shape to register.             
             */
            register(s: dojox.gfx.shape.Shape): number;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.html
         *
         * This the graphics rendering bridge for browsers compliant with W3C SVG1.0.
         * This is the preferred renderer to use for interactive and accessible graphics.
         * 
         */
        interface svg_attach {
            /**
             * 
             */
            dasharray: Object;
            /**
             * 
             */
            useSvgWeb: boolean;
            /**
             * 
             */
            xmlns: Object;
            /**
             * creates a shape from a Node
             * 
             * @param node an SVG node             
             */
            attachNode(node: HTMLElement): void;
            /**
             * creates a surface from a Node
             * 
             * @param node an SVG node             
             */
            attachSurface(node: HTMLElement): void;
            /**
             * 
             */
            Circle(): void;
            /**
             * 
             * @param parentNode             
             * @param width             
             * @param height             
             */
            createSurface(parentNode: any, width: any, height: any): void;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * Adds the gfxElement to event.gfxTarget if none exists. This new
             * property will carry the GFX element associated with this event.
             * 
             * @param event The current input event (MouseEvent or TouchEvent)             
             * @param gfxElement The GFX target element             
             */
            fixTarget(event: Object, gfxElement: Object): void;
            /**
             * looks up a node by its external name
             * 
             * @param name an SVG external reference             
             */
            getRef(name: String): any;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Image(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Shape(): void;
            /**
             * 
             */
            Surface(): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        module svg_attach {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Circle.html
             *
             * 
             */
            class Circle {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a shape object (SVG)
                 * 
                 * @param newShape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Ellipse.html
             *
             * 
             */
            class Ellipse {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a shape object (SVG)
                 * 
                 * @param newShape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Image.html
             *
             * an image (SVG)
             * 
             */
            class Image {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets an image shape object (SVG)
                 * 
                 * @param newShape an image shape object             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Line.html
             *
             * 
             */
            class Line {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a shape object (SVG)
                 * 
                 * @param newShape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Group.html
             *
             * a group shape (SVG), which can be used
             * to logically group shapes (e.g, to propagate matricies)
             * 
             */
            class Group {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * adds a shape to a group/surface
                 * 
                 * @param shape an VML shape object             
                 */
                add(shape: dojox.gfx.shape.Shape): Function;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * removes all shapes from a group/surface
                 * 
                 */
                clear(): any;
                /**
                 * submits the current batch, append all pending child shapes to DOM
                 * 
                 */
                closeBatch(): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * creates a circle shape
                 * 
                 * @param circle a circle object (see dojox/gfx.defaultCircle)             
                 */
                createCircle(circle: Object): any;
                /**
                 * creates an ellipse shape
                 * 
                 * @param ellipse an ellipse object (see dojox/gfx.defaultEllipse)             
                 */
                createEllipse(ellipse: Object): any;
                /**
                 * creates a group shape
                 * 
                 */
                createGroup(): any;
                /**
                 * creates a image shape
                 * 
                 * @param image an image object (see dojox/gfx.defaultImage)             
                 */
                createImage(image: Object): any;
                /**
                 * creates a line shape
                 * 
                 * @param line a line object (see dojox/gfx.defaultLine)             
                 */
                createLine(line: Object): any;
                /**
                 * creates an instance of the passed shapeType class
                 * 
                 * @param shapeType a class constructor to create an instance of             
                 * @param rawShape properties to be passed in to the classes "setShape" method             
                 */
                createObject(shapeType: Function, rawShape: Object): any;
                /**
                 * creates a path shape
                 * 
                 * @param path a path object (see dojox/gfx.defaultPath)             
                 */
                createPath(path: Object): any;
                /**
                 * creates a polyline/polygon shape
                 * 
                 * @param points a points object (see dojox/gfx.defaultPolyline)or an Array of points             
                 */
                createPolyline(points: Object): any;
                /**
                 * creates a rectangle shape
                 * 
                 * @param rect a path object (see dojox/gfx.defaultRect)             
                 */
                createRect(rect: Object): any;
                /**
                 * creates a shape object based on its type; it is meant to be used
                 * by group-like objects
                 * 
                 * @param shape a shape descriptor object             
                 */
                createShape(shape: Object): any;
                /**
                 * creates a text shape
                 * 
                 * @param text a text object (see dojox/gfx.defaultText)             
                 */
                createText(text: Object): any;
                /**
                 * creates a text shape
                 * 
                 * @param text a textpath object (see dojox/gfx.defaultTextPath)             
                 */
                createTextPath(text: Object): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered disposed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * starts a new batch, subsequent new child shapes will be held in
                 * the batch instead of appending to the container directly
                 * 
                 */
                openBatch(): Function;
                /**
                 * remove a shape from a group/surface
                 * 
                 * @param shape an VML shape object             
                 * @param silently               Optionalif true, regenerate a picture             
                 */
                remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * sets a raw SVG node to be used by this shape
                 * 
                 * @param rawNode an SVG node             
                 */
                setRawNode(rawNode: HTMLElement): void;
                /**
                 * sets a shape object (SVG)
                 * 
                 * @param newShape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Path.html
             *
             * a path shape (SVG)
             * 
             */
            class Path {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * forms an elliptic arc segment
                 * 
                 */
                arcTo(): Function;
                /**
                 * closes a path
                 * 
                 */
                closePath(): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * forms a curve segment
                 * 
                 */
                curveTo(): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * returns a current value of the absolute mode
                 * 
                 */
                getAbsoluteMode(): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * returns the last point in the path, or null
                 * 
                 */
                getLastPosition(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * forms a horizontal line segment
                 * 
                 */
                hLineTo(): Function;
                /**
                 * forms a line segment
                 * 
                 */
                lineTo(): Function;
                /**
                 * forms a move segment
                 * 
                 */
                moveTo(): Function;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * forms a quadratic curve segment
                 * 
                 */
                qCurveTo(): Function;
                /**
                 * forms a quadratic smooth curve segment
                 * 
                 */
                qSmoothCurveTo(): Function;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets an absolute or relative mode for path points
                 * 
                 * @param mode true/false or "absolute"/"relative" to specify the mode             
                 */
                setAbsoluteMode(mode: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * forms a path using a shape (SVG)
                 * 
                 * @param newShape an SVG path string or a path object (see dojox/gfx.defaultPath)             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
                /**
                 * forms a smooth curve segment
                 * 
                 */
                smoothCurveTo(): Function;
                /**
                 * forms a vertical line segment
                 * 
                 */
                vLineTo(): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Polyline.html
             *
             * a polyline/polygon shape (SVG)
             * 
             */
            class Polyline {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a polyline/polygon shape object (SVG)
                 * 
                 * @param points a polyline/polygon shape object, or an array of points             
                 * @param closed             
                 */
                setShape(points: Object, closed: any): Function;
                /**
                 * sets a polyline/polygon shape object (SVG)
                 * 
                 * @param points a polyline/polygon shape object, or an array of points             
                 * @param closed             
                 */
                setShape(points: any[], closed: any): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Rect.html
             *
             * a rectangle shape (SVG)
             * 
             */
            class Rect {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a rectangle shape object (SVG)
                 * 
                 * @param newShape a rectangle shape object             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Shape.html
             *
             * SVG-specific implementation of dojox/gfx/shape.Shape methods
             * 
             */
            class Shape {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any[];
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param token             
                 */
                disconnect(token: any): void;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a shape object (SVG)
                 * 
                 * @param newShape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Surface.html
             *
             * a surface object to be used for drawings (SVG)
             * 
             */
            class Surface {
                constructor();
                /**
                 * 
                 */
                "isLoaded": boolean;
                /**
                 * Will be used as default for Text/TextPath/Group objects that created by this surface
                 * and textDir wasn't directly specified for them, though the bidi support was loaded.
                 * Can be set in two ways:
                 * 
                 * When the surface is created and textDir value passed to it as fourth
                 * parameter.
                 * Using the setTextDir(String) function, when this function is used the value
                 * of textDir propagates to all of it's children and the children of children (for Groups) etc.
                 * 
                 */
                "textDir": string;
                /**
                 * adds a shape to a group/surface
                 * 
                 * @param shape an VML shape object             
                 */
                add(shape: dojox.gfx.shape.Shape): Function;
                /**
                 * removes all shapes from a group/surface
                 * 
                 */
                clear(): any;
                /**
                 * submits the current batch, append all pending child shapes to DOM
                 * 
                 */
                closeBatch(): Function;
                /**
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any[];
                /**
                 * creates a circle shape
                 * 
                 * @param circle a circle object (see dojox/gfx.defaultCircle)             
                 */
                createCircle(circle: Object): any;
                /**
                 * creates an ellipse shape
                 * 
                 * @param ellipse an ellipse object (see dojox/gfx.defaultEllipse)             
                 */
                createEllipse(ellipse: Object): any;
                /**
                 * creates a group shape
                 * 
                 */
                createGroup(): any;
                /**
                 * creates a image shape
                 * 
                 * @param image an image object (see dojox/gfx.defaultImage)             
                 */
                createImage(image: Object): any;
                /**
                 * creates a line shape
                 * 
                 * @param line a line object (see dojox/gfx.defaultLine)             
                 */
                createLine(line: Object): any;
                /**
                 * creates an instance of the passed shapeType class
                 * 
                 * @param shapeType a class constructor to create an instance of             
                 * @param rawShape properties to be passed in to the classes "setShape" method             
                 */
                createObject(shapeType: Function, rawShape: Object): any;
                /**
                 * creates a path shape
                 * 
                 * @param path a path object (see dojox/gfx.defaultPath)             
                 */
                createPath(path: Object): any;
                /**
                 * creates a polyline/polygon shape
                 * 
                 * @param points a points object (see dojox/gfx.defaultPolyline)or an Array of points             
                 */
                createPolyline(points: Object): any;
                /**
                 * creates a rectangle shape
                 * 
                 * @param rect a path object (see dojox/gfx.defaultRect)             
                 */
                createRect(rect: Object): any;
                /**
                 * creates a shape object based on its type; it is meant to be used
                 * by group-like objects
                 * 
                 * @param shape a shape descriptor object             
                 */
                createShape(shape: Object): any;
                /**
                 * creates a text shape
                 * 
                 * @param text a text object (see dojox/gfx.defaultText)             
                 */
                createText(text: Object): any;
                /**
                 * creates a text shape
                 * 
                 * @param text a textpath object (see dojox/gfx.defaultTextPath)             
                 */
                createTextPath(text: Object): any;
                /**
                 * 
                 */
                createViewport(): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param token             
                 */
                disconnect(token: any): void;
                /**
                 * Returns the bounding box Rectangle for this shape.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * returns an object with properties "width" and "height"
                 * 
                 */
                getDimensions(): any;
                /**
                 * returns a node, which can be used to attach event listeners
                 * 
                 */
                getEventSource(): any;
                /**
                 * 
                 */
                getTextDir(): any;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * starts a new batch, subsequent new child shapes will be held in
                 * the batch instead of appending to the container directly
                 * 
                 */
                openBatch(): Function;
                /**
                 * remove a shape from a group/surface
                 * 
                 * @param shape an VML shape object             
                 * @param silently               Optionalif true, regenerate a picture             
                 */
                remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
                /**
                 * sets the width and height of the rawNode
                 * 
                 * @param width width of surface, e.g., "100px"             
                 * @param height height of surface, e.g., "100px"             
                 */
                setDimensions(width: String, height: String): Function;
                /**
                 * Used for propagation and change of textDir.
                 * newTextDir will be forced as textDir for all of it's children (Group/Text/TextPath).
                 * 
                 * @param newTextDir             
                 */
                setTextDir(newTextDir: String): void;
                /**
                 * 
                 * @param context             
                 * @param method             
                 */
                whenLoaded(context: Object, method: Function): void;
                /**
                 * 
                 * @param context             
                 * @param method             
                 */
                whenLoaded(context: any, method: Function): void;
                /**
                 * 
                 * @param context             
                 * @param method             
                 */
                whenLoaded(context: Object, method: String): void;
                /**
                 * 
                 * @param context             
                 * @param method             
                 */
                whenLoaded(context: any, method: String): void;
                /**
                 * local event, fired once when the surface is created
                 * asynchronously, used only when isLoaded is false, required
                 * only for Silverlight.
                 * 
                 * @param surface             
                 */
                onLoad(surface: dojox.gfx.shape.Surface): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.Text.html
             *
             * an anchored text (SVG)
             * 
             */
            class Text {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * Used for displaying bidi scripts in right layout.
                 * Defines the base direction of text that displayed, can have 3 values:
                 * 
                 * "ltr" - base direction is left to right.
                 * "rtl" - base direction is right to left.
                 * "auto" - base direction is contextual (defined by first strong character).
                 * 
                 */
                "textDir": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * 
                 * @param newShape             
                 */
                bidiPreprocess(newShape: any): any;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Applies the right transform on text, according to renderer.
                 * Finds the right transformation that should be applied on the text, according to renderer.
                 * Was tested in:
                 * 
                 * Renderers (browser for testing):
                 * 
                 * canvas (FF, Chrome, Safari),
                 * vml (IE),
                 * svg (FF, Chrome, Safari, Opera),
                 * silverlight (IE, Chrome, Safari, Opera),
                 * svgWeb(FF, Chrome, Safari, Opera, IE).
                 * Browsers [browser version that was tested]:
                 * 
                 * IE [6,7,8], FF [3.6],
                 * Chrome (latest for March 2011),
                 * Safari [5.0.3],
                 * Opera [11.01].
                 * 
                 * @param text the string for manipulation, by default return value.             
                 * @param textDir Text direction.Can be:"ltr" - for left to right layout."rtl" - for right to left layout"auto" - for contextual layout: the first strong letter decides the direction.             
                 */
                formatText(text: String, textDir: String): any;
                /**
                 * 
                 */
                getBoundingBox(): Object;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * returns the current font object or null
                 * 
                 */
                getFont(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * get the text width in pixels
                 * 
                 */
                getTextWidth(): number;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * sets a font for text
                 * 
                 * @param newFont a font object (see dojox/gfx.defaultFont) or a font string             
                 */
                setFont(newFont: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a text shape object (SVG)
                 * 
                 * @param newShape a text shape object             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.TextPath.html
             *
             * a textpath shape (SVG)
             * 
             */
            class TextPath {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * Used for displaying bidi scripts in right layout.
                 * Defines the base direction of text that displayed, can have 3 values:
                 * 
                 * "ltr" - base direction is left to right.
                 * "rtl" - base direction is right to left.
                 * "auto" - base direction is contextual (defined by first strong character).
                 * 
                 */
                "textDir": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * forms an elliptic arc segment
                 * 
                 */
                arcTo(): Function;
                /**
                 * 
                 * @param newText             
                 */
                bidiPreprocess(newText: any): any;
                /**
                 * closes a path
                 * 
                 */
                closePath(): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * forms a curve segment
                 * 
                 */
                curveTo(): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Applies the right transform on text, according to renderer.
                 * Finds the right transformation that should be applied on the text, according to renderer.
                 * Was tested in:
                 * 
                 * Renderers:
                 * canvas (FF, Chrome, Safari), vml (IE), svg (FF, Chrome, Safari, Opera), silverlight (IE8), svgWeb(FF, Chrome, Safari, Opera, IE).
                 * 
                 * Browsers:
                 * IE [6,7,8], FF [3.6], Chrome (latest for February 2011), Safari [5.0.3], Opera [11.01].
                 * 
                 * @param text the string for manipulation, by default return value.             
                 * @param textDir text direction direction.Can be:"ltr" - for left to right layout."rtl" - for right to left layout"auto" - for contextual layout: the first strong letter decides the direction.             
                 */
                formatText(text: String, textDir: String): any;
                /**
                 * returns a current value of the absolute mode
                 * 
                 */
                getAbsoluteMode(): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * returns the current font object or null
                 * 
                 */
                getFont(): any;
                /**
                 * returns the last point in the path, or null
                 * 
                 */
                getLastPosition(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * returns the current text object or null
                 * 
                 */
                getText(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * forms a horizontal line segment
                 * 
                 */
                hLineTo(): Function;
                /**
                 * forms a line segment
                 * 
                 */
                lineTo(): Function;
                /**
                 * forms a move segment
                 * 
                 */
                moveTo(): Function;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * forms a quadratic curve segment
                 * 
                 */
                qCurveTo(): Function;
                /**
                 * forms a quadratic smooth curve segment
                 * 
                 */
                qSmoothCurveTo(): Function;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets an absolute or relative mode for path points
                 * 
                 * @param mode true/false or "absolute"/"relative" to specify the mode             
                 */
                setAbsoluteMode(mode: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (SVG)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * sets a font for text
                 * 
                 * @param newFont             
                 */
                setFont(newFont: any): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * forms a path using a shape (SVG)
                 * 
                 * @param newShape an SVG path string or a path object (see dojox/gfx.defaultPath)             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (SVG)
                 * 
                 * @param stroke a stroke object (see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a text to be drawn along the path
                 * 
                 * @param newText             
                 */
                setText(newText: any): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
                /**
                 * forms a smooth curve segment
                 * 
                 */
                smoothCurveTo(): Function;
                /**
                 * forms a vertical line segment
                 * 
                 */
                vLineTo(): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.dasharray.html
             *
             * 
             */
            interface dasharray {
                /**
                 * 
                 */
                dash: any[];
                /**
                 * 
                 */
                dashdot: any[];
                /**
                 * 
                 */
                dot: any[];
                /**
                 * 
                 */
                longdash: any[];
                /**
                 * 
                 */
                longdashdot: any[];
                /**
                 * 
                 */
                longdashdotdot: any[];
                /**
                 * 
                 */
                shortdash: any[];
                /**
                 * 
                 */
                shortdashdot: any[];
                /**
                 * 
                 */
                shortdashdotdot: any[];
                /**
                 * 
                 */
                shortdot: any[];
                /**
                 * 
                 */
                solid: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/svg_attach.xmlns.html
             *
             * 
             */
            interface xmlns {
                /**
                 * 
                 */
                svg: string;
                /**
                 * 
                 */
                xlink: string;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.html
         *
         * This the default graphics rendering bridge for IE6-7.
         * This renderer is very slow.  For best performance on IE6-8, use Silverlight plugin.
         * IE9+ defaults to the standard W3C SVG renderer.
         * 
         */
        interface vml_attach {
            /**
             * 
             */
            text_alignment: Object;
            /**
             * 
             */
            xmlns: string;
            /**
             * creates a shape from a Node
             * 
             * @param node a VML node             
             */
            attachNode(node: HTMLElement): void;
            /**
             * creates a surface from a Node
             * 
             * @param node a VML node             
             */
            attachSurface(node: HTMLElement): void;
            /**
             * 
             */
            Circle(): void;
            /**
             * creates a surface (VML)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: String, height: String): any;
            /**
             * creates a surface (VML)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: number, height: String): any;
            /**
             * creates a surface (VML)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: String, height: number): any;
            /**
             * creates a surface (VML)
             * 
             * @param parentNode a parent node             
             * @param width width of surface, e.g., "100px" or 100             
             * @param height height of surface, e.g., "100px" or 100             
             */
            createSurface(parentNode: HTMLElement, width: number, height: number): any;
            /**
             * 
             */
            Ellipse(): void;
            /**
             * Adds the gfxElement to event.gfxTarget if none exists. This new
             * property will carry the GFX element associated with this event.
             * 
             * @param event The current input event (MouseEvent or TouchEvent)             
             * @param gfxElement The GFX target element             
             */
            fixTarget(event: Object, gfxElement: Object): void;
            /**
             * 
             */
            Group(): void;
            /**
             * 
             */
            Image(): void;
            /**
             * 
             */
            Line(): void;
            /**
             * 
             */
            Path(): void;
            /**
             * 
             */
            Polyline(): void;
            /**
             * 
             */
            Rect(): void;
            /**
             * 
             */
            Shape(): void;
            /**
             * 
             */
            Surface(): void;
            /**
             * 
             */
            Text(): void;
            /**
             * 
             */
            TextPath(): void;
        }
        module vml_attach {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Circle.html
             *
             * a circle shape (VML)
             * 
             */
            class Circle {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a circle shape object (VML)
                 * 
                 * @param newShape a circle shape object             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Ellipse.html
             *
             * an ellipse shape (VML)
             * 
             */
            class Ellipse {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets an ellipse shape object (VML)
                 * 
                 * @param newShape an ellipse shape object             
                 */
                setShape(newShape: Object): any;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Image.html
             *
             * an image (VML)
             * 
             */
            class Image {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets an image shape object (VML)
                 * 
                 * @param newShape an image shape object             
                 */
                setShape(newShape: Object): any;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Line.html
             *
             * a line shape (VML)
             * 
             * @param rawNode     
             */
            class Line {
                constructor(rawNode: any);
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a line shape object (VML)
                 * 
                 * @param newShape a line shape object             
                 */
                setShape(newShape: Object): any;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Group.html
             *
             * a group shape (VML), which can be used
             * to logically group shapes (e.g, to propagate matricies)
             * 
             */
            class Group {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * 
                 * @param shape             
                 */
                add(shape: any): Function;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * removes all shapes from a group/surface
                 * 
                 */
                clear(): any;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * creates a circle shape
                 * 
                 * @param circle a circle object (see dojox/gfx.defaultCircle)             
                 */
                createCircle(circle: Object): any;
                /**
                 * creates an ellipse shape
                 * 
                 * @param ellipse an ellipse object (see dojox/gfx.defaultEllipse)             
                 */
                createEllipse(ellipse: Object): any;
                /**
                 * creates a VML group shape
                 * 
                 */
                createGroup(): any;
                /**
                 * creates a VML image shape
                 * 
                 * @param image an image object (see dojox/gfx.defaultImage)             
                 */
                createImage(image: Object): any;
                /**
                 * creates a line shape
                 * 
                 * @param line a line object (see dojox/gfx.defaultLine)             
                 */
                createLine(line: Object): any;
                /**
                 * creates an instance of the passed shapeType class
                 * 
                 * @param shapeType a class constructor to create an instance of             
                 * @param rawShape properties to be passed in to the classes "setShape" method             
                 */
                createObject(shapeType: Function, rawShape: Object): any;
                /**
                 * creates a path shape
                 * 
                 * @param path a path object (see dojox/gfx.defaultPath)             
                 */
                createPath(path: Object): any;
                /**
                 * creates a polyline/polygon shape
                 * 
                 * @param points a points object (see dojox/gfx.defaultPolyline)or an Array of points             
                 */
                createPolyline(points: Object): any;
                /**
                 * creates a rectangle shape
                 * 
                 * @param rect a path object (see dojox/gfx.defaultRect)             
                 */
                createRect(rect: Object): any;
                /**
                 * creates a shape object based on its type; it is meant to be used
                 * by group-like objects
                 * 
                 * @param shape a shape descriptor object             
                 */
                createShape(shape: Object): any;
                /**
                 * creates a text shape
                 * 
                 * @param text a text object (see dojox/gfx.defaultText)             
                 */
                createText(text: Object): any;
                /**
                 * creates a text shape
                 * 
                 * @param text a textpath object (see dojox/gfx.defaultTextPath)             
                 */
                createTextPath(text: Object): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered disposed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * remove a shape from a group/surface
                 * 
                 * @param shape a VML shape object             
                 * @param silently               Optionalif true, regenerate a picture             
                 */
                remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a shape object
                 * (the default implementation simply ignores it)
                 * 
                 * @param shape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
                 */
                setShape(shape: Object): Function;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Polyline.html
             *
             * a polyline/polygon shape (VML)
             * 
             * @param rawNode     
             */
            class Polyline {
                constructor(rawNode: any);
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a polyline/polygon shape object (VML)
                 * 
                 * @param points a polyline/polygon shape object, or an array of points             
                 * @param closed               Optionalif true, close the polyline explicitly             
                 */
                setShape(points: Object, closed: boolean): any;
                /**
                 * sets a polyline/polygon shape object (VML)
                 * 
                 * @param points a polyline/polygon shape object, or an array of points             
                 * @param closed               Optionalif true, close the polyline explicitly             
                 */
                setShape(points: any[], closed: boolean): any;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Rect.html
             *
             * a rectangle shape (VML)
             * 
             */
            class Rect {
                constructor();
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a rectangle shape object (VML)
                 * 
                 * @param newShape a rectangle shape object             
                 */
                setShape(newShape: Object): any;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Shape.html
             *
             * VML-specific implementation of dojox/gfx/shape.Shape methods
             * 
             */
            class Shape {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a shape object
                 * (the default implementation simply ignores it)
                 * 
                 * @param shape a shape object(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)             
                 */
                setShape(shape: Object): Function;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Surface.html
             *
             * a surface object to be used for drawings (VML)
             * 
             */
            class Surface {
                constructor();
                /**
                 * 
                 */
                "isLoaded": boolean;
                /**
                 * Will be used as default for Text/TextPath/Group objects that created by this surface
                 * and textDir wasn't directly specified for them, though the bidi support was loaded.
                 * Can be set in two ways:
                 * 
                 * When the surface is created and textDir value passed to it as fourth
                 * parameter.
                 * Using the setTextDir(String) function, when this function is used the value
                 * of textDir propagates to all of it's children and the children of children (for Groups) etc.
                 * 
                 */
                "textDir": string;
                /**
                 * 
                 * @param shape             
                 */
                add(shape: any): Function;
                /**
                 * removes all shapes from a group/surface
                 * 
                 */
                clear(): any;
                /**
                 * submits the current batch, append all pending child shapes to DOM
                 * On canvas, this method flushes the pending redraws queue.
                 * 
                 */
                closeBatch(): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * creates a circle shape
                 * 
                 * @param circle a circle object (see dojox/gfx.defaultCircle)             
                 */
                createCircle(circle: Object): any;
                /**
                 * creates an ellipse shape
                 * 
                 * @param ellipse an ellipse object (see dojox/gfx.defaultEllipse)             
                 */
                createEllipse(ellipse: Object): any;
                /**
                 * creates a VML group shape
                 * 
                 */
                createGroup(): any;
                /**
                 * creates a VML image shape
                 * 
                 * @param image an image object (see dojox/gfx.defaultImage)             
                 */
                createImage(image: Object): any;
                /**
                 * creates a line shape
                 * 
                 * @param line a line object (see dojox/gfx.defaultLine)             
                 */
                createLine(line: Object): any;
                /**
                 * creates an instance of the passed shapeType class
                 * 
                 * @param shapeType a class constructor to create an instance of             
                 * @param rawShape properties to be passed in to the classes "setShape" method             
                 */
                createObject(shapeType: Function, rawShape: Object): any;
                /**
                 * creates a path shape
                 * 
                 * @param path a path object (see dojox/gfx.defaultPath)             
                 */
                createPath(path: Object): any;
                /**
                 * creates a polyline/polygon shape
                 * 
                 * @param points a points object (see dojox/gfx.defaultPolyline)or an Array of points             
                 */
                createPolyline(points: Object): any;
                /**
                 * creates a rectangle shape
                 * 
                 * @param rect a path object (see dojox/gfx.defaultRect)             
                 */
                createRect(rect: Object): any;
                /**
                 * creates a shape object based on its type; it is meant to be used
                 * by group-like objects
                 * 
                 * @param shape a shape descriptor object             
                 */
                createShape(shape: Object): any;
                /**
                 * creates a text shape
                 * 
                 * @param text a text object (see dojox/gfx.defaultText)             
                 */
                createText(text: Object): any;
                /**
                 * creates a text shape
                 * 
                 * @param text a textpath object (see dojox/gfx.defaultTextPath)             
                 */
                createTextPath(text: Object): any;
                /**
                 * 
                 */
                createViewport(): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Returns the bounding box Rectangle for this shape.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * returns an object with properties "width" and "height"
                 * 
                 */
                getDimensions(): any;
                /**
                 * returns a node, which can be used to attach event listeners
                 * 
                 */
                getEventSource(): any;
                /**
                 * 
                 */
                getTextDir(): any;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * starts a new batch, subsequent new child shapes will be held in
                 * the batch instead of appending to the container directly.
                 * Because the canvas renderer has no DOM hierarchy, the canvas implementation differs
                 * such that it suspends the repaint requests for this container until the current batch is closed by a call to closeBatch().
                 * 
                 */
                openBatch(): Function;
                /**
                 * remove a shape from a group/surface
                 * 
                 * @param shape a VML shape object             
                 * @param silently               Optionalif true, regenerate a picture             
                 */
                remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
                /**
                 * sets the width and height of the rawNode
                 * 
                 * @param width width of surface, e.g., "100px"             
                 * @param height height of surface, e.g., "100px"             
                 */
                setDimensions(width: String, height: String): Function;
                /**
                 * Used for propagation and change of textDir.
                 * newTextDir will be forced as textDir for all of it's children (Group/Text/TextPath).
                 * 
                 * @param newTextDir             
                 */
                setTextDir(newTextDir: String): void;
                /**
                 * 
                 * @param context             
                 * @param method             
                 */
                whenLoaded(context: Object, method: Function): void;
                /**
                 * 
                 * @param context             
                 * @param method             
                 */
                whenLoaded(context: any, method: Function): void;
                /**
                 * 
                 * @param context             
                 * @param method             
                 */
                whenLoaded(context: Object, method: String): void;
                /**
                 * 
                 * @param context             
                 * @param method             
                 */
                whenLoaded(context: any, method: String): void;
                /**
                 * local event, fired once when the surface is created
                 * asynchronously, used only when isLoaded is false, required
                 * only for Silverlight.
                 * 
                 * @param surface             
                 */
                onLoad(surface: dojox.gfx.shape.Surface): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Text.html
             *
             * an anchored text (VML)
             * 
             * @param rawNode     
             */
            class Text {
                constructor(rawNode: any);
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * Used for displaying bidi scripts in right layout.
                 * Defines the base direction of text that displayed, can have 3 values:
                 * 
                 * "ltr" - base direction is left to right.
                 * "rtl" - base direction is right to left.
                 * "auto" - base direction is contextual (defined by first strong character).
                 * 
                 */
                "textDir": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * 
                 * @param newShape             
                 */
                bidiPreprocess(newShape: any): any;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Applies the right transform on text, according to renderer.
                 * Finds the right transformation that should be applied on the text, according to renderer.
                 * Was tested in:
                 * 
                 * Renderers (browser for testing):
                 * 
                 * canvas (FF, Chrome, Safari),
                 * vml (IE),
                 * svg (FF, Chrome, Safari, Opera),
                 * silverlight (IE, Chrome, Safari, Opera),
                 * svgWeb(FF, Chrome, Safari, Opera, IE).
                 * Browsers [browser version that was tested]:
                 * 
                 * IE [6,7,8], FF [3.6],
                 * Chrome (latest for March 2011),
                 * Safari [5.0.3],
                 * Opera [11.01].
                 * 
                 * @param text the string for manipulation, by default return value.             
                 * @param textDir Text direction.Can be:"ltr" - for left to right layout."rtl" - for right to left layout"auto" - for contextual layout: the first strong letter decides the direction.             
                 */
                formatText(text: String, textDir: String): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * returns the current font object or null
                 * 
                 */
                getFont(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * get the text width, in px
                 * 
                 */
                getTextWidth(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * sets a font for text
                 * 
                 * @param newFont a font object (see dojox/gfx.defaultFont) or a font string             
                 */
                setFont(newFont: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * sets a text shape object (VML)
                 * 
                 * @param newShape a text shape object             
                 */
                setShape(newShape: Object): any;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.Path.html
             *
             * a path shape (VML)
             * 
             * @param rawNode     
             */
            class Path {
                constructor(rawNode: any);
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * 
                 */
                "renderers": Object;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * forms an elliptic arc segment
                 * 
                 */
                arcTo(): Function;
                /**
                 * closes a path
                 * 
                 */
                closePath(): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * forms a curve segment
                 * 
                 */
                curveTo(): Function;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * returns a current value of the absolute mode
                 * 
                 */
                getAbsoluteMode(): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * returns the last point in the path, or null
                 * 
                 */
                getLastPosition(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * forms a horizontal line segment
                 * 
                 */
                hLineTo(): Function;
                /**
                 * forms a line segment
                 * 
                 */
                lineTo(): Function;
                /**
                 * forms a move segment
                 * 
                 */
                moveTo(): Function;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * forms a quadratic curve segment
                 * 
                 */
                qCurveTo(): Function;
                /**
                 * forms a quadratic smooth curve segment
                 * 
                 */
                qSmoothCurveTo(): Function;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets an absolute or relative mode for path points
                 * 
                 * @param mode true/false or "absolute"/"relative" to specify the mode             
                 */
                setAbsoluteMode(mode: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * forms a path using a shape (VML)
                 * 
                 * @param newShape a VML path string or a path object (see dojox/gfx.defaultPath)             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
                /**
                 * forms a smooth curve segment
                 * 
                 */
                smoothCurveTo(): Function;
                /**
                 * forms a vertical line segment
                 * 
                 */
                vLineTo(): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.TextPath.html
             *
             * a textpath shape (VML)
             * 
             * @param rawNode     
             */
            class TextPath {
                constructor(rawNode: any);
                /**
                 * 
                 */
                "nodeType": string;
                /**
                 * 
                 */
                "renderers": Object;
                /**
                 * Used for displaying bidi scripts in right layout.
                 * Defines the base direction of text that displayed, can have 3 values:
                 * 
                 * "ltr" - base direction is left to right.
                 * "rtl" - base direction is right to left.
                 * "auto" - base direction is contextual (defined by first strong character).
                 * 
                 */
                "textDir": string;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * a shortcut for dojox/gfx/shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
                /**
                 * forms an elliptic arc segment
                 * 
                 */
                arcTo(): Function;
                /**
                 * 
                 * @param newText             
                 */
                bidiPreprocess(newText: any): any;
                /**
                 * closes a path
                 * 
                 */
                closePath(): Function;
                /**
                 * connects a handler to an event on this shape
                 * 
                 * @param name             
                 * @param object             
                 * @param method             
                 */
                connect(name: any, object: any, method: any): any;
                /**
                 * forms a curve segment
                 * 
                 */
                curveTo(): Function;
                /**
                 * Releases all internal resources owned by this shape. Once this method has been called,
                 * the instance is considered destroyed and should not be used anymore.
                 * 
                 */
                destroy(): void;
                /**
                 * connects a handler by token from an event on this shape
                 * 
                 * @param token             
                 */
                disconnect(token: any): any;
                /**
                 * Applies the right transform on text, according to renderer.
                 * Finds the right transformation that should be applied on the text, according to renderer.
                 * Was tested in:
                 * 
                 * Renderers:
                 * canvas (FF, Chrome, Safari), vml (IE), svg (FF, Chrome, Safari, Opera), silverlight (IE8), svgWeb(FF, Chrome, Safari, Opera, IE).
                 * 
                 * Browsers:
                 * IE [6,7,8], FF [3.6], Chrome (latest for February 2011), Safari [5.0.3], Opera [11.01].
                 * 
                 * @param text the string for manipulation, by default return value.             
                 * @param textDir text direction direction.Can be:"ltr" - for left to right layout."rtl" - for right to left layout"auto" - for contextual layout: the first strong letter decides the direction.             
                 */
                formatText(text: String, textDir: String): any;
                /**
                 * returns a current value of the absolute mode
                 * 
                 */
                getAbsoluteMode(): any;
                /**
                 * Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
                 * calculated for the shape on the current renderer or for shapes with no geometric area (points).
                 * A bounding box is a rectangular geometric region
                 * defining the X and Y extent of the shape.
                 * (see dojox/gfx.defaultRect)
                 * Note that this method returns a direct reference to the attribute of this instance. Therefore you should
                 * not modify its value directly but clone it instead.
                 * 
                 */
                getBoundingBox(): any;
                /**
                 * 
                 */
                getClip(): any;
                /**
                 * returns a Node, which is used as
                 * a source of events for this shape
                 * 
                 */
                getEventSource(): any;
                /**
                 * Returns the current fill object or null
                 * (see dojox/gfx.defaultLinearGradient,
                 * dojox/gfx.defaultRadialGradient,
                 * dojox/gfx.defaultPattern,
                 * or dojo/Color)
                 * 
                 */
                getFill(): any;
                /**
                 * returns the current font object or null
                 * 
                 */
                getFont(): any;
                /**
                 * returns the last point in the path, or null
                 * 
                 */
                getLastPosition(): any;
                /**
                 * Different graphics rendering subsystems implement shapes in different ways.  This
                 * method provides access to the underlying graphics subsystem object.  Clients calling this
                 * method and using the return value must be careful not to try sharing or using the underlying node
                 * in a general way across renderer implementation.
                 * Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
                 * 
                 */
                getNode(): any;
                /**
                 * Returns the parent Shape, Group or null if this Shape is unparented.
                 * (see dojox/gfx/shape.Surface,
                 * or dojox/gfx.Group)
                 * 
                 */
                getParent(): any;
                /**
                 * returns the current Shape object or null
                 * (see dojox/gfx.defaultPath,
                 * dojox/gfx.defaultPolyline,
                 * dojox/gfx.defaultRect,
                 * dojox/gfx.defaultEllipse,
                 * dojox/gfx.defaultCircle,
                 * dojox/gfx.defaultLine,
                 * or dojox/gfx.defaultImage)
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the current stroke object or null
                 * (see dojox/gfx.defaultStroke)
                 * 
                 */
                getStroke(): any;
                /**
                 * returns the current text object or null
                 * 
                 */
                getText(): any;
                /**
                 * Returns the current transformation matrix applied to this Shape or null
                 * 
                 */
                getTransform(): any;
                /**
                 * returns an array of four points or null
                 * four points represent four corners of the untransformed bounding box
                 * 
                 */
                getTransformedBoundingBox(): any;
                /**
                 * forms a horizontal line segment
                 * 
                 */
                hLineTo(): Function;
                /**
                 * forms a line segment
                 * 
                 */
                lineTo(): Function;
                /**
                 * forms a move segment
                 * 
                 */
                moveTo(): Function;
                /**
                 * moves a shape to back of its parent's list of shapes
                 * 
                 */
                moveToBack(): Function;
                /**
                 * moves a shape to front of its parent's list of shapes
                 * 
                 */
                moveToFront(): Function;
                /**
                 * Connects an event to this shape.
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * forms a quadratic curve segment
                 * 
                 */
                qCurveTo(): Function;
                /**
                 * forms a quadratic smooth curve segment
                 * 
                 */
                qSmoothCurveTo(): Function;
                /**
                 * removes the shape from its parent's list of shapes
                 * 
                 * @param silently if true, do not redraw a picture yet             
                 */
                removeShape(silently: boolean): Function;
                /**
                 * sets an absolute or relative mode for path points
                 * 
                 * @param mode true/false or "absolute"/"relative" to specify the mode             
                 */
                setAbsoluteMode(mode: boolean): Function;
                /**
                 * sets the clipping area of this shape.
                 * This method overrides the dojox/gfx/shape.Shape.setClip() method. Only rectangular geometry is supported.
                 * 
                 * @param clip an object that defines the clipping geometry, or null to remove clip.             
                 */
                setClip(clip: Object): Function;
                /**
                 * sets a fill object (VML)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * sets a font for text
                 * 
                 * @param newFont             
                 */
                setFont(newFont: any): Function;
                /**
                 * assigns and clears the underlying node that will represent this
                 * shape. Once set, transforms, gradients, etc, can be applied.
                 * (no fill & stroke by default)
                 * 
                 * @param rawNode             
                 */
                setRawNode(rawNode: any): void;
                /**
                 * forms a path using a shape (VML)
                 * 
                 * @param newShape a VML path string or a path object (see dojox/gfx.defaultPath)             
                 */
                setShape(newShape: Object): Function;
                /**
                 * sets a stroke object (VML)
                 * 
                 * @param stroke a stroke object(see dojox/gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a text to be drawn along the path
                 * 
                 * @param newText             
                 */
                setText(newText: any): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox/gfx/matrix.Matrix2Dconstructor for a list of acceptable arguments)             
                 */
                setTransform(matrix: dojox.gfx.matrix.Matrix2D): any;
                /**
                 * forms a smooth curve segment
                 * 
                 */
                smoothCurveTo(): Function;
                /**
                 * forms a vertical line segment
                 * 
                 */
                vLineTo(): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach._bool.html
             *
             * 
             */
            interface _bool {
                /**
                 * 
                 */
                t: number;
                /**
                 * 
                 */
                true: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/vml_attach.text_alignment.html
             *
             * 
             */
            interface text_alignment {
                /**
                 * 
                 */
                end: string;
                /**
                 * 
                 */
                middle: string;
                /**
                 * 
                 */
                start: string;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx/decompose.html
         *
         * Decompose a 2D matrix into translation, scaling, and rotation components.
         * This function decompose a matrix into four logical components:
         * translation, rotation, scaling, and one more rotation using SVD.
         * The components should be applied in following order:
         * 
         * [translate, rotate(angle2), scale, rotate(angle1)]
         * 
         * @param matrix a 2D matrix-like object     
         */
        interface decompose{(matrix: dojox.gfx.matrix.Matrix2D): void}
        module attach {
        }

    }

}