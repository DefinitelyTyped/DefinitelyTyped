import { Extent } from '../extent';
import Geometry from '../geom/Geometry';
import And from './filter/And';
import Bbox from './filter/Bbox';
import Contains from './filter/Contains';
import During from './filter/During';
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

export function and(...conditions: Filter[]): And;
export function bbox(geometryName: string, extent: Extent, opt_srsName?: string): Bbox;
export function between(propertyName: string, lowerBoundary: number, upperBoundary: number): IsBetween;
export function contains(geometryName: string, geometry: Geometry, opt_srsName?: string): Contains;
export function during(propertyName: string, begin: string, end: string): During;
export function equalTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): EqualTo;
export function greaterThan(propertyName: string, expression: number): GreaterThan;
export function greaterThanOrEqualTo(propertyName: string, expression: number): GreaterThanOrEqualTo;
export function intersects(geometryName: string, geometry: Geometry, opt_srsName?: string): Intersects;
export function isNull(propertyName: string): IsNull;
export function lessThan(propertyName: string, expression: number): LessThan;
export function lessThanOrEqualTo(propertyName: string, expression: number): LessThanOrEqualTo;
export function like(
    propertyName: string,
    pattern: string,
    opt_wildCard?: string,
    opt_singleChar?: string,
    opt_escapeChar?: string,
    opt_matchCase?: boolean,
): IsLike;
export function not(condition: Filter): Not;
export function notEqualTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): NotEqualTo;
export function or(...conditions: Filter[]): Or;
export function within(geometryName: string, geometry: Geometry, opt_srsName?: string): Within;
