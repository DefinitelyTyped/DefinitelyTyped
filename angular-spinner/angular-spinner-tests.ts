/// <reference types="angular" />

var myApp = angular.module('testModule');

namespace AngularSpinnerTest {
    var app = angular.module("angularSpinnerTest", ["angular-spinner"]);

    app.config(['usSpinnerService', function(usSpinnerService: ISpinnerService) {
        usSpinnerService.spin('key1');
        usSpinnerService.stop('key2');
    }]);
}
