// Type definitions for AngularJS HTML5 Fullscreen v1.0.1
// Project: https://github.com/fabiobiondi/angular-fullscreen
// Definitions by: Julien Paroche <https://github.com/julienpa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/angular-fullscreen

/// <reference path="../angularjs/angular.d.ts" />

declare namespace angular.fullscreen {

  /**
   * Prefixing interface name with "I" is not recommended: http://www.typescriptlang.org/Handbook#writing-dts-files
   * However, we let it here to keep consistency with all the other Angular-related definitions
   */
  interface IFullscreen {
    // enable document fullscreen
    all(): void;

    // enable or disable the document fullscreen
    toggleAll(): void;

    // enable fullscreen to a specific element
    enable(element: Element|HTMLElement): void;

    // disable fullscreen
    cancel(): void;

    // return true if fullscreen is enabled, otherwise false
    isEnabled(): boolean;

    // return true if fullscreen API is supported by your browser
    isSupported(): boolean;
  }

}
