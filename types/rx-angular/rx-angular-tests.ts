// Type definitions for angularjs extensions to rxjs
// Project: http://reactivex.io/
// Definitions by: Mick Delaney <https://github.com/mickdelaney/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

var app = angular.module('testModule');

interface AppScope extends rx.angular.IRxScope {
}

app.controller('Ctrl', function ($scope: AppScope) {
        
    this.inputObservable = $scope.$toObservable('term')
                                 .safeApply($scope, (results: any) => {
                                      this.results = results;
                                  });
                  
});
