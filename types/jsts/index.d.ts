// Type definitions for jsts 0.17.0
// Project: https://github.com/bjornharrtell/jsts
// Definitions by: Stephane Alie <https://github.com/StephaneAlie>, Jorge Rocha Gualtieri <https://github.com/jrocha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="openlayers" />

declare namespace jsts {
    export var version: string;

    namespace algorithm {
        import Point = jsts.geom.Point;
        import Coordinate = jsts.geom.Coordinate;

        export class Orientation {
            static CLOCKWISE: number;
            static RIGHT: number;
            static COUNTERCLOCKWISE: number;
            static LEFT: number;
            static COLLINEAR: number;
            static STRAIGHT: number;

            static index(p1: Point, p2: Point, q: Point): number;

            static isCCW(ring: Coordinate[]): boolean;
        }

        export class BoundaryNodeRule {}
    }

    namespace geom {



        /**
         * Specifies the precision model of the Coordinates in a Geometry. In other words, specifies the grid of allowable points for all Geometrys.
         * The makePrecise method allows rounding a coordinate to a "precise" value; that is, one whose precision is known exactly.
         *
         * Coordinates are assumed to be precise in geometries. That is, the coordinates are assumed to be rounded to the precision model given for the geometry. JTS input routines automatically round coordinates to the precision model before creating Geometries. All internal operations assume that coordinates are rounded to the precision model. Constructive methods (such as boolean operations) always round computed coordinates to the appropriate precision model.
         * 
         * Currently one type of precision model are supported:
         *
         * FLOATING - represents full double precision floating point.
         * Coordinates are represented internally as Java double-precision values. Since Java uses the IEEE-754 floating point standard, this provides 53 bits of precision.
         * 
         * JSTS methods currently do not handle inputs with different precision models.
         *
         */
        export class PrecisionModel {


            static FIXED: string;
            static FLOATING: string;
            static FLOATING_SINGLE: string;

            /**
             * 
             * @param modelType
             */
            constructor(modelType?: number|string);
        }

        /**
         * Supplies a set of utility methods for building Geometry objects from lists
         * of Coordinates.
         *
         * Note that the factory constructor methods do <b>not</b> change the input
         * coordinates in any way.
         *
         * In particular, they are not rounded to the supplied <tt>PrecisionModel</tt>.
         * It is assumed that input Coordinates meet the given precision.
         */
        export class GeometryFactory {

            /**
             * Constructs a GeometryFactory that generates Geometries having a floating PrecisionModel and a spatial-reference ID of 0.
             */
            constructor(precisionModel?: PrecisionModel);


            /**
             * Creates a LineString using the given Coordinates; a null or empty array will
             * create an empty LineString. Consecutive points must not be equal.
             *
             * @param {Coordinate[]}
             *          coordinates an array without null elements, or an empty array, or
             *          null.
             * @return {LineString} A new LineString.
             */
            createLineString(coordinates: Array<Coordinate>): LineString;
            /**
             * Creates a Point using the given Coordinate; a null Coordinate will create an
             * empty Geometry.
             *
             * @param {Coordinate}
             *          coordinate Coordinate to base this Point on.
             * @return {Point} A new Point.
             */
            createPoint(coordinates: Coordinate): Point;
            /**
            * Creates a LinearRing using the given Coordinates; a null or empty array
            * will create an empty LinearRing. Consecutive points must not be equal.
            *
            * @param {Coordinate[]}
            *          coordinates an array without null elements, or an empty array,
            * or null.
            * @return {LineString} A new LinearRing.
            */
            createLinearRing(coordinates: Array<Coordinate>): LinearRing;
            /**
            * Creates a Polygon using the given LinearRing.
            *
            * @param {LinearRing} A LinearRing constructed by coordinates.
            * @return {Polygon} A new Polygon.
            */
            createPolygon(shell: LinearRing, holes: Array<LinearRing>): Polygon;            

        }

        export class GeometryCollection extends jsts.geom.Geometry {

            constructor(geometries?: Array<Geometry>, factory?: GeometryFactory);
        }

        /**
         * A lightweight class used to store coordinates on the 2-dimensional
         * Cartesian plane. It is distinct from {@link Point}, which is a subclass of
         * {@link Geometry}. Unlike objects of type {@link Point} (which contain
         * additional information such as an envelope, a precision model, and spatial
         * reference system information), a <code>Coordinate</code> only contains
         * coordinate values and accessor methods.
         */
        export class Coordinate {
            /**
             * @constructor
             */
            constructor(x: number, y: number);

            /**
             * @constructor
             */
            constructor(c: Coordinate);

            /**
             * Gets or sets the x value.
             */
            x: number;

            /**
             * Gets or sets the y value.
             */
            y: number;

            /**
             * Gets or sets the z value.
             */
            z: number;

            /**
             * Sets this <code>Coordinate</code>s (x,y,z) values to that of
             * <code>other</code>.
             *
             * @param {Coordinate}
             *          other the <code>Coordinate</code> to copy.
             */
            setCoordinate(other: Coordinate): void;

            /**
             * Clones this instance.
             *
             * @return {Coordinate} A point instance cloned from this.
             */
            clone(): Coordinate;

            /**
             * Computes the 2-dimensional Euclidean distance to another location. The
             * Z-ordinate is ignored.
             *
             * @param {Coordinate}
             *          p a point.
             * @return {number} the 2-dimensional Euclidean distance between the
             *         locations.
             */
            distance(p: Coordinate): number;

            /**
             * Returns whether the planar projections of the two <code>Coordinate</code>s
             * are equal.
             *
             * @param {Coordinate}
             *          other a <code>Coordinate</code> with which to do the 2D
             *          comparison.
             * @return {boolean} <code>true</code> if the x- and y-coordinates are
             *         equal; the z-coordinates do not have to be equal.
             */
            equals2D(other: Coordinate): boolean;

            /**
             * Returns <code>true</code> if <code>other</code> has the same values for
             * the x and y ordinates. Since Coordinates are 2.5D, this routine ignores the
             * z value when making the comparison.
             *
             * @param {Coordinate}
             *          other a <code>Coordinate</code> with which to do the comparison.
             * @return {boolean} <code>true</code> if <code>other</code> is a
             *         <code>Coordinate</code> with the same values for the x and y
             *         ordinates.
             */
            equals(other: Coordinate): boolean;

            /**
             * Compares this {@link Coordinate} with the specified {@link Coordinate} for
             * order. This method ignores the z value when making the comparison. Returns:
             * <UL>
             * <LI> -1 : this.x < other.x || ((this.x == other.x) && (this.y < other.y))
             * <LI> 0 : this.x == other.x && this.y = other.y
             * <LI> 1 : this.x > other.x || ((this.x == other.x) && (this.y > other.y))
             *
             * </UL>
             * Note: This method assumes that ordinate values are valid numbers. NaN
             * values are not handled correctly.
             *
             * @param {Coordinate}
             *          other the <code>Coordinate</code> with which this
             *          <code>Coordinate</code> is being compared.
             * @return {number} -1, zero, or 1 as explained above.
             */
            compareTo(other: Coordinate): number;
        }

        export class CoordinateSequence {
            static X: number;
            static Y: number;
            static Z: number;
            static M: number;
        }
        /**
         * Defines a rectangular region of the 2D coordinate plane. It is often used to
         * represent the bounding box of a {@link Geometry}, e.g. the minimum and
         * maximum x and y values of the {@link Coordinate}s.
         * <p>
         * Note that Envelopes support infinite or half-infinite regions, by using the
         * values of <code>Double.POSITIVE_INFINITY</code> and
         * <code>Double.NEGATIVE_INFINITY</code>.
         * <p>
         * When Envelope objects are created or initialized, the supplies extent values
         * are automatically sorted into the correct order.
         */
        export class Envelope {
            /**
             * Test the point q to see whether it intersects the Envelope defined by p1-p2
             *
             * NOTE: calls intersectsEnvelope if four arguments are given to simulate
             * overloaded function
             *
             * @param {jsts.geom.Coordinate}
             *          p1 one extremal point of the envelope.
             * @param {jsts.geom.Coordinate}
             *          p2 another extremal point of the envelope.
             * @param {jsts.geom.Coordinate}
             *          q the point to test for intersection.
             * @return {boolean} <code>true</code> if q intersects the envelope p1-p2.
             */
            static intersects(p1: Coordinate, p2: Coordinate, q: Coordinate): boolean;

            /**
             * Test the envelope defined by p1-p2 for intersection with the envelope defined
             * by q1-q2
             *
             * @param {jsts.geom.Coordinate}
             *          p1 one extremal point of the envelope P.
             * @param {jsts.geom.Coordinate}
             *          p2 another extremal point of the envelope P.
             * @param {jsts.geom.Coordinate}
             *          q1 one extremal point of the envelope Q.
             * @param {jsts.geom.Coordinate}
             *          q2 another extremal point of the envelope Q.
             * @return {boolean} <code>true</code> if Q intersects P.
             */
            static intersectsEnvelope(p1: Coordinate, p2: Coordinate, q1: Coordinate, q2: Coordinate): boolean;

            /**
             * Creates an <code>Envelope</code> for a region defined by maximum and
             * minimum values.
             *
             * @param {number} x1 the first x-value.
             * @param {number} x2 the second x-value.
             * @param {number} y1 the first y-value.
             * @param {number} y2 the second y-value.
             */
            constructor(x1: number, x2: number, y1: number, y2: number);

            /**
             * Initialize an <code>Envelope</code> to a region defined by two Coordinates.
             *
             * @param {jsts.geom.Coordinate} p1 the first Coordinate.
             * @param {jsts.geom.Coordinate} p2 the second Coordinate.
             */
            constructor(p1: Coordinate, p2: Coordinate);

            /**
             * Initialize an <code>Envelope</code> to a region defined by a single
             * Coordinate.
             *
             * @param {jsts.geom.Coordinate} p the Coordinate.
             */
            constructor(p: Coordinate);

            /**
             * Initialize an <code>Envelope</code> from an existing Envelope.
             *
             * @param {jsts.geom.Envelope} env the Envelope to initialize from.
             */
            constructor(env: Envelope);

            /**
             * the minimum x-coordinate.
             */
            minx: number;

            /**
             * the maximum x-coordinate.
             */
            maxx: number;

            /**
             * the minimum y-coordinate.
             */
            miny: number;

            /**
             * the maximum y-coordinate.
             */
            maxy: number;

            /**
             * Makes this <code>Envelope</code> a "null" envelope, that is, the envelope
             * of the empty geometry.
             */
            setToNull(): void;

            /**
             * Returns <code>true</code> if this <code>Envelope</code> is a "null"
             * envelope.
             *
             * @return {boolean} <code>true</code> if this <code>Envelope</code> is
             *         uninitialized or is the envelope of the empty geometry.
             */
            isNull(): boolean;

            /**
             * Returns the difference between the maximum and minimum y values.
             *
             * @return {number} max y - min y, or 0 if this is a null <code>Envelope.</code>
             */
            getHeight(): number;

            /**
             * Returns the difference between the maximum and minimum x values.
             *
             * @return {number} max x - min x, or 0 if this is a null <code>Envelope.</code>
             */
            getWidth(): number;

            /**
             * Returns the <code>Envelope</code>s minimum x-value. min x > max x
             * indicates that this is a null <code>Envelope</code>.
             *
             * @return {number} the minimum x-coordinate.
             */
            getMinX(): number;

            /**
             * Returns the <code>Envelope</code>s maximum x-value. min x > max x
             * indicates that this is a null <code>Envelope</code>.
             *
             * @return {number} the maximum x-coordinate.
             */
            getMaxX(): number;

            /**
             * Returns the <code>Envelope</code>s minimum y-value. min y > max y
             * indicates that this is a null <code>Envelope</code>.
             *
             * @return {number} the minimum y-coordinate.
             */
            getMinY(): number;

            /**
             * Returns the <code>Envelope</code>s maximum y-value. min y > max y
             * indicates that this is a null <code>Envelope</code>.
             *
             * @return {number} the maximum y-coordinate.
             */
            getMaxY(): number;

            /**
             * Gets the area of this envelope.
             *
             * @return {number} the area of the envelope, 0.0 if the envelope is null.
             */
            getArea(): number;

            /**
             * Enlarges this <code>Envelope</code> so that it contains the given
             * {@link Coordinate}. Has no effect if the point is already on or within the
             * envelope.
             *
             * @param {jsts.geom.Coordinate} p the Coordinate to expand to include.
             */
            expandToInclude(p: Coordinate): void;

            /**
             * Enlarges this <code>Envelope</code> so that it contains the given point.
             * Has no effect if the point is already on or within the envelope.
             *
             * @param {number} x the value to lower the minimum x to or to raise the maximum x to.
             * @param {number} y the value to lower the minimum y to or to raise the maximum y to.
             */
            expandToInclude(x: number, y: number): void;

            /**
             * Enlarges this <code>Envelope</code> so that it contains the
             * <code>other</code> Envelope. Has no effect if <code>other</code> is
             * wholly on or within the envelope.
             *
             * @param {jsts.geom.Envelope} other the <code>Envelope</code> to expand to include.
             */
            expandToInclude(other: Envelope): void;

            /**
             * Expands this envelope by a given distance in all directions. Both positive
             * and negative distances are supported.
             *
             * @param {number} distance the distance to expand the envelope.
             */
            expandBy(distance: number): void;

            /**
             * Expands this envelope by a given distance in all directions. Both positive
             * and negative distances are supported.
             *
             * @param {number}
             *          deltaX the distance to expand the envelope along the the X axis.
             * @param {number}
             *          deltaY the distance to expand the envelope along the the Y axis.
             */
            expandBy(deltaX: number, deltaY: number): void;

            /**
             * Translates this envelope by given amounts in the X and Y direction.
             *
             * @param {number}
             *          transX the amount to translate along the X axis.
             * @param {number}
             *          transY the amount to translate along the Y axis.
             */
            translate(transX: number, transY: number): void;

            /**
             * Computes the coordinate of the centre of this envelope (as long as it is
             * non-null
             *
             * @return {jsts.geom.Coordinate} the centre coordinate of this envelope <code>null</code>
             *         if the envelope is null.
             */
            centre(): Coordinate;

            /**
             * Computes the intersection of two {@link Envelopes}
             *
             * @param {jsts.geom.Envelope}
             *          env the envelope to intersect with.
             * @return {jsts.geom.Envelope} a new Envelope representing the intersection of
             *         the envelopes (this will be the null envelope if either argument is
             *         null, or they do not intersect.
             */
            intersection(env: Envelope): Envelope;

            /**
             * Check if the region defined by <code>other</code> overlaps (intersects) the
             * region of this <code>Envelope</code>.
             *
             * @param {jsts.geom.Envelope}
             *          other the <code>Envelope</code> which this <code>Envelope</code>
             *          is being checked for overlapping.
             * @return {boolean} <code>true</code> if the <code>Envelope</code>s
             *         overlap.
             */
            intersects(other: Envelope): boolean;

            /**
             * Check if the point <code>p</code> overlaps (lies inside) the region of this
             * <code>Envelope</code>.
             *
             * @param {jsts.geom.Coordinate}
             *          p the <code>Coordinate</code> to be tested.
             * @return {boolean} <code>true</code> if the point overlaps this
             *         <code>Envelope.</code>
             */
            intersects(p: Coordinate): boolean;

            /**
             * Check if the point <code>(x, y)</code> overlaps (lies inside) the region of
             * this <code>Envelope</code>.
             *
             * @param {number}
             *          x the x-ordinate of the point.
             * @param {number}
             *          y the y-ordinate of the point.
             * @return {boolean} <code>true</code> if the point overlaps this
             *         <code>Envelope.</code>
             */
            intersects(x: number, y: number): boolean;

            /**
             * Tests if the <code>Envelope other</code> lies wholely inside this
             * <code>Envelope</code> (inclusive of the boundary).
             * <p>
             * Note that this is <b>not</b> the same definition as the SFS
             * <tt>contains</tt>, which would exclude the envelope boundary.
             *
             * @param {jsts.geom.Envelope}
             *          other the <code>Envelope</code> to check.
             * @return {boolean} true if <code>other</code> is contained in this
             *         <code>Envelope.</code>
             *
             * @see covers(Envelope)
             */
            contains(other: Envelope): boolean;

            /**
             * Tests if the given point lies in or on the envelope.
             * <p>
             * Note that this is <b>not</b> the same definition as the SFS
             * <tt>contains</tt>, which would exclude the envelope boundary.
             *
             * @param {jsts.geom.Coordinate}
             *          p the point which this <code>Envelope</code> is being checked for
             *          containing.
             * @return {boolean} <code>true</code> if the point lies in the interior or on
             *         the boundary of this <code>Envelope</code>.
             *
             * @see covers(Coordinate)
             */
            contains(p: Coordinate): boolean;

            /**
             * Tests if the given point lies in or on the envelope.
             * <p>
             * Note that this is <b>not</b> the same definition as the SFS
             * <tt>contains</tt>, which would exclude the envelope boundary.
             *
             * @param {number}
             *          x the x-coordinate of the point which this <code>Envelope</code>
             *          is being checked for containing.
             * @param {number}
             *          y the y-coordinate of the point which this <code>Envelope</code>
             *          is being checked for containing.
             * @return {boolean} <code>true</code> if <code>(x, y)</code> lies in the
             *         interior or on the boundary of this <code>Envelope</code>.
             *
             * @see covers(double, double)
             */
            contains(x: number, y: number): boolean;

            /**
             * Tests if the given point lies in or on the envelope.
             *
             * @param {number}
             *          x the x-coordinate of the point which this <code>Envelope</code>
             *          is being checked for containing.
             * @param {number}
             *          y the y-coordinate of the point which this <code>Envelope</code>
             *          is being checked for containing.
             * @return {boolean} <code>true</code> if <code>(x, y)</code> lies in the
             *         interior or on the boundary of this <code>Envelope</code>.
             */
            covers(x: number, y: number): boolean;

            /**
             * Tests if the given point lies in or on the envelope.
             *
             * @param {jsts.geom.Coordinate}
             *          p the point which this <code>Envelope</code> is being checked for
             *          containing.
             * @return {boolean} <code>true</code> if the point lies in the interior or on
             *         the boundary of this <code>Envelope</code>.
             */
            covers(p: Coordinate): boolean;

            /**
             * Tests if the <code>Envelope other</code> lies wholely inside this
             * <code>Envelope</code> (inclusive of the boundary).
             *
             * @param {jsts.geom.Envelope}
             *          other the <code>Envelope</code> to check.
             * @return {boolean} true if this <code>Envelope</code> covers the
             *         <code>other.</code>
             */
            covers(other: Envelope): boolean;

            /**
             * Computes the distance between this and another <code>Envelope</code>.
             *
             * @param {jsts.geom.Envelope}
             *          env The <code>Envelope</code> to test this <code>Envelope</code>
             *          against.
             * @return {number} The distance between overlapping Envelopes is 0. Otherwise,
             *         the distance is the Euclidean distance between the closest points.
             */
            distance(env: Envelope): number;

            /**
             * @param {jsts.geom.Envelope}
             *          other the <code>Envelope</code> to check against.
             * @return {boolean} true if envelopes are equal.
             */
            equals(other: Envelope): boolean;

            /**
             * @return {string} String representation of this <code>Envelope.</code>
             */
            toString(): string;

            /**
             * @return {jsts.geom.Envelope} A new instance copied from this.
             */
            clone(): Envelope;
        }

        /**
         * The base class for all geometric objects.
         */
        export class Geometry {
            /**
             * Creates a new <tt>Geometry</tt> via the specified GeometryFactory.
             */
            constructor(factory?: any);

            /**
            * The bounding box of this <code>Geometry</code>.
            */
            envelope: Envelope;

            /**
             * Gets the factory which contains the context in which this geometry was created.
             *
             * @return {jsts.geom.GeometryFactory} the factory for this geometry.
             */
            getFactory(): any;

            /**
             * Returns the name of this object's <code>com.vivid.jts.geom</code> interface.
             *
             * @return {string} The name of this <code>Geometry</code>s most specific <code>jsts.geom</code> interface.
             */
            getGeometryType(): string;

            /**
             *Returns the number of {@link Geometry}s in a {@link GeometryCollection}
             * (or 1, if the geometry is not a collection).
             *
             * @return {number} the number of geometries contained in this geometry.
             */
            getNumGeometries(): number;

            /**
             * Returns an element {@link Geometry} from a {@link GeometryCollection} (or
             * <code>this</code>, if the geometry is not a collection).
             *
             * @param {number} n The index of the geometry element.
             *
             * @return {Geometry} the n'th geometry contained in this geometry.
             */
            getGeometryN(n: number): Geometry;

            /**
             * Returns the <code>PrecisionModel</code> used by the <code>Geometry</code>.
             *
             * @return {PrecisionModel} the specification of the grid of allowable points, for this
             * <code>Geometry</code> and all other <code>Geometry</code>s.
             */
            getPrecisionModel(): PrecisionModel;

            /**
             * Returns a vertex of this <code>Geometry</code> (usually, but not
             * necessarily, the first one). The returned coordinate should not be assumed to
             * be an actual Coordinate object used in the internal representation.
             *
             * @return {Coordinate} a {@link Coordinate} which is a vertex of this
             *         <code>Geometry</code>. null if this Geometry is empty.
             */
            getCoordinate(): Coordinate;

            /**
             * Returns an array containing the values of all the vertices for this geometry.
             * If the geometry is a composite, the array will contain all the vertices for
             * the components, in the order in which the components occur in the geometry.
             * <p>
             * In general, the array cannot be assumed to be the actual internal storage for
             * the vertices. Thus modifying the array may not modify the geometry itself.
             * Use the {@link CoordinateSequence#setOrdinate} method (possibly on the
             * components) to modify the underlying data. If the coordinates are modified,
             * {@link #geometryChanged} must be called afterwards.
             *
             * @return {Coordinate[]} the vertices of this <code>Geometry.</code>
             * @see geometryChanged
             * @see CoordinateSequence#setOrdinate
             */
            getCoordinates(): Coordinate[];

            /**
             * Returns the count of this <code>Geometry</code>s vertices. The
             * <code>Geometry</code> s contained by composite <code>Geometry</code>s
             * must be Geometry's; that is, they must implement <code>getNumPoints</code>
             *
             * @return {number} the number of vertices in this <code>Geometry.</code>
             */
            getNumPoints(): number;

            /**
             * Tests whether this {@link Geometry} is simple. In general, the SFS
             * specification of simplicity follows the rule:
             * <UL>
             * <LI> A Geometry is simple iff the only self-intersections are at boundary
             * points.
             * </UL>
             * Simplicity is defined for each {@link Geometry} subclass as follows:
             * <ul>
             * <li>Valid polygonal geometries are simple by definition, so
             * <code>isSimple</code> trivially returns true.
             * <li>Linear geometries are simple iff they do not self-intersect at points
             * other than boundary points.
             * <li>Zero-dimensional geometries (points) are simple iff they have no
             * repeated points.
             * <li>Empty <code>Geometry</code>s are always simple
             * <ul>
             *
             * @return {boolean} <code>true</code> if this <code>Geometry</code> has any
             *         points of self-tangency, self-intersection or other anomalous points.
             * @see #isValid
             */
            isSimple(): boolean;

            /**
             * Tests the validity of this <code>Geometry</code>. Subclasses provide their
             * own definition of "valid".
             *
             * @return {boolean} <code>true</code> if this <code>Geometry</code> is
             *         valid.
             *
             * @see IsValidOp
             */
            isValid(): boolean;

            /**
             * Returns whether or not the set of points in this <code>Geometry</code> is
             * empty.
             *
             * @return {boolean} <code>true</code> if this <code>Geometry</code> equals
             *         the empty geometry.
             */
            isEmpty(): boolean;

            /**
             * Returns the minimum distance between this <code>Geometry</code> and the
             * <code>Geometry</code> g
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> from which to compute the distance.
             * @return {number} the distance between the geometries. 0 if either input
             *         geometry is empty.
             * @throws IllegalArgumentException
             *           if g is null
             */
            distance(g: Geometry): number;

            /**
             * Tests whether the distance from this <code>Geometry</code> to another is
             * less than or equal to a specified value.
             *
             * @param {Geometry}
             *          geom the Geometry to check the distance to.
             * @param {number}
             *          distance the distance value to compare.
             * @return {boolean} <code>true</code> if the geometries are less than
             *         <code>distance</code> apart.
             */
            isWithinDistance(geom: Geometry, distance: number): boolean;

            isRectangle(): boolean;

            /**
             * Returns the area of this <code>Geometry</code>. Areal Geometries have a
             * non-zero area. They override this function to compute the area. Others return
             * 0.0
             *
             * @return the area of the Geometry.
             */
            getArea(): number;

            /**
             * Returns the length of this <code>Geometry</code>. Linear geometries return
             * their length. Areal geometries return their perimeter. They override this
             * function to compute the area. Others return 0.0
             *
             * @return the length of the Geometry.
             */
            getLength(): number;

            /**
             * Computes the centroid of this <code>Geometry</code>. The centroid is equal
             * to the centroid of the set of component Geometries of highest dimension
             * (since the lower-dimension geometries contribute zero "weight" to the
             * centroid)
             *
             * @return a {@link Point} which is the centroid of this Geometry.
             */
            getCentroid(): Point;

            /**
             * Computes an interior point of this <code>Geometry</code>. An interior
             * point is guaranteed to lie in the interior of the Geometry, if it possible to
             * calculate such a point exactly. Otherwise, the point may lie on the boundary
             * of the geometry.
             *
             * @return {Point} a {@link Point} which is in the interior of this Geometry.
             */
            getInteriorPoint(): Point;

            /**
             * Returns the dimension of this geometry. The dimension of a geometry is is the
             * topological dimension of its embedding in the 2-D Euclidean plane. In the JTS
             * spatial model, dimension values are in the set {0,1,2}.
             * <p>
             * Note that this is a different concept to the dimension of the vertex
             * {@link Coordinate}s. The geometry dimension can never be greater than the
             * coordinate dimension. For example, a 0-dimensional geometry (e.g. a Point)
             * may have a coordinate dimension of 3 (X,Y,Z).
             *
             * @return {number} the topological dimension of this geometry.
             */
            getDimension(): number;

            /**
             * Returns the boundary, or an empty geometry of appropriate dimension if this
             * <code>Geometry</code> is empty. (In the case of zero-dimensional
             * geometries, ' an empty GeometryCollection is returned.) For a discussion of
             * this function, see the OpenGIS Simple Features Specification. As stated in
             * SFS Section 2.1.13.1, "the boundary of a Geometry is a set of Geometries of
             * the next lower dimension."
             *
             * @return {Geometry} the closure of the combinatorial boundary of this
             *         <code>Geometry.</code>
             */
            getBoundary(): Geometry;

            /**
             * Returns the dimension of this <code>Geometry</code>s inherent boundary.
             *
             * @return {number} the dimension of the boundary of the class implementing this
             *         interface, whether or not this object is the empty geometry. Returns
             *         <code>Dimension.FALSE</code> if the boundary is the empty geometry.
             */
            getBoundaryDimension(): number;

            /**
             * Returns this <code>Geometry</code>s bounding box. If this
             * <code>Geometry</code> is the empty geometry, returns an empty
             * <code>Point</code>. If the <code>Geometry</code> is a point, returns a
             * non-empty <code>Point</code>. Otherwise, returns a <code>Polygon</code>
             * whose points are (minx, miny), (maxx, miny), (maxx, maxy), (minx, maxy),
             * (minx, miny).
             *
             * @return {Geometry} an empty <code>Point</code> (for empty
             *         <code>Geometry</code>s), a <code>Point</code> (for
             *         <code>Point</code>s) or a <code>Polygon</code> (in all other
             *         cases).
             */
            getEnvelope(): Geometry;

            /**
             * Returns the minimum and maximum x and y values in this <code>Geometry</code>,
             * or a null <code>Envelope</code> if this <code>Geometry</code> is empty.
             *
             * @return {Envelope} this <code>Geometry</code>s bounding box; if the
             *         <code>Geometry</code> is empty, <code>Envelope#isNull</code> will
             *         return <code>true.</code>
             */
            getEnvelopeInternal(): Envelope;

            /**
             * Tests whether this geometry is disjoint from the specified geometry.
             * <p>
             * The <code>disjoint</code> predicate has the following equivalent
             * definitions:
             * <ul>
             * <li>The two geometries have no point in common
             * <li>The DE-9IM Intersection Matrix for the two geometries matches
             * <code>[FF*FF****]</code>
             * <li><code>! g.intersects(this)</code> (<code>disjoint</code> is the
             * inverse of <code>intersects</code>)
             * </ul>
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if the two <code>Geometry</code>s
             *         are disjoint.
             *
             * @see Geometry#intersects
             */
            disjoint(g: Geometry): boolean;

            /**
             * Tests whether this geometry touches the specified geometry.
             * <p>
             * The <code>touches</code> predicate has the following equivalent
             * definitions:
             * <ul>
             * <li>The geometries have at least one point in common, but their interiors do
             * not intersect.
             * <li>The DE-9IM Intersection Matrix for the two geometries matches
             * <code>[FT*******]</code> or <code>[F**T*****]</code> or
             * <code>[F***T****]</code>
             * </ul>
             * If both geometries have dimension 0, this predicate returns
             * <code>false</code>
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if the two <code>Geometry</code>s
             *         touch; Returns <code>false</code> if both <code>Geometry</code>s
             *         are points.
             */
            touches(g: Geometry): boolean;

            /**
             * Tests whether this geometry intersects the specified geometry.
             * <p>
             * The <code>intersects</code> predicate has the following equivalent
             * definitions:
             * <ul>
             * <li>The two geometries have at least one point in common
             * <li>The DE-9IM Intersection Matrix for the two geometries matches
             * <code>[T********]</code> or <code>[*T*******]</code> or
             * <code>[***T*****]</code> or <code>[****T****]</code>
             * <li><code>! g.disjoint(this)</code> (<code>intersects</code> is the
             * inverse of <code>disjoint</code>)
             * </ul>
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if the two <code>Geometry</code>s
             *         intersect.
             *
             * @see Geometry#disjoint
             */
            intersects(g: Geometry): boolean;

            /**
             * Tests whether this geometry crosses the specified geometry.
             * <p>
             * The <code>crosses</code> predicate has the following equivalent
             * definitions:
             * <ul>
             * <li>The geometries have some but not all interior points in common.
             * <li>The DE-9IM Intersection Matrix for the two geometries matches
             * <ul>
             * <li><code>[T*T******]</code> (for P/L, P/A, and L/A situations)
             * <li><code>[T*****T**]</code> (for L/P, A/P, and A/L situations)
             * <li><code>[0********]</code> (for L/L situations)
             * </ul>
             * </ul>
             * For any other combination of dimensions this predicate returns
             * <code>false</code>.
             * <p>
             * The SFS defined this predicate only for P/L, P/A, L/L, and L/A situations.
             * JTS extends the definition to apply to L/P, A/P and A/L situations as well,
             * in order to make the relation symmetric.
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if the two <code>Geometry</code>s
             *         cross.
             */
            crosses(g: Geometry): boolean;

            /**
             * Tests whether this geometry is within the specified geometry.
             * <p>
             * The <code>within</code> predicate has the following equivalent definitions:
             * <ul>
             * <li>Every point of this geometry is a point of the other geometry, and the
             * interiors of the two geometries have at least one point in common.
             * <li>The DE-9IM Intersection Matrix for the two geometries matches
             * <code>[T*F**F***]</code>
             * <li><code>g.contains(this)</code> (<code>within</code> is the converse
             * of <code>contains</code>)
             * </ul>
             * An implication of the definition is that "The boundary of a Geometry is not
             * within the Geometry". In other words, if a geometry A is a subset of the
             * points in the boundary of a geomtry B, <code>A.within(B) = false</code>
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if this <code>Geometry</code> is
             *         within <code>other.</code>
             *
             * @see Geometry#contains
             */
            within(g: Geometry): boolean;

            /**
             * Tests whether this geometry contains the specified geometry.
             * <p>
             * The <code>contains</code> predicate has the following equivalent
             * definitions:
             * <ul>
             * <li>Every point of the other geometry is a point of this geometry, and the
             * interiors of the two geometries have at least one point in common.
             * <li>The DE-9IM Intersection Matrix for the two geometries matches
             * <code>[T*****FF*]</code>
             * <li><code>g.within(this)</code> (<code>contains</code> is the converse
             * of <code>within</code>)
             * </ul>
             * An implication of the definition is that "Geometries do not contain their
             * boundary". In other words, if a geometry A is a subset of the points in the
             * boundary of a geometry B, <code>B.contains(A) = false</code>
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if this <code>Geometry</code>
             *         contains <code>g.</code>
             *
             * @see Geometry#within
             */
            contains(g: Geometry): boolean;

            /**
             * Tests whether this geometry overlaps the specified geometry.
             * <p>
             * The <code>overlaps</code> predicate has the following equivalent
             * definitions:
             * <ul>
             * <li>The geometries have at least one point each not shared by the other (or
             * equivalently neither covers the other), they have the same dimension, and the
             * intersection of the interiors of the two geometries has the same dimension as
             * the geometries themselves.
             * <li>The DE-9IM Intersection Matrix for the two geometries matches
             * <code>[T*T***T**]</code> (for two points or two surfaces) or
             * <code>[1*T***T**]</code> (for two curves)
             * </ul>
             * If the geometries are of different dimension this predicate returns
             * <code>false</code>.
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if the two <code>Geometry</code>s
             *         overlap.
             */
            overlaps(g: Geometry): boolean;

            /**
             * Tests whether this geometry covers the specified geometry.
             * <p>
             * The <code>covers</code> predicate has the following equivalent definitions:
             * <ul>
             * <li>Every point of the other geometry is a point of this geometry.
             * <li>The DE-9IM Intersection Matrix for the two geometries matches
             * <code>[T*****FF*]</code> or <code>[*T****FF*]</code> or
             * <code>[***T**FF*]</code> or <code>[****T*FF*]</code>
             * <li><code>g.coveredBy(this)</code> (<code>covers</code> is the converse
             * of <code>coveredBy</code>)
             * </ul>
             * If either geometry is empty, the value of this predicate is <tt>false</tt>.
             * <p>
             * This predicate is similar to {@link #contains}, but is more inclusive (i.e.
             * returns <tt>true</tt> for more cases). In particular, unlike
             * <code>contains</code> it does not distinguish between points in the
             * boundary and in the interior of geometries. For most situations,
             * <code>covers</code> should be used in preference to <code>contains</code>.
             * As an added benefit, <code>covers</code> is more amenable to optimization,
             * and hence should be more performant.
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if this <code>Geometry</code> covers
             *         <code>g.</code>
             *
             * @see Geometry#contains
             * @see Geometry#coveredBy
             */
            covers(g: Geometry): boolean;

            /**
             * Tests whether this geometry is covered by the specified geometry.
             * <p>
             * The <code>coveredBy</code> predicate has the following equivalent
             * definitions:
             * <ul>
             * <li>Every point of this geometry is a point of the other geometry.
             * <li>The DE-9IM Intersection Matrix for the two geometries matches
             * <code>[T*F**F***]</code> or <code>[*TF**F***]</code> or
             * <code>[**FT*F***]</code> or <code>[**F*TF***]</code>
             * <li><code>g.covers(this)</code> (<code>coveredBy</code> is the converse
             * of <code>covers</code>)
             * </ul>
             * If either geometry is empty, the value of this predicate is <tt>false</tt>.
             * <p>
             * This predicate is similar to {@link #within}, but is more inclusive (i.e.
             * returns <tt>true</tt> for more cases).
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if this <code>Geometry</code> is
             *         covered by <code>g.</code>
             *
             * @see Geometry#within
             * @see Geometry#covers
             */
            coveredBy(g: Geometry): boolean;

            /**
             * Tests whether the elements in the DE-9IM {@link IntersectionMatrix} for the
             * two <code>Geometry</code>s match the elements in
             * <code>intersectionPattern</code>. The pattern is a 9-character string,
             * with symbols drawn from the following set:
             * <UL>
             * <LI> 0 (dimension 0)
             * <LI> 1 (dimension 1)
             * <LI> 2 (dimension 2)
             * <LI> T ( matches 0, 1 or 2)
             * <LI> F ( matches FALSE)
             * <LI> * ( matches any value)
             * </UL>
             * For more information on the DE-9IM, see the <i>OpenGIS Simple Features
             * Specification</i>.
             *
             * @param {Geometry}
             *          other the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @param {string}
             *          intersectionPattern the pattern against which to check the
             *          intersection matrix for the two <code>Geometry</code>s.
             * @return {boolean} <code>true</code> if the DE-9IM intersection matrix for
             *         the two <code>Geometry</code>s match
             *         <code>intersectionPattern.</code>
             * @see IntersectionMatrix
             */
            relate(g: Geometry, intersectionPattern: string): boolean;

            /**
             * Returns the DE-9IM {@link IntersectionMatrix} for the two
             * <code>Geometry</code>s.
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {IntersectionMatrix} an {@link IntersectionMatrix} describing the
             *         intersections of the interiors, boundaries and exteriors of the two
             *         <code>Geometry</code>s.
             */
            relate2(g: Geometry): any;

            /**
             * Tests whether this geometry is topologically equal to the argument geometry
             * as defined by the SFS <tt>equals</tt> predicate.
             * <p>
             * The SFS <code>equals</code> predicate has the following equivalent
             * definitions:
             * <ul>
             * <li>The two geometries have at least one point in common, and no point of
             * either geometry lies in the exterior of the other geometry.
             * <li>The DE-9IM Intersection Matrix for the two geometries matches the
             * pattern <tt>T*F**FFF*</tt>
             * <pre>
             * T*F
             * **F
             * FF*
             * </pre>
             *
             * </ul>
             * <b>Note</b> that this method computes <b>topologically equality</b>. For
             * structural equality, see {@link #equalsExact(Geometry)}.
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {boolean} <code>true</code> if the two <code>Geometry</code>s
             *         are topologically equal.
             *
             * @see #equalsExact(Geometry)
             */
            equalsTopo(g: Geometry): boolean;

            /**
             * Tests whether this geometry is structurally and numerically equal to a given
             * <tt>Object</tt>. If the argument <tt>Object</tt> is not a
             * <tt>Geometry</tt>, the result is <tt>false</tt>. Otherwise, the result
             * is computed using {@link #equalsExact(Geometry)}.
             * <p>
             * This method is provided to fulfill the Java contract for value-based object
             * equality. In conjunction with {@link #hashCode()} it provides semantics which
             * are most useful for using <tt>Geometry</tt>s as keys and values in Java
             * collections.
             * <p>
             * Note that to produce the expected result the input geometries should be in
             * normal form. It is the caller's responsibility to perform this where required
             * (using {@link Geometry#norm() or {@link #normalize()} as appropriate).
             *
             * @param {Object}
             *          o the Object to compare.
             * @return {boolean} true if this geometry is exactly equal to the argument.
             *
             * @see #equalsExact(Geometry)
             * @see #hashCode()
             * @see #norm()
             * @see #normalize()
             */
            equals(o: Object): boolean;

            /**
             * Computes a buffer area around this geometry having the given width and with a
             * specified accuracy of approximation for circular arcs, and using a specified
             * end cap style.
             * <p>
             * Mathematically-exact buffer area boundaries can contain circular arcs. To
             * represent these arcs using linear geometry they must be approximated with
             * line segments. The <code>quadrantSegments</code> argument allows
             * controlling the accuracy of the approximation by specifying the number of
             * line segments used to represent a quadrant of a circle
             * <p>
             * The end cap style specifies the buffer geometry that will be created at the
             * ends of linestrings. The styles provided are:
             * <ul>
             * <li><tt>BufferOp.CAP_ROUND</tt> - (default) a semi-circle
             * <li><tt>BufferOp.CAP_BUTT</tt> - a straight line perpendicular to the end
             * segment
             * <li><tt>BufferOp.CAP_SQUARE</tt> - a half-square
             * </ul>
             * <p>
             * The buffer operation always returns a polygonal result. The negative or
             * zero-distance buffer of lines and points is always an empty {@link Polygon}.
             * This is also the result for the buffers of degenerate (zero-area) polygons.
             *
             * @param {number}
             *          distance the width of the buffer (may be positive, negative or 0).
             * @param {number}
             *          quadrantSegments the number of line segments used to represent a
             *          quadrant of a circle.
             * @param {number}
             *          endCapStyle the end cap style to use.
             * @return {Geometry} a polygonal geometry representing the buffer region (which
             *         may be empty).
             *
             * @throws TopologyException
             *           if a robustness error occurs
             *
             * @see #buffer(double)
             * @see #buffer(double, int)
             * @see BufferOp
             */
            buffer(distance: number, quadrantSegments: number, endCapStyle: number): Geometry;

            /**
             * Computes the smallest convex <code>Polygon</code> that contains all the
             * points in the <code>Geometry</code>. This obviously applies only to
             * <code>Geometry</code> s which contain 3 or more points; the results for
             * degenerate cases are specified as follows: <TABLE>
             * <TR>
             * <TH> Number of <code>Point</code>s in argument <code>Geometry</code>
             * </TH>
             * <TH> <code>Geometry</code> class of result </TH>
             * </TR>
             * <TR>
             * <TD> 0 </TD>
             * <TD> empty <code>GeometryCollection</code> </TD>
             * </TR>
             * <TR>
             * <TD> 1 </TD>
             * <TD> <code>Point</code> </TD>
             * </TR>
             * <TR>
             * <TD> 2 </TD>
             * <TD> <code>LineString</code> </TD>
             * </TR>
             * <TR>
             * <TD> 3 or more </TD>
             * <TD> <code>Polygon</code> </TD>
             * </TR>
             * </TABLE>
             *
             * @return {Geometry} the minimum-area convex polygon containing this
             *         <code>Geometry</code>' s points.
             */
            convexHull(): Geometry;

            /**
             * Computes a <code>Geometry</code> representing the points shared by this
             * <code>Geometry</code> and <code>other</code>. {@link GeometryCollection}s
             * support intersection with homogeneous collection types, with the semantics
             * that the result is a {@link GeometryCollection} of the intersection of each
             * element of the target with the argument.
             *
             * @param {Geometry}
             *          other the <code>Geometry</code> with which to compute the
             *          intersection.
             * @return {Geometry} the points common to the two <code>Geometry</code>s.
             * @throws TopologyException
             *           if a robustness error occurs
             * @throws IllegalArgumentException
             *           if the argument is a non-empty GeometryCollection
             */
            intersection(other: Geometry): Geometry;

            /**
             * Computes a <code>Geometry</code> representing all the points in this
             * <code>Geometry</code> and <code>other</code>.
             *
             * Or without arguments:
             *
             * Computes the union of all the elements of this geometry. Heterogeneous
             * {@link GeometryCollection}s are fully supported.
             *
             * The result obeys the following contract:
             * <ul>
             * <li>Unioning a set of {@link LineString}s has the effect of fully noding
             * and dissolving the linework.
             * <li>Unioning a set of {@link Polygon}s will always return a
             * {@link Polygonal} geometry (unlike {link #union(Geometry)}, which may return
             * geometrys of lower dimension if a topology collapse occurred.
             * </ul>
             *
             * @param {Geometry}
             *          other the <code>Geometry</code> with which to compute the union.
             * @return {Geometry} a set combining the points of this <code>Geometry</code>
             *         and the points of <code>other.</code>
             * @throws TopologyException
             *           if a robustness error occurs
             * @throws IllegalArgumentException
             *           if either input is a non-empty GeometryCollection
             */
            union(other: Geometry): Geometry;

            /**
             * Computes a <code>Geometry</code> representing the points making up this
             * <code>Geometry</code> that do not make up <code>other</code>. This
             * method returns the closure of the resultant <code>Geometry</code>.
             *
             * @param {Geometry}
             *          other the <code>Geometry</code> with which to compute the
             *          difference.
             * @return {Geometry} the point set difference of this <code>Geometry</code>
             *         with <code>other.</code>
             * @throws TopologyException
             *           if a robustness error occurs
             * @throws IllegalArgumentException
             *           if either input is a non-empty GeometryCollection
             */
            difference(other: Geometry): Geometry;

            /**
             * Returns a set combining the points in this <code>Geometry</code> not in
             * <code>other</code>, and the points in <code>other</code> not in this
             * <code>Geometry</code>. This method returns the closure of the resultant
             * <code>Geometry</code>.
             *
             * @param {Geometry}
             *          other the <code>Geometry</code> with which to compute the
             *          symmetric difference.
             * @return {Geometry} the point set symmetric difference of this
             *         <code>Geometry</code> with <code>other.</code>
             * @throws TopologyException
             *           if a robustness error occurs
             * @throws IllegalArgumentException
             *           if either input is a non-empty GeometryCollection
             */
            symDifference(other: Geometry): Geometry;

            /**
             * Returns true if the two <code>Geometry</code>s are exactly equal, up to a
             * specified distance tolerance. Two Geometries are exactly equal within a
             * distance tolerance if and only if:
             * <ul>
             * <li>they have the same class
             * <li>they have the same values for their vertices, within the given tolerance
             * distance, in exactly the same order.
             * </ul>
             * If this and the other <code>Geometry</code>s are composites and any
             * children are not <code>Geometry</code>s, returns <code>false</code>.
             *
             * @param {Geometry}
             *          other the <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @param {number}
             *          tolerance distance at or below which two <code>Coordinate</code>s
             *          are considered equal.
             * @return {boolean}
             */
            equalsExact(other: Geometry, tolerance: number): boolean;

            /**
             * Tests whether two geometries are exactly equal in their normalized forms.
             * This is a convenience method which creates normalized versions of both
             * geometries before computing {@link #equalsExact(Geometry)}. This method is
             * relatively expensive to compute. For maximum performance, the client should
             * instead perform normalization itself at an appropriate point during
             * execution.
             *
             * @param {Geometry}
             *          g a Geometry.
             * @return {boolean} true if the input geometries are exactly equal in their
             *         normalized form.
             */
            equalsNorm(g: Geometry): boolean;

            /**
             * Performs an operation with or on this <code>Geometry</code> and its
             * subelement <code>Geometry</code>s (if any). Only GeometryCollections and
             * subclasses have subelement Geometry's.
             *
             * @param filter
             *          the filter to apply to this <code>Geometry</code> (and its
             *          children, if it is a <code>GeometryCollection</code>).
             */
            apply(filter: any): void;

            /**
             * Creates and returns a full copy of this {@link Geometry} object (including
             * all coordinates contained by it). Subclasses are responsible for overriding
             * this method and copying their internal data. Overrides should call this
             * method first.
             *
             * @return a clone of this instance.
             */
            clone(): Geometry;

            /**
             * Converts this <code>Geometry</code> to <b>normal form</b> (or <b>
             * canonical form</b> ). Normal form is a unique representation for
             * <code>Geometry</code> s. It can be used to test whether two
             * <code>Geometry</code>s are equal in a way that is independent of the
             * ordering of the coordinates within them. Normal form equality is a stronger
             * condition than topological equality, but weaker than pointwise equality. The
             * definitions for normal form use the standard lexicographical ordering for
             * coordinates. "Sorted in order of coordinates" means the obvious extension of
             * this ordering to sequences of coordinates.
             */
            normalize(): void;

            /**
             * Creates a new Geometry which is a normalized copy of this Geometry.
             *
             * @return a normalized copy of this geometry.
             * @see #normalize()
             */
            norm(): Geometry;

            /**
             * Returns whether this <code>Geometry</code> is greater than, equal to, or
             * less than another <code>Geometry</code>.
             * <P>
             *
             * If their classes are different, they are compared using the following
             * ordering:
             * <UL>
             * <LI> Point (lowest)
             * <LI> MultiPoint
             * <LI> LineString
             * <LI> LinearRing
             * <LI> MultiLineString
             * <LI> Polygon
             * <LI> MultiPolygon
             * <LI> GeometryCollection (highest)
             * </UL>
             * If the two <code>Geometry</code>s have the same class, their first
             * elements are compared. If those are the same, the second elements are
             * compared, etc.
             *
             * @param {Geometry}
             *          other a <code>Geometry</code> with which to compare this
             *          <code>Geometry.</code>
             * @return {number} a positive number, 0, or a negative number, depending on
             *         whether this object is greater than, equal to, or less than
             *         <code>o</code>, as defined in "Normal Form For Geometry" in the
             *         JTS Technical Specifications.
             */
            compareTo(o: Geometry): number;

            /**
             * Returns whether the two <code>Geometry</code>s are equal, from the point
             * of view of the <code>equalsExact</code> method. Called by
             * <code>equalsExact</code> . In general, two <code>Geometry</code> classes
             * are considered to be "equivalent" only if they are the same class. An
             * exception is <code>LineString</code> , which is considered to be equivalent
             * to its subclasses.
             *
             * @param {Geometry}
             *          other the <code>Geometry</code> with which to compare this
             *          <code>Geometry</code> for equality.
             * @return {boolean} <code>true</code> if the classes of the two
             *         <code>Geometry</code> s are considered to be equal by the
             *         <code>equalsExact</code> method.
             */
            isEquivalentClass(other: Geometry): boolean;

            /**
             * Throws an exception if <code>g</code>'s class is
             * <code>GeometryCollection</code> . (Its subclasses do not trigger an
             * exception).
             *
             * @param {Geometry}
             *          g the <code>Geometry</code> to check.
             * @throws Error
             *           if <code>g</code> is a <code>GeometryCollection</code> but not
             *           one of its subclasses
             */
            checkNotGeometryCollection(g: Geometry): void;

            /**
             *
             * @return {boolean} true if this is a GeometryCollection.
             */
            isGeometryCollection(): boolean;

            /**
             *
             * @return {boolean} true if this is a GeometryCollection but not subclass.
             */
            isGeometryCollectionBase(): boolean;

            /**
             * Returns the minimum and maximum x and y values in this <code>Geometry</code>,
             * or a null <code>Envelope</code> if this <code>Geometry</code> is empty.
             * Unlike <code>getEnvelopeInternal</code>, this method calculates the
             * <code>Envelope</code> each time it is called;
             * <code>getEnvelopeInternal</code> caches the result of this method.
             *
             * @return {Envelope} this <code>Geometry</code>s bounding box; if the
             *         <code>Geometry</code> is empty, <code>Envelope#isNull</code> will
             *         return <code>true.</code>
             */
            computeEnvelopeInternal(): Envelope;

            /**
             * Returns whether this <code>Geometry</code> is greater than, equal to, or
             * less than another <code>Geometry</code> having the same class.
             *
             * @param o
             *          a <code>Geometry</code> having the same class as this
             *          <code>Geometry.</code>
             * @return a positive number, 0, or a negative number, depending on whether this
             *         object is greater than, equal to, or less than <code>o</code>, as
             *         defined in "Normal Form For Geometry" in the JTS Technical
             *         Specifications.
             */
            compareToSameClass(o: Geometry): number;

            /**
             * Returns the first non-zero result of <code>compareTo</code> encountered as
             * the two <code>Collection</code>s are iterated over. If, by the time one of
             * the iterations is complete, no non-zero result has been encountered, returns
             * 0 if the other iteration is also complete. If <code>b</code> completes
             * before <code>a</code>, a positive number is returned; if a before b, a
             * negative number.
             *
             * @param {Array}
             *          a a <code>Collection</code> of <code>Comparable</code>s.
             * @param {Array}
             *          b a <code>Collection</code> of <code>Comparable</code>s.
             * @return {number} the first non-zero <code>compareTo</code> result, if any;
             *         otherwise, zero.
             */
            compare(a: Array<any>, b: Array<any>): number;

            /**
             * @param {jsts.geom.Coordinate}
             *          a first Coordinate to compare.
             * @param {jsts.geom.Coordinate}
             *          b second Coordinate to compare.
             * @param {number}
             *          tolerance tolerance when comparing.
             * @return {boolean} true if equal.
             */
            equal(a: Coordinate, b: Coordinate, tolerance: number): boolean;

            /**
             * Returns a WKT representation of this geometry.
             */
            toString(): string;
        }

        export class IntersectionMatrix {
            static matches(
                actualDimensionValue: number,
                requiredDimensionSymbol: string
            ): boolean;

            static matches(
                actualDimensionSymbols: string,
                requiredDimensionSymbols: string
            ): boolean;

            static isTrue(actualDimensionValue: number): boolean;

            isIntersects(): boolean;

            isCovers(): boolean;

            isCoveredBy(): boolean;

            set(dimensionSymbols: [string, string, string]): void;

            set(row: number, col: number, dimensionValue: number): void;

            isContains(): boolean;

            setAtLeast(dimensionSymbols: [string, string, string]): void;

            setAtLeast(row: number, col: number, dimensionValue: number): void;

            setAtLeastIfValid(
                row: number,
                col: number,
                minimumDimensionValue: number
            ): void;

            isWithin(): boolean;

            isTouches(
                dimensionOfGeometryA: number,
                dimensionOfGeometryB: number
            ): boolean;

            isOverlaps(
                dimensionOfGeometryA: number,
                dimensionOfGeometryB: number
            ): boolean;

            isEquals(
                dimensionOfGeometryA: number,
                dimensionOfGeometryB: number
            ): boolean;

            toString(): string;

            setAll(dimensionValue: number): void;

            get(row: number, column: number): number;

            transpose(): IntersectionMatrix;

            matches(
                requiredDimensionSymbols: [
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string
                ]
            ): boolean;

            add(im: IntersectionMatrix): void;

            isDisjoint(): boolean;

            isCrosses(
                dimensionOfGeometryA: number,
                dimensionOfGeometryB: number
            ): boolean;

            constructor(elements?: string[]);

            constructor(other?: IntersectionMatrix);
        }

        /**
         * Models an OGC SFS <code>LinearRing</code>. A LinearRing is a LineString
         * which is both closed and simple. In other words, the first and last
         * coordinate in the ring must be equal, and the interior of the ring must not
         * self-intersect. Either orientation of the ring is allowed.
         * <p>
         * A ring must have either 0 or 4 or more points. The first and last points
         * must be equal (in 2D). If these conditions are not met, the constructors
         * throw an {@link IllegalArgumentException}
         */
        export class LinearRing extends LineString {
        }

        export class LineString extends Geometry {
            /**
             * @constructor
             */
            constructor(points: Array<Coordinate>, factory?: any);

            /**
             * @return {jsts.geom.Coordinate} The n'th coordinate of this
             *         jsts.geom.LineString.
             * @param {int}
             *          n index.
             */
            getCoordinateN(n: number): Coordinate;

            /**
             * @return {jsts.geom.Point} The n'th point of this
             *         jsts.geom.LineString.
             * @param {int}
             *          n index.
             */
            getPointN(n: number): Point;

            /**
             * @return {jsts.geom.Point} The first point of this
             *         jsts.geom.LineString.
             */
            getStartPoint(): Point;

            /**
             * @return {jsts.geom.Point} The last point of this
             *         jsts.geom.LineString.
             */
            getEndPoint(): Point;

            /**
             * @return {Boolean} true if LineString is Closed.
             */
            isClosed(): boolean;

            /**
             * @return {Boolean} true if LineString is a Ring.
             */
            isRing(): boolean;
        }

        export class Point extends Geometry {
            /**
             * @constructor
             */
            constructor(coordinate: Coordinate, factory?: any);

            /**
             * @return {number} x-axis value of this Point.
             */
            getX(): number;

            /**
             * @return {number} y-axis value of this Point.
             */
            getY(): number;

            /**
             * @return {Point} Reversed point is a cloned point.
             */
            reverse(): Point;
        }

        /**
         * Represents a linear polygon, which may include holes. The shell and holes
         * of the polygon are represented by {@link LinearRing}s. In a valid polygon,
         * holes may touch the shell or other holes at a single point. However, no
         * sequence of touching holes may split the polygon into two pieces. The
         * orientation of the rings in the polygon does not matter.
         *
         * The shell and holes must conform to the assertions specified in the <A
         * HREF="http://www.opengis.org/techno/specs.htm">OpenGIS Simple Features
         * Specification for SQL</A>.
         */
        export class Polygon extends Geometry {
            /**
             * @constructor
             */
            constructor(shell: LinearRing, holes?: Array<LinearRing>, factory?: any);

            /**
             * Gets the exterior ring.
             *
             * @return {LinearRing} The exterior ring.
             */
            getExteriorRing(): LinearRing;

            /**
             * Gets the interior ring at the specified index.
             *
             * @param {number} n The interior ring index.
             *
             * @returns {LinearRing} The interior ring at the specified index.
             */
            getInteriorRingN(n: number): LinearRing;

            /**
             * Gets the number of interior rings.
             *
             * @return {number} The number of interior rings.
             */
            getNumInteriorRing(): number;
        }

        namespace util {
            export class AffineTransformation {
                static translationInstance(x: number, y: number): AffineTransformation;

                static shearInstance(
                    xShear: number,
                    yShear: number
                ): AffineTransformation;

                static reflectionInstance(
                    x0: number,
                    y0: number,
                    x1?: number,
                    y1?: number
                ): AffineTransformation;

                static rotationInstance(theta: number): AffineTransformation;

                static rotationInstance(
                    sinTheta: number,
                    cosTheta: number
                ): AffineTransformation;

                static rotationInstance(
                    theta: number,
                    x: number,
                    y: number
                ): AffineTransformation;

                static rotationInstance(
                    sinTheta: number,
                    cosTheta: number,
                    x: number,
                    y: number
                ): AffineTransformation;

                static scaleInstance(
                    xScale: number,
                    yScale: number,
                    x?: number,
                    y?: number
                ): AffineTransformation;

                setToReflectionBasic(
                    x0: number,
                    y0: number,
                    x1: number,
                    y1: number
                ): AffineTransformation;

                getInverse(): AffineTransformation;

                compose(trans: AffineTransformation): AffineTransformation;

                equals(obj: AffineTransformation): boolean;

                setToScale(xScale: number, yScale: number): AffineTransformation;

                isIdentity(): boolean;

                scale(xScale: number, yScale: number): AffineTransformation;

                setToIdentity(): AffineTransformation;

                isGeometryChanged(): boolean;

                setTransformation(trans: AffineTransformation): AffineTransformation;

                setTransformation(
                    m00: number,
                    m01: number,
                    m02: number,
                    m10: number,
                    m11: number,
                    m12: number
                ): AffineTransformation;

                setToRotation(theta: number): AffineTransformation;

                setToRotation(sinTheta: number, cosTheta: number): AffineTransformation;

                setToRotation(
                    theta: number,
                    x: number,
                    y: number
                ): AffineTransformation;

                setToRotation(
                    sinTheta: number,
                    cosTheta: number,
                    x: number,
                    y: number
                ): AffineTransformation;

                getMatrixEntries(): [number, number, number, number, number, number];

                filter(seq: CoordinateSequence, i: number): void;

                rotate(theta: number): AffineTransformation;

                rotate(sinTheta: number, cosTheta: number): AffineTransformation;

                rotate(theta: number, x: number, y: number): AffineTransformation;

                rotate(
                    sinTheta: number,
                    cosTheta: number,
                    x: number,
                    y: number
                ): AffineTransformation;

                getDeterminant(): number;

                composeBefore(trans: AffineTransformation): AffineTransformation;

                setToShear(xShear: number, yShear: number): AffineTransformation;

                isDone(): boolean;

                clone(): AffineTransformation;

                translate(x: number, y: number): AffineTransformation;

                setToReflection(x: number, y: number): AffineTransformation;

                setToReflection(
                    x0: number,
                    y0: number,
                    x1: number,
                    y1: number
                ): AffineTransformation;

                toString(): string;

                setToTranslation(dx: number, dy: number): AffineTransformation;

                shear(xShear: number, yShear: number): AffineTransformation;

                transform<T extends Geometry>(g: T): T;

                transform(src: Coordinate, dest: Coordinate): Coordinate;

                transform(seq: CoordinateSequence, i: number): void;

                reflect(
                    x0: number,
                    y0: number,
                    x1?: number,
                    y1?: number
                ): AffineTransformation;

                constructor(trans?: AffineTransformation);

                constructor(
                    m00: number,
                    m01: number,
                    m02: number,
                    m10: number,
                    m11: number,
                    m12: number
                );

                constructor(
                    src0: Coordinate,
                    src1: Coordinate,
                    src2: Coordinate,
                    dest0: Coordinate,
                    dest1: Coordinate,
                    dest2: Coordinate
                );
            }
        }

        /**
         * Represents a line segment defined by two {@link Coordinate}s. Provides
         * methods to compute various geometric properties and relationships of line
         * segments.
         * <p>
         * This class is designed to be easily mutable (to the extent of having its
         * contained points public). This supports a common pattern of reusing a single
         * LineSegment object as a way of computing segment properties on the segments
         * defined by arrays or lists of {@link Coordinate}s.
         *
         * @param {Coordinate}
         *          p0
         * @param {Coordinate}
         *          p1
         * @constructor
         */
        export class LineSegment {
            p0: Coordinate;
            p1: Coordinate;

            constructor(p0: Coordinate, p1: Coordinate);
            /**
             * Computes the midpoint of a segment
             *
             * @param {jsts.geom.Coordinate} p0
             * @param {jsts.geom.Coordinate} p1
             * @return {jsts.geom.Coordinate} the midpoint of the segment
             */
            static midPoint(p0: Coordinate, p1: Coordinate): Coordinate;

            /**
             * @param {number} i
             * @return {jsts.geom.Coordinate}
             */
            getCoordinate(): number;

            /**
             * Computes the length of the line segment.
             *
             * @return {number} the length of the line segment.
             */
            getLength(): number;

            /**
             * Tests whether the segment is horizontal.
             *
             * @return {boolean} <code>true</code> if the segment is horizontal.
             */
            isHorizontal(): boolean;

            /**
             * Tests whether the segment is vertical.
             *
             * @return {boolean} <code>true</code> if the segment is vertical.
             */
            isVertical(): boolean;

            /**
             * Determines the orientation of a LineSegment relative to this segment.
             * The concept of orientation is specified as follows:
             * Given two line segments A and L,
             * <ul>
             * <li>A is to the left of a segment L if A lies wholly in the
             * closed half-plane lying to the left of L
             * <li>A is to the right of a segment L if A lies wholly in the
             * closed half-plane lying to the right of L
             * <li>otherwise, A has indeterminate orientation relative to L. This
             * happens if A is collinear with L or if A crosses the line determined by L.
             * </ul>
             *
             * @param {jsts.geom.LineSegment} seg the LineSegment to compare
             *
             * @return 1 if <code>seg</code> is to the left of this segment<br />
             * -1 if <code>seg</code> is to the right of this segment<br />
             * 0 if <code>seg</code> has indeterminate orientation relative to this segment
             */
            orientationIndex1(seg: LineSegment): 1 | -1 | 0;

            /**
             * Determines the orientation index of a {@link Coordinate} relative to this segment.
             * The orientation index is as defined in {@link CGAlgorithms#computeOrientation}.
             *
             * @param {jsts.geom.Coordinate} p the coordinate to compare
             *
             * @return 1 (LEFT) if <code>p</code> is to the left of this segment
             * @return -1 (RIGHT) if <code>p</code> is to the right of this segment
             * @return 0 (COLLINEAR) if <code>p</code> is collinear with this segment
             *
             * @see CGAlgorithms#computeOrientation(Coordinate, Coordinate, Coordinate)
             */
            orientationIndex2(p: Coordinate): 1 | -1 | 0;

            /**
             * Reverses the direction of the line segment.
             */
            reverse(): void;

            /**
             * Puts the line segment into a normalized form.
             * This is useful for using line segments in maps and indexes when
             * topological equality rather than exact equality is desired.
             * A segment in normalized form has the first point smaller
             * than the second (according to the standard ordering on {@link Coordinate}).
             */
            normalize(): void;

            /**
             * Computes the angle that the vector defined by this segment
             * makes with the X-axis.
             * The angle will be in the range [ -PI, PI ] radians.
             *
             * @return {number} the angle this segment makes with the X-axis (in radians)
             */
            angle(): number;

            /**
             * Computes the midpoint of the segment
             *
             * @return {jsts.geom.Coordinate} the midpoint of the segment
             */
            midPoint(): Coordinate;

            /**
             * Computes the distance between this line segment and another segment.
             *
             * @param {jsts.geom.LineSegment | jsts.geom.Coordinate}
             * @return {number} the distance to the other segment
             */
            distance(geom: LineSegment | Coordinate): number;

            /**
             * Computes the {@link Coordinate} that lies a given
             * fraction along the line defined by this segment.
             * A fraction of <code>0.0</code> returns the start point of the segment;
             * a fraction of <code>1.0</code> returns the end point of the segment.
             * If the fraction is < 0.0 or > 1.0 the point returned
             * will lie before the start or beyond the end of the segment.
             *
             * @param {number} segmentLengthFraction the fraction of the segment length along the line
             * @return {jsts.geom.Coordinate} the point at that distance
             */
            pointAlong(segmentLengthFraction: number): Coordinate;

            /**
             * Computes the {@link Coordinate} that lies a given
             * fraction along the line defined by this segment and offset from
             * the segment by a given distance.
             * A fraction of <code>0.0</code> offsets from the start point of the segment;
             * a fraction of <code>1.0</code> offsets from the end point of the segment.
             * The computed point is offset to the left of the line if the offset distance is
             * positive, to the right if negative.
             *
             * @param {number} segmentLengthFraction the fraction of the segment length along the line
             * @param {number} offsetDistance the distance the point is offset from the segment
             *    (positive is to the left, negative is to the right)
             * @return {jsts.geom.Coordinate} the point at that distance and offset
             */
            pointAlongOffset(
                segmentLengthFraction: number,
                offsetDistance: number
            ): Coordinate;

            /**
             * Computes the Projection Factor for the projection of the point p onto this
             * LineSegment. The Projection Factor is the constant r by which the vector for
             * this segment must be multiplied to equal the vector for the projection of
             * <tt>p<//t> on the line
             * defined by this segment.
             * <p>
             * The projection factor returned will be in the range <tt>(-inf, +inf)</tt>.
             *
             * @param {Coordinate} p the point to compute the factor for.
             * @return {double} the projection factor for the point.
             */
            projectionFactor(p: Coordinate): number;

            /**
             * Computes the fraction of distance (in <tt>[0.0, 1.0]</tt>)
             * that the projection of a point occurs along this line segment.
             * If the point is beyond either ends of the line segment,
             * the closest fractional value (<tt>0.0</tt> or <tt>1.0</tt>) is returned.
             * <p>
             * Essentially, this is the {@link #projectionFactor} clamped to
             * the range <tt>[0.0, 1.0]</tt>.
             * If the segment has zero length, 1.0 is returned.
             *
             * @param {jsts.geom.Coordinate} inputPt the point
             * @return {number} the fraction along the line segment the projection of the point occurs
             */
            segmentFraction(inputPt: Coordinate): number;

            /**
             * Compute the projection of a point onto the line determined
             * by this line segment.
             * <p>
             * Note that the projected point
             * may lie outside the line segment.  If this is the case,
             * the projection factor will lie outside the range [0.0, 1.0].
             * @param {jsts.geom.Coordinate} p
             * @return {jsts.geom.Coordinate}
             */
            project1(p: Coordinate): Coordinate;

            /**
             * Project a line segment onto this line segment and return the resulting
             * line segment.  The returned line segment will be a subset of
             * the target line line segment.  This subset may be null, if
             * the segments are oriented in such a way that there is no projection.
             * <p>
             * Note that the returned line may have zero length (i.e. the same endpoints).
             * This can happen for instance if the lines are perpendicular to one another.
             *
             * @param {jsts.geom.LineSegment} seg the line segment to project
             * @return {jsts.geom.LineSegment} the projected line segment, or <code>null</code> if there is no overlap
             */
            project2(seg: LineSegment): LineSegment;

            /**
             * Computes the closest point on this line segment to another point.
             *
             * @param {Coordinate}
             *          p the point to find the closest point to.
             * @return {Coordinate} a Coordinate which is the closest point on the line
             *         segment to the point p.
             */
            closestPoint(p: Coordinate): Coordinate;

            /**
             * Computes the closest points on two line segments.
             *
             * @param {LineSegment}
             *          line the segment to find the closest point to.
             * @return {[]} a pair of Coordinates which are the closest points on the line
             *         segments.
             */
            closestPoints(line: LineSegment): [Coordinate, Coordinate];

            /**
             * Computes an intersection point between two line segments, if there is one.
             * There may be 0, 1 or many intersection points between two segments. If there
             * are 0, null is returned. If there is 1 or more, exactly one of them is
             * returned (chosen at the discretion of the algorithm). If more information is
             * required about the details of the intersection, the
             * {@link RobustLineIntersector} class should be used.
             *
             * @param {LineSegment}
             *          line a line segment.
             * @return {Coordinate} an intersection point, or <code>null</code> if there
             *         is none.
             *
             * @see RobustLineIntersector
             */
            intersection(line: LineSegment): Coordinate | null;

            setCoordinates(ls: LineSegment): void;

            setCoordinates2(p0: Coordinate, p1: Coordinate): void;

            /**
             * Computes the perpendicular distance between the (infinite) line defined
             * by this line segment and a point.
             *
             * @param {jsts.geom.Coordinate} p the coordinate
             * @return {number} the perpendicular distance between the defined line and the given point
             */
            distancePerpendicular(p: Coordinate): number;

            /**
             * Computes the intersection point of the lines of infinite extent defined
             * by two line segments (if there is one).
             * There may be 0, 1 or an infinite number of intersection points
             * between two lines.
             * If there is a unique intersection point, it is returned.
             * Otherwise, <tt>null</tt> is returned.
             * If more information is required about the details of the intersection,
             * the {@link RobustLineIntersector} class should be used.
             *
             * @param {jsts.geom.LineSegment} line a line segment defining an straight line with infinite extent
             * @return {jsts.geom.Coordinate} an intersection point,
             * or <code>null</code> if there is no point of intersection
             * or an infinite number of intersection points
             *
             * @see RobustLineIntersector
             */
            lineIntersection(line: LineSegment): Coordinate | null;

            /**
             * Creates a LineString with the same coordinates as this segment
             *
             * @param {jsts.geom.GeometryFactory} geomFactory the geometery factory to use
             * @return {jsts.geom.LineString} a LineString with the same geometry as this segment
             */
            toGeometry(geomFactory: GeometryFactory): LineString;

            /**
             *  Returns <code>true</code> if <code>other</code> has the same values for
             *  its points.
             *
             * @param {Object} o a <code>LineSegment</code> with which to do the comparison.
             * @return {boolean} <code>true</code> if <code>other</code> is a <code>LineSegment</code>
             *      with the same values for the x and y ordinates.
             */
            equals(o: LineSegment): boolean;

            /**
             *  Compares this object with the specified object for order.
             *  Uses the standard lexicographic ordering for the points in the LineSegment.
             *
             *@param {Object} o  the <code>LineSegment</code> with which this <code>LineSegment</code>
             *      is being compared
             *@return {number} a negative integer, zero, or a positive integer as this <code>LineSegment</code>
             *      is less than, equal to, or greater than the specified <code>LineSegment</code>
             */
            compareTo(o: LineSegment): number;

            /**
             *  Returns <code>true</code> if <code>other</code> is
             *  topologically equal to this LineSegment (e.g. irrespective
             *  of orientation).
             *
             * @param {jsts.geom.LineSegment} other  a <code>LineSegment</code> with which to do the comparison.
             * @return {boolean} <code>true</code> if <code>other</code> is a <code>LineSegment</code>
             *      with the same values for the x and y ordinates.
             */
            equalsTopo(other: LineSegment): boolean;

            toString(): string;
        }
    }

    namespace io {


        /**
         * OpenLayers 3 Geometry parser and writer
         */
        export class OL3Parser {
            constructor(geometryFactory?: jsts.geom.GeometryFactory);
            read(geometry: any /* ol.geom.Geometry */): jsts.geom.Geometry;
            write(geometry: jsts.geom.Geometry): any /* ol.geom.Geometry */;
        }

        export class GeoJSONReader {
            constructor();

            /**
             * Converts a GeoJSON to its <code>Geometry</code> representation.
             *
             * @param {Object} The GeoJSON representation of the Geometry.
             * @return {jsts.geom.Geometry}
             * geometry a <code>Geometry</code> to process.
             */
            read(geometry: Object): geom.Geometry;
        }
        export class GeoJSONWriter {
            /**
             * Writes the GeoJSON representation of a {@link Geometry}. The
             * The GeoJSON format is defined <A
             * HREF="http://geojson.org/geojson-spec.html">here</A>.
             * <p>
             * The <code>GeoJSONWriter</code> outputs coordinates rounded to the precision
             * model. Only the maximum number of decimal places necessary to represent the
             * ordinates to the required precision will be output.
             * <p>
             *
             * @see WKTReader
             * @constructor
             */
            constructor();

            /**
             * Converts a <code>Geometry</code> to its GeoJSON representation.
             *
             * @param {jsts.geom.Geometry}
             *          geometry a <code>Geometry</code> to process.
             * @return {Object} The GeoJSON representation of the Geometry.
             */
            write(geometry: geom.Geometry): Object;
        }

        /**
         * Converts a geometry in Well-Known Text format to a {@link Geometry}.
         * <p>
         * <code>WKTReader</code> supports extracting <code>Geometry</code> objects
         * from either {@link Reader}s or {@link String}s. This allows it to function
         * as a parser to read <code>Geometry</code> objects from text blocks embedded
         * in other data formats (e.g. XML).
         * <P>
         * <p>
         * A <code>WKTReader</code> is parameterized by a <code>GeometryFactory</code>,
         * to allow it to create <code>Geometry</code> objects of the appropriate
         * implementation. In particular, the <code>GeometryFactory</code> determines
         * the <code>PrecisionModel</code> and <code>SRID</code> that is used.
         * <P>
         */
        export class WKTReader {
            /**
             * @constructor
             */
            constructor(geometryFactory?: jsts.geom.GeometryFactory);

            /**
             * Reads a Well-Known Text representation of a {@link Geometry}
             *
             * @param {string}
             *          wkt a <Geometry Tagged Text> string (see the OpenGIS Simple Features
             *          Specification).
             * @return {jsts.geom.Geometry} a <code>Geometry</code> read from
             *         <code>string.</code>
             */
            read(wkt: string): geom.Geometry;

            reducePrecision(geometry: geom.Geometry): void;
        }

        export class WKTWriter {
            /**
             * @constructor
             */
            constructor(geometryFactory?: jsts.geom.GeometryFactory);

            /**
             * Converts a <code>Geometry</code> to its Well-known Text representation.
             *
             * @param {Geometry} geometry a <code>Geometry</code> to process.
             * @return {string} a <Geometry Tagged Text> string (see the OpenGIS Simple
             *         Features Specification).
             */
             write(geometry: geom.Geometry): string;
        }
    }

    namespace operation {
        import Geometry = jsts.geom.Geometry;
        import PrecisionModel = jsts.geom.PrecisionModel;
        import BoundaryNodeRule = jsts.algorithm.BoundaryNodeRule;

        export class GeometryGraphOperation {
            getArgGeometry(i: number): Geometry;

            setComputationPrecision(pm: PrecisionModel): void;

            constructor(g0: Geometry, g1?: Geometry);

            constructor(
                g0: Geometry,
                g1: Geometry,
                boundaryNodeRule: BoundaryNodeRule
            );
        }

        namespace relate {
            import Geometry = jsts.geom.Geometry;
            import IntersectionMatrix = jsts.geom.IntersectionMatrix;

            export class RelateOp extends GeometryGraphOperation {
                static covers(g1: Geometry, g2: Geometry): boolean;

                static intersects(g1: Geometry, g2: Geometry): boolean;

                static touches(g1: Geometry, g2: Geometry): boolean;

                static equalsTopo(g1: Geometry, g2: Geometry): boolean;

                static relate(
                    g1: Geometry,
                    g2: Geometry,
                    boundaryNodeRule?: BoundaryNodeRule
                ): IntersectionMatrix;

                static overlaps(g1: Geometry, g2: Geometry): boolean;

                static crosses(g1: Geometry, g2: Geometry): boolean;

                static contains(g1: Geometry, g2: Geometry): boolean;

                getIntersectionMatrix(): IntersectionMatrix;

                constructor(
                    g1: Geometry,
                    g2: Geometry,
                    boundaryNodeRule?: BoundaryNodeRule
                );
            }
        }
          
        namespace buffer {
            import Geometry = jsts.geom.Geometry;
            import PrecisionModel = jsts.geom.PrecisionModel;

            export class BufferParameters {
                /**
                 * Specifies a round line buffer end cap style.
                 *
                 * @type {int}
                 */
                static CAP_ROUND: number;
                /**
                 * Specifies a flat line buffer end cap style.
                 *
                 * @type {int}
                 */
                static CAP_FLAT: number;
                /**
                 * Specifies a square line buffer end cap style.
                 *
                 * @type {int}
                 */
                static CAP_SQUARE: number;
                /**
                 * Specifies a round join style.
                 *
                 * @type {int}
                 */
                static JOIN_ROUND: number;
                /**
                 * Specifies a mitre join style.
                 */
                static JOIN_MITRE: number;
                /**
                 * Specifies a bevel join style.
                 *
                 * @type {int}
                 */
                static JOIN_BEVEL: number;

                /**
                 * The default number of facets into which to divide a fillet of 90 degrees. A
                 * value of 8 gives less than 2% max error in the buffer distance. For a max
                 * error of < 1%, use QS = 12. For a max error of < 0.1%, use QS = 18.
                 *
                 * @type {int}
                 */
                static DEFAULT_QUADRANT_SEGMENTS: number;
                /**
                 * The default mitre limit Allows fairly pointy mitres.
                 *
                 * @type {double}
                 */
                static DEFAULT_MITRE_LIMIT: number;

                /**
                 * Contains the parameters which describe how a buffer should be constructed.
                 *
                 * @constructor
                 */
                constructor(
                    quadrantSegments?: number,
                    endCapStyle?: number,
                    joinStyle?: number,
                    mitreLimit?: number
                );

                /**
                 * Gets the number of quadrant segments which will be used
                 *
                 * @return the number of quadrant segments.
                 */
                getQuadrantSegments(): number;

                /**
                 * Sets the number of segments used to approximate a angle fillet
                 *
                 * @param {int}
                 *          quadrantSegments the number of segments in a fillet for a quadrant.
                 */
                setQuadrantSegments(quadrantSegments: number): void;

                /**
                 * Sets the number of line segments used to approximate an angle fillet.
                 * <ul>
                 * <li>If <tt>quadSegs</tt> >= 1, joins are round, and <tt>quadSegs</tt>
                 * indicates the number of segments to use to approximate a quarter-circle.
                 * <li>If <tt>quadSegs</tt> = 0, joins are bevelled (flat)
                 * <li>If <tt>quadSegs</tt> < 0, joins are mitred, and the value of qs
                 * indicates the mitre ration limit as
                 *
                 * <pre>
                 * mitreLimit= |
                 * <tt>
                 * quadSegs
                 * </tt>
                 * |
                 * </pre>
                 *
                 * </ul>
                 * For round joins, <tt>quadSegs</tt> determines the maximum error in the
                 * approximation to the true buffer curve. The default value of 8 gives less
                 * than 2% max error in the buffer distance. For a max error of < 1%, use QS =
                 * 12. For a max error of < 0.1%, use QS = 18. The error is always less than the
                 * buffer distance (in other words, the computed buffer curve is always inside
                 * the true curve).
                 *
                 * @param quadrantSegments
                 *          the number of segments in a fillet for a quadrant.
                 */
                setQuadrantSegments(quadSegs: number): void;

                /**
                 * Computes the maximum distance error due to a given level of approximation to
                 * a true arc.
                 *
                 * @param quadSegs
                 *          the number of segments used to approximate a quarter-circle.
                 * @return the error of approximation.
                 */
                bufferDistanceError(quadSegs: number): number;

                /**
                 * Gets the end cap style.
                 *
                 * @return the end cap style.
                 */
                getEndCapStyle(): number;

                /**
                 * Specifies the end cap style of the generated buffer. The styles supported are
                 * {@link #CAP_ROUND}, {@link #CAP_BUTT}, and {@link #CAP_SQUARE}. The
                 * default is CAP_ROUND.
                 *
                 * @param {int}
                 *          endCapStyle the end cap style to specify.
                 */
                setEndCapStyle(endCapStyle: number): void;

                /**
                 * Gets the join style
                 *
                 * @return the join style code.
                 */
                getJoinStyle(): number;

                /**
                 * Sets the join style for outside (reflex) corners between line segments.
                 * Allowable values are {@link JOIN_ROUND} (which is the default),
                 * {@link JOIN_MITRE} and {link JOIN_BEVEL}.
                 *
                 * @param joinStyle
                 *          the code for the join style.
                 */
                setJoinStyle(joinStyle: number): void;

                /**
                 * Gets the mitre ratio limit.
                 *
                 * @return the limit value.
                 */
                getMitreLimit(): number;

                /**
                 * Sets the limit on the mitre ratio used for very sharp corners. The mitre
                 * ratio is the ratio of the distance from the corner to the end of the mitred
                 * offset corner. When two line segments meet at a sharp angle, a miter join
                 * will extend far beyond the original geometry. (and in the extreme case will
                 * be infinitely far.) To prevent unreasonable geometry, the mitre limit allows
                 * controlling the maximum length of the join corner. Corners with a ratio which
                 * exceed the limit will be beveled.
                 *
                 * @param mitreLimit
                 *          the mitre ratio limit.
                 */
                setMitreLimit(mitreLimit: number): void;

                /**
                 * Sets whether the computed buffer should be single-sided. A single-sided
                 * buffer is constructed on only one side of each input line.
                 * <p>
                 * The side used is determined by the sign of the buffer distance:
                 * <ul>
                 * <li>a positive distance indicates the left-hand side
                 * <li>a negative distance indicates the right-hand side
                 * </ul>
                 * The single-sided buffer of point geometries is the same as the regular
                 * buffer.
                 * <p>
                 * The End Cap Style for single-sided buffers is always ignored, and forced to
                 * the equivalent of <tt>CAP_FLAT</tt>.
                 *
                 * @param isSingleSided
                 *          true if a single-sided buffer should be constructed.
                 */
                setSingleSided(isSingleSided: boolean): void;

                /**
                 * Tests whether the buffer is to be generated on a single side only.
                 *
                 * @return true if the generated buffer is to be single-sided.
                 */
                isSingleSided(): boolean;
            }

            /**
             * Computes the buffer of a geometry, for both positive and negative buffer
             * distances.
             *
             * In GIS, the positive buffer of a geometry is defined as
             * the Minkowski sum or difference of the geometry
             * with a circle of radius equal to the absolute value of the buffer distance.
             * In the CAD/CAM world buffers are known as </i>offset curves</i>.
             * In morphological analysis they are known as <i>erosion</i> and
             * <i>dilation</i>
             *
             * The buffer operation always returns a polygonal result.
             * The negative or zero-distance buffer of lines and points is always an empty
             * {@link Polygon}.
             *
             * Since true buffer curves may contain circular arcs,
             * computed buffer polygons can only be approximations to the true geometry.
             * The user can control the accuracy of the curve approximation by specifying
             * the number of linear segments used to approximate curves.
             *
             * The <b>end cap style</b> of a linear buffer may be specified. The
             * following end cap styles are supported:
             * <ul
             * <li>{@link #CAP_ROUND} - the usual round end caps
             * <li>{@link #CAP_BUTT} - end caps are truncated flat at the line ends
             * <li>{@link #CAP_SQUARE} - end caps are squared off at the buffer distance
             * beyond the line ends
             * </ul>
             *
             */
            export class BufferOp {
                /**
                 * A number of digits of precision which leaves some computational "headroom"
                 * for floating point operations.
                 *
                 * This value should be less than the decimal precision of double-precision
                 * values (16).
                 *
                 * @type {int}
                 */
                static MAX_PRECISION_DIGITS: number;

                /**
                 * Initializes a buffer computation for the given geometry with the given set of
                 * parameters.
                 *
                 * @param {Geometry}
                 *          g the geometry to buffer.
                 * @param {BufferParameters}
                 *          bufParams the buffer parameters to use.
                 * @constructor
                 */
                constructor(g: Geometry, bufParams: BufferParameters);

                /**
                 * Compute a scale factor to limit the precision of a given combination of
                 * Geometry and buffer distance. The scale factor is determined by a combination
                 * of the number of digits of precision in the (geometry + buffer distance),
                 * limited by the supplied <code>maxPrecisionDigits</code> value.
                 *
                 * @param {Geometry}
                 *          g the Geometry being buffered.
                 * @param {double}
                 *          distance the buffer distance.
                 * @param {int}
                 *          maxPrecisionDigits the max # of digits that should be allowed by the
                 *          precision determined by the computed scale factor.
                 *
                 * @return {double} a scale factor for the buffer computation.
                 */
                static precisionScaleFactor(
                    g: Geometry,
                    distance: number,
                    maxPrecisionDigits: number
                ): number;

                /**
                 * Computes the buffer of a geometry for a given buffer distance.
                 *
                 * @param {Geometry}
                 *          g the geometry to buffer.
                 * @param {double}
                 *          distance the buffer distance.
                 * @return {Geometry} the buffer of the input geometry.
                 */
                static bufferOp(g: Geometry, distance: number): Geometry;

                /**
                 * Computes the buffer for a geometry for a given buffer distance and accuracy
                 * of approximation.
                 *
                 * @param {Geometry}
                 *          g the geometry to buffer.
                 * @param {double}
                 *          distance the buffer distance.
                 * @param {BufferParameters}
                 *          params the buffer parameters to use.
                 * @return {Geometry} the buffer of the input geometry.
                 *
                 */
                static bufferOp2(
                    g: Geometry,
                    distance: number,
                    params: BufferParameters
                ): Geometry;

                /**
                 * Computes the buffer for a geometry for a given buffer distance and accuracy
                 * of approximation.
                 *
                 * @param {Geometry}
                 *          g the geometry to buffer.
                 * @param {double}
                 *          distance the buffer distance.
                 * @param {int}
                 *          quadrantSegments the number of segments used to approximate a
                 *          quarter circle.
                 * @return {Geometry} the buffer of the input geometry.
                 *
                 */
                static bufferOp3(
                    g: Geometry,
                    distance: number,
                    quadrantSegments: number
                ): Geometry;

                /**
                 * Computes the buffer for a geometry for a given buffer distance and accuracy
                 * of approximation.
                 *
                 * @param {Geometry}
                 *          g the geometry to buffer.
                 * @param {double}
                 *          distance the buffer distance.
                 * @param {int}
                 *          quadrantSegments the number of segments used to approximate a
                 *          quarter circle.
                 * @param {int}
                 *          endCapStyle the end cap style to use.
                 * @return {Geometry} the buffer of the input geometry.
                 *
                 */
                static bufferOp4(
                    g: Geometry,
                    distance: number,
                    quadrantSegments: number,
                    endCapStyle: number
                ): Geometry;

                /**
                 * Specifies the end cap style of the generated buffer. The styles supported are
                 * {@link #CAP_ROUND}, {@link #CAP_BUTT}, and {@link #CAP_SQUARE}. The
                 * default is CAP_ROUND.
                 *
                 * @param {int}
                 *          endCapStyle the end cap style to specify.
                 */
                setEndCapStyle(endCapStyle: number): void;

                /**
                 * Sets the number of segments used to approximate a angle fillet
                 *
                 * @param {int}
                 *          quadrantSegments the number of segments in a fillet for a quadrant.
                 */
                setQuadrantSegments(quadrantSegments: number): void;

                /**
                 * Returns the buffer computed for a geometry for a given buffer distance.
                 *
                 * @param {double}
                 *          dist the buffer distance.
                 * @return {Geometry} the buffer of the input geometry.
                 */
                getResultGeometry(dist: number): Geometry;

                /**
                 * @param {int}
                 *          precisionDigits
                 */
                bufferReducedPrecision2(precisionDigits: number): void;

                /**
                 * @param {PrecisionModel}
                 *          fixedPM
                 */
                bufferFixedPrecision(fixedPM: PrecisionModel): void;
            }
        }
    }
}

declare module "jsts" {
    export = jsts;
}
