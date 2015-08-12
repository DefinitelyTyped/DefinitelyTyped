/// <reference path="angular-toasty.d.ts" />

interface AngularToastyTestControllerScope extends ng.IScope {
    options:toasty.IToastyConfig;
    newToast(): void;
    clearToasties(): void;
}

class AngularToastyTestController {

    static $inject = ['$rootScope', '$scope', 'toasty'];

    constructor($rootScope:ng.IRootScopeService, $scope:AngularToastyTestControllerScope, toasty:toasty.IToastyService) {

        // When a new toast is added
        $rootScope.$on('toasty-added', function (event, toast) {
            console.log(toast)
        });
        // When a toast is clicked
        $rootScope.$on('toasty-clicked', function (event, toast) {
            console.log(toast)
        });
        // When a toast is cleared/removed
        $rootScope.$on('toasty-cleared', function (event, toast) {
            console.log(toast)
        });

        var options: toasty.IToastyConfig = {
            title: 'Toast It!',
            msg: 'Mmmm, tasties...',
            showClose: true,
            clickToClose: false,
            timeout: 5000,
            sound: true,
            html: false,
            shake: false,
            theme: 'bootstrap'
        };

        toasty(options);
        toasty.default(options);
        toasty.info(options);
        toasty.success(options);
        toasty.wait(options);
        toasty.error(options);
        toasty.warning(options);

        $scope.newToast = function () {

            toasty.clear(); // Clear all
            toasty.clear(1); // Remove a single toast by it's ID

            toasty('Quick Toast!');
            toasty.success('Quick Success Toast!');

            toasty({
                title: 'New Toast!',
                onAdd: function () {
                    console.log('Toasty ' + this.id + ' has been added!', this);
                },
                onRemove: function () {
                    console.log('Toasty ' + this.id + ' has been removed!', this);
                },
                onClick: function () {
                    console.log('Toasty ' + this.id + ' has been clicked!', this);
                }
            });

            toasty({
                title: 'Ping!',
                msg: '<a href="http://google.com">Take me to Google!</a>',
                showClose: false,
                clickToClose: true,
                timeout: 10000,
                sound: false,
                html: true,
                shake: true,
                theme: 'bootstrap'
            });

            toasty(1);

            toasty[$scope.options.type]({
                title: $scope.options.title,
                msg: $scope.options.msg,
                showClose: $scope.options.showClose,
                clickToClose: $scope.options.clickToClose,
                sound: $scope.options.sound,
                shake: $scope.options.shake,
                timeout: $scope.options.timeout || false,
                html: $scope.options.html,
                theme: $scope.options.theme,
                onAdd: function () {
                    console.log('Toasty ' + this.id + ' has been added!');
                },
                onRemove: function () {
                    console.log('Toasty ' + this.id + ' has been removed!');
                },
                onClick: function () {
                    console.log('Toasty ' + this.id + ' has been clicked!');
                }
            });
        };

        $scope.clearToasties = function () {
            toasty.clear();
        };

    }
};

angular
    .module('main', ['angular-toasty'])
    .config(['toastyConfigProvider', (toastyConfigProvider:toasty.IToastyConfigProvider) => {
        toastyConfigProvider.setConfig({
            title: 'global',
            sound: false,
            shake: true
        });
    }])
    .controller('MainController', AngularToastyTestController);
