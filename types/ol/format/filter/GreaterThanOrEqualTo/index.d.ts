declare module 'ol/format/filter/GreaterThanOrEqualTo' {

  import ComparisonBinary from 'ol/format/filter/ComparisonBinary';

  export default class GreaterThanOrEqualTo extends ComparisonBinary {
    constructor(propertyName: string, expression: number);
  }

}
