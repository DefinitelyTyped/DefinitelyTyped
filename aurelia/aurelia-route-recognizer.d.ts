declare module 'aurelia-route-recognizer' {
  //import core from 'core-js';
  export interface RouteHandler {
    name: string;
  }
  export interface ConfigurableRoute {
    path: string;
    handler: RouteHandler;
  }
  export interface HandlerEntry {
    handler: RouteHandler;
    names: string[];
  }
  export interface RecognizedRoute {
    handler: RouteHandler;
    params: Object;
    isDynamic: boolean;
  }
  export interface CharSpec {
    invalidChars?: string;
    validChars?: string;
    repeat?: boolean;
  }

  //  A Segment represents a segment in the original route description.
  //  Each Segment type provides an `eachChar` and `regex` method.
  //
  //  The `eachChar` method invokes the callback with one or more character
  //  specifications. A character specification consumes one or more input
  //  characters.
  //
  //  The `regex` method returns a regex fragment for the segment. If the
  //  segment is a dynamic or star segment, the regex fragment also includes
  //  a capture.
  //
  //  A character specification contains:
  //
  //  * `validChars`: a String with a list of all valid characters, or
  //  * `invalidChars`: a String with a list of all invalid characters
  //  * `repeat`: true if the character specification can repeat
  export class StaticSegment {
    constructor(string: string);
    eachChar(callback: (spec: CharSpec) => void): any;
    regex(): string;
    generate(params: Object, consumed: Object): string;
  }
  export class DynamicSegment {
    constructor(name: string);
    eachChar(callback: (spec: CharSpec) => void): any;
    regex(): string;
    generate(params: Object, consumed: Object): string;
  }
  export class StarSegment {
    constructor(name: string);
    eachChar(callback: (spec: CharSpec) => void): any;
    regex(): string;
    generate(params: Object, consumed: Object): string;
  }
  export class EpsilonSegment {
    eachChar(callback: (spec: CharSpec) => void): any;
    regex(): string;
    generate(params: Object, consumed: Object): string;
  }

  //  A State has a character specification and (`charSpec`) and a list of possible
  //  subsequent states (`nextStates`).
  //
  //  If a State is an accepting state, it will also have several additional
  //  properties:
  //
  //  * `regex`: A regular expression that is used to extract parameters from paths
  //    that reached this accepting state.
  //  * `handlers`: Information on how to convert the list of captures into calls
  //    to registered handlers with the specified parameters.
  //  * `types`: How many static, dynamic, or star segments in this route. Used to
  //    decide which route to use if multiple registered routes match a path.
  //
  //  Currently, State is implemented naively by looping over `nextStates` and
  //  comparing a character specification against a character. A more efficient
  //  implementation would use a hash of keys pointing at one or more next states.
  export class State {
    constructor(charSpec: CharSpec);
    get(charSpec: CharSpec): State;
    put(charSpec: CharSpec): State;

    //  Find a list of child states matching the next character
    match(ch: string): State[];
  }

  /**
   * Class that parses route patterns and matches path strings.
   *
   * @class RouteRecognizer
   * @constructor
   */
  export class RouteRecognizer {
    constructor();

    /**
       * Parse a route pattern and add it to the collection of recognized routes.
       *
       * @method add
       * @param {Object} route The route to add.
       */
    add(route: ConfigurableRoute | ConfigurableRoute[]): State;

    /**
       * Retrieve the handlers registered for the named route.
       *
       * @method handlersFor
       * @param {String} name The name of the route.
       * @return {Array} The handlers.
       */
    handlersFor(name: string): HandlerEntry[];

    /**
       * Check if this RouteRecognizer recognizes a named route.
       *
       * @method hasRoute
       * @param {String} name The name of the route.
       * @return {Boolean} True if the named route is recognized.
       */
    hasRoute(name: string): boolean;

    /**
       * Generate a path and query string from a route name and params object.
       *
       * @method generate
       * @param {String} name The name of the route.
       * @param {Object} params The route params to use when populating the pattern.
       *  Properties not required by the pattern will be appended to the query string.
       * @return {String} The generated absolute path and query string.
       */
    generate(name: string, params: Object): string;

    /**
       * Generate a query string from an object.
       *
       * @method generateQueryString
       * @param {Object} params Object containing the keys and values to be used.
       * @return {String} The generated query string, including leading '?'.
       */
    generateQueryString(params: Object): string;

    /**
       * Parse a query string.
       *
       * @method parseQueryString
       * @param {String} The query string to parse.
       * @return {Object} Object with keys and values mapped from the query string.
       */
    parseQueryString(queryString: string): Object;

    /**
       * Match a path string against registered route patterns.
       *
       * @method recognize
       * @param {String} path The path to attempt to match.
       * @return {Array} Array of objects containing `handler`, `params`, and
       *  `isDynanic` values for the matched route(s), or undefined if no match
       *  was found.
       */
    recognize(path: string): RecognizedRoute[];
  }
  class RecognizeResults {
    constructor(queryParams: Object);
  }
}
