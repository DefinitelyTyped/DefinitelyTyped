declare module 'ol/format/filter/IsNull' {

  import Comparison from 'ol/format/filter/Comparison';

  export default class IsNull extends Comparison {
    constructor(propertyName: string);
  }

}
