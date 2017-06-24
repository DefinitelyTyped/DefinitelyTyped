

var myApp = angular.module('testModule', ['matchMedia']);

myApp.controller('TestController', ($log: angular.ILogService,
    $scope: angular.IScope,
    screenSize: angular.matchmedia.IScreenSize) => {

    var fnCallback = (result: boolean) => {
        $log.info(`Result: ${result}`);
    }
    
    // '.isRetina' examples
    if(screenSize.isRetina) {
        $log.info("Retina screen detected")
    }
    
    // '.is(...)' examples
    var res = screenSize.is(["xs", "sm"]);
    fnCallback(res);

    res = screenSize.is("xs, lg")
    fnCallback(res);
    
    // '.on(...)' examples
    
    res = screenSize.on(["xs", "sm"], fnCallback);
    fnCallback(res);

    res = screenSize.on("xs, lg", fnCallback);
    fnCallback(res);

    res = screenSize.on(["xs", "sm"], fnCallback, $scope);
    fnCallback(res);

    res = screenSize.on("xs, lg", fnCallback, $scope);
    fnCallback(res);
    
    // '.onChange(...)' examples

    res = screenSize.onChange($scope, ["xs", "sm"], fnCallback);
    fnCallback(res);

    res = screenSize.onChange($scope, "xs, lg", fnCallback);
    fnCallback(res);
    
    // '.when(...)' examples
    
    res = screenSize.when(["xs", "sm"], fnCallback);
    fnCallback(res);

    res = screenSize.when("xs, lg", fnCallback);
    fnCallback(res);

    res = screenSize.when(["xs", "sm"], fnCallback, $scope);
    fnCallback(res);

    res = screenSize.when("xs, lg", fnCallback, $scope);
    fnCallback(res);
});