// Type definitions for webdriverio 4.5.0
// Project: http://www.webdriver.io/
// Definitions by: Nick Malaguti <https://github.com/nmalaguti/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
/// <reference types="q"/>

declare namespace WebdriverIO {
    // EventEmitter
    export interface Client<T> {
        addListener(event: string, listener: Function): Client<T>;
        on(event: string, listener: Function): Client<T>;
        once(event: string, listener: Function): Client<T>;
        removeListener(event: string, listener: Function): Client<T>;
        removeAllListeners(event?: string): Client<T>;
        setMaxListeners(n: number): Client<T>;
        listeners(event: string): Client<T>;
        emit(event: string, ...args: any[]): Client<T>;
    }

    // Promise
    export interface Client<T> {
        call(callback: () => any): Client<void>;
        finally(callback: () => any): Client<T>;
        then<P>(onFulfilled?: (value: T) => P | Client<P>, onRejected?: (err: any) => P | Client<P>): Client<P>;
        catch<P>(onRejected?: (err: any) => P | Client<P>): Client<P>;
        inspect(): Q.PromiseState<T>;
    }

    // Action
    export interface Client<T> {
        addValue(
            selector: string,
            value: string | number
        ): Client<void>;
        addValue(value: string | number): Client<void>;
        addValue<P>(
            selector: string,
            value: string | number,
        ): Client<P>;
        addValue<P>(value: string | number): Client<P>;

        clearElement(selector?: string): Client<void>;
        clearElement<P>(selector?: string): Client<P>;

        click(selector?: string): Client<void>;
        click<P>(selector?: string): Client<P>;

        doubleClick(selector?: string): Client<void>;
        doubleClick<P>(selector?: string): Client<P>;

        dragAndDrop(
            sourceElem: string,
            destinationElem: string
        ): Client<void>;
        dragAndDrop(destinationElem: string): Client<void>;
        dragAndDrop<P>(
            sourceElem: string,
            destinationElem: string
        ): Client<P>;
        dragAndDrop<P>(destinationElem: string): Client<P>;

        leftClick(selector?: string): Client<void>;
        leftClick<P>(selector?: string): Client<P>;

        middleClick(selector?: string): Client<void>;
        middleClick<P>(selector?: string): Client<P>;

        moveToObject(selector?: string): Client<void>;
        moveToObject(
            selector: string,
            xoffset: number,
            yoffset: number
        ): Client<void>;
        moveToObject(
            xoffset: number,
            yoffset: number
        ): Client<void>;
        moveToObject<P>(selector?: string): Client<P>;
        moveToObject<P>(
            selector: string,
            xoffset: number,
            yoffset: number
        ): Client<P>;
        moveToObject<P>(
            xoffset: number,
            yoffset: number
        ): Client<P>;

        rightClick(selector?: string): Client<void>;
        rightClick<P>(selector?: string): Client<P>;

        selectByAttribute(
            selector: string,
            attribute: string,
            value: string
        ): Client<void>;
        selectByAttribute(
            attribute: string,
            value: string
        ): Client<void>;
        selectByAttribute<P>(
            selector: string,
            attribute: string,
            value: string
        ): Client<P>;
        selectByAttribute<P>(
            attribute: string,
            value: string
        ): Client<P>;

        selectByIndex(
            selectElem: string,
            index: number
        ): Client<void>;
        selectByIndex(index: number): Client<void>;
        selectByIndex<P>(
            selectElem: string,
            index: number
        ): Client<P>;
        selectByIndex<P>(index: number): Client<P>;

        selectByValue(
            selectElem: string,
            value: string
        ): Client<void>;
        selectByValue(value: string): Client<void>;
        selectByValue<P>(
            selectElem: string,
            value: string
        ): Client<P>;
        selectByValue<P>(value: string): Client<P>;

        selectByVisibleText(
            selectElem: string,
            text: string
        ): Client<void>;
        selectByVisibleText(text: string): Client<void>;
        selectByVisibleText<P>(
            selectElem: string,
            text: string
        ): Client<P>;
        selectByVisibleText<P>(text: string): Client<P>;

        selectorExecute<P>(
            selectors: string | string[],
            script: (elements: HTMLElement | HTMLElement[], ...args: any[]) => P,
            ...args: any[]
        ): Client<P>;

        selectorExecuteAsync<P>(
            selectors: string | string[],
            script: (elements: HTMLElement | HTMLElement[], ...args: any[]) => P,
            ...args: any[]
        ): Client<P>;

        setValue(
            selector: string,
            values: number | string | Array<string>
        ): Client<void>;
        setValue(
            values: number | string | Array<string>
        ): Client<void>;
        setValue<P>(
            selector: string,
            values: number | string | Array<string>
        ): Client<void>;
        setValue<P>(
            values: number | string | Array<string>
        ): Client<void>;

        submitForm(selector?: string): Client<void>;
        submitForm<P>(selector?: string): Client<P>;
    }

    // Appium
    export interface Client<T> {
        // backgroundApp
        // closeApp
        // context
        // contexts
        // deviceKeyEvent
        // getAppStrings
        // getCurrentDeviceActivity
        // getNetworkConnection
        // hideDeviceKeyboard
        // installAppOnDevice
        // isAppInstalledOnDevice
        // launchApp
        // lock
        // openNotifications
        // performMultiAction
        // performTouchAction
        // pullFileFromDevice
        // pushFileToDevice
        // removeAppFromDevice
        // resetApp
        // rotate
        // setImmediateValueInApp
        // setNetworkConnection
        // shake
        // toggleAirplaneModeOnDevice
        // toggleDataOnDevice
        // toggleLocationServicesOnDevice
        // toggleWiFiOnDevice
    }

    export interface Cookie {
        name: string;
        value: string;
    }

    // Cookie
    export interface Client<T> {
        deleteCookie(name?: string): Client<void>;
        deleteCookie<P>(name?: string): Client<P>;

        getCookie(): Client<Cookie[]>;
        getCookie(name: string): Client<Cookie>;
        getCookie<P>(name?: string): Client<P>;

        setCookie(cookie: Cookie): Client<void>;
        setCookie<P>(cookie: Cookie): Client<P>;
    }

    export interface Client<T> {
        session(
            action?: string,
            sessionId?: string
        ): Client<RawResult<any>>;
        session<P>(): Client<P>;

        getGridNodeDetails(): Client<Object>;
        getGridNodeDetails<P>(): Client<P>;

        gridProxyDetails(): Client<Object>;
        gridProxyDetails<P>(): Client <P>;

        gridTestSession(): Client<Object>;
        gridProxyDetails<P>(): Client <P>;
    }

    // Mobile
    export interface Client<T> {
        background(seconds: number): Client<T>;
        closeApp(): Client<T>;
        context(id?: string): Client<T>;
        contexts(): Client<T>;
        currentActivity(): any;
        deviceKeyEvent(keyValue: number): Client<T>;
        getAppStrings(language: string): Client<T>;
        getCurrentDeviceActivity(): Client<T>;
        getDeviceTime(): Client<T>;
        getGeoLocation(): Client<T>;
        getNetworkConnection(): Client<T>;
        getOrientation(): Client<T>;
        hideDeviceKeyboard(strategy: 'tapOutside' | 'pressKey'): Client<T>;
        hold(selector: string): Client<T>;
        installApp(path: string): Client<T>;
        isAppInstalled(bundleId: string): Client<T>;
        isLocked(): boolean;
        launch(): Client<T>;
        lock(seconds: number): Client<T>;
        longPressKeycode(keyCode: string, metaState: string): Client<T>;
        openNotifications(): Client<T>;
        orientation(setTo?: 'landscape' | 'portrait'): 'landscape' | 'portrait';
        performMultiAction(touchAttributes: any): Client<T>;
        performTouchAction(touchAttributes: any): Client<T>;
        pressKeycode(keyCode: string, metaState: string): Client<T>;
        pullFile(path: string): Client<T>;
        pullFolder(path: string): Client<T>;
        pushFile(path: string, data: any): Client<T>;
        release(selector: string): Client<T>;
        removeApp(bundleId: string): Client<T>;
        reset(): Client<T>;
        rotate(x: number, y: number, duration?: number, radius?: number, rotation?: number, touchCount?: number): Client<T>;
        setGeoLocation(location: { latitude: number, longitude: number, altitude: number }): Client<T>;
        setImmediateValue(id: string, value: string | Array<string>): Client<T>;
        setNetworkConnection(flags: 0 | 1 | 2 | 4 | 6): Client<T>;
        setOrientation(setTo: 'landscape' | 'portrait'): Client<T>;
        settings(settings?: { [key: string]: string }): Client<T>;
        shake(): Client<T>;
        startActivity(appPackage: string, activity: string): Client<T>;
        strings(language: string): Client<T>;
        swipe(selector?: string, xOffset?: number, yOffset?: number, speed?: number): Client<T>;
        swipeDown(selector: string, speed?: number): Client<T>;
        swipeLeft(selector: string, speed?: number): Client<T>;
        swipeRight(selector: string, speed?: number): Client<T>;
        swipeUp(selector: string, speed?: number): Client<T>;
        toggleAirplaneMode(): Client<T>;
        toggleData(): Client<T>;
        toggleLocationServices(): Client<T>;
        toggleWiFi(): Client<T>;
        touch(selector: string, longClick: boolean): Client<T>;
        touchAction(selector: string, action: 'tap' | 'press'): Client<T>;
        touchId(validFingerprint?: boolean): Client<T>;
        touchMultiPerform(actions: any): Client<T>;
        touchPerform(actions: any): Client<T>;
        unlock(): Client<T>;
    }

    export interface CssProperty {
        property: string;
        value: string;
        parsed: ParsedCssProperty;
    }

    export interface ParsedCssProperty {
        type: string;
        string: string;
        quote: string;
        unit: string;
        value: string | number | string[] | number[];
    }

    export interface Size {
        width: number;
        height: number;
    }

    export interface Location {
        x: number;
        y: number;
    }

    // Property
    export interface Client<T> {
        getAttribute(
            selector: string,
            attributeName: string
        ): Client<string> & string;
        getAttribute(
            selector: string,
            attributeName: string
        ): Client<string[]> & string[];
        getAttribute(attributeName: string): Client<string> & string;
        getAttribute(attributeName: string): Client<string[]> & string[];
        getAttribute<P>(
            selector: string,
            attributeName: string
        ): Client<P>;
        getAttribute<P>(attributeName: string): Client<P>;

        getCssProperty(
            selector: string,
            cssProperty: string
        ): CssProperty;
        getCssProperty(
            selector: string,
            cssProperty: string
        ): CssProperty[];
        getCssProperty(cssProperty: string): CssProperty;
        getCssProperty(cssProperty: string): CssProperty[];
        getCssProperty<P>(
            selector: string,
            cssProperty: string
        ): Client<P>;
        getCssProperty<P>(cssProperty: string): Client<P>;

        getElementSize(selector: string): Client<Size> & Size;
        getElementSize(selector: string): Client<Size[]> & Size[];
        getElementSize(): Client<Size|Size[]> & Size|Size[];
        getElementSize(
            selector: string,
            dimension: string
        ): number;
        getElementSize(
            selector: string,
            dimension: string
        ): number[];
        getElementSize(dimension: string): number ;
        getElementSize(dimension: string): number[];
        getElementSize<P>(selector?: string): Client<P>;
        getElementSize<P>(
            selector: string,
            dimension: string
        ): Client<P>;
        getElementSize<P>(dimension: string): Client<P>;

        getHTML(
            selector: string,
            includeSelectorTag?: boolean
        ): string;
        getHTML(
            selector: string,
            includeSelectorTag?: boolean
        ): string[];
        getHTML(includeSelectorTag?: boolean): string;
        getHTML(includeSelectorTag?: boolean): string[];
        getHTML<P>(selector?: string): Client<P>;
        getHTML<P>(
            selector: string,
            includeSelectorTag: boolean
        ): Client<P>;
        getHTML<P>(includeSelectorTag: boolean): Client<P>;

        getLocation(selector?: string): Size;
        getLocation(selector: string, axis: string): number;
        getLocation(axis: string): number;
        getLocation<P>(selector?: string): Client<P>;
        getLocation<P>(
            selector: string,
            axis: string
        ): Client<P>;
        getLocation<P>(axis: string): Client<P>;

        getLocationInView(selector: string): Size;
        getLocationInView(selector: string): Size[];
        getLocationInView(): Size;
        getLocationInView(): Size[];
        getLocationInView(
            selector: string,
            axis: string
        ): number;
        getLocationInView(
            selector: string,
            axis: string
        ): number[];
        getLocationInView(axis: string): number;
        getLocationInView(axis: string): number[];
        getLocationInView<P>(selector?: string): Client<P>;
        getLocationInView<P>(
            selector: string,
            axis: string
        ): Client<P>;
        getLocationInView<P>(axis: string): Client<P>;

        getSource(): Client<string>;
        getSource<P>(): Client<P>;

        getTagName(selector?: string): string | string[];
        getTagName<P>(selector?: string): Client<P>;

        getText(selector?: string): string | string[];
        getText<P>(selector?: string): Client<P>;

        getTitle(): Client<string>;
        getTitle<P>(): Client<P>;

        getUrl(): Client<string>;
        getUrl<P>(): Client<P>;

        getValue(selector?: string): string | string[];
        getValue<P>(selector?: string): Client<P>;
    }

    export interface LogEntry {
        timestamp: number;
        level: string;
        message: string;
    }

    export enum ApplicationCacheStatus {
        UNCACHED = 0,
        IDLE = 1,
        CHECKING = 2,
        DOWNLOADING = 3,
        UPDATE_READY = 4,
        OBSOLETE = 5
    }

    export enum Button {
        left = 0,
        middle = 1,
        right = 2
    }

    export interface StorageItem {
        key: string;
        value: any;
    }

    export interface Location {
        latitude: number;
        longitude: number;
        altitude: number;
    }

    export interface Session {
        id: string;
        capabilities: any;
    }

    export interface RawResult<T> {
        value: T;
        error: string;
    }

    // Navigation
    export interface Client<T> {
        back(): Client<void>;
        back<P>(): Client<P>;

        forward(): Client<void>;
        forward<P>(): Client<P>;

        refresh(): Client<void>;
        refresh<P>(): Client<P>;

        url(): Client<RawResult<string>> & RawResult<string>;
        url(url: string): Client<void>;
        url<P>(url?: string): Client<P>;
    }

    // Advanced input
    export interface Client<T> {
        // you probably want to use the click and drag and drop commands instead
        buttonDown(button?: string | Button): Client<void>;
        buttonDown<P>(button?: string | Button): Client<P>;

        // you probably want to use the click and drag and drop commands instead
        buttonPress(button?: string | Button): Client<void>;
        buttonPress<P>(button?: string | Button): Client<P>;

        // you probably want to use the click and drag and drop commands instead
        buttonUp(button?: string | Button): Client<void>;
        buttonUp<P>(button?: string | Button): Client<P>;

        // you probably want to use the click and drag and drop commands instead
        doDoubleClick(): Client<void>;
        doDoubleClick<P>(): Client<P>;

        // you probably want to use addValue and setValue instead
        keys(value: string | string[]): Client<void>;
        keys<P>(value: string | string[]): Client<P>;

        // you probably want to use the moveToObject command instead
        moveTo(
            id: ElementId,
            xoffset?: number,
            yoffset?: number
        ): Client<void>;
        moveTo(
            xoffset?: number,
            yoffset?: number
        ): Client<void>;
        moveTo<P>(id: ElementId): Client<P>;
        moveTo<P>(
            id: ElementId,
            xoffset: number,
            yoffset?: number
        ): Client<P>;

        // touchClick
        // touchDoubleClick
        // touchDown
        // touchFlick
        // touchLongClick
        // touchMove
        // touchScroll
        // touchUp
    }

    // Useful Protocol
    export interface Client<T> {
        alertAccept(): Client<void>;
        alertAccept<P>(): Client<P>;

        alertDismiss(): Client<void>;
        alertDismiss<P>(): Client<P>;

        alertText(text?: string): Client<string>;
        alertText<P>(): Client<P>;
        alertText<P>(text: string): Client<P>;

        frame(id: any): Client<void>;
        frame<P>(id: any): Client<P>;

        frameParent(): Client<void>;
        frameParent<P>(): Client<P>;

        init(capabilities?: DesiredCapabilities): Client<void>;
        init<P>(capabilities?: DesiredCapabilities): Client<P>;

        log(type: string): Client<RawResult<LogEntry[]>>;
        log<P>(type: string): Client<P>;

        logTypes(): Client<RawResult<string[]>> & RawResult<string[]>;
        logTypes<P>(): Client<P>;

        session(
            action?: string,
            sessionId?: string
        ): Client<RawResult<any>> & RawResult<any>;
        session<P>(action?: string): Client<P>;
        session<P>(
            action: string,
            sessionId: string
        ): Client<P>;

        sessions(): Client<RawResult<Session[]>>;
        sessions<P>(): Client<P>;

        timeouts<P>(type: string, ms: number): Client<P>;
        timeoutsAsyncScript<P>(ms: number): Client<P>;
        timeoutsImplicitWait<P>(ms: number): Client<P>;

        // window
        // windowHandle
        // windowHandleMaximize
        // windowHandlePosition
        // windowHandleSize
        // windowHandles
    }

    export type ElementId = string;

    export interface Element {
        ELEMENT: ElementId;
    }

    // Element
    export interface Client<T> {
        element(selector: string): Client<RawResult<Element>> & RawResult<Element>;
        element<P>(selector: string): Client<P>;

        elementActive(): Client<RawResult<Element>> & RawResult<Element>;
        elementActive<P>(): Client<P>;

        elementIdAttribute(
            id: ElementId,
            attributeName: string
        ): Client<RawResult<string>> & RawResult<string>;
        elementIdAttribute<P>(
            id: ElementId,
            attributeName: string
        ): Client<P>;

        elementIdClear(id: ElementId): Client<void>;
        elementIdClear<P>(id: ElementId): Client<P>;

        elementIdClick(id: ElementId): Client<void>;
        elementIdClick<P>(id: ElementId): Client<P>;

        elementIdCssProperty(
            id: ElementId,
            propertyName: string
        ): Client<RawResult<string>> & RawResult<string>;
        elementIdCssProperty<P>(
            id: ElementId,
            propertyName: string
        ): Client<P>;

        elementIdDisplayed(id: ElementId): Client<RawResult<boolean>> & RawResult<boolean>;
        elementIdDisplayed<P>(id: ElementId): Client<P>;

        elementIdElement(
            id: ElementId,
            selector: string
        ): Client<RawResult<Element>> & RawResult<Element>;
        elementIdElement<P>(
            id: ElementId,
            selector: string
        ): Client<P>;

        elementIdElements(
            id: ElementId,
            selector: string
        ): Client<RawResult<Element[]>> & RawResult<Element[]>;
        elementIdElements<P>(
            id: ElementId,
            selector: string
        ): Client<P>;

        elementIdEnabled(id: ElementId): Client<RawResult<boolean>> & RawResult<boolean>;
        elementIdEnabled<P>(id: ElementId): Client<P>;

        elementIdLocation(id: ElementId): Client<RawResult<Location>> & RawResult<Location>;
        elementIdLocation<P>(id: ElementId): Client<P>;

        elementIdLocationInView(id: ElementId): Client<RawResult<Location>> & RawResult<Location>;
        elementIdLocationInView<P>(id: ElementId): Client<P>;

        elementIdName(id: ElementId): RawResult<string>;
        elementIdName<P>(id: ElementId): Client<P>;

        elementIdSelected(id: ElementId): Client<RawResult<boolean>> & RawResult<boolean>;
        elementIdSelected<P>(id: ElementId): Client<P>;

        elementIdSize(id: ElementId): Client<RawResult<Size>> & RawResult<Size>;
        elementIdSize<P>(id: ElementId): Client<P>;

        elementIdText(id: ElementId): Client<RawResult<string>> & RawResult<string>;
        elementIdText<P>(id: ElementId): Client<P>;

        elementIdValue(
            id: ElementId,
            values: string | string[]
        ): Client<RawResult<void>>;
        elementIdValue<P>(
            id: ElementId,
            values: string | string[]
        ): Client<P>;

        elements(selector: string): Client<RawResult<Element[]>> & RawResult<Element[]>;
        elements<P>(selector: string): Client<P>;
    }

    // Unuseful Protocol
    export interface Client<T> {
        // applicationCacheStatus
        // cookie

        // use selectorExecute instead
        execute(script: string | Function, ...args: any[]): Client<RawResult<any>> & RawResult<any>;

        // use selectorExecuteAsync instead
        executeAsync(script: string | Function, ...args: any[]): Client<RawResult<any>> & RawResult<any>;

        // file
        // imeActivate
        // imeActivated
        // imeActiveEngine
        // imeAvailableEngines
        // imeDeactivated
        // localStorage
        // localStorageSize
        // location
        // orientation
        // screenshot
        // sessionStorage
        // sessionStorageSize
        // source
        // status

        // use submitForm instead
        submit(id: ElementId): Client<void>;
        submit<P>(id: ElementId): Client<P>;

        // title
    }

    // State
    export interface Client<T> {
        isEnabled(selector?: string): Client<boolean>;
        isEnabled<P>(selector?: string): Client<P>;

        isExisting(selector?: string): Client<boolean>;
        isExisting<P>(selector?: string): Client<P>;

        isSelected(selector?: string): Client<boolean>;
        isSelected<P>(selector?: string): Client<P>;

        isVisible(selector?: string): Client<boolean>;
        isVisible<P>(selector?: string): Client<P>;

        isVisibleWithinViewport(selector?: string): Client<boolean>;
        isVisibleWithinViewport<P>(selector?: string): Client<P>;
    }

    export interface CommandHistoryEntry {
        command: string;
        args: any[];
    }

    // Utility
    export interface Client<T> {
        addCommand(
            commandName: string,
            customMethod: Function,
            overwrite?: boolean
        ): Client<void>;
        addCommand<P>(
            commandName: string,
            customMethod: Function,
            overwrite?: boolean
        ): Client<P>;

        chooseFile(
            selector: string,
            localPath: string
        ): Client<void>;
        chooseFile(localPath: string): Client<void>;
        chooseFile<P>(
            selector: string,
            localPath: string
        ): Client<P>;
        chooseFile<P>(localPath: string): Client<P>;

        debug(): Client<void>;
        debug<P>(): Client<P>;

        end(): Client<void>;
        end<P>(): Client<P>;

        endAll(): Client<void>;
        endAll<P>(): Client<P>;

        getCommandHistory(): Client<CommandHistoryEntry[]>;
        getCommandHistory<P>(): Client<P>;

        pause(milliseconds: number): Client<void>;
        pause<P>(milliseconds: number): Client<P>;

        saveScreenshot(filename?: string): Client<Buffer>;
        saveScreenshot<P>(filename?: string): Client<P>;

        scroll(selector?: string): Client<void>;
        scroll(
            selector: string,
            xoffset: number,
            yoffset: number
        ): Client<void>;
        scroll(
            xoffset: number,
            yoffset: number
        ): Client<void>;
        scroll<P>(selector?: string): Client<P>;
        scroll<P>(
            selector: string,
            xoffset: number,
            yoffset: number
        ): Client<P>;
        scroll<P>(
            xoffset: number,
            yoffset: number
        ): Client<P>;

        uploadFile(localPath: string): Client<void>;
        uploadFile<P>(localPath: string): Client<P>;

        waitForEnabled(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForEnabled(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForEnabled<P>(selector?: string): Client<P>;
        waitForEnabled<P>(
            selector: string,
            milliseconds: number,
        ): Client<P>;
        waitForEnabled<P>(milliseconds: number): Client<P>;
        waitForEnabled<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean
        ): Client<P>;
        waitForEnabled<P>(
            milliseconds: number,
            reverse: boolean
        ): Client<P>;

        waitForExist(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForExist(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForExist<P>(selector?: string): Client<P>;
        waitForExist<P>(
            selector: string,
            milliseconds: number
        ): Client<P>;
        waitForExist<P>(milliseconds: number): Client<P>;
        waitForExist<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean
        ): Client<P>;
        waitForExist<P>(
            milliseconds: number,
            reverse: boolean
        ): Client<P>;

        waitForSelected(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForSelected(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForSelected<P>(selector?: string): Client<P>;
        waitForSelected<P>(
            selector: string,
            milliseconds: number
        ): Client<P>;
        waitForSelected<P>(milliseconds: number): Client<P>;
        waitForSelected<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean
        ): Client<P>;
        waitForSelected<P>(
            milliseconds: number,
            reverse: boolean
        ): Client<P>;

        waitForText(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForText(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForText<P>(selector?: string): Client<P>;
        waitForText<P>(
            selector: string,
            milliseconds: number
        ): Client<P>;
        waitForText<P>(milliseconds: number): Client<P>;
        waitForText<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean
        ): Client<P>;
        waitForText<P>(
            milliseconds: number,
            reverse: boolean
        ): Client<P>;

        waitForValue(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForValue(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForValue<P>(selector?: string): Client<P>;
        waitForValue<P>(
            selector: string,
            milliseconds: number
        ): Client<P>;
        waitForValue<P>(milliseconds: number): Client<P>;
        waitForValue<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,

        ): Client<P>;
        waitForValue<P>(
            milliseconds: number,
            reverse: boolean,

        ): Client<P>;

        waitForVisible(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForVisible(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean>;
        waitForVisible<P>(selector?: string): Client<P>;
        waitForVisible<P>(
            selector: string,
            milliseconds: number
        ): Client<P>;
        waitForVisible<P>(milliseconds: number): Client<P>;
        waitForVisible<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean
        ): Client<P>;
        waitForVisible<P>(
            milliseconds: number,
            reverse: boolean
        ): Client<P>;

        waitUntil(
            condition: () => boolean | Q.IPromise<boolean>,
            timeout?: number,
            timeoutMsg?: string,
            interval?: number
        ): Client<boolean>;
        waitUntil<P>(
            condition: () => boolean | Q.IPromise<boolean>,
            timeout?: number,
            timeoutMsg?: string,
            interval?: number
        ): Client<P>;
    }

    // Window
    export interface Client<T> {


        close(windowHandle?: string): Client<void>;
        close<P>(windowHandle?: string): Client<P>;

        getCurrentTabId(): Client<string>;
        getCurrentTabId<P>(): Client<P>;

        getTabIds(): Client<string[]>;
        getTabIds<P>(): Client<P>;

        getViewportSize(): Client<Size> & Size;
        getViewportSize(dimension: string): Client<number>;
        getViewportSize<P>(dimension?: string): Client<P>;

        newWindow(
            url: string,
            windowName: string,
            windowFeatures: string
        ): Client<string>;
        newWindow<P>(
            url: string,
            windowName: string,
            windowFeatures: string
        ): Client<P>;

        setViewportSize(
            size: Size,
            type: boolean
        ): Client<void>;
        setViewportSize<P>(
            size: Size,
            type: boolean
        ): Client<P>;

        switchTab(windowHandle?: string): Client<void>;
        switchTab<P>(windowHandle?: string): Client<P>;
    }

    export interface Options {
        protocol: string;
        waitforTimeout: number;
        coloredLogs: boolean;
        logLevel: string;
        baseUrl: string;
        desiredCapabilities: DesiredCapabilities;
        screenshotPath: string;
    }

    // Options
    export interface Client<T> {
        options: Options;
    }

    export type DesiredCapabilities = any;

    export interface RemoteOptions {
        protocol?: string;
        waitforTimeout?: number;
        waitforInterval?: number;
        coloredLogs?: boolean;
        logLevel?: string;
        baseUrl?: string;
        desiredCapabilities?: DesiredCapabilities;
    }

    export interface MultiremoteOptions {
        [key: string]: RemoteOptions;
    }

    export function remote(options?: RemoteOptions | string): Client<void>;

    export function multiremote(options?: MultiremoteOptions): Client<void>;
}

declare var browser: WebdriverIO.Client<void>;

declare module "webdriverio" {
    export = WebdriverIO;
}

