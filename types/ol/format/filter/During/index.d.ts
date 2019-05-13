declare module 'ol/format/filter/During' {

  import Comparison from 'ol/format/filter/Comparison';

  export default class During extends Comparison {
    constructor(propertyName: string, begin: string, end: string);
  }

}
