declare module 'ol/format/filter/LessThanOrEqualTo' {

  import ComparisonBinary from 'ol/format/filter/ComparisonBinary';

  export default class LessThanOrEqualTo extends ComparisonBinary {
    constructor(propertyName: string, expression: number);
  }

}
