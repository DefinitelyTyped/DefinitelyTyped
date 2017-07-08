// Type definitions for Ionic
// Project: http://ionicframework.com
// Definitions by: Spencer Williams <https://github.com/spencerwi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

interface IonicStatic {
    /**
     * What Ionic package version is.
     */
    version: string;
    Platform: {
        /**
        * Trigger a callback once the device is ready, or immediately
         * if the device is already ready. This method can be run from
         * anywhere and does not need to be wrapped by any additonal methods.
         * When the app is within a WebView (Cordova), it’ll fire
         * the callback once the device is ready. If the app is within
         * a web browser, it’ll fire the callback after window.load.
         * Please remember that Cordova features (Camera, FileSystem, etc) still
         * will not work in a web browser.
         */
        ready(callback: ()=>any): void;
        /**
         * Set the grade of the device: ‘a’, ‘b’, or ‘c’. ‘a’ is the best
         * (most css features enabled), ‘c’ is the worst. By default, sets the grade
         * depending on the current device.
         */
        setGrade(grade: string): void;
        /**
         * Return the current device (given by cordova).
         */
        device(): any;
        /**
         * Check if the platform name provided is detected.
         */
        is(platformName: string): boolean;
        /**
         * Check if we are running within a WebView (such as Cordova).
         */
        isWebView(): boolean;
        /**
         * Whether we are running on iPad.
         */
        isIPad(): boolean;
        /**
         * Whether we are running on iOS.
         */
        isIOS(): boolean;
        /**
         * Whether we are running on Android.
         */
        isAndroid(): boolean;
        /**
         * Whether we are running on Windows Phone.
         */
        isWindowsPhone(): boolean;
        /**
         * The name of the current platform.
         */
        platform(): string;
        /**
         * The version of the current device platform.
         */
        version(): number;
        /**
         * Exit the app.
         */
        exitApp(): void;
        /**
         * Shows or hides the device status bar (in Cordova). Requires cordova plugin add org.apache.cordova.statusbar
         */
        showStatusBar(shouldShow: boolean): void;
        /**
         * Sets whether the app is fullscreen or not (in Cordova).
         */
        fullScreen(showFullScreen?: boolean, showStatusBar?: boolean): void;
        /**
         * Whether the device is ready.
         */
        isReady: boolean;
        /**
         * Whether the device is fullscreen.
         */
        isFullScreen: boolean;
        /**
         * An array of all platforms found.
         */
        platforms: Array<string>;
        /**
         * What grade the current platform is.
         */
        grade: string;
    };
}

declare var ionic: IonicStatic;

declare module 'ionic' {
    export = ionic;
}

declare namespace ionic {
    namespace actionSheet {
        interface IonicActionSheetService {
            show(options: IonicActionSheetOptions): ()=>void;
        }
        interface IonicActionSheetButton {
            text: string;
        }
        interface IonicActionSheetOptions {
            buttons?: Array<IonicActionSheetButton>;
            titleText?: string;
            cancelText?: string;
            destructiveText?: string;
            cancel?: ()=>any;
            buttonClicked?: (index: number)=>boolean;
            destructiveButtonClicked?: ()=>boolean;
            cancelOnStateChange?: boolean;
            cssClass?: string;
        }
    }
    namespace backdrop {
        interface IonicBackdropService {
            retain(): void;
            release(): void;
        }
    }
    namespace gestures {
        interface IonicGestureService {
            on(eventType: string, callback: (e: any)=>any, $element: angular.IAugmentedJQuery, options: any): IonicGesture;
            off(gesture: IonicGesture, eventType: string, callback: (e: any)=>any): void;
        }

        interface IonicGesture {
            element: Element;
            enabled: boolean;
            options: {stop_browser_behavior: string };
            on(gesture: string, handler: Function): IonicGesture;
            off(gesture: string, handler: Function): IonicGesture;
            trigger(gesture: string, eventData: any): IonicGesture;
            enable(state: boolean): IonicGesture;
        }

    }
    namespace list {
        interface IonicListDelegate {
            showReorder(showReorder?: boolean): boolean;
            showDelete(showDelete?: boolean): boolean;
            canSwipeItems(canSwipeItems?: boolean): boolean;
            closeOptionButtons(): void;
            $getByHandle(handle: string): IonicListDelegate;
        }
    }
    namespace loading {
        interface IonicLoadingService {
            show(opts?: IonicLoadingOptions): void;
            hide(): void;
        }
        interface IonicLoadingOptions {
            template?: string;
            templateUrl?: string;
            scope?: any;
            noBackdrop?: boolean;
            hideOnStateChange?: boolean;
            delay?: number;
            duration?: number;
        }
    }
    namespace modal {
        interface IonicModalService {
            fromTemplate(templateString: string, options?: IonicModalOptions): IonicModalController;
            fromTemplateUrl(templateUrl: string, options?: IonicModalOptions): angular.IPromise<IonicModalController>;
        }

        interface IonicModalController {
            initialize(options: IonicModalOptions): void;
            show(): angular.IPromise<void>;
            hide(): angular.IPromise<void>;
            remove(): angular.IPromise<void>;
            isShown(): boolean;
        }

        interface IonicModalOptions {
            scope?: any;
            animation?: string;
            focusFirstInput?: boolean;
            backdropClickToClose?: boolean;
            hardwareBackButtonClose?: boolean;
        }
    }
    namespace navigation {
        interface IonicNavBarDelegate {
            align(direction?: string): void;
            showBackButton(show?: boolean): boolean;
            showBar(show?: boolean): boolean;
            title(title: string): void;
        }

        interface IonicHistoryService {
            viewHistory(): any;

            currentView(view?: any): any;
            currentHistoryId(): string;
            currentTitle(val?: string): string;

            backView(view?: any): any;
            backTitle(): string;

            forwardView(view?: any): any;

            currentStateName(): string;

            goBack(backCount?: number): void;
            removeBackView(): void;
            clearHistory(): void;
            clearCache(): angular.IPromise<any>;
            nextViewOptions(options: IonicHistoryNextViewOptions): void;
        }
        interface IonicHistoryNextViewOptions {
            disableAnimate?: boolean;
            disableBack?: boolean;
            historyRoot?: boolean;
        }
    }
    namespace platform {
        interface IonicPlatformService {
            onHardwareBackButton(callback: Function): void;
            offHardwareBackButton(callback: Function): void;
            registerBackButtonAction(callback: Function, priority: number, actionId?: any): Function;
            on(type: string, callback: Function): Function;
            ready(callback?: Function): angular.IPromise<any>;
        }
    }
    namespace popover {
        interface IonicPopoverService {
            fromTemplate(templateString: string, options: IonicPopoverOptions): IonicPopoverController;
            fromTemplateUrl(templateUrl: string, options: IonicPopoverOptions): angular.IPromise<IonicPopoverController>;
        }
        interface IonicPopoverController {
            initialize(options: IonicPopoverOptions): void;
            show($event?: any): angular.IPromise<any>;
            hide(): angular.IPromise<any>;
            isShown(): boolean;
            remove(): angular.IPromise<any>;
        }
        interface IonicPopoverOptions {
            scope?: any;
            focusFirstInput?: boolean;
            backdropClickToClose?: boolean;
            hardwareBackButtonClose?: boolean;
        }
    }
    namespace popup {
        interface IonicPopupService {
            show(options: IonicPopupFullOptions): IonicPopupPromise;
            alert(options: IonicPopupAlertOptions): IonicPopupPromise;
            confirm(options: IonicPopupConfirmOptions): IonicPopupConfirmPromise;
            prompt(options: IonicPopupPromptOptions): IonicPopupPromise;
        }

        interface IonicPopupConfirmPromise extends angular.IPromise<boolean> {
            close(value?: boolean): void;
        }
        interface IonicPopupPromise extends angular.IPromise<any> {
            close(value?: any): any;
        }
        interface IonicPopupBaseOptions {
            title?: string;
            cssClass?: string;
            subTitle?: string;
            template?: string;
            templateUrl?: string;
        }
        interface IonicPopupFullOptions extends IonicPopupBaseOptions {
            scope?: any;
            buttons?: Array<IonicPopupButton>;
        }
        interface IonicPopupButton {
            text: string;
            type?: string;
            onTap?(event?: any): void;
        }
        interface IonicPopupAlertOptions extends IonicPopupBaseOptions {
            okText?: string;
            okType?: string;
        }
        interface IonicPopupConfirmOptions extends IonicPopupBaseOptions {
            cancelText?: string;
            cancelType?: string;
            okText?: string;
            okType?: string;
        }
        interface IonicPopupPromptOptions extends IonicPopupBaseOptions {
            inputType?: string;
            inputPlaceholder?: string;
            cancelText?: string;
            cancelType?: string;
            okText?: string;
            okType?: string;
        }
    }
    namespace scroll {
        interface IonicScrollDelegate {
            resize(): void;
            scrollTop(shouldAnimate?: boolean): void;
            scrollBottom(shouldAnimate?: boolean): void;
            scrollTo(left: number, top: number, shouldAnimate?: boolean): void;
            scrollBy(left: number, top: number, shouldAnimate?: boolean): void;
            zoomTo(level: number, animate?: boolean, originLeft?: number, originTop?: number): void;
            zoomBy(factor: number, animate?: boolean, originLeft?: number, originTop?: number): void;
            getScrollPosition(): {left: number; top: number};
            anchorScroll(shouldAnimate?: boolean): void;
            freezeScroll(shouldFreeze?: boolean): boolean;
            freezeAllScrolls(shouldFreeze?: boolean): boolean;
            getScrollView(): any;
            $getByHandle(handle: string): IonicScrollDelegate;
        }
    }
    namespace sideMenu {
        interface IonicSideMenuDelegate {
            toggleLeft(isOpen?: boolean): void;
            toggleRight(isOpen?: boolean): void;
            getOpenRatio(): number;
            isOpen(): boolean;
            isOpenLeft(): boolean;
            isOpenRight(): boolean;
            canDragContent(canDrag?: boolean): boolean;
            edgeDragThreshold(value?: boolean|number): boolean;
            $getByHandle(handle: string): IonicSideMenuDelegate;
        }
    }
    namespace slideBox {
        interface IonicSlideBoxDelegate {
            update(): void;
            slide(to: number, speed?: number): void;
            enableSlide(shouldEnable?: boolean): boolean;
            previous(speed?: number): void;
            next(speed?: number): void;
            stop(): void;
            start(): void;
            currentIndex(): number;
            slidesCount(): number;
            $getByHandle(handle: string): IonicSlideBoxDelegate;
        }
    }
    namespace tabs {
        interface IonicTabsDelegate {
            select(index: number): void;
            selectedIndex(): number;
            $getByHandle(handle: string): IonicTabsDelegate;
            showBar(show?: boolean): boolean;
        }
    }
    namespace utility {
        interface IonicConfigProvider {
            views: {
                transition(transition?: string): string;
                maxCache(maxNumber?: number): number;
                forwardCache(value?: boolean): boolean;
                swipeBackEnabled(value?: boolean): boolean;
            };
            scrolling: {
                jsScrolling(value?: boolean): boolean;
            };
            backButton: {
                icon(value?: string): string;
                text(value?: string): string;
                previousTitleText(value?: boolean): boolean;
            };
            form: {
                checkbox(value?: string): string;
                toggle(value?: string): string;
            };
            spinner: {
                icon(value?: string): string;
            };
            tabs: {
                style(value?: string): string;
                position(value?: string): string;
            };
            templates: {
                maxPrefetch(value?: number): number;
            };
            navBar: {
                alignTitle(value?: string): string;
                positionPrimaryButtons(value?: string): string;
                positionSecondaryButtons(value?: string): string;
            };
        }
        interface IonicPositionService {
            position(element: any): {top: number; left: number; width: number; height: number};
            offset(element: any): {top: number; left: number; width: number; height: number};
        }
    }
}
