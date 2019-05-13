declare module 'ol/format/filter/Comparison' {

  import Filter from 'ol/format/filter/Filter';

  export default class Comparison extends Filter {
    constructor(tagName: string, propertyName: string);
  }

}
