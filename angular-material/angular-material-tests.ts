/// <reference path="angular-material.d.ts" />

var myApp = angular.module('testModule', ['ngMaterial']);

myApp.config((
    $mdThemingProvider: ng.material.IThemingProvider,
    $mdIconProvider: ng.material.IIconProvider) => {

    $mdThemingProvider.alwaysWatchTheme(true);
    var neonRedMap: ng.material.IPalette = $mdThemingProvider.extendPalette('red', {
        '500': 'ff0000'
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('neonRed', neonRedMap);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
        .primaryPalette('neonRed')
        .accentPalette('blue')
        .backgroundPalette('grey')
        .warnPalette('red')
        .dark(true);

    $mdIconProvider
        .defaultIconSet('my/app/icons.svg')       // Register a default set of SVG icons
        .iconSet('social', 'my/app/social.svg')   // Register a named icon set of SVGs
        .icon('android', 'my/app/android.svg')    // Register a specific icon (by name)
        .icon('work:chair', 'my/app/chair.svg');  // Register icon in a specific set
});

myApp.controller('BottomSheetController', ($scope: ng.IScope, $mdBottomSheet: ng.material.IBottomSheetService) => {
    $scope['openBottomSheet'] = () => {
        $mdBottomSheet.show({
            template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
        });
    };
    $scope['hideBottomSheet'] = $mdBottomSheet.hide.bind($mdBottomSheet, 'hide');
    $scope['cancelBottomSheet'] = $mdBottomSheet.cancel.bind($mdBottomSheet, 'cancel');
});

myApp.controller('DialogController', ($scope: ng.IScope, $mdDialog: ng.material.IDialogService) => {
    $scope['openDialog'] = () => {
        $mdDialog.show({
            template: '<md-dialog>Hello!</md-dialog>'
        });
    };
    $scope['alertDialog'] = () => {
        $mdDialog.show($mdDialog.alert().textContent('Alert!'));
    };
    $scope['alertDialog'] = () => {
        $mdDialog.show($mdDialog.alert().htmlContent('<span>Alert!</span>'));
    };
    $scope['confirmDialog'] = () => {
        $mdDialog.show($mdDialog.confirm().textContent('Confirm!'));
    };
    $scope['confirmDialog'] = () => {
        $mdDialog.show($mdDialog.confirm().htmlContent('<span>Confirm!</span>'));
    };
    $scope['hideDialog'] = $mdDialog.hide.bind($mdDialog, 'hide');
    $scope['cancelDialog'] = $mdDialog.cancel.bind($mdDialog, 'cancel');
});

class IconDirective implements ng.IDirective {

    private $mdIcon: ng.material.IIcon;
    constructor($mdIcon: ng.material.IIcon) {
        this.$mdIcon = $mdIcon;
    }

    public link($scope: ng.IScope, $elm: ng.IAugmentedJQuery) {
        this.$mdIcon('android').then((iconEl: Element) => $elm.append(iconEl));
        this.$mdIcon('work:chair').then((iconEl: Element) => $elm.append(iconEl));
        // Load and cache the external SVG using a URL
        this.$mdIcon('img/icons/android.svg').then((iconEl: Element) => {
            $elm.append(iconEl);
        });
    }
}
myApp.directive('icon-directive', ($mdIcon: ng.material.IIcon) => new IconDirective($mdIcon));

myApp.controller('MediaController', ($scope: ng.IScope, $mdMedia: ng.material.IMedia) => {
    $scope.$watch(() => $mdMedia('lg'), (big: boolean) => {
        $scope['bigScreen'] = big;
    });
    $scope['screenIsSmall'] = $mdMedia('sm');
    $scope['customQuery'] = $mdMedia('(min-width: 1234px)');
    $scope['anotherCustom'] = $mdMedia('max-width: 300px');
});

myApp.controller('SidenavController', ($scope: ng.IScope, $mdSidenav: ng.material.ISidenavService) => {
    var componentId = 'left';
    $scope['toggle'] = () => $mdSidenav(componentId).toggle();
    $scope['open'] = () => $mdSidenav(componentId).open();
    $scope['close'] = () => $mdSidenav(componentId).close();
    $scope['isOpen'] = $mdSidenav(componentId).isOpen();
    $scope['isLockedOpen'] = $mdSidenav(componentId).isLockedOpen();
});

myApp.controller('ToastController', ($scope: ng.IScope, $mdToast: ng.material.IToastService) => {
    $scope['openToast'] = () => $mdToast.show($mdToast.simple().textContent('Hello!'));
});
