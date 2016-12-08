// Type definitions for webdriverio 4.4.0
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

        clearElement(selector: string): Client<void>;
        clearElement(): Client<void>;
        clearElement<P>(selector: string): Client<P>;
        clearElement<P>(): Client<P>;

        click(selector: string): Client<void>;
        click(): Client<void>;
        click<P>(selector: string): Client<P>;
        click<P>(): Client<P>;

        doubleClick(selector: string): Client<void>;
        doubleClick(): Client<void>;
        doubleClick<P>(selector: string): Client<P>;
        doubleClick<P>(): Client<P>;

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

        leftClick(selector: string): Client<void>;
        leftClick(): Client<void>;
        leftClick<P>(selector: string): Client<P>;
        leftClick<P>(): Client<P>;

        middleClick(selector: string): Client<void>;
        middleClick(): Client<void>;
        middleClick<P>(selector: string): Client<P>;
        middleClick<P>(): Client<P>;

        moveToObject(selector: string): Client<void>;
        moveToObject(): Client<void>;
        moveToObject(
            selector: string,
            xoffset: number,
            yoffset: number
        ): Client<void>;
        moveToObject(
            xoffset: number,
            yoffset: number
        ): Client<void>;
        moveToObject<P>(selector: string): Client<P>;
        moveToObject<P>(): Client<P>;
        moveToObject<P>(
            selector: string,
            xoffset: number,
            yoffset: number
        ): Client<P>;
        moveToObject<P>(
            xoffset: number,
            yoffset: number
        ): Client<P>;

        rightClick(selector: string): Client<void>;
        rightClick(): Client<void>;
        rightClick<P>(selector: string): Client<P>;
        rightClick<P>(): Client<P>;

        selectByAttribute(selector: string, attribute: string, value: string): Client<void>;
        selectByAttribute(attribute: string, value: string): Client<void>;
        selectByAttribute<P>(
            selector: string,
            attribute: string,
            value: string
        ): Client<P>;
        selectByAttribute<P>(
            attribute: string,
            value: string
        ): Client<P>;

        selectByIndex(selectElem: string, index: number): Client<void>;
        selectByIndex(index: number): Client<void>;
        selectByIndex<P>(
            selectElem: string,
            index: number
        ): Client<P>;
        selectByIndex<P>(index: number): Client<P>;

        selectByValue(selectElem: string, value: string): Client<void>;
        selectByValue(value: string): Client<void>;
        selectByValue<P>(
            selectElem: string,
            value: string
        ): Client<P>;
        selectByValue<P>(value: string): Client<P>;

        selectByVisibleText(selectElem: string, text: string): Client<void>;
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

        setValue(selector: string, values: number | string | Array<string>): Client<void>;
        setValue(values: number | string | Array<string>): Client<void>;
        setValue<P>(
            selector: string,
            values: number | string | Array<string>
        ): Client<void>;
        setValue<P>(values: number | string | Array<string>): Client<void>;

        submitForm(selector: string): Client<void>;
        submitForm(): Client<void>;
        submitForm<P>(selector: string): Client<void>;
        submitForm<P>(): Client<void>;
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
        deleteCookie<P>(): Client<P>;
        deleteCookie<P>(name: string): Client<P>;

        getCookie(): Client<Cookie[]>;
        getCookie(name: string): Client<Cookie>;
        getCookie<P>(
            callback: (err: any, cookies: Cookie[]) => P
        ): Client<P>;
        getCookie<P>(
            name: string,
            callback: (err: any, cookie: Cookie) => P
        ): Client<P>;

        setCookie(cookie: Cookie): Client<void>;
        setCookie<P>(cookie: Cookie): Client<P>;
    }

    export interface Client<T> {
        session(action?: string, sessionId?: string): Client<RawResult<any>>;
        session<P>(
            callback: (err: any, result: RawResult<any>) => P
        ): Client<P>;

        getGridNodeDetails(): Client<Object>;
        getGridNodeDetails<P>(
            callback: (err: any, details: Object) => P
        ): Client<P>;

        gridProxyDetails(): Client<Object>;
        gridProxyDetails<P>(
            callback: (err: any, result: Object) => P
        ): Client <P>;

        gridTestSession(): Client<Object>;
        gridProxyDetails<P>(
            callback: (err: any, result: Object) => P
        ): Client <P>;
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
        getAttribute<P>(
            selector: string,
            attributeName: string,
            callback: (err: any, attribute: string | string[]) => P
        ): Client<P>;
        getAttribute<P>(
            attributeName: string,
            callback: (err: any, attribute: string | string[]) => P
        ): Client<P>;

        getCssProperty(selector: string, cssProperty: string): Client<CssProperty | CssProperty[]>;
        getCssProperty(cssProperty: string): Client<CssProperty | CssProperty[]>;
        getCssProperty<P>(
            selector: string,
            cssProperty: string,
            callback: (err: any, cssProperty: CssProperty | CssProperty[]) => P
        ): Client<P>;
        getCssProperty<P>(
            cssProperty: string,
            callback: (err: any, cssProperty: CssProperty | CssProperty[]) => P
        ): Client<P>;

        getElementSize(selector: string): Client<Size | Size[]>;
        getElementSize(): Client<Size | Size[]>;
        getElementSize(selector: string, dimension: string): Client<number | number[]>;
        getElementSize(dimension: string): Client<number | number[]>;
        getElementSize<P>(
            selector: string,
            callback: (err: any, size: Size | Size[]) => P
        ): Client<P>;
        getElementSize<P>(
            callback: (err: any, size: Size | Size[]) => P
        ): Client<P>;
        getElementSize<P>(
            selector: string,
            dimension: string,
            callback: (err: any, elementSize: number | number[]) => P
        ): Client<P>;
        getElementSize<P>(
            dimension: string,
            callback: (err: any, elementSize: number | number[]) => P
        ): Client<P>;

        getHTML(selector: string, includeSelectorTag?: boolean): Client<string | string[]>;
        getHTML(includeSelectorTag?: boolean): Client<string | string[]>;
        getHTML<P>(
            selector: string,
            callback: (err: any, html: string | string[]) => P
        ): Client<P>;
        getHTML<P>(
            callback: (err: any, html: string | string[]) => P
        ): Client<P>;
        getHTML<P>(
            selector: string,
            includeSelectorTag: boolean,
            callback: (err: any, html: string | string[]) => P
        ): Client<P>;
        getHTML<P>(
            includeSelectorTag: boolean,
            callback: (err: any, html: string | string[]) => P
        ): Client<P>;

        getLocation(selector: string): Client<Size>;
        getLocation(): Client<Size>;
        getLocation(selector: string, axis: string): Client<number>;
        getLocation(axis: string): Client<number>;
        getLocation<P>(
            selector: string,
            callback: (err: any, size: Size) => P
        ): Client<P>;
        getLocation<P>(
            callback: (err: any, size: Size) => P
        ): Client<P>;
        getLocation<P>(
            selector: string,
            axis: string,
            callback: (err: any, location: number) => P
        ): Client<P>;
        getLocation<P>(
            axis: string,
            callback: (err: any, location: number) => P
        ): Client<P>;

        getLocationInView(selector: string): Client<Size | Size[]>;
        getLocationInView(): Client<Size | Size[]>;
        getLocationInView(selector: string, axis: string): Client<number | number[]>;
        getLocationInView(axis: string): Client<number | number[]>;
        getLocationInView<P>(
            selector: string,
            callback: (err: any, size: Size | Size[]) => P
        ): Client<P>;
        getLocationInView<P>(
            callback: (err: any, size: Size | Size[]) => P
        ): Client<P>;
        getLocationInView<P>(
            selector: string,
            axis: string,
            callback: (err: any, location: number | number[]) => P
        ): Client<P>;
        getLocationInView<P>(
            axis: string,
            callback: (err: any, location: number | number[]) => P
        ): Client<P>;

        getSource(): Client<string>;
        getSource<P>(callback: (err: any, source: string) => P): Client<P>;

        getTagName(selector: string): Client<string | string[]>;
        getTagName(): Client<string | string[]>;
        getTagName<P>(
            selector: string,
            callback: (err: any, tagName: string | string[]) => P
        ): Client<P>;
        getTagName<P>(
            callback: (err: any, tagName: string | string[]) => P
        ): Client<P>;

        getText(selector: string): Client<string | string[]>;
        getText(): Client<string | string[]>;
        getText<P>(
            selector: string,
            callback: (err: any, text: string | string[]) => P
        ): Client<P>;
        getText<P>(
            callback: (err: any, text: string | string[]) => P
        ): Client<P>;

        getTitle(): Client<string>;
        getTitle<P>(
            callback: (err: any, title: string) => P
        ): Client<P>;

        getUrl(): Client<string>;
        getUrl<P>(
            callback: (err: any, title: string) => P
        ): Client<P>;

        getValue(selector: string): Client<string | string[]>;
        getValue(): Client<string | string[]>;
        getValue<P>(
            selector: string,
            callback: (err: any, value: string | string[]) => P
        ): Client<P>;
        getValue<P>(
            callback: (err: any, value: string | string[]) => P
        ): Client<P>;
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
        back<P>(): Client<P>;

        forward(): Client<void>;
        forward<P>(): Client<P>;

        refresh(): Client<void>;
        refresh<P>(): Client<P>;

        url(): Client<RawResult<string>>;
        url(url: string): Client<void>;
        url<P>(
            callback: (err: any, result: RawResult<string>) => P
        ): Client<P>;
        url<P>(url: string): Client<P>;
    }

    // Advanced input
    export interface Client<T> {
        // you probably want to use the click and drag and drop commands instead
        buttonDown(button?: string | Button): Client<void>;
        buttonDown<P>(): Client<P>;
        buttonDown<P>(button: string | Button): Client<P>;

        // you probably want to use the click and drag and drop commands instead
        buttonPress(button?: string | Button): Client<void>;
        buttonPress<P>(): Client<P>;
        buttonPress<P>(button: string | Button): Client<P>;

        // you probably want to use the click and drag and drop commands instead
        buttonUp(button?: string | Button): Client<void>;
        buttonUp<P>(): Client<P>;
        buttonUp(button?: string | Button): Client<void>;
        buttonUp<P>(button: string | Button): Client<P>;

        // you probably want to use the click and drag and drop commands instead
        doDoubleClick(): Client<void>;
        doDoubleClick<P>(): Client<P>;

        // you probably want to use addValue and setValue instead
        keys(value: string | string[]): Client<void>;
        keys<P>(value: string | string[]): Client<P>;

        // you probably want to use the moveToObject command instead
        moveTo(id: ElementId, xoffset?: number, yoffset?: number): Client<void>;
        moveTo(xoffset?: number, yoffset?: number): Client<void>;
        moveTo<P>(id: ElementId): Client<P>;
        moveTo<P>(
            id: ElementId,
            xoffset: number
        ): Client<P>;
        moveTo<P>(
            id: ElementId,
            xoffset: number,
            yoffset: number
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
        alertText<P>(
            callback: (err: any, text: string) => P
        ): Client<P>;
        alertText<P>(
            text: string,
            callback: (err: any, text: string) => P
        ): Client<P>;

        frame(id: any): Client<void>;
        frame<P>(id: any): Client<P>;

        frameParent(): Client<void>;
        frameParent<P>(): Client<P>;

        init(capabilities?: DesiredCapabilities): Client<void>;
        init<P>(): Client<P>;
        init<P>(capabilities: DesiredCapabilities): Client<P>;

        log(type: string): Client<RawResult<LogEntry[]>>;
        log<P>(
            type: string,
            callback: (err: any, result: RawResult<LogEntry[]>) => P
        ): Client<P>;

        logTypes(): Client<RawResult<string[]>>;
        logTypes<P>(
            callback: (err: any, result: RawResult<string[]>) => P
        ): Client<P>;

        session(action?: string, sessionId?: string): Client<RawResult<any>>;
        session<P>(
            callback: (err: any, result: RawResult<any>) => P
        ): Client<P>;
        session<P>(
            action: string,
            callback: (err: any, result: RawResult<any>) => P
        ): Client<P>;
        session<P>(
            action: string,
            sessionId: string,
            callback: (err: any, result: RawResult<any>) => P
        ): Client<P>;

        sessions(): Client<RawResult<Session[]>>;
        sessions<P>(
            callback: (err: any, sessions: RawResult<Session[]>) => P
        ): Client<P>;

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
        element<P>(
            selector: string,
            callback: (err: any, result: RawResult<Element>) => P
        ): Client<P>;

        elementActive(): Client<RawResult<Element>>;
        elementActive<P>(
            callback: (err: any, element: Element) => P
        ): Client<P>;

        elementIdAttribute(id: ElementId, attributeName: string): Client<RawResult<string>>;
        elementIdAttribute<P>(
            id: ElementId,
            attributeName: string,
            callback: (err: any, result: RawResult<string>) => P
        ): Client<P>;

        elementIdClear(id: ElementId): Client<void>;
        elementIdClear<P>(id: ElementId): Client<P>;

        elementIdClick(id: ElementId): Client<void>;
        elementIdClick<P>(id: ElementId): Client<P>;

        elementIdCssProperty(id: ElementId, propertyName: string): Client<RawResult<string>>;
        elementIdCssProperty<P>(
            id: ElementId,
            propertyName: string,
            callback: (err: any, result: RawResult<string>) => P
        ): Client<P>;

        elementIdDisplayed(id: ElementId): Client<RawResult<boolean>>;
        elementIdDisplayed<P>(
            id: ElementId,
            callback: (err: any, result: RawResult<boolean>) => P
        ): Client<P>;

        elementIdElement(id: ElementId, selector: string): Client<RawResult<Element>>;
        elementIdElement<P>(
            id: ElementId,
            selector: string,
            callback: (err: any, result: RawResult<Element>) => P
        ): Client<P>;

        elementIdElements(id: ElementId, selector: string): Client<RawResult<Element[]>>;
        elementIdElements<P>(
            id: ElementId,
            selector: string,
            callback: (err: any, result: RawResult<Element[]>) => P
        ): Client<P>;

        elementIdEnabled(id: ElementId): Client<RawResult<boolean>>;
        elementIdEnabled<P>(
            id: ElementId,
            callback: (err: any, result: RawResult<boolean>) => P
        ): Client<P>;

        elementIdLocation(id: ElementId): Client<RawResult<Location>>;
        elementIdLocation<P>(
            id: ElementId,
            callback: (err: any, result: RawResult<Location>) => P
        ): Client<P>;

        elementIdLocationInView(id: ElementId): Client<RawResult<Location>>;
        elementIdLocationInView<P>(
            id: ElementId,
            callback: (err: any, result: RawResult<Location>) => P
        ): Client<P>;

        elementIdName(id: ElementId): Client<RawResult<string>>;
        elementIdName<P>(
            id: ElementId,
            callback: (err: any, result: RawResult<string>) => P
        ): Client<P>;

        elementIdSelected(id: ElementId): Client<RawResult<boolean>>;
        elementIdSelected<P>(
            id: ElementId,
            callback: (err: any, result: RawResult<boolean>) => P
        ): Client<P>;

        elementIdSize(id: ElementId): Client<RawResult<Size>>;
        elementIdSize<P>(
            id: ElementId,
            callback: (err: any, result: RawResult<Size>) => P
        ): Client<P>;

        elementIdText(id: ElementId): Client<RawResult<string>>;
        elementIdText<P>(
            id: ElementId,
            callback: (err: any, result: RawResult<string>) => P
        ): Client<P>;

        elementIdValue(id: ElementId, values: string | string[]): Client<RawResult<void>>;
        elementIdValue<P>(
            id: ElementId,
            values: string | string[],
            callback: (err: any, result: RawResult<void>) => P
        ): Client<P>;

        elements(selector: string): Client<RawResult<Element[]>>;
        elements<P>(
            selector: string,
            callback: (err: any, result: RawResult<Element[]>) => P
        ): Client<P>;
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
        submit<P>(id: ElementId): Client<P>;

        // title
    }

    // State
    export interface Client<T> {
        isEnabled(selector: string): Client<boolean>;
        isEnabled(): Client<boolean>;
        isEnabled<P>(
            selector: string,
            callback: (err: any, isEnabled: boolean) => P
        ): Client<P>;
        isEnabled<P>(
            callback: (err: any, isEnabled: boolean) => P
        ): Client<P>;

        isExisting(selector: string): Client<boolean>;
        isExisting(): Client<boolean>;
        isExisting<P>(
            selector: string,
            callback: (err: any, isExisting: boolean) => P
        ): Client<P>;
        isExisting<P>(
            callback: (err: any, isExisting: boolean) => P
        ): Client<P>;

        isSelected(selector: string): Client<boolean>;
        isSelected(): Client<boolean>;
        isSelected<P>(
            selector: string,
            callback: (err: any, isSelected: boolean) => P
        ): Client<P>;
        isSelected<P>(
            callback: (err: any, isSelected: boolean) => P
        ): Client<P>;

        isVisible(selector: string): Client<boolean>;
        isVisible(): Client<boolean>;
        isVisible<P>(
            selector: string,
            callback: (err: any, isVisible: boolean) => P
        ): Client<P>;
        isVisible<P>(
            callback: (err: any, isVisible: boolean) => P
        ): Client<P>;

        isVisibleWithinViewport(selector: string): Client<boolean>;
        isVisibleWithinViewport(): Client<boolean>;
        isVisibleWithinViewport<P>(
            selector: string,
            callback: (err: any, isVisible: boolean) => P
        ): Client<P>;
        isVisibleWithinViewport<P>(
            callback: (err: any, isVisible: boolean) => P
        ): Client<P>;
    }

    export interface CommandHistoryEntry {
        command: string;
        args: any[];
    }

    // Utility
    export interface Client<T> {
        addCommand(commandName: string, customMethod: Function, overwrite?: boolean): Client<void>;
        addCommand<P>(
            commandName: string,
            customMethod: Function
        ): Client<P>;
        addCommand<P>(
            commandName: string,
            customMethod: Function,
            overwrite: boolean
        ): Client<P>;

        chooseFile(selector: string, localPath: string): Client<void>;
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
        getCommandHistory<P>(
            callback: (err: any, history: CommandHistoryEntry[]) => P
        ): Client<P>;

        pause(milliseconds: number): Client<void>;
        pause<P>(milliseconds: number): Client<P>;

        saveScreenshot(filename?: string): Client<Buffer>;
        saveScreenshot<P>(
            callback: (err: any, screenshot: Buffer) => P
        ): Client<P>;
        saveScreenshot<P>(
            filename: string,
            callback: (err: any, screenshot: Buffer) => P
        ): Client<P>;

        scroll(selector: string): Client<void>;
        scroll(): Client<void>;
        scroll(selector: string, xoffset: number, yoffset: number): Client<void>;
        scroll(xoffset: number, yoffset: number): Client<void>;
        scroll<P>(selector: string): Client<P>;
        scroll<P>(): Client<P>;
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

        waitForEnabled(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForEnabled(milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForEnabled<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForEnabled<P>(
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForEnabled<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForEnabled<P>(
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForEnabled<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForEnabled<P>(
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;

        waitForExist(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForExist(milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForExist<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForExist<P>(
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForExist<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForExist<P>(
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForExist<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForExist<P>(
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;

        waitForSelected(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForSelected(milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForSelected<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForSelected<P>(
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForSelected<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForSelected<P>(
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForSelected<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForSelected<P>(
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;

        waitForText(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForText(milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForText<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForText<P>(
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForText<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForText<P>(
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForText<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForText<P>(
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;

        waitForValue(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForValue(milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForValue<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForValue<P>(
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForValue<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForValue<P>(
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForValue<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForValue<P>(
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;

        waitForVisible(selector: string, milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForVisible(milliseconds?: number, reverse?: boolean): Client<boolean>;
        waitForVisible<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForVisible<P>(
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForVisible<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForVisible<P>(
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForVisible<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): Client<P>;
        waitForVisible<P>(
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
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
            interval?: number,
            callback?: (err: any, enabled: boolean) => P
        ): Client<P>;
    }

    // Window
    export interface Client<T> {
        close(windowHandle?: string): Client<void>;
        close<P>(): Client<P>;
        close<P>(windowHandle: string): Client<P>;

        getCurrentTabId(): Client<string>;
        getCurrentTabId<P>(
            callback: (err: any, tabId: string) => P
        ): Client<P>;

        getTabIds(): Client<string[]>;
        getTabIds<P>(
            callback: (err: any, tabIds: string[]) => P
        ): Client<P>;

        getViewportSize(): Client<Size>;
        getViewportSize(dimension: string): Client<number>;
        getViewportSize<P>(
            callback: (err: any, size: Size) => P
        ): Client<P>;
        getViewportSize<P>(
            dimension: string,
            callback: (err: any, viewportSize: number) => P
        ): Client<P>;

        newWindow(url: string, windowName: string, windowFeatures: string): Client<string>;
        newWindow<P>(
            url: string,
            windowName: string,
            windowFeatures: string,
            callback: (err: any, windowId: string) => P
        ): Client<P>;

        setViewportSize(size: Size, type: boolean): Client<void>;
        setViewportSize<P>(
            size: Size,
            type: boolean
        ): Client<P>;

        switchTab(windowHandle?: string): Client<void>;
        switchTab<P>(): Client<P>;
        switchTab<P>(windowHandle: string): Client<P>;
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

