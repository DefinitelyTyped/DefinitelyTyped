/// <reference path="angular-ui-bootstrap.d.ts" />

var testApp = angular.module('testApp');

testApp.config((
    $accordionConfig: ng.ui.bootstrap.IAccordionConfig,
    $buttonConfig: ng.ui.bootstrap.IButtonConfig,
    $datepickerConfig: ng.ui.bootstrap.IDatepickerConfig,
    $datepickerPopupConfig: ng.ui.bootstrap.IDatepickerPopupConfig,
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
    $datepickerConfig.dayFormat = 'd';
    $datepickerConfig.dayHeaderFormat = 'E';
    $datepickerConfig.dayTitleFormat = 'dd-MM-yyyy';
    $datepickerConfig.maxDate = '1389586124979';
    $datepickerConfig.minDate = '1389586124979';
    $datepickerConfig.monthFormat = 'M';
    $datepickerConfig.monthTitleFormat = 'yy';
    $datepickerConfig.showWeeks = false;
    $datepickerConfig.startingDay = 1;
    $datepickerConfig.yearFormat = 'y';
    $datepickerConfig.yearRange = 10;


    /**
     * $datepickerPopupConfig tests
     */
    $datepickerPopupConfig.appendToBody = true;
    $datepickerPopupConfig.currentText = 'Select Today';
    $datepickerPopupConfig.clearText = 'Reset Selection';
    $datepickerPopupConfig.closeOnDateSelection = false;
    $datepickerPopupConfig.closeText = 'Finished';
    $datepickerPopupConfig.dateFormat = 'dd-MM-yyyy';
    $datepickerPopupConfig.showButtonBar = false;
    $datepickerPopupConfig.toggleWeeksText = 'Show Weeks';


    /**
     * $paginationConfig tests
     */
    $paginationConfig.boundaryLinks = true;
    $paginationConfig.directionLinks = false;
    $paginationConfig.firstText = 'First Page';
    $paginationConfig.itemsPerPage = 25;
    $paginationConfig.lastText = 'Last Page';
    $paginationConfig.nextText = 'Next Page';
    $paginationConfig.previousText = 'Previous Page';
    $paginationConfig.rotate = false;


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


    /**
     * $timepickerConfig tests
     */
    $timepickerConfig.hourStep = 2;
    $timepickerConfig.meridians = ['-AM-', '-PM-'];
    $timepickerConfig.minuteStep = 5;
    $timepickerConfig.mousewheel = false;
    $timepickerConfig.readonlyInput = true;
    $timepickerConfig.showMeridian = false;

    /**
     * $tooltipProvider tests
     */
    $tooltipProvider.options({
        placement: 'bottom',
        animation: false,
        popupDelay: 1000,
        appendtoBody: true
    });
    $tooltipProvider.setTriggers({
        'customOpenTrigger': 'customCloseTrigger'
    });
});

testApp.controller('TestCtrl', (
    $scope: ng.IScope,
    $log: ng.ILogService,
    $modal: ng.ui.bootstrap.IModalService,
    $modalStack: ng.ui.bootstrap.IModalStackService,
    $position: ng.ui.bootstrap.IPositionService,
    $transition: ng.ui.bootstrap.ITransitionService)=> {

    /**
     * test the $modal service
     */
    var modalInstance = $modal.open({
        backdrop: 'static',
        controller: 'ModalTestCtrl',
        keyboard: true,
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

    modalInstance.result.then(closeResult=> {
        $log.log('modal closed', closeResult);
    }, dismissResult=> {
        $log.log('modal dismissed', dismissResult);
    });


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
    var elementLogger = (coordinates: ng.ui.bootstrap.IPositionCoordinates): void=> {
        $log.log('height', coordinates.height);
        $log.log('left', coordinates.left);
        $log.log('top', coordinates.top);
        $log.log('width', coordinates.width);
    };
    var element = angular.element('<div/>');
    elementLogger($position.position(element));
    elementLogger($position.offset(element));


    /**
     * test the $transition service
     */
    $log.log('animationEndEventName', $transition.animationEndEventName);
    $log.log('transitionEndEventName', $transition.transitionEndEventName);

    var transitionElement = angular.element('<div/>');
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