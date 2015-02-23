/// <reference path="angular-notify.d.ts" />

var myapp = angular.module("myapp", ["cgNotify"]);

myapp.controller("MyController", ["$scope", "cgNotify",
    function ($scope:angular.IScope, notify:angular.cgNotify.INotifyService) { // <-- Inject notify

        var notifyObj = notify("Your notification message"); // <-- Call notify with your message
        notifyObj.close();

        notify.config({
            startTop: 10,
            verticalSpacing: 15,
            duration: 10000,
            templateUrl: "angular-notify.html",
            position: "center",
            container: document.body
        });

        notify( {
            message: "My message",
            templateUrl: "my_template.html",
            position: "center",
            container: document.body,
            classes: "", // <-- CSS class names
            $scope: $scope
        }); // <-- Call notify with your message + option

        notify.closeAll();
    }
]);