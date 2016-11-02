/// <reference path="./index.d.ts" />
/// <reference path="../angular/index.d.ts" />

import IClipboardService from "angular-clipboard";
import * as angular from "angular";

const app = angular.module('testModule', ['angular-clipboard']);
app.controller('TestController', ($scope: ng.IScope, clipboard: angular.clipboard.IClipboardService) => {
    $scope['testCopy'] = () => {
        if (clipboard.supported) {
            clipboard.copyText('hiiiiiii');
        }
    };
});
