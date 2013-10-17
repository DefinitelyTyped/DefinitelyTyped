/**
 * Mapsjs 9.6.0 Copyright (c) 2013 ISC. All Rights Reserved.
*/

declare module 'mapsjs' {

    export function clusterPoints(options: {
        data: {}[];
        pointKey: string;
        valueFunction?: (row: any) => number;
        radiusFunction: (row: any) => number;
        aggregateFunction?: (srcRow: any, cmpRow: any, aggRow: any) => void;
        mapUnitsPerPixel: number;
        marginPixels?: number;
    }): {}[];

    /**
	 * This is a desc of envelope export function.
	 * @class <envelope>
	 * @classdesc This is a description of the envelope class.
	 */
    export class envelope {

        constructor(minX: number, minY: number, maxX: number, maxY: number);

        /**
         * Gets the minX of the envelope.
         * @returns {number} The minimum x value
         */
        getMinX(): number;

		/**
		 * Gets the minY of the envelope
		 * @returns {number} The minimum y value
		 */
        getMinY(): number;
		
		/** 
		 * Gets the maxX of the envelope
		 * @returns {number} The maximum x value
		 */
        getMaxX(): number;
		
		/**
		 * Gets the maxY of the envelope
		 * @returns {number} The maximum y value
		 */
        getMaxY(): number;
		
		/**
		 * Create a new envelope from this as deep copy
		 * @returns {envelope} - a new envelope
		 */
        clone(): envelope;

        /**
         * Create a new envelope from this one plus x and y margins.
         * @param {number} marginX - the x margin
         * @param {number} marginY - the y margin
         * @returns {envelope} - a new envelope
         */
        createFromMargins(marginX: number, marginY: number): envelope;
		
		/**
		 * Create a new envelope from this one number plus bleed ratio
		 * @param {number} bleed - the number bleed
		 * @returns {envelope} a new envelope
		 */
        createFromBleed(bleed: number): envelope;
		
		/**
		 * Gets the center point of the envelope
		 * @returns {point} - center as point
		 */
        getCenter(): point;
		
		/**
		 * Gets the width of the envelope
		 * @returns {number} value of width
		 */
        getWidth(): number;
		
		/**
		 * Gets height of the envelope
		 * @returns {number} value of height
		 */
        getHeight(): number;
		
		/**
		 * Gets area of the envelope
		 * @return {number} value of area
		 */
        getArea(): number;
		
		/**
		 * Returns associative array of this
		 * Returns value of minX
		 * Returns value of minY
		 * Returns value of maxX
		 * Returns value of maxY
		 * @returns {object} values of associative array 
		 */
        toObject(): envObject;
		
		/**
		 * Gets UL coordinate of this envelope
		 * @returns {point} - a new point
		 */
        getUL(): point;
		
		/**
		 * Gets UR of this envelope
		 *@returns {point} - a new point
		 */
        getUR(): point;
		
		/**
		 * Gets LL of this envelope
		 * @returns {point} - a new point
		 */
        getLL(): point;
		
		/**
		 * Gets LR of this envelope
		 * @returns {point} - a new point
		 */
        getLR(): point;
		
		/**
		 * Gets the aspect of the envelope plus width, height
		 * @returns {number} - numeric ratio
		 */
        getAspect(): number;
		
		/**
		 * tests for identical envelope as this
		 * @param {envelope} env - tests envelope
		 * @return {boolean} - envelope match is true, otherwise false
		 */
        equals(env: envelope): boolean;
		
		/**
		 * Create string of this
		 * @returns {string} - string in the form: [minx],[miny],[maxx],[maxy]
		 */
        toString(): string;
		
		/**
		 * Create geometry of this envelope. The polygon returned is closed
	     * @returns {geometry} - a new geometry
		 */
        toGeometry(): geometry;
		
		/**
		 * Tests function for point within this envelope
		 * @param {point} - test point
		 * @returns {boolean} point contained is true, otherwise false
		 */
        contains(pt: point): boolean;
    }
    /**
	* @module my/envelope
	*/
    export module envelope {
	
		/**
		 * Creates a new MapDotNet xml envelope by Static function
		 * @param {string} xml - an xml string of envelope
		 * @returns {envelope} - a new envelope 
		 */
        export function createFromMdnXml(xml: string): envelope;
		
		/**
		 * creates new envelope from two points using static function
		 * @param {point} pt1 - corner point
		 * @param {point} pt2 - opposite corner point
		 * @returns {envelope} a new envelope
		 */
        export function createFromPoints(pt1: point, pt2: point): envelope;
		
		/**
		 * static function creates new x and y center points envelope plus y and x margins
		 * @param {number} centerX - the center x as float
		 * @param {number} centerY - the center y as float
		 * @param {number} marginX - the margin x from center as float
		 * @param {number} marginY - the margin y from center as float
		 * @returns {envelope} a new envelope
		 */
		 export function createFromCenterAndMargins(centerPtX: number, centerPtY: number, marginX: number, marginY: number): envelope;
		
		/**
		 * static functions tests intersection of two envelopes
		 * @param {envelope} envelope 1 - envelope 1 test
		 * @param {envelope} envelope 2 - envelope 2 test
		 * @returns {boolean} intersecting envelopes are true, otherwise false
		 */
        export function intersects(env1: envelope, env2: envelope): boolean;
		
		/**
		 * static function creates two-envelope union
		 * @param {envelope} envelope 1 - envelope 1
		 * @param {envelope} envelope 2 - evelope 2
		 * @returns {envelope} a new envelope as union of supplied envelopes
		 */
        export function union(env1: envelope, env2: envelope): envelope;
    }
   /**
    * Constructor creates a geometry which can represent a point, line, polygon,
	* mulitpoint, multilinestring.
	 * This is a desc of geometry export class.
	 * @class <geometry>
	 * @classdesc This is a description of the geometry class.
	 * @param {boolean} isPath - is this a path (true if path or false for set of 
	 * points)
	 * @param {boolean} isClosed - is this a closed path (true or false)
	 * @returns {geometry} a new geometry
	 */
    export class geometry {
        constructor(isPath?: boolean, isClosed?: boolean);
        
		/**
		 * Creates a new polygon or polyline form the geometry according to whether the 
		 * geometry is closed.
		 * @returns {geometry} a new geometry
		 */
		factoryPoly(): any;
		
		/**
		 * Creates a deep copy of this geometry
		 * @returns {geometry} a new geometry
		*/
        clone(): geometry;
		
		/**
		 * Iterates every vertex in the geometry and passes to the supplied action. Return true on the action to abort.
		 * @param {action} - must be a function with the signature action(setIdx, idx, x, y) 
		 */
        foreachVertex(action: (setIdx: number, idx: number, x: number, y: number, s: number[]) => void): void;
        
		/**
		 * Returns geometry bounding box
		 * @returns {envelope} a new envelope
		 */
		getBounds(): envelope;
		
		/**
		 * Returns whether this geometory is a path or points
		 * Returns this geometry as path or point
		 * @returns {boolean} a path is true, collection of points is false
		 */
        getIsPath(): boolean;
		
		/**
		 * Returns whether this geometry is closed
		 * @returns {boolean} closed path is true, otherwise false
		 */
        getIsClosed(): boolean;
		
		/**
		 *Gets number of sets in this geometry
		 * @returns {number} number of sets as integer
		 */
        getSetCount(): number;
		
		/**
		 * Gets set by its index. Note: for polygons, first set is primary ring and subsequent
		 * ones are holes.
		 * @param {number} idx - option index of set to return as an integer; if not provided,
		 * returns as last set.
		 * @returns {number} a set as an array of points in the form [x1,y1,x2,y2, ... xn,yn]
		 */
        getSet(idx: number): number[];
		
		/**
		 * Pushes set onto geometry end
		 * @param {number} s - set as an array of points in the form [x1,y1,x2,y2, ... xn, yn] to push
		 */
        pushSet(s: number[]): void;
		
		/**
		 * Pops set off end of geometry
		 * @returns {number} set popped as an array of points in the form [x1,y1,x2,y2, ... xn, yn]
		 */
        popSet(): number[];
		
		/**
		 * Creates SVG path data string from this
		 * @returns {geometry} string of SVG path or null if not a path
		 */
        toSvgPathData(): string;
		
		/**
		 * Adds point onto last set in geometry. If geometry is empty,
		 * automatically creates set to add to.
		 * @param {point} pt - a point to add
		 * @returns {number} {setIdx: [0-based index of set the point was added to] , idx: [the 0-
		 * based index of the x-coord added]}
		 */
        addPointToLastSet(pt: point): { setIdx: number; idx: number; };
		
		/**
		 * Tests for validity of get. At least one path
		 * with two verticies plus at least one ring with at least
         * three vertices.
		 * Returns true if it is a point collection
		 * @returns {geometry} valid geometry is true, otherwise false.
		 */
        isValid(): boolean;
		
		/**
		 * Create wkt string from [this]
		 * @returns {string} a string of wkt
		 */
        toString(): string;
        
        toWkt(): string;
		
		/**
		 * Finds vertex of geometry nearest to the given point
		 * @param {point} pt - point of the reference point
		 * @returns {number|point} an associated array closestVertex with:
		 * - closestVertex.setIdx, index of the set the vertex is in
	     * - closestVertex.ptIdx, index of the point of vertex in set
		 * - closestVertext.pt, pt of the vertex
		 *- closestVertex.distance, distance of vertex to reference point in projected units
		 */
        findNearestVertex(pt: point): { setIdx: number; ptIdx: number; pt: point; distance: number; };
        
		/**
		 * Finds point along boundary of geometry nearest to the given point
		 * @param {point} point of the reference point
		 * @param {boolean} close - closest point
		 * @returns {number|point} associated array closestPoint with:
		 * - closestPoint.setIdx, index of the set the point is in
         * - closestPoint.ptIdx, index of the first point of the segment which the point is in
         * - closestPoint.pt, pt of the point
         * - closestPoint.distance, distance of the point to the reference point in projected units
		 */
		findNearestSegment(pt: point, close?: boolean): { setIdx: number; ptIdx: number; pt: point; distance: number; };
        
		/** 
		 * Finds coordinates in map units of midpoint of geometry
		 * @param {number} idx - optional index of line to find labeling point for;
		    if not provided, returns labeling point of last line.
		 * @returns {point} coordinates of midpoint of line as a point
		 */
		getLabelingPoint(idx?: number): point;
		
		/**
		 * Determines whether geometry contains a point
		 * @param {point} pt - a point to contain
		 * @returns {boolean} If contains point is true, otherwise false
		 */
        contains(pt: point): boolean;
    }

	/** @module my/geometry */
    export module geometry {
        
		/**
		 * This is a desc of polyline extends geometry class.
	     * @class <polyline extends geometry>
	     * @classdesc This is a description of the geometry class.
	     */
        class polyline extends geometry {
            constructor(geom: geometry);
            
			/**
			 * Gets geometry in a polyline
			 * @returns {geometry} a geometry
			 */
			getGeometry(): geometry;
			
			/**
			 * Creates deep copy polyline object of underlying geometry
			 * @returns {polyline} - a new geometry
			 */
            clone(): polyline;
			
			/**
			 * Gets number of lines in polyline
			 * @returns {number} - lines as integer
			 */
            getLineCount(): number;
			
			/**
			 * Gets line in polyline by its index
			 * @para {number} idx - option index of line to return as an integer;
			 * if not provided, returns last line
			 * @returns {number[]} a line as an array of x and y points in the form
			 */
            getLine(idx: number): number[];
			
			/**
			 * Pushes line onto polyline end
			 * @param {number[]} s - a line as an array of y and y points to push
			 */
            pushLine(s: number[]): void;
			
			
            popLine(): number[];
			
			/**
			 * Calculates the line distance in a polyline according to projected map cooordinates
			 * @param {number} idx - options index of line to calculate the distance of an integer; if not provided, returns distance of last line
			 * @returns lenth in projected units in meters of distance of polyline
			 */
            getProjectedDistance(idx: number): number;
			
			/**
			 * Calculates distance of a line in polyline from actual distance measurements
			 * @param {number} idx - options index of line to calculate distance of an integer; if not provided, returns distance of the last line
			 * @returns {number} length in meters of polyline distance
			 */
            getActualDistance(idx: number): number;
			
			/**
			 * Determines polyline intersection of another geom
			 * @param {geometry} geom - geometry to test against
			 * @returns {boolean} intersection is true, otherwise false
			 */
            intersects(geom: geometry): boolean;
        }
        
		/**
		  * This is a desc of polygon extends geometry class.
	      * @class <polygon extends geometry>
	      * @classdesc This is a description of the polygon extends geometry class.
	      */
        class polygon extends geometry {
            constructor(geom: geometry);
			
			/**
			 * Returns geometry of the polygon
			 * @returns {geometry} a geometry
			 */
            getGeometry(): geometry;
			
			/**
			 * Creates new polygon object from deep copy of underlying geometry
			 * @returns {geometry} - a new geometry
			 */
            clone(): polygon;
			
			/**
			 * Gets polygon ring number
			 * @returns {number} - a ring integer number 
			 */
            getRingCount(): number;
			
			/**
			 * Gets polygon ring by its index. Primary ring is first and subsequent ones are holes.
			 * @param {number} idx - option ring index to return as integer, if not provided, returns last set
			 * @returns {number[]} array of x and y points in ring
			 */
            getRing(idx: number): number[];
			
			/**
			* Pushes ring onto polygon end
			* @param {number[]} s - array of x and y points in the form to push in ring
			*/
            pushRing(s: number[]): void;
			
			/**
			 * Pops ring of end of polygon
			 * @returns {number[]} popped ring as array of x and y point in the form
			 */
            popRing(): number[];
			
			/**
			 * Calculates polyline line distance from projected map coord
			 * @param {number} idx - option line index to calculate distance as integer; if not provided, returns distance of last line
			 * @returns {number} polyline distence length in projected meters
			 */
            getProjectedArea(idx: number): number;
			
			/**
			 * Calculates polygon ring perimeter from projected map coord
			 * @param {number} idx - option index to get projected perimeter of ring.
			 * @returns {number} distance in projected meters of polygon perimeter
			 */
            getProjectedPerimeter(idx: number): number;
			
			/**
			 * Calculates polygon ring are from actual distance measurements
			 * @param {number} idx - option index to get ring perimeter.
			 * @returns {number} polygon area in square meters
			 */
            getActualArea(idx: number): number;
			
			/**
			 * Calculates polygon ring perimeter from actual distance measurements
			 * @param {number} idx - option index to get actual ring perimeter.
			 * @returns {number} polygon perimeter distance in meters
			 */
            getActualPerimeter(idx: number): number;
			
			/**
			 * Determines polygon intersection of another geometry
			 * @param {geometry} geom - geometry to test against
			 * @returns {boolean} intersection is true, otherwise false
			 */
            intersects(geom: geometry): boolean;
			
			/**
			 * Determines overlapping of polygons.
			 * @param {polygon} poly - polygon to test against
			 * @returns {boolean} overlap is true, otherwise false
			 */
            overlaps(poly: polygon): boolean;
        }

        export module polygon {
            
			/**
			 * Create MultiPolygon from [this].
			 * @returns {polygon} a new multiPolygon
			 */
			export function toMultiPolygon(): polygon[];
        }
    }
    /**
	 * Constructor creates a geometry style.
	 * This is a desc of geometryStyle export class.
	 * @class <geometryStyle>
	 * @classdesc This is a description of the geometry class.
	 * @returns {geometry} a new geometryStyle
	 */
    export class geometryStyle {
        constructor();
		
		/**
		 * Gets path outline thickness in pixels.
		 * @returns {number} thickness as numeric
		 */
        getOutlineThicknessPix(): number;
		
		/**
		 * Sets path outline thickness in pixels.
		 * @param {number} t - thickness as a numeric
		 */
        setOutlineThicknessPix(t: number): void;
		
		/**
		 * Gets path outline color as css style string
		 * @returns {string} outline color as string
		 */
        getOutlineColor(): string;
		
		/**
		 * Sets path outline color as css style string.
		 * @param {string} c - outline color as string
		 */
        setOutlineColor(t: string): void;
		
		/**
		 * Gets path outline opacity from 0 to 1.
		 * @returns {number} outline opacity as numeric
		 */
        getOutlineOpacity(): number;
		
		/**
		 * Set path outline opacity from 0 to 1.
		 * @param {number} o - outline opacity as numeric
		 */
        setOutlineOpacity(o: number): void;
		
		/**
		 * Gets path fill color as css style string
		 * @returns {string} fill color as string
		 */
        getFillColor(): string;
		
		/**
		 * Set path fill color as css style string.
		 * @param {string} c - fill color as string
		 */
        setFillColor(c: string): void;
		
		/**
		 * Gets path fill opacity from 0 to 1.
		 *@returns {number} fill opacity as numeric
		 */
        getFillOpacity(): number;
		
		/**
		 * Sets path fill opacity from 0 to 1
		 * @param {number} o - fill opacity as numeric
		 */
        setFillOpacity(o: number): void;
        
		/**
		 * Gets dash array string for path
		 * @returns {string} a dash array as a string (defaults to null [solid stroke])
		 */
		getDashArray(): string;
        
		/**
		 * Sets dash array string for path
		 * @param {string} da - CSS dash array as a string
		 */
		setDashArray(da: string): void;
    }
    /**
	 * Executes the license
	 * @returns {string} a license
	 */
    export var license: string;
    /**
	 * This is a desc of point export class.
	 * @class <point>
	 * @classdesc This is a description of the point class.
    export class point {

        constructor(x: number, y: number);
		
		/**
		 * Returns x coord as float
		 * @returns {number} x coord as a float
		 */
        getX(): number;
		
		/**
		 * Returns y coord as float
		 * @returns {number} - a y coord as a float
		 */
        getY(): number;
		
		/**
		 * Converts point object to associative arry with x and y property names
		 * @returns {pointObject} - an associative array with x and y property names
		 */
        toProps(): pointObject;
		
		/**
		 * Test for matching locations of supplied point and [this]
		 * @param {point} pt - point to test
		 * @returns {boolean} - matching points is true, otherwise false
		 */
        equals(pt: point): boolean;
		
		/** 
		 * Creates new point from [this] offset by supplied x and y deltas.
		 * @param {number} dx - x coord offset as float
		 * @param {number} dy - y coord offset as float
		 * @returns {point} a new point offset
		 */
        createOffsetBy(dx: number, dy: number): point;
		
		/**
		 * Creates new n-sided polygon from this point
		 * @param {number} sides - number of polygon sides
		 * @param {number} radius - distance to polygon vertices
		 * @returns {geometry|polygon} a new polygon
		 */
        convertToPoly(side: number, radius: number): geometry.polygon;
		
		/**
		 * Converts point object to associative array with x and y property names
		 * @returns {string} an associate array with x and y property names
		 */
        toString(): string;
		
		/** 
		 * Creates a deep copy new point of this.
		 * @returns {point} a new point clone
		 */
        clone(): point;
		
		/**
		 * Returns this point's bounding box for consistency with geometry
		 * @returns {envelope} a new envelope
		 */
        getBounds(): envelope;
		
		/**
		 * Computes distance between this and supplied point
		 * @param {point} pt - point to compute distance to
		 * @returns {number} distance as a float
		 */
        distanceTo(pt: point): number;
    }
    
	/**
	 * @module my/point
	 */
    export module point {
	
	    /**
		 * Shows the distance for the application
		 * @param {number} x1 - 
		 * @param {number} y1 - 
		 * @param {number} x2 - 
		 * @param {number} y2 - 
		 * @returns {number} a distance
		 */
        export function distance(x1: number, y1: number, x2: number, y2: number): number;
        
		/**
		 * Shows the midpoint for the application
		 * @param {number} x1 - 
		 * @param {number} y1 - 
		 * @param {number} x2 - 
		 * @param {number} y2 - 
		 * @return {point} a midpoint
		 */
		export function midpoint(x1: number, y1: number, x2: number, y2: number): point;
    }
    
	/** 
	* @module my/geometry 
	*/
    export module sphericalMercator {
        
		/**
		 * Static function. Returns the Epsg number for the Spherical Mercator
		 * @return {number} an integer
		 */
		export function getEpsg(): number;
		
		/** 
		 * Static function. Returns the minimum zoom level for this projection.
		 * @returns {number} an integer
		 */
        export function getMinZoomLevel(): number;
		
		/**
		 * Static function. Override the minimum zoom level used by this projection. Normally this is set to 1.0 and should not need to be altered.
		 * @param {number} minZ - minimum zoom level as numeric
		 */
        export function setMinZoomLevel(minZ: number): void;
		
		/**
		 * Static function. Return the maximum zoom level for this projection.
		 * @returns {number} an integer
		 */
        export function getMaxZoomLevel(): number;
		
		/**
		 * Static function. Override the maximum zoom level used by this projection. Normally set to 20.0 and should not need to be altered.
		 * @param {number} maxZ1 - maximum zoom level as numeric
		 */
        export function setMaxZoomLevel(maxZ: number): void;
		
		/**
		 * Static function. Returns tile width or height in pixels
		 * @returns {number} an integer
		 */
        export function getTileSizePix(): number;
		
		/**
		 * Static function. Returns display dpi (defaults to 96). The dpi is recomputer on page load complete.
		 * @returns {number} an integer
		 */
        export function getDpi(): number;
		
		/**
		 * Static function. Override the display dpi (defaults to 96). The dpi is recomputed on page load complete.
		 * @param {number} dpi - dots per inch on display
		 */
        export function setDpi(dpi: number): void;
		
		/**
		 * Static function. Return the radius polar and equitorial in meters for this projection.
		 * @returns {number} a numeric
		 */
        export function getRadius(): number;
		
		/**
		 * Static function. Returns circumference polar and equitorial in meters for this projection
		 * @returns {number} a numeric
		 */
        export function getCircumference(): number;
		
		/**
		 * TODO
 		 */
        export function getHalfCircumference(): number;
		
		/**
		 *Static function. Get the envelope in map units for a given quadtree node (tile) based on x,y,z in the QuadTree
		 * @param {number} x - x position
		 * @param {number} y - y position
		 * @param {number} z - z position
		 * @returns {envelope} an envelope
		 */
        export function getQuadTreeNodeToMapEnvelope(x: number, y: number, z: number): envelope;
        
		/**
		 * Static function. Gets envelope (x,y array) of tile positions (indices) in QuadTree from an evelope in map units and zoom level.
		 * @param {envelope} env - an envelope in map units
		 * @param {number} z - zoom level
		 * @returns {envelope} an evelope
		 */
		export function getQuadTreeNodeRangeFromEnvelope(env: envelope, z: number): envelope;
        
		/**
		 * Static function. Gets projected map units per pixel for a given zoom level.
		 * @param {number} zoomLevel - zoom level
		 * @returns {number} float
		 */
		export function getProjectionUnitsPerPixel(zoomLevel: number): number;
        
		/** 
		 * Returns a scale transform to apply to shapes so distance and are computations will be actual Earth-geodesic units instead of projected map units.
		 * @param {number} mapPtY - location where computation is made (latitude is used)
		 * @returns {number} float
		 */
		export function getActualShapeScaleTransform(mapPtY: number): number;
        
		/**
		 * Static function. Gets actual physical (on the ground) meters per pixel for a given zoom level and map point in map units.
		 * @param {point} mapPt - location where computation is made (latitude is used)
		 * @param {number} z - zoom level
		 * @returns {number} float
		 */
		export function getActualUnitsPerPixel(mapPt: point, zoomLevel: number): number;
        
		/**
		 * Static function. Gets the zoom level based on a supplied envelope in map and device units.
		 * @param {envelope} envelopeMap - envelope in map units
		 * @param {envelope} evelopeDevice - envelope in device units
		 * @returns {number} numeric best fit zoom level
		 */
		export function getBestFitZoomLevelByExtents(envelopeMap: envelope, envelopeDevice: envelope): number;
        
		/**
		 * Static function. Gets a quad-key from an x,y,z QuadTree node.
		 * @param {number} x - x location
		 * @param {number} y - y location
		 * @param {number} z - z location
		 * @returns {string} string quad-key
		 */
		export function getQuadKeyFromXYZ(x: number, y: number, z: number): string;
        
		/**
		* Static function. Gets x,y,z QuadTree node from a quad-key
		* @param {string} key - quad-key
		* @return {object} associative array of x,y,z QuadTree node
		*/
		export function getXYZFromQuadKey(key: string): { x: number; y: number; z: number; };
        
		/**
		 * Static function. Project a lon/lat point to a Spherical Mercator point
		 * @param {point} lonLat - point where x-coord is lon and y-coord is lat
		 * @returns a point
		 */
		export function projectFromLatLon(lonLat: point): point;
		
		/**
		 * Static function. De-project a Spherical Mercator point to a lat-lon.
		 * @param {point} mapPt - point in Spherical Mercator
		 * @returns {point} point where x-coord is lon and y-coord is lat
		 */
        export function deprojectToLatLon(mapPt: point): point;
    }
    

	/**
	 * Contructor creates a styled geometry from the provided geometry. This is an
	 * adornment pattern to add rendering style to raw geometry.
	 * This is a desc of styledGeometry export class.
	 * @class <styledGeometry>
	 * @classdesc This is a description of the styledGeometry class.
	 * @param {geometry} geometry - the geometry to adorn
	 * @param {geometry} geometryStyle - an optional geometryStyle
	 * @returns {point} a point to add
	 */
    export class styledGeometry {
        constructor(geom: geometry, gStyle: geometryStyle);
		
		/**
		 * Set internal geometryStyle for this styledGeometry. This overrides what was passed in as second constructor param
		 * @param {geometryStyle} gs - new styledGeometry
		 */
        setGeometryStyle(gs: geometryStyle): void;
		
		/**
		 * Gets underlying geometry instance passed in.
		 * @returns a geometry
		 */
        getGeometry(): geometry;
		
		/**
		 * Gets path outline thickness in pixels.
		 * @returns {number} thickness as numeric
		 */
        getOutlineThicknessPix(): number;
		
		/**
		 * Sets path outline thickness in pixels.
		 * @param {number} t - thickness as numeric
		 */
        setOutlineThicknessPix(t: number): void;
		
		/**
		 * Gets path outline color as css style string.
		 * @returns {string} an outline color as a string
		 */
        getOutlineColor(): string;
		
		/**
		 * Sets path outline color as css style string
		 * @param {string} c - outline color as a string
		 */
        setOutlineColor(c: string): void;
		
		/**
		 * Gets path outline opacity from 0 to 1
		 * @returns {number} an outline opacity as numeric
		 */
        getOutlineOpacity(): number;
		
		/**
		 * Sets path outline opacity from 0 to 1
		 * @param {number} o - outline color as string
		 */
        setOutlineOpacity(o: number): void;
		
		/** 
		 * Gets path fill color as css style string
		 * @returns {string} a fill color as a string
		 */
        getFillColor(): string;
		
		/**
		 * Sets path fill color as css style string
		 * @param {string} c - fill color as a string
		 */
        setFillColor(t: string): void;
		
		/**
		 * Gets path fill opacity from 0 to 1
		 * @returns {number} a fill opacity as numeric
		 */
        getFillOpacity(): number;
		
		/**
		 * Sets path fill opacity from 0 to 1
		 * @param {number} o - fill opacity as numeric
		 */
        setFillOpacity(o: number): void;
		
		/**
		 * Gets dash array string for path
		 * @returns {string} a dash array as a string (defaults to null [solid stroke])
		 */
        getDashArray(): string;
		
		/**
		 * Sets dash array string for path
		 * @param {string} da - CSS dash array as a string
		 */
        setDashArray(t: string): void;
		
		/**
		 * Gets optional animation function called when SVG node is created. You can use the loopback parameter on complete to call itself and create repeating animation.
		 * @returns {action} in the form function (pathElement, loopback) {}
		 */
        getAnimation(): (pathElement: HTMLElement, loopback: () => void) => void;
		
		/**
		 * Sets optional animation function called when SVG nod is created. You can use loopback param on complete to call itself and create repeating animation.
		 * @param {function} a - in the form function (pathElement, loopback) {}
		 */
        setAnimation(any): void;
		
		/**
		 * Renders this to a canvas context. Note we attach original geometry bounds to svg doc as an expando.
		 * @param {string} key - key to track svg DOM element
		 * @param {number} mupp - map units per pixel to create SVG element
		 * @returns {HTMLElement} a new SVG document root
		 */
        createSvgPathElement(key: string, mapUnitsPerPix: number): HTMLElement;
		
		/** 
		 * Renders this to a canvas context.
		 * @param {CanvasRenderingContext2D} ctx - canvas context to render to
		 */
        renderPathToCanvasContext(ctx: CanvasRenderingContext2D): void;
    }
	
    /**
	 * Durandal's version.
	 * @returns {string}
	 */
    export var version: string;

	/** 
	* @module my/wkt 
	*/
    export module wkt {
        
		/**
		 * Parses wkt as a point.
		 * @param {string} w - wkt string
		 * @returns {point} a point
		 */
		export function parsePoint(wkt: string): point;
		
		/**
		 * Parses as a multipoint.
		 * @param [string} w - wkt string
		 * @retuns {geometry} geometry holding the set of points
		 */
        export function parseMultiPoint(wkt: string): geometry;
		
		/**
		 * Parses wkt as a linestring.
		 * @param {string} w - wkt string
		 * @returns {geometry} geometry holding the path
		 */
        export function parseLineString(wkt: string): geometry;
		
		/**
		 * Parses wkt as a multilinestring
		 * @param {string} w - wkt string
		 * @returns {geometry} geometry holding set of paths
		 */
        export function parseMultiLineString(wkt: string): geometry;
		
		/**
		 * Parses wkt as a polygon
		 * @param {string} w - wkt string
		 * @returns {geometry} geometry holding one or more closed paths (first is outer ring
		 * and optional subsequent closed paths are inner rings [holes]).
		 */
        export function parsePolygon(wkt: string): geometry;
		
		/**
		 * Parses wkt as a mulitpolygon.
		 * @param {string} w - wkt string
		 * @returns {geometry} geometry where each polygon is added as a collection of sets (ring/holes)
		 * so the multipolygon is flattened into a single multi-ring polygon.
		 */
		export function parseMultiPolygon(wkt: string): geometry;
		
		
        export function toMultiPolygonString(polys: geometry.polygon[]): string;
        
		/**
		 * Parses wkt and determines type from the string.
		 * @param {string} w - wkt string
		 * @@returns {geometry} point (for point) or geometry for everything else (multipolygon
		   is an array of geometry.)
		 */
		export function parse(wkt: string): any;
    }
    
	/** 
	* @module my/geometry 
	*/
    export module tile {
        
		/**
		 * A tile layer is a view on the map containing an array of rectangular content.
		 * This is a desc of layer export class.
	     * @class <layer>
	     * @classdesc This is a description of the layer class.
	     */
        export class layer {
            constructor(id: string, useBackdrop?: boolean, maxConcurrentRequests?: number);
            
			/**
			 * @param {number} m - number for margin in pixels
			 */
			setContentExtentsMarginInPixels(m: number): void;
            
			/**
			 * Gets ID associated with this tile.layer.
			 * @returns {string} a string
			 */
			getId(): string;
			
			/**
			 * Returns true if this tile.layer uses a backdrop.
			 * @returns {boolean} a boolean
			 */
            getUseBackdrop(): boolean;
			
			/**
			 * Returns descriptor which describes how requested content is rendered or styled.
			 * @returns {function} an object that depends on the type of tile requestor associated with this tile layer.
			 */
            getDescriptor(): any;
			
			/**
			 * Sets descriptor which describes how requested content is rendered or styled.
			 * @param {function} d - an object that depends on type of tile requestor associated with this tile layer.
			 */
            setDescriptor(d: any): void;
			
			
            notifyDescriptorChange(): void;
			
			/**
			 * Returns requestor which defines what kind of content to get and where to get it.
			 * @returns {tile.requestor} a boolean
			 */
            getRequestor(): tile.requestor;
			
			/**
			 * Sets requestor which defines what kind of content to get and where to get it.
			 * @param {tile.requestor} req - an instance that extends tile requestor
			 * @param {tile.requestor} opd - an optional descriptor so that both can be set in one call and incur only one content change event.
            */			 
            setRequestor(req: tile.requestor, desc?: any): void;
			
			/**
			 * Returns optional renderer which defines how geometry data for a quadView is rendered.
			 * @returns {tile.renderer} an object
			 */
            getRenderer(): tile.renderer;
			
			/**
			 * Sets optional renderer which defines how geometry data for quadView is rendered. The renderer delegate (function) takes a single quadView param.
			 * @param {tile.renderer} r - a function taking a single parameter
			 */
            setRenderer(r: tile.renderer): void;
			
			
            notifyRendererChange(): void;
			
			/**
			 * Gets visibility state of this tile.layer.
			 * @returns {boolean} a boolean indicating whether layer is displayed or not
			 */
            getIsVisible(): boolean;
			
			/**
			 * Sets visibility state of this tile.layer
			 * @param {boolean} v - boolean indicationg whether the layer is displayed or not
			 */
            setIsVisible(v: boolean): void;
			
			/**
			 * Gets opacity of this tile.layer.
			 * @returns {number} 0.0 transparent to 1.0 opaque
			 */
            getOpacity(): number;
			
			/** 
			 * Sets opacity of this tile.layer.
			 * @param {number} o - from 0.0 transparent to 1.0 opaque
			 */
            setOpacity(o: number): void;
			
			/**
			 * Gets minimum zoom level where this tile.layer is visible.
			 * @returns {number} zoom level in the range supported by the projection (e.g. 1 to 20)
			 */
            getMinZoomLevel(): number;
			
			/** 
			 * Sets minimum zoom level where this tile layer is visible.
			 * @param {number} minZ1 - any zoom level in the range supporeted by the projection (e.g. 1 to 20)
			 */
            setMinZoomLevel(minZ: number): void;
			
			/**
			 * Gets maximum zoom level where this tile lay is visible.
			 * @returns {number} zoom level in the range supported by the projection (e.g. 1 to 20)
			 */
            getMaxZoomLevel(): number;
			
			/**
			 * Sets maximum zoom level where this tile layer is visible.
			 * @param {number} maxZ1 - any zoom level in the range supported by the projection (e.g. 1 to 20)
			 */
            setMaxZoomLevel(maxZ: number): void;
			
			/**
			 * Sets pixel bleed on quadTiles. Defaults to 1. Setting to zero for overlay layers with translucent polygon fills is recommended. Bleed overlap can create faint lines at tile boundries when fill is not opaque.
			 * @param {number} bleed - number of pixels from 0 to integer > 0
			 */
            setTileBleedPix(bleed: number): void;
			
			/**
			 * Sets whether or not to retain and display previous level tile content as you
			 * change tile levels to provide a nice zoom level change effect. Once the next
			 * level is loaded the old level content is always discarded. Setting this to false
			 * if there is translucent content to display. Defaults to true (prior to version 9.0.0001
			 * this value had the same state as useBackdrop.)
			 * @param {boolean} ret - set to true to retain and false to discard.
			 */
            setRetainInterlevelContent(retain: boolean): void;
			
			/**
			 * Enables or disables the fad-in on tile content (default is true).
			 * @param {boolean} fadeInE - boolean to enable or disable fade-in content
			 */
            setEnableTileFadeIn(fadeIn: boolean): void;
			
			/**
			 * Set optional function to be called on any tile layer errors.
			 * @param {function} a - action to call
			 */
            setNotifyErrorAction(action: () => void): void;
			
			/** 
			 * Sets optional function to be called when the tile loading queue for this layer
			 *has emptied.
			 * @param {function} a - action to call
			 */
            setNotifyLoadingQueueHasEmptiedAction(action: () => void): void;
			
			/**
			 *Sets optional function to be called by this layer's tile loader during
			 * processing. The supplied progress function takes tiles loaded and tiles total
			 * parameters.
			 * @param {number} tileLoaded 
			 * @param {number} tileTotal
			 */
            setNotifyLoadingQueueProgressAction(action: (tileLoaded: number, tilesTotal: number) => void): void;
            
			/**
			 * Sets option request processor for this tile layer. This is an advanced
			 * feature allowing developers to tap into tile request pipeline for purposes
			 * of customizing requests or manage custom caching. This is also the 
			 * mechanism used for offline apps with frameworks such as phonegap.
			 * @param {
			 */
			setRequestProcessor(processorFunc: (
                requestor: tile.requestor,
                descriptor: any,
                quad: tile.quad,
                timeoutMs: number,
                completeAction: (img: HTMLElement) => void,
                errorAction: (msg: string) => void) => void): void;
            preload(extents: envelope, startZoomLevel: number, endZoomLevel: number): void;
            compose(extentsMapUnits: envelope, ententsDeviceUnits: envelope);
        }
        
		/**
		 * This is a desc of layerOptions export class.
	     * @class <layerOptions>
	     * @classdesc This is a description of the layerOptions class.
	     */
        export class layerOptions {
            constructor(id: string, options: {
                useBackdrop?: boolean;
                maxConcurrentRequests?: number;
                requestor?: tile.requestor;
                descriptor?: any;
                renderer?: tile.renderer;
                requestProcessor?: any;
                visible?: boolean;
                opacity?: number;
                minZoomLevel?: number;
                maxZoomLevel?: number;
                tileBleedPix?: number;
                retainInterlevelContent?: boolean;
                enableTileFadeIn?: boolean;
                notifyErrorAction?: (msg?: string) => void;
                notifyLoadingQueueHasEmptiedAction?: () => void;
            });
			
			/**
			 * Returns underlying tile layer.
			 * @returns {tile.layer} a tile layer
			 */
            getTileLayer(): tile.layer;
			
			/**
			 * Gets ID associated with this tile layerOptions
			 * @returns {string} a string
			 */
            getId(): string;
			
			/**
			 * Gets options associated with this tile layerOptions.
			 */
            getOptions(): {};
        }

        export class quad {
            getX(): number;
            getY(): number;
            getLevel(): number;
            getEnvelope(): envelope;
            toString(): string;
            getKey(): string;
            equals(q: quad): boolean;
            factoryParent(ancestorsBack: number): quad;
        }
        
		/**
		 * @module my/geometry 
		 */
        export module quad {
            export function factoryQuadFromKey(key: string): quad;
        }
        /**
		 * A tile renderer handles converting JSON vector content loaded from the
		 * MapDotNet REST feature service into a canvas rendering on a tile.
		 * This is a desc of renderer export class.
	     * @class <renderer>
	     * @classdesc This is a description of the renderer class.
		 */
        export class renderer {
            constructor(options? : {
			
			   
                renderPoint?: (pt: point, context: CanvasRenderingContext2D) => void;
				
				
				 
                renderGeometry?: (shape: geometry, context: CanvasRenderingContext2D) => void;
                
				
				renderBitmap?: (img: HTMLElement, context: CanvasRenderingContext2D, contextSize: number, bleed: number) => void;
            });
			
			/**
			 * Sets render point function which takes a point and canvas context. The 
			 *points passed in are transformed to pixel units and offset to context origin.
			 * @param {function} a - function of the form myPointRenderer (shape, context)
			 * @param {point} pt - shape of type point
			 * @param {CanvasRenderingContext2D} context - context is canvas context
			 * @param {number} context - context size in pixels (e.g. 256)
			 */
            setRenderPoint(func: (pt: point, context: CanvasRenderingContext2D) => void): void ;
            
			/**
			 * Sets render geometry function which takes a geometry and canvas context.
			 * The geometries passed in are transformed to pixel units and offset to the context origin.
			 * @param {function} a - function of the form myGeomRenderer (shape, context)
			 * @param {geometry} shape - shape is of type geometry
			 * @param {CanvasRenderingContext2D} context - context is a canvas context
			 * @param {number} context - context size in pixels
			 */
			setRenderGeometry(func: (shape: geometry, context: CanvasRenderingContext2D) => void): void;
            
			/**
			 * Sets the render bitmap function which takes an image, bleed and canvas context.
			 * @param {function} a - function of the form myBitmapRenderer (imp, context, contextSize, bleed)
		     * @param {HTMLElement} img - image is of type Image
			 * @param {CanvasRenderingContext2D} context - context is a canvas context
			 * @param {number} contextSize - context size in pixels
			 * @param {number} bleed - bleed is >= 1.0 and represents extra margin around tile to paint
			 * so no gaps when trimmed
			 */
			setRenderBitmap(func: (img: HTMLElement, context: CanvasRenderingContext2D, contextSize: number, bleed: number) => void): void;

        }
        
		
		/**
		 * This is a desc of rendererDensityMap export class.
	     * @class <rendererDensityMap>
	     * @classdesc This is a description of the rendererDensityMap class.
	     */
        export class rendererDensityMap {
            
			
			constructor();
            
			/**
			 * Sets bleed margin (1.0 = no bleed, > 1.0 for positive bleed). A bleed is
			 * required as points in adjacent tiles add to the "heat" computation in the tile
			 * being rendered.
			 * @param {number} bleed - a numeric > 1.0
			 */
			setBleed(bleed: number): void;
			
			/**
			 * Sets grid width and height in cells.
			 * @param {number} gridSize - integer (typical values are from 16 to 64)
			 */
            setGridSize(gridSize: number): void;
			
			/**
			 * Sets filter radius corresponding to one standard deviation.
			 * @param {number} filterStdDevRadius - integer (typical values are from 2 to 4)
			 */
            setFilterStdDevRadius(filterStdDevRadius: number): void;
			
			/**
			 * Sets color matrix for renderer.
			 * @param {number [] []} matrix - array of arrays [ (r,g,b,a) (r,g,b,a)...] from 
			 * cold to hot (typically about a dozen colors)
			 */
            setColorMatrix(matrix: number[][]): void;
			
			/**
			 * Sets minimum cell value
			 * @param {number} mcv - minimum cell value (defaults to 0)
			 */
            setMinCellValue(min: number): void;
			
			/**
			 * Sets optional row action. This provides a means to creat hot spot maps by
			 * processing row atrributes instead a density map from counting features.
			 * @param {action} ra - row action function takes a single parameter (shape with
			 * an optionally attached fieldValues property). The function returns the value
		     *to add to the grid cell.
			 */
            setRowAction(action: (row: {}) => void): void;
			
			/**
			 * Tells renderer to re-render density map and recompute ranges. This should
			 * be called if data changes or due to extent changes the density changes.
			 * @param {}
			 */
            notifyRecompute(): void;
        }
        
		
		/**
		 * This is the base class for all requestors.
		 * This is a desc of requestor export class.
	     * @class <requestor>
	     * @classdesc This is a description of the requestor class.
		 */
        export class requestor {
            
			/**
			 * This is the base class constructor for all requestors.
			 */
			constructor();
			
			/**
			 * Gets formatted input using the endpoint template and supplied quad tile
			 * location and descriptor.
			 * @param {quad} quad - formatted input
			 * @returns {string} a uri string
			 */
            getFormattedEndpoint(quad: quad, descriptor: any): string;
			
			/**
			 * Gets data locally without using remote endpoint if implemented on the
			 * concrete requestor.
			 * @param {quad} quad - concrete requestor local data
			 * @returns {string} a json string
			 */
            getLocalData(quad: quad, descriptor: any): string;
			
			/**
			 * Creates unique sha1 string from this requestor plus supplied descriptor.
			 * This is useful in creating a unique key or folder for tile caching. This combined
			 * with tile's quad-key can uniquely/efficiently ID particular tile.
			 * @returns {string} a sha1 string
			 */
            hash(descriptor: any): string;
			
			/**
			 * Gets whether or not the concrete class returns bitmap image
			 * @returns {boolean} true (default) if REST service returns an image and false if it is JSON
			 */
            getIsRestImage(): boolean;
			
			/**
			 * Sets whether or not the concrete class returns a bitmap image
			 * @param {boolean} flag/iri - boolean
			 */
            setIsRestImage(flag: boolean): void;
			
			/**
			 * Gets whether or not the concrete class uses an endpoint rathar than local data.
			 * @returns {boolean} true (default) if this requestor uses an endpoint
			 */
            getUsesEndpoint(): boolean;
			
			/**
			 * Sets whether or not the concrete class uses an endpoint rather than local data.
			 * @param {boolean} flag/ue - boolean
			 */
            setUsesEndpoint(flag: boolean): void;
			
			/**
			 * Gets format of data returned by REST service
			 * @returns {string} string specifying data format (default 'json')
			 */
            getDataFormat(): string;
			
			/**
			 * Sets format of data returned by REST service
			 * @param {string} df - data format as string ('json' or 'jsonp')
			 */
            setDataFormat(df: string): void;
			
			/**
			 * Returns whether or not caching is enabled for vector-based requestors. This 
			 * value is set on the $.ajax call 'cache' parameter.
			 * @returns {boolean} true (default) if caching enabled
			 */
            getCacheEnabled(): boolean;
			
			/**
			 * Sets whether or not caching is enabled for vector-beased requestors. This 
			 * value is set on the $.ajax call 'cache' parameter.
			 * @param {boolean} flagce - true (default) if caching is enabled
			 */
            setCacheEnabled(flag: boolean): void;
			
			/**
			 * Gets requestor timeout in mS
			 * @returns {number} an integer
			 */
            getTimeoutMs(): number;
			
			/**
			 * Sets requestor timeout in mS
			 * @param {number} ms - an integer
			 */
            setTimeoutMs(ms: number): void;
			
			/**
			 * Gets any key/value pairs attached to ajax call (such as username and password)
			 * @returns {} [] associative array or null for none
			 */
            getKeyVals(): {}[];
			
			
            setKeyVals(options: {}[]): void;
			
			/**
			 * Gets maximum available zoom level content that can be retrieved from
			 *endpoint this requestor consumes
			 * @returns {number} a numeric
			 */
            getMaxAvailableZoomLevel(): number;
			
			/**
			 * Sets maximum available zoom level content that can be retrieved from
			 * endpoint this requestor consumes
			 * @param {number} maz1 - max available zoom level for the concrete requestor
			 *(defaults to projection's max)
		     */
            setMaxAvailableZoomLevel(max: number): void;
        }
        /**
		 * A tile requestor for Microsoft Bing maps.
		 * This is a desc of requestorBing extends requestor export class.
	     * @class <requestorBing extends requestor>
	     * @classdesc This is a description of the requestorBings extends requestor class.
         */
		export class requestorBing extends requestor {
            
			/**
			 * This is the requestorBing constructor.
			 * @param {function} options - optional associative array of options
			 * - dataFormat: 'json' or 'jsonp'
			 * - timeoutMs: timeout in mS
			 * - maxAvailableZoomLevel: the maximum zoom level in which content is
			 * available (defaults to projection maxZoomLevel)
			 * @returns {} a new tile requestorBing
			 */
			constructor(options?: {
                dataFormat?: string;
                timeoutMs?: number;
                maxAvailableZoomLevel?: number;
            });
			
			/**
			 * Gets endpoint uri
			 * @returns {string} endpoint to Bing tile server as a formatted string
			 *   (e.g. ecn.t{0}.tiles.virtualearth.net/tiles/{1}{2}{3}?g={4}&mkt={5}&shading=hill)
		     */
            getEndpoint(): string;
			
			/**
			 * Gets endpoint scheme
			 * @returns {string} either 'http' or 'https'
			 */
            getScheme(): string;
			
			/**
			 * Sets endpoint scheme
			 * @param {string} s - either 'http' or 'https'
			 */
            setScheme(s: string): void;
			
			/**
			 * Gets Bing tile generation
			 * @returns {string} the tile generation as an integer
			 */
            getGeneration(): string;
			
			/**
			 * Sets Bing tile generation
			 * @param {string} g - generation as an integer
			 */
            setGeneration(g: string): void;
            
			/**
			 * Gets provider Market
			 * @returns {string} the market the tile is rendered for, defaults to 'en-US'
			 */
			getMarket(): string;
            
			/**
			 * Sets provider market
			 * @param {string} m - market as a string (e.g. 'en-US')
			 */
			setMarket(m: string): void;
            
			/**
			 * Gets Bing key
			 * @returns {string} Bing key as a string
			 */
			getBingKey(): string;
            
			/**
			 * Sets Bing key. Then calls Microsoft metadata service to automatically
			 * configure content endpoint.
			 * @param {string} key - Bing key as a string
			 */
			setBingKey(key: string): void;
        }
        /**
		 *  This is a set of classes for both bitmap and vector tile requestors 
		 * and descriptors using MapDotNet REST services.
		 * This is a desc of requestorMDN extends requestor export class.
	     * @class <requestorMDN extends requestor>
	     * @classdesc This is a description of the requestorMDN extends requestor class.
         */
		export class requestorMDN extends requestor {
            constructor(endpoint: string, options?: {
                dataFormat?: string;
                timeoutMs?: number;
                maxAvailableZoomLevel?: number;
            });
            
			/**
			 * Gets uri string of MapDotNet REST services
			 * @returns {string} a string
			 */
			getEndpoint(): string;
        }
        
		/**
		 * This is a desc of descriptorMDNRestMap export class.
	     * @class <descriptorMDNRestMap>
	     * @classdesc This is a description of the descriptorMDNRestMap class.
	     */
        export class descriptorMDNRestMap {
            constructor(mapId: string, options?: {
                version?: string;
                
				imageType?: string;
                
				
				bleedRatio?: number;
                
				
				mapCacheOption?: string;
                
				
				mapCacheName?: string;
                
				
				useQuadKeyForMapCacheName?: boolean;
                
				
				backgroundColorStr?: string;
                layerVisibility?: {};
                layerOutline?: {};
                layerFill?: {};
                layerWhere?: {};
                
				
				tag?: string;
            });

            /**
			 * Sets suspend descriptor change notifications flag. If set true, all changes to
			 * this descriptor will not readraw the map, set this to false to re-enable
			 * notifications. Setting to false will fire a notifyDescriptorChange(). This is used
			 * to queue multiple changes without having to redraw on each change.
			 * @param {boolean} flag - boolean (true or false)
			 */
			setSuspendDescriptorChangeNotifications(flag: boolean): void;
			
			/**
			 * Gets map id
			 * @returns {string} a string
			 */
            getMapId(): string;
			
			/**
			 * Gets REST service version
			 * @returns {string} a string
			 */
            getVersion(): string;
			
			/**
			 * Sets flag that replaces map cache name with quad-key
			 * @param {string} v - version number
			 */
            setVersion(v: string): void;
            
			/**
			 * Gets image type string ['png,''png8,''jpg']
			 * @returns {string} a string
			 */
			getImageType(): string;
            
			/**
			 * Sets the image type string ['png','png8','jpg']
			 * @param {string} v - image type string
			 */
			setImageType(v: string): void;
            
			/**
			 * Gets bleed ratio from 1.0 to 2.0. Bleeds greater than 1.0 will fetch content
			 * beyond the edge of the tile extents (this is useful for point features)
			 * @returns {number} a numeric from 1.0 to 2.0
			 */
			getBleedRatio(): number;
            
			/**
			 * Sets the bleed ratio from 1.0 to 2.0. Bleeds greater than 1.0 will fetch content 
			 * beyond the edge of the tile extents (this is useful for point features).
			 * @param {number} br - numeric from 1.0 to 2.0
			 */
			setBleedRatio(br: number): void;
			
			/**
			 * Gets map cache option. Options include
			 * 'None,''ReadOnly,''ReadWrite,'ForceWrite,''Default.'
			 * @returns {string} a string
			 */
            getMapCacheOption(): string;
            
			/**
			 * Sets the map cache option. Options include 
			 * 'None','ReadOnly','ReadWrite','ForceWrite','Default'.
			 * @param {string} mco - string
			 */
			setMapCacheOption(mco: string): void;
            
			/**
			 * Gets optional map cache name
			 * @returns {string} a string
			 */
			getMapCacheName(): string;
            
			/**
			 * Gets the optional map cache name.
			 * @param {string} mcn - string
			 */
			setMapCacheName(mcn: string): void;
            
			/**
			 * Gets flag that replaces map cache name with quad-key
			 * @returns {boolean} a boolean
			 */
			getUseQuadKeyForMapCacheName(): boolean;
            
			/**
			 * Sets the flag that replaces map cache name with the quad-key.
			 * @param {boolean} flag - uqmcn = boolean
			 */
			setUseQuadKeyForMapCacheName(flag: boolean): void;
            
			/**
			 * Gets map image background color
			 * @returns {string} a string
			 */
			getBackgroundColorStr(): string;
            
			/**
			 * Sets the map image background color
			 * @param {number} a - alpha byte
			 * @param {number} r - red byte
			 * @param {number} g - green byte
			 * @param {number} b - blue byte
			 */
			setBackgroundColor(a: number, r: number, g:number, b:number): void;
            
			/**
			 * Gets a boolean indicating whether or not the background is transparent.
			 * @returns {boolean} a boolean
			 */
			getIsBackgroundTransparent(): boolean;
            
			/**
			 * Set layer visibility by layer Id and boolean. These are MapDotNet map layer 
			 * Ids, not tile layer
			 * @param {string} layerId - string Id
			 * @param {boolean} isVisible - boolean
			 */
			setLayerVisibility(layerId: string, isVisible: boolean): void;
            
			/**
			 * Get layer visibility by layer Id.
			 * @param {string} layerId - string
			 * @returns {boolean} true if specified layer is visible, otherwise false.
			 */
			getLayerVisibility(layerId: string): boolean;
            
			/**
			 * Set layer outline pen by layer id, pen color and thickness.
			 * @param {string} layerId - the layer Id to affect style
			 * @param {number} a - alpha byte
			 * @param {number} r - red byte
			 * @param {number} g - green byte
			 * @param {number} b - blue byte
			 * @param {number} thk - thickness in pixels
			 */
			setLayerOutline(layerId: string, a: number, r: number, g: number, b: number, thk: number): void;
            
			/**
			 * Get layer outline pen by layer id.
			 * @param {string} layerId - the layer Id to query
			 8 @returns {string|thickness|number} associative array [color: cStr, thickness:thk}
			 */
			getLayerOutline(layerId: string): { color: string; thickness: number; };
            
			/**
			 * Set layer fill by layer id and fill color as an ARGB value
			 * @param {string} layerId - the layer Id to affect style
             * @param {number} a - alpha byte
             * @param {number} r - red byte
             * @param {number} g - green byte
             * @param {number} b - blue byte
			 */
			setLayerFill(layerId: string, a: number, r: number, g: number, b: number): void;
            
			/**
			 * Set layer fill by layer id and fill color as an expression.
			 * @param {string} layerId - the layer Id to affect style
             * @param {string} exp - SQL expression to select for color
             */
			setLayerFillAsExpression(layerId: string, exp: string): void;
            
			/**
			 * Gets layer fill as a css color string or SQL expression, by layer id.
			 * @param {string} layerId	- the layer Id to query
			 * @returns {string} a string
             */
			getLayerFill(layerId: string): string;
            
			/**
			 * Set a layer where clause.
			 * @param {string} layerId	- the layer Id
             * @param {string} where -	the where clause
             * @param {boolean} merge -	optional boolean, false to replace any existing where 
             *clause defined in the map layer (default) or true to 
             *merge (AND) with any existing
			 */
			setLayerWhere(layerId: string, where: string, merge: boolean): void;
            
			/**
			 * Set a separator for the layer where clause query string value. Default is ',' so 
			 * this is useful if using an IN clause.
			 * @param {string} sep - separator, should be a single character
			 */
			setLayerWhereSep(sep: string): void;
            
			/**
			 * Returns a separator for the layer where clause query string value.
			 * @returns {string} separator, should be a single character
			 */
			getLayerWhereSep(): string;
            
			/**
			 * Gets layer where clause if explicitly set
			 * @param {string} layerId - the layer Id to query
			 * @returns {string} a string where clause
			 */
			getLayerWhere(layerId: string): string;
            
			/**
			 * Gets tag used to modify request URLs to avoid browser caching
			 * @returns {string} a string
			 */
			getTag(): string;
            
			/**
			 * Sets a tag, typically the map tag. Non-string objects are coerced to strings. 
			 * Used to modify request URLs to avoid browser caching.
			 * @param {string} tag - the tag to use
			 */
			setTag(tag: string): void;
        }
        
		
		/**
	     * This is a desc of a descriptorMDNRestFeature export class.
	     * @class <descriptorMDNRestFeature>
	     * @classdesc This is a description of the descriptorMDNRestFeature class.
	     */
        export class descriptorMDNRestFeature {
            constructor(mapId: string, layerId: string, options?: {
                version?: string;
                bleedRatio?: number;
                fieldNames?: string[];
                clipToRenderBounds?: boolean;
                simplifyEnabled?: boolean;
            });
            
			
			/**
			 * Gets map Id
			 * @returns {string} a string
			 */
            getMapId(): string;
            
			/**
			 * Gets layer Id
			 * @returns {string} a string
			 */
			getLayerId(): string;
            
			/**
			 * Gets REST service version
			 * @returns {string} a string
			 */
			getVersion(): string;
            
			/**
			 * Sets REST service version
			 * @param {string} v - version number
			 */
			setVersion(v: string): void;
            
			/**
			 * Gets the bleed ratio from 1.0 to 2.0. Bleeds greater than 1.0 will fetch content 
			 * beyond the edge of the tile extents (this is useful for point features)
			 * @returns {number} numeric from 1.0 to 2.0
			 */
			getBleedRatio(): number;
            
			/**
			 * Sets the bleed ratio from 1.0 to 2.0. Bleeds greater than 1.0 will fetch content 
			 * beyond the edge of the tile extents (this is useful for point features).
			 * @param {number} br - numeric from 1.0 to 2.0
			 */
			setBleedRatio(br: number): void;
            
			/**
			 * Gets the optional field names to query. This attribute data may be used in 
			 * dynamic client-side rendering.
			 * @returns {string[]} an array of strings
			 */
			getFieldNames(): string[];
            
			/** 
			 * Sets the optional field names to query. This attribute data may be used in 
			 * dynamic client-side rendering.
			 * @param {string} names - array of strings for each field to query
			 */
			setFieldNames(names: string[]): void;
            
			/**
			 * Gets the flag whether to clip geometry fetched to the bounds of the request. 
			 * This can greatly improve performance with large complex geometries. Only 
			 * supported when back-end store is SQL 2008/2012 or PostGIS.
			 * @returns {boolean} a boolean
			 */
			getClipToRenderBounds(): boolean;
            
			/**
			 * Sets the flag whether to clip geometry fetched to the bounds of the request. 
			 * This can greatly improve performance with large complex geometries. Only 
			 * supported when back-end store is SQL 2008/2012 or PostGIS
			 * @param {boolean} flag - boolean
			 */
			setClipToRenderBounds(flag: boolean): void;
			
			/**
			 * Gets the flag whether to simplify paths based on the 
			 * units per pixel for the quad tile being requested.
			 * @returns {boolean} a boolean
			 */
            getSimplifyEnabled(): boolean;
			
			/**
			 * Sets the flag whether to simplify paths based on the units per pixel for the 
			 *  quad tile being requested.
			 * @param {boolean} flag - boolean
			 */
            setSimplifyEnabled(flag: boolean): void;
			
			/**
			 * Sets descriptor change notification
			 * @param {function} action - notify descriptor change
			 */
            setNotifyDescriptorChangeAction(action: () => void): void;
        }
        /**
		 * This is a generic tile requestor suitable for several third-party tile servers. These 
		 *include open street map, map quest, cloudmade, Nokia, etc.
		 * @class <requestorOpen extends requestor>
	     * @classdesc This is a description of the requestorOpen extends requestor 
		 * class.
		 */
        export class requestorOpen extends requestor {
            constructor(endpoint: string, subdomains: string[], options?: {
                dataFormat?: string;
                timeoutMs?: number;
                maxAvailableZoomLevel?: number;
            });
        }
        /**
		 * This is a requestor for local collections of data. These local collections may 
		 * originate from inlined code or from datasources other than a MapDotNet REST 
		 * feature service.
		 * @class <requestorLocal extends requestor>
	     * @classdesc This is a description of the requestorLocal extends requestor 
	     *class.
		 */
        export class requestorLocal extends requestor {
            constructor(options?: {
                dataFormat?: string;
                timeoutMs?: number;
                maxAvailableZoomLevel?: number;
                data: {}[];
            });
			
			/** 
			 * Gets unparsed source data
			 * @returns {[]} associative array of source data
			 */
            getSource(): {}[];
            
			/**
			 * Sets unparsed source data
			 * @param {[]} data - an associative array of source data
			 */
			setSource(data: {}[]): void;
            
			/** 
			 * Returns your source data parsed into an internal format { Shapes
             * [], Values: [], Bounds: [] } This may be useful for doing client-side queries on 
			 * the local data where all of the WKT has been parsed into points and geometry. 
			 * There is also a bounds collection to do a quick spatial check for complex polys.
			 * @returns {} parsed data
			 */
			getParsedData(): {
                Shapes: any[];
                Values: any[];
                Bounds: envelope[];
            };

        }
        
		/**
		 * @class <descriptorLocal>
	     * @classdesc This is a description of the descriptorLocal class. 
	     */
        export class descriptorLocal {
            constructor(options: {
                valueFieldNames: string[];
                geometryFieldName: string;
                bleedRatio?: number;
            });
        }
    }

    interface pointObject {
        x: number;
        y: number;
    }
    /**
	 * This is an immutable envelope constructor.
	 * @param {number} minX - coord as a float
	 * @param {number} minY - coord as a float
	 * @param {number} maxX - coord as a float
	 * @param {number} maxY - coord as a float
	 * @returns {envelope} a new envelope
	 */
    interface envObject {
        
		/**
		 * @returns {number} minX as integer
		 */
		minX: number;
        
		/**
		 * @returns {number} minY coord as integer
		 */
		minY: number;
        
		/**
		 * @returns {number} maxX coord as integer
		 */
		maxX: number;
        
		/**
		 * @returns {number} maxY coord as integer
		 */
		maxY: number;
	}
	
    interface mapsjsWidget {
        
		/**
		 * Gets the center of the map in spherical mercator. Use 
		 * sphericalMercator.deprojectToLatLon static function to convert to a lat/lon.
		 * @return {point} a point map center
		 */
		getMapCenter(): point;
        
		/**
		 * Sets the center of the map in spherical mercator. Use
		 * sphericalMercator.projectFromLatLon static function to convert from a lat/lon.
		 * @param {point} center - map center as a point
		 */
		setMapCenter(center: point): void;
        
		/**
		 * Same as setMapCenter except will animate from current map center to the 
		 * specified location
		 * @param {point} mc	-	 map center as an isc.rim.point
         * @param {number} duration - float in mS
         * @param {function} onCompleteAction - optional function, if provided, is called when
         * the animation is completed
		 */
		setMapCenterAnimate(center: point, durationMs?: number, completeAction?: () => void): void;
        
		/**
		 * Sets the map center to the current geolocation if supported. The map is
         * animated to the new location.
		 * @param {number} durationMS - float in mS
		 * @param {function} completeAction - optional function, if provided, is called
		 * when the animation is completed
		 */
		setMapCenterToGeolocationAnimate(durationMs?: number, completeAction?: () => void): void;
        
		/**
		 * Gets current zoom level from 1 to 20
		 * @returns {number} zoom level as a float
		 */
		getZoomLevel(): number;
        
		/**
		 * Sets current zoom level from 1 to 20
		 * @param {number} z1 - zoom level as an integer
		 */
		setZoomLevel(zl: number): void;
        
		/**
		 * Sets minimum zoom level for the map
		 * @param {number} z1 - zoom level as an integer
		 */
		setMinZoomLevel(zl: number): void;
        
		/**
		 * Sets maximum zoom level for the map
		 * @param {number} z1 - zoom level as an integer
		 */
		setMaxZoomLevel(zl: number): void;
        
		/**
		 * Same as setZoomLevel but animates from the current zoom level to the new value
		 * @param {number} zl -	zoom level as an integer
         * @param {number} duration - float in mS
         * @param {function} onCompleteAction -	optional function, if provided, is called when
         * the animation is completed
		 */
		setZoomLevelAnimate(zl: number, durationMs?: number, completeAction?: () => void): void;
        
		/**
		 * Updates current zoom level by applying a delta
		 * @param {number} delta - integer zoom level delta to apply
		 */
		zoomDelta(delta: number): void;
        
		/** 
		 * Same as zoomDelta but animates from the current zoom level to the new
		 * value
		 * @param {number} delta - integer zoom level delta to apply
		 * @param {number} durationMs - float in mS
		 */
		zoomDeltaAnimate(delta: number, durationMs?: number): void;
        
		/**
		 * Animates between two locations (map center and zoom level) and does so as
         * a parabolic path.
		 * @param {point} mc - destination map center as an isc.rim.point
         * @param {number} zl - destination zoom level as an integer
         * @param {number} duration - animation duration as a float in mS
         * @param {function} onCompleteAction -	optional function, if provided, is call when
         * the animation is completed
		 */
		flyTo(center: point, zl: number, durationMs?: number, completeAction?: () => void): void;
        
		/**
		 * Gets current map extents in spherical mercator units
		 * @return {envelope} envelope map extents
		 */
		getMapExtents(): envelope;
        
		/**
		 * Gets current map units per pixel (meters)
		 * @returns {number} meters as a float
		 */
		getMapUnitsPerPixel(): number;
        
		/**
		 * Gets map extens width and height in pixels
		 * @returns {number} associative array
		 *  w: width in pixels as an integer
		 *  h: height in pixels as an integer
		 */
		getViewExtentsInPix(): { w: number; h: number; };
        
		/**
		 * Gets the current projected map scale. This is the ratio of units on the screen
         * to map units depicted.
		 * @returns {number} ration (1 to N) as a float
		 */
		getProjectedMapScale(): number;
        
		/**
		 * Gets the current actual map scale. This is the ratio of units on the screen to
         * actual units on the earth's surface at the latitude of the current map center.
		 * @returns {number} ration (1 to N) as a float
		 */
		getActualMapScale(): number;
        
		/**
		 * Gets the best fit zoom level based on the supplied map extents for the current
         * display extents in pixels.
		 * @param {envelope} extentsNew - new map extents to fit to as an envelope
		 * @returns {number} an integer between min and max supported zoom levels
		 */
		getBestFitZoomLevelByExtents(extentsNew: envelope): number;
        
		/**
		 * Forces the map to redraw the currently loaded tile and geometry content.
         * You should not have to call this as redraws are automatically handled during 
		 * programatic state changes. This would be for edge cases where the developer 
		 * is affecting internal state in an undocumented way.
		 */
		redraw(): void;
        
		/**
		 * Updates the map to the size of its container. This updates internal parameters 
		 * for computing map extents and handling the amount of tile content to 
		 * download. This is handled automatically if the browser window is resized. But 
		 * if you are sizing the map programatically (e.g. resizable panel or slider) then 
		 * call this after the parent container has resized.
		 */
		resize(): void;
        
		/**
		 * pushes a tile layer onto the top of the display stack
		 * @param {tile.layer} tl - a tile layer
		 */
		pushTileLayer(tl: tile.layer): void;
        
		/**
		 * Pops a tile layer off the top of the display stack
		 * @returns {tile.layer} the removed tile layer as a tile layer
		 */
		popTileLayer(): tile.layer;
        
		/**
		 * Gets current number of tile layers on display stack
		 * @returns {number} a count as an integer
		 */
		getTileLayerCount(): number;
        
		/**
		 * Gets tile layer on display stack by its key
		 * @param {string} key - tile layer by key
		 * @returns {tile.layer} tile layer found as a tile layer or null if not found
		 */
		getTileLayer(key: string): tile.layer;
        
		/**
		 * Gets a map point in map units from a supplied point in pixel units from the 
		 * currently displayed extents.
		 * @param {number} x - x coord in map pixels
		 * @param {number} y - y coord in map pixels
		 * @returns {point} a converted point as a point
		 */
		computeMapPointFromPixelLocation(x: number, y: number): point;
        
		/**
		 * Determines whether or not map extent changes can occur through gestures 
		 * like mouse or touch drag, mouse wheel or pinch zoom.
		 * @param {boolean} flag - set to true to freeze the map and prevent all map 
		 * extent changes through gestures, or false to resume normal behavior.
		 */
		setSuspendMapExtentChangesByGestures(flag: boolean): void;
        
		/**
		 * Sets the z-order of drawn content in relation to the gesture capture panel. The 
		 * default behavior (false) is to have fixed content and geometry underneath the 
		 * gesture panel in the DOM. If false, all pointer events are handled by the 
		 * gesture capture panel and optionally parents of the map control. If true, drawn 
		 * content will receive pointer events first and will block gestures to the map. If 
		 * true, digitizing will not function and polygons will block map navigation. In some 
		 * scenarios you may want to set this to true if you are placing fixed-
		 * content (such as point features) on the map and need to handle gestures on 
		 * the placed content. You can call this function at any time to change the order.
         * @param {boolean} flag - order of the drawn content area in relation to the gesture 
		 * capture panel. False (default) is below and True is above.
		 */
		setDrawnContentZorderToTop(flag: boolean): void;
        
		/**
		 * Add a fixed element to the content area which resides at a z-level above tiled 
		 * map content. These elements do not scale with the map scale. This is used to 
		 * place markers or callouts on the map
		 * @param {HTMLElement} element - any html that can be added to the DOM
         * @param {number} mapUnitsX	-	 is the insertion point X value in map units
         * @param {number} mapUnitsY	-	 is the insertion point Y value in map units
         * @param {function} addAction	-	 is an optional function which is passed the DOM element after it is placed into the fixed element content area
         * @param {HTMLElement} dragOptions	-	 is an optional object to support making the placed object draggable, the properties include:
         * dragEnabled is a boolean property that must be true to enable dragging
         * downAction is an optional function taking an isc.rim.point that is called when a pointer down occurs on the element
         * moveAction is an optional function taking an isc.rim.point that is called when the element moves under pointer movement
         *upAction is an optional function taking an isc.rim.point that is called when a pointer up occurs on the element
		 */
		addFixedContentElement(element: HTMLElement, mapUnitsX: number, mapUnitsY: number, addAction: (ele: HTMLElement) => void, dragOptions: {
            
			/**
			 * @returns {boolean} a boolean
			 */
			dragEnabled: boolean;
            
			/**
			 * @returns {boolean} a boolean
			 */
			useElementInsteadOfNewGestureOverlay: boolean;
            
			/**
			 * @param {point} downPoint - 
			 * @returns {function} 
			 */
			downAction?: (downPoint: point) => any;
            
			/**
			 * @param {point} movePoint - 
			 */
			moveAction?: (movePoint: point) => void;
            
			/**
			 * @param {point} upPoint - 
			 */
			upAction?: (upPoint: point) => void;
            
			/**
			 * @param {number} delta - 
			 */
			wheelAction?: (delta: number) => void;
        }): void;
		
		/**
		 * Move an existing fixed element on the content area
		 * @param {HTMLElement} element - is the existing DOM element to move
		 * @param {number} mapUnitsX - is the new point X value in map units
		 * @param {number} mapUnitsY - is the new point Y value in map units
		 */
        moveFixedContentElement(element: HTMLElement, mapUnitsX: number, mapUnitsY: number): void;
        
		/**
		 * Removes fixed element from display by reference
		 * @param {HTMLElement} element - a DOM element added via addFixedContentElement
		 */
		removeFixedContentElement(element: HTMLElement): void;
        
		/**
		 * Add a styled path geometry to the content area which resides at a z-level 
		 * above tiled map content. The geometry is converted to SVG and added to the 
		 * content area DOM. If an attempt to add a geometry is made with the same 
		 * key, the geometry is swapped out. You must remove using removePathGeometry 
		 * for resource cleanup.
		 * @param {styleGeometry} styledGeom - styledGeometry to render
		 * @param {string} key - string used to tie a geometry to its SVG rendering in
		 * the DOM and is used to remove the geometry
		 * @returns {element} a SVG element added to the DOM
		 */
		addPathGeometry(styledGeom: styledGeometry, key: string): void;
        
		/**
		 * Updates an existing path geometry to reflect a style change
		 * @param {geometryStyle} styleNew - a new geometryStyle
		 * @param {string} key - string used to identify an existing
		 * styledGeometry in the DOM that was added by
		 * addPathGeometry
		 */
		updatePathGeometryStyle(styleNew: geometryStyle, key: string): void;
        
		/**
		 * Removes styledGeometry from display by its key
		 * @param {string} key - a string used to lookup the geometry to removed based on
		 * the key used in addPathGeometry
		 */
		removePathGeometry(key: string): void;
        
		/**
		 * Begins creation of an envelope by click-dragging the bounds
		 * @param {function} options - an action (function) taking a single envelope parameter that is called at
		 * the end of the envelope creation
		 */
		beginDigitize(options: {
            /**
			 * a string used to keep track of the DOM element
			 * if the path is left behind after the call to beginDigitize
			 * @returns {string} a string
			 */
			key?: string;
            shapeType: string;
            geometryStyle?: geometryStyle;
            
			/**
             * an existing styledGeometry to edit			
			 * @returns {styledGeometry} an edited styledGeometry
			styledGeometry?: styledGeometry;
            
			/**
			 * @param {number} setIdx - optional action called on a nodetap
			 * and hold
			 * @param {number} idx - optional action called on a nodetap and hold
			 * @returns {boolean} a boolean
			 */
			nodeTapAndHoldAction?: (setIdx: number, idx: number) => boolean;
            
			/**
			 * @param {number) x - optional action called on a node move for value x
			 * @param {number} y - optional action called on a node move for value y
			 * @param {string} actionType - optional action on a node move for action
			 * Type string
			 * @returns {string} a string
			 */
			nodeMoveAction?: (x: number, y: number, actionType: string) => any;
            
			/**
			* optional action on geometry change
			*/
			shapeChangeAction?: () => void;
            
			/**
			 * an action (function) taking a single 
			 * envelope parameter that is called at the end of the envelope creation
			 * @param {envelope} env - envelope parameter
			 */
			envelopeEndAction?: (env: envelope) => void;
            suppressNodeAdd?: boolean;
            
			/**
			 * @returns {boolean} true to leave path behind when done
			 */
			leavePath?: boolean;
        }): void;
        endDigitize(): void;
        
		/**
		 * Gets a snapshot copy of current digitizing path while editing
		 * @returns {geometry} a geometry
		 */
		getDigitizeSnapshot(): geometry;
        
		/** 
		 * Adds set to end of digitizing path
		 */
		pushSetOnDigitizePath(): void;
        
		/**
		 * Removes last set from digitizing path
		 * @return {number} 
		 */
		popSetFromDigitizePath(): number[];
        
		/**
		 * Programmatically delete a node while digitizing
		 * @param {number} setIdx - the set index (0-based) of the ring or path to
		 * remove the node from
		 * @param {number} nodeIdx - the node index to remove (0-based) in the specified
		 * ring or path
		 */
		deleteNodeOnDigitizePath(setIdx: number, nodeIdx: number): void;
        
		/**
		 * Returns true if digitizing is enabled
		 * @returns {boolean} true if digitizing is enabled, otherwise false
		 */
		isDigitizingEnabled(): boolean;
        
		/** 
		 * Set the function called when the map extents have stopped changing 
		 *(e.g. after an animated pan or zoom).
		 * @param {function} action - an action (function reference) that takes one parameter. 
		 * The parameter passed in is an associative array with the following keys:
         * - centerX
         * - centerY
         * - centerLat
         * - centerLon
         * - zoomLevel
         * - mapScale (actual ground scale)
         * - mapScaleProjected (map projection scale)
         * - mapUnitsPerPixel
         * - extents
		 */
		setExtentChangeCompleteAction(action: (vals: {}) => void): void;
        
		/**
		 * Set the function called when map content (map tiles and fixed elements) are 
		 * re-positioned in the DOM This is done automatically as the map is panned 
		 * beyond existing content and zoomed to a new level requiring content.
		 * @param {function} action - an action (function reference) that takes one parameter. 
		 * The parameter passed in is an associative array with the following keys:
         * - centerX
         * - centerY
         * - zoomLevel
         * - mapUnitsPerPixel
		 */
		setContentRepositionAction(action: (vals: {}) => void): void;
        
		/**
		 * Sets function called when map is clicked (left mouse click or touch on
		 * mobile)
		 * @param {function} action - an action (function reference) that takes one
		 * parameter
		 * @param {point} pt - point in map units where clicked
		 */
		setPointerClickAction(action: (pt: point) => void): void;
        
		/** 
		 * Sets function called when the map pointer is moved and then hovers
		 * @param {function} action - an action (function reference) that takes one
		 * parameter
		 * @param {point} pt - point in map units where hovered
		 */
		setPointerHoverAction(action: (pt: point) => void): void;
        
		/** 
		* Sets the margin around the map in pixels for extra content fetched so that tile 
		* rebuilding of the display is minimized. This is an advanced property and does not 
		* generally need to be adjusted. The default is 128 pixel (one half tile width) 
		* Increase for very large maps (width and height in pixels is large) or panning is 
		* active. Decrease for very small maps (e.g. mobile devices) or where panning is 
		* minimal.
		* @param {number} cem - a pixel margin as an integer
		*/
		setContentExtentsMarginInPixels(cem: number): void;
    }
}

/**
 * This is a jQuery widget encapsulating the MapDotNet UX RIM (Rich Interactive 
 * Mapping) HTML5 map control usage: 
 * $(myContainerDOMElement).rimMap('[widget function]', param1, param2...);
 */
interface JQuery {

    rimMap(): JQuery;
    rimMap(command: any, param?: any, param2?: any, param3?: any, param4?: any, param5?: any): JQuery;
    getMapsjs(): any;
}
