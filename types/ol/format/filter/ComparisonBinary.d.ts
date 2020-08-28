import Comparison from './Comparison';

export default abstract class ComparisonBinary extends Comparison {
    constructor(tagName: string, propertyName: string, expression: string | number, opt_matchCase?: boolean);
}
