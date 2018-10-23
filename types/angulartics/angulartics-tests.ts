import * as angular from 'angular';
import * as angulartics from 'angulartics';

namespace Analytics {
    angular.module("angulartics.app", ["angulartics"])
        .config(["$analyticsProvider", ($analyticsProvider:angulartics.IAnalyticsServiceProvider) => {
            angulartics.waitForVendorApi("location", 1000, (message: string) => {
                console.log(message);
            });

            $analyticsProvider.virtualPageviews(false);
            $analyticsProvider.firstPageview(false);
            $analyticsProvider.withAutoBase(true);
            $analyticsProvider.developerMode(true);

            $analyticsProvider.trackExceptions(true);
            $analyticsProvider.trackRoutes(true);
            $analyticsProvider.trackStates(true);

            $analyticsProvider.registerEventTrack((action: string, properties?: any) => {
                console.log(action);
            });

            $analyticsProvider.registerPageTrack((path:string, locationObj:angular.ILocationService) => {
                console.log("viewed " + path);
            });

            $analyticsProvider.settings.pageTracking.basePath = "/my/base/path";
        }])
        .run(($analytics: angulartics.IAnalyticsService) => {
            let isOptedOut = $analytics.getOptOut();

            $analytics.eventTrack('eventName', { label: 'test' });
            $analytics.pageTrack('/');
            $analytics.setAlias('alias');
            $analytics.setOptOut(false);
            $analytics.setUsername('username');
            $analytics.setUserProperties({ id: 1 });
            $analytics.setSuperProperties({ role: 'admin' });
        });
}

