// Type definitions for aurelia-bootstrapper-webpack v1.0.0-beta.1.0.0 
// Project: https://github.com/aurelia/bootstrapper-webpack/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-polyfills.d.ts" />
/// <reference path="./aurelia-pal-browser.d.ts" />
/// <reference path="./aurelia-loader-webpack.d.ts" />

declare module 'aurelia-bootstrapper-webpack' {
  import 'aurelia-polyfills';
  import {
    initialize
  } from 'aurelia-pal-browser';
  import {
    WebpackLoader
  } from 'aurelia-loader-webpack';
  
  /**
   * Manually bootstraps an application.
   * @param configure A callback which passes an Aurelia instance to the developer to manually configure and start up the app.
   * @return A Promise that completes when configuration is done.
   */
  export function bootstrap(configure: Function): Promise<void>;
}