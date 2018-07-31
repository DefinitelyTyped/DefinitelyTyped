

(function() {
    'use strict';
    var app = angular.module("Demo", ["httpi"]);
    // -------------------------------------------------- //
    // -------------------------------------------------- //
    // I control the main demo.
    app.controller(
        "DemoController",
        function($scope: ng.IScope, httpi: Httpi.HttpiFactory) {

            console.warn("None of the API endpoints exist - they will all throw 404.");
            // NOTE: The (.|.) notation will be stripped out automatically; it's only
            // here to improve readability of the "happy paths" for interpolation
            // labels. The following urls are pre-processed to be identical:
            // --
            // api/friends/( :listCommand | :id/:itemCommand )
            // api/friends/:listCommand:id/:itemCommand
            var resource = httpi.resource("api/friends/( :listCommand | :id/:itemCommand )");
            // Clear list of friends - matching listCommand.
            resource.post({
                data: {
                    listCommand: "reset"
                }
            });
            // Create a new friend - no matching URL parameters.
            resource.post({
                data: {
                    name: "Tricia"
                }
            });
            // Get a given friend - ID matching.
            resource.get({
                data: {
                    id: 4
                }
            });
            // Make best friend - ID, itemCommand matching.
            resource.post({
                data: {
                    id: 4,
                    itemCommand: "make-best-friend"
                }
            });
            // Get gets friends - no matching URL parameters.
            resource.get({
                params: {
                    limit: "besties"
                }
            });
            // Get a friend as a JSONP request.
            // --
            // NOTE: The "resource" will auto-inject the "JSON_CALLBACK" marker that
            // AngularJS will automatically replace with an internal callback name.
            resource.jsonp({
                data: {
                    id: 43
                }
            });
        }
    );

})();