/// <reference path="./index.d.ts" />
/// <reference path="../angular/index.d.ts" />

import ClipboardService from "angular-clipboard";
import * as angular from "angular";

const app = angular.module('testModule', ['angular-clipboard']);
app.controller('TestController', ($scope: ng.IScope, clipboard: angular.clipboard.ClipboardService) => {
    $scope['testCopy'] = () => {
        if (clipboard.supported) {
            clipboard.copyText('hiiiiiii');
        }
    };
});
