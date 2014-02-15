/// <reference path="angularfire.d.ts"/>

// Based on https://www.firebase.com/docs/angular/index.html

var myapp = angular.module("myapp", ["firebase"]);

interface AngularFireScope {
    items: AngularFire;
}

myapp.controller("MyController", ["$scope", "$firebase",
    function($scope: AngularFireScope, $firebase: AngularFireService) {
        $scope.items = $firebase(new Firebase(URL));
        $scope.items.$add({ foo: "bar" });
        $scope.items.$remove("foo"); // Removes child named "foo".
        $scope.items.$remove();      // Removes the entire object.
        $scope.items.foo = "baz";
        $scope.items.$save("foo");  // new Firebase(URL + "/foo") now contains "baz".
        var child = $scope.items.$child("foo");
        child.$remove();            // Same as calling $scope.items.$remove("foo");
        $scope.items.$set({ bar: "baz" });  // new Firebase(URL + "/foo") is now null.
        var keys = $scope.items.$getIndex();
        keys.forEach(function(key, i) {
            console.log(i, $scope.items[key]); // prints items in order they appear in Firebase
        });
        $scope.items.foo.$priority = 20;
        $scope.items.$save("foo");  // new Firebase(URL + "foo")'s priority is now 20.
        $scope.items.$on("loaded", function() {
            console.log("Initial data received!");
        });
        $scope.items.$on("change", function() {
            console.log("A remote change was applied locally!");
        });
        // Detaches all `loaded` event handlers.
        $scope.items.$off('loaded');
        // Stops synchronization on `$scope.items` completely.
        function stopSync() {
            $scope.items.$off();
        }
        $scope.items.$bind($scope, "remoteItems");
        $scope.remoteItems.bar = "foo";  // new Firebase(URL + "/bar") is now "foo".
        $scope.items.$bind($scope, "remote").then(function(unbind) {
            unbind();
            $scope.remote.bar = "foo";    // No changes have been made to the remote data.
        });
    }
]);

interface AngularFireAuthScope {
    loginObj: AngularFireAuth;
}

myapp.controller("MyAuthController", ["$scope", "$firebaseSimpleLogin",
    function($scope: AngularFireAuthScope, $firebaseSimpleLogin) {
        var dataRef = new Firebase("https://myapp.firebaseio.com");
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