// Type definitions for Ionic
// Project: http://ionicframework.com
// Definitions by: Spencer Williams <https://github.com/spencerwi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare var ionic: ionic.IBase;


declare module ionic {

    interface IBase {
        Platform: IPlatform;
        DomUtil: IDomUtil;
        EventController: IEventController;
        Utils: IUtils;
    }

    interface IPlatform {
        ready(callback: () => void): void;
        setGrade(grade: string): void;
        device(): {uuid: string}; //TODO lookup window.device schema
        isWebView(): boolean;
        isIPad(): boolean;
        isIOS(): boolean;
        isAndroid(): boolean;
        isWindowsPhone(): boolean;
        platform(): string;
        version(): number;
        exitApp(): void;
        showStatusBar(shouldShow: boolean): void;
        fullScreen(showFullScreen:boolean, showStatusBar:boolean) : void;
        isReady: boolean;
    }

    /**
     * DOCS http://ionicframework.com/docs/api/utility/ionic.DomUtil/
     */
    interface IDomUtil
    {
        requestAnimationFrame(callback: () => void): void;
        animationFrameThrottle(callback: () => void): void;
        getPositionInParent(element: Element): void;
        ready(callback: () => void): void;
        getTextBounds(textNode: Element): {
            left: number;
            right: number;
            top: number;
            bottom: number;
            width: number;
            height: number;
        };

        getChildIndex(element: Element, type: string): number;
        getParentWithClass(element: Element, className: string): Element
        getParentOrSelfWithClass(element: Element, className: string): Element;
        rectContains(x: number, y: number, x1: number, y1: number, x2: number, y2: number): boolean;
        blurAll(): Element;
    }

    interface IEventController
    {
        trigger(eventType: string, data: Object, bubbles?: boolean, cancelable?: boolean): void;
        on(type: string, callback: () => void, element: Element): void;
        off(type: string, callback: () => void, element: Element): void;

        onGesture(eventType: string, callback: () => void, element: Element): void;
        onGesture(eventType: "hold", callback: () => void, element: Element): void;
        onGesture(eventType: "tap", callback: () => void, element: Element): void;
        onGesture(eventType: "doubletap", callback: () => void, element: Element): void;
        onGesture(eventType: "drag", callback: () => void, element: Element): void;
        onGesture(eventType: "dragstart", callback: () => void, element: Element): void;
        onGesture(eventType: "dragend", callback: () => void, element: Element): void;
        onGesture(eventType: "dragup", callback: () => void, element: Element): void;
        onGesture(eventType: "dragdown", callback: () => void, element: Element): void;
        onGesture(eventType: "dragleft", callback: () => void, element: Element): void;
        onGesture(eventType: "dragright", callback: () => void, element: Element): void;
        onGesture(eventType: "swipe", callback: () => void, element: Element): void;
        onGesture(eventType: "swipeup", callback: () => void, element: Element): void;
        onGesture(eventType: "swipedown", callback: () => void, element: Element): void;
        onGesture(eventType: "swipeleft", callback: () => void, element: Element): void;
        onGesture(eventType: "swiperight", callback: () => void, element: Element): void;
        onGesture(eventType: "transform", callback: () => void, element: Element): void;
        onGesture(eventType: "transformstart", callback: () => void, element: Element): void;
        onGesture(eventType: "transformend", callback: () => void, element: Element): void;
        onGesture(eventType: "rotate", callback: () => void, element: Element): void;
        onGesture(eventType: "pinch", callback: () => void, element: Element): void;
        onGesture(eventType: "pinchin", callback: () => void, element: Element): void;
        onGesture(eventType: "pinchout", callback: () => void, element: Element): void;
        onGesture(eventType: "touch", callback: () => void, element: Element): void;
        onGesture(eventType: "release", callback: () => void, element: Element): void;

        offGesture(eventType: string, callback: () => void, element: Element): void;
        offGesture(eventType: "hold", callback: () => void, element: Element): void;
        offGesture(eventType: "tap", callback: () => void, element: Element): void;
        offGesture(eventType: "doubletap", callback: () => void, element: Element): void;
        offGesture(eventType: "drag", callback: () => void, element: Element): void;
        offGesture(eventType: "dragstart", callback: () => void, element: Element): void;
        offGesture(eventType: "dragend", callback: () => void, element: Element): void;
        offGesture(eventType: "dragup", callback: () => void, element: Element): void;
        offGesture(eventType: "dragdown", callback: () => void, element: Element): void;
        offGesture(eventType: "dragleft", callback: () => void, element: Element): void;
        offGesture(eventType: "dragright", callback: () => void, element: Element): void;
        offGesture(eventType: "swipe", callback: () => void, element: Element): void;
        offGesture(eventType: "swipeup", callback: () => void, element: Element): void;
        offGesture(eventType: "swipedown", callback: () => void, element: Element): void;
        offGesture(eventType: "swipeleft", callback: () => void, element: Element): void;
        offGesture(eventType: "swiperight", callback: () => void, element: Element): void;
        offGesture(eventType: "transform", callback: () => void, element: Element): void;
        offGesture(eventType: "transformstart", callback: () => void, element: Element): void;
        offGesture(eventType: "transformend", callback: () => void, element: Element): void;
        offGesture(eventType: "rotate", callback: () => void, element: Element): void;
        offGesture(eventType: "pinch", callback: () => void, element: Element): void;
        offGesture(eventType: "pinchin", callback: () => void, element: Element): void;
        offGesture(eventType: "pinchout", callback: () => void, element: Element): void;
        offGesture(eventType: "touch", callback: () => void, element: Element): void;
        offGesture(eventType: "release", callback: () => void, element: Element): void;
    }

    interface IUtils
    {
        arrayMove(arr: any[], old_index: number, new_index: number): any[];
        proxy(func: Function, context: any): () => any;
        debounce(func: Function, wait: number, immediate: boolean): () => any;
        throttle(func: Function, wait: number, options?: any): () => any;
        inherit(protoProps: any, staticProps: any): any;
        extend(obj: any): any;
        nextUid(): string;
        disconnectScope(scope: any): void;
        reconnectScope(scope: any): void;
        isScopeDisconnected(scope: any): boolean;
    }

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
            show(opts: IonicLoadingOptions): void;
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
