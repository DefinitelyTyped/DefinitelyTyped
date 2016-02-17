// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dojo.d.ts" />
/// <reference path="dojox.gfx.d.ts" />
/// <reference path="dojox.geo.d.ts" />
declare module dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d.html
     *
     * Deprecated.  Should require dojox/gfx3d modules directly rather than trying to access them through
     * this module.
     * 
     */
    interface gfx3d {
    }
    module gfx3d {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/object.html
         *
         * 
         */
        class object { 
            constructor();
            /**
             * multiplies the existing matrix with an argument on left side
             * (matrix * this.matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
             */
            applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
            /**
             * multiplies the existing matrix with an argument on right side
             * (this.matrix * matrix)
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
             */
            applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
            /**
             * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
             * 
             * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
             */
            applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
            /**
             * 
             */
            destroy(): void;
            /**
             * 
             * @param lighting             
             */
            draw(lighting: any): void;
            /**
             * 
             */
            getOutline(): any;
            /**
             * 
             */
            getZOrder(): number;
            /**
             * 
             */
            invalidate(): void;
            /**
             * 
             * @param camera             
             */
            render(camera: any): void;
            /**
             * sets a fill object
             * (the default implementation is to delegate to
             * the underlying 2D shape).
             * 
             * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
             */
            setFill(fill: Object): Function;
            /**
             * sets a Object object
             * 
             * @param newObject             
             */
            setObject(newObject: any): Function;
            /**
             * sets a stroke object
             * (the default implementation simply ignores it)
             * 
             * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
             */
            setStroke(stroke: Object): Function;
            /**
             * sets a transformation matrix
             * 
             * @param matrix             
             */
            setTransform(matrix: any): Function;
            /**
             * 
             * @param lighting             
             * @param normal             
             */
            toStdFill(lighting: any, normal: any): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.html
         *
         * 
         */
        interface _base {
            /**
             * 
             */
            defaultCube: Object;
            /**
             * 
             */
            defaultCylinder: Object;
            /**
             * 
             */
            defaultEdges: Object;
            /**
             * 
             */
            defaultOrbit: Object;
            /**
             * 
             */
            defaultPath3d: Object;
            /**
             * 
             */
            defaultPolygon: Object;
            /**
             * 
             */
            defaultQuads: Object;
            /**
             * 
             */
            defaultTriangles: Object;
            /**
             * 
             */
            drawer: Object;
            /**
             * 
             */
            lighting: Object;
            /**
             * 
             */
            matrix: Object;
            /**
             * 
             */
            scheduler: Object;
            /**
             * 
             */
            vector: Object;
            /**
             * 
             */
            Cube(): void;
            /**
             * 
             */
            Cylinder(): void;
            /**
             * 
             */
            Edges(): void;
            /**
             * calculate a cylindrical gradient
             * 
             * @param model color model             
             * @param material defines visual properties             
             * @param center center of the cylinder's bottom             
             * @param radius radius of the cylinder             
             * @param from from position in radians             
             * @param to from position in radians             
             * @param matrix the cumulative transformation matrix             
             */
            gradient(model: dojox.gfx3d.lighting.Model, material: Object, center: Object, radius: number, from: number, to: number, matrix: Object): Object;
            /**
             * a 3D matrix object
             * Normalizes a 3D matrix-like object. If arrays is passed,
             * all objects of the array are normalized and multiplied sequentially.
             * 
             * @param arg a 3D matrix-like object, a number, or an array of such objects             
             */
            Matrix3D(arg: Object): void;
            /**
             * 
             */
            Object(): void;
            /**
             * 
             */
            Orbit(): void;
            /**
             * 
             */
            Path3d(): void;
            /**
             * 
             */
            Polygon(): void;
            /**
             * 
             */
            Quads(): void;
            /**
             * 
             */
            Scene(): void;
            /**
             * 
             */
            Triangles(): void;
            /**
             * 
             */
            Viewport(): void;
        }
        module _base {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Cube.html
             *
             * 
             */
            class Cube {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param lighting             
                 */
                draw(lighting: any): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
                /**
                 * 
                 * @param camera             
                 */
                render(camera: any): void;
                /**
                 * sets a fill object
                 * (the default implementation is to delegate to
                 * the underlying 2D shape).
                 * 
                 * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
                 */
                setFill(fill: Object): Function;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 */
                setObject(newObject: Object[]): void;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 */
                setObject(newObject: Object): void;
                /**
                 * sets a stroke object
                 * (the default implementation simply ignores it)
                 * 
                 * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Cylinder.html
             *
             * 
             */
            class Cylinder {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 */
                draw(): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
                /**
                 * 
                 * @param camera             
                 */
                render(camera: any): void;
                /**
                 * sets a fill object
                 * (the default implementation is to delegate to
                 * the underlying 2D shape).
                 * 
                 * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
                 */
                setFill(fill: Object): Function;
                /**
                 * sets a Object object
                 * 
                 * @param newObject             
                 */
                setObject(newObject: any): Function;
                /**
                 * sets a stroke object
                 * (the default implementation simply ignores it)
                 * 
                 * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Edges.html
             *
             * 
             */
            class Edges {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 */
                draw(): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
                /**
                 * 
                 * @param camera             
                 */
                render(camera: any): void;
                /**
                 * sets a fill object
                 * (the default implementation is to delegate to
                 * the underlying 2D shape).
                 * 
                 * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
                 */
                setFill(fill: Object): Function;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 * @param style               Optional            
                 */
                setObject(newObject: Object[], style: String): Function;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 * @param style               Optional            
                 */
                setObject(newObject: Object, style: String): Function;
                /**
                 * sets a stroke object
                 * (the default implementation simply ignores it)
                 * 
                 * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Orbit.html
             *
             * 
             */
            class Orbit {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param lighting             
                 */
                draw(lighting: any): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
                /**
                 * 
                 * @param camera             
                 */
                render(camera: any): void;
                /**
                 * sets a fill object
                 * (the default implementation is to delegate to
                 * the underlying 2D shape).
                 * 
                 * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
                 */
                setFill(fill: Object): Function;
                /**
                 * sets a Object object
                 * 
                 * @param newObject             
                 */
                setObject(newObject: any): Function;
                /**
                 * sets a stroke object
                 * (the default implementation simply ignores it)
                 * 
                 * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Polygon.html
             *
             * 
             */
            class Polygon {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param lighting             
                 */
                draw(lighting: any): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
                /**
                 * 
                 * @param camera             
                 */
                render(camera: any): void;
                /**
                 * sets a fill object
                 * (the default implementation is to delegate to
                 * the underlying 2D shape).
                 * 
                 * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
                 */
                setFill(fill: Object): Function;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 */
                setObject(newObject: Object[]): Function;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 */
                setObject(newObject: Object): Function;
                /**
                 * sets a stroke object
                 * (the default implementation simply ignores it)
                 * 
                 * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Object.html
             *
             * 
             */
            class Object {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param lighting             
                 */
                draw(lighting: any): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
                /**
                 * 
                 * @param camera             
                 */
                render(camera: any): void;
                /**
                 * sets a fill object
                 * (the default implementation is to delegate to
                 * the underlying 2D shape).
                 * 
                 * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
                 */
                setFill(fill: Object): Function;
                /**
                 * sets a Object object
                 * 
                 * @param newObject             
                 */
                setObject(newObject: any): Function;
                /**
                 * sets a stroke object
                 * (the default implementation simply ignores it)
                 * 
                 * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Path3d.html
             *
             * 
             */
            class Path3d {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * closes a path
                 * 
                 */
                closePath(): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param lighting             
                 */
                draw(lighting: any): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
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
                 * 
                 * @param camera             
                 */
                render(camera: any): void;
                /**
                 * sets a fill object
                 * (the default implementation is to delegate to
                 * the underlying 2D shape).
                 * 
                 * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
                 */
                setFill(fill: Object): Function;
                /**
                 * sets a Object object
                 * 
                 * @param newObject             
                 */
                setObject(newObject: any): Function;
                /**
                 * sets a stroke object
                 * (the default implementation simply ignores it)
                 * 
                 * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Quads.html
             *
             * 
             */
            class Quads {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param lighting             
                 */
                draw(lighting: any): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
                /**
                 * 
                 * @param camera             
                 */
                render(camera: any): void;
                /**
                 * sets a fill object
                 * (the default implementation is to delegate to
                 * the underlying 2D shape).
                 * 
                 * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
                 */
                setFill(fill: Object): Function;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 * @param style               Optional            
                 */
                setObject(newObject: Object[], style: String): Function;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 * @param style               Optional            
                 */
                setObject(newObject: Object, style: String): Function;
                /**
                 * sets a stroke object
                 * (the default implementation simply ignores it)
                 * 
                 * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Triangles.html
             *
             * 
             */
            class Triangles {
                constructor();
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param lighting             
                 */
                draw(lighting: any): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
                /**
                 * 
                 * @param camera             
                 */
                render(camera: any): void;
                /**
                 * sets a fill object
                 * (the default implementation is to delegate to
                 * the underlying 2D shape).
                 * 
                 * @param fill a fill object(see dojox.gfx.defaultLinearGradient,dojox.gfx.defaultRadialGradient,dojox.gfx.defaultPattern,dojo._base.Coloror dojox.gfx.MODEL)             
                 */
                setFill(fill: Object): Function;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 * @param style               Optional            
                 */
                setObject(newObject: Object[], style: String): Function;
                /**
                 * setup the object
                 * 
                 * @param newObject             
                 * @param style               Optional            
                 */
                setObject(newObject: Object, style: String): Function;
                /**
                 * sets a stroke object
                 * (the default implementation simply ignores it)
                 * 
                 * @param stroke a stroke object(see dojox.gfx.defaultStroke)             
                 */
                setStroke(stroke: Object): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Scene.html
             *
             * the Scene is just a container.
             * 
             */
            class Scene {
                constructor();
                /**
                 * removes a shape from the list
                 * 
                 * @param obj             
                 * @param silently               Optionalif true, do not redraw a picture yet             
                 */
                abandon(obj: any, silently: boolean): Function;
                /**
                 * 
                 * @param newObject             
                 */
                addTodo(newObject: any): void;
                /**
                 * adds a shape to the list
                 * 
                 * @param obj             
                 */
                adopt(obj: any): Function;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx.shape.Shape.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * creates an instance of the passed objectType class
                 * 
                 * @param objectType a class constructor to create an instance of             
                 * @param rawObject properties to be passed in to the classes "setShape" method             
                 * @param style             
                 */
                create3DObject(objectType: Function, rawObject: Object, style: any): any;
                /**
                 * creates an cube object
                 * 
                 * @param cube             
                 */
                createCube(cube: any): any;
                /**
                 * creates an cylinder object
                 * 
                 * @param cylinder             
                 */
                createCylinder(cylinder: any): any;
                /**
                 * creates an edge object
                 * 
                 * @param edges             
                 * @param style             
                 */
                createEdges(edges: any, style: any): any;
                /**
                 * creates an Orbit object
                 * 
                 * @param orbit             
                 */
                createOrbit(orbit: any): any;
                /**
                 * creates an 3d path object
                 * 
                 * @param path             
                 */
                createPath3d(path: any): any;
                /**
                 * creates an polygon object
                 * 
                 * @param points             
                 */
                createPolygon(points: Object[]): any;
                /**
                 * creates an polygon object
                 * 
                 * @param points             
                 */
                createPolygon(points: Object): any;
                /**
                 * creates an quads object
                 * 
                 * @param quads             
                 * @param style             
                 */
                createQuads(quads: any, style: any): any;
                /**
                 * creates a scene object
                 * 
                 */
                createScene(): any;
                /**
                 * creates an triangle object
                 * 
                 * @param tris             
                 * @param style             
                 */
                createTriangles(tris: any, style: any): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 * @param lighting             
                 */
                draw(lighting: any): void;
                /**
                 * 
                 */
                getOutline(): any;
                /**
                 * 
                 */
                getZOrder(): number;
                /**
                 * 
                 */
                invalidate(): void;
                /**
                 * 
                 * @param camera             
                 * @param deep             
                 */
                render(camera: any, deep: any): void;
                /**
                 * 
                 * @param drawer             
                 */
                setDrawer(drawer: any): void;
                /**
                 * 
                 * @param fill             
                 */
                setFill(fill: any): Function;
                /**
                 * sets a Object object
                 * 
                 * @param newObject             
                 */
                setObject(newObject: any): Function;
                /**
                 * 
                 * @param scheduler             
                 */
                setScheduler(scheduler: any): void;
                /**
                 * 
                 * @param stroke             
                 */
                setStroke(stroke: any): Function;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix             
                 */
                setTransform(matrix: any): Function;
                /**
                 * 
                 * @param lighting             
                 * @param normal             
                 */
                toStdFill(lighting: any, normal: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.Viewport.html
             *
             * 
             */
            class Viewport {
                constructor();
                /**
                 * 
                 */
                "nodeType": Object;
                /**
                 * removes a shape from the list
                 * 
                 * @param obj             
                 * @param silently               Optionalif true, do not redraw a picture yet             
                 */
                abandon(obj: any, silently: boolean): Function;
                /**
                 * adds a shape to the list
                 * 
                 * @param shape the shape to add to the list             
                 */
                add(shape: dojox.gfx.shape.Shape): any;
                /**
                 * add new light/lights to the viewport.
                 * 
                 * @param lights light object(s)             
                 */
                addLights(lights: any[]): any;
                /**
                 * add new light/lights to the viewport.
                 * 
                 * @param lights light object(s)             
                 */
                addLights(lights: Object): any;
                /**
                 * 
                 * @param newObject             
                 */
                addTodo(newObject: any): void;
                /**
                 * adds a shape to the list
                 * 
                 * @param obj             
                 */
                adopt(obj: any): Function;
                /**
                 * multiplies the existing matrix with an argument on left side
                 * (matrix * this.matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx3d.matrix.Matrix3Dconstructor for a list of acceptable arguments)             
                 */
                applyCameraLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * multiplies the existing matrix with an argument on right side
                 * (this.matrix * matrix)
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx3d.matrix.Matrix3Dconstructor for a list of acceptable arguments)             
                 */
                applyCameraRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
                /**
                 * a shortcut for dojox.gfx3d.Object.applyRightTransform
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx3d.matrix.Matrix3Dconstructor for a list of acceptable arguments)             
                 */
                applyCameraTransform(matrix: dojox.gfx3d.matrix.Matrix3D): any;
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
                 * creates an instance of the passed objectType class
                 * 
                 * @param objectType a class constructor to create an instance of             
                 * @param rawObject properties to be passed in to the classes "setShape" method             
                 * @param style             
                 */
                create3DObject(objectType: Function, rawObject: Object, style: any): any;
                /**
                 * creates a circle shape
                 * 
                 * @param circle a circle object (see dojox/gfx.defaultCircle)             
                 */
                createCircle(circle: Object): any;
                /**
                 * creates an cube object
                 * 
                 * @param cube             
                 */
                createCube(cube: any): any;
                /**
                 * creates an cylinder object
                 * 
                 * @param cylinder             
                 */
                createCylinder(cylinder: any): any;
                /**
                 * creates an edge object
                 * 
                 * @param edges             
                 * @param style             
                 */
                createEdges(edges: any, style: any): any;
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
                 * creates an Orbit object
                 * 
                 * @param orbit             
                 */
                createOrbit(orbit: any): any;
                /**
                 * creates a path shape
                 * 
                 * @param path a path object (see dojox/gfx.defaultPath)             
                 */
                createPath(path: Object): any;
                /**
                 * creates an 3d path object
                 * 
                 * @param path             
                 */
                createPath3d(path: any): any;
                /**
                 * creates an polygon object
                 * 
                 * @param points             
                 */
                createPolygon(points: Object[]): any;
                /**
                 * creates an polygon object
                 * 
                 * @param points             
                 */
                createPolygon(points: Object): any;
                /**
                 * creates a polyline/polygon shape
                 * 
                 * @param points a points object (see dojox/gfx.defaultPolyline)or an Array of points             
                 */
                createPolyline(points: Object): any;
                /**
                 * creates an quads object
                 * 
                 * @param quads             
                 * @param style             
                 */
                createQuads(quads: any, style: any): any;
                /**
                 * creates a rectangle shape
                 * 
                 * @param rect a path object (see dojox/gfx.defaultRect)             
                 */
                createRect(rect: Object): any;
                /**
                 * creates a scene object
                 * 
                 */
                createScene(): any;
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
                 * creates an triangle object
                 * 
                 * @param tris             
                 * @param style             
                 */
                createTriangles(tris: any, style: any): any;
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
                 * 
                 */
                invalidate(): void;
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
                 * iterate all children and call their render callback function.
                 * 
                 */
                render(): void;
                /**
                 * sets a transformation matrix
                 * 
                 * @param matrix a matrix or a matrix-like object(see an argument of dojox.gfx.matrix.Matrixconstructor for a list of acceptable arguments)             
                 */
                setCameraTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
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
                 * 
                 * @param dim             
                 */
                setDimensions(dim: any): void;
                /**
                 * 
                 * @param drawer             
                 */
                setDrawer(drawer: any): void;
                /**
                 * sets a fill object
                 * (the default implementation simply ignores it)
                 * 
                 * @param fill a fill object(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/_base/Color)             
                 */
                setFill(fill: Object): Function;
                /**
                 * set the lights
                 * 
                 * @param lights an array of light objector lights object             
                 * @param ambient               Optionalan ambient object             
                 * @param specular               Optionalan specular object             
                 */
                setLights(lights: any[], ambient: dojo._base.Color, specular: dojo._base.Color): Function;
                /**
                 * 
                 * @param scheduler             
                 */
                setScheduler(scheduler: any): void;
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
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base._creators.html
             *
             * object creators
             * 
             */
            interface _creators {
                /**
                 * removes a shape from the list
                 * 
                 * @param obj             
                 * @param silently               Optionalif true, do not redraw a picture yet             
                 */
                abandon(obj: any, silently: boolean): Function;
                /**
                 * adds a shape to the list
                 * 
                 * @param obj             
                 */
                adopt(obj: any): Function;
                /**
                 * creates an instance of the passed objectType class
                 * 
                 * @param objectType a class constructor to create an instance of             
                 * @param rawObject properties to be passed in to the classes "setShape" method             
                 * @param style             
                 */
                create3DObject(objectType: Function, rawObject: Object, style: any): any;
                /**
                 * creates an cube object
                 * 
                 * @param cube             
                 */
                createCube(cube: any): any;
                /**
                 * creates an cylinder object
                 * 
                 * @param cylinder             
                 */
                createCylinder(cylinder: any): any;
                /**
                 * creates an edge object
                 * 
                 * @param edges             
                 * @param style             
                 */
                createEdges(edges: any, style: any): any;
                /**
                 * creates an Orbit object
                 * 
                 * @param orbit             
                 */
                createOrbit(orbit: any): any;
                /**
                 * creates an 3d path object
                 * 
                 * @param path             
                 */
                createPath3d(path: any): any;
                /**
                 * creates an polygon object
                 * 
                 * @param points             
                 */
                createPolygon(points: Object[]): any;
                /**
                 * creates an polygon object
                 * 
                 * @param points             
                 */
                createPolygon(points: Object): any;
                /**
                 * creates an quads object
                 * 
                 * @param quads             
                 * @param style             
                 */
                createQuads(quads: any, style: any): any;
                /**
                 * creates a scene object
                 * 
                 */
                createScene(): any;
                /**
                 * creates an triangle object
                 * 
                 * @param tris             
                 * @param style             
                 */
                createTriangles(tris: any, style: any): any;
                /**
                 * 
                 * @param drawer             
                 */
                setDrawer(drawer: any): void;
                /**
                 * 
                 * @param scheduler             
                 */
                setScheduler(scheduler: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.defaultCube.html
             *
             * 
             */
            interface defaultCube {
                /**
                 * 
                 */
                bottom: Object;
                /**
                 * 
                 */
                top: Object;
                /**
                 * 
                 */
                type: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.defaultCylinder.html
             *
             * 
             */
            interface defaultCylinder {
                /**
                 * 
                 */
                center: Object;
                /**
                 * 
                 */
                height: number;
                /**
                 * 
                 */
                radius: number;
                /**
                 * 
                 */
                type: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.defaultOrbit.html
             *
             * 
             */
            interface defaultOrbit {
                /**
                 * 
                 */
                center: Object;
                /**
                 * 
                 */
                radius: number;
                /**
                 * 
                 */
                type: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.defaultPolygon.html
             *
             * 
             */
            interface defaultPolygon {
                /**
                 * 
                 */
                path: any[];
                /**
                 * 
                 */
                type: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.defaultPath3d.html
             *
             * 
             */
            interface defaultPath3d {
                /**
                 * 
                 */
                path: any[];
                /**
                 * 
                 */
                type: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.defaultEdges.html
             *
             * 
             */
            interface defaultEdges {
                /**
                 * 
                 */
                points: any[];
                /**
                 * 
                 */
                style: Object;
                /**
                 * 
                 */
                type: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.defaultQuads.html
             *
             * 
             */
            interface defaultQuads {
                /**
                 * 
                 */
                points: any[];
                /**
                 * 
                 */
                style: Object;
                /**
                 * 
                 */
                type: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.defaultTriangles.html
             *
             * 
             */
            interface defaultTriangles {
                /**
                 * 
                 */
                points: any[];
                /**
                 * 
                 */
                style: Object;
                /**
                 * 
                 */
                type: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.drawer.html
             *
             * 
             */
            interface drawer {
                /**
                 * 
                 * @param todos             
                 * @param objects             
                 * @param viewport             
                 */
                chart(todos: any, objects: any, viewport: any): void;
                /**
                 * 
                 * @param todos             
                 * @param objects             
                 * @param viewport             
                 */
                conservative(todos: any, objects: any, viewport: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.lighting.html
             *
             * 
             */
            interface lighting {
                /**
                 * 
                 */
                finish: Object;
                /**
                 * 
                 * @param a             
                 * @param b             
                 */
                add(a: any, b: any): Object;
                /**
                 * 
                 * @param a             
                 * @param b             
                 */
                addColor(a: any, b: any): Object;
                /**
                 * 
                 */
                black(): Object;
                /**
                 * 
                 * @param c1             
                 * @param c2             
                 */
                diff2Color(c1: any, c2: any): number;
                /**
                 * 
                 * @param normal             
                 * @param lights             
                 */
                diffuse(normal: any, lights: any): any;
                /**
                 * 
                 * @param a             
                 * @param b             
                 */
                dot(a: any, b: any): number;
                /**
                 * 
                 * @param n             
                 * @param i             
                 */
                faceforward(n: any, i: any): any;
                /**
                 * 
                 * @param c             
                 */
                fromStdColor(c: any): any;
                /**
                 * 
                 * @param v             
                 */
                length(v: any): any;
                /**
                 * 
                 * @param c             
                 */
                length2Color(c: any): number;
                /**
                 * 
                 * @param c1             
                 * @param c2             
                 * @param s             
                 */
                mixColor(c1: any, c2: any, s: any): any;
                /**
                 * 
                 */
                Model(): void;
                /**
                 * 
                 * @param a             
                 * @param b             
                 */
                multiplyColor(a: any, b: any): Object;
                /**
                 * 
                 * @param v             
                 */
                normalize(v: any): any;
                /**
                 * 
                 * @param normal             
                 * @param v             
                 * @param size             
                 * @param lights             
                 */
                phong(normal: any, v: any, size: any, lights: any): any;
                /**
                 * 
                 * @param i             
                 * @param n             
                 */
                reflect(i: any, n: any): any;
                /**
                 * 
                 * @param v             
                 */
                saturate(v: any): any;
                /**
                 * 
                 * @param c             
                 */
                saturateColor(c: any): Object;
                /**
                 * 
                 * @param s             
                 * @param v             
                 */
                scale(s: any, v: any): Object;
                /**
                 * 
                 * @param s             
                 * @param c             
                 */
                scaleColor(s: any, c: any): Object;
                /**
                 * 
                 * @param normal             
                 * @param v             
                 * @param roughness             
                 * @param lights             
                 */
                specular(normal: any, v: any, roughness: any, lights: any): any;
                /**
                 * 
                 * @param c             
                 */
                toStdColor(c: any): Object;
                /**
                 * 
                 */
                white(): Object;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.matrix.html
             *
             * 
             */
            interface matrix {
                /**
                 * an identity matrix constant: identity * (x, y, z) == (x, y, z)
                 * 
                 */
                identity: Object;
                /**
                 * forms a rotating matrix (about the x axis) in cameraTransform manner
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified angle.
                 * 
                 * @param angle an angle of rotation in radians (>0 for CW)             
                 */
                cameraRotateX(angle: number): any;
                /**
                 * forms a rotating matrix (about the x axis)in cameraTransform manner
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified degree.
                 * See dojox.gfx3d.matrix.rotateX() for comparison.
                 * 
                 * @param degree an angle of rotation in degrees (>0 for CW)             
                 */
                cameraRotateXg(degree: number): any;
                /**
                 * forms a rotating matrix (about the y axis) in cameraTransform manner
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified angle.
                 * 
                 * @param angle an angle of rotation in radians (>0 for CW)             
                 */
                cameraRotateY(angle: number): any;
                /**
                 * forms a rotating matrix (about the y axis) in cameraTransform manner
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified degree.
                 * See dojox.gfx3d.matrix.rotateY() for comparison.
                 * 
                 * @param degree an angle of rotation in degrees (>0 for CW)             
                 */
                cameraRotateYg(degree: number): any;
                /**
                 * forms a rotating matrix (about the z axis) in cameraTransform manner
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified angle.
                 * 
                 * @param angle an angle of rotation in radians (>0 for CW)             
                 */
                cameraRotateZ(angle: number): any;
                /**
                 * forms a rotating matrix (about the z axis) in cameraTransform manner
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified degree.
                 * See dojox.gfx3d.matrix.rotateZ() for comparison.
                 * 
                 * @param degree an angle of rotation in degrees (>0 for CW)             
                 */
                cameraRotateZg(degree: number): any;
                /**
                 * forms a translation matrix
                 * The resulting matrix is used to translate (move) points by specified offsets.
                 * 
                 * @param a an x coordinate value, or a point-like object, which specifies offsets for 3 dimensions             
                 * @param b               Optionala y coordinate value             
                 * @param c               Optionala z coordinate value             
                 */
                cameraTranslate(a: number, b: number, c: number): any;
                /**
                 * forms a translation matrix
                 * The resulting matrix is used to translate (move) points by specified offsets.
                 * 
                 * @param a an x coordinate value, or a point-like object, which specifies offsets for 3 dimensions             
                 * @param b               Optionala y coordinate value             
                 * @param c               Optionala z coordinate value             
                 */
                cameraTranslate(a: Object, b: number, c: number): any;
                /**
                 * creates a copy of a 3D matrix
                 * 
                 * @param matrix a 3D matrix-like object to be cloned             
                 */
                clone(matrix: Object): any;
                /**
                 * inverts a 2D matrix
                 * 
                 * @param matrix a 3D matrix object to be applied             
                 */
                invert(matrix: Object): any;
                /**
                 * a 3D matrix object
                 * Normalizes a 3D matrix-like object. If arrays is passed,
                 * all objects of the array are normalized and multiplied sequentially.
                 * 
                 * @param arg a 3D matrix-like object, a number, or an array of such objects             
                 */
                Matrix3D(arg: Object): void;
                /**
                 * combines matrices by multiplying them sequentially in the given order
                 * 
                 * @param matrix a 3D matrix object to be applied             
                 */
                multiply(matrix: Object): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param matrix a 3D matrix object to be applied             
                 * @param a an x coordinate of a point, or an Object specifying the whole point             
                 * @param b               Optionala y coordinate of a point             
                 * @param c               Optionala z coordinate of a point             
                 */
                multiplyPoint(matrix: Object, a: number, b: number, c: number): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param matrix a 3D matrix object to be applied             
                 * @param a an x coordinate of a point, or an Object specifying the whole point             
                 * @param b               Optionala y coordinate of a point             
                 * @param c               Optionala z coordinate of a point             
                 */
                multiplyPoint(matrix: Object, a: Object, b: number, c: number): any;
                /**
                 * converts an object to a matrix, if necessary
                 * Converts any 3D matrix-like object or an array of
                 * such objects to a valid dojox.gfx3d.matrix.Matrix3D3D object.
                 * 
                 * @param matrix an object, which is converted to a matrix, if necessary             
                 */
                normalize(matrix: Object): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param matrix a 3D matrix object to be applied             
                 * @param a an x coordinate of a point, or an Object specifying the whole point             
                 * @param b               Optionala y coordinate of a point             
                 * @param c               Optionala z coordinate of a point             
                 */
                project(matrix: Object, a: number, b: number, c: number): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param matrix a 3D matrix object to be applied             
                 * @param a an x coordinate of a point, or an Object specifying the whole point             
                 * @param b               Optionala y coordinate of a point             
                 * @param c               Optionala z coordinate of a point             
                 */
                project(matrix: Object, a: dojox.geo.openlayers.Point, b: number, c: number): any;
                /**
                 * forms a rotating matrix (about the x axis)
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified angle.
                 * 
                 * @param angle an angle of rotation in radians (>0 for CW)             
                 */
                rotateX(angle: number): any;
                /**
                 * forms a rotating matrix (about the x axis)
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified degree.
                 * See dojox.gfx3d.matrix.rotateX() for comparison.
                 * 
                 * @param degree an angle of rotation in degrees (>0 for CW)             
                 */
                rotateXg(degree: number): any;
                /**
                 * forms a rotating matrix (about the y axis)
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified angle.
                 * 
                 * @param angle an angle of rotation in radians (>0 for CW)             
                 */
                rotateY(angle: number): any;
                /**
                 * forms a rotating matrix (about the y axis)
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified degree.
                 * See dojox.gfx3d.matrix.rotateY() for comparison.
                 * 
                 * @param degree an angle of rotation in degrees (>0 for CW)             
                 */
                rotateYg(degree: number): any;
                /**
                 * forms a rotating matrix (about the z axis)
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified angle.
                 * 
                 * @param angle an angle of rotation in radians (>0 for CW)             
                 */
                rotateZ(angle: number): any;
                /**
                 * forms a rotating matrix (about the z axis)
                 * The resulting matrix is used to rotate points
                 * around the origin of coordinates (0, 0) by specified degree.
                 * See dojox.gfx3d.matrix.rotateZ() for comparison.
                 * 
                 * @param degree an angle of rotation in degrees (>0 for CW)             
                 */
                rotateZg(degree: number): any;
                /**
                 * forms a scaling matrix
                 * The resulting matrix is used to scale (magnify) points by specified offsets.
                 * 
                 * @param a a scaling factor used for the x coordinate, or a uniform scaling factor used for the all coordinates,or a point-like object, which specifies scale factors for 3 dimensions             
                 * @param b               Optionala scaling factor used for the y coordinate             
                 * @param c               Optionala scaling factor used for the z coordinate             
                 */
                scale(a: number, b: number, c: number): any;
                /**
                 * forms a scaling matrix
                 * The resulting matrix is used to scale (magnify) points by specified offsets.
                 * 
                 * @param a a scaling factor used for the x coordinate, or a uniform scaling factor used for the all coordinates,or a point-like object, which specifies scale factors for 3 dimensions             
                 * @param b               Optionala scaling factor used for the y coordinate             
                 * @param c               Optionala scaling factor used for the z coordinate             
                 */
                scale(a: Object, b: number, c: number): any;
                /**
                 * forms a translation matrix
                 * The resulting matrix is used to translate (move) points by specified offsets.
                 * 
                 * @param a an x coordinate value, or a point-like object, which specifies offsets for 3 dimensions             
                 * @param b               Optionala y coordinate value             
                 * @param c               Optionala z coordinate value             
                 */
                translate(a: number, b: number, c: number): any;
                /**
                 * forms a translation matrix
                 * The resulting matrix is used to translate (move) points by specified offsets.
                 * 
                 * @param a an x coordinate value, or a point-like object, which specifies offsets for 3 dimensions             
                 * @param b               Optionala y coordinate value             
                 * @param c               Optionala z coordinate value             
                 */
                translate(a: Object, b: number, c: number): any;
            }
       
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.scheduler.html
             *
             * 
             */
            interface scheduler {
                /**
                 * 
                 */
                BinarySearchTree(): void;
                /**
                 * 
                 * @param buffer             
                 * @param outline             
                 */
                bsp(buffer: any, outline: any): any;
                /**
                 * 
                 * @param it             
                 */
                order(it: any): any;
                /**
                 * 
                 * @param it             
                 */
                outline(it: any): any;
                /**
                 * 
                 * @param buffer             
                 * @param order             
                 */
                zOrder(buffer: any, order: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/_base.vector.html
             *
             * 
             */
            interface vector {
                /**
                 * center of the vectors
                 * 
                 */
                center(): Object;
                /**
                 * applies a matrix to a point
                 * 
                 * @param a x coordinate of first point, or the whole first point             
                 * @param b y coordinate of first point, or the whole second point             
                 * @param c z coordinate of first point             
                 * @param d x coordinate of second point             
                 * @param e y coordinate of second point             
                 * @param f z coordinate of second point             
                 */
                crossProduct(a: number, b: number, c: number, d: number, e: number, f: number): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param a x coordinate of first point, or the whole first point             
                 * @param b y coordinate of first point, or the whole second point             
                 * @param c z coordinate of first point             
                 * @param d x coordinate of second point             
                 * @param e y coordinate of second point             
                 * @param f z coordinate of second point             
                 */
                crossProduct(a: dojox.geo.openlayers.Point, b: number, c: number, d: number, e: number, f: number): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param a x coordinate of first point, or the whole first point             
                 * @param b y coordinate of first point, or the whole second point             
                 * @param c z coordinate of first point             
                 * @param d x coordinate of second point             
                 * @param e y coordinate of second point             
                 * @param f z coordinate of second point             
                 */
                crossProduct(a: number, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param a x coordinate of first point, or the whole first point             
                 * @param b y coordinate of first point, or the whole second point             
                 * @param c z coordinate of first point             
                 * @param d x coordinate of second point             
                 * @param e y coordinate of second point             
                 * @param f z coordinate of second point             
                 */
                crossProduct(a: dojox.geo.openlayers.Point, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param a x coordinate of first point, or the whole first Point             
                 * @param b y coordinate of first Point, or the whole second Point             
                 * @param c               Optionalz coordinate of first point             
                 * @param d               Optionalx coordinate of second point             
                 * @param e               Optionaly coordinate of second point             
                 * @param f               Optionalz coordinate of second point             
                 */
                dotProduct(a: number, b: number, c: number, d: number, e: number, f: number): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param a x coordinate of first point, or the whole first Point             
                 * @param b y coordinate of first Point, or the whole second Point             
                 * @param c               Optionalz coordinate of first point             
                 * @param d               Optionalx coordinate of second point             
                 * @param e               Optionaly coordinate of second point             
                 * @param f               Optionalz coordinate of second point             
                 */
                dotProduct(a: dojox.geo.openlayers.Point, b: number, c: number, d: number, e: number, f: number): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param a x coordinate of first point, or the whole first Point             
                 * @param b y coordinate of first Point, or the whole second Point             
                 * @param c               Optionalz coordinate of first point             
                 * @param d               Optionalx coordinate of second point             
                 * @param e               Optionaly coordinate of second point             
                 * @param f               Optionalz coordinate of second point             
                 */
                dotProduct(a: number, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number): any;
                /**
                 * applies a matrix to a point
                 * 
                 * @param a x coordinate of first point, or the whole first Point             
                 * @param b y coordinate of first Point, or the whole second Point             
                 * @param c               Optionalz coordinate of first point             
                 * @param d               Optionalx coordinate of second point             
                 * @param e               Optionaly coordinate of second point             
                 * @param f               Optionalz coordinate of second point             
                 */
                dotProduct(a: dojox.geo.openlayers.Point, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number): any;
                /**
                 * find the normal of the implicit surface
                 * 
                 * @param a a point             
                 * @param b a point             
                 * @param c a point             
                 */
                normalize(a: Object, b: Object, c: Object): any;
                /**
                 * 
                 * @param a             
                 * @param b             
                 */
                substract(a: Object, b: Object): Object;
                /**
                 * sum of the vectors
                 * 
                 */
                sum(): Object;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/scheduler.html
         *
         * 
         */
        interface scheduler {
            /**
             * 
             */
            drawer: Object;
            /**
             * 
             */
            scheduler: Object;
            /**
             * 
             */
            BinarySearchTree(): void;
        }
        module scheduler {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/scheduler.BinarySearchTree.html
             *
             * 
             * @param obj     
             * @param outline     
             */
            class BinarySearchTree {
                constructor(obj: dojox.gfx3d.object, outline: any);
                /**
                 * 
                 * @param obj             
                 * @param outline             
                 */
                add(obj: any, outline: any): void;
                /**
                 * 
                 * @param outline             
                 */
                iterate(outline: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/scheduler.drawer.html
             *
             * 
             */
            interface drawer {
                /**
                 * 
                 * @param todos             
                 * @param objects             
                 * @param viewport             
                 */
                chart(todos: any, objects: any, viewport: any): void;
                /**
                 * 
                 * @param todos             
                 * @param objects             
                 * @param viewport             
                 */
                conservative(todos: any, objects: any, viewport: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/scheduler.scheduler.html
             *
             * 
             */
            interface scheduler {
                /**
                 * 
                 */
                BinarySearchTree(): void;
                /**
                 * 
                 * @param buffer             
                 * @param outline             
                 */
                bsp(buffer: any, outline: any): any;
                /**
                 * 
                 * @param it             
                 */
                order(it: any): any;
                /**
                 * 
                 * @param it             
                 */
                outline(it: any): any;
                /**
                 * 
                 * @param buffer             
                 * @param order             
                 */
                zOrder(buffer: any, order: any): any;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/vector.html
         *
         * 
         */
        interface vector {
            /**
             * center of the vectors
             * 
             */
            center(): Object;
            /**
             * applies a matrix to a point
             * 
             * @param a x coordinate of first point, or the whole first point             
             * @param b y coordinate of first point, or the whole second point             
             * @param c z coordinate of first point             
             * @param d x coordinate of second point             
             * @param e y coordinate of second point             
             * @param f z coordinate of second point             
             */
            crossProduct(a: number, b: number, c: number, d: number, e: number, f: number): any;
            /**
             * applies a matrix to a point
             * 
             * @param a x coordinate of first point, or the whole first point             
             * @param b y coordinate of first point, or the whole second point             
             * @param c z coordinate of first point             
             * @param d x coordinate of second point             
             * @param e y coordinate of second point             
             * @param f z coordinate of second point             
             */
            crossProduct(a: dojox.geo.openlayers.Point, b: number, c: number, d: number, e: number, f: number): any;
            /**
             * applies a matrix to a point
             * 
             * @param a x coordinate of first point, or the whole first point             
             * @param b y coordinate of first point, or the whole second point             
             * @param c z coordinate of first point             
             * @param d x coordinate of second point             
             * @param e y coordinate of second point             
             * @param f z coordinate of second point             
             */
            crossProduct(a: number, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number): any;
            /**
             * applies a matrix to a point
             * 
             * @param a x coordinate of first point, or the whole first point             
             * @param b y coordinate of first point, or the whole second point             
             * @param c z coordinate of first point             
             * @param d x coordinate of second point             
             * @param e y coordinate of second point             
             * @param f z coordinate of second point             
             */
            crossProduct(a: dojox.geo.openlayers.Point, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number): any;
            /**
             * applies a matrix to a point
             * 
             * @param a x coordinate of first point, or the whole first Point             
             * @param b y coordinate of first Point, or the whole second Point             
             * @param c               Optionalz coordinate of first point             
             * @param d               Optionalx coordinate of second point             
             * @param e               Optionaly coordinate of second point             
             * @param f               Optionalz coordinate of second point             
             */
            dotProduct(a: number, b: number, c: number, d: number, e: number, f: number): any;
            /**
             * applies a matrix to a point
             * 
             * @param a x coordinate of first point, or the whole first Point             
             * @param b y coordinate of first Point, or the whole second Point             
             * @param c               Optionalz coordinate of first point             
             * @param d               Optionalx coordinate of second point             
             * @param e               Optionaly coordinate of second point             
             * @param f               Optionalz coordinate of second point             
             */
            dotProduct(a: dojox.geo.openlayers.Point, b: number, c: number, d: number, e: number, f: number): any;
            /**
             * applies a matrix to a point
             * 
             * @param a x coordinate of first point, or the whole first Point             
             * @param b y coordinate of first Point, or the whole second Point             
             * @param c               Optionalz coordinate of first point             
             * @param d               Optionalx coordinate of second point             
             * @param e               Optionaly coordinate of second point             
             * @param f               Optionalz coordinate of second point             
             */
            dotProduct(a: number, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number): any;
            /**
             * applies a matrix to a point
             * 
             * @param a x coordinate of first point, or the whole first Point             
             * @param b y coordinate of first Point, or the whole second Point             
             * @param c               Optionalz coordinate of first point             
             * @param d               Optionalx coordinate of second point             
             * @param e               Optionaly coordinate of second point             
             * @param f               Optionalz coordinate of second point             
             */
            dotProduct(a: dojox.geo.openlayers.Point, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number): any;
            /**
             * find the normal of the implicit surface
             * 
             * @param a a point             
             * @param b a point             
             * @param c a point             
             */
            normalize(a: Object, b: Object, c: Object): any;
            /**
             * 
             * @param a             
             * @param b             
             */
            substract(a: Object, b: Object): Object;
            /**
             * sum of the vectors
             * 
             */
            sum(): Object;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/lighting.html
         *
         * 
         */
        interface lighting {
            /**
             * 
             */
            finish: Object;
            /**
             * 
             * @param a             
             * @param b             
             */
            add(a: any, b: any): Object;
            /**
             * 
             * @param a             
             * @param b             
             */
            addColor(a: any, b: any): Object;
            /**
             * 
             */
            black(): Object;
            /**
             * 
             * @param c1             
             * @param c2             
             */
            diff2Color(c1: any, c2: any): number;
            /**
             * 
             * @param normal             
             * @param lights             
             */
            diffuse(normal: any, lights: any): any;
            /**
             * 
             * @param a             
             * @param b             
             */
            dot(a: any, b: any): number;
            /**
             * 
             * @param n             
             * @param i             
             */
            faceforward(n: any, i: any): any;
            /**
             * 
             * @param c             
             */
            fromStdColor(c: any): any;
            /**
             * 
             * @param v             
             */
            length(v: any): any;
            /**
             * 
             * @param c             
             */
            length2Color(c: any): number;
            /**
             * 
             * @param c1             
             * @param c2             
             * @param s             
             */
            mixColor(c1: any, c2: any, s: any): any;
            /**
             * 
             */
            Model(): void;
            /**
             * 
             * @param a             
             * @param b             
             */
            multiplyColor(a: any, b: any): Object;
            /**
             * 
             * @param v             
             */
            normalize(v: any): any;
            /**
             * 
             * @param normal             
             * @param v             
             * @param size             
             * @param lights             
             */
            phong(normal: any, v: any, size: any, lights: any): any;
            /**
             * 
             * @param i             
             * @param n             
             */
            reflect(i: any, n: any): any;
            /**
             * 
             * @param v             
             */
            saturate(v: any): any;
            /**
             * 
             * @param c             
             */
            saturateColor(c: any): Object;
            /**
             * 
             * @param s             
             * @param v             
             */
            scale(s: any, v: any): Object;
            /**
             * 
             * @param s             
             * @param c             
             */
            scaleColor(s: any, c: any): Object;
            /**
             * 
             * @param normal             
             * @param v             
             * @param roughness             
             * @param lights             
             */
            specular(normal: any, v: any, roughness: any, lights: any): any;
            /**
             * 
             * @param c             
             */
            toStdColor(c: any): Object;
            /**
             * 
             */
            white(): Object;
        }
        module lighting {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/lighting.Model.html
             *
             * 
             * @param incident     
             * @param lights     
             * @param ambient     
             * @param specular     
             */
            class Model {
                constructor(incident: any, lights: any, ambient: any, specular: any);
                /**
                 * 
                 * @param normal             
                 * @param finish             
                 * @param pigment             
                 */
                constant(normal: any, finish: any, pigment: any): any;
                /**
                 * 
                 * @param normal             
                 * @param finish             
                 * @param pigment             
                 */
                matte(normal: any, finish: any, pigment: any): any;
                /**
                 * 
                 * @param normal             
                 * @param finish             
                 * @param pigment             
                 */
                metal(normal: any, finish: any, pigment: any): any;
                /**
                 * 
                 * @param normal             
                 * @param finish             
                 * @param pigment             
                 */
                npr(normal: any, finish: any, pigment: any): any;
                /**
                 * 
                 * @param normal             
                 * @param finish             
                 * @param pigment             
                 */
                plastic(normal: any, finish: any, pigment: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/lighting.finish.html
             *
             * 
             */
            interface finish {
                /**
                 * 
                 */
                defaults: Object;
                /**
                 * 
                 */
                dull: Object;
                /**
                 * 
                 */
                glossy: Object;
                /**
                 * 
                 */
                luminous: Object;
                /**
                 * 
                 */
                metalA: Object;
                /**
                 * 
                 */
                metalB: Object;
                /**
                 * 
                 */
                metalC: Object;
                /**
                 * 
                 */
                metalD: Object;
                /**
                 * 
                 */
                metalE: Object;
                /**
                 * 
                 */
                phong_dull: Object;
                /**
                 * 
                 */
                phong_glossy: Object;
                /**
                 * 
                 */
                phong_shiny: Object;
                /**
                 * 
                 */
                shiny: Object;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/matrix.html
         *
         * 
         */
        interface matrix {
            /**
             * an identity matrix constant: identity * (x, y, z) == (x, y, z)
             * 
             */
            identity: Object;
            /**
             * forms a rotating matrix (about the x axis) in cameraTransform manner
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified angle.
             * 
             * @param angle an angle of rotation in radians (>0 for CW)             
             */
            cameraRotateX(angle: number): any;
            /**
             * forms a rotating matrix (about the x axis)in cameraTransform manner
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified degree.
             * See dojox.gfx3d.matrix.rotateX() for comparison.
             * 
             * @param degree an angle of rotation in degrees (>0 for CW)             
             */
            cameraRotateXg(degree: number): any;
            /**
             * forms a rotating matrix (about the y axis) in cameraTransform manner
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified angle.
             * 
             * @param angle an angle of rotation in radians (>0 for CW)             
             */
            cameraRotateY(angle: number): any;
            /**
             * forms a rotating matrix (about the y axis) in cameraTransform manner
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified degree.
             * See dojox.gfx3d.matrix.rotateY() for comparison.
             * 
             * @param degree an angle of rotation in degrees (>0 for CW)             
             */
            cameraRotateYg(degree: number): any;
            /**
             * forms a rotating matrix (about the z axis) in cameraTransform manner
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified angle.
             * 
             * @param angle an angle of rotation in radians (>0 for CW)             
             */
            cameraRotateZ(angle: number): any;
            /**
             * forms a rotating matrix (about the z axis) in cameraTransform manner
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified degree.
             * See dojox.gfx3d.matrix.rotateZ() for comparison.
             * 
             * @param degree an angle of rotation in degrees (>0 for CW)             
             */
            cameraRotateZg(degree: number): any;
            /**
             * forms a translation matrix
             * The resulting matrix is used to translate (move) points by specified offsets.
             * 
             * @param a an x coordinate value, or a point-like object, which specifies offsets for 3 dimensions             
             * @param b               Optionala y coordinate value             
             * @param c               Optionala z coordinate value             
             */
            cameraTranslate(a: number, b: number, c: number): any;
            /**
             * forms a translation matrix
             * The resulting matrix is used to translate (move) points by specified offsets.
             * 
             * @param a an x coordinate value, or a point-like object, which specifies offsets for 3 dimensions             
             * @param b               Optionala y coordinate value             
             * @param c               Optionala z coordinate value             
             */
            cameraTranslate(a: Object, b: number, c: number): any;
            /**
             * creates a copy of a 3D matrix
             * 
             * @param matrix a 3D matrix-like object to be cloned             
             */
            clone(matrix: Object): any;
            /**
             * inverts a 2D matrix
             * 
             * @param matrix a 3D matrix object to be applied             
             */
            invert(matrix: Object): any;
            
            /**
             * combines matrices by multiplying them sequentially in the given order
             * 
             * @param matrix a 3D matrix object to be applied             
             */
            multiply(matrix: Object): any;
            /**
             * applies a matrix to a point
             * 
             * @param matrix a 3D matrix object to be applied             
             * @param a an x coordinate of a point, or an Object specifying the whole point             
             * @param b               Optionala y coordinate of a point             
             * @param c               Optionala z coordinate of a point             
             */
            multiplyPoint(matrix: Object, a: number, b: number, c: number): any;
            /**
             * applies a matrix to a point
             * 
             * @param matrix a 3D matrix object to be applied             
             * @param a an x coordinate of a point, or an Object specifying the whole point             
             * @param b               Optionala y coordinate of a point             
             * @param c               Optionala z coordinate of a point             
             */
            multiplyPoint(matrix: Object, a: Object, b: number, c: number): any;
            /**
             * converts an object to a matrix, if necessary
             * Converts any 3D matrix-like object or an array of
             * such objects to a valid dojox.gfx3d.matrix.Matrix3D3D object.
             * 
             * @param matrix an object, which is converted to a matrix, if necessary             
             */
            normalize(matrix: Object): any;
            /**
             * applies a matrix to a point
             * 
             * @param matrix a 3D matrix object to be applied             
             * @param a an x coordinate of a point, or an Object specifying the whole point             
             * @param b               Optionala y coordinate of a point             
             * @param c               Optionala z coordinate of a point             
             */
            project(matrix: Object, a: number, b: number, c: number): any;
            /**
             * applies a matrix to a point
             * 
             * @param matrix a 3D matrix object to be applied             
             * @param a an x coordinate of a point, or an Object specifying the whole point             
             * @param b               Optionala y coordinate of a point             
             * @param c               Optionala z coordinate of a point             
             */
            project(matrix: Object, a: dojox.geo.openlayers.Point, b: number, c: number): any;
            /**
             * forms a rotating matrix (about the x axis)
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified angle.
             * 
             * @param angle an angle of rotation in radians (>0 for CW)             
             */
            rotateX(angle: number): any;
            /**
             * forms a rotating matrix (about the x axis)
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified degree.
             * See dojox.gfx3d.matrix.rotateX() for comparison.
             * 
             * @param degree an angle of rotation in degrees (>0 for CW)             
             */
            rotateXg(degree: number): any;
            /**
             * forms a rotating matrix (about the y axis)
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified angle.
             * 
             * @param angle an angle of rotation in radians (>0 for CW)             
             */
            rotateY(angle: number): any;
            /**
             * forms a rotating matrix (about the y axis)
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified degree.
             * See dojox.gfx3d.matrix.rotateY() for comparison.
             * 
             * @param degree an angle of rotation in degrees (>0 for CW)             
             */
            rotateYg(degree: number): any;
            /**
             * forms a rotating matrix (about the z axis)
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified angle.
             * 
             * @param angle an angle of rotation in radians (>0 for CW)             
             */
            rotateZ(angle: number): any;
            /**
             * forms a rotating matrix (about the z axis)
             * The resulting matrix is used to rotate points
             * around the origin of coordinates (0, 0) by specified degree.
             * See dojox.gfx3d.matrix.rotateZ() for comparison.
             * 
             * @param degree an angle of rotation in degrees (>0 for CW)             
             */
            rotateZg(degree: number): any;
            /**
             * forms a scaling matrix
             * The resulting matrix is used to scale (magnify) points by specified offsets.
             * 
             * @param a a scaling factor used for the x coordinate, or a uniform scaling factor used for the all coordinates,or a point-like object, which specifies scale factors for 3 dimensions             
             * @param b               Optionala scaling factor used for the y coordinate             
             * @param c               Optionala scaling factor used for the z coordinate             
             */
            scale(a: number, b: number, c: number): any;
            /**
             * forms a scaling matrix
             * The resulting matrix is used to scale (magnify) points by specified offsets.
             * 
             * @param a a scaling factor used for the x coordinate, or a uniform scaling factor used for the all coordinates,or a point-like object, which specifies scale factors for 3 dimensions             
             * @param b               Optionala scaling factor used for the y coordinate             
             * @param c               Optionala scaling factor used for the z coordinate             
             */
            scale(a: Object, b: number, c: number): any;
            /**
             * forms a translation matrix
             * The resulting matrix is used to translate (move) points by specified offsets.
             * 
             * @param a an x coordinate value, or a point-like object, which specifies offsets for 3 dimensions             
             * @param b               Optionala y coordinate value             
             * @param c               Optionala z coordinate value             
             */
            translate(a: number, b: number, c: number): any;
            /**
             * forms a translation matrix
             * The resulting matrix is used to translate (move) points by specified offsets.
             * 
             * @param a an x coordinate value, or a point-like object, which specifies offsets for 3 dimensions             
             * @param b               Optionala y coordinate value             
             * @param c               Optionala z coordinate value             
             */
            translate(a: Object, b: number, c: number): any;
        }
        module matrix {
            /**
             * a 3D matrix object
             * Normalizes a 3D matrix-like object. If arrays is passed,
             * all objects of the array are normalized and multiplied sequentially.
             * 
             * @param arg a 3D matrix-like object, a number, or an array of such objects             
             */
            class Matrix3D {
                constructor(arg: Object);
            }
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gfx3d/gradient.html
         *
         * calculate a cylindrical gradient
         * 
         * @param model color model     
         * @param material defines visual properties     
         * @param center center of the cylinder's bottom     
         * @param radius radius of the cylinder     
         * @param from from position in radians     
         * @param to from position in radians     
         * @param matrix the cumulative transformation matrix     
         */
        interface gradient { (model: dojox.gfx3d.lighting.Model, material: Object, center: Object, radius: number, from: number, to: number, matrix: Object): void }
        module gradient {
            /**
             * tolerable difference in colors between gradient steps
             * 
             */
            var tolerance: number
        }

    }

}
declare module "dojox/gfx3d" {
    var exp: dojox.gfx3d
    export=exp;
}
declare module "dojox/gfx3d/object" {
    var exp: dojox.gfx3d.object
    export=exp;
}
declare module "dojox/gfx3d/gradient" {
    var exp: dojox.gfx3d.gradient
    export=exp;
}
declare module "dojox/gfx3d/_base" {
    var exp: dojox.gfx3d._base
    export=exp;
}
declare module "dojox/gfx3d/_base.Cube" {
    var exp: dojox.gfx3d._base.Cube
    export=exp;
}
declare module "dojox/gfx3d/_base.Cylinder" {
    var exp: dojox.gfx3d._base.Cylinder
    export=exp;
}
declare module "dojox/gfx3d/_base.Edges" {
    var exp: dojox.gfx3d._base.Edges
    export=exp;
}
declare module "dojox/gfx3d/_base.Polygon" {
    var exp: dojox.gfx3d._base.Polygon
    export=exp;
}
declare module "dojox/gfx3d/_base.Orbit" {
    var exp: dojox.gfx3d._base.Orbit
    export=exp;
}
declare module "dojox/gfx3d/_base.Object" {
    var exp: dojox.gfx3d._base.Object
    export=exp;
}
declare module "dojox/gfx3d/_base.Path3d" {
    var exp: dojox.gfx3d._base.Path3d
    export=exp;
}
declare module "dojox/gfx3d/_base.Quads" {
    var exp: dojox.gfx3d._base.Quads
    export=exp;
}
declare module "dojox/gfx3d/_base.Triangles" {
    var exp: dojox.gfx3d._base.Triangles
    export=exp;
}
declare module "dojox/gfx3d/_base.Scene" {
    var exp: dojox.gfx3d._base.Scene
    export=exp;
}
declare module "dojox/gfx3d/_base.Viewport" {
    var exp: dojox.gfx3d._base.Viewport
    export=exp;
}
declare module "dojox/gfx3d/_base._creators" {
    var exp: dojox.gfx3d._base._creators
    export=exp;
}
declare module "dojox/gfx3d/_base.defaultCube" {
    var exp: dojox.gfx3d._base.defaultCube
    export=exp;
}
declare module "dojox/gfx3d/_base.defaultEdges" {
    var exp: dojox.gfx3d._base.defaultEdges
    export=exp;
}
declare module "dojox/gfx3d/_base.defaultOrbit" {
    var exp: dojox.gfx3d._base.defaultOrbit
    export=exp;
}
declare module "dojox/gfx3d/_base.defaultCylinder" {
    var exp: dojox.gfx3d._base.defaultCylinder
    export=exp;
}
declare module "dojox/gfx3d/_base.defaultPath3d" {
    var exp: dojox.gfx3d._base.defaultPath3d
    export=exp;
}
declare module "dojox/gfx3d/_base.defaultPolygon" {
    var exp: dojox.gfx3d._base.defaultPolygon
    export=exp;
}
declare module "dojox/gfx3d/_base.defaultQuads" {
    var exp: dojox.gfx3d._base.defaultQuads
    export=exp;
}
declare module "dojox/gfx3d/_base.defaultTriangles" {
    var exp: dojox.gfx3d._base.defaultTriangles
    export=exp;
}
declare module "dojox/gfx3d/_base.drawer" {
    var exp: dojox.gfx3d._base.drawer
    export=exp;
}
declare module "dojox/gfx3d/_base.lighting" {
    var exp: dojox.gfx3d._base.lighting
    export=exp;
}
declare module "dojox/gfx3d/_base.scheduler" {
    var exp: dojox.gfx3d._base.scheduler
    export=exp;
}
declare module "dojox/gfx3d/_base.matrix" {
    var exp: dojox.gfx3d._base.matrix
    export=exp;
}
declare module "dojox/gfx3d/_base.vector" {
    var exp: dojox.gfx3d._base.vector
    export=exp;
}
declare module "dojox/gfx3d/scheduler" {
    var exp: dojox.gfx3d.scheduler
    export=exp;
}
declare module "dojox/gfx3d/scheduler.BinarySearchTree" {
    var exp: dojox.gfx3d.scheduler.BinarySearchTree
    export=exp;
}
declare module "dojox/gfx3d/scheduler.drawer" {
    var exp: dojox.gfx3d.scheduler.drawer
    export=exp;
}
declare module "dojox/gfx3d/scheduler.scheduler" {
    var exp: dojox.gfx3d.scheduler.scheduler
    export=exp;
}
declare module "dojox/gfx3d/lighting" {
    var exp: dojox.gfx3d.lighting
    export=exp;
}
declare module "dojox/gfx3d/lighting.Model" {
    var exp: dojox.gfx3d.lighting.Model
    export=exp;
}
declare module "dojox/gfx3d/lighting.finish" {
    var exp: dojox.gfx3d.lighting.finish
    export=exp;
}
declare module "dojox/gfx3d/vector" {
    var exp: dojox.gfx3d.vector
    export=exp;
}
declare module "dojox/gfx3d/matrix" {
    var exp: dojox.gfx3d.matrix
    export=exp;
}

