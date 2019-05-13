declare module 'ol/format/filter/Not' {

  import Filter from 'ol/format/filter/Filter';

  export default class Not extends Filter {
    constructor(condition: Filter);
  }

}
