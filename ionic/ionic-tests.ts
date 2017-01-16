

var testIonic = angular.module('testIonic', ['ionic']);

testIonic.config(['$ionicConfigProvider', ($ionicConfigProvider: ionic.utility.IonicConfigProvider)=>{
    var transition: string = $ionicConfigProvider.views.transition();
    $ionicConfigProvider.views.transition("transition");
    var maxCache: number = $ionicConfigProvider.views.maxCache();
    $ionicConfigProvider.views.maxCache(10);
    var forwardCache: boolean = $ionicConfigProvider.views.forwardCache();
    $ionicConfigProvider.views.forwardCache(true);
    var swipeBackEnabled: boolean = $ionicConfigProvider.views.swipeBackEnabled();
    $ionicConfigProvider.views.swipeBackEnabled(true);

    var jsScrolling: boolean = $ionicConfigProvider.scrolling.jsScrolling();
    $ionicConfigProvider.scrolling.jsScrolling(true);

    var backButtonIcon: string = $ionicConfigProvider.backButton.icon();
    $ionicConfigProvider.backButton.icon("icon");
    var backButtonText: string = $ionicConfigProvider.backButton.text();
    $ionicConfigProvider.backButton.text("back");
    var usePreviousTitleText: boolean = $ionicConfigProvider.backButton.previousTitleText();
    $ionicConfigProvider.backButton.previousTitleText(false);

    var checkbox: string = $ionicConfigProvider.form.checkbox();
    $ionicConfigProvider.form.checkbox("square");
    var toggle: string = $ionicConfigProvider.form.toggle();
    $ionicConfigProvider.form.toggle("small");

    var spinnerIcon: string = $ionicConfigProvider.spinner.icon();
    $ionicConfigProvider.spinner.icon("spiral");

    var tabsStyle: string = $ionicConfigProvider.tabs.style();
    $ionicConfigProvider.tabs.style("standard");
    var tabsPosition: string = $ionicConfigProvider.tabs.position();
    $ionicConfigProvider.tabs.position("bottom");

    var maxPrefetch: number = $ionicConfigProvider.templates.maxPrefetch();
    $ionicConfigProvider.templates.maxPrefetch(10);

    var alignTitle: string = $ionicConfigProvider.navBar.alignTitle();
    $ionicConfigProvider.navBar.alignTitle("platform");
    var positionPrimaryButtons: string = $ionicConfigProvider.navBar.positionPrimaryButtons();
    $ionicConfigProvider.navBar.positionPrimaryButtons("platform");
    var positionSecondaryButtons: string = $ionicConfigProvider.navBar.positionSecondaryButtons();
    $ionicConfigProvider.navBar.positionSecondaryButtons("platform");
}])

class IonicTestController {
    public static $inject = [
        '$ionicActionSheet',
        '$ionicBackdrop',
        '$ionicGesture',
        '$ionicListDelegate',
        '$ionicLoading',
        '$ionicModal',
        '$ionicNavBarDelegate',
        '$ionicHistory',
        '$ionicPlatform',
        '$ionicPopover',
        '$ionicPopup',
        '$ionicScrollDelegate',
        '$ionicSideMenuDelegate',
        '$ionicSlideBoxDelegate',
        '$ionicTabsDelegate',
        '$ionicPosition'
    ];
    constructor(
        private $ionicActionSheet: ionic.actionSheet.IonicActionSheetService,
        private $ionicBackdrop: ionic.backdrop.IonicBackdropService,
        private $ionicGesture: ionic.gestures.IonicGestureService,
        private $ionicListDelegate: ionic.list.IonicListDelegate,
        private $ionicLoading: ionic.loading.IonicLoadingService,
        private $ionicModal: ionic.modal.IonicModalService,
        private $ionicNavBarDelegate: ionic.navigation.IonicNavBarDelegate,
        private $ionicHistory: ionic.navigation.IonicHistoryService,
        private $ionicPlatform: ionic.platform.IonicPlatformService,
        private $ionicPopover: ionic.popover.IonicPopoverService,
        private $ionicPopup: ionic.popup.IonicPopupService,
        private $ionicScrollDelegate: ionic.scroll.IonicScrollDelegate,
        private $ionicSideMenuDelegate: ionic.sideMenu.IonicSideMenuDelegate,
        private $ionicSlideBoxDelegate: ionic.slideBox.IonicSlideBoxDelegate,
        private $ionicTabsDelegate: ionic.tabs.IonicTabsDelegate,
        private $ionicPositionService: ionic.utility.IonicPositionService
    ){}

    private testActionSheet(): void {
        var closeActionSheetFn: ()=>void = this.$ionicActionSheet.show({
            buttons: [{ text: 'A button' }],
            titleText: "titleText",
            cancelText: "cancelText",
            destructiveText: "destructiveText",
            cancel: ()=>{ console.log("cancel"); },
            buttonClicked: (index)=>{ 
                console.log("buttonClicked");
                return index === 0;
            },
            destructiveButtonClicked: ()=>{
                console.log("destructiveButtonClicked");
                return false;
            },
            cancelOnStateChange: true,
            cssClass: "cssClass"
        });
        closeActionSheetFn();
    }
    private testBackdrop(): void {
        this.$ionicBackdrop.retain();
        this.$ionicBackdrop.release();
    }
    private testGesture(): void {
        var gesture: ionic.gestures.IonicGesture = this.$ionicGesture.on(
            'eventType',
            (e)=>{ return e; },
            angular.element("body"),
            {}
        );
        this.$ionicGesture.off(gesture, "eventType", (e) => { return e; });
    }
    private testList(): void {
            this.$ionicListDelegate.showReorder(true);
            var showReorder: boolean = this.$ionicListDelegate.showReorder();
            this.$ionicListDelegate.showDelete(true);
            var showDelete: boolean = this.$ionicListDelegate.showDelete();
            this.$ionicListDelegate.canSwipeItems(true);
            var canSwipeItems: boolean = this.$ionicListDelegate.canSwipeItems();
            this.$ionicListDelegate.closeOptionButtons();
            var foo: ionic.list.IonicListDelegate = this.$ionicListDelegate.$getByHandle("handle");
    }
    private testLoading(): void {
        this.$ionicLoading.show({
            template: "template",
            templateUrl: "templateUrl",
            scope: {},
            noBackdrop: false,
            hideOnStateChange: true,
            delay: 500,
            duration: 8000
        });
        this.$ionicLoading.hide();
    }
    private testModal(): void {
        var modalOptions: ionic.modal.IonicModalOptions = {
            scope: {},
            animation: "animation",
            focusFirstInput: true,
            backdropClickToClose: false,
            hardwareBackButtonClose: true
        };
        var ionicModalController: ionic.modal.IonicModalController = this.$ionicModal.fromTemplate("template", modalOptions);
        ionicModalController.initialize(modalOptions);
        ionicModalController.show().then(() => console.log("shown modal"))
        ionicModalController.hide().then(() => console.log("hid modal"))
        ionicModalController.remove().then(() => console.log("removed modal"))
        var isShown: boolean = ionicModalController.isShown();

        this.$ionicModal.fromTemplateUrl("templateUrl", modalOptions)
                        .then(modalCtrl => ionicModalController = modalCtrl);
    }
    private testNavigation(): void {
        this.$ionicNavBarDelegate.align("right");
        this.$ionicNavBarDelegate.showBackButton(true);
        var isBackButtonShown: boolean = this.$ionicNavBarDelegate.showBackButton();
        this.$ionicNavBarDelegate.showBar(true);
        var isBarShown: boolean = this.$ionicNavBarDelegate.showBar();
        this.$ionicNavBarDelegate.title("title");

        var viewHistory = this.$ionicHistory.viewHistory();
        var currentView = this.$ionicHistory.currentView();
        this.$ionicHistory.currentView({viewId: 1});
        var currentHistoryId: string = this.$ionicHistory.currentHistoryId();
        this.$ionicHistory.currentTitle("currentTitle");
        var currentTitle: string = this.$ionicHistory.currentTitle();
        var backView = this.$ionicHistory.backView();
        this.$ionicHistory.backView({viewId: 1});
        var backTitle: string = this.$ionicHistory.backTitle();
        var forwardView = this.$ionicHistory.forwardView();
        this.$ionicHistory.forwardView({viewId: 1});
        var currentStateName: string = this.$ionicHistory.currentStateName();

        this.$ionicHistory.goBack(5);
        this.$ionicHistory.removeBackView();
        this.$ionicHistory.clearHistory();
        this.$ionicHistory.clearCache().then(() => console.log("done clearing cache!"));
        this.$ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true,
            historyRoot: true
        });
    }
    private testPlatform(): void {
        var callback: Function = () => console.log("on!");
        this.$ionicPlatform.onHardwareBackButton(callback);
        this.$ionicPlatform.offHardwareBackButton(callback);
        this.$ionicPlatform.registerBackButtonAction(callback, 1, "actionId");
        this.$ionicPlatform.on("type", callback);
        this.$ionicPlatform.ready(callback);
        this.$ionicPlatform.ready().then(() => console.log("ready!"));
    }
    private testPopover(): void {
        var popoverOptions: ionic.popover.IonicPopoverOptions = {
            scope: {},
            focusFirstInput: true,
            backdropClickToClose: false,
            hardwareBackButtonClose: true
        };
        var ionicPopoverController: ionic.popover.IonicPopoverController = this.$ionicPopover.fromTemplate("template", popoverOptions);
        ionicPopoverController.initialize(popoverOptions);
        ionicPopoverController.show(angular.element("body")).then(() => console.log("shown popover"));
        ionicPopoverController.hide().then(() => console.log("hid popover"));
        ionicPopoverController.remove().then(() => console.log("removed popover"));
        var isShown: boolean = ionicPopoverController.isShown();

        this.$ionicPopover.fromTemplateUrl("templateUrl", popoverOptions)
                          .then(popoverCtrl => ionicPopoverController = popoverCtrl);
    }
    private testPopup(): void {
        this.$ionicPopup.show({
            title: "title",
            subTitle: "subTitle",
            cssClass: "cssClass",
            template: "template",
            templateUrl: "templateUrl",
            scope: {},
            buttons: [{text: "text", type: "type", onTap: (e) => {console.log(e)}}]
        }).then(() => console.log("popover shown"));
        this.$ionicPopup.show({
            title: "title",
            subTitle: "subTitle",
            cssClass: "cssClass",
            template: "template",
            templateUrl: "templateUrl",
            scope: {},
            buttons: [{text: "text", type: "type", onTap: (e) => {console.log(e)}}]
        }).close("done");

        this.$ionicPopup.alert({
            title: "title",
            subTitle: "subTitle",
            cssClass: "cssClass",
            template: "template",
            templateUrl: "templateUrl",
            okText: "OK",
            okType: "okType"
        }).then(() => console.log("popover shown"))
        this.$ionicPopup.alert({
            title: "title",
            subTitle: "subTitle",
            cssClass: "cssClass",
            template: "template",
            templateUrl: "templateUrl",
            okText: "OK",
            okType: "okType"
        }).close();

        this.$ionicPopup.confirm({
            title: "title",
            subTitle: "subTitle",
            cssClass: "cssClass",
            template: "template",
            templateUrl: "templateUrl",
            okText: "OK",
            okType: "okType",
            cancelText: "Cancel",
            cancelType: "cancelType"
        }).then((result) => console.log(result === true ? "confirmed": "cancelled"))
        this.$ionicPopup.confirm({
            title: "title",
            subTitle: "subTitle",
            cssClass: "cssClass",
            template: "template",
            templateUrl: "templateUrl",
            okText: "OK",
            okType: "okType",
            cancelText: "Cancel",
            cancelType: "cancelType"
        }).close();

        this.$ionicPopup.prompt({
            title: "title",
            subTitle: "subTitle",
            cssClass: "cssClass",
            template: "template",
            templateUrl: "templateUrl",
            okText: "OK",
            okType: "okType",
            cancelText: "Cancel",
            cancelType: "cancelType",
            inputType: "text",
            inputPlaceholder: "Type some text..."
        }).then(() => console.log("popover shown"))
        this.$ionicPopup.prompt({
            title: "title",
            subTitle: "subTitle",
            cssClass: "cssClass",
            template: "template",
            templateUrl: "templateUrl",
            okText: "OK",
            okType: "okType",
            cancelText: "Cancel",
            cancelType: "cancelType",
            inputType: "text",
            inputPlaceholder: "Type some text..."
        }).close();
    }

    private testScroll(): void {
        this.$ionicScrollDelegate.resize();
        this.$ionicScrollDelegate.scrollTop();
        this.$ionicScrollDelegate.scrollTop(true);
        this.$ionicScrollDelegate.scrollBottom();
        this.$ionicScrollDelegate.scrollBottom(true);
        this.$ionicScrollDelegate.scrollTo(0, 0);
        this.$ionicScrollDelegate.scrollTo(0, 0, true);
        this.$ionicScrollDelegate.scrollBy(0, 0);
        this.$ionicScrollDelegate.scrollBy(0, 0, true);
        this.$ionicScrollDelegate.zoomTo(1);
        this.$ionicScrollDelegate.zoomTo(1, true);
        this.$ionicScrollDelegate.zoomTo(1, true, 0);
        this.$ionicScrollDelegate.zoomTo(1, true, 0, 0);
        this.$ionicScrollDelegate.zoomBy(0.5);
        this.$ionicScrollDelegate.zoomBy(0.5, true);
        this.$ionicScrollDelegate.zoomBy(0.5, true, 50);
        this.$ionicScrollDelegate.zoomBy(0.5, true, 50, 50);
        var {top: number, left: number} = this.$ionicScrollDelegate.getScrollPosition();
        this.$ionicScrollDelegate.anchorScroll();
        this.$ionicScrollDelegate.anchorScroll(true);
        var isScrollFrozen: boolean = this.$ionicScrollDelegate.freezeScroll();
        this.$ionicScrollDelegate.freezeScroll(false);
        var areAllScrollsFrozen: boolean = this.$ionicScrollDelegate.freezeAllScrolls();
        this.$ionicScrollDelegate.freezeAllScrolls(false);
        var scrollView: any = this.$ionicScrollDelegate.getScrollView();
        var scrollDelegate: ionic.scroll.IonicScrollDelegate = this.$ionicScrollDelegate.$getByHandle("handle");
    }
    private testSideMenu(): void {
        this.$ionicSideMenuDelegate.toggleLeft();
        this.$ionicSideMenuDelegate.toggleLeft(true);
        this.$ionicSideMenuDelegate.toggleRight();
        this.$ionicSideMenuDelegate.toggleRight(true);
        var openRatio: number = this.$ionicSideMenuDelegate.getOpenRatio();
        var isOpen: boolean = this.$ionicSideMenuDelegate.isOpen();
        var isOpenLeft: boolean = this.$ionicSideMenuDelegate.isOpenLeft();
        var isOpenRight: boolean = this.$ionicSideMenuDelegate.isOpenRight();
        var canDragContent: boolean = this.$ionicSideMenuDelegate.canDragContent();
        this.$ionicSideMenuDelegate.canDragContent(false);
        var edgeDragThreshold: boolean = this.$ionicSideMenuDelegate.edgeDragThreshold();
        this.$ionicSideMenuDelegate.edgeDragThreshold(true);
        this.$ionicSideMenuDelegate.edgeDragThreshold(500);
        var sideMenuDelegate: ionic.sideMenu.IonicSideMenuDelegate = this.$ionicSideMenuDelegate.$getByHandle("handle");
    }
    private testSlideBox(): void {
        this.$ionicSlideBoxDelegate.update();
        this.$ionicSlideBoxDelegate.slide(1);
        this.$ionicSlideBoxDelegate.slide(1, 500);
        var isSlideEnabled: boolean = this.$ionicSlideBoxDelegate.enableSlide();
        this.$ionicSlideBoxDelegate.enableSlide(true);
        this.$ionicSlideBoxDelegate.previous();
        this.$ionicSlideBoxDelegate.previous(500);
        this.$ionicSlideBoxDelegate.next();
        this.$ionicSlideBoxDelegate.next(500);
        this.$ionicSlideBoxDelegate.stop();
        this.$ionicSlideBoxDelegate.start();
        var currentIndex: number = this.$ionicSlideBoxDelegate.currentIndex();
        var slidesCount: number = this.$ionicSlideBoxDelegate.slidesCount();
        var slideBoxDelegate: ionic.slideBox.IonicSlideBoxDelegate = this.$ionicSlideBoxDelegate.$getByHandle("handle");
    }
    private testTabs(): void {
        this.$ionicTabsDelegate.select(1);
        var selectedIndex: number = this.$ionicTabsDelegate.selectedIndex();
        var ionicTabsDelegate: ionic.tabs.IonicTabsDelegate = this.$ionicTabsDelegate.$getByHandle("handle");
        this.$ionicTabsDelegate.showBar(true);
        var isBarShown: boolean = this.$ionicTabsDelegate.showBar();
    }
    private testUtility(): void {
        var {top: number, left: number, width: number, height: number} = this.$ionicPositionService.position(angular.element("body"));
        var {top: number, left: number, width: number, height: number} = this.$ionicPositionService.offset(angular.element("body"));
    }

    /**
     * ionic.version
     */
    private testStaticVersion(): void {
        var version: string = ionic.version;
    }

    /**
     * ionic.Platform
     */
    private testStaticPlaform(): void {
        var callbackWithoutReturn: ()=>void;
        var callbackWithReturn: ()=>boolean;
        var ready: void = ionic.Platform.ready(callbackWithoutReturn);
        ready = ionic.Platform.ready(callbackWithReturn);
        var setGrade: void = ionic.Platform.setGrade('iOS');
        var deviceInformation: string = ionic.Platform.device();
        var isBrowser: boolean = ionic.Platform.is('browser');
        var isWebView: boolean = ionic.Platform.isWebView();
        var isIPad: boolean = ionic.Platform.isIPad();
        var isIOS: boolean = ionic.Platform.isIOS();
        var isAndroid: boolean = ionic.Platform.isAndroid();
        var isWindowsPhone: boolean = ionic.Platform.isWindowsPhone();
        var currentPlatform: string = ionic.Platform.platform();
        var currentPlatformVersion: number = ionic.Platform.version();
        var exitApp: void = ionic.Platform.exitApp();
        var showStatusBar: void = ionic.Platform.showStatusBar(true);
        var showStatusBar: void = ionic.Platform.fullScreen();
        showStatusBar = ionic.Platform.fullScreen(true);
        showStatusBar = ionic.Platform.fullScreen(true, true);
        var isReady: boolean = ionic.Platform.isReady;
        var isFullScreen: boolean = ionic.Platform.isFullScreen;
        var platforms: Array<string> = ionic.Platform.platforms;
        var grade: string = ionic.Platform.grade;
    }
}

testIonic.controller('ionicTestController', IonicTestController);

