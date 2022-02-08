import { Extent } from '../extent';
import Geometry from '../geom/Geometry';
import And from './filter/And';
import Bbox from './filter/Bbox';
import Contains from './filter/Contains';
import Disjoint from './filter/Disjoint';
import During from './filter/During';
import DWithin from './filter/DWithin';
import EqualTo from './filter/EqualTo';
import Filter from './filter/Filter';
import GreaterThan from './filter/GreaterThan';
import GreaterThanOrEqualTo from './filter/GreaterThanOrEqualTo';
import Intersects from './filter/Intersects';
import IsBetween from './filter/IsBetween';
import IsLike from './filter/IsLike';
import IsNull from './filter/IsNull';
import LessThan from './filter/LessThan';
import LessThanOrEqualTo from './filter/LessThanOrEqualTo';
import Not from './filter/Not';
import NotEqualTo from './filter/NotEqualTo';
import Or from './filter/Or';
import Within from './filter/Within';

/**
 * Create a logical <And> operator between two or more filter conditions.
 */
export function and(...conditions: Filter[]): And;
/**
 * Create a <BBOX> operator to test whether a geometry-valued property
 * intersects a fixed bounding box
 */
export function bbox(geometryName: string, extent: Extent, opt_srsName?: string): Bbox;
/**
 * Creates a <PropertyIsBetween> comparison operator to test whether an expression
 * value lies within a range given by a lower and upper bound (inclusive).
 */
export function between(propertyName: string, lowerBoundary: number, upperBoundary: number): IsBetween;
/**
 * Create a <Contains> operator to test whether a geometry-valued property
 * contains a given geometry.
 */
export function contains(geometryName: string, geometry: Geometry, opt_srsName?: string): Contains;
/**
 * Create a <Disjoint> operator to test whether a geometry-valued property
 * is disjoint to a given geometry.
 */
export function disjoint(geometryName: string, geometry: Geometry, opt_srsName?: string): Disjoint;
/**
 * Create a <During> temporal operator.
 */
export function during(propertyName: string, begin: string, end: string): During;
/**
 * Create a <DWithin> operator to test whether a geometry-valued property
 * is within a distance to a given geometry.
 */
export function dwithin(
    geometryName: string,
    geometry: Geometry,
    distance: number,
    unit: string,
    opt_srsName?: string,
): DWithin;
/**
 * Creates a <PropertyIsEqualTo> comparison operator.
 */
export function equalTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): EqualTo;
/**
 * Creates a <PropertyIsGreaterThan> comparison operator.
 */
export function greaterThan(propertyName: string, expression: number): GreaterThan;
/**
 * Creates a <PropertyIsGreaterThanOrEqualTo> comparison operator.
 */
export function greaterThanOrEqualTo(propertyName: string, expression: number): GreaterThanOrEqualTo;
/**
 * Create a <Intersects> operator to test whether a geometry-valued property
 * intersects a given geometry.
 */
export function intersects(geometryName: string, geometry: Geometry, opt_srsName?: string): Intersects;
/**
 * Creates a <PropertyIsNull> comparison operator to test whether a property value
 * is null.
 */
export function isNull(propertyName: string): IsNull;
/**
 * Creates a <PropertyIsLessThan> comparison operator.
 */
export function lessThan(propertyName: string, expression: number): LessThan;
/**
 * Creates a <PropertyIsLessThanOrEqualTo> comparison operator.
 */
export function lessThanOrEqualTo(propertyName: string, expression: number): LessThanOrEqualTo;
/**
 * Represents a <PropertyIsLike> comparison operator that matches a string property
 * value against a text pattern.
 */
export function like(
    propertyName: string,
    pattern: string,
    opt_wildCard?: string,
    opt_singleChar?: string,
    opt_escapeChar?: string,
    opt_matchCase?: boolean,
): IsLike;
/**
 * Represents a logical <Not> operator for a filter condition.
 */
export function not(condition: Filter): Not;
/**
 * Creates a <PropertyIsNotEqualTo> comparison operator.
 */
export function notEqualTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): NotEqualTo;
/**
 * Create a logical <Or> operator between two or more filter conditions.
 */
export function or(...conditions: Filter[]): Or;
/**
 * Create a <Within> operator to test whether a geometry-valued property
 * is within a given geometry.
 */
export function within(geometryName: string, geometry: Geometry, opt_srsName?: string): Within;
