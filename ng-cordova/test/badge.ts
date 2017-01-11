namespace ngCordova {
    'use strict';

    angular.module('test')
    // Adapted from http://ngcordova.com/docs/plugins/badge/
        .controller('ThisCtrl', function($cordovaBadge: ngCordova.IBadgeService) {

            $cordovaBadge.hasPermission().then(function(yes) {
                // You have permission
            }, function(no) {
                // You do not have permission
            });

            $cordovaBadge.set(3).then(function() {
                // You have permission, badge set.
            }, function(err) {
                // You do not have permission.
            });

            $cordovaBadge.get().then(function(badge) {
                // You have permission, badge returned.
                var badgeNo: number = badge;
            }, function(err) {
                // You do not have permission.
            });

            $cordovaBadge.clear().then(function() {
                // You have permission, badge cleared.
            }, function(err) {
                // You do not have permission.
            });

            $cordovaBadge.increase().then(function() {
                // You have permission, badge increased.
            }, function(err) {
                // You do not have permission.
            });
            $cordovaBadge.increase(3).then(function() {
                // You have permission, badge increased.
            }, function(err) {
                // You do not have permission.
            });

            $cordovaBadge.decrease().then(function() {
                // You have permission, badge increased.
            }, function(err) {
                // You do not have permission.
            });
            $cordovaBadge.decrease(2).then(function() {
                // You have permission, badge increased.
            }, function(err) {
                // You do not have permission.
            });

        });
}
