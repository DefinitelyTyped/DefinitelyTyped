import * as angular from "angular";
import { ClipboardService } from "angular-clipboard";

interface TestScope extends ng.IScope {
    [index: string]: any;
}

const app = angular.module('testModule', ['angular-clipboard']);
app.controller('TestController', ($scope: TestScope, clipboard: ClipboardService) => {
    $scope['testCopy'] = () => {
        if (clipboard.supported) {
            clipboard.copyText('hiiiiiii');
        }
    };
});
