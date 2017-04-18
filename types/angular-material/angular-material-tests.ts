const myApp = angular.module('testModule', ['ngMaterial']);

myApp.config((
    $mdThemingProvider: ng.material.IThemingProvider,
    $mdIconProvider: ng.material.IIconProvider,
    $mdProgressCircularProvider: ng.material.IProgressCircularProvider) => {
    $mdThemingProvider.alwaysWatchTheme(true);
    const neonRedMap: ng.material.IPalette = $mdThemingProvider.extendPalette('red', {
        500: 'ff0000'
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

    const browserColors: ng.material.IBrowserColors = {
        theme: 'default',
        palette: 'neonRed',
        hue: '500'
    };
    const removeColors = $mdThemingProvider.enableBrowserColor(browserColors);
    removeColors();

    // Disable theming generation at runtime
    $mdThemingProvider.disableTheming();

    $mdIconProvider
        .defaultIconSet('my/app/icons.svg')       // Register a default set of SVG icons
        .iconSet('social', 'my/app/social.svg')   // Register a named icon set of SVGs
        .icon('android', 'my/app/android.svg')    // Register a specific icon (by name)
        .icon('work:chair', 'my/app/chair.svg');  // Register icon in a specific set

    // Example of changing the default progress options.
    $mdProgressCircularProvider.configure({
        progressSize: 100,
        strokeWidth: 20,
        duration: 800,
        easeFn(t, b, c, d) {
            t /= d;
            return c * t * t + b;
        },
        easeFnIndeterminate(t, b, c, d) {
            return c * Math.pow(2, 10 * (t / d - 1)) + b;
        }
    });
});

myApp.controller('BottomSheetController', ($scope: ng.IScope, $mdBottomSheet: ng.material.IBottomSheetService, $q: ng.IQService) => {
    $scope['openBottomSheet'] = () => {
        $mdBottomSheet.show({
            template: '<md-bottom-sheet>Hello!</md-bottom-sheet>',
            clickOutsideToClose: true,
            disableBackdrop: true,
            disableParentScroll: false,
        });

        const options: ng.material.IBottomSheetOptions = {};

        options.resolve = {
            nativePromise: () => Promise.resolve(),
            angularPromise: () => $q.resolve(),
            annotatedNativePromise: ['fakeService', (fake) => Promise.resolve()],
            annotatedAngularPromise: ['fakeService', (fake) => $q.resolve()]
        };

        options.controller = 'TestController';
        options.controller = (function TestController(param: any) { });
        options.controller = (class { });
        options.controller = ['fakeService', function TestController(fake: any) { }];
        options.controller = ['fakeService', class { }];

        options.parent = (scope, element) => new Element();
        options.parent = (scope, element) => angular.element(new Element());
        options.parent = '#container';
        options.parent = new Element();
        options.parent = angular.element(new Element());
    };
    $scope['hideBottomSheet'] = $mdBottomSheet.hide.bind($mdBottomSheet, 'hide');
    $scope['cancelBottomSheet'] = $mdBottomSheet.cancel.bind($mdBottomSheet, 'cancel');
});

myApp.controller('ColorController', ($scope: ng.IScope, $mdColor: ng.material.IColorService) => {
    const colorExpression: ng.material.IColorExpression = { color: '#FFFFFF' };
    const element: Element = new Element();

    $scope['applyThemeColors'] = () => {
        $mdColor.applyThemeColors(element, colorExpression);
    };
    $scope['getThemeColor'] = () => {
        $mdColor.getThemeColor('default-neonRed');
    };
    $scope['hasTheme'] = () => {
        $mdColor.hasTheme();
    };
});

myApp.controller('DialogController', ($scope: ng.IScope, $mdDialog: ng.material.IDialogService, $q: ng.IQService) => {
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
    $scope['promptDialog'] = () => {
        $mdDialog.show($mdDialog.prompt().textContent('Prompt!'));
    };
    $scope['promptDialog'] = () => {
        $mdDialog.show($mdDialog.prompt().htmlContent('<span>Prompt!</span>'));
    };
    $scope['promptDialog'] = () => {
        $mdDialog.show($mdDialog.prompt().cancel('Prompt "Cancel" button text'));
    };
    $scope['promptDialog'] = () => {
        $mdDialog.show($mdDialog.prompt().placeholder('Prompt input placeholder text'));
    };
    $scope['promptDialog'] = () => {
        $mdDialog.show($mdDialog.prompt().initialValue('Buddy'));
    };
    $scope['prerenderedDialog'] = () => {
        $mdDialog.show({
            template: '<md-dialog>Hello!</md-dialog>',
            contentElement: '#myDialog',
            clickOutsideToClose: true
        });
    };
    $scope['hideDialog'] = $mdDialog.hide.bind($mdDialog, 'hide');
    $scope['cancelDialog'] = $mdDialog.cancel.bind($mdDialog, 'cancel');

    const alertPreset: ng.material.IAlertDialog = $mdDialog.alert()
        .resolve({
            nativePromise: () => Promise.resolve(),
            angularPromise: () => $q.resolve(),
            annotatedNativePromise: ['fakeService', (fake) => Promise.resolve()],
            annotatedAngularPromise: ['fakeService', (fake) => $q.resolve()]
        })
        .controller('TestController')
        .controller(function TestController(param) { })
        .controller(class { })
        .controller(['fakeService', function TestController(fake) { }])
        .controller(['fakeService', class { }])
        ;

    const dialogOptions: ng.material.IDialogOptions = {};

    dialogOptions.resolve = {
        nativePromise: () => Promise.resolve(),
        angularPromise: () => $q.resolve(),
        annotatedNativePromise: ['fakeService', (fake) => Promise.resolve()],
        annotatedAngularPromise: ['fakeService', (fake) => $q.resolve()]
    };

    dialogOptions.controller = 'TestController';
    dialogOptions.controller = (function TestController(param) { });
    dialogOptions.controller = (class { });
    dialogOptions.controller = ['fakeService', function TestController(fake) { }];
    dialogOptions.controller = ['fakeService', class { }];

    $mdDialog.show({
        onShowing(scope, element) { },
        onComplete(scope, element) { },
        onRemoving(element, removePromise) { },
    });

    $mdDialog.show({
        onShowing: (scope, element) => { },
        onComplete: (scope, element) => { },
        onRemoving: (element, removePromise) => { },
    });
});

class IconDirective implements ng.IDirective {
    private $mdIcon: ng.material.IIcon;
    constructor($mdIcon: ng.material.IIcon) {
        this.$mdIcon = $mdIcon;
    }

    link($scope: ng.IScope, $elm: ng.IAugmentedJQuery) {
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
    const componentId = 'left';
    $scope['toggle'] = () => $mdSidenav(componentId).toggle();
    $scope['open'] = () => $mdSidenav(componentId).open();
    $scope['close'] = () => $mdSidenav(componentId).close();
    $scope['isOpen'] = $mdSidenav(componentId).isOpen();
    $scope['isLockedOpen'] = $mdSidenav(componentId).isLockedOpen();

    $scope['asyncLookup'] = $mdSidenav(componentId, true).then((instance) => {
        instance.toggle();
        instance.open();
        instance.close();
        instance.isOpen();
        instance.isLockedOpen();
    });

    $scope['onClose'] = $mdSidenav(componentId).onClose(() => { });
});

myApp.controller('ToastController', ($scope: ng.IScope, $mdToast: ng.material.IToastService, $q: ng.IQService) => {
    $scope['openToast'] = () => {
        $mdToast.show($mdToast.simple().textContent('Hello!'));
        $mdToast.updateTextContent('New Content');
    };

    $scope['customToast'] = () => {
        const options: ng.material.IToastOptions = {
            hideDelay: 3000,
            position: 'top right',
            controller: 'ToastCtrl',
            templateUrl: 'toast-template.html',
            toastClass: 'my-class',
            resolve: {
                nativePromise: () => Promise.resolve(),
                angularPromise: () => $q.resolve(),
                annotatedNativePromise: ['fakeService', (fake) => Promise.resolve()],
                annotatedAngularPromise: ['fakeService', (fake) => $q.resolve()]
            }
        };

        options.controller = 'TestController';
        options.controller = (function TestController(param) { });
        options.controller = (class { });
        options.controller = ['fakeService', function TestController(fake) { }];
        options.controller = ['fakeService', class { }];

        $mdToast.show(options);
    };
});

myApp.controller('PanelController', ($scope: ng.IScope, $mdPanel: ng.material.IPanelService, $q: ng.IQService) => {
    $scope['createPanel'] = () => {
        const config: ng.material.IPanelConfig = {
            id: 'myPanel',
            template: '<h1>Hello!</h1>',
            hasBackdrop: true,
            disableParentScroll: true,
            zIndex: 150,
            resolve: {
                nativePromise: () => Promise.resolve(),
                angularPromise: () => $q.resolve(),
                annotatedNativePromise: ['fakeService', (fake) => Promise.resolve()],
                annotatedAngularPromise: ['fakeService', (fake) => $q.resolve()]
            }
        };

        config.controller = 'TestController';
        config.controller = (function TestController(param) { });
        config.controller = (class { });
        config.controller = ['fakeService', function TestController(fake) { }];
        config.controller = ['fakeService', class { }];

        config.onDomAdded = (paneRef) => Promise.resolve();
        config.onDomAdded = () => $q.reject();
        config.onDomAdded = () => { };

        config.onOpenComplete = (paneRef) => Promise.resolve();
        config.onOpenComplete = () => $q.reject();
        config.onOpenComplete = () => { };

        config.onRemoving = (paneRef) => Promise.resolve();
        config.onRemoving = () => $q.reject();
        config.onRemoving = () => { };

        config.onDomRemoved = (paneRef) => Promise.resolve();
        config.onDomRemoved = () => $q.reject();
        config.onDomRemoved = () => { };

        $mdPanel.create(config);

        let panelRef = $mdPanel.create(config);
        panelRef.open()
            .then((ref: ng.material.IPanelRef) => {
                ref.addClass('foo');
                ref.removeClass('bar');
                ref.close();
            })
            .finally(() => {
                panelRef = undefined;
            });
    };

    $scope['openPanel'] = () => {
        $mdPanel.open({
            template: '<h1>Hello!</h1>',
            hasBackdrop: true,
            disableParentScroll: true,
            zIndex: 150
        })
            .then((panelRef: ng.material.IPanelRef) => {
                panelRef.addClass('foo');
                panelRef.removeClass('bar');
                panelRef.close();
            });
    };

    $scope['newPanelPosition'] = () => {
        $mdPanel.newPanelPosition().absolute().center();
        $mdPanel.newPanelPosition().relativeTo('.demo-menu-open-button').addPanelPosition("ALIGN_START", "BELOW");
    };

    $scope['newPanelAnimation'] = () => {
        $mdPanel.newPanelAnimation().openFrom('.some-target');
        $mdPanel.newPanelAnimation().openFrom({ top: 0, left: 0 });
    };
});
