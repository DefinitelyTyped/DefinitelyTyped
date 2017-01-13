// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/analytics.html
     *
     * Deprecated.  Should require dojox/analytics modules directly rather than trying to access them through
     * this module.
     *
     */
    interface analytics {
    }
    namespace analytics {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/analytics/Urchin.html
         *
         * A Google-analytics helper, for post-onLoad inclusion of the tracker, and
         * dynamic tracking during long-lived page cycles.
         * A small class object will allows for lazy-loading the Google Analytics API
         * at any point during a page lifecycle. Most commonly, Google-Analytics is loaded
         * via a synchronous script tag in the body, which causes dojo.addOnLoad to
         * stall until the external API has been completely loaded. The Urchin helper
         * will load the API on the fly, and provide a convenient API to use, wrapping
         * Analytics for Ajaxy or single page applications.
         *
         * The class can be instantiated two ways: Programatically, by passing an
         * acct: parameter, or via Markup / dojoType and defining a djConfig
         * parameter urchin:
         *
         * IMPORTANT:
         * This module will not work simultaneously with the core dojox.analytics
         * package. If you need the ability to run Google Analytics AND your own local
         * analytics system, you MUST include dojox.analytics._base BEFORE dojox.analytics.Urchin
         *
         * @param args
         */
        class Urchin {
            constructor(args: any);
            /**
             * your GA urchin tracker account number. Overrides djConfig.urchin
             *
             */
            "acct": string;
            /**
             * Stub function to fire when urchin is complete
             * This function is executed when the tracker variable is
             * complete and initialized. The initial trackPageView (with
             * no arguments) is called here as well, so remeber to call
             * manually if overloading this method.
             *
             */
            GAonLoad(): void;
            /**
             * A public API attached to this widget instance, allowing you
             * Ajax-like notification of updates.
             *
             * @param url A location to tell the tracker to track, eg: "/my-ajaxy-endpoint"
             */
            trackPageView(url: String): void;
        }
        namespace plugins {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/analytics/plugins/consoleMessages.html
             *
             *
             */
            interface consoleMessages {
            }
        }

    }

}
declare module "dojox/analytics" {
    var exp: dojox.analytics
    export=exp;
}
declare module "dojox/analytics/Urchin" {
    var exp: dojox.analytics.Urchin
    export=exp;
}
declare module "dojox/analytics/plugins/consoleMessages" {
    var exp: dojox.analytics.plugins.consoleMessages
    export=exp;
}
