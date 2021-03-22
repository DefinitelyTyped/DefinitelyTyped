import ComparisonBinary from './ComparisonBinary';

export default class NotEqualTo extends ComparisonBinary {
    constructor(propertyName: string, expression: string | number, opt_matchCase?: boolean);
}
