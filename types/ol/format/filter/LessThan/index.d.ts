declare module 'ol/format/filter/LessThan' {

  import ComparisonBinary from 'ol/format/filter/ComparisonBinary';

  export default class LessThan extends ComparisonBinary {
    constructor(propertyName: string, expression: number);
  }

}
