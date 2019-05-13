declare module 'ol/format/filter/LogicalNary' {

  import Filter from 'ol/format/filter/Filter';

  export default class LogicalNary extends Filter {
    constructor(tagName: string, conditions: Filter[]);
  }

}
