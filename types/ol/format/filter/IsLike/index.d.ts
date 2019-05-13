declare module 'ol/format/filter/IsLike' {

  import Comparison from 'ol/format/filter/Comparison';

  export default class IsLike extends Comparison {
    constructor(propertyName: string, pattern: string, opt_wildCard?: string, opt_singleChar?: string, opt_escapeChar?: string, opt_matchCase?: boolean);
  }

}
