// Type definitions for aurelia-pal-browser v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/pal-browser/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-pal.d.ts" />

declare module 'aurelia-pal-browser' {
  import {
    initializePAL
  } from 'aurelia-pal';
  
  /**
  * Initializes the PAL with the Browser-targeted implementation.
  */
  export function initialize(): void;
}