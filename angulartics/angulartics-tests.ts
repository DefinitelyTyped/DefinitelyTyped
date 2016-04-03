/// <reference path="angulartics.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

module Analytics {
    angular.module("angulartics.app", ["angulartics"])
        .config(["$analyticsProvider", ($analyticsProvider: Angulartics.IAnalyticsServiceProvider) => {
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

            $analyticsProvider.registerPageTrack((path: string, locationObj: ng.ILocationService) => {
                console.log("viewed " + path);
            });
        }]);
}

