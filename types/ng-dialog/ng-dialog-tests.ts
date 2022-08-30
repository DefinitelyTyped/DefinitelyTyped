import * as angular from 'angular';

var app = angular.module('testModule', ['ngDialog']);

class DialogTestController {

    constructor(ngDialog: angular.dialog.IDialogService, scope: ng.IScope) {

        ngDialog.close("login-popup", "bye");
        ngDialog.closeAll("bye");

        var defaults = ngDialog.getDefaults();

        var dialogs = ngDialog.getOpenDialogs();

        ngDialog.isOpen("bye");

        var loginDialog = ngDialog.open({
            template: "login.html",
            className: "default flat-ui",
            closeByEscape: false,
            data: "string",
            disableAnimation: false,
            name: "login-popup",
            scope
        });

        loginDialog.closePromise.then((result) => {
            var val: any = result.value;
        });

        if (loginDialog.id === "login-popup") {
            loginDialog.close("closing");
        }

        var deleteConfirm = ngDialog.openConfirm({
            template: "confirm.html"
        });
    }
}

class LoginDialogController {

    constructor($scope:angular.dialog.IDialogScope) {

        $scope.closeThisDialog("bye");
    }
}

app.controller('TestController', DialogTestController);

app.config((ngDialogProvider: angular.dialog.IDialogProvider) => {

    ngDialogProvider.setDefaults({
        className: "flat-ui"
    })

});
