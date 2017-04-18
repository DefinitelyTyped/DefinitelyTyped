// Type definitions for aurelia-bootstrapper v1.0.0-beta.1.2.0
// Project: https://github.com/aurelia/bootstrapper/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-pal.d.ts" />
/// <reference path="./aurelia-pal-browser.d.ts" />

declare module 'aurelia-bootstrapper' {
  import 'aurelia-polyfills';
  import {
    PLATFORM
  } from 'aurelia-pal';
  import {
    initialize
  } from 'aurelia-pal-browser';
  
  /**
   * Manually bootstraps an application.
   * @param configure A callback which passes an Aurelia instance to the developer to manually configure and start up the app.
   * @return A Promise that completes when configuration is done.
   */
  export function bootstrap(configure: Function): Promise<void>;
}