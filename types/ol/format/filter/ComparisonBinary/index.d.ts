declare module 'ol/format/filter/ComparisonBinary' {

  import Comparison from 'ol/format/filter/Comparison';

  export default class ComparisonBinary extends Comparison {
    constructor(tagName: string, propertyName: string, expression: string | number, opt_matchCase?: boolean);
  }

}
