// Type definitions for angular.component() for AngularJS 1.3+
// Project: https://github.com/toddmotto/angular-component
// Definitions by: Tushar Sonawane <https://github.com/tushkiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular {

  ///////////////////////////////////////////////////////////////////////////
  // Module
  // see http://docs.angularjs.org/api/angular.Module
  ///////////////////////////////////////////////////////////////////////////
  interface IModule {
    /**
     * Register a new component with the compiler.
     *
     * @param name Name of the component in camel-case (i.e. ngBind which will match as ng-bind)
     * @param options Component definition object.
     */
    component(name: string, options: IComponent): IModule;
  }

  ///////////////////////////////////////////////////////////////////////////
  // Component
  // see https://github.com/toddmotto/angular-component
  ///////////////////////////////////////////////////////////////////////////
  interface IComponent {
    bindings?: Object;
    controller?: string|Function;
    controllerAs?: string;
    isolate?: boolean;
    template?: string|Function;
    templateUrl?: string|Function;
    transclude?: boolean;
    restrict?: string;
    $canActivate?: Function;
    $routeConfig?: Object
  }

}
