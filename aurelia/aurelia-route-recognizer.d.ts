// Type definitions for aurelia-route-recognizer v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/route-recognizer/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-path.d.ts" />

declare module 'aurelia-route-recognizer' {
  import {
    buildQueryString,
    parseQueryString
  } from 'aurelia-path';
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
  
  // A State has a character specification and (`charSpec`) and a list of possible
  // subsequent states (`nextStates`).
  //
  // If a State is an accepting state, it will also have several additional
  // properties:
  //
  // * `regex`: A regular expression that is used to extract parameters from paths
  //   that reached this accepting state.
  // * `handlers`: Information on how to convert the list of captures into calls
  //   to registered handlers with the specified parameters.
  // * `types`: How many static, dynamic, or star segments in this route. Used to
  //   decide which route to use if multiple registered routes match a path.
  //
  // Currently, State is implemented naively by looping over `nextStates` and
  // comparing a character specification against a character. A more efficient
  // implementation would use a hash of keys pointing at one or more next states.
  export class State {
    constructor(charSpec: CharSpec);
    get(charSpec: CharSpec): State;
    put(charSpec: CharSpec): State;
    
    // Find a list of child states matching the next character
    match(ch: string): State[];
  }
  
  // A Segment represents a segment in the original route description.
  // Each Segment type provides an `eachChar` and `regex` method.
  //
  // The `eachChar` method invokes the callback with one or more character
  // specifications. A character specification consumes one or more input
  // characters.
  //
  // The `regex` method returns a regex fragment for the segment. If the
  // segment is a dynamic or star segment, the regex fragment also includes
  // a capture.
  //
  // A character specification contains:
  //
  // * `validChars`: a String with a list of all valid characters, or
  // * `invalidChars`: a String with a list of all invalid characters
  // * `repeat`: true if the character specification can repeat
  export class StaticSegment {
    constructor(string: string);
    eachChar(callback: ((spec: CharSpec) => void)): void;
    regex(): string;
    generate(): string;
  }
  export class DynamicSegment {
    constructor(name: string);
    eachChar(callback: ((spec: CharSpec) => void)): void;
    regex(): string;
    generate(params: Object, consumed: Object): string;
  }
  export class StarSegment {
    constructor(name: string);
    eachChar(callback: ((spec: CharSpec) => void)): void;
    regex(): string;
    generate(params: Object, consumed: Object): string;
  }
  export class EpsilonSegment {
    eachChar(): void;
    regex(): string;
    generate(): string;
  }
  
  /**
  * Class that parses route patterns and matches path strings.
  *
  * @class RouteRecognizer
  * @constructor
  */
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
      * @param route The route to add.
      */
    add(route: ConfigurableRoute | ConfigurableRoute[]): State;
    
    /**
      * Retrieve the handlers registered for the named route.
      *
      * @param name The name of the route.
      * @returns The handlers.
      */
    handlersFor(name: string): HandlerEntry[];
    
    /**
      * Check if this RouteRecognizer recognizes a named route.
      *
      * @param name The name of the route.
      * @returns True if the named route is recognized.
      */
    hasRoute(name: string): boolean;
    
    /**
      * Generate a path and query string from a route name and params object.
      *
      * @param name The name of the route.
      * @param params The route params to use when populating the pattern.
      *  Properties not required by the pattern will be appended to the query string.
      * @returns The generated absolute path and query string.
      */
    generate(name: string, params: Object): string;
    
    /**
      * Match a path string against registered route patterns.
      *
      * @param path The path to attempt to match.
      * @returns Array of objects containing `handler`, `params`, and
      *  `isDynanic` values for the matched route(s), or undefined if no match
      *  was found.
      */
    recognize(path: string): RecognizedRoute[];
  }
}