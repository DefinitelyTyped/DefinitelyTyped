// Type definitions for OpenLayers.js 2.10
// Project: https://github.com/openlayers/openlayers
// Definitions by: Ilya Bolkhovsky <https://github.com/bolhovsky>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module OpenLayers {

    export interface MapOptions {

        projection?: string;

        maxExtend?: Bounds;

        center?: LonLat;
    }

    export interface DistanceOptions {
        /**
<<<<<<< HEAD
         * Return details from the distance calculation.  Default is false.
=======
         *Return details from the distance calculation.  Default is false.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        details?: boolean;

        /**
<<<<<<< HEAD
         * Calculate the distance from this geometry to the nearest edge of the target geometry.  Default is true.  If true, calling distanceTo from a geometry that is wholly contained within the target will result in a non-zero distance.  If false, whenever geometries intersect, calling distanceTo will return 0.  If false, details cannot be returned.
=======
         *Calculate the distance from this geometry to the nearest edge of the target geometry.  Default is true.  If true, calling distanceTo from a geometry that is wholly contained within the target will result in a non-zero distance.  If false, whenever geometries intersect, calling distanceTo will return 0.  If false, details cannot be returned.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        edge?: boolean;
    }

    export interface BoundsOptions {
        /**
<<<<<<< HEAD
         * Whether or not to include the border. Default is true.
=======
         *Whether or not to include the border. Default is true.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        inclusive?: boolean;

        /**
<<<<<<< HEAD
         * If a worldBounds is provided, the
         * ll will be considered as contained if it exceeds the world bounds,
         * but can be wrapped around the dateline so it is contained by this
         * bounds.
=======
         *If a worldBounds is provided, the
         *ll will be considered as contained if it exceeds the world bounds,
         *but can be wrapped around the dateline so it is contained by this
         *bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        worldBounds?: Bounds;
    }

    export interface WrapDateLineOptions {
        /**
<<<<<<< HEAD
         * Allow for a margin of error
=======
         *Allow for a margin of error
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         * with the 'left' value of this
         * bound.
         * Default is 0.
         */
        leftTolerance?: number;

        /**
<<<<<<< HEAD
         * Allow for a margin of error
=======
         *Allow for a margin of error
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         * with the 'right' value of this
         * bound.
         * Default is 0.
         */
        rightTolerance?: number;
    }

    export class Animation {
        // TODO
    }

    export class String {
        // TODO
    }

    export class Number {
        // TODO
    }

    export class Function {
        // TODO
    } 

    export class Array {
        // TODO
    } 

    export class Console {
        // TODO
    } 

    export class Control {
        // TODO
    } 

    export class Event {
        // TODO
    } 

    export class Events {
        // TODO
    } 

    export class Feature {
        // TODO
    } 

    export class Filter {
        // TODO
    } 

    export class Format {
        // TODO
    } 

    export class Handler {
        // TODO
    } 

    export class Icon {
        // TODO
    } 

    export class Kinetic {
        // TODO
    } 

    export class Lang {
        // TODO
    } 

    export class Layer {
        // TODO
    } 

    export class Marker {
        // TODO
    } 

    export class Popup {
        // TODO
    } 

    export class Protocol {
        // TODO
    } 

    export class Renderer {
        // TODO
    } 

    export class Request {
        // TODO
    } 

    export class Rule {
        // TODO
    } 

    export class SingleFile {
        // TODO
    } 

    export class Spherical {
        // TODO
    } 

    export class Strategy {
        // TODO
    } 

    export class Style {
        // TODO
    } 

    export class Style2 {
        // TODO
    } 

    export class StyleMap {
        // TODO
    } 

    export class Symbolizer {
        // TODO
    } 

    export class Tile {
        // TODO
    } 

    export class TileManager {
        // TODO
    } 

    export class Tween {
        // TODO
    } 

    export class Util {
        // TODO
    } 

    export class WPSClient {
        // TODO
    } 

    export class WPSProcess {
        // TODO
    } 

    export class Geometry {
        /**
<<<<<<< HEAD
         * A unique identifier for this geometry.
=======
         *A unique identifier for this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        id: string;

        /**
<<<<<<< HEAD
         * This is set when a Geometry is added as component
         * of another geometry
=======
         *This is set when a Geometry is added as component
         *of another geometry
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        parent: Geometry;

        /**
<<<<<<< HEAD
         * The bounds of this geometry
=======
         *The bounds of this geometry
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        bounds: Bounds;

        /**
<<<<<<< HEAD
          * A Geometry is a description of a geographic object.
=======
          *A Geometry is a description of a geographic object.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        constructor();

        /**
<<<<<<< HEAD
          * Destroy this geometry.
=======
          *Destroy this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        destroy(): void;

        /**
<<<<<<< HEAD
         * Create a clone of this geometry.  Does not set any non-standard properties of the cloned geometry.
=======
         *Create a clone of this geometry.  Does not set any non-standard properties of the cloned geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        clone(): Geometry;

        /**
<<<<<<< HEAD
         * Set the bounds for this Geometry.
=======
         *Set the bounds for this Geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        setBounds(bounds: Bounds): void;

        /**
<<<<<<< HEAD
         * Nullify this components bounds and that of its parent as well.
=======
         *Nullify this components bounds and that of its parent as well.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        clearBounds(): void;

        /**
<<<<<<< HEAD
         * Extend the existing bounds to include the new bounds.
         * If geometry's bounds is not yet set, then set a new Bounds.
=======
         *Extend the existing bounds to include the new bounds.
         *If geometry's bounds is not yet set, then set a new Bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        extendBounds(newBounds: Bounds): void;

        /**
<<<<<<< HEAD
         * Get the bounds for this Geometry.  If bounds is not set, it is calculated again, this makes queries faster.
=======
         *Get the bounds for this Geometry.  If bounds is not set, it is calculated again, this makes queries faster.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        getBounds(): Bounds;

        /**
<<<<<<< HEAD
         * Calculate the closest distance between two geometries (on the x-y plane).
=======
         *Calculate the closest distance between two geometries (on the x-y plane).
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        distanceTo(geometry: Geometry, options: Object): Object;

        /**
<<<<<<< HEAD
         * Return a list of all points in this geometry.
=======
         *Return a list of all points in this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        getVertices(nodes: boolean): Array;

        /**
<<<<<<< HEAD
         * Return whether or not the geometry is at the specified location
=======
         *Return whether or not the geometry is at the specified location
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        atPoint(lonlat: LonLat, toleranceLon?: number, toleranceLat?: number): boolean;

        /**
<<<<<<< HEAD
         * Returns the length of the collection by summing its parts
=======
         *Returns the length of the collection by summing its parts
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        getLength(): number;

        /**
<<<<<<< HEAD
         * Returns the area of the collection by summing its parts
=======
         *Returns the area of the collection by summing its parts
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        getArea(): number;

        /**
<<<<<<< HEAD
         * Returns a text representation of the geometry. If the WKT format is
=======
         *Returns a text representation of the geometry. If the WKT format is
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         * included in a build, this will be the Well-Known Text
         * representation.
         */
        toString(): string;

        /**
<<<<<<< HEAD
         * Calculate the centroid of this geometry.  This method is defined in subclasses.
=======
         *Calculate the centroid of this geometry.  This method is defined in subclasses.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        getCentroid(): Geometry.Point;

        static CLASS_NAME: string;
    }    

    export class Projection {
        /**
<<<<<<< HEAD
          * This class offers several methods for interacting with a wrapped pro4js projection object.
=======
          *This class offers several methods for interacting with a wrapped pro4js projection object.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        constructor(projCode: string, options?: any);

        /**
<<<<<<< HEAD
          * Get the string SRS code.
=======
          *Get the string SRS code.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        getCode(): string;

        /**
<<<<<<< HEAD
          * Get the units string for the projection -- returns null if proj4js is not available.
=======
          *Get the units string for the projection -- returns null if proj4js is not available.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        getUnits(): string;

        /**
<<<<<<< HEAD
          * Set a custom transform method between two projections.  Use this method in cases where the proj4js lib is not available or where custom projections need to be handled.
=======
          *Set a custom transform method between two projections.  Use this method in cases where the proj4js lib is not available or where custom projections need to be handled.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        addTransform(from: string, to: string, method: () => void);

        /**
<<<<<<< HEAD
          * Transform a point coordinate from one projection to another. Note that the input point is transformed in place.
=======
          *Transform a point coordinate from one projection to another. Note that the input point is transformed in place.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        transform(point: Geometry.Point, source: Projection, dest: OpenLayers.Projection): Object;

        /**
<<<<<<< HEAD
          * Transform a point coordinate from one projection to another. Note that the input point is transformed in place.
=======
          *Transform a point coordinate from one projection to another. Note that the input point is transformed in place.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        transform(point: Object, source: Projection, dest: OpenLayers.Projection): Object;

        /**
<<<<<<< HEAD
          * A null transformation useful for defining projection aliases when proj4js is not available:
=======
          *A null transformation useful for defining projection aliases when proj4js is not available:
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        nullTransform(point: Object): Function;
    }

    export class Bounds {
        /**
<<<<<<< HEAD
         * Minimum horizontal coordinate.
=======
         *Minimum horizontal coordinate.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        left: number;

        /**
<<<<<<< HEAD
         * Minimum vertical coordinate.
=======
         *Minimum vertical coordinate.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        bottom: number;

        /**
<<<<<<< HEAD
         * Maximum horizontal coordinate.
=======
         *Maximum horizontal coordinate.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        right: number;

        /**
<<<<<<< HEAD
         * Maximum vertical coordinate.
=======
         *Maximum vertical coordinate.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        top: number;

        /**
<<<<<<< HEAD
         * Construct a new bounds object. Coordinates can either be passed as four
=======
         *Construct a new bounds object. Coordinates can either be passed as four
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         * arguments, or as a single argument.
         */
        constructor(left: number, bottom: number, right: number, top: number);

        /**
<<<<<<< HEAD
         * Construct a new bounds object. Coordinates can either be passed as four
=======
         *Construct a new bounds object. Coordinates can either be passed as four
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         * arguments, or as a single argument.
         */
        constructor(bounds: number[]);

        /**
<<<<<<< HEAD
         * Create a cloned instance of this bounds.
=======
         *Create a cloned instance of this bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        clone(): Bounds;

        /**
<<<<<<< HEAD
         * Test a two bounds for equivalence.
=======
         *Test a two bounds for equivalence.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        equals(bounds: Bounds): boolean;

        /**
<<<<<<< HEAD
         * Returns a string representation of the bounds object.
=======
         *Returns a string representation of the bounds object.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        toString(): string;

        /**
<<<<<<< HEAD
         * Returns an array representation of the bounds object.
=======
         *Returns an array representation of the bounds object.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        toArray(reverseAxisOrder?: boolean): number[];

        /**
<<<<<<< HEAD
         * Returns a boundingbox-string representation of the bounds object.
=======
         *Returns a boundingbox-string representation of the bounds object.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        toBBOX(decimal?: number, reverseAxisOrder?: boolean): string;

        /**
<<<<<<< HEAD
         * Create a new polygon geometry based on this bounds.
=======
         *Create a new polygon geometry based on this bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        toGeometry(): OpenLayers.Geometry.Polygon;

        /**
<<<<<<< HEAD
         * Returns the width of the bounds.
=======
         *Returns the width of the bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        getWidth(): number;

        /**
<<<<<<< HEAD
         * Returns the height of the bounds.
=======
         *Returns the height of the bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        getHeight(): number;

        /**
         *
         */
        getSize(): Size;

        /**
         * Returns the Pixel object which represents the center of the bounds.
         */
        getCenterPixel(): Pixel;

        /**
<<<<<<< HEAD
         * Returns the LonLat object which represents the center of the bounds.
=======
         *Returns the LonLat object which represents the center of the bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        getCenterLonLat(): LonLat;

        /**
<<<<<<< HEAD
         * Scales the bounds around a pixel or lonlat. Note that the new
         * bounds may return non-integer properties, even if a pixel
         * is passed. 
=======
         *Scales the bounds around a pixel or lonlat. Note that the new
         *bounds may return non-integer properties, even if a pixel
         *is passed. 
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        scale(ratio: number, origin?: Pixel);

        /**
<<<<<<< HEAD
         * Scales the bounds around a pixel or lonlat. Note that the new
         * bounds may return non-integer properties, even if a pixel
         * is passed. 
=======
         *Scales the bounds around a pixel or lonlat. Note that the new
         *bounds may return non-integer properties, even if a pixel
         *is passed. 
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        scale(ratio: number, origin?: LonLat);

        /**
<<<<<<< HEAD
         * Shifts the coordinates of the bound by the given horizontal and vertical
=======
         *Shifts the coordinates of the bound by the given horizontal and vertical
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         * deltas.
         */
        add(x: number, y: number): Bounds;

        /**
<<<<<<< HEAD
         * Extend the bounds.
=======
         *Extend the bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        extend(object: LonLat): void;

        /**
<<<<<<< HEAD
         * Extend the bounds.
=======
         *Extend the bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        extend(object: Geometry.Point): void;

        /**
<<<<<<< HEAD
         * Extend the bounds.
=======
         *Extend the bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        extend(object: Bounds): void;

        /**
         *
         */
        extendXY(x: number, y: number): void;

        /**
<<<<<<< HEAD
         * Returns whether the bounds object contains the given <OpenLayers.LonLat>.
=======
         *Returns whether the bounds object contains the given <OpenLayers.LonLat>.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        containsLonLat(ll: LonLat, options: BoundsOptions);

        /**
<<<<<<< HEAD
         * Returns whether the bounds object contains the given <OpenLayers.LonLat>.
=======
         *Returns whether the bounds object contains the given <OpenLayers.LonLat>.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        containsLonLat(ll: Object, options: BoundsOptions);

        /**
<<<<<<< HEAD
         * Returns whether the bounds object contains the given <OpenLayers.Pixel>.
=======
         *Returns whether the bounds object contains the given <OpenLayers.Pixel>.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        containsPixel(px: Pixel, inclusive: boolean): boolean;

        /**
<<<<<<< HEAD
         * Returns whether the bounds object contains the given x and y.
=======
         *Returns whether the bounds object contains the given x and y.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        contains(x: number, y: number, inclusive?: boolean): boolean;

        /**
<<<<<<< HEAD
         * Determine whether the target bounds intersects this bounds. Bounds are
         * considered intersecting if any of their edges intersect or if one
         * bounds contains the other.
=======
         *Determine whether the target bounds intersects this bounds. Bounds are
         *considered intersecting if any of their edges intersect or if one
         *bounds contains the other.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        intersectsBounds(bounds: Bounds, options: BoundsOptions): boolean;

        /**
<<<<<<< HEAD
         * Returns whether the bounds object contains the given <OpenLayers.Bounds>.
=======
         *Returns whether the bounds object contains the given <OpenLayers.Bounds>.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        containsBounds(bounds: Bounds, partial: boolean, inclusive: boolean): boolean;

        /**
<<<<<<< HEAD
         * Returns the the quadrant ("br", "tr", "tl", "bl") in which the given
=======
         *Returns the the quadrant ("br", "tr", "tl", "bl") in which the given
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         *<OpenLayers.LonLat> lies.
         */
        determineQuadrant(lonlat: LonLat): string;

        /**
<<<<<<< HEAD
         * Transform the Bounds object from source to dest.
=======
         *Transform the Bounds object from source to dest.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        transform(source: Projection, dest: Projection): Bounds;

        /**
<<<<<<< HEAD
         * Wraps the bounds object around the dateline.
=======
         *Wraps the bounds object around the dateline.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        wrapDateLine(maxExtent: Bounds, options: WrapDateLineOptions): Bounds;

        static CLASS_NAME: string;

        /**
<<<<<<< HEAD
         * Alternative constructor that builds a new OpenLayers.Bounds from a
         * parameter string.
=======
         *Alternative constructor that builds a new OpenLayers.Bounds from a
         *parameter string.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        static fromString(str: string, reverseAxisOrder: boolean): Bounds;

        /**
<<<<<<< HEAD
         * Alternative constructor that builds a new OpenLayers.Bounds from an array.
=======
         *Alternative constructor that builds a new OpenLayers.Bounds from an array.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        static fromArray(bbox: number[], reverseAxisOrder: boolean): Bounds;

        /**
<<<<<<< HEAD
         * Alternative constructor that builds a new OpenLayers.Bounds from a size.
=======
         *Alternative constructor that builds a new OpenLayers.Bounds from a size.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        static fromSize(size: Size): Bounds;

        /**
<<<<<<< HEAD
         * Get the opposite quadrant for a given quadrant string.
=======
         *Get the opposite quadrant for a given quadrant string.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
         */
        static oppositeQuadrant(quadrant: string): string;
    }

    export class LonLat {
        /**
<<<<<<< HEAD
          * Create a new map location.  Coordinates can be passed either as two arguments, or as a single argument.
=======
          *Create a new map location.  Coordinates can be passed either as two arguments, or as a single argument.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        constructor(lon: number, lat: number);

        /**
<<<<<<< HEAD
          * Create a new map location.  Coordinates can be passed either as two arguments, or as a single argument.
=======
          *Create a new map location.  Coordinates can be passed either as two arguments, or as a single argument.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        constructor(lonlat: number[]);

        /**
<<<<<<< HEAD
          * Shortened String representation of OpenLayers.LonLat object.
=======
          *Shortened String representation of OpenLayers.LonLat object.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        toShortString(): string;

        /**
<<<<<<< HEAD
          * New OpenLayers.LonLat object with the same lon and lat values
=======
          *New OpenLayers.LonLat object with the same lon and lat values
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        clone(): LonLat;

        /**   
<<<<<<< HEAD
          * A new OpenLayers.LonLat object with the lon and lat passed-in added to this’s.
=======
          *A new OpenLayers.LonLat object with the lon and lat passed-in added to this’s.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        add(lon: number, lat: number): LonLat;

        /**   
<<<<<<< HEAD
          * Boolean value indicating whether the passed-in OpenLayers.LonLat object has the same lon and lat components as this.  Note: if ll passed in is null, returns false.
=======
          *Boolean value indicating whether the passed-in OpenLayers.LonLat object has the same lon and lat components as this.  Note: if ll passed in is null, returns false.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        equals(ll: LonLat): boolean;

        /**   
<<<<<<< HEAD
          * Transform the LonLat object from source to dest.  This transformation is in place: if you want a new lonlat, use .clone() first.
=======
          *Transform the LonLat object from source to dest.  This transformation is in place: if you want a new lonlat, use .clone() first.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        transform(source: Projection, dest: Projection): LonLat;

        /**
<<<<<<< HEAD
          * Returns a copy of this lonlat, but wrapped around the "dateline" (as specified by the borders of maxExtent).
=======
          *Returns a copy of this lonlat, but wrapped around the "dateline" (as specified by the borders of maxExtent).
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
          */
        wrapDateLine(maxExtend: Bounds): LonLat;
    }

    export class Map {
<<<<<<< HEAD
        /**
         * Unique identifier for the map
         */
        id: string;

        /**
         * For a base layer that supports it, allow the map resolution
         * to be set to a value between one of the values in the resolutions
         * array. Default is false.
         */
        fractionalZoom: boolean;

        /**
         * An events object that handles all
         * events on the map
         */
        events: Events;

        /**
         * Allow the map to function with "overlays" only. Defaults to
         * false. If true, the lowest layer in the draw order will act as
         * the base layer. In addition, if set to true, all layers will
         * have isBaseLayer set to false when they are added to the map.
         */
        allOverlays: boolean;

        /**
         * The element that contains the map (or an id for that element).
         */
        div: Object;

        /**
         * The map is currently being dragged.
         */
        dragging: boolean;

        /**
         * Size of the main div (this.div)
         */
        size: Size;

        /**
         * The element that represents the map viewport
         */
        viewPortDiv: HTMLDivElement;

        /**
         * The lonlat at which the later container was re-initialized (on-zoom)
         */
        layerContainerOrigin: LonLat;

        /**
         * The element that contains the layers.
         */
        layerContainerDiv: HTMLDivElement;

        /**
         * Ordered list of layers in the map
         */
        layers: Layer[];

        /**
         * List of controls associated with the map.
         */
        controls: Control[];

        /**
         * List of popups associated with the map
         */
        popups: Popup[];

        /**
         * The currently selected base layer. This determines
         * min/max zoom level, projection, etc.
         */
        baseLayer: Layer;

        /**
         * The current center of the map
         */
        center: LonLat;

        /**
         * The resolution of the map.
         */
        resolution: number;

        /**
         * The current zoom level of the map
         */
        zoom: number;

        /**
         * The ratio of the current extent within which panning will tween.
         */
        panRatio: number;

        /**
         * The options object passed to the class constructor. Read-only.
         */
        options: Object;

        /**
         * Set in the map options to override the default tile size for this map.
         */
        tileSize: Size;

        /**
         * Set in the map options to specify the default projection
         * for layers added to this map. When using a projection other than EPSG:4326
         * (CRS:84, Geographic) or EPSG:3857 (EPSG:900913, Web Mercator),
         * also set maxExtent, maxResolution or resolutions. Default is "EPSG:4326".
         * Note that the projection of the map is usually determined
         * by that of the current baseLayer (see <baseLayer> and <getProjectionObject>).
         */
        projection: string;

        /**
         * The map units. Possible values are 'degrees' (or 'dd'), 'm',
         * 'ft', 'km', 'mi', 'inches'. Normally taken from the projection.
         * Only required if both map and layers do not define a projection,
         * or if they define a projection which does not define units
         */
        units: string;

        /**
         * A list of map resolutions (map units per pixel) in
         * descending order. If this is not set in the layer constructor, it
         * will be set based on other resolution related properties
         * (maxExtent, maxResolution, maxScale, etc.).
         */
        resolutions: number[];

        /**
         * Required if you are not displaying the whole world on a tile
         * with the size specified in <tileSize>.
         */
        maxResolution: number;



=======
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1

        constructor(id: HTMLElement, options?: MapOptions);

        constructor(id: string, options?: MapOptions);
<<<<<<< HEAD

        /**
         *
         */
        addLayer(layer: Layer): boolean;

        /**
         * Set the map center (and optionally, the zoom level).
         */
        setCenter(lonlat: LonLat, zoom?: number, dragging?: boolean, forceZoomChange?: boolean): void;

        /**
         * Set the map center (and optionally, the zoom level).
         */
        setCenter(lonlat: number[], zoom?: number, dragging?: boolean, forceZoomChange?: boolean): void;

        /**
         *
         */
        prop: string;
=======
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
    }

    export class Class {

    }

    export class Date {

    }

    export class Element {

    }

    export class Pixel {

    }

    export class Size {

    }

    module Geometry {

        export class Collection extends Geometry {
            /**
<<<<<<< HEAD
             * The component parts of this geometry
=======
             *The component parts of this geometry
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            components: Geometry[];

            /**
<<<<<<< HEAD
             * An array of class names representing the types of
             * components that the collection can include. A null value means the
             * component types are not restricted.
=======
             *An array of class names representing the types of
             *components that the collection can include. A null value means the
             *component types are not restricted.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            componentTypes: string[];

            /**
<<<<<<< HEAD
             * Creates a Geometry Collection -- a list of geoms.
=======
             *Creates a Geometry Collection -- a list of geoms.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            constructor(components: Geometry[]);

            /**
<<<<<<< HEAD
             * Destroy this geometry.
=======
             *Destroy this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            destroy(): void;

            /**
<<<<<<< HEAD
             * Clone this geometry.
=======
             *Clone this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            clone(): Collection;

            /**
<<<<<<< HEAD
             * Get a string representing the components for this collection
=======
             *Get a string representing the components for this collection
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            getComponentsString(): string;

            /**
<<<<<<< HEAD
             * Recalculate the bounds by iterating through the components and
             * calling calling extendBounds() on each item.
=======
             *Recalculate the bounds by iterating through the components and
             *calling calling extendBounds() on each item.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            calculateBounds();

            /**
<<<<<<< HEAD
             * Add components to this geometry.
=======
             *Add components to this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            addComponents(components: Geometry[]);

            /**
<<<<<<< HEAD
             * Add a new component (geometry) to the collection. If this.componentTypes
             * is set, then the component class name must be in the componentTypes array.
=======
             *Add a new component (geometry) to the collection. If this.componentTypes
             *is set, then the component class name must be in the componentTypes array.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            addComponent(component: Geometry, index: number): boolean;

            /**
<<<<<<< HEAD
             * Remove components from this geometry.
=======
             *Remove components from this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            removeComponents(components: Geometry[]): boolean;

            /**
<<<<<<< HEAD
             * Remove a component from this geometry.
=======
             *Remove a component from this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            removeComponent(component: Geometry): boolean;

            /**
<<<<<<< HEAD
             * Calculate the length of this geometry
=======
             *Calculate the length of this geometry
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            getLength(): number;

            /**
<<<<<<< HEAD
             * Calculate the area of this geometry. Note how this function is overridden
             * in <OpenLayers.Geometry.Polygon>.
=======
             *Calculate the area of this geometry. Note how this function is overridden
             *in <OpenLayers.Geometry.Polygon>.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            getArea(): number;

            /**
<<<<<<< HEAD
             * Calculate the approximate area of the polygon were it projected onto
             * the earth.
=======
             *Calculate the approximate area of the polygon were it projected onto
             *the earth.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            getGeodesicArea(projection: Projection): number;

            /**
<<<<<<< HEAD
             * Compute the centroid for this geometry collection.
=======
             *Compute the centroid for this geometry collection.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            getCentroid(weighted?: boolean): Point;

            /**
<<<<<<< HEAD
             * Calculate the approximate length of the geometry were it projected onto
             * the earth.
=======
             *Calculate the approximate length of the geometry were it projected onto
             *the earth.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            getGeodesicLength(projection: Projection): number;

            /**
<<<<<<< HEAD
             * Moves a geometry by the given displacement along positive x and y axes.
             * This modifies the position of the geometry and clears the cached
             * bounds.
=======
             *Moves a geometry by the given displacement along positive x and y axes.
             *This modifies the position of the geometry and clears the cached
             *bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            move(x: number, y: number): void;

            /**
<<<<<<< HEAD
             * Rotate a geometry around some origin
=======
             *Rotate a geometry around some origin
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            rotate(angle: number, origin: Point);

            /**
<<<<<<< HEAD
             * Resize a geometry relative to some origin. Use this method to apply
             * a uniform scaling to a geometry.
=======
             *Resize a geometry relative to some origin. Use this method to apply
             *a uniform scaling to a geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            resize(scale: number, origin: Point, ratio: number): Geometry;

            /**
<<<<<<< HEAD
             * Calculate the closest distance between two geometries (on the x-y plane).
=======
             *Calculate the closest distance between two geometries (on the x-y plane).
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            distanceTo(geometry: Geometry, options: DistanceOptions): Object;

            /**
<<<<<<< HEAD
             * Determine whether another geometry is equivalent to this one. Geometries
             * are considered equivalent if all components have the same coordinates.
=======
             *Determine whether another geometry is equivalent to this one. Geometries
             *are considered equivalent if all components have the same coordinates.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            equals(geometry: Geometry): boolean;

            /**
<<<<<<< HEAD
             * Reproject the components geometry from source to dest.
=======
             *Reproject the components geometry from source to dest.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            transform(source: Projection, dest: Projection): Geometry;

            /**
<<<<<<< HEAD
             * Determine if the input geometry intersects this one.
=======
             *Determine if the input geometry intersects this one.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            intersects(geometry: Geometry): boolean;

            /**
<<<<<<< HEAD
             * Return a list of all points in this geometry.
=======
             *Return a list of all points in this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            getVertices(nodes: boolean): Array;

            static CLASS_NAME: string;
        }

        export class Point extends Geometry {

            x: number;

            y: number;

            /**
<<<<<<< HEAD
             * Construct a point geometry.
=======
             *Construct a point geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            constructor(x: number, y: number);

            /**
<<<<<<< HEAD
             * Create a clone of this geometry.
=======
             *Create a clone of this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            clone(): Geometry;

            /**
<<<<<<< HEAD
             * An exact clone of this OpenLayers.Geometry.Point
=======
             *An exact clone of this OpenLayers.Geometry.Point
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            clone(obj: Point): Point;

            /**
<<<<<<< HEAD
             * Calculate the closest distance between two geometries (on the x-y plane).
=======
             *Calculate the closest distance between two geometries (on the x-y plane).
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            distanceTo(geometry: Geometry, options: DistanceOptions): Object;

            /**
<<<<<<< HEAD
             * Determine whether another geometry is equivalent to this one.  Geometries are considered equivalent if all components have the same coordinates.
=======
             *Determine whether another geometry is equivalent to this one.  Geometries are considered equivalent if all components have the same coordinates.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            equals(geom: Point): boolean;

            /**
<<<<<<< HEAD
             * Moves a geometry by the given displacement along positive x and y axes.  This modifies the position of the geometry and clears the cached bounds.
=======
             *Moves a geometry by the given displacement along positive x and y axes.  This modifies the position of the geometry and clears the cached bounds.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            move(x: number, y: number): void;

            /**
<<<<<<< HEAD
             * Rotate a point around another.
=======
             *Rotate a point around another.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            rotate(angle: number, origin: Point);

            /**
<<<<<<< HEAD
             * Resize a point relative to some origin.  For points, this has the effect of scaling a vector (from the origin to the point).  This method is more useful on geometry collection subclasses.
=======
             *Resize a point relative to some origin.  For points, this has the effect of scaling a vector (from the origin to the point).  This method is more useful on geometry collection subclasses.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            resize(scale: number, origin: Point, ratio: number): Geometry;

            /**
<<<<<<< HEAD
             * Determine if the input geometry intersects this one.
=======
             *Determine if the input geometry intersects this one.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            intersects(geometry: Geometry): boolean;

            /**
<<<<<<< HEAD
             * Translate the x,y properties of the point from source to dest.
=======
             *Translate the x,y properties of the point from source to dest.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            transform(source: Projection, dest: Projection): Geometry;

            /**
<<<<<<< HEAD
             * Return a list of all points in this geometry.
=======
             *Return a list of all points in this geometry.
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
             */
            getVertices(nodes: boolean): Array;
        }

        export class Curve extends Geometry.MultiPoint {

        }

        export class LineString extends Geometry.Curve {

        }

        export class LinearRing extends Geometry.LineString {

        }

        export class MultiLineString extends Geometry.Collection {

        }

        export class MultiPoint extends Geometry.Collection {

        }

        export class MultiPolygon extends Geometry.Collection {

        }

        export class Polygon extends Geometry.Collection {

        }
    }

    module Control {
        export class ArgParser {

        }

        export class Attribution {

        }

        export class Button {

        }

        export class CacheRead {

        }

        export class CacheWrite {

        }

        export class DragFeature {

        }

        export class DragPan {

        }

        export class DrawFeature {

        }

        export class EditingToolbar {

        }

        export class Geolocate {

        }

        export class GetFeature {

        }

        export class Graticule {

        }

        export class KeyboardDefaults {

        }

        export class LayerSwitcher {

        }

        export class Measure {

        }

        export class ModifyFeature {

        }

        export class MousePosition {

        }

        export class NavToolbar {

        }

        export class Navigation {

        }

        export class NavigationHistory {

        }

        export class OverviewMap {

        }

        export class Pan {

        }

        export class PanPanel {

        }

        export class PanZoom {

        }

        export class PanZoomBar {

        }

        export class Panel {

        }

        export class Permalink {

        }

        export class PinchZoom {

        }

        export class SLDSelect {

        }

        export class Scale {

        }

        export class ScaleLine {

        }

        export class SelectFeature {

        }

        export class Snapping {

        }

        export class Split {

        }

        export class TextButtonPanel {

        }

        export class TouchNavigation {

        }

        export class TransformFeature {

        }

        export class UTFGrid {

        }

        export class WMSGetFeatureInfo {

        }

        export class WMTSGetFeatureInfo {

        }

        export class Zoom {

        }

        export class ZoomBox {

        }

        export class ZoomIn {

        }

        export class ZoomOut {

        }

        export class ZoomPanel {

        }

        export class ZoomToMaxExtent {

        }
    }

    module Events {
        export class buttonclick extends OpenLayers.Class {

        }

        export class featureclick extends OpenLayers.Class {

        }
    }

    module Feature {
        export class Vector {

        }
    }

    module Filter {
        export class Comparison {

        }

        export class FeatureId {

        }

        export class Function {

        }

        export class Logical {

        }

        export class Spatial {

        }
    }

    module Format {
        export class ArcXML {
            constructor();
        }

        export class Atom {

        }

        export class CQL {

        }

        export class CSWGetDomain {

        }

        export class CSWGetRecords {

        }

        export class Context { }
        export class EncodedPolyline { }
        export class Filter { }
        export class GML { }
        export class GPX { }
        export class GeoJSON { }
        export class GeoRSS { }
        export class JSON { }
        export class KML { }
        export class OGCExceptionReport { }
        export class OSM { }
        export class OWSCommon { }
        export class OWSContext { }
        export class QueryStringFilter { }
        export class SLD { }
        export class SOSCapabilities { }
        export class SOSGetFeatureOfInterest { }
        export class SOSGetObservation { }
        export class TMSCapabilities { }
        export class Text { }
        export class WCSCapabilities { }
        export class WCSDescribeCoverage { }
        export class WCSGetCoverage { }
        export class WFS { }
        export class WFSCapabilities { }
        export class WFSDescribeFeatureType { }
        export class WFST { }
        export class WKT { }
        export class WMC { }
        export class WMSCapabilities { }
        export class WMSDescribeLayer { }
        export class WMSGetFeatureInfo { }
        export class WMTSCapabilities { }
        export class WPSCapabilities { }
        export class WPSDescribeProcess { }
        export class WPSExecute { }
        export class XLS { }
        export class XML { }

        module ArcXML {
            export class Features extends OpenLayers.Class {

            }
        }

        module CSWGetDomain {
            export class v2_0_2 { }
        }

        module CSWGetRecords {
            export class v2_0_2 { }
        }

        module Filter {

        }

        module GML {

        }

        module OWSCommon {

        }

        module OWSContext {

        }

        module SLD {

        }

        module SOSCapabilities {

        }

        module WCSCapabilities {

        }

        module WCSDescribeCoverage {

        }

        module WFSCapabilities {

        }

        module WFST {

        }

        module WMC {

        }

        module WMSCapabilities {


        }

        module WMSDescribeLayer {

        }

        module WMTSCapabilities {

        }

        module WPSCapabilities {

        }

        module XLS {

        }

        module XML {

        }
    }

    module Handler {
        export class Box {

        }

        export class Click {

        }

        export class Drag {

        }

        export class Feature {

        }

        export class Hover {

        }

        export class Keyboard {

        }

        export class MouseWheel {

        }

        export class Path {

        }

        export class Pinch {

        }

        export class Point {

        }

        export class Polygon {

        }

        export class RegularPolygon {

        }
    }

    module Lang {

    }

    module Layer {
<<<<<<< HEAD
        export interface WMSGetMapParams {
            version?: string;
            exceptions?: string;
            transparent?: string;
            format?: string;
            styles?: string;
            layers: string;
            service?: string;
        }

        export interface WMSOptions {
            opacity?: number;
            singleTile?: boolean;
            isBaseLayer?: boolean;
            encodeBBOX?: boolean;
            noMagic?: boolean;
            yx?: Object;
        }

        export interface TileOptions {
            crossOriginKeyword?: string;
        }

=======
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
        export class ArcGIS93Rest { }
        export class ArcGISCache { }
        export class ArcIMS { }
        export class Bing { }
        export class Boxes { }
        export class EventPane { }
        export class FixedZoomLevels { }
        export class GeoRSS { }
        export class Google { }
        export class Grid { }
        export class HTTPRequest { }
        export class Image { }
        export class KaMap { }
        export class KaMapCache { }
        export class MapGuide { }
        export class MapServer { }
        export class Markers { }
<<<<<<< HEAD

        export class OSM extends Layer.XYZ {
            /**
             * The layer name. Defaults to "OpenStreetMap" if the first
             * argument to the constructor is null or undefined.
             */
            name: string;

            /**
             * The tileset URL scheme. Defaults to
             * : http://[a|b|c].tile.openstreetmap.org/${z}/${x}/${y}.png
             * (the official OSM tileset) if the second argument to the constructor
             * is null or undefined. To use another tileset you can have something
             * like this:
             * new OpenLayers.Layer.OSM("OpenCycleMap",
             * ["http://a.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
             * "http://b.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
             * "http://c.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png"]);
             */
            url: string[];

            /**
             * The layer attribution.
             */
            attribution: string;

            sphericalMercator: boolean;

            wrapDateLine: boolean;

            /**
             * optional configuration options for <OpenLayers.Tile> instances
             * created by this Layer.
             */
            tileOptions: TileOptions;

            constructor();

            constructor(name: string, url: string, options: TileOptions);

            /**
             * Create a clone of this layer
             */
            clone(): Layer.WMS;

            static CLASS_NAME: string;
        }

=======
        export class OSM { }
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
        export class PointGrid { }
        export class PointTrack { }
        export class SphericalMercator { }
        export class TMS { }
        export class Text { }
        export class TileCache { }
        export class UTFGrid { }
<<<<<<< HEAD
        export class Vector { }       

        export class WMS {
            /**
             * Default is true for WMS layer
             */
            isBaseLayer: boolean;

            /**
             * Should the BBOX commas be encoded? The WMS spec says 'no',
             * but some services want it that way. Default false.
             */
            encodeBBOX: boolean;

            /**
             * If true, the image format will not be automagicaly switched
             * from image/jpeg to image/png or image/gif when using
             * TRANSPARENT=TRUE. Also isBaseLayer will not changed by the
             * constructor. Default false. 
             */
            noMagic: boolean;

            /**
             * Keys in this object are EPSG codes for which the axis order
             * is to be reversed (yx instead of xy, LatLon instead of LonLat), with
             * true as value. This is only relevant for WMS versions >= 1.3.0, and
             * only if yx is not set in <OpenLayers.Projection.defaults> for the
             * used projection.
             */
            yx: Object;

           /**
            * Constructor: OpenLayers.Layer.WMS
            * Create a new WMS layer object
            *
            * Examples:
            *
            * The code below creates a simple WMS layer using the image/jpeg format.
            * (code)
            * var wms = new OpenLayers.Layer.WMS("NASA Global Mosaic",
            * "http://wms.jpl.nasa.gov/wms.cgi",
            * {layers: "modis,global_mosaic"});
            * (end)
            * Note the 3rd argument (params). Properties added to this object will be
            * added to the WMS GetMap requests used for this layer's tiles. The only
            * mandatory parameter is "layers". Other common WMS params include
            * "transparent", "styles" and "format". Note that the "srs" param will
            * always be ignored. Instead, it will be derived from the baseLayer's or
            * map's projection.
            *
            * The code below creates a transparent WMS layer with additional options.
            * (code)
            * var wms = new OpenLayers.Layer.WMS("NASA Global Mosaic",
            * "http://wms.jpl.nasa.gov/wms.cgi",
            * {
            * layers: "modis,global_mosaic",
            * transparent: true
            * }, {
            * opacity: 0.5,
            * singleTile: true
            * });
            * (end)
            * Note that by default, a WMS layer is configured as baseLayer. Setting
            * the "transparent" param to true will apply some magic (see <noMagic>).
            * The default image format changes from image/jpeg to image/png, and the
            * layer is not configured as baseLayer.
            *
            * Parameters:
            * name - {String} A name for the layer
            * url - {String} Base url for the WMS
            * (e.g. http://wms.jpl.nasa.gov/wms.cgi)
            * params - {Object} An object with key/value pairs representing the
            * GetMap query string parameters and parameter values.
            * options - {Object} Hashtable of extra options to tag onto the layer.
            * These options include all properties listed above, plus the ones
            * inherited from superclasses.
            */
            constructor(name: string, url: string, params: WMSGetMapParams, options: WMSOptions);

            /**
             * Create a clone of this layer
             */
            clone(): Layer.WMS;

            /**
             * Returns true if the axis order is reversed for the WMS version and
             * projection of the layer.
             */
            reverseAxisOrder(): boolean;

            /**
             * Return a GetMap query string for this layer
             */
            getURL(bounds: Bounds): string;

            /**
             * Catch changeParams and uppercase the new params to be merged in
             * before calling changeParams on the super class.
             * Once params have been changed, the tiles will be reloaded with
             * the new parameters.
             */
            mergeNewParams(newParams): void;

            /**
             * Combine the layer's url with its params and these newParams.
             *
             * Add the SRS parameter from projection -- this is probably
             * more eloquently done via a setProjection() method, but this
             * works for now and always.
             */
            getFullRequestString(newParams: Object, altUrl: string): string;

            static CLASS_NAME: string;
        }

=======
        export class Vector { }
        export class WMS { }
>>>>>>> c19fb92cad220a320f0e717d542712c03c15b3c1
        export class WMTS { }
        export class WorldWind { }
        export class XYZ { }
        export class Zoomify { }

        module Google {
            export class v3 { }
        }

        module Vector {
            export class RootContainer { }
        }
    }

    module Marker {
        export class Box { }
    }

    module Popup {
        export class Anchored { }
        export class Framed { }
        export class FramedCloud { }
    }

    module Protocol {
        export class CSW { }
        export class HTTP { }
        export class SOS { }
        export class Script { }
        export class WFS { }

        module CSW {
            export class v2_0_2 { }
        }

        module SOS {
            export class v1_0_0 { }
        }

        module WFS {
            export class v2_0_0 { }
        }
    }

    module Renderer {
        export class Canvas { }
        export class Elements { }
        export class SVG { }
        export class VML { }
    }

    module Request {
        export class XMLHttpRequest { }
    }

    module Strategy {
        export class BBOX { }
        export class Cluster { }
        export class Filter { }
        export class Fixed { }
        export class Paging { }
        export class Refresh { }
        export class Save { }
    }

    module Symbolizer {
        export class Line { }
        export class Point { }
        export class Polygon { }
        export class Raster { }
        export class Text { }
    }

    module Tile {
        export class Image { }
        export class UTFGrid { }

        module Image {
            export class IFrame { }
        }
    }

    module Util {
        export class vendorPrefix { }
    }
}

