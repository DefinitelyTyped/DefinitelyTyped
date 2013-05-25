/// <reference path="restangular.d.ts" />

function test_basic() {
    var $scope;
    Restangular.all('accounts');
    Restangular.one('accounts', 1234);

    Restangular.one('users').getList().then(function (users) {
        $scope.user = users[0];
    })
    $scope.cars = $scope.user.getList('cars');
    $scope.user.sendMessage();
    $scope.user.one('message', 123).all('unread').getList();

    var baseAccounts = Restangular.all('accounts');

    $scope.allAccounts = baseAccounts.getList();

    var newAccount = { name: "Gonto's account" };

    baseAccounts.post(newAccount);

    Restangular.one('accounts', 123).one('buildings', 456).get()

    Restangular.one('accounts', 123).all('buildings').getList()

    baseAccounts.getList().then(function (accounts) {

        var firstAccount = accounts[0];
        $scope.buildings = firstAccount.getList("buildings");
        $scope.loggedInPlaces = firstAccount.getList("places", { query: 'wuut' }, { 'x-user': 'mgonto' })

        firstAccount.name = "Gonto"

        var editFirstAccount = Restangular.copy(firstAccount);

        firstAccount.put();
        editFirstAccount.put();

        firstAccount.remove();

        var myBuilding = {
            name: "Gonto's Building",
            place: "Argentina"
        };


        firstAccount.post("Buildings", myBuilding).then(function () {
            console.log("Object saved OK");
        }, function () {
            console.log("There was an error saving");
        });


        firstAccount.getList("users", { query: 'wuut' }).then(function (users) {

            users.post({ userName: 'unknown' });


            users.customGET("messages", { param: "myParam" })

            var firstUser = users[0];

            $scope.userFromServer = firstUser.get();

            firstUser.head()

        });

    }, function errorCallback() {
        alert("Oops error from server :(");
    })

    var account = Restangular.one("accounts", 123);

    $scope.account = account.get({ single: true });

    account.customPOST("messages", { param: "myParam" }, {}, { name: "My Message" })
}

function test_config() {
    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setExtraFields(['name']);
    RestangularProvider.setResponseExtractor(function (response, operation) {
        return response.data;
    });

    RestangularProvider.setDefaultHttpFields({ cache: true });
    RestangularProvider.setMethodOverriders(["put", "patch"]);

    RestangularProvider.setListTypeIsArray(true);

    RestangularProvider.setRestangularFields({
        id: "_id",
        route: "restangularRoute"
    });

    RestangularProvider.setRequestSuffix('.json');

    RestangularProvider.setRequestInterceptor(function (element, operation, route, url) {
    });

    RestangularProvider.addElementTransformer('accounts', false, function (elem) {
        elem.accountName = 'Changed';
        return elem;
    });
}