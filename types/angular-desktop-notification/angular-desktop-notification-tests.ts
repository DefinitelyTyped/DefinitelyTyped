import * as angular from 'angular';

angular
    .module('app', ['ngDesktopNotification'])
    .config(['desktopNotificationProvider', (desktopNotificationProvider: angular.desktopNotification.IDesktopNotificationProvider) => {
        desktopNotificationProvider.config({
            autoClose: true,
            duration: 5,
            showOnPageHidden: false,
        });
    }])
    .controller('AppController', ['desktopNotification', (desktopNotification: angular.desktopNotification.IDesktopNotificationService) => {
        // Check support and permission
        const isNotificationSupported = desktopNotification.isSupported();
        const currentNotificationPermission = desktopNotification.currentPermission();

        if (currentNotificationPermission === desktopNotification.permissions.granted) {
            // Permission granted
        }

        // Request permission
        desktopNotification.requestPermission().then(
            // Permission granted
            (permission) => {
                // Show notification
                desktopNotification.show(
                    "Notification title",
                    {
                        tag: "tag",
                        body: "Notification body",
                        icon: "https://www.iconurl.com/icon-name.icon-extension",
                        onClick: () => {
                            // Notification clicked
                        }
                    });
            },
            () => {
                // No permission granted
            });
    }]);
