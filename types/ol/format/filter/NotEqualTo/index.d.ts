declare module 'ol/format/filter/NotEqualTo' {

  import ComparisonBinary from 'ol/format/filter/ComparisonBinary';

  export default class NotEqualTo extends ComparisonBinary {
    constructor(propertyName: string, expression: string | number, opt_matchCase?: boolean);
  }

}
