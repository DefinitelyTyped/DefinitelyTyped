import * as angular from 'angular';


interface TestScope extends angular.IScope {
    [index: string]: any;
}

angular
    .module('angular-locker-tests', ['angular-locker'])
.config(['lockerProvider', function config(lockerProvider: angular.locker.ILockerProvider) {
    let lockerSettings: angular.locker.ILockerSettings = {
        driver: 'session',
        namespace: 'myApp',
        separator: '.',
        eventsEnabled: true,
        extend: <any>{}
    };

    lockerProvider.defaults(lockerSettings);
}])
.controller('LockerController', ['$scope', 'locker', function ($scope: TestScope, locker: angular.locker.ILockerService) {
    locker.put('someKey', 'someVal');

    // put an item into session storage
    locker.driver('session').put('sessionKey', ['some', 'session', 'data']);

    // add an item within a different namespace
    locker.namespace('otherNamespace').put('foo', 'bar');

    locker.put('someString', 'anyDataType');
    locker.put('someObject', { foo: 'I will be serialized', bar: 'pretty cool eh' });
    locker.put('someArray', ['foo', 'bar', 'baz']);
    // etc

    //Inserts specified key and return value of function
    locker.put('someKey', function() {
        var obj = { foo: 'bar', bar: 'baz' };
        // some other logic
        return obj;
    });

    locker.put('someKey', ['foo', 'bar']);

    //The current value will be passed into the function so you can perform logic on the current value, before returning it. e.g.
    locker.put('someKey', function(current: any) {
        current.push('baz');

        return current;
    });

    locker.get('someKey'); // = ['foo', 'bar', 'baz']

    // given locker.get('foo') is not defined
    locker.put('foo', function (current: any) {
        // current will equal 'bar'
    }, 'bar');

    //This will add each key/value pair as a separate item in storage
    locker.put({
        someKey: 'johndoe',
        anotherKey: ['some', 'random', 'array'],
        boolKey: true
    });

    locker.add('someKey', 'someVal'); // true or false - whether the item was added or not

    // locker.put('fooArray', ['bar', 'baz', 'bob']);

    locker.get('fooArray'); // ['bar', 'baz', 'bob']

    locker.get('keyDoesNotExist', 'a default value'); // 'a default value'

    locker.get(['someKey', 'anotherKey', 'foo']);
    /* will return something like...
    {
        someKey: 'someValue',
        anotherKey: true,
        foo: 'bar'
    }*/

    // locker.put('someKey', { foo: 'bar', baz: 'bob' });

    locker.pull('someKey', 'defaultVal'); // { foo: 'bar', baz: 'bob' }

    // then...

    locker.get('someKey', 'defaultVal'); // 'defaultVal'

    locker.all();
    // or
    locker.namespace('somethingElse').all();

    locker.count();
    // or
    locker.namespace('somethingElse').count();

    locker.has('someKey'); // true or false

    // or
    locker.namespace('foo').has('bar');

    // e.g.
    if (locker.has('user.authToken') ) {
        // we're logged in
    } else {
        // go to login page or something
    }

    locker.forget('keyToRemove');
    // or
    locker.driver('session').forget('sessionKey');
    // etc..

    locker.forget(['keyToRemove', 'anotherKeyToRemove', 'something', 'else']);

    locker.clean();
    // or
    locker.namespace('someOtherNamespace').clean();

    locker.empty();

    locker.bind($scope, 'foo');
    $scope['foo'] = ['bar', 'baz'];
    locker.get('foo'); // = ['bar', 'baz']

    locker.bind($scope, 'foo', 'someDefault');
    $scope['foo']; // = 'someDefault'
    locker.get('foo'); // = 'someDefault'

    locker.unbind($scope, 'foo');
    $scope['foo']; // = undefined
    locker.get('foo'); // = undefined

    if (! locker.supported('session')) {
        // load a polyfill?
    }
}]);
