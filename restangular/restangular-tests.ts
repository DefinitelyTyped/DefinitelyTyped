/// <reference path="restangular.d.ts" />


var myApp = angular.module('testModule');

myApp.config((RestangularProvider: restangular.IProvider) => {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setExtraFields(['name']);
  RestangularProvider.setResponseExtractor(function (response, operation) {
      return response.data;
  });

  RestangularProvider.setDefaultHttpFields({ cache: true });
  RestangularProvider.setMethodOverriders(["put", "patch"]);

  RestangularProvider.setErrorInterceptor(function (response) {
      console.error('' + response.status + ' ' + response.data);
  });

  RestangularProvider.setRequestSuffix('.json');

  RestangularProvider.setRequestInterceptor(function (element, operation, route, url) {
  });

  RestangularProvider.addElementTransformer('accounts', false, function (elem: any) {
      elem.accountName = 'Changed';
      return elem;
  });

  RestangularProvider.setRestangularFields({
    id: "_id",
    route: "restangularRoute",
    selfLink: "self.href"
  });

  RestangularProvider.addRequestInterceptor(function(element, operation, route, url) {
    delete element.name;
    return element;
  });

  RestangularProvider.setFullRequestInterceptor(function(element, operation, route, url, headers, params, httpConfig) {
    delete element.name;
    return {
      element: element,
      params: params,
      headers: headers,
      httpConfig: httpConfig
    };
  });
});


interface MyAppScope extends ng.IScope {
	accounts: string[];
  allAccounts: any[];
  account: any;
	buildings: restangular.ICollectionPromise<any>;
  loggedInPlaces: restangular.ICollectionPromise<any>;
  userFromServer: restangular.IPromise<any>;
}

myApp.controller('TestCtrl', (
  $scope: MyAppScope,
  Restangular: restangular.IService
  ) => {
  var baseAccounts = Restangular.all('accounts');

  baseAccounts.getList().then(function(accounts) {
    $scope.allAccounts = accounts;
  });

  $scope.accounts = Restangular.all('accounts').getList().$object;
  var newAccount = {name: "Gonto's account"};
  baseAccounts.post(newAccount);

  Restangular.allUrl('googlers', 'http://www.google.com/').getList();
  Restangular.allUrl('googlers', 'http://www.google.com/').getList<String>();
  Restangular.oneUrl('googlers', 'http://www.google.com/1').get();
  Restangular.oneUrl('googlers', 'http://www.google.com/1').get<String>();
  Restangular.one('accounts', 123).one('buildings', 456).get();
  Restangular.one('accounts', 123).one('buildings', 456).get<String>();
  Restangular.one('accounts', 123).getList('buildings');
  Restangular.one('accounts', 123).getList<String>('buildings');

  baseAccounts.getList().then(function (accounts) {
    var firstAccount = accounts[0];
    $scope.buildings = firstAccount.getList("buildings");
    $scope.loggedInPlaces = firstAccount.getList("places", {query: "param"}, {'x-user': 'mgonto'});

    firstAccount.name = "Gonto";
    var editFirstAccount = Restangular.copy(firstAccount);

    firstAccount.put();
    editFirstAccount.put();

    firstAccount.save();

    firstAccount.remove();

    var myBuilding = {
      name: "Gonto's Building",
      place: "Argentina"
    };

    firstAccount.post("Buildings", myBuilding).then(function() {
      console.log("Object saved OK");
    }, function() {
      console.log("There was an error saving");
    });

    firstAccount.getList("users", {query: "params"}).then(function(users: any) {
      users.post({userName: 'unknown'});
      users.customGET("messages", {param: "myParam"});

      var firstUser = users[0];
      $scope.userFromServer = firstUser.get();
      firstUser.head()

    });

  }, function errorCallback() {
    alert("Oops error from server :(");
  });

  var account = Restangular.one("accounts", 123);

  $scope.account = account.get({single: true});

  account.customPOST({name: "My Message"}, "messages", {param: "myParam"}, {});

  Restangular.one('accounts', 123).withHttpConfig({timeout: 100}).getList('buildings');
  $scope.account = Restangular.one('accounts', 123);
  $scope.account.withHttpConfig({timeout: 100}).put();

  var myRestangular = Restangular.withConfig((configurer: restangular.IProvider) => {
    configurer.setBaseUrl('/api/v1');
    configurer.setExtraFields(['name']);

    configurer.setErrorInterceptor(function (response) {
        console.error('' + response.status + ' ' + response.data);
    });
    configurer.setResponseExtractor(function (response, operation) {
        return response.data;
    });
    configurer.setDefaultHttpFields({ cache: true });
    configurer.setMethodOverriders(["put", "patch"]);

    configurer.setRestangularFields({
        id: "_id",
        route: "restangularRoute"
    });

    configurer.setRequestSuffix('.json');

    configurer.setRequestInterceptor(function (element, operation, route, url) {
    });

    configurer.addElementTransformer('accounts', false, function (elem: any) {
        elem.accountName = 'Changed';
        return elem;
    });
  });
});
