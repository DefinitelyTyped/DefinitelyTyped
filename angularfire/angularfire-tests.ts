/// <reference path="angularfire.d.ts"/>

var myapp = angular.module("myapp", ["firebase"]);

interface AngularFireScope extends ng.IScope {
    data: any;
}

var url = "https://myapp.firebaseio.com";

myapp.controller("MyController", ["$scope", "$firebase", '$FirebaseObject', '$FirebaseArray',
    function ($scope: AngularFireScope, $firebase: AngularFireService, $FirebaseObject: AngularFireObjectService, $FirebaseArray: AngularFireArrayService) {
        var ref = new Firebase(url);
        var sync = $firebase(ref);

        // AngularFire
        {
            sync.$asArray();
            sync.$asObject();
            sync.$ref();
            sync.$remove();
            sync.$push({ foo: "foo data" });
            sync.$set("foo", 1);
            sync.$set({ foo: 2 });
            sync.$update({ foo: 3 });
            sync.$update("foo", { bar: 1 });

            // Increment the message count by 1
            sync.$transaction('count', function (currentCount) {
                if (!currentCount) return 1;   // Initial value for counter.
                if (currentCount < 0) return;  // Return undefined to abort transaction.
                return currentCount + 1;       // Increment the count by 1.
            }).then(function (snapshot) {
                    if (!snapshot) {
                        // Handle aborted transaction.
                    } else {
                        // Do something.
                        console.log(snapshot.val());
                    }
                }, function (err) {
                    // Handle the error condition.
                    console.log(err.stack);
                });
        }


        // AngularFireObject
        {
            var obj = sync.$asObject();

            // $id
            if (obj.$id !== ref.name()) throw "error";

            // $loaded()
            obj.$loaded().then((data) => {
                if (data !== obj) throw "error";
                // $priority
                obj.$priority;

                // $value, $save()
                obj.$value = "foobar";
                obj.$save();
            });

            // $inst()
            if (obj.$inst() !== sync) throw "error";

            // $bindTo()
            obj.$bindTo($scope, "data").then(function () {
                console.log($scope.data);
                $scope.data.foo = "baz";  // will be saved to Firebase
                sync.$set({ foo: "baz" });   // this would update Firebase and $scope.data
            });

            // $watch()
            var unwatch = obj.$watch(function () {
                console.log("data changed!");
            });
            unwatch();

            // $destroy()
            obj.$destroy();

            // $extendFactory()
            var NewFactory = $FirebaseObject.$extendFactory({
                getMyFavoriteColor: function () {
                    return this.favoriteColor + ", no green!"; // obscure Monty Python reference
                }
            });
            var customObj = $firebase(ref, { objectFactory: NewFactory }).$asObject();
        }

        // AngularFireArray
        {
            var list = sync.$asArray();

            // $inst()
            if (list.$inst() !== sync) throw "error";

            // $add()
            list.$add({ foo: "foo value" });

            // $keyAt()
            var key = list.$keyAt(0);

            // $indexFor()
            var index = list.$indexFor(key);

            // $getRecord()
            var item = list.$getRecord(key);

            // $save()
            item["bar"] = "bar value";
            list.$save(item);

            // $remove()
            list.$remove(item);

            // $loaded()
            list.$loaded().then(data => {
                if (data !== list) throw "error";
            });

            // $watch()
            var unwatch = list.$watch((event, key, prevChild) => {
                switch (event) {
                    case "child_added":
                        console.log(key + " added");
                        break;
                    case "child_changed":
                        console.log(key + " changed");
                        break;
                    case "child_moved":
                        console.log(key + " moved");
                        break;
                    case "child_removed":
                        console.log(key + " removed");
                        break;
                    default:
                        throw "error";
                }
            });
            unwatch();

            // $destroy()
            list.$destroy();

            // $extendFactory()
            var ArrayWithSum = $FirebaseArray.$extendFactory({
                sum: function () {
                    var total = 0;
                    angular.forEach(this.$list, function (rec) {
                        total += rec.x;
                    });
                    return total;
                }
            });
            var list = $firebase(ref, { arrayFactory: ArrayWithSum }).$asArray();
            list.$loaded().then(function () {
                console.log("List has " + (<any>list).sum() + " items");
            });
        }
    }
]);

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