// Samples taken from the a0-angular-storage Readme.md

var app = angular.module('angular-storage-tests', ['angular-storage']);

angular.module('angular-storage-tests')
.controller('StoreController', function(store: angular.a0.storage.IStoreService) {
  var myObj = {
    name: 'mgonto'
  };

  store.set('obj', myObj);

  var myNewObject = store.get('obj');

  console.log('Should be true: ', angular.equals(myNewObject, myObj));

  store.remove('obj');

  store.set('number', 2);

  console.log('Should be true: ', typeof(store.get('number')) === 'number');
})
.factory('Auth0Store', function(store: angular.a0.storage.IStoreService) {
  return store.getNamespacedStore('auth0');
})
.controller('NamespacedStoreController', function(Auth0Store: angular.a0.storage.INamespacedStoreService) {

  var myObj = {
    name: 'mgonto'
  };

  // This will be saved in localStorage as auth0.obj
  Auth0Store.set('obj', myObj);

  // This will look for auth0.obj
  var myNewObject = Auth0Store.get('obj');

  console.log('Should be true: ', angular.equals(myNewObject, myObj));
});;

