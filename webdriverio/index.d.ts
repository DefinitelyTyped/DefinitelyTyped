// Type definitions for webdriverio 4.0.4
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
        addValue(selector: string, value: string | number): Client<void>;
        addValue(value: string | number): Client<void>;

        clearElement(selector: string): Client<void>;
        clearElement(): Client<void>;

        click(selector: string): Client<void>;
        click(): Client<void>;

        doubleClick(selector: string): Client<void>;
        doubleClick(): Client<void>;

        dragAndDrop(sourceElem: string, destinationElem: string): Client<void>;
        dragAndDrop(destinationElem: string): Client<void>;

        leftClick(selector: string): Client<void>;
        leftClick(): Client<void>;

        middleClick(selector: string): Client<void>;
        middleClick(): Client<void>;

        moveToObject(selector: string): Client<void>;
        moveToObject(): Client<void>;
        moveToObject(selector: string, xoffset: number, yoffset: number): Client<void>;
        moveToObject(xoffset: number, yoffset: number): Client<void>;

        rightClick(selector: string): Client<void>;
        rightClick(): Client<void>;

        selectByAttribute(selector: string, attribute: string, value: string): Client<void>;
        selectByAttribute(attribute: string, value: string): Client<void>;

        selectByIndex(selectElem: string, index: number): Client<void>;
        selectByIndex(index: number): Client<void>;

        selectByValue(selectElem: string, value: string): Client<void>;
        selectByValue(value: string): Client<void>;

        selectByVisibleText(selectElem: string, text: string): Client<void>;
        selectByVisibleText(text: string): Client<void>;

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

        setValue(selector: string, values: number | string | Array<string>): Client<void>;
        setValue(values: number | string | Array<string>): Client<void>;

        submitForm(selector: string): Client<void>;
        submitForm(): Client<void>;
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

        getCookie(): Client<Cookie[]>;
        getCookie(name: string): Client<Cookie>;

        setCookie(cookie: Cookie): Client<void>;
    }

    export interface Client<T> {
        session(action?: string, sessionId?: string): Client<RawResult<any>>;

        getGridNodeDetails(): Client<Object>;

        gridProxyDetails(): Client<Object>;

        gridTestSession(): Client<Object>;
    }

    // Mobile
    export interface Client<T> {
        // flick
        // flickDown
        // flickLeft
        // flickRight
        // flickUp
        // getGeoLocation
        // getOrientation
        // hold
        // release
        // setGeoLocation
        // setOrientation
        // touch
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
        getAttribute(selector: string, attributeName: string): Client<string | string[]>;
        getAttribute(attributeName: string): Client<string | string[]>;

        getCssProperty(selector: string, cssProperty: string): Client<CssProperty | CssProperty[]>;
        getCssProperty(cssProperty: string): Client<CssProperty | CssProperty[]>;

        getElementSize(selector: string): Client<Size | Size[]>;
        getElementSize(): Client<Size | Size[]>;
        getElementSize(selector: string, dimension: string): Client<number | number[]>;
        getElementSize(dimension: string): Client<number | number[]>;

        getHTML(selector: string, includeSelectorTag?: boolean): Client<string | string[]>;
        getHTML(includeSelectorTag?: boolean): Client<string | string[]>;

        getLocation(selector: string): Client<Size>;
        getLocation(): Client<Size>;
        getLocation(selector: string, axis: string): Client<number>;
        getLocation(axis: string): Client<number>;

        getLocationInView(selector: string): Client<Size | Size[]>;
        getLocationInView(): Client<Size | Size[]>;
        getLocationInView(selector: string, axis: string): Client<number | number[]>;
        getLocationInView(axis: string): Client<number | number[]>;

        getSource(): Client<string>;
        getSource<P>(callback: (err: any, source: string) => P): Client<P>;

        getTagName(selector: string): Client<string | string[]>;
        getTagName(): Client<string | string[]>;

        getText(selector: string): Client<string | string[]>;
        getText(): Client<string | string[]>;

        getTitle(): Client<string>;

        getUrl(): Client<string>;

        getValue(selector: string): Client<string | string[]>;
        getValue(): Client<string | string[]>;
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
    }

    // Navigation
    export interface Client<T> {
        back(): Client<void>;

        forward(): Client<void>;

        refresh(): Client<void>;

        url(): Client<RawResult<string>>;
        url(url: string): Client<void>;
    }

    // Advanced input
    export interface Client<T> {
        // you probably want to use the click and drag and drop commands instead
        buttonDown(button?: string | Button): Client<void>;

        // you probably want to use the click and drag and drop commands instead
        buttonPress(button?: string | Button): Client<void>;

        // you probably want to use the click and drag and drop commands instead
        buttonUp(button?: string | Button): Client<void>;

        // you probably want to use the click and drag and drop commands instead
        doDoubleClick(): Client<void>;

        // you probably want to use addValue and setValue instead
        keys(value: string | string[]): Client<void>;

        // you probably want to use the moveToObject command instead
        moveTo(id: ElementId, xoffset?: number, yoffset?: number): Client<void>;
        moveTo(xoffset?: number, yoffset?: number): Client<void>;

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

        alertDismiss(): Client<void>;

        alertText(text?: string): Client<string>;

        frame(id: any): Client<void>;

        frameParent(): Client<void>;

        init(capabilities?: DesiredCapabilities): Client<void>;

        log(type: string): Client<RawResult<LogEntry[]>>;

        logTypes(): Client<RawResult<string[]>>;

        session(action?: string, sessionId?: string): Client<RawResult<any>>;

        sessions(): Client<RawResult<Session[]>>;

        // timeouts
        // timeoutsAsyncScript
        // timeoutsImplicitWait

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
        element(selector: string): Client<RawResult<Element>>;

        elementActive(): Client<RawResult<Element>>;

        elementIdAttribute(id: ElementId, attributeName: string): Client<RawResult<string>>;

        elementIdClear(id: ElementId): Client<void>;

        elementIdClick(id: ElementId): Client<void>;

        elementIdCssProperty(id: ElementId, propertyName: string): Client<RawResult<string>>;

        elementIdDisplayed(id: ElementId): Client<RawResult<boolean>>;

        elementIdElement(id: ElementId, selector: string): Client<RawResult<Element>>;

        elementIdElements(id: ElementId, selector: string): Client<RawResult<Element[]>>;

        elementIdEnabled(id: ElementId): Client<RawResult<boolean>>;

        elementIdLocation(id: ElementId): Client<RawResult<Location>>;

        elementIdLocationInView(id: ElementId): Client<RawResult<Location>>;

        elementIdName(id: ElementId): Client<RawResult<string>>;

        elementIdSelected(id: ElementId): Client<RawResult<boolean>>;

        elementIdSize(id: ElementId): Client<RawResult<Size>>;

        elementIdText(id: ElementId): Client<RawResult<string>>;

        elementIdValue(id: ElementId, values: string | string[]): Client<RawResult<void>>;

        elements(selector: string): Client<RawResult<Element[]>>;
    }

    // Unuseful Protocol
    export interface Client<T> {
        // applicationCacheStatus
        // cookie

        // use selectorExecute instead
        execute(script: string | Function, ...args: any[]): Client<RawResult<any>>;

        // use selectorExecuteAsync instead
        executeAsync(script: string | Function, ...args: any[]): Client<RawResult<any>>;

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

        // title
    }

    // State
    export interface Client<T> {
        isEnabled(selector: string): Client<boolean>;
        isEnabled(): Client<boolean>;

        isExisting(selector: string): Client<boolean>;
        isExisting(): Client<boolean>;

        isSelected(selector: string): Client<boolean>;
        isSelected(): Client<boolean>;

        isVisible(selector: string): Client<boolean>;
        isVisible(): Client<boolean>;

        isVisibleWithinViewport(selector: string): Client<boolean>;
        isVisibleWithinViewport(): Client<boolean>;
    }

    export interface CommandHistoryEntry {
        command: string;
        args: any[];
    }

    // Utility
    export interface Client<T> {
        addCommand(commandName: string, customMethod: Function, overwrite?: boolean): Client<void>;

        chooseFile(selector: string, localPath: string): Client<void>;
        chooseFile(localPath: string): Client<void>;

        debug(): Client<void>;

        end(): Client<void>;

        endAll(): Client<void>;

        getCommandHistory(): Client<CommandHistoryEntry[]>;

        pause(milliseconds: number): Client<void>;

        saveScreenshot(filename?: string): Client<Buffer>;

        scroll(selector: string): Client<void>;
        scroll(): Client<void>;
        scroll(selector: string, xoffset: number, yoffset: number): Client<void>;
        scroll(xoffset: number, yoffset: number): Client<void>;

        uploadFile(localPath: string): Client<void>;

        waitForEnabled(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForEnabled(milliseconds?: number, reverse?: boolean): Client<boolean>;

        waitForExist(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForExist(milliseconds?: number, reverse?: boolean): Client<boolean>;

        waitForSelected(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForSelected(milliseconds?: number, reverse?: boolean): Client<boolean>;

        waitForText(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForText(milliseconds?: number, reverse?: boolean): Client<boolean>;

        waitForValue(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForValue(milliseconds?: number, reverse?: boolean): Client<boolean>;

        waitForVisible(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForVisible(milliseconds?: number, reverse?: boolean): Client<boolean>;

        waitUntil(
            condition: () => boolean | Q.IPromise<boolean>,
            timeout?: number,
            timeoutMsg?: string,
            interval?: number
        ): Client<boolean>;
    }

    // Window
    export interface Client<T> {
        close(windowHandle?: string): Client<void>;

        getCurrentTabId(): Client<string>;

        getTabIds(): Client<string[]>;

        getViewportSize(): Client<Size>;
        getViewportSize(dimension: string): Client<number>;

        newWindow(url: string, windowName: string, windowFeatures: string): Client<string>;

        setViewportSize(size: Size, type: boolean): Client<void>;

        switchTab(windowHandle?: string): Client<void>;
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

