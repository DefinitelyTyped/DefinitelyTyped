namespace angularStrapTests {
    import ngStrap = mgcrea.ngStrap;

    ///////////////////////////////////////////////////////////////////////////
    // Modal
    ///////////////////////////////////////////////////////////////////////////

    namespace modalTests {
        interface IDemoCtrlScope extends ngStrap.modal.IModalScope {
            showModal(): void;
        }

        angular.module('demoApp')
            .config($modalConfig)
            .controller('demoCtrl', demoCtrl);

        function demoCtrl($scope: IDemoCtrlScope,
            $modal: ngStrap.modal.IModalService): void {
            const myModalOptions: ngStrap.modal.IModalOptions = {};
            myModalOptions.title = 'My Title';
            myModalOptions.content = 'Hello Modal<br />This is a multiline message!';
            myModalOptions.show = true;

            const myModal = $modal(myModalOptions);

            const myOtherModalOptions: ngStrap.modal.IModalOptions = {};
            myOtherModalOptions.scope = $scope;
            myOtherModalOptions.template = 'modal/docs/modal.demo.tpl.html';
            myOtherModalOptions.show = false;
            myOtherModalOptions.controller = demoCtrl;
            myOtherModalOptions.controllerAs = "ctrl";

            const myOtherModal = $modal(myOtherModalOptions);

            $scope.showModal = (): void => {
                myOtherModal.$promise.then(myOtherModal.show);
            };
        }

        function $modalConfig($modalProvider: ngStrap.modal.IModalProvider): void {
            const defaults: ngStrap.modal.IModalOptions = {
                animation: 'am-flip-x'
            };
            angular.extend($modalProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Aside
    ///////////////////////////////////////////////////////////////////////////

    namespace asideTests {
        angular.module('demoApp')
            .config($asideConfig)
            .controller('demoCtrl', demoCtrl);

        function demoCtrl($scope: ngStrap.aside.IAsideScope,
            $aside: ngStrap.aside.IAsideService): void {
            const myAsideOptions: ngStrap.aside.IAsideOptions = {};
            myAsideOptions.title = 'My Title';
            myAsideOptions.content = 'My content';
            myAsideOptions.show = true;

            const myAside = $aside(myAsideOptions);

            const myOtherAsideOptions: ngStrap.aside.IAsideOptions = {};
            myOtherAsideOptions.scope = $scope;
            myOtherAsideOptions.template = 'aside/docs/aside.demo.tpl.html';

            const myOtherAside = $aside();

            myOtherAside.$promise.then(() => {
                myOtherAside.show();
            });
        }

        function $asideConfig($asideProvider: ngStrap.aside.IAsideProvider): void {
            const defaults: ngStrap.aside.IAsideOptions = {};
            defaults.animation = 'am-fadeAndSlideLeft';
            defaults.placement = 'left';

            angular.extend($asideProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Alert
    ///////////////////////////////////////////////////////////////////////////

    namespace alertTests {
        angular.module('demoApp')
            .config($alertConfig)
            .controller('demoCtrl', demoCtrl);

        function demoCtrl($scope: ngStrap.alert.IAlertScope,
            $alert: ngStrap.alert.IAlertService): void {
            const options: ngStrap.alert.IAlertOptions = {};
            options.title = 'Holy guacamole!';
            options.content = 'Best check yo self, you\'re not looking too good.';
            options.placement = 'top';
            options.type = 'info';
            options.show = true;

            const myAlert = $alert();
        }

        function $alertConfig($alertProvider: ngStrap.alert.IAlertProvider): void {
            const defaults: ngStrap.alert.IAlertOptions = {};
            defaults.animation = 'am-fade-and-slide-top';
            defaults.placement = 'top';

            angular.extend($alertProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Tooltip
    ///////////////////////////////////////////////////////////////////////////

    namespace tooltipTests {
        angular.module('demoApp')
            .config($tooltipConfig)
            .controller('demoDrct', demoDrct);

        function demoDrct($tooltip: ngStrap.tooltip.ITooltipService): ng.IDirective {
            const drct: ng.IDirective = {};
            drct.restrict = 'EA';
            drct.link = link;
            return drct;

            function link(scope: ng.IScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
                const options: ngStrap.tooltip.ITooltipOptions = {};
                options.title = 'My Title';
                $tooltip(elem, options);
            }
        }

        function $tooltipConfig($tooltipProvider: ngStrap.tooltip.ITooltipProvider): void {
            const defaults: ngStrap.tooltip.ITooltipOptions = {};
            defaults.animation = 'am-flip-x';
            defaults.trigger = 'hover';

            angular.extend($tooltipProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Popover
    ///////////////////////////////////////////////////////////////////////////

    namespace popoverTests {
        angular.module('demoApp')
            .config($popoverConfig)
            .controller('demoDrct', demoDrct);

        function demoDrct($popover: ngStrap.popover.IPopoverService): ng.IDirective {
            const drct: ng.IDirective = {};
            drct.restrict = 'EA';
            drct.link = link;
            return drct;

            function link(scope: ng.IScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
                const options: ngStrap.tooltip.ITooltipOptions = {};
                options.title = 'My Title';

                $popover(elem, options);
            }
        }

        function $popoverConfig($popoverProvider: ngStrap.popover.IPopoverProvider): void {
            const defaults: ngStrap.tooltip.ITooltipOptions = {};
            defaults.animation = 'am-flip-x';
            defaults.trigger = 'hover';

            angular.extend($popoverProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Typeahead
    ///////////////////////////////////////////////////////////////////////////

    namespace typeaheadTests {
        angular.module('myApp')
            .config($typeaheadConfig);

        function $typeaheadConfig($typeaheadProvider: ngStrap.typeahead.ITypeaheadProvider) {
            const defaults: ngStrap.typeahead.ITypeaheadOptions = {};
            defaults.animation = 'am-flip-x';
            defaults.minLength = 2;
            defaults.limit = 8;

            angular.extend($typeaheadProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Datepicker
    ///////////////////////////////////////////////////////////////////////////

    namespace datepickerTests {
        angular.module('myApp')
            .config($datepickerConfig);

        function $datepickerConfig($datepickerProvider: ngStrap.datepicker.IDatepickerProvider): void {
            const defaults: ngStrap.datepicker.IDatepickerOptions = {};
            defaults.dateFormat = 'dd/MM/yyyy';
            defaults.startWeek = 1;

            angular.extend($datepickerProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Timepicker
    ///////////////////////////////////////////////////////////////////////////

    namespace timepickerTests {
        angular.module('myApp')
            .config($timepickerConfig);

        function $timepickerConfig($timepickerProvider: ngStrap.timepicker.ITimepickerProvider): void {
            const defaults: ngStrap.timepicker.ITimepickerOptions = {};
            defaults.timeFormat = 'HH:mm';
            defaults.length = 7;

            angular.extend($timepickerProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Select
    ///////////////////////////////////////////////////////////////////////////

    namespace selectTests {
        angular.module('myApp')
            .config($selectConfig);

        function $selectConfig($selectProvider: ngStrap.select.ISelectProvider): void {
            const defaults: ngStrap.select.ISelectOptions = {};
            defaults.animation = 'am-flip-x';
            defaults.sort = false;

            angular.extend($selectProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Tabs
    ///////////////////////////////////////////////////////////////////////////

    namespace tabTests {
        angular.module('myApp')
            .config($tabConfig);

        function $tabConfig($tabProvider: ngStrap.tab.ITabProvider) {
            const defaults: ngStrap.tab.ITabOptions = {};
            defaults.animation = 'am-flip-x';

            angular.extend($tabProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Collapse
    ///////////////////////////////////////////////////////////////////////////

    namespace collapseTests {
        angular.module('myApp')
            .config($collapseConfig);

        function $collapseConfig($collapseProvider: ngStrap.collapse.ICollapseProvider): void {
            const defaults: ngStrap.collapse.ICollapseOptions = {};
            defaults.animation = 'am-flip-x';

            angular.extend($collapseProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Dropdown
    ///////////////////////////////////////////////////////////////////////////

    namespace dropdownTests {
        angular.module('myApp')
            .config($dropdownConfig);

        function $dropdownConfig($dropdownProvider: ngStrap.dropdown.IDropdownProvider): void {
            const defaults: ngStrap.dropdown.IDropdownOptions = {};
            defaults.animation = 'am-flip-x';
            defaults.trigger = 'hover';

            angular.extend($dropdownProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Navbar
    ///////////////////////////////////////////////////////////////////////////

    namespace navbarTests {
        angular.module('myApp')
            .config($navbarConfig);

        function $navbarConfig($navbarProvider: ngStrap.navbar.INavbarProvider): void {
            const defaults: ngStrap.navbar.INavbarOptions = {};
            defaults.activeClass = 'in';

            angular.extend($navbarProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Scrollspy
    ///////////////////////////////////////////////////////////////////////////

    namespace scrollspyTests {
        angular.module('myApp')
            .config($scrollspyConfig);

        function $scrollspyConfig($scrollspyProvider: ngStrap.scrollspy.IScrollspyProvider): void {
            const defaults: ngStrap.scrollspy.IScrollspyOptions = {};
            defaults.offset = 0;
            defaults.target = 'my-selector';

            angular.extend($scrollspyProvider.defaults, defaults);
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Affix
    ///////////////////////////////////////////////////////////////////////////

    namespace affixTests {
        angular.module('myApp')
            .config($affixConfig);

        function $affixConfig($affixProvider: ngStrap.affix.IAffixProvider): void {
            const defaults: ngStrap.affix.IAffixOptions = {};
            defaults.offsetTop = 100;

            angular.extend($affixProvider.defaults, defaults);
        }
    }
}
