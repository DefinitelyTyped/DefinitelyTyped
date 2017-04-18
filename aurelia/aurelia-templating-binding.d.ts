// Type definitions for aurelia-templating-binding v1.0.0-beta.1.2.1 
// Project: https://github.com/aurelia/templating-binding/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-templating.d.ts" />

/**
 * An implementation of the templating engine's BindingLanguage abstraction which
 * uses a pluggable command syntax.
 */
declare module 'aurelia-templating-binding' {
  import {BindingLanguage} from 'aurelia-templating';
  
  /**
   * Aurelia's pluggable command syntax.
   */
  export class SyntaxInterpreter {
  }
  
  /**
   * An implementation of Aurelia's binding language
   */
  export class TemplatingBindingLanguage extends BindingLanguage {
  }
}