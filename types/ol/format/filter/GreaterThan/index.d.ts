declare module 'ol/format/filter/GreaterThan' {

  import ComparisonBinary from 'ol/format/filter/ComparisonBinary';

  export default class GreaterThan extends ComparisonBinary {
    constructor(propertyName: string, expression: number);
  }

}
