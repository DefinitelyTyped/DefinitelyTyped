import Comparison from './Comparison';

export default class IsBetween extends Comparison {
    constructor(propertyName: string, lowerBoundary: number, upperBoundary: number);
}
