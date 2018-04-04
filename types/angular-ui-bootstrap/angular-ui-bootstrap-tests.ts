const testApp = angular.module('testApp');

testApp.config((
    $accordionConfig: ng.ui.bootstrap.IAccordionConfig,
    $buttonConfig: ng.ui.bootstrap.IButtonConfig,
    $datepickerConfig: ng.ui.bootstrap.IDatepickerConfig,
    $datepickerPopupConfig: ng.ui.bootstrap.IDatepickerPopupConfig,
    $dropdownConfig: ng.ui.bootstrap.IDropdownConfig,
    $modalProvider: ng.ui.bootstrap.IModalProvider,
    $paginationConfig: ng.ui.bootstrap.IPaginationConfig,
    $pagerConfig: ng.ui.bootstrap.IPagerConfig,
    $progressConfig: ng.ui.bootstrap.IProgressConfig,
    $ratingConfig: ng.ui.bootstrap.IRatingConfig,
    $timepickerConfig: ng.ui.bootstrap.ITimepickerConfig,
    $tooltipProvider: ng.ui.bootstrap.ITooltipProvider)=> {

    /**
     * $accordionConfig tests
     */
    $accordionConfig.closeOthers = false;


    /**
     * $buttonConfig tests
     */
    $buttonConfig.activeClass = 'active-state';
    $buttonConfig.toggleEvent = 'dblclick';


    /**
     * $datepickerConfig tests
     */
    $datepickerConfig.datepickerMode = 'month';
    $datepickerConfig.formatDay = 'd';
    $datepickerConfig.formatDayHeader = 'E';
    $datepickerConfig.formatDayTitle = 'dd-MM-yyyy';
    $datepickerConfig.formatMonth = 'M';
    $datepickerConfig.formatMonthTitle = 'yy';
    $datepickerConfig.formatYear = 'y';
    $datepickerConfig.initDate = '1389586124979';
    $datepickerConfig.maxDate = '1389586124979';
    $datepickerConfig.maxMode = 'month';
    $datepickerConfig.minDate = '1389586124979';
    $datepickerConfig.minMode = 'month';
    $datepickerConfig.shortcutPropagation = true;
    $datepickerConfig.showWeeks = false;
    $datepickerConfig.startingDay = 1;
    $datepickerConfig.yearRange = 10;
    $datepickerConfig.monthColumns = 3;
    $datepickerConfig.yearColumns = 9;
    $datepickerConfig.yearRows = 6;
    $datepickerConfig.ngModelOptions.allowInvalid = false;
    $datepickerConfig.ngModelOptions.timezone = "EST";
    $datepickerConfig.ngModelOptions.updateOn = "click";


    /**
     * $datepickerPopupConfig tests
     */
    $datepickerPopupConfig.altInputFormats = ["mm/dd/YYYY", "mm-dd-YY"];
    $datepickerPopupConfig.appendToBody = true;
    $datepickerPopupConfig.currentText = 'Select Today';
    $datepickerPopupConfig.clearText = 'Reset Selection';
    $datepickerPopupConfig.closeOnDateSelection = false;
    $datepickerPopupConfig.closeText = 'Finished';
    $datepickerPopupConfig.datepickerPopup = 'dd-MM-yyyy';
    $datepickerPopupConfig.datepickerPopupTemplateUrl = 'template.html';
    $datepickerPopupConfig.datepickerTemplateUrl = 'template.html';
    $datepickerPopupConfig.html5Types.date = 'MM-dd-yyyy';
    $datepickerPopupConfig.html5Types['datetime-local'] = 'yyyy-MM-ddTHH:mm:ss.sss';
    $datepickerPopupConfig.html5Types.month = 'yyyy-MM';
    $datepickerPopupConfig.onOpenFocus = false;
    $datepickerPopupConfig.showButtonBar = false;
    $datepickerPopupConfig.placement = "auto bottom left";


    /**
     * $dropdownConfig tests
     */
    $dropdownConfig.appendToOpenClass = "some-thing";
    $dropdownConfig.openClass = "show";


    /**
     * $modalProvider tests
     */
    $modalProvider.options.animation = false;


    /**
     * $paginationConfig tests
     */
    $paginationConfig.boundaryLinks = true;
    $paginationConfig.boundaryLinkNumbers = true;
    $paginationConfig.directionLinks = false;
    $paginationConfig.firstText = 'First Page';
    $paginationConfig.itemsPerPage = 25;
    $paginationConfig.lastText = 'Last Page';
    $paginationConfig.maxSize = 13;
    $paginationConfig.numPages = 13;
    $paginationConfig.nextText = 'Next Page';
    $paginationConfig.previousText = 'Previous Page';
    $paginationConfig.rotate = false;
    $paginationConfig.templateUrl = 'template.html';
    $paginationConfig.totalItems = 13;
    $paginationConfig.forceEllipses = true;


    /**
     * $pagerConfig tests
     */
    $pagerConfig.align = false;
    $pagerConfig.itemsPerPage = 25;
    $pagerConfig.nextText = 'Next Page';
    $pagerConfig.previousText = 'Previous Page';


    /**
     * $progressConfig tests
     */
    $progressConfig.animate = false;
    $progressConfig.max = 200;


    /**
     * $ratingConfig tests
     */
    $ratingConfig.max = 10;
    $ratingConfig.stateOff = 'rating-state-off';
    $ratingConfig.stateOn = 'rating-state-on';
    $ratingConfig.titles = ['1', '2', '3', '4', '5'];


    /**
     * $timepickerConfig tests
     */
    $timepickerConfig.hourStep = 2;
    $timepickerConfig.meridians = ['-AM-', '-PM-'];
    $timepickerConfig.minuteStep = 5;
    $timepickerConfig.secondStep = 5;
    $timepickerConfig.mousewheel = false;
    $timepickerConfig.readonlyInput = true;
    $timepickerConfig.showMeridian = false;
    $timepickerConfig.arrowkeys = false;
    $timepickerConfig.showSpinners = false;
    $timepickerConfig.showSeconds = true;
    $timepickerConfig.templateUrl = "template.html";

    /**
     * $tooltipProvider tests
     */
    $tooltipProvider.options({
        placement: 'bottom',
        animation: false,
        popupDelay: 1000,
        popupCloseDelay: 1000,
        appendToBody: true,
        trigger: 'mouseenter hover',
        useContentExp: true,
    });
    $tooltipProvider.setTriggers({
        'customOpenTrigger': 'customCloseTrigger'
    });
});

testApp.controller('TestCtrl', (
    $scope: ng.ui.bootstrap.IModalScope,
    $log: ng.ILogService,
    $modal: ng.ui.bootstrap.IModalService,
    $modalStack: ng.ui.bootstrap.IModalStackService,
    $position: ng.ui.bootstrap.IPositionService,
    $transition: ng.ui.bootstrap.ITransitionService)=> {

    /**
     * test the $modal service
     */
    const modalInstance = $modal.open({
        ariaLabelledBy: "label",
        ariaDescribedBy: "description",
        animation: false,
        backdrop: 'static',
        backdropClass: 'modal-backdrop-test',
        bindToController: true,
        controller: 'ModalTestCtrl',
        controllerAs: 'vm',
        keyboard: true,
        openedClass: 'modal-open my-modal',
        resolve: {
            items: ()=> {
                return [1, 2, 3, 4, 5];
            }
        },
        scope: $scope,
        template: "<div>i'm a template!</div>",
        templateUrl: '/templates/modal.html',
        windowClass: 'modal-test'
    });

    modalInstance.opened.then(()=> {
        $log.log('modal opened');
    });

    modalInstance.rendered.then(() => {
        $log.log('modal rendered');
    });

    modalInstance.closed.then(()=> {
        $log.log('modal closed');
    });

    modalInstance.result.then((closeResult:any)=> {
        $log.log('modal closed', closeResult);
    }, (dismissResult:any)=> {
        $log.log('modal dismissed', dismissResult);
    });

    $modal.open({
        backdrop: 'static'
    });

    $modal.open({
        template: () => "<div>i'm a template!</div>"
    });

    $modal.open({
        templateUrl: () => '/templates/modal.html'
    });

    $modal.getPromiseChain().then(() => {});

    $modal.getPromiseChain().then((value) => value * 2);

    $modal.getPromiseChain().then((value: string) => value);

    /**
     * test the $modalStack service
     */
    $modalStack.open(modalInstance, { scope: $scope });
    $modalStack.close(modalInstance);
    $modalStack.close(modalInstance, 'with reason');
    $modalStack.dismiss(modalInstance);
    $modalStack.dismiss(modalInstance, 'with reason');
    $modalStack.dismissAll();
    $modalStack.dismissAll('with reason');
    $modalStack.getTop().key.close();


    /**
     * test the $position service
     */
    const elementLogger = (coordinates: ng.ui.bootstrap.IPositionCoordinates): void=> {
        $log.log('height', coordinates.height);
        $log.log('left', coordinates.left);
        $log.log('top', coordinates.top);
        $log.log('width', coordinates.width);
    };
    const element = angular.element('<div/>');
    elementLogger($position.position(element));
    elementLogger($position.offset(element));


    /**
     * test the $transition service
     */
    $log.log('animationEndEventName', $transition.animationEndEventName);
    $log.log('transitionEndEventName', $transition.transitionEndEventName);

    const transitionElement = angular.element('<div/>');
    $transition(transitionElement, 'transition-class', { animation: true });
    $transition(transitionElement, { height: '100px', width: '50px' }, { animation: true });
    $transition(transitionElement, ()=> {}, { animation: true });
});


testApp.controller('ModalTestCtrl', (
    $scope: IModalTestCtrlScope,
    $log: ng.ILogService,
    $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
    items: Array<number>)=> {

    items.forEach(item=> {
        $log.log(item);
    });

    $scope.close = ()=> {
        if ($scope.useReason) {
            $modalInstance.close('with reason');
        } else {
            $modalInstance.close();
        }
    };

    $scope.dismiss = ()=> {
        if ($scope.useReason) {
            $modalInstance.dismiss('with reason');
        } else {
            $modalInstance.dismiss();
        }
    };
});

interface IModalTestCtrlScope {
    useReason: boolean;

    close(): void;
    dismiss(): void;
}
