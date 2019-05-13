declare module 'ol/format/filter/IsBetween' {

  import Comparison from 'ol/format/filter/Comparison';

  export default class IsBetween extends Comparison {
    constructor(propertyName: string, lowerBoundary: number, upperBoundary: number);
  }

}
