/// <reference path="angulartics.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

module Analytics {
    angular.module("angulartics.app", ["angulartics"])
        .config(["$analyticsProvider", ($analyticsProvider:angulartics.IAnalyticsServiceProvider) => {
            angulartics.waitForVendorApi("location", 1000, (message: string) => {
                console.log(message);
            });

            $analyticsProvider.virtualPageviews(false);
            $analyticsProvider.firstPageview(false);
            $analyticsProvider.withAutoBase(true);
            $analyticsProvider.developerMode(true);

            $analyticsProvider.registerEventTrack((action: string, properties?: any) => {
                console.log(action);
            });

            $analyticsProvider.registerPageTrack((path:string, locationObj:angular.ILocationService) => {
                console.log("viewed " + path);
            });
            
            $analyticsProvider.settings.pageTracking.basePath = "/my/base/path";        
        }]);
}
