namespace ngCordova {
    'use strict';

    angular.module('test')
    // Adapted from http://ngcordova.com/docs/plugins/actionSheet/
        .controller('ThisCtrl', function($cordovaActionSheet: ngCordova.IActionSheetService) {

            var options = {
                title: 'What do you want with this image?',
                buttonLabels: ['Share via Facebook', 'Share via Twitter'],
                addCancelButtonWithLabel: 'Cancel',
                androidEnableCancelButton: true,
                winphoneEnableCancelButton: true,
                addDestructiveButtonWithLabel: 'Delete it'
            };

            document.addEventListener("deviceready", function() {
                $cordovaActionSheet.show(options)
                    .then(function(btnIndex) {
                        var index: number = btnIndex;
                    });
            }, false);
        });
}
