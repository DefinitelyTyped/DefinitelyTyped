import * as angular from "angular";
import {ClipboardService} from "angular-clipboard";

const app = angular.module('testModule', ['angular-clipboard']);
app.controller('TestController', ($scope: ng.IScope, clipboard: ClipboardService) => {
    $scope['testCopy'] = () => {
        if (clipboard.supported) {
            clipboard.copyText('hiiiiiii');
        }
    };
});
