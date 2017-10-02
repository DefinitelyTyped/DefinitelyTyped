

var myapp = angular.module("myapp", ["notifications"]);

myapp.controller("MyController", ["$scope", "notifications",
    function ($scope:ng.IScope, notifications:angular.notifications.INotificationFactory) { // <-- Inject notifications

        var userData = {'some': 'data', 'optional': true};
        notifications.info("Something happened", "here is the content of what happened", userData);

    }
]);
