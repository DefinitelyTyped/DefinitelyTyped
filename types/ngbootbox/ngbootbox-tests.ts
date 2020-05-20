/// <reference types="angular" />


class TestBootboxController {

    constructor(private readonly $scope: angular.IScope, $ngBootbox: BootboxService) {

        $ngBootbox.alert('An important message!').then(function() {
            console.log('Alert closed');
        });

        $ngBootbox.confirm('A question?').then(function() {
            console.log('Confirmed!');
        }, function() {
            console.log('Confirm dismissed!');
        });

        $ngBootbox.prompt('Enter something').then(function(result) {
            console.log('Prompt returned: ' + result);
        }, function() {
            console.log('Prompt dismissed!');
        });

        var options: NgBootboxDialog = {
            message: 'This is a message!',
            title: 'The title!',
            className: 'test-class',
            buttons: {
                warning: {
                    label: "Cancel",
                    className: "btn-warning",
                    callback: function() {
                        console.log('warning callback');
                    }
                },
                success: {
                    label: "Ok",
                    className: "btn-success",
                    callback: function() {
                        console.log('sucess callback');
                    }
                }
            }
        };
        $ngBootbox.customDialog(options);
    }
}

var app = angular.module('testBootbox', ['ngBootbox']);
app.controller('TestBootboxCtrl', ['$scope', '$ngBootbox', TestBootboxController]);
