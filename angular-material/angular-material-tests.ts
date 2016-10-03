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

    var browserColors: ng.material.IBrowserColors = {
      theme: 'default', 
      palette: 'neonRed', 
      hue: '500'  
    };
    $mdThemingProvider.enableBrowserColor(browserColors);

    $mdIconProvider
        .defaultIconSet('my/app/icons.svg')       // Register a default set of SVG icons
        .iconSet('social', 'my/app/social.svg')   // Register a named icon set of SVGs
        .icon('android', 'my/app/android.svg')    // Register a specific icon (by name)
        .icon('work:chair', 'my/app/chair.svg');  // Register icon in a specific set
});

myApp.controller('BottomSheetController', ($scope: ng.IScope, $mdBottomSheet: ng.material.IBottomSheetService) => {
    $scope['openBottomSheet'] = () => {
        $mdBottomSheet.show({
            template: '<md-bottom-sheet>Hello!</md-bottom-sheet>',
            clickOutsideToClose: true,
            disableBackdrop: true,
            disableParentScroll: false,
            parent: () => {}
        });
    };
    $scope['hideBottomSheet'] = $mdBottomSheet.hide.bind($mdBottomSheet, 'hide');
    $scope['cancelBottomSheet'] = $mdBottomSheet.cancel.bind($mdBottomSheet, 'cancel');
});

myApp.controller('ColorController', ($scope: ng.IScope, $mdColor: ng.material.IColorService) => {
    var colorExpression : ng.material.IColorExpression;
    var element : Element;

    colorExpression = { color: '#FFFFFF' }

    element = new Element();

    $scope['applyThemeColors'] = () => {
        $mdColor.applyThemeColors(element, colorExpression);
    };
    $scope['getThemeColor'] = () => {
        $mdColor.getThemeColor('default-neonRed')
    };
    $scope['hasTheme'] = () => {
        $mdColor.hasTheme();
    };
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

    $scope['asyncLookup'] = $mdSidenav(componentId, true).then((instance) => {
        instance.toggle();
        instance.open();
        instance.close();
        instance.isOpen();
        instance.isLockedOpen();
    });

    $scope['onClose'] = $mdSidenav(componentId).onClose(() => {});
});

myApp.controller('ToastController', ($scope: ng.IScope, $mdToast: ng.material.IToastService) => {
    $scope['openToast'] = () => {
        $mdToast.show($mdToast.simple().textContent('Hello!'));
        $mdToast.updateTextContent('New Content');
    }

    $scope['customToast'] = () => {
        var options = {
            hideDelay: 3000,
            position: 'top right',
            controller  : 'ToastCtrl',
            templateUrl : 'toast-template.html',
            toastClass: 'my-class'
        };

        $mdToast.show(options);
    }
});

myApp.controller('PanelController', ($scope: ng.IScope, $mdPanel: ng.material.IPanelService) => {
    $scope['createPanel'] = () => {
        var config = {
            id: 'myPanel',
            template: '<h1>Hello!</h1>',
            hasBackdrop: true,
            disableParentScroll: true,
            zIndex: 150
        };
        
        $mdPanel.create(config);

        var panelRef = $mdPanel.create(config);
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
        $mdPanel.newPanelAnimation().openFrom({top: 0, left: 0});
    };
});
