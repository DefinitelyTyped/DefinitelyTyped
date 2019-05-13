declare module 'ol/format/filter/EqualTo' {

  import ComparisonBinary from 'ol/format/filter/ComparisonBinary';

  export default class EqualTo extends ComparisonBinary {
    constructor(propertyName: string, expression: string | number, opt_matchCase?: boolean);
  }

}
