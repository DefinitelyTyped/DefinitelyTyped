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
            var obj = $FirebaseObject(ref);

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

            // $ref()
            if (obj.$ref() !== ref) throw "error";

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

            // $extend()
            var NewFactory = $FirebaseObject.$extend({
                getMyFavoriteColor: function () {
                    return this.favoriteColor + ", no green!"; // obscure Monty Python reference
                }
            });
            var customObj = $firebase(ref, { objectFactory: NewFactory }).$asObject();
        }

        // AngularFireArray
        {
            var list = $FirebaseArray(ref);

            // $ref()
            if (list.$ref() !== ref) throw "error";

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

            // $extend()
            var ArrayWithSum = $FirebaseArray.$extend({
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

myapp.controller("MyAuthController", ["$scope", "$firebaseAuth",
    function($scope: AngularFireAuthScope, $firebaseAuth: AngularFireAuthService) {
        var dataRef = new Firebase(url);
        $scope.loginObj = $firebaseAuth(dataRef);
        $scope.loginObj.$getAuth();
        var credentials = {
            email: 'my@email.com',
            password: 'mypassword'
        };
        var resetPasswordCredentials = {
            email: 'my@email.com'
        };
        var changePasswordCredentials = {
            email: 'my@email.com',
            oldPassword: 'mypassword',
            newPassword: 'mypassword'
        };
        var changeUserCredentials = {
            oldEmail: 'my@email.com',
            newEmail: 'my@email.com',
            password: 'mypassword'
        };
        $scope.loginObj.$authWithCustomToken("token").then(_ => {});
        $scope.loginObj.$authAnonymously().then(_ => {});
        $scope.loginObj.$authWithPassword(credentials).then(_ => {});
        $scope.loginObj.$authWithOAuthPopup("github").then(_ => {});
        $scope.loginObj.$authWithOAuthRedirect("google").then(_ => {});
        $scope.loginObj.$authWithOAuthToken("twitter", "token").then(_ => {});
        $scope.loginObj.$getAuth();
        $scope.loginObj.$onAuth(() => {});
        $scope.loginObj.$unauth();
        $scope.loginObj.$waitForAuth();
        $scope.loginObj.$requireAuth();
        $scope.loginObj.$createUser(credentials).then(_ => {});
        $scope.loginObj.$removeUser(credentials).then(_ => {});
        $scope.loginObj.$changeEmail(changeUserCredentials).then(_ => {});
        $scope.loginObj.$changePassword(changePasswordCredentials).then(_ => {});
        $scope.loginObj.$resetPassword(resetPasswordCredentials).then(_ => {});
    }
]);
