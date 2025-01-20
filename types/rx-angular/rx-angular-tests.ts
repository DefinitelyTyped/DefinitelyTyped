var app = angular.module("testModule");

interface AppScope extends rx.angular.IRxScope {
}

app.controller("Ctrl", function($scope: AppScope) {
    this.inputObservable = $scope.$toObservable("term")
        .safeApply($scope, (results: any) => {
            this.results = results;
        });
});
