import * as JSData from 'js-data';
import * as ng from 'angular';
import * as angular from 'angular';

interface IUser {

}

interface CustomScope extends ng.IScope {

    comments: Array<any>;
    user: IUser;
    users: Array<IUser>;
}

angular.module('myApp')
    .controller('commentsCtrl', function ($scope:CustomScope, store:JSData.DS, Comment:JSData.DSResourceDefinition<any>, User:JSData.DSResourceDefinition<any>) {

        Comment.findAll().then(function (comments) {
            $scope.comments = comments;
        });

        // shortest version
        User.bindOne(1, $scope, 'user');

// short version
        store.bindOne('user', 1, $scope, 'user');

// long version
        $scope.$watch(function () {
            return store.lastModified('user', 1);
        }, function () {
            $scope.user = store.get<IUser>('user', 1);
        });

        var params = {
            where: {
                age: {
                    '>': 30
                }
            }
        };

// shortest verions
        User.bindAll(params, $scope, 'users');

// short version
        store.bindAll('user', params, $scope, 'users');

// long version
        $scope.$watch(function () {
            return store.lastModified('user');
        }, function () {
            $scope.users = store.filter('user', params);
        });
    });

angular.module('myApp')
    .run(function (DS:JSData.DS) {
        // We don't register the "User" resource
        // as a service, so it can only be used
        // via DS.<method>('user', ...)
        // The advantage here is that this code
        // is guaranteed to be executed, and you
        // only ever have to inject "DS"
        DS.defineResource('user');
    })
    .factory('Comment', function (DS:JSData.DS) {
        // This code won't execute unless you actually
        // inject "Comment" somewhere in your code.
        // Thanks Angular...
        // Some like injecting actual Resource
        // definitions, instead of just "DS"
        return DS.defineResource('comment');
    });

angular.module('myApp')
    .config(function (DSProvider:JSData.DSProvider) {
        DSProvider.defaults.basePath = '/myApi'; // etc.
    });