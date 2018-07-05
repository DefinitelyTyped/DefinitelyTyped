// Type definitions for Mapsjs 9.6.0
// Project: https://github.com/mapsjs
// Definitions by: Matthew James Davis <https://github.com/davismj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Mapsjs 9.6.0 Copyright (c) 2013 ISC. All Rights Reserved.
*/



/** 
 * Clusters a set of points.
 * @param {object} options An options object which specifies the clustering algorithm.
 * @returns {object} An array of clustered points.
 */
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
 * An immutable envelope
 * @class envelope
 */
export class envelope {
    constructor(minX: number, minY: number, maxX: number, maxY: number);

    /**
     * Gets the minimum x coordinate of the envelope.
     * @returns {number} The minimum x coordinate. 
     */
    getMinX(): number;

	/**
	 * Gets the minimum y coordinate of the envelope
	 * @returns {number} The minimum y coordinate.
	 */
    getMinY(): number;
	
	/** 
	 * Gets the maximum x coordinate of the envelope
	 * @returns {number} The maximum x coordinate.
	 */
    getMaxX(): number;
	
	/**
	 * Gets the maximum y coordinate of the envelope
	 * @returns {number} The maximum y coordinate.
	 */
    getMaxY(): number;
	
	/**
	 * Creates a new envelope from this as deep copy.
	 * @returns {envelope} The new cloned envelope.
	 */
    clone(): envelope;

    /**
     * Creates a new envelope from this one plus x and y margins.
     * @param {number} marginX The x margin.
     * @param {number} marginY The y margin.
     * @returns {envelope} A new envelope.
     */
    createFromMargins(marginX: number, marginY: number): envelope;
	
	/**
	 * Create a new envelope from this one plus a bleed ratio.
	 * @param {number} bleed The bleed ratio.
	 * @returns {envelope} A new envelope.
	 */
    createFromBleed(bleed: number): envelope;
	
	/**
	 * Gets the center point of the envelope.
	 * @returns {point} Center as a point.
	 */
    getCenter(): point;
	
	/**
	 * Gets the width of the envelope.
	 * @returns {number} Width of the envelope.
	 */
    getWidth(): number;
	
	/**
	 * Gets height of the envelope.
	 * @returns {number} Height of the envelope.
	 */
    getHeight(): number;
	
	/**
	 * Gets area of the envelope.
	 * @return {number} Area of the envelope.
	 */
    getArea(): number;
	
	/**
	 * Returns the minimum and maximum coordinates of this envelope as an envObject.
	 * @returns {envObject} Representaton of this envelope as an envObject.
	 */
    toObject(): envObject;
	
	/**
	 * Gets upper left coordinate of this envelope.
	 * @returns {point} A new point.
	 */
    getUL(): point;
	
	/**
	 * Gets upper right of this envelope.
	 * @returns {point} A new point.
	 */
    getUR(): point;
	
	/**
	 * Gets lower left of this envelope.
	 * @returns {point} A new point.
	 */
    getLL(): point;
	
	/**
	 * Gets lower right of this envelope.
	 * @returns {point} A new point.
	 */
    getLR(): point;
	
	/**
	 * Gets the aspect of the envelope.
	 * @returns {number} Width-to-height ratio.
	 */
    getAspect(): number;
	
	/**
	 * Equality comparer between this and another envelope.
	 * @param {envelope} env Envelope to compare.
	 * @return {boolean} Result of equality comparison.
	 */
    equals(env: envelope): boolean;
	
	/**
	 * Method for casting this envelope as a string.
	 * @returns {string} String of the form 'minX,minY,maxX,maxY'.
	 */
    toString(): string;
	
	/**
	 * Create a closed geometry from this envelope.
     * @returns {geometry} A new closed path geometry.
	 */
    toGeometry(): geometry;
	
	/**
	 * Tests whether the given point is contained within this envelope.
	 * @param {point} pt Point to test.
	 * @returns {boolean} Result of containment test.
	 */
    contains(pt: point): boolean;
}

/**
 * Exposes static functions that act on or return envelopes.
 * @module envelope
 */
export module envelope {

	/**
	 * Creates a new envelope from MapDotNet XML.
	 * @param {string} xml A MapDotNet XML string of the envelope.
	 * @returns {envelope} A new envelope 
	 */
    export function createFromMdnXml(xml: string): envelope;
	
	/**
	 * Creates new envelope from two corner points.
	 * @param {point} pt1 Corner point
	 * @param {point} pt2 Opposite corner point
	 * @returns {envelope} A new envelope
	 */
    export function createFromPoints(pt1: point, pt2: point): envelope;
	
	/**
	 * Creates a new envelope from the x and y coordinates of the center 
	 * point and x and y margins from the center point.
	 * @param {number} centerPtX The center x coordinate.
	 * @param {number} centerPtY The center y coordinate.
	 * @param {number} marginX The margin from center x coordinate.
	 * @param {number} marginY The margin from center y coordinate.
	 * @returns {envelope} A new envelope
	 */
	export function createFromCenterAndMargins(centerPtX: number, centerPtY: number, marginX: number, marginY: number): envelope;
	
	/**
	 * Tests whether two given envelopes intersect.
	 * @param {envelope} env1 First envelope to test.
	 * @param {envelope} env2 Second envelope to test.
	 * @returns {boolean} Result of the intersection test.
	 */
    export function intersects(env1: envelope, env2: envelope): boolean;
	
	/**
	 * Creates a new envelope from the union of two given envelopes.
	 * @param {envelope} env1 The first enevelope to unite.
	 * @param {envelope} env2 The second envelope to unite.
	 * @returns {envelope} A new envelope.
	 */
    export function union(env1: envelope, env2: envelope): envelope;
}

/**
 * A general geometry which can represent a point, line, polygon,
 * mulitpoint, multilinestring
 * @class geometry
 */
export class geometry {
    constructor(isPath?: boolean, isClosed?: boolean);
    
	/**
	 * Creates a new polygon or polyline form the geometry according to
	 * whether the geometry is closed.
	 * @returns {any} A new polyline or polygon geometry.
	 */
	factoryPoly(): any;
	
	/**
	 * Creates a deep copy of this geometry.
	 * @returns {geometry} The new cloned geometry.
	 */
    clone(): geometry;
	
	/**
	 * Iterates every vertex in the geometry and passes to the supplied 
	 * callback. Return true from in the callback will break the iteration.
	 * @param {function} action Callback with the signature action(setIdx, idx, x, y, set).
	 */
    foreachVertex(action: (setIdx: number, idx: number, x: number, y: number, s: number[]) => void): void;
    
	/**
	 * Returns the geometry's bounding box as an envelope.
	 * @returns {envelope} The bounding box of the geometry as an envelope.
	 */
	getBounds(): envelope;
	
	/**
	 * Checks whether or not this geometry is closed.
	 * @returns {boolean} Result of the path check.
	 */
    getIsPath(): boolean;
	
	/**
	 * Checks whether or not this geometry is closed.
	 * @returns {boolean} Result of the closed check.
	 */
    getIsClosed(): boolean;
	
	/**
	 * Gets the number of sets in this geometry.
	 * @returns {number} Number of sets.
	 */
    getSetCount(): number;
	
	/**
	 * Gets a set from this geometry's set collection by index, or, if no 
	 * index is provided, gets the last set. Note: for polygons, first set
	 * is primary ring and subsequent ones are holes.
	 * @param {number} [idx] Index of the set to return.
	 * @returns {number[]} A set as an array of points in the form [xn,yn].
	 */
    getSet(idx: number): number[];
	
	/**
	 * Adds a new set to this geometry's collection of sets.
	 * @param {number[]} s Set to add as an array of points in the form [xn,yn].
	 */
    pushSet(s: number[]): void;
	
	/**
	 * Gets the last set in the geometry's set collection and removes it 
	 * from the collection.
	 * @returns {number} Set removed as an array of points in the form [xn,yn].
	 */
    popSet(): number[];
	
	/**
	 * Creates SVG path data from this geometry if it is a path.
	 * @returns {string} String of the SVG path or null the geometry is not a path.
	 */
    toSvgPathData(): string;
	
	/**
	 * Adds point to the last set in geometry's set collection. If the
	 * geometry is empty, a new set is added to the geometry first.
	 * @param {point} pt The point to add.
	 * @returns {object} Object of the form {setIdx, idx} where setIdx is
	 * the 0-based index of the set the point was added to and idx is the
	 * 0-based index of the point in its set.
	 */
    addPointToLastSet(pt: point): { setIdx: number; idx: number; };
	
	/**
	 * Tests the validity of this geometry. An open path geometry is valid
	 * if it has at least one set with at least two points. A closed 
	 * geometry is valid if it has at least one set with at least three
	 * points. A point (non-path) geometry is always valid.
	 * @returns {geometry} valid geometry is true, otherwise false.
	 */
    isValid(): boolean;
	
	/**
	 * Creates a wkt string from this geometry.
	 * @returns {string} A string of well known text.
	 */
    toString(): string;
    toWkt(): string;
	
	/**
	 * Finds the point in this geometry nearest to the given point.
	 * @param {point} pt Reference point.
	 * @returns {object} An object of the form {setIdx, ptIdx, pt, distance}
	 * where setIdx is the index of the set the point is in, ptIdx is the
	 * index of the point in the set, pt is the point object, and distance
	 * is the distance of the point to the reference point in map units.
	 */
    findNearestVertex(pt: point): { setIdx: number; ptIdx: number; pt: point; distance: number; };
    
	/**
	 * Finds point along boundary of geometry nearest to the given point
	 * @param {point} pt Reference point.
	 * @param {boolean} [close] Flag to indicate whether this geometry
	 * should be treated as a closed geometry.
	 * @returns {object} An object of the form {setIdx, ptIdx, pt, distance}
	 * where setIdx is the index of the set the point is in, ptIdx is the
	 * index of the point in the set, pt is the point object, and distance
	 * is the distance of the point to the reference point in map units.
	 */
	findNearestSegment(pt: point, close?: boolean): { setIdx: number; ptIdx: number; pt: point; distance: number; };
    
	/** 
	 * Finds coordinates in map units of the midpoint of this geometry. If
	 * this geometry is an open path, the midpoint is the midpoint of the
	 * path. If this geometry is a closed path, the midpoint is the centroid
	 * of the polygon. If a set index is not provided, finds the labeling
	 * point for the last set in this geometry's set collection.
	 * @param {number} [idx] Index of set for which to find the labeling point.
	 * @returns {point} Midpoint of this geometry.
	 */
	getLabelingPoint(idx?: number): point;
	
	/**
	 * Tests whether this geometry contains a given point/
	 * @param {point} pt The reference point.
	 * @returns {boolean} Result of the containment test.
	 */
    contains(pt: point): boolean;
}

/** 
 * Exposes static functions that act on or return geometries, including
 * constructors for specific geometries such as polygon and polyline.
 * @module geometry 
 */
export module geometry {
    
	/**
	 * A polyline object which is an open path geometry with one or more paths.
     * @class polyline
     */
    class polyline extends geometry {
        constructor(geom: geometry);
        
		/**
		 * Gets the underlying geometry of the polyline.
		 * @returns {geometry} The polyline's underlying geometry object.
		 */
		getGeometry(): geometry;
		
		/**
		 * Creates a new polyline object from a deep copy of the underlying geometry.
		 * @returns {polyline} Thew new cloned polyline.
		 */
        clone(): polyline;
		
		/**
		 * Gets number of lines in this polyline.
		 * @returns {number} Number of lines.
		 */
        getLineCount(): number;
		
		/**
		 * Gets a line from this polyline's liune collection by index, or, 
		 * if no index is provided, gets the last line.
		 * @param {number} [idx] Index of the line to return.
		 * @returns {number[]} A line as an array of points in the form [xn,yn].
		 */
        getLine(idx: number): number[];
		
		/**
		 * Adds a new line to this polyline's line collection.
		 * @param {number[]} s Line to add as an array of points in the form [xn,yn].
		 */
        pushLine(s: number[]): void;
		
		/**
		 * Gets the last line in the polyline's set collection and removes it 
		 * from the collection.
		 * @returns {number} Line removed as an array of points in the form [xn,yn].
		 */
        popLine(): number[];
		
		/**
		 * Calculates distance of a line in a polyline by index according 
		 * to projected map cooordinates. If no index is provided, uses
		 * the last line in the polyline's set collection.
		 * @param {number} [idx] Index of the line for which to compute the distance.
		 * @returns {number} Length in projected units of the distance of the line.
		 */
        getProjectedDistance(idx: number): number;
		
		/**
		 * Calculates distance of a line in a polyline by index according 
		 * to actual distance. If no index is provided, uses the last line 
		 * in the polyline's set collection.
		 * @param {number} [idx] Index of the line for which to compute the distance.
		 * @returns {number} Distance in meters of the line.
		 */
        getActualDistance(idx?: number): number;
		
		/**
		 * Determines whether this polyline intersects a given geometry.
		 * @param {geometry} geom Geometry to test against.
		 * @returns {boolean} Result of the intersection test.
		 */
        intersects(geom: geometry): boolean;
    }
    
	/**
	  * A polyline object which is a closed path geometry with one or more paths.
      * @class polygon
      */
    class polygon extends geometry {
        constructor(geom: geometry);
		
		/**
		 * Gets the underlying geometry of the polygon.
		 * @returns {geometry} The polygon's underlying geometry object.
		 */
        getGeometry(): geometry;
		
		/**
		 * Creates a new polygon object from a deep copy of the underlying geometry.
		 * @returns {polygon} Thew new cloned polygon.
		 */
        clone(): polygon;
		
		/**
		 * Gets number of rings in this polygon.
		 * @returns {number} Number of rings.
		 */
        getRingCount(): number;
	
		/**
		 * Gets a ring from this polygon's set collection by index, or, 
		 * if no index is provided, gets the last ring.
		 * @param {number} [idx] Index of the ring to return.
		 * @returns {number[]} A ring as an array of points in the form [xn,yn].
		 */
        getRing(idx: number): number[];
		
		/**
		 * Adds a new ring to this polygon's ring collection.
		 * @param {number[]} s Ring to add as an array of points in the form [xn,yn].
		 */
        pushRing(s: number[]): void;
		
		/**
		 * Gets the last ring in the polygon's ring collection and removes it 
		 * from the collection.
		 * @returns {number} Ring removed as an array of points in the form [xn,yn].
		 */
        popRing(): number[];
		
		/**
		 * Calculates area of a ring in a polygon by index according 
		 * to projected map cooordinates. If no index is provided, uses
		 * the last ring in the polygon's ring collection.
		 * @param {number} [idx] Index of the ring for which to compute the area.
		 * @returns {number} Area in square projected units of the ring.
		 */
        getProjectedArea(idx: number): number;
		
		/**
		 * Calculates perimeter of a ring in a polygon by index according 
		 * to projected map cooordinates. If no index is provided, uses
		 * the last ring in the polygon's ring collection.
		 * @param {number} [idx] Index of the ring for which to compute the perimeter.
		 * @returns {number} Length in projected units of the distance of the ring.
		 */
        getProjectedPerimeter(idx: number): number;
		
		/**
		 * Calculates area of a ring in a polygon by index according 
		 * to the actual area. If no index is provided, uses the last ring
		 * in the polygon's ring collection.
		 * @param {number} [idx] Index of the ring for which to compute the area.
		 * @returns {number} Area in square meters of the ring.
		 */
        getActualArea(idx?: number): number;
		
		/**
		 * Calculates perimeter of a ring in a polygon by index according 
		 * to actual distance. If no index is provided, uses the last ring
		 * in the polygon's ring collection.
		 * @param {number} [idx] Index of the ring for which to compute the perimeter.
		 * @returns {number} Length in meters of the perimeter of the ring.
		 */
        getActualPerimeter(idx?: number): number;
		
		/**
		 * Determines whether this polygon intersects a given geometry.
		 * @param {geometry} geom Geometry to test against.
		 * @returns {boolean} Result of the intersection test.
		 */
		intersects(geom: geometry): boolean;
		
		/**
		 * Determines whether this polyline overlaps a given geometry.
		 * @param {geometry} geom Geometry to test against.
		 * @returns {boolean} Result of the intersection test.
		 */
        overlaps(poly: polygon): boolean;

		/**
		 * Convert this polygon into an array of OGC compliant polygons where
		 * the first set is a ring and all subsequent contained sets are holes.
		 * @returns {polygon[]} An array of OGC polygons.
		 */
		toMultiPolygon(): polygon[];
    }
}

/**
 * A style specification for geometry objects.
 * @class geometryStyle
 */
export class geometryStyle {
    constructor(options?: styleObj);
	
	/**
	 * Gets path outline thickness in pixels.
	 * @returns {number} Thickness of path outline.
	 */
    getOutlineThicknessPix(): number;
	
	/**
	 * Sets path outline thickness in pixels.
	 * @param {number} t Desired thickness.
	 */
    setOutlineThicknessPix(t: number): void;
	
	/**
	 * Gets path outline color as a CSS style string.
	 * @returns {string} Outline color as a CSS style string.
	 */
    getOutlineColor(): string;
	
	/**
	 * Sets path outline color from a CSS style string.
	 * @param {string} c Outline color as a CSS style string.
	 */
    setOutlineColor(c: string): void;
	
	/**
	 * Gets path outline opacity in decimal format.
	 * @returns {number} Outline opacity.
	 */
    getOutlineOpacity(): number;
	
	/**
	 * Set path outline opacity to a decimal between 0 and 1.
	 * @param {number} o Outline opacity.
	 */
    setOutlineOpacity(o: number): void;
	
	/**
	 * Gets fill color as a CSS style string.
	 * @returns {string} Fill color as a CSS style string.
	 */
    getFillColor(): string;
	
	/**
	 * Sets fill color as a CSS style string.
	 * @param {string} c Fill color as a CSS style string.
	 */
    setFillColor(c: string): void;
	
	/**
	 * Gets fill opacity in decimal format.
	 * @returns {number} Fill opacity.
	 */
    getFillOpacity(): number;
	
	/**
	 * Sets fill opacity to a decimal between 0 and 1.
	 * @param {number} o Fill opacity.
	 */
    setFillOpacity(o: number): void;
    
	/**
	 * Gets the dash array as a string.
	 * @returns {string} Dash array as astring.
	 */
	getDashArray(): string;
    
	/**
	 * Sets dash array string from a CSS style string. Defaults to solid
	 * stroke if no dash array string is provided.
	 * @param {string} [da] Dash array as a CSS style string.
	 */
	setDashArray(da: string): void;
}

/**
 * Gets the mapsjs license.
 * @returns {string} The license.
 */
export var license: string;

/**
 * A simple point class with x and y coordinates.
 * @class point
 */
export class point {

    constructor(x: number, y: number);
	
	/**
	 * Returns the x coordinate.
	 * @returns {number} The x coordinate.
	 */
    getX(): number;
	
	/**
	 * Returns the y coordinate.
	 * @returns {number} The y coordinate.
	 */
    getY(): number;
	
	/**
	 * Returns the x and y coordinates of this point as a pointObject.
	 * @returns {pointObject} Representaton of this point as an pointObject.
	 */
    toProps(): pointObject;
	
	/**
	 * Equality comparer between this point and a given reference point.
	 * @param {point} pt Reference point.
	 * @returns {boolean} Result of the equality test.
	 */
    equals(pt: point): boolean;
	
	/** 
	 * Creates a point from this point offset by a given x and y distance.
	 * @param {number} dx The x offset.
	 * @param {number} dy The y offset.
	 * @returns {point} The offset point.
	 */
    createOffsetBy(dx: number, dy: number): point;
	
	/**
	 * Creates new n-sided polygon around this point.
	 * @param {number} sides Number of polygon sides.
	 * @param {number} radius Distance to polygon points.
	 * @returns {polygon} The generated polygon.
	 */
    convertToPoly(side: number, radius: number): geometry.polygon;
	
	/**
	 * Gets the wkt representation of this point.
	 * @returns {string} The well known text for this point.
	 */
    toString(): string;
	
	/** 
	 * Creates a deep copy of this point.
	 * @returns {point} The new cloned point.
	 */
    clone(): point;
	
	/**
	 * Returns this point's bounding box.
	 * @returns {envelope} The bounding box of the point as an envelope.
	 */
    getBounds(): envelope;
	
	/**
	 * Computes distance between this point and a given point in projected
	 * map units.
	 * @param {point} pt Point to which to compute distance.
	 * @returns {number} Distance from this point to the given point in
	 * projected map units.
	 */
    distanceTo(pt: point): number;
}

/**
 * Exposes static functions that act on points.
 * @module point
 */
export module point {

    /**
	 * Computes the distance between two points in coordinate units.
	 * @param {number} x1 The x coordinate for the first point.
	 * @param {number} y1 The y coordinate for the first point. 
	 * @param {number} x2 The x coordinate for the second point. 
	 * @param {number} y2 The y coordinate for the second point. 
	 * @returns {number} Distance in coordinate units.
	 */
    export function distance(x1: number, y1: number, x2: number, y2: number): number;
    
	/**
	 * Computes the midpoint of two points.
	 * @param {number} x1 The x coordinate for the first point.
	 * @param {number} y1 The y coordinate for the first point. 
	 * @param {number} x2 The x coordinate for the second point. 
	 * @param {number} y2 The y coordinate for the second point. 
	 * @return {point} Midpoint point.
	 */
	export function midpoint(x1: number, y1: number, x2: number, y2: number): point;
}

/** 
 * Exposes static functions related to the Spherical Mercator projection.
 * @module sphericalMercator 
 */
export module sphericalMercator {
    
	/**
	 * Gets the EPSG number for Spherical Mercator.
	 * @return {number} ESPG number.
	 */
	export function getEpsg(): number;
	
	/** 
	 * Gets the minimum zoom level for this projection.
	 * @returns {number} Minimum zoom level.
	 */
    export function getMinZoomLevel(): number;
	
	/**
	 * Sets the minimum zoom level for this projection. Normally this is 
	 * set to 1.0 and should not be altered.
	 * @param {number} minZ Desired minimum zoom level.
	 */
    export function setMinZoomLevel(minZ: number): void;
	
	/**
	 * Gets the maxmimum zoom level for this projection.
	 * @returns {number} Maximum zoom level.
	 */
    export function getMaxZoomLevel(): number;
	
	/**
	 * Sets the maximum zoom level for this projection. Normally this is 
	 * set to 20.0 and should not be altered.
	 * @param {number} maxZ1 Desired maximum zoom level.
	 */
    export function setMaxZoomLevel(maxZ: number): void;
	
	/**
	 * Gets the tile height and width in pixels.
	 * @returns {number} The height and width of the tiles in pixels.
	 */
    export function getTileSizePix(): number;
	
	/**
	 * Gets the display DPI, which defaults to 96. Note: The dpi is 
	 * recomputed on page load complete.
	 * @returns {number} Dots per inch on display.
	 */
    export function getDpi(): number;
	
	/**
	 * Set the display DPI, which defaults to 96. Note: The DPI is 
	 * recomputed on page load complete.
	 * @param {number} dpi Dots per inch on display.
	 */
    export function setDpi(dpi: number): void;
	
	/**
	 * Return the equitorial radius in meters for this projection.
	 * @returns {number} Equitorial radius in meters.
	 */
    export function getRadius(): number;
	
	/**
	 * Returns equitorial circumference in meters for this projection
	 * @returns {number} Equitorial circumference in meters.
	 */
    export function getCircumference(): number;
	
	/**
	 * Returns half the equitorial circumference in meters for this projection
	 * @returns {number} Half of the equitorial circumference in meters.
	 */
    export function getHalfCircumference(): number;
	
	/**
	 * Get the envelope in map units for a given quadtree node, i.e. tile,
	 * based on the given x, y, and z quadtree coordinates.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @param {number} z The z coordinate.
	 * @returns {envelope} Envelope of the tile in map units.
	 */
    export function getQuadTreeNodeToMapEnvelope(x: number, y: number, z: number): envelope;
    
	/**
	 * Gets the envelope in map units of tiles in the quadtree from an 
	 * evelope in map units and a zoom level.
	 * @param {envelope} env Envelope for which to find intersecting tiles.
	 * @param {number} z Zoom level with which to test for intersection.
	 * @returns {envelope} The envelope in map units of the tiles.
	 */
	export function getQuadTreeNodeRangeFromEnvelope(env: envelope, z: number): envelope;
    
	/**
	 * Gets projected map units per pixel for a given zoom level.
	 * @param {number} zoomLevel Reference zoom level.
	 * @returns {number} Projection units per pixel.
	 */
	export function getProjectionUnitsPerPixel(zoomLevel: number): number;
    
	/** 
	 * Gets the required scale transform to apply to shapes so distance 
	 * and area computations yield actual Earth-geodesic units instead of 
	 * projected map units.
	 * @param {number} mapPtY Reference latitude for the computation.
	 * @returns {number} Scale transform multiplier.
	 */
	export function getActualShapeScaleTransform(mapPtY: number): number;
    
	/**
	 * Gets actual, on-the-ground meters per pixel for a given zoom level 
	 * and map point in map units.
	 * @param {point} mapPt Reference location for the computation.
	 * @param {number} z Reference zoom level.
	 * @returns {number} Meters per pixel multiplier.
	 */
	export function getActualUnitsPerPixel(mapPt: point, zoomLevel: number): number;
    
	/**
	 * Gets the optimal zoom level for a given envelope in map units 
	 * based on the envelope of visible device area in pixels.
	 * @param {envelope} envelopeMap Envelope in map units to display.
	 * @param {envelope} envelopeDevice Envelope in pixels of visible area.
	 * @returns {number} Optimal zoom level for viewing envelopeMap.
	 */
	export function getBestFitZoomLevelByExtents(envelopeMap: envelope, envelopeDevice: envelope): number;
    
	/**
	 * Gets a quad-key from x, y, and z coordinates.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @param {number} z The z coordinate.
	 * @returns {string} Quad-key string.
	 */
	export function getQuadKeyFromXYZ(x: number, y: number, z: number): string;
    
	/**
	 * Gets x, y, and z coordinates as an object from a given quad-key.
	 * @param {string} key Reference quad-key.
	 * @return {object} JavaScript object of the form {x,y,z}.
	 */
	export function getXYZFromQuadKey(key: string): { x: number; y: number; z: number; };
    
	/**
	 * Project a point from latitude/longitude to Spherical Mercator.
	 * @param {point} lonLat Point object in latitude/longitude. 
	 * @returns {point} The same point in Spherical Mercator.
	 */
	export function projectFromLatLon(lonLat: point): point;
	
	/**
	 * Project a point from Spherical Mercator to latitude/longitude.
	 * @param {point} mapPt Point object in Spherical Mercator.
	 * @returns {point} The same point in latitude/longitude.
	 */
    export function deprojectToLatLon(mapPt: point): point;
}

/**
 * A geometry object decorated with a geometry style object
 * @class styledGeometry
 */
export class styledGeometry {
    constructor(geom: geometry, gStyle?: geometryStyle);
	
    /**
     * Set this styledGeometry's geometry.
     * @param {geometry} g A new Geometry.
     */
    setGeometry(g: geometry): void;

	/**
	 * Set this styledGeometry's geometryStyle.
	 * @param {geometryStyle} gs A new styledGeometry.
	 */
    setGeometryStyle(gs: geometryStyle): void;
	
	/**
	 * Gets the styledGeometry's underlying geometry object.
	 * @returns {geometry} The underlying geometry.
	 */
    getGeometry(): geometry;

    /**
     * Gets the styledGeometry's underlying geometryStyle object.
     * @returns {geometryStyle} The underlying geometry style.
     */
    getGeometryStyle(): geometryStyle;
	
	/**
	 * Gets path outline thickness in pixels.
	 * @returns {number} Thickness in pixels.
	 */
    getOutlineThicknessPix(): number;
	
	/**
	 * Sets path outline thickness in pixels.
	 * @param {number} t Thickness in pixels.
	 */
    setOutlineThicknessPix(t: number): void;
	
	/**
	 * Gets path outline color as a CSS style string.
	 * @returns {string} Outline color as a CSS style string.
	 */
    getOutlineColor(): string;
	
	/**
	 * Gets path outline opacity in decimal format.
	 * @param {number} Outline opacity.
	 */
    setOutlineColor(c: string): void;
	
	/**
	 * Gets path outline opacity in decimal format.
	 * @returns {number} Outline opacity.
	 */
    getOutlineOpacity(): number;
	
	/**
	 * Set path outline opacity to a decimal between 0 and 1.
	 * @param {number} o Outline opacity.
	 */
    setOutlineOpacity(o: number): void;
	
	/**
	 * Gets fill color as a CSS style string.
	 * @returns {string} Fill color as a CSS style string.
	 */
    getFillColor(): string;
	
	/**
	 * Sets fill color as a CSS style string.
	 * @param {string} c Fill color as a CSS style string.
	 */
    setFillColor(c: string): void;
	
	/**
	 * Gets fill opacity in decimal format.
	 * @returns {number} Fill opacity.
	 */
    getFillOpacity(): number;
	
	/**
	 * Sets fill opacity to a decimal between 0 and 1.
	 * @param {number} o Fill opacity.
	 */
    setFillOpacity(o: number): void;
	
	/**
	 * Gets the dash array as a string.
	 * @returns {string} Dash array as astring.
	 */
    getDashArray(): string;
	
	/**
	 * Sets dash array string from a CSS style string. Defaults to solid
	 * stroke if no dash array string is provided.
	 * @param {string} [da] Dash array as a CSS style string.
	 */
    setDashArray(da: string): void;
	
	/**
	 * Gets optional animation function called when SVG node is created.
	 * @returns {function} Function with the signature animation(pathElement, loopback).
	 */
    getAnimation(): (pathElement: HTMLElement, loopback: () => void) => void;

	/**
	 * You can use the loopback parameter on complete to call itself and 
	 * create repeating animation.
	 * @param {function} Function with the signature animation(pathElement, loopback).
	 */
    setAnimation(action: (pathElement: HTMLElement, loopback: () => void) => void): void;
	
	/**
	 * Renders this geometry as an SVG path. Note: We attach original
	 * geometry bounds to svg doc as an expando.
	 * @param {string} key Identifer to keep track of the SVG DOM element.
	 * @param {number} mupp Map units per pixel with which to create the SVG element.
	 * @returns {HTMLElement} A new SVG document root.
	 */
    createSvgPathElement(key: string, mapUnitsPerPix: number): HTMLElement;
	
	/** 
	 * Renders this to a canvas context.
	 * @param {CanvasRenderingContext2D} ctx Canvas context to which to render.
	 */
    renderPathToCanvasContext(ctx: CanvasRenderingContext2D): void;
}

/**
 * The mapjs version.
 */
export var version: string;

/** 
 * Exposes static functions for working with well known text.
 * @module wkt 
 */
export module wkt {
    
	/**
	 * Parses WKT as a point.
	 * @param {string} w A WKT string.
	 * @returns {point} The parsed point.
	 */
	export function parsePoint(wkt: string): point;
	
	/**
	 * Parses WKT as a multipoint.
	 * @param [string} w A WKT string.
	 * @retuns {geometry} The parsed multipoint geometry.
	 */
    export function parseMultiPoint(wkt: string): geometry;
	
	/**
	 * Parses WKT as an open path geometry with a single set.
	 * @param {string} w A WKT string.
	 * @returns {geometry} The parsed open path geometry.
	 */
    export function parseLineString(wkt: string): geometry;
	
	/**
	 * Parses WKT as an open path geometry with multiple sets.
	 * @param {string} w A WKT string.
	 * @returns {geometry} The parsed open path geometry.
	 */
    export function parseMultiLineString(wkt: string): geometry;
	
	/**
	 * Parses WKT as a closed path geometry with a single set.
	 * @param {string} w A WKT string.
	 * @returns {geometry} The parsed closed path geometry.
	 */
    export function parsePolygon(wkt: string): geometry;
	
	/**
	 * Parses WKT as a closed path geometry with multiple sets.
	 * @param {string} w A WKT string.
	 * @returns {geometry} The parsed closed path geometry.
	 */
	export function parseMultiPolygon(wkt: string): geometry;
	
	/**
	 * Parses WKT as a geometry and determines its type from the string.
	 * @param {string} w The WKT string.
	 * @returns {any} The parsed shape, a point, geometry, or an array of
	 * polygons depending on the WKT.
	 */
	export function parse(wkt: string): any;

	/**
	 * Converts an array of polygons to an OGC compliant multipolygon WKT string.
	 * @param {polygon[]} polys Set of polygons to parse into WKT.
	 * @returns {geometry} The OGC compliant WKT for the polygons.
	 */
    export function toMultiPolygonString(polys: geometry.polygon[]): string;
}

/** 
 * Exposes various tile-related constructors, including layers, descriptors,
 * and requestors.
 * @module tile
 */
export module tile {
    
	/**
	 * A tile layer is a view on the map containing an array of rectangular content.
     * @class layer
     */
    export class layer {
        constructor(id: string, useBackdrop?: boolean, maxConcurrentRequests?: number);
        
		/**
		 * @param {number} m - number for margin in pixels
		 */
		// setContentExtentsMarginInPixels(m: number): void;
        
		/**
		 * Gets ID associated with this tile layer.
		 * @returns {string} ID of the layer.
		 */
		getId(): string;
		
		/**
		 * Determines whether this tile layer uses a backdrop.
		 * @returns {boolean} Whether or not the layer uses a backdrop.
		 */
        getUseBackdrop(): boolean;
		
		/**
		 * Returns the tile layer's descriptor, which describes how 
		 * requested content is rendered or styled.
		 * @returns {object} The tile layer's descriptor.
		 */
        getDescriptor(): any;
		
		/**
		 * Sets the tile layer's descriptor, which describes how requested
		 * content is rendered or styled.
		 * @param {function} d A descriptor for this tile layer.
		 */
        setDescriptor(d: any): void;
		
		/**
		 * Notifies the tile layer to check for changes to its descriptor.
		 */
        notifyDescriptorChange(): void;
		
		/**
		 * Returns this tile layer's requestor which defines what kind of 
		 * content to get and where to get it.
		 * @returns {requestor} This tile layer's requestor.
		 */
        getRequestor(): tile.requestor;
		
		/**
		 * Sets this tile layer's requestor, which defines what kind of
		 * content to get and where to get it.
		 * @param {tile.requestor} req A requestor object.
		 * @param {tile.requestor} [desc] Descriptor object so that both
		 * can be set in one call and incur only one content change event.
         */			 
        setRequestor(req: tile.requestor, desc?: any): void;
		
		/**
		 * Returns this tile layer's renderer if it exists, which defines 
		 * how geometry data for a quadView is rendered.
		 * @returns {renderer} The renderer object.
		 */
        getRenderer(): tile.renderer;
		
		/**
		 * Sets optional renderer which defines how geometry data for 
		 * quadView is rendered.
		 * @param {renderer} r The renderer delegate function with 
		 * signature renderer(quadview).
		 */
        setRenderer(r: any): void;
		
		/**
		 * Notifies the tile layer to check for changes to its renderer.
		 */
        notifyRendererChange(): void;
		
		/**
		 * Gets the visibility state of this tile layer.
		 * @returns {boolean} Whether or not this layer is visible.
		 */
        getIsVisible(): boolean;
		
		/**
		 * Sets visibility state of this tile layer.
		 * @param {boolean} v Whether this layer should be visible or not.
		 */
        setIsVisible(v: boolean): void;
		
		/**
		 * Gets the opacity of this tile layer.
		 * @returns {number} Opacity as a decimal.
		 */
        getOpacity(): number;
		
		/** 
		 * Sets opacity of this tile layer.
		 * @param {number} o Opacity as a decimal.
		 */
        setOpacity(o: number): void;
		
		/**
		 * Gets minimum zoom level where this tile layer is visible.
		 * @returns {number} The minimum zoom level.
		 */
        getMinZoomLevel(): number;
		
		/** 
		 * Sets minimum zoom level where this tile layer is visible.
		 * @param {number} minZ The desired minimum zoom level.
		 */
        setMinZoomLevel(minZ: number): void;
		
		/**
		 * Gets maximum zoom level where this tile layer is visible.
		 * @returns {number} The maximum zoom level.
		 */
        getMaxZoomLevel(): number;
		
		/**
		 * Sets maximum zoom level where this tile layer is visible.
		 * @param {number} maxZ The desired maximum zoom level.
		 */
        setMaxZoomLevel(maxZ: number): void;
		
		/**
		 * Sets pixel bleed on quadTiles, which defaults to 1. Setting this 
		 * to zero for overlay layers with translucent polygon fills is 
		 * recommended. Bleed overlap can create faint lines at tile 
		 * boundries when fill is not opaque.
		 * @param {number} bleed The number of pixels to bleed.
		 */
        setTileBleedPix(bleed: number): void;
		
		/**
		 * Sets whether or not to retain and display previous level tile 
		 * content as you change tile levels to provide a nice zoom level 
		 * change effect. Once the next level is loaded the old level 
		 * content is always discarded. This should be set to false if there 
		 * is translucent content to display. Defaults to true (prior to 
		 * version 9.0.0001 this value had the same state as useBackdrop.)
		 * @param {boolean} ret Whether or not to retain interlevel content.
		 */
        setRetainInterlevelContent(retain: boolean): void;
		
		/**
		 * Enables or disables the fade in on tile content, which defaults to enabled.
		 * @param {boolean} fadeIn Whether or not fade in on tile content 
		 * should be enabled.
		 */
        setEnableTileFadeIn(fadeIn: boolean): void;
		
		/**
		 * Sets the default action to take on error.
		 * @param {function} action Function to execute on error.
		 */
        setNotifyErrorAction(action: () => void): void;
		
		/** 
		 * Sets an optional function to be called when the tile loading
		 * queue for this layer has emptied.
		 * @param {function} action Callback function.
		 */
        setNotifyLoadingQueueHasEmptiedAction(action: () => void): void;
		
		/**
		 * Sets the optional function to be called by this layer's tile 
		 * loader during processing. The supplied progress function takes 
		 * tiles loaded and tiles total parameters.
		 * @param {function} action Callback of the signature action(tileLoaded, tilesTotal).
		 */
        setNotifyLoadingQueueProgressAction(action: (tilesLoaded: number, tilesTotal: number) => void): void;
        
		/**
		 * Sets optional request processor for this tile layer. This is 
		 * an advanced feature allowing developers to tap into tile 
		 * request pipeline for purposes of customizing requests or manage 
		 * custom caching. This is also the mechanism used for offline 
		 * apps with frameworks such as phonegap.
		 * @param {function} Processor function with signature
		 * processor(requestor, descriptor, quad, timeoutMs, complete, error)
		 */
		setRequestProcessor(processorFunc: (
            requestor: tile.requestor,
            descriptor: any,
            quad: tile.quad,
            timeoutMs: number,
            completeAction: (img: HTMLElement) => void,
            errorAction: (msg: string) => void) => void): void;

		/**
		 * Instructs the tile loader to populate a specified tile pyramid.
		 * This is used to fetch content (e.g. bitmap tiles) and preload 
		 * it into the browser cache.
		 * @param {envelope} extents Envelope for which to fetch content.
		 * @param {number} startZoomLevel Minimum zoom level for which to
		 * fetch content.
		 * @param {number} endZoomLevel Maximum zoom level for which to 
		 * fetch content.
		 */
        preload(extents: envelope, startZoomLevel: number, endZoomLevel: number): void;
        
		/**
		 * Composes an array of quadtiles with composition information and
		 * requestor endpoints. This can be used to create static images
		 * or print-ready versions of this tile layer at arbitrary extents
		 * (both source and target) For example: If you needed a 5x3 inch 
		 * 300 dpi output you can specify extents in device units to be
		 * 1500x900. This function determines the correct zoom level so 
		 * that the source extents fits in the target extents to the
		 * nearest integer zoom level.
		 * @param {envelope} extentsMapUnits Source extents in map units.
		 * @param {envelope} extentsDeviceUnits Target extents in pixels.
		 * @returns {object} Composed object in the form 
		 * {quadCollection, endpointCollection, idxMinX, idxMinY, ulX, ulY }
		 * where quadCollection is an array of quad objects, endpointCollection
		 * is an array of REST endpoints from which to obtain the tiled content,
		 * idxMinX and idxMinY are the minimum x and y tile indicies of the
		 * collection respectively, and ulX and ulY are the offset in pixels
		 * of the upper left tile from the upper left target extents.
		 */
        compose(extentsMapUnits: envelope, extentsDeviceUnits: envelope): { 
        	quadCollection: tile.quad[];
        	endpointCollection: string[];
        	idxMinX: number;
        	idxMinY: number;
        	ulX: number;
        	ulY: number;
        };

        /**
        * Unbind all associations with this tile layer to facilitate garbage collection
        */
        dispose(): void;
    }
    
	/**
	 * A layerOptions object is a method for constructing a tile layer for 
	 * immediate use, for example by passing it to the jQuery widget or
	 * in the knockout binding.
     * @class layerOptions
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
		 * Returns the underlying tile layer.
		 * @returns {layer} The underlying tile layer.
		 */
        getTileLayer(): tile.layer;
		
		/**
		 * Gets ID associated with the underlying tile layer.
		 * @returns {string} ID of the layer.
		 */
        getId(): string;
		
		/**
		 * Gets this layerOptions object as a JavaScript object.
		 */
        getOptions(): any;
    }

    /**
	 * The quad class represents a quad tile within three dimensional
	 * coordinate space.
	 * @class quad
	 */
    export class quad {

    	/**
		 * Gets the x coodinate of this quad tile.
		 * @returns {number} The x coordinate of this quad tile.
		 */
        getX(): number;

        /** 
         * Gets the y coordinate of this quad tile.
         * @returns {number} The y coordinate of this quad tile.
     	 */
        getY(): number;

        /**
         * Gets the z coordinate of this quad tile, or depth.
         * @returns {number} The z coordinate of this quad tile.
         */
        getLevel(): number;

        /**
         * Gets the envelope in map units which encompasses this quad tile.
         * @returns {envelope} The encompassing envelope of this quad tile.
         */
        getEnvelope(): envelope;

        /**
         * Gets the string representation of this quad tile as a quad key.
         * @returns {string} Quad key for this quad tile as a string.
         */
        toString(): string;

        /**
         * Gets the quad key for this quad tile as a string.
         * @returns {string} Quad key for this quad tile as a string.
         */
        getKey(): string;

        /** 
         * Compares this quad tile with another quad tile and determines
         * whether or not they are equal.
         * @param {quad} Quad tile with which to check for equality with this quad tile.
         * @returns {boolean} Result of the equality test.
         */
        equals(q: quad): boolean;

        /**
         * Generates the quad tile which is a given number of levels above
         * this tile in the pyramid and in which this quad tile is contained.
         * @param {number} ancestorsBack Number of levels above this tile the
         * generated tile should be.
         * @returns {quad} The generated parent tile.
         */
        factoryParent(ancestorsBack: number): quad;
    }
    
	/**
	 * Exposes static functions for generating and handling quad tiles.
	 * @module quad 
	 */
    export module quad {

    	/**
    	 * Generates a new quad tile based on a given quad key.
    	 * @param {string} key The quad key from which to generate the quad tile.
    	 * @returns The generated quad tile.
    	 */
        export function factoryQuadFromKey(key: string): quad;
    }

    /**
	 * A tile renderer handles converting JSON vector content loaded from the
	 * MapDotNet REST feature service into a canvas rendering on a tile.
     * @class renderer
	 */
    export class renderer {
        constructor(options? : {
            renderPoint?: (pt: point, context: CanvasRenderingContext2D) => void;
			renderGeometry?: (shape: geometry, context: CanvasRenderingContext2D) => void;
            renderBitmap?: (img: HTMLElement, context: CanvasRenderingContext2D, contextSize: number, bleed: number) => void;
        });
		
		/**
		 * Sets the render point function which takes a point and canvas 
		 * context and renders the point to the canvas. The points passed 
		 * in are transformed to pixel units and offset to context origin.
		 * @param {function} func Function of the form func(shape, context)
		 * where shape is the point object to be rendered and context is the 
		 * canvas context on which to render.
		 */
        setRenderPoint(func: (pt: point, context: CanvasRenderingContext2D) => void): void ;
        
		/**
		 * Sets render geometry function which takes a geometry and canvas 
		 * context and renders the geometry to the canvas context. The 
		 * geometries passed in are transformed to pixel units and offset 
		 * to the context origin.
		 * @param {function} func Function with signature func(shape, context)
		 * where shape is the geometry to render and context is the canvas
		 * context on which to render.
		 */
		setRenderGeometry(func: (shape: geometry, context: CanvasRenderingContext2D) => void): void;
        
		/**
		 * Sets the render bitmap function which takes a bitmap image and
		 * a canvas context and renders the image to the canvas context.
		 * @param {function} func Function with the signature 
		 * func(img, context, contextSize, bleed) where img is the bitmap
		 * image to render, context is the canvas context on which to 
		 * render the image, contextSize is the size of the canvas context
		 * in pixels and bleed is the margin around each tile to bleed.
		 */
		setRenderBitmap(func: (img: HTMLElement, context: CanvasRenderingContext2D, contextSize: number, bleed: number) => void): void;
    }
	
	/**
	 * An auto-ranging density map renderer.
     * @class rendererDensityMap
     */
    export class rendererDensityMap {
		
		constructor();
        
		/**
		 * Sets the bleed ratio, which is the sets the percentage of the
		 * margin around each tile to use in the tile's computation. Note:
		 * some bleed (i.e., greater than 1) is required since a heat map
		 * relies on adjacent data.
		 * @param {number} bleed The desired bleed ratio.
		 */
		setBleed(bleed: number): void;
		
		/**
		 * Sets the number of rows and columns of cells to be used for 
		 * computation within the grid.
		 * @param {number} gridSize Number of rows and columns used in
		 * the grid.
		 */
        setGridSize(gridSize: number): void;
		
		/**
		 * Sets filter radius corresponding to standard deviations. The
		 * filter radius is the cutoff point at which adjacent cells no
		 * longer contribute to a cell's calculation.
		 * @param {number} filterStdDevRadius Number of standard deviations
		 * from the mean of a normal distribution to which to give positive 
		 * weight.
		 */
        setFilterStdDevRadius(filterStdDevRadius: number): void;
		
		/**
		 * Sets color ranges from cold to hot for the renderer.
		 * @param {number[][]} matrix Array of arrrays of numbers, each
		 * of the form [r,g,b,a], where each array represents a color and
		 * colors range from cold to hot. Note: Typically, a dozen colors
		 * is sufficient.
		 */
        setColorMatrix(matrix: number[][]): void;
		
		/**
		 * Sets the minimum required cell value for a cell to receive 
		 * a color. Default minimum value is 0.
		 * @param {number} mcv The minimum cell value for painting.
		 */
        setMinCellValue(min: number): void;
		
		/**
		 * Sets an optional action to perform on each row. This enables 
		 * processing the values on one or more columns for each row for
		 * use in the density map computations.
		 * @param {action} ra Function to call on each row with signature
		 * action(row). The value returned from the function will is added
		 * to the cell's value.
		 */
        setRowAction(action: (row: any) => number): void;
		
		/**
		 * Tells renderer to re-render density map and recompute ranges. 
		 * This should be called if the data changes or if, due to extent
		 * changes, the density changes.
		 */
        notifyRecompute(extents?: envelope): void;
    }
	
	/**
	 * This is a base requestor class.
     * @class requestor
	 */
    export class requestor {
        
		constructor();
		
		/**
		 * Gets formatted endpoint using the supplied quadtile and a descriptor.
		 * @param {quad} quad Quadtile for which to fetch the endpoint.
		 * @returns {string} The requested URI string.
		 */
        getFormattedEndpoint(quad: quad, descriptor: any): string;
		
		/**
		 * Gets data locally if the requestor supports it.
		 * @param {quad} quad Quadtile for which to fetch the endpoint.
		 * @returns {string} The requested JSON data.
		 */
        getLocalData(quad: quad, descriptor: any): string;
		
		/**
		 * Creates unique sha1 hash from this requestor and the supplied
		 * descriptor. This is useful in creating a unique key or folder 
		 * for tile caching. This combined with a tile's quad-key can 
		 * efficiently and uniquely identify a particular tile.
		 * @params {descriptor} The descriptor for which to create the hash.
		 * @returns {string} The generated sha1 hash.
		 */
        hash(descriptor: any): string;
		
		/**
		 * Determines whether or not this requestor returns bitmap images.
		 * @returns {boolean} Whether or not this requestor returns bitmap
		 * images.
		 */
        getIsRestImage(): boolean;
		
		/**
		 * Sets whether this requestor should return bitmap images.
		 * @param {boolean} flag Whether or not this requestor should return
		 * bitmap images.
		 */
        setIsRestImage(flag: boolean): void;
		
		/**
		 * Determines whether or not this requestor uses an endpoint 
		 * rather than local data.
		 * @returns {boolean} Whether or not this requestor gets data from
		 * an endpoint.
		 */
        getUsesEndpoint(): boolean;
		
		/**
		 * Sets whether or not this requestor uses an endpoint rather than
		 * local data.
		 * @param {boolean} Whether or not this requestor should get data
		 * from an endpoint.
		 */
        setUsesEndpoint(flag: boolean): void;
		
		/**
		 * Gets format of data returned by REST service.
		 * @returns {string} Data format returned by the REST service.
		 */
        getDataFormat(): string;
		
		/**
		 * Sets format of data that should be returned by REST service.
		 * @param {string} df Name of the data format the REST service 
		 * should use.
		 */
        setDataFormat(df: string): void;
		
		/**
		 * Returns whether or not caching is enabled for vector-based 
		 * requestors. 
		 * @returns {boolean} Whether or not caching is enabled.
		 */
        getCacheEnabled(): boolean;
		
		/**
		 * Sets whether or not caching is enabled for vector-beased requestors. 
		 * @param {boolean} flagce - true (default) if caching is enabled
		 */
        setCacheEnabled(flag: boolean): void;
		
		/**
		 * Gets requestor timeout in miliseconds.
		 * @returns {number} Requestor timeout in miliseconds.
		 */
        getTimeoutMs(): number;
		
		/**
		 * Sets requestor timeout in miliseconds.
		 * @param {number} ms Desired requestor timeout in miliseconds.
		 */
        setTimeoutMs(ms: number): void;
		
		/** ???
		 * Gets the additional 
		 * @returns {object[]}
		 */
        getKeyVals(): {}[];
		
		/** Set any key/value pairs that are attached to the ajax call (such as username and password)
		 */
        setKeyVals(options: {}[]): void;
		
		/**
		 * Gets maximum available zoom level content that can be retrieved 
		 * from the endpoint this requestor consumes.
		 * @returns {number} The maximum available zoom level for this requestor.
		 */
        getMaxAvailableZoomLevel(): number;
		
		/**
		 * Sets maximum available zoom level content that can be retrieved
		 * from the endpoint this requestor consumes. Note: This defaults
		 * to the projection's maximum available zoom level, which is 20
		 * in spherical mercator.
		 * @param {number} max The maximum available zoom level for this requestor.
	     */
        setMaxAvailableZoomLevel(max: number): void;
    }

    /**
	 * A tile requestor for Microsoft Bing maps.
     * @class requestorBing
     */
	export class requestorBing extends requestor {
        
		constructor(options?: {
            dataFormat?: string;
            timeoutMs?: number;
            maxAvailableZoomLevel?: number;
        });
		
		/**
		 * Gets the formatted endpoint uri for Bing maps, e.g. 
		 * ecn.t{0}.tiles.virtualearth.net/tiles/{1}{2}{3}?g={4}&mkt={5}&shading=hill.
		 * @returns {string} endpoint to Bing tile server as a formatted string
	     */
        getEndpoint(): string;
		
		/**
		 * Gets the protocol for the endpoint, either 'http' or 'https'.
		 * @returns {string} The endpoint protocol.
		 */
        getScheme(): string;
		
		/**
		 * Sets endpoint protocol to either 'http' or 'https'.
		 * @param {string} s Protocol to use in endpoints.
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
		 * Gets the language code for which the tiles are rendered. The
		 * default code is 'en-US'.
		 * @returns {string} The language code for which tiles are rendered.
		 */
		getMarket(): string;
        
		/**
		 * Sets language code for which to render tiles. For example,
		 * 'en-US'.
		 * @param {string} m Language code for which to render tiles.
		 */
		setMarket(m: string): void;
        
		/**
		 * Gets the Bing key associated with this requestor.
		 * @returns {string} The Bing key for this requestor.
		 */
		getBingKey(): string;
        
		/**
		 * Sets Bing key which then calls Microsoft metadata service and
		 * automatically configures content endpoint.
		 * @param {string} key Bing key.
		 */
		setBingKey(key: string): void;
    }

    /**
	 * The bitmap or vector tile requestor using MapDotNet REST services.
     * @class requestorMDN
     */
	export class requestorMDNRest extends requestor {
        constructor(endpoint: string, options?: {
            dataFormat?: string;
            timeoutMs?: number;
            maxAvailableZoomLevel?: number;
        });
        
		/**
		 * Gets uri endpoint for the MapDotNet REST service.
		 * @returns {string} Uri endpoint for the MapDotNet REST service.
		 */
		getEndpoint(): string;
    }
    
	/**
	 * Creates an instance of a descriptor for describing content from a 
	 * MapDotNet UX REST map service.
     * @class descriptorMDNRestMap
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
		 * Sets the flag to suspend descriptor change notifications. If 
		 * set true, all changes to this descriptor will not cause the map
		 * to redraw. Setting to false will enable redraws and immediately
		 * force a redraw.
		 * @param {boolean} flag Whether or not descriptor change notifications
		 * should be enabled.
		 */
		setSuspendDescriptorChangeNotifications(flag: boolean): void;
		
		/**
		 * Gets the map ID.
		 * @returns {string} The map ID.
		 */
        getMapId(): string;
		
		/**
		 * Gets the REST service version.
		 * @returns {string} The REST service version.
		 */
        getVersion(): string;
		
		/**
		 * Sets the REST service version.
		 * @param {string} v The version number.
		 */
        setVersion(v: string): void;
        
		/**
		 * Gets image type associated with this descriptor, either 'png',
		 * 'png8', or 'jpg'.
		 * @returns {string} The image type associated with this descriptor.
		 */
		getImageType(): string;
        
		/**
		 * Gets image type associated with this descriptor to one of 'png',
		 * 'png8', or 'jpg'.
		 * @param {string} t The image type associated which should be
		 * associated with this descriptor.
		 */
		setImageType(t: string): void;
        
		/**
		 * Gets bleed ratio for the layer associated with this descriptor.
		 * @returns {number} The bleed ratio.
		 */
		getBleedRatio(): number;
        
		/**
		 * Sets the bleed ratio. Bleeds greater than 1.0 will fetch content 
		 * beyond the edge of the tile extents (this is useful for point 
		 * features).
		 * @param {number} br The desired bleed ratio, between 1.0 and 2.0.
		 */
		setBleedRatio(br: number): void;
		
		/**
		 * Gets the map's cache setting, which is one of 'None', 
		 * 'ReadOnly', 'ReadWrite', 'ForceWrite', and 'Default.'
		 * @returns {string} The map's cache setting.
		 */
        getMapCacheOption(): string;
        
		/**
		 * Gets the map's cache setting to one of 'None', 
		 * 'ReadOnly', 'ReadWrite', 'ForceWrite', and 'Default.'
		 * @param {string} mco The desired cache setting for the map.
		 */
		setMapCacheOption(mco: string): void;
        
		/**
		 * Gets the optional map cache name.
		 * @returns {string} The map cache name.
		 */
		getMapCacheName(): string;
        
		/**
		 * Sets the optional map cache name.
		 * @param {string} mcn The desired map cache name.
		 */
		setMapCacheName(mcn: string): void;
        
		/**
		 * Determines whether the map is flagged to use the quadkey as its
		 * map cache name.
		 * @returns {boolean} Whether or not the map has been flagged to
		 * use the quadkey as its map cache name.
		 */
		getUseQuadKeyForMapCacheName(): boolean;
        
		/**
		 * Sets the flag that uses the quadkey as its map cache name.
		 * @param {boolean} flag Whether or not the map should be flagged
		 * to use the quadkey as its map cache name.
		 */
		setUseQuadKeyForMapCacheName(flag: boolean): void;
        
		/**
		 * Gets map image background color.
		 * @returns {string} CSS style string for the map image background color.
		 */
		getBackgroundColorStr(): string;
        
		/**
		 * Sets the map image background color.
		 * @param {number} a Alpha level.
		 * @param {number} r Red level.
		 * @param {number} g Green level.
		 * @param {number} b Blue level.
		 */
		setBackgroundColor(a: number, r: number, g:number, b:number): void;
        
		/**
		 * Checks whether or not the map background is transparent.
		 * @returns {boolean} Whether or not the map background is transparent.
		 */
		getIsBackgroundTransparent(): boolean;
        
		/**
		 * Sets a layer's visibility.
		 * @param {string} layerId The MapDotNet map layer ID.
		 * @param {boolean} isVisible Whether or not the layer should be visible.
		 */
		setLayerVisibility(layerId: string, isVisible: boolean): void;
        
		/**
		 * Gets a layer's visibility.
		 * @param {string} layerId The MapDotNet map layer ID.
		 * @returns {boolean} Whether or not the layer is visible.
		 */
		getLayerVisibility(layerId: string): boolean;
        
		/**
		 * Sets a layer's outline color and thickness.
		 * @param {string} layerId The MapDotNet map layer ID.
		 * @param {number} a Alpha level.
		 * @param {number} r Red level.
		 * @param {number} g Green level.
		 * @param {number} b Blue level.
		 * @param {number} thk Outline thickness in pixels.
		 */
		setLayerOutline(layerId: string, a: number, r: number, g: number, b: number, thk: number): void;
        
		/**
		 * Gets a layer's outline color and thickness.
		 * @param {string} layerId The MapDotNet map layer ID.
		 * @returns {object} JavaScript object of the form {color, thickness}
		 * where color is the CSS style string of the outline color and 
		 * thickness is the outline thickness in pixels.
		 */
		getLayerOutline(layerId: string): { color: string; thickness: number; };
        
		/**
		 * Sets a layer's fill color.
		 * @param {string} layerId The MapDotNet map layer ID.
         * @param {number} a Alpha level.
         * @param {number} r Red level.
         * @param {number} g Green level.
         * @param {number} b Blue level.
		 */
		setLayerFill(layerId: string, a: number, r: number, g: number, b: number): void;
        
		/**
		 * Sets a layer's fill color as a SQL expression.
		 * @param {string} layerId The MapDotNet map layer ID.
         * @param {string} exp The SQL expression to select a row's fill color.
         */
		setLayerFillAsExpression(layerId: string, exp: string): void;
        
		/**
		 * Gets a layer's fill color as a CSS style string or as a SQL expression.
		 * @param {string} layerId The MapDotNet map layer ID.
		 * @returns {string} Either the CSS style string or the SQL expression,
		 * according to how the layer's fill color was set.
         */
		getLayerFill(layerId: string): string;
        
		/**
		 * Add or replace the where clause for a layer. The where clause
		 * is a SQL expression used to filter rows.
		 * @param {string} layerId The MapDotNet map layer ID.
         * @param {string} where The desired SQL where expression.
         * @param {boolean} [merge] Whether to merge the new where clause
         * with the existing where clause using a SQL AND or to replace
         * the existing where clause with the new one. Defaults to true (merge).
		 */
		setLayerWhere(layerId: string, where: string, merge: boolean): void;
        
		/**
		 * Sets a separator character for the layer where clause expression
		 * in the query string. This is set to ',' by default, which is 
		 * consistent with SQL.
		 * @param {string} sep The desired seperator, which should be a 
		 * single character.
		 */
		setLayerWhereSep(sep: string): void;
        
		/**
		 * Returns the current separator for the layer where clause in the
		 * query string. 
		 * @returns {string} The current seperator.
		 */
		getLayerWhereSep(): string;
        
		/**
		 * Gets the current layer where clause.
		 * @param {string} layerId The MapDotNet map layer ID.
		 * @returns {string} The current where clause. If no where clause
		 * is in use, this will return an empty string.
		 */
		getLayerWhere(layerId: string): string;
        
		/**
		 * Gets a tag which is used to modify the request URIs to avoid 
		 * browser caching
		 * @returns {string} The map's tag.
		 */
		getTag(): string;
        
		/**
		 * Sets the map's tag, which is used modify request URIs to avoid 
		 * browser caching.
		 * @param {string} tag The desired tag.
		 */
		setTag(tag: string): void;
    }
	
	/**
     * Creates an instance of a descriptor for describing content from
     * a MapDotNet REST feature service.
     * @class descriptorMDNRestFeature
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
		 * Gets the map ID.
		 * @returns {string} The map ID.
		 */
        getMapId(): string;
        
		/**
		 * Gets the layer's ID.
		 * @returns {string} The layer's ID.
		 */
		getLayerId(): string;
        
		/**
		 * Gets the version of the REST service.
		 * @returns {string} The REST service version.
		 */
		getVersion(): string;
        
		/**
		 * Sets the REST service version number.
		 * @param {string} v The version number to set.
		 */
		setVersion(v: string): void;
        
		/**
		 * Gets the bleed ratio.
		 * @returns {number} The current bleed ratio.
		 */
		getBleedRatio(): number;
        
		/**
		 * Sets the bleed ratio. Bleeds greater than 1.0 will fetch content 
		 * beyond the edge of the tile extents (this is useful for point features).
		 * @param {number} br The desired bleed ratio, a number between 1.0 and 2.0.
		 */
		setBleedRatio(br: number): void;
        
		/**
		 * Gets the optional field names to query. This attribute data may
		 * be used in dynamic client-side rendering.
		 * @returns {string[]} An array of field names as strings.
		 */
		getFieldNames(): string[];
        
		/** 
		 * Sets the optional field names to query. This attribute data may be used in 
		 * dynamic client-side rendering.
		 * @param {string} names - array of strings for each field to query
		 */
		setFieldNames(names: string[]): void;
        
		/**
		 * Checks the flag whether to clip geometry fetched at the bounds 
		 * of the request.
		 * @returns {boolean} The value of the flag.
		 */
		getClipToRenderBounds(): boolean;
        
		/**
		 * Sets the flag whether to clip geometry fetched at the bounds 
		 * of the request. This can greatly improve performance with large
		 * complex geometries. Only supported when back-end store is SQL 
		 * 2008/2012 or PostGIS.
		 * @param {boolean} flag Whether or not to clip geometries fetched
		 * at the bounds of the request.
		 */
		setClipToRenderBounds(flag: boolean): void;
		
		/**
		 * Checks the flag whether to simplify paths based on the units per
		 * pixel for the quad tile being requested.
		 * @returns {boolean} The value of the flag.
		 */
        getSimplifyEnabled(): boolean;
		
		/**
		 * Sets the flag whether to simplify paths based on the units per
		 * pixel for the quad tile being requested.
		 * @param {boolean} flag Whether or not to simply paths based on 
		 * the units per pixel.
		 */
        setSimplifyEnabled(flag: boolean): void;
		
		/**
		 * Sets the action to perform on descriptor change.
		 * @param {function} action Function with signature action().
		 */
        setNotifyDescriptorChangeAction(action: () => void): void;
    }

    /**
	 * This is a generic tile requestor suitable for several third-party
	 * tile servers. These include open street map, map quest, cloudmade, 
	 * Nokia, etc.
	 * @class requestorOpen
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
	 * @class requestorLocal
	 */
    export class requestorLocal extends requestor {
        constructor(options?: {
            dataFormat?: string;
            timeoutMs?: number;
            maxAvailableZoomLevel?: number;
            data: {}[];
        });
		
		/** 
		 * Gets the unparsed source data.
		 * @returns {object} Array of source data objects.
		 */
        getSource(): {}[];
        
		/**
		 * Sets source data.
		 * @param {object} data An array of JavaScript objects to use as
		 * the requestor source data.
		 */
		setSource(data: {}[]): void;
        
		/** 
		 * Returns your source data parsed into theformat { Shapes: [],
         * Values: [], Bounds: [] } This may be useful for doing client-side 
         * queries on the local data where all of the WKT has been parsed 
         * into points and geometry. There is also a bounds collection to 
         * do a quick spatial check for complex polygons.
		 * @returns {object} Parsed data object in the form {Shapes, Values, Bounds}.
		 */
		getParsedData(): {
            Shapes: any[];
            Values: any[];
            Bounds: envelope[];
        };
    }
    
	/**
	 * Local descriptor object for describing source data when the source
	 * data is fecthed by a local requestor.
	 * @class descriptorLocal
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

interface extentChangeStatsObj {

    centerX: number;
    centerY: number;
    centerLat: number;
    centerLon: number;
    zoomLevel: number;
    mapScale: number;
    mapScaleProjected: number;
    mapUnitsPerPixel: number;
    extents: envelope;
}

interface repositionStatsObj {

    centerX: number;
    centerY: number;
    zoomLevel: number;
    mapUnitsPerPixel: number;
}

interface beginDigitizeOptions {
    key?: string;
    shapeType: string;
    geometryStyle?: geometryStyle;
    styledGeometry?: styledGeometry;
    nodeTapAndHoldAction?: (setIdx: number, idx: number) => boolean;
    nodeMoveAction?: (x: number, y: number, actionType: string) => any;
    shapeChangeAction?: () => void;
    envelopeEndAction?: (env: envelope) => void;
    circleEndAction?: (circle: geometry.polygon) => void;
    suppressNodeAdd?: boolean;
    leavePath?: boolean;
}


interface styleObj {
    fillColor?: string;
    fillOpacity?: number;
    outlineColor?: string;
    outlineOpacity?: number;
    outlineThicknessPix?: number
    dashArray?: string;
}

interface mapsjsWidget {
    
	/**
	 * Gets the center of the map in spherical mercator. Use 
	 * sphericalMercator.deprojectToLatLon static function to convert to a lat/lon.
	 * @return {point} A point map center
	 */
	getMapCenter(): point;
    
	/**
	 * Sets the center of the map in spherical mercator. Use
	 * sphericalMercator.projectFromLatLon static function to convert from a lat/lon.
	 * @param {point} center The map center as a point
	 */
	setMapCenter(center: point): void;
    
	/**
	 * Same as setMapCenter except will animate from current map center to the 
	 * specified location
	 * @param {point} center The map center as a point.
     * @param {number} [durationMs] Duration in miliseconds.
     * @param {function} [completeAction] Callback to perform on animaton complete.
	 */
	setMapCenterAnimate(center: point, durationMs?: number, completeAction?: () => void): void;
    
	/**
	 * Sets the map center to the current geolocation if supported. The map is
     * animated to the new location.
     * @param {number} [durationMs] Duration in miliseconds.
     * @param {function} [completeAction] Callback to perform on animaton complete.
	 */
    setMapCenterToGeolocationAnimate(durationMs?: number, completeAction?: () => void): void;

    /**
    * Offsets the current map center by the specified deltas in pixels. 
    * @param {number} [dx] offset x in pixels.
    * @param {number} [dy] offset y in pixels.
    */
    offsetMapCenterByPixelDelta(dx: number, dy: number): void;

    /**
    * Offsets the current map center by the specified deltas in pixels - animated version.
    * @param {number} [dx] offset x in pixels.
    * @param {number} [dy] offset y in pixels.
    * @param {number} [durationMs] animation duration in mS.
    */
    offsetMapCenterByPixelDeltaAnimate(dx: number, dy: number, durationMs?: number): void;
    
	/**
	 * Gets the current zoom level.
	 * @returns {number} The current zoom level.
	 */
	getZoomLevel(): number;
    
	/**
	 * Sets the current zoom level.
	 * @param {number} z1 The desired zoom level.
	 */
	setZoomLevel(zl: number): void;
    
	/**
	 * Sets the minimum zoom level for the map.
	 * @param {number} zl Desired minimum zoom level.
	 */
	setMinZoomLevel(zl: number): void;
    
	/**
	 * Sets the maximum zoom level for the map.
	 * @param {number} z1 The desired maximum zoom level.
	 */
	setMaxZoomLevel(zl: number): void;
    
	/**
	 * Animates the map from the current zoom level to the given zoom level.
	 * @param {number} zl The desired zoom level.
     * @param {number} [durationMs] The duration in miliseconds.
     * @param {function} [completeAction] Function to call when the animation
     * completes with signature completeAction().
	 */
	setZoomLevelAnimate(zl: number, durationMs?: number, completeAction?: () => void): void;
    
	/**
	 * Changes the current zoom level.
	 * @param {number} delta Change to be added to the current zoom level.
	 */
	zoomDelta(delta: number): void;
    
	/** 
	 * Animates a change to the current zoom level.
	 * @param {number} delta Change to be added to the current zoom level.
	 * @param {number} [durationMs] Duration in miliseconds.
	 */
	zoomDeltaAnimate(delta: number, durationMs?: number): void;
    
	/**
	 * Animates parabolically from the current map center and zoom level
	 * to the given map center and zoom level.
	 * @param {point} center Desired map center as a point.
     * @param {number} zl Desired zoom level.
     * @param {number} [durationMs] Animation duration in miliseconds.
     * @param {function} [completeAction] Function to call after the animation
     * completes with signature completeAction().
	 */
	flyTo(center: point, zl: number, durationMs?: number, completeAction?: () => void): void;
    
	/**
	 * Gets the current map extents in spherical mercator units.
	 * @return {envelope} envelope The current map extents.
	 */
	getMapExtents(): envelope;
    
	/**
	 * Gets the current map units per pixel.
	 * @returns {number} Map units (meters) per pixel.
	 */
	getMapUnitsPerPixel(): number;
    
	/**
	 * Gets the map extents' width and height in pixels.
	 * @returns {object} JavaScript object of the form {w, h} where w is
	 * the current extents' width in pixels and h is the current extents'
	 * height in pixels.
	 */
	getViewExtentsInPix(): { w: number; h: number; };
    
	/**
	 * Gets the current projected map scale. This is the ratio of units on
	 * the screen to map units depicted.
	 * @returns {number} Ratio of screen units to map units.
	 */
	getProjectedMapScale(): number;
    
	/**
	 * Gets the current actual map scale. This is the ratio of units on 
	 * the screen to actual units on the earth's surface at the latitude 
	 * of the current map center.
	 * @returns {number} The ratio of screen units to actual meters.
	 */
	getActualMapScale(): number;
    
	/**
	 * Gets the best fit zoom level based on the supplied map extents for 
	 * the current display extents in pixels.
	 * @param {envelope} extentsNew New map extents to fit.
	 * @returns {number} The zoom level which best fits the extents.
	 */
	getBestFitZoomLevelByExtents(extentsNew: envelope): number;
    
	/**
	 * Forces the map to redraw the currently loaded tile and geometry 
	 * content. You should not have to call this as redraws are automatically
	 * handled during programatic state changes. This would be for edge cases 
	 * where the developer is affecting internal state in an undocumented way.
	 */
	redraw(): void;
    
	/**
	 * Updates the map to the size of its container. This updates internal 
	 * parameters for computing map extents and handling the amount of tile 
	 * content to download. This is handled automatically if the browser 
	 * window is resized. But if you are sizing the map programatically 
	 * (e.g. resizable panel or slider) then call this after the parent 
	 * container has resized.
	 */
	resize(): void;
    
	/**
	 * Pushes a supplied tile layer onto the top of the display stack.
	 * @param {tile.layer} tl The desired tile layer.
	 */
	pushTileLayer(tl: tile.layer): void;
    
	/**
	 * Removes a tile layer off the top of the display stack
	 * @returns {tile.layer} The removed tile layer.
	 */
	popTileLayer(): tile.layer;

	/**
    * Removes a tile layer off the display stack by reference
    * @param {tile.layer} tl A tile layer to remove.
    */
    removeTileLayer(tl: tile.layer): void;

    /**
    * Removes all tile layers off the display stack
    */
    removeAllTileLayers(): void;
    
	/**
	 * Gets the current number of tile layers in the display stack.
	 * @returns {number} The number of tile layers in the display stack.
	 */
	getTileLayerCount(): number;
    
	/**
	 * Gets a tile layer from the display stack by its key.
	 * @param {string} key The desired tile layer's key.
	 * @returns {tile.layer} The tile layer associated with the key, or null
	 * if no tile layer is associated with the key.
	 */
	getTileLayer(key: string): tile.layer;
    
	/**
	 * Gets a point in map units from supplied coordinates pixel units 
	 * with respect to the currently displayed extents.
	 * @param {number} x The x coordinate in pixels.
	 * @param {number} y The y coordinate in pixels.
	 * @returns {point} The generated point in map units.
	 */
	computeMapPointFromPixelLocation(x: number, y: number): point;
    
	/**
	 * Flags whether or not map extent changes can occur through gestures 
	 * like mouse or touch drag, mouse wheel, or pinch zoom.
	 * @param {boolean} flag Whether or not gestures should affect map 
	 * extent changes.
	 */
	setSuspendMapExtentChangesByGestures(flag: boolean): void;
    
	/**
	 * Sets the z-order of drawn content in relation to the gesture capture 
	 * panel. The default behavior (false) is to have fixed content and 
	 * geometry underneath the gesture panel in the DOM. If false, all 
	 * pointer events are handled by the gesture capture panel and
	 * optionally parents of the map control. If true, drawn content will
	 * receive pointer events first and will block gestures to the map. If 
	 * true, digitizing will not function and polygons will block map 
	 * navigation. In some scenarios you may want to set this to true if you
	 * are placing fixed content (such as point features) on the map and 
	 * need to handle gestures on the placed content. You can call this 
	 * function at any time to change the order.
     * @param {boolean} flag Whether or not the fixed content layer should 
     * reside above the gesture layer.
	 */
	setDrawnContentZorderToTop(flag: boolean): void;
    
	/**
	 * Add a fixed element to the content area which resides at a z-level 
	 * above tiled map content. These elements do not scale with the map
	 * scale. This is used to place markers or callouts on the map
	 * @param {HTMLElement} element Any html that can be added to the DOM.
     * @param {number} mapUnitsX The x coordinate of the insertion point in map units.
     * @param {number} mapUnitsY The y coordinate of the insertion point in map units.
     * @param {function} [addAction] Callback function called after the 
     * DOM element has been placed with signature addAction(element).
     * @param {object} dragOptions JavaScript object of the form {dragEnabled,
     * useElementInsteadOfNewGestureOverlay, downAction, moveAction, upAction, 
     * wheelAction } where dragEnabled flags whether dragging should be
     * enabled on the element, and downAction, moveAction, upAction, and 
     * wheelAction are callback functions invoked on mousedown, mousemove,
     * mouseup, and scroll events respectively.
	 */
	addFixedContentElement(
		element: HTMLElement, 
		mapUnitsX: number, 
		mapUnitsY: number, 
		addAction?: (ele: HTMLElement) => void, 
		dragOptions?: {
			dragEnabled: boolean;
			useElementInsteadOfNewGestureOverlay: boolean;
			downAction?: (downPoint: point) => any;
			moveAction?: (movePoint: point) => void;
			upAction?: (upPoint: point) => void;
			wheelAction?: (delta: number) => void;
    	}
	): void;
	
	/**
	 * Move an existing fixed content element.
	 * @param {HTMLElement} element The existing DOM element to move.
	 * @param {number} mapUnitsX The new x coordinate in map units.
	 * @param {number} mapUnitsY The new y coordinate in map units.
	 */
    moveFixedContentElement(element: HTMLElement, mapUnitsX: number, mapUnitsY: number): void;
    
	/**
	 * Removes a fixed content element.
	 * @param {HTMLElement} element The DOM element to remove. Note: This
	 * must be the same element added by addFixedContentElement.
	 */
	removeFixedContentElement(element: HTMLElement): void;
    
	/**
	 * Add a styled path geometry to the content area which resides at a z-level 
	 * above tiled map content. The geometry is converted to SVG and added to the 
	 * content area DOM. If an attempt to add a geometry is made with the same 
	 * key, the geometry is swapped out. You must remove using removePathGeometry 
	 * for resource cleanup.
	 * @param {styleGeometry} styledGeom The styledGeometry to render.
	 * @param {string} key String used to tie a geometry to its SVG
     * @param {function} addAction optional function that is called when mapsjs adds an svg element to the DOM representing this styledGeometry.
     * @param {function} removeAction optional function that is called when mapsjs adds an svg element to the DOM representing this styledGeometry.
	 * rendering in the DOM.
	 * @returns {element} The SVG element which was added to the DOM.
	 */
    addPathGeometry(
        styledGeom: styledGeometry,
        key: string,
        addAction?: (svg: SVGElement) => void,
        removeAction?: (svg: SVGElement) => void): SVGElement;
    
	/**
	 * Updates an existing path geometry to reflect a style change.
	 * @param {geometryStyle} styleNew The new geometryStyle.
	 * @param {string} key The key of the geometry to receive the new style.
	 */
	updatePathGeometryStyle(styleNew: geometryStyle, key: string): void;
    
	/**
	 * Removes a styledGeometry from display.
	 * @param {string} key The key of the geometry to remove.
     * @returns {element} The SVG element which was removed from the DOM.
	 */
    removePathGeometry(key?: string): SVGElement;

	/**
	 * Initiates digitization on the map control. This creates a new
	 * geometry and adds verticies to the geometry accord to mouse
	 * click locations.
	 * @param {object} options JavaScript object of the form { key,
	 * shapeType, geometryStyle, styledGeometry, nodeTapAndHoldAction, nodeMoveAction,
	 * shapeChangeAction, envelopeEndAction, circleEndAction, supressNodeAdd, leavePath }
	 * where key is a a string associated with this geometry, shapeType
	 * is the type of shape this geometry is, one of 'polygon', 'polyline', 'multipoint', 'envelope' or 'circle', 
     * geometryStyle is a geometryStyle which should be applied
	 * to the digitized geometry, styledGeometry is an optional styledGeometry for existing paths to edit, set this to enter edit mode,
     * nodeTapAndHoldAction is a callback invoked
	 * when any point in the geometry is clicked and held and has the
	 * signature nodeTapAndHoldAction(setIdx, idx), nodeMoveAction is a
	 * callback invoked after any node is dragged to a new location and
	 * has signature nodeMoveAction(x, y, actionType), shapeChangeAction
	 * is a callback that is invoked after the geometry shape changes and,
	 * has signature shapeChangeAction(shape), envelopeEndAction is a callback 
	 * invoked after an envelope is created and has signature envelopeEndAction(envelope), 
     * circleEndAction is similar to envelopeEndAction but takes a geometry.polygon representing the circle,
	 * and leavePath is a flag that indicates whether the digitized shape
	 * should be left on the map after digitization is complete.
	 */
    beginDigitize(options: beginDigitizeOptions): void;
    endDigitize(): void;
    
	/**
	 * Gets a snapshot copy of the currently digitizing path.
	 * @returns {geometry} The currently digitizing path.
	 */
	getDigitizeSnapshot(): geometry;
    
	/** 
	 * Forces additional digitized points to be pushed to a new set of the
	 * currently digitizing geometry.
	 */
	pushSetOnDigitizePath(): void;
    
	/**
	 * Removes the last set from the currently digitizing path.
	 * @return {number[]} The last set from the currently digitizing path
	 * in the form [xn,yn]. 
	 */
	popSetFromDigitizePath(): number[];
    
	/**
	 * Programmatically delete a node from the currently digitizing path.
	 * @param {number} setIdx The index of the set from which to remove the node.
	 * @param {number} nodeIdx The index of the node to remove.
	 */
	deleteNodeOnDigitizePath(setIdx: number, nodeIdx: number): void;
    
	/**
	 * Determines whether a shape is currently being digitized.
	 * @returns {boolean} Whether or not a shape is being digitized.
	 */
	isDigitizingEnabled(): boolean;
    
	/** 
	 * Set the function called when the map extents have stopped changing 
	 * (e.g. after an animated pan or zoom).
	 * @param {function} action The function to call when the extents
	 * finish changing with signature action(object) where object is of
	 * the form { centerX, centerY, centerLat, centerLon, zoomLevel, mapScale,
	 * mapScaleProjected, mapUnitsPerPixel, extents }.
	 */
    setExtentChangeCompleteAction(action: (vals: extentChangeStatsObj) => void): void;
    
	/**
	 * Set the function called when map content (map tiles and fixed elements) are 
	 * re-positioned in the DOM. This is done automatically as the map is panned 
	 * beyond existing content and zoomed to a new level requiring content.
	 * @param {function} action The function to call when the map content
	 * completes repositioning with signature action(object) where object
	 * is of the form { centerX, centerY, zoomLevel, mapUnitsPerPixel }.
	 */
    setContentRepositionAction(action: (vals: repositionStatsObj) => void): void;
    
	/**
	 * Sets function called when map is clicked or tapped.
	 * @param {function} action The function to call on mouse click or tap 
	 * with signature action(point).
	 */
	setPointerClickAction(action: (pt: point) => void): void;
    
	/** 
	 * Sets function called when the map pointer hovers over the map.
	 * @param {function} action The function to call on mouse hover with 
	 * signature action(point).
	 */
	setPointerHoverAction(action: (pt: point) => void): void;
    
	/** 
	* Sets the margin around the map in pixels for extra content fetched so that tile 
	* rebuilding of the display is minimized. This is an advanced property and does not 
	* generally need to be adjusted. The default is 128 pixels, or half the width
	* of a tile. This should be increased for maps which are very large in pixels
	* or where panning is constant. This should be decreased for very small maps,
	* such as on mobile devices, or where panning is minimal.
	* @param {number} cem The content extent margin in pixels.
	*/
	setContentExtentsMarginInPixels(cem: number): void;

	/**
	* Sets the background color of the map using a css color string
	* @param {number} b- a css color string
	*/
	setBackground(b: string): void;
}


interface JQuery {

    rimMap(): JQuery;
    rimMap(command: any, param?: any, param2?: any, param3?: any, param4?: any, param5?: any): JQuery;
    getMapsjs(): any;
}
