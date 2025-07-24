import Feature from '../../SITNA/feature/Feature';

export default class Filter {

}

export interface filter {
    and(...conditions: Filter[]): Filter;
    bbox(geometryName: string, extent: number[], srsName?: string): Filter;
    between(propertyName: string, lowerBoundary: number, upperBoundary: number): Filter;
    contains(propertyName: string, geometry: Feature, srsName?: string): Filter;
    disjoint(propertyName: string, geometry: Feature, srsName?: string): Filter;
    dwithin(propertyName: string, geometry: Feature, distance: number, srsName?: string): Filter;
    equalTo(propertyName: string, expression: string | number, matchCase?: boolean): Filter;
    greaterThan(propertyName: string, expression: number): Filter;
    greaterThanOrEqualTo(propertyName: string, expression: number): Filter;
    intersects(propertyName: string, geometry: Feature, srsName?: string): Filter;
    isNull(propertyName: string): Filter;
    lessThan(propertyName: string, expression: number): Filter;
    lessThanOrEqualTo(propertyName: string, expression: number): Filter;
    like(propertyName: string, pattern: string, wildCard?: string, escapeChar?: string, matchCase?: boolean): Filter;
    not(condition: Filter): Filter;
    notEqualTo(propertyName: string, expression: string | number, matchCase?: boolean): Filter;
    or(...conditions: Filter[]): Filter;
    within(propertyName: string, geometry: Feature, srsName?: string): Filter;
}