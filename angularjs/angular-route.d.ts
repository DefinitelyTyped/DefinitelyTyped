// Type definitions for Angular JS 1.2 (ngRoute module)
// Project: http://angularjs.org
// Definitions by: Jonathan Park
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angular.d.ts" />


///////////////////////////////////////////////////////////////////////////////
// ngRoute module (angular-route.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng.route {

    ///////////////////////////////////////////////////////////////////////////
    // RouteParamsService
    // see http://docs.angularjs.org/api/ngRoute.$routeParams
    ///////////////////////////////////////////////////////////////////////////
    interface IRouteParamsService {}

    ///////////////////////////////////////////////////////////////////////////
    // RouteService
    // see http://docs.angularjs.org/api/ngRoute.$route
    // see http://docs.angularjs.org/api/ngRoute.$routeProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IRouteService {
        reload(): void;
        routes: any;

        // May not always be available. For instance, current will not be available
        // to a controller that was not initialized as a result of a route maching.
        current?: ICurrentRoute;
    }

    // see http://docs.angularjs.org/api/ngRoute.$routeProvider#when for options explanations
    interface IRoute {
        controller?: any;
        controllerAs?: any;
        name?: string;
        template?: string;
        templateUrl?: any;
        resolve?: any;
        redirectTo?: any;
        reloadOnSearch?: boolean;
        caseInsensitiveMatch?: boolean;
    }

    // see http://docs.angularjs.org/api/ng.$route#current
    interface ICurrentRoute extends IRoute {
        locals: {
            $scope: IScope;
            $template: string;
        };

        params: any;
    }

    interface IRouteProvider extends IServiceProvider {
        otherwise(params: any): IRouteProvider;
        /**
         * This is a description
         *
         */
        when(path: string, route: IRoute): IRouteProvider;
    }
}
