/// <reference path="angularfire.d.ts"/>

var myapp = angular.module("myapp", ["firebase"]);

interface AngularFireScope extends ng.IScope {
    items: AngularFire;
    remoteItems: RemoteItems;
}

interface RemoteItems {
    bar: string;
}

var url = "https://myapp.firebaseio.com";

myapp.controller("MyController", ["$scope", "$firebase",
    function($scope: AngularFireScope, $firebase: AngularFireService) {
        $scope.items = $firebase(new Firebase(url));
        $scope.items.$add({ foo: "bar" });
        $scope.items.$remove("foo");
        $scope.items.$remove();
        $scope.items.$save();
        var child = $scope.items.$child("foo");
        child.$remove();
        $scope.items.$set({ bar: "baz" }); 
        var keys = $scope.items.$getIndex();
        keys.forEach(function(key, i) {
            console.log(i, (<any>$scope.items)[key]);
        });
        $scope.items.$on("loaded", function() {
            console.log("Initial data received!");
        });
        $scope.items.$on("change", function() {
            console.log("A remote change was applied locally!");
        });
        $scope.items.$off('loaded');
        function stopSync() {
            $scope.items.$off();
        }
        $scope.items.$bind($scope, "remoteItems");
        $scope.remoteItems.bar = "foo";
        $scope.items.$bind($scope, "remote").then(function(unbind) {
            unbind();
            $scope.remoteItems.bar = "foo";
        });
    }
]);

var foo: AngularFireObject = {
    $priority: 0
};

interface AngularFireAuthScope extends ng.IScope {
    loginObj: AngularFireAuth;
}

myapp.controller("MyAuthController", ["$scope", "$firebaseSimpleLogin",
    function($scope: AngularFireAuthScope, $firebaseSimpleLogin: AngularFireAuthService) {
        var dataRef = new Firebase(url);
        $scope.loginObj = $firebaseSimpleLogin(dataRef);
        $scope.loginObj.$getCurrentUser().then(_ => {
        });
        var email = 'my@email.com';
        var password = 'mypassword';
        $scope.loginObj.$login('password', {
            email: email,
            password: password
        }).then(function(user) {
                console.log('Logged in as: ', user.uid);
            }, function(error) {
                console.error('Login failed: ', error);
            });
        $scope.loginObj.$logout();
        $scope.loginObj.$createUser(email, password).then(_ => {
        });
        $scope.loginObj.$changePassword(email, password, password).then(_ => {
        });
        $scope.loginObj.$removeUser(email, password).then(_ => {
        });
        $scope.loginObj.$sendPasswordResetEmail(email).then(_ => {
        });
    }
]);