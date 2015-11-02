// Type definitions for Ionic
// Project: http://ionicframework.com
// Definitions by: Spencer Williams <https://github.com/spencerwi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

interface IonicStatic {
    version: string;
}

declare var ionic: IonicStatic;

declare module 'ionic' {
    export = ionic;
}

declare module ionic {
    module actionSheet {
        interface IonicActionSheetService {
            show(options: IonicActionSheetOptions): ()=>void;
        }
        interface IonicActionSheetOptions {
            buttons?: Array<any>;
            titleText?: string;
            cancelText?: string;
            destructiveText?: string;
            cancel?: ()=>any;
            buttonClicked?: (index: any)=>any;
            destructiveButtonClicked?: ()=>any;
            cancelOnStateChange?: boolean;
            cssClass?: string;
        }
    }
    module backdrop {
        interface IonicBackdropService {
            retain(): void;
            release(): void;
        }
    }
    module gestures {
        interface IonicGestureService {
            on(eventType: string, callback: (e: any)=>any, $element: ng.IAugmentedJQuery, options: any): IonicGesture;
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
    module list {
        interface IonicListDelegate {
            showReorder(showReorder?: boolean): boolean;
            showDelete(showDelete?: boolean): boolean;
            canSwipeItems(canSwipeItems?: boolean): boolean;
            closeOptionButtons(): void;
            $getByHandle(handle: string): IonicListDelegate;
        }
    }
    module loading {
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
    module modal {
        interface IonicModalService {
            fromTemplate(templateString: string, options?: IonicModalOptions): IonicModalController;
            fromTemplateUrl(templateUrl: string, options?: IonicModalOptions): ng.IPromise<IonicModalController>;
        }

        interface IonicModalController {
            initialize(options: IonicModalOptions): void;
            show(): ng.IPromise<void>;
            hide(): ng.IPromise<void>;
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
    module navigation {
        interface IonicNavBarDelegate {
            align(direction?: string): void;
            showBackButton(show?: boolean): boolean;
            showBar(show?: boolean): boolean;
            title(title: string): void;
        }

        interface IonicHistoryService {
            viewHistory(): any;

            currentView(): any;
            currentHistoryId(): string;
            currentTitle(val?: string): string;

            backView(): any;
            backTitle(): string;

            forwardView(): any;

            currentStateName(): string;

            goBack(backCount?: number): void;
            clearHistory(): void;
            clearCache(): ng.IPromise<any>;
            nextViewOptions(options: IonicHistoryNextViewOptions): void;
        }
        interface IonicHistoryNextViewOptions {
            disableAnimate?: boolean;
            disableBack?: boolean;
            historyRoot?: boolean;
        }
    }
    module platform {
        interface IonicPlatformService {
            onHardwareBackButton(callback: Function): void;
            offHardwareBackButton(callback: Function): void;
            registerBackButtonAction(callback: Function, priority: number, actionId?: any): Function;
            on(type: string, callback: Function): Function;
            ready(callback?: Function): ng.IPromise<any>;
        }
    }
    module popover {
        interface IonicPopoverService {
            fromTemplate(templateString: string, options: IonicPopoverOptions): IonicPopoverController;
            fromTemplateUrl(templateUrl: string, options: IonicPopoverOptions): ng.IPromise<IonicPopoverController>;
        }
        interface IonicPopoverController {
            initialize(options: IonicPopoverOptions): void;
            show($event?: any): ng.IPromise<any>;
            hide(): ng.IPromise<any>;
            isShown(): boolean;
        }
        interface IonicPopoverOptions {
            scope?: any;
            focusFirstInput?: boolean;
            backdropClickToClose?: boolean;
            hardwareBackButtonClose?: boolean;
        }
    }
    module popup {
        interface IonicPopupService {
            show(options: IonicPopupFullOptions): IonicPopupPromise;
            alert(options: IonicPopupAlertOptions): IonicPopupPromise;
            confirm(options: IonicPopupConfirmOptions): IonicPopupPromise;
            prompt(options: IonicPopupPromptOptions): IonicPopupPromise;
        }

        interface IonicPopupPromise extends ng.IPromise<any> {
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
    module scroll {
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
    module sideMenu {
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
    module slideBox {
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
    module tabs {
        interface IonicTabsDelegate {
            select(index: number): void;
            selectedIndex(): number;
            $getByHandle(handle: string): IonicTabsDelegate;
        }
    }
    module utility {
        interface IonicConfigProvider {
            views: {
                transition(transition?: string): string;
                maxCache(maxNumber?: number): number;
                forwardCache(value?: boolean): boolean;
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
