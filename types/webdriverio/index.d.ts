// Type definitions for WebdriverIO 4.8
// Project: http://www.webdriver.io/
// Definitions by: Nick Malaguti <https://github.com/nmalaguti>
//                 Tim Brust <https://github.com/timbru31>
//                 Fredrik Smedberg <https://github.com/fsmedberg-tc>
//                 Tanvir ul Islam <https://github.com/tanvirislam06>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare namespace WebdriverIO {
    type Method = 'POST' | 'GET' | 'DELETE';

    interface RawResult<T> {
        sessionId: string;
        value: T;
        state: 'failure' | 'success';
        selector?: string;
        message?: string;
        hCode?: number;
        class?: string;
        error?: string;
    }

    type ElementId = string;

    interface Element {
        ELEMENT: ElementId;
    }

    interface CssProperty {
        property: string;
        value: string;
        parsed: ParsedCssProperty;
    }

    interface ParsedCssProperty {
        hex: string;
        alpha: number;
        rgb: string;
        rgba: string;
        type: string;
        string: string;
        quote: string;
        unit: string;
        value: string | number | string[] | number[];
    }

    interface Size {
        width: number;
        height: number;
    }

    interface Position {
        x: number;
        y: number;
    }

    interface DOMRect {
        width: number;
        height: number;
        x: number;
        y: number;
    }

    enum ApplicationCacheStatus {
        UNCACHED = 0,
        IDLE = 1,
        CHECKING = 2,
        DOWNLOADING = 3,
        UPDATE_READY = 4,
        OBSOLETE = 5
    }

    enum Button {
        left = 0,
        middle = 1,
        right = 2
    }

    interface Status {
        build?: {
            version: string;
            revision?: string;
            time?: string;
        };

        os?: {
            name: string;
            arch?: string;
            version?: string;
        };

        java?: {
            version?: string;
        };
    }

    interface StorageItem {
        key: string;
        value: any;
    }

    interface StorageItems {
        [key: string]: any;
    }

    interface GeoLocation {
        latitude: number;
        longitude: number;
        altitude: number;
    }

    interface CommandHistoryEntry {
        command: string;
        args: any[];
    }

    type Axis = 'x' | 'y';

    type Timeouts = 'script' | 'pageLoad' | 'implicit';

    type PageLoadingStrategy = 'none' | 'eager' | 'normal';

    type LocatorStrategy = 'css selector'
        | 'link text'
        | 'partial link text'
        | 'tag name'
        | 'xpath';

    interface LogEntry {
        timestamp: number;
        level: string;
        message: string;
    }

    type LoggingPreferenceType =
        'OFF' | 'SEVERE' | 'WARNING' |
        'INFO' | 'CONFIG' | 'FINE' |
        'FINER' | 'FINEST' | 'ALL';

    interface LoggingPreferences {
        browser?: LoggingPreferenceType;
        driver?: LoggingPreferenceType;
        server?: LoggingPreferenceType;
        client?: LoggingPreferenceType;
    }

    interface ProxyObject {
        proxyType?: 'pac' | 'noproxy' | 'autodetect' | 'system' | 'manual';
        proxyAutoconfigUrl?: string;
        ftpProxy?: string;
        ftpProxyPort?: number;
        httpProxy?: string;
        httpProxyPort?: number;
        sslProxy?: string;
        sslProxyPort?: number;
        socksProxy?: string;
        socksProxyPort?: number;
        socksVersion?: string;
        socksUsername?: string;
        socksPassword?: string;
    }

    interface Session {
        id: string;
        capabilities: DesiredCapabilities;
    }

    interface Capabilities {
        browserName: string;
        acceptInsecureCerts?: boolean;
        browserVersion?: string;
        platformName?: string;
        pageLoadStrategy?: PageLoadingStrategy;
        proxy?: ProxyObject;
        setWindowRect?: boolean;
        timeouts?: Timeouts;
        unhandledPromptBehavior?: string;
    }

    interface DesiredCapabilities extends Capabilities {
        // Read-only capabilities
        cssSelectorsEnabled?: boolean;
        handlesAlerts?: boolean;
        version?: string;
        platform?: string;

        // Read-write capabilities
        javascriptEnabled?: boolean;
        databaseEnabled?: boolean;
        locationContextEnabled?: boolean;
        applicationCacheEnabled?: boolean;
        browserConnectionEnabled?: boolean;
        webStorageEnabled?: boolean;
        acceptSslCerts?: boolean;
        rotatable?: boolean;
        nativeEvents?: boolean;
        unexpectedAlertBehaviour?: string;
        elementScrollBehavior?: number;

        // Grid-specific
        seleniumProtocol?: string;
        maxInstances?: number;
        environment?: string;

        // Selenium RC (1.0) only
        commandLineFlags?: string;
        executablePath?: string;
        timeoutInSeconds?: number;
        onlyProxySeleniumTraffic?: boolean;
        avoidProxy?: boolean;
        proxyEverything?: boolean;
        proxyRequired?: boolean;
        browserSideLog?: boolean;
        optionsSet?: boolean;
        singleWindow?: boolean;
        dontInjectRegex?: RegExp;
        userJSInjection?: boolean;
        userExtensions?: string;

        // RemoteWebDriver specific
        'webdriver.remote.sessionid'?: string;
        'webdriver.remote.quietExceptions'?: boolean;

        // Selenese-Backed-WebDriver specific
        'selenium.server.url'?: string;

        loggingPrefs?: {
            browser?: LoggingPreferences;
            driver?: LoggingPreferences;
            server?: LoggingPreferences;
            client?: LoggingPreferences;
        };

        // Firefox
        firefox_binary?: string;
        firefoxProfileTemplate?: string;
        captureNetworkTraffic?: boolean;
        addCustomRequestHeaders?: boolean;
        trustAllSSLCertificates?: boolean;
        changeMaxConnections?: boolean;
        profile?: string;
        pageLoadingStrategy?: string;

        // IE specific
        'ie.forceCreateProcessApi'?: boolean;
        'ie.browserCommandLineSwitches'?: string;
        'ie.usePerProcessProxy'?: boolean;
        'ie.ensureCleanSession'?: boolean;
        'ie.setProxyByServer'?: boolean;
        ignoreProtectedModeSettings?: boolean;
        ignoreZoomSetting?: boolean;
        initialBrowserUrl?: string;
        enablePersistentHover?: boolean;
        enableElementCacheCleanup?: boolean;
        requireWindowFocus?: boolean;
        browserAttachTimeout?: number;
        logFile?: string;
        logLevel?: string;
        host?: string;
        extractPath?: string;
        silent?: string;
        killProcessesByName?: boolean;

        // Safari specific
        'safari.options'?: {
            [name: string]: any;
        };

        cleanSession?: boolean;

        // Chrome specific
        chromeOptions?: {
            args?: string[];
            binary?: string;
            extensions?: string[];

            localState?: {
                [name: string]: any;
            };

            detach?: boolean;
            debuggerAddress?: string;
            excludeSwitches?: string[];
            minidumpPath?: string;

            mobileEmulation?: {
                [name: string]: any;
            };

            perfLoggingPrefs?: {
                [name: string]: any;
            };

            windowTypes?: string[];
        };

        perfLoggingPrefs?: {
            enableNetwork?: boolean;
            enablePage?: boolean;
            enableTimeline?: boolean;
            tracingCategories?: boolean;
            bufferUsageReportingInterval?: boolean;
        };

        // RC
        honorSystemProxy?: boolean;
        ensureCleanSession?: boolean;
    }

    interface Cookie {
        name: string;
        value: string;
        path?: string;
        httpOnly?: boolean;
        expiry?: number;
        secure?: boolean;
    }

    interface Suite {
        file: string;
        parent: string;
        pending: boolean;
        title: string;
        type: string;
    }

    interface Test extends Suite {
        currentTest: string;
        passed: boolean;
        duration: any;
    }

    interface Hooks {
        onError<T>(error: Error): Promise<T> & undefined;

        onPrepare<T>(
            config: Options,
            capabilities: DesiredCapabilities
        ): Promise<T> & undefined;

        onComplete<T>(exitCode: number): Promise<T> & undefined;

        before<T>(
            capabilities: DesiredCapabilities,
            specs: string[]
        ): Promise<T> & undefined;

        beforeCommand<T>(
            commandName: string,
            args: any[]
        ): Promise<T> & undefined;

        beforeFeature<T>(feature: string): Promise<T> & undefined;
        beforeHook<T>(): Promise<T> & undefined;
        beforeScenario<T>(scenario: string): Promise<T> & undefined;

        beforeSession<T>(
            config: Options,
            capabilities: DesiredCapabilities,
            specs: string[]
        ): Promise<T> & undefined;

        beforeStep<T>(step: string): Promise<T> & undefined;
        beforeSuite<T>(suite: Suite): Promise<T> & undefined;
        beforeTest<T>(test: Test): Promise<T> & undefined;
        afterHook<T>(): Promise<T> & undefined;

        after<T>(
            result: number,
            capabilities: DesiredCapabilities,
            specs: string[]
        ): Promise<T> & undefined;

        afterCommand<T>(
            commandName: string,
            args: any[],
            result: any,
            error?: Error
        ): Promise<T> & undefined;

        afterScenario<T>(scenario: any): Promise<T> & undefined;

        afterSession<T>(
            config: Options,
            capabilities: DesiredCapabilities,
            specs: string[]
        ): Promise<T> & undefined;

        afterStep<T>(stepResult: any): Promise<T> & undefined;
        afterSuite<T>(suite: Suite): Promise<T> & undefined;
        afterTest<T>(test: Test): Promise<T> & undefined;
        afterFeature<T>(feature: string): Promise<T> & undefined;
    }

    interface Options {
        baseUrl?: string;
        bail?: number;
        coloredLogs?: boolean;
        capabilities?: DesiredCapabilities[];
        connectionRetryTimeout?: number;
        connectionRetryCount?: number;
        debug?: number;
        execArgv?: string[] | null;
        desiredCapabilities?: DesiredCapabilities;
        exclude?: string[];
        framework?: string;
        host?: string;
        isWDIO?: boolean;
        protocol?: string;
        port?: number;
        path?: string;
        plugins?: { [name: string]: any; };
        reporters?: string[] | ((...args: any[]) => void);
        reporterOptions?: { outputDir?: string; };
        logLevel?: string;
        maxInstances?: number;
        maxInstancesPerCapability?: number;
        maxSession?: number;
        mochaOpts?: { [name: string]: any; };
        jasmineNodeOpts?: { [name: string]: any; };
        cucumberOpts?: { [name: string]: any; };
        services?: string[] | ((...args: any[]) => void);
        screenshotPath?: string;
        specs?: string[];
        seleniumLogs?: string;
        suites?: { [name: string]: string[]; };
        sync?: boolean;
        waitforTimeout?: number;
        waitforInterval?: number;
        user?: string;
        key?: string;
    }

    interface UnknownOptions {
        [name: string]: any;
    }

    interface MultiRemoteOptions {
        [name: string]: Options;
    }

    interface Config extends Options, Hooks { }

    interface Client<T> {
        desiredCapabilities: DesiredCapabilities;
    }

    interface Client<T> {
        sessionId: string;
    }

    // Options
    interface Client<T> {
        options: Options;
    }

    class Launcher {
        constructor(file: string, data: Options);
        run(): Promise<any>;
    }

    class ErrorHandler {
        constructor(type: string, msg: string | number);
    }

    function multiremote(options: MultiRemoteOptions): Client<void>;
    function remote(options?: Options, modifier?: (...args: any[]) => any): Client<void>;

    // EventEmitter
    interface Client<T> {
        addListener(
            event: string,
            listener: (...args: any[]) => void
        ): Client<T>;

        on(
            event: string,
            listener: (...args: any[]) => void
        ): Client<T>;

        once(
            event: string,
            listener: (...args: any[]) => void
        ): Client<T>;

        removeListener(
            event: string,
            listener: (...args: any[]) => void
        ): Client<T>;

        removeAllListeners(event?: string): Client<T>;
        setMaxListeners(n: number): Client<T>;
        listeners(event: string): Client<T>;
        emit(
            event: string,
            ...args: any[]
        ): Client<T>;
    }

    // Promise
    interface Client<T> {
        finally(callback: (...args: any[]) => void): Client<T>;

        then<P>(
            onFulfilled?: (value: T) => P | Client<P>,
            onRejected?: (error: any) => P | Client<P>
        ): Client<P>;

        catch<P>(
            onRejected?: (error: any) => P | Client<P>
        ): Client<P>;

        inspect(): {
            state: "fulfilled" | "rejected" | "pending";
            value?: T;
            reason?: any;
        };
    }

    interface Client<T> {
        addValue(
            selector: string,
            value: string | number
        ): Client<RawResult<null>> & RawResult<null>;

        addValue(value: string | number): Client<RawResult<null>> & RawResult<null>;

        addValue<P>(
            selector: string,
            value: string | number,
        ): Client<P>;

        addValue<P>(value: string | number): Client<P>;

        clearElement(selector?: string): Client<RawResult<null>> & RawResult<null>;
        clearElement<P>(selector?: string): Client<P>;

        click(selector?: string): Client<RawResult<null>> & RawResult<null>;
        click<P>(selector?: string): Client<P>;

        doubleClick(selector?: string): Client<RawResult<null>> & RawResult<null>;
        doubleClick<P>(selector?: string): Client<P>;

        dragAndDrop(
            sourceElem: string,
            destinationElem: string
        ): Client<RawResult<null>> & RawResult<null>;

        dragAndDrop<P>(
            sourceElem: string,
            destinationElem: string
        ): Client<P>;

        dragAndDrop(destinationElem: string): Client<RawResult<null>> & RawResult<null>;
        dragAndDrop<P>(destinationElem: string): Client<P>;

        leftClick(selector?: string): Client<RawResult<null>> & RawResult<null>;

        leftClick(
            selector: string,
            xoffset?: number,
            yoffset?: number
        ): Client<RawResult<null>> & RawResult<null>;

        leftClick(
            xoffset?: number,
            yoffset?: number
        ): Client<void> & undefined;

        leftClick<P>(selector?: string): Client<P>;

        leftClick<P>(
            selector: string,
            xoffset?: number,
            yoffset?: number
        ): Client<P>;

        leftClick<P>(
            xoffset?: number,
            yoffset?: number
        ): Client<P>;

        middleClick(selector?: string): Client<RawResult<null>> & RawResult<null>;

        middleClick(
            selector: string,
            xoffset?: number,
            yoffset?: number
        ): Client<RawResult<null>> & RawResult<null>;

        middleClick(
            xoffset?: number,
            yoffset?: number
        ): Client<RawResult<null>> & RawResult<null>;

        middleClick<P>(selector?: string): Client<P>;

        middleClick<P>(
            selector: string,
            xoffset?: number,
            yoffset?: number
        ): Client<P>;

        middleClick<P>(
            xoffset?: number,
            yoffset?: number
        ): Client<P>;

        moveToObject(selector?: string): Client<RawResult<null>> & RawResult<null>;

        moveToObject(
            selector: string,
            xoffset?: number,
            yoffset?: number
        ): Client<RawResult<null>> & RawResult<null>;

        moveToObject(
            xoffset?: number,
            yoffset?: number
        ): Client<RawResult<null>> & RawResult<null>;

        moveToObject<P>(selector?: string): Client<P>;

        moveToObject<P>(
            selector: string,
            xoffset?: number,
            yoffset?: number
        ): Client<P>;

        moveToObject<P>(
            xoffset?: number,
            yoffset?: number
        ): Client<P>;

        rightClick(selector?: string): Client<RawResult<null>> & RawResult<null>;

        rightClick(
            selector: string,
            xoffset?: number,
            yoffset?: number
        ): Client<RawResult<null>> & RawResult<null>;

        rightClick(
            xoffset?: number,
            yoffset?: number
        ): Client<RawResult<null>> & RawResult<null>;

        rightClick<P>(selector?: string): Client<P>;

        rightClick<P>(
            selector: string,
            xoffset?: number,
            yoffset?: number
        ): Client<P>;

        rightClick<P>(
            xoffset?: number,
            yoffset?: number
        ): Client<P>;

        selectByAttribute(
            selector: string,
            attribute: string,
            value: string | number
        ): Client<RawResult<null>> & RawResult<null>;

        selectByAttribute(
            attribute: string,
            value: string | number
        ): Client<RawResult<null>> & RawResult<null>;

        selectByAttribute<P>(
            selector: string,
            attribute: string,
            value: string | number
        ): Client<P>;

        selectByAttribute<P>(
            attribute: string,
            value: string | number
        ): Client<P>;

        selectByIndex(
            selectElem: string,
            index: number
        ): Client<RawResult<null>> & RawResult<null>;

        selectByIndex(index: number): Client<RawResult<null>> & RawResult<null>;

        selectByIndex<P>(
            selectElem: string,
            index: number
        ): Client<P>;

        selectByIndex<P>(index: number): Client<P>;

        selectByValue(
            selectElem: string,
            value: string
        ): Client<RawResult<null>> & RawResult<null>;

        selectByValue(value: string): Client<RawResult<null>> & RawResult<null>;

        selectByValue<P>(
            selectElem: string,
            value: string
        ): Client<P>;

        selectByValue<P>(value: string): Client<P>;

        selectByVisibleText(
            selectElem: string,
            text: string
        ): Client<RawResult<null>> & RawResult<null>;

        selectByVisibleText(text: string): Client<RawResult<null>> & RawResult<null>;

        selectByVisibleText<P>(
            selectElem: string,
            text: string
        ): Client<P>;

        selectByVisibleText<P>(text: string): Client<RawResult<null>> & RawResult<null>;

        selectorExecute<P>(
            selectors: string | string[],
            script: (elements: HTMLElement | HTMLElement[], ...args: any[]) => P,
            ...args: any[]
        ): Client<P> & any;

        selectorExecute<P>(
            selectors: string | string[],
            script: (elements: HTMLElement | HTMLElement[], ...args: any[]) => P,
            ...args: any[]
        ): Client<P> & any;

        selectorExecuteAsync<P>(
            selectors: string | string[],
            script: (elements: HTMLElement | HTMLElement[], ...args: any[]) => P,
            ...args: any[]
        ): Client<P> & any;

        setValue(
            selector: string,
            values: number | string | string[]
        ): Client<RawResult<null>> & RawResult<null>;

        setValue(
            values: number | string | string[]
        ): Client<RawResult<null>> & RawResult<null>;

        setValue<P>(
            selector: string,
            values: number | string | string[]
        ): Client<void> & undefined;

        setValue<P>(
            values: number | string | string[]
        ): Client<void> & undefined;

        submitForm(selector?: string): Client<RawResult<null>> & RawResult<null>;
        submitForm<P>(selector?: string): Client<P>;
    }

    // Cookie
    interface Client<T> {
        deleteCookie(name?: string): Client<RawResult<null>> & RawResult<null>;
        deleteCookie<P>(name?: string): Client<P>;

        getCookie(): Client<Cookie & Array<RawResult<string>>> & Cookie[] & Array<RawResult<string>>;
        getCookie(name: string): Client<Cookie & RawResult<string>> & Cookie & RawResult<string>;
        getCookie<P>(name?: string): Client<P>;

        setCookie(cookie: Cookie): Client<RawResult<null>> & RawResult<null>;
        setCookie<P>(cookie: Cookie): Client<P>;
    }

    // Grid
    interface Client<T> {
        getGridNodeDetails(): Client<UnknownOptions> & UnknownOptions;
        getGridNodeDetails<P>(): Client<P>;

        gridProxyDetails(): Client<UnknownOptions> & UnknownOptions;
        gridProxyDetails<P>(): Client<P>;

        gridTestSession(): Client<UnknownOptions> & UnknownOptions;
        gridTestSession<P>(): Client<P>;
    }

    // Mobile
    interface Client<T> {
        background(seconds: number): Client<T>;
        closeApp(): Client<T>;
        context(id?: string): Client<T> & RawResult<string>;
        contexts(): Client<T> & RawResult<string[]>;
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

        rotate(
            x: number,
            y: number,
            duration?: number,
            radius?: number,
            rotation?: number,
            touchCount?: number
        ): Client<T>;

        setGeoLocation(location: GeoLocation): Client<T>;
        setImmediateValue(id: string, value: string | string[]): Client<T>;
        setNetworkConnection(flags: 0 | 1 | 2 | 4 | 6): Client<T>;
        setOrientation(setTo: 'landscape' | 'portrait'): Client<T>;
        settings(settings?: { [key: string]: string }): Client<T>;
        shake(): Client<T>;
        startActivity(appPackage: string, activity: string): Client<T>;
        strings(language: string): Client<T>;

        swipe(
            selector?: string,
            xOffset?: number,
            yOffset?: number,
            speed?: number
        ): Client<T>;

        swipeDown(selector: string, speed?: number): Client<T>;
        swipeLeft(selector: string, speed?: number): Client<T>;
        swipeRight(selector: string, speed?: number): Client<T>;
        swipeUp(selector: string, speed?: number): Client<T>;
        toggleAirplaneMode(): Client<T>;
        toggleData(): Client<T>;
        toggleLocationServices(): Client<T>;
        toggleTouchIdEnrollment(match: boolean): Client<T>;
        toggleWiFi(): Client<T>;
        touch(selector: string, longClick: boolean): Client<T>;
        touchAction(selector: string, action: 'tap' | 'press'): Client<T>;
        touchId(validFingerprint?: boolean): Client<T>;
        touchMultiPerform(actions: any): Client<T>;
        touchPerform(actions: any): Client<T>;
        unlock(): Client<T>;
        isIOS: boolean;
        isAndroid: boolean;
        isMobile: boolean;
    }

    // Property
    interface Client<T> {
        getAttribute(
            selector: string,
            attributeName: string
        ): Client<string> & Client<null> & string & null;

        getAttribute(
            selector: string,
            attributeName: string
        ): Client<string[]> & Client<null[]> & string[] & null[];

        getAttribute(attributeName: string): Client<string> & Client<null> & string & null;
        getAttribute(attributeName: string): Client<string[]> & Client<null[]> & string[] & null[];

        getAttribute<P>(
            selector: string,
            attributeName: string
        ): Client<P>;

        getAttribute<P>(attributeName: string): Client<P>;

        getCssProperty(
            selector: string,
            cssProperty: string
        ): Client<CssProperty> & CssProperty;

        getCssProperty(
            selector: string,
            cssProperty: string
        ): Client<CssProperty[]> & CssProperty[];

        getCssProperty(cssProperty: string): Client<CssProperty> & CssProperty;
        getCssProperty(cssProperty: string): Client<CssProperty[]> & CssProperty[];

        getCssProperty<P>(
            selector: string,
            cssProperty: string
        ): Client<P>;

        getCssProperty<P>(cssProperty: string): Client<P>;

        getElementSize(selector: string): Client<Size> & Size;
        getElementSize(): Client<Size> & Size;

        getElementSize(selector: string): Client<Size[]> & Size[];
        getElementSize(): Client<Size[]> & Size[];

        getElementSize(
            selector: string,
            dimension?: string
        ): Client<number> & number;

        getElementSize(
            selector: string,
            dimension?: string
        ): Client<number[]> & number[];

        getElementSize(dimension?: string): Client<number> & number;
        getElementSize(dimension?: string): Client<number[]> & number[];

        getElementSize<P>(selector?: string): Client<P>;
        getElementSize<P>(dimension?: string): Client<P>;

        getElementSize<P>(
            selector: string,
            dimension?: string
        ): Client<P>;

        getHTML(
            selector: string,
            includeSelectorTag?: boolean
        ): Client<string> & string;

        getHTML(
            selector: string,
            includeSelectorTag?: boolean
        ): Client<string[]> & string[];

        getHTML(includeSelectorTag?: boolean): Client<string> & string;
        getHTML(includeSelectorTag?: boolean): Client<string[]> & string[];
        getHTML<P>(selector?: string): Client<P>;

        getHTML<P>(
            selector: string,
            includeSelectorTag?: boolean
        ): Client<P>;

        getHTML<P>(includeSelectorTag?: boolean): Client<P>;

        getLocation(axis?: Axis): Client<number> & number;
        getLocation<P>(axis?: Axis): Client<P>;
        getLocation(selector?: string): Client<Position> & Position;
        getLocation<P>(selector?: string): Client<P>;
        getLocation(selector: string, axis?: Axis): Client<number> & number;
        getLocation<P>(selector: string, axis?: Axis): Client<P>;

        getLocationInView(axis?: Axis): Client<number> & number;
        getLocationInView(axis?: Axis): Client<number[]> & number[];
        getLocationInView<P>(axis?: Axis): Client<P>;
        getLocationInView(selector?: string): Client<Position> & Position;
        getLocationInView(selector?: string): Client<Position[]> & Position[];
        getLocationInView<P>(selector?: string): Client<P>;
        getLocationInView(selector: string, axis?: Axis): Client<number> & number;
        getLocationInView(selector: string, axis?: Axis): Client<number[]> & number[];
        getLocationInView<P>(selector: string, axis?: Axis): Client<P>;

        getSource(): Client<string> & string;
        getSource<P>(): Client<P>;

        getTagName(selector?: string): Client<string> & string;
        getTagName(selector?: string): Client<string[]> & string[];
        getTagName<P>(selector?: string): Client<P>;

        getText(selector?: string): Client<string> & string;
        getText(selector?: string): Client<string[]> & string[];
        getText<P>(selector?: string): Client<P>;

        getTitle(): Client<string> & string;
        getTitle<P>(): Client<P>;

        getUrl(): Client<string> & string;
        getUrl<P>(): Client<P>;

        getValue(selector?: string): Client<string> & string;
        getValue(selector?: string): Client<string[]> & string[];
        getValue<P>(selector?: string): Client<P>;
    }

    // Protocol
    interface Client<T> {
        alertAccept(): Client<RawResult<null>>;
        alertAccept<P>(): Client<P>;

        alertDismiss(): Client<RawResult<null>>;
        alertDismiss<P>(): Client<P>;

        alertText(): Client<string> | string;
        alertText(text: string): Client<null> | null;
        alertText<P>(text?: string): Client<P>;

        /** @deprecated */
        applicationCacheStatus(): Client<RawResult<ApplicationCacheStatus>> & RawResult<ApplicationCacheStatus> & never;

        /** @deprecated */
        applicationCacheStatus<P>(): Client<P>;

        back(): Client<RawResult<null>>;
        back<P>(): Client<P>;

        /** @deprecated in favour of Actions.pointerDown */
        buttonDown(button?: string | Button): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.pointerDown */
        buttonDown<P>(button?: string | Button): Client<P>;

        /** @deprecated in favour of Actions.pointerDown */
        buttonPress(button?: string | Button): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.pointerDown */
        buttonPress<P>(button?: string | Button): Client<P>;

        /** @deprecated in favour of Actions.pointerUp */
        buttonUp(button?: string | Button): Client<RawResult<null>> & RawResult<null>;

        /** @deprecated in favour of Actions.pointerUp */
        buttonUp<P>(button?: string | Button): Client<P>;

        cookie(): Client<RawResult<Cookie[] & Array<RawResult<string>>>> & RawResult<Cookie[] & Array<RawResult<string>>>;

        cookie(
            method: Method,
            key?: (Cookie & RawResult<string>) | string
        ): Client<RawResult<Cookie[] & Array<RawResult<string>>>> & RawResult<Cookie[] & Array<RawResult<string>>>;

        /** @deprecated in favour of Actions.pointerDown(0) + Actions.pointerMove */
        doDoubleClick(): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.pointerDown(0) + Actions.pointerMove */
        doDoubleClick<P>(): Client<P>;

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

        elementIdClear(id: ElementId): Client<RawResult<null>> & RawResult<null>;
        elementIdClear<P>(id: ElementId): Client<P>;

        elementIdClick(id: ElementId): Client<RawResult<null>> & RawResult<null>;
        elementIdClick<P>(id: ElementId): Client<P>;

        elementIdCssProperty(
            id: ElementId,
            propertyName: string
        ): Client<RawResult<string>> & RawResult<string>;

        elementIdCssProperty<P>(
            id: ElementId,
            propertyName: string
        ): Client<P>;

        /** @deprecated */
        elementIdDisplayed(id: ElementId): Client<RawResult<boolean>> & RawResult<boolean> & never;

        /** @deprecated */
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

        /** @deprecated in favour of elementIdRect */
        elementIdLocation(id: ElementId): Client<RawResult<Position>> & RawResult<Position> & never;

        /** @deprecated in favour of elementIdRect */
        elementIdLocation<P>(id: ElementId): Client<P>;

        /** @deprecated in favour of elementIdRect */
        elementIdLocationInView(id: ElementId): Client<RawResult<Position>> & RawResult<Position> & never;

        /** @deprecated in favour of elementIdRect */
        elementIdLocationInView<P>(id: ElementId): Client<P>;

        elementIdName(id: ElementId): Client<RawResult<string>> & RawResult<string>;
        elementIdName<P>(id: ElementId): Client<P>;

        elementIdRect(id: ElementId): Client<RawResult<DOMRect>> & RawResult<DOMRect>;
        elementIdRect<P>(id: ElementId): Client<P>;

        elementIdSelected(id: ElementId): Client<RawResult<boolean>> & RawResult<boolean>;
        elementIdSelected<P>(id: ElementId): Client<P>;

        /** @deprecated in favour of elementIdRect */
        elementIdSize(id: ElementId): Client<RawResult<Size>> & RawResult<Size> & never;

        /** @deprecated in favour of elementIdRect */
        elementIdSize<P>(id: ElementId): Client<P>;

        elementIdText(id: ElementId): Client<RawResult<string>> & RawResult<string>;
        elementIdText<P>(id: ElementId): Client<P>;

        elementIdValue(
            id: ElementId,
            values: string | string[]
        ): Client<RawResult<null>> & RawResult<null>;

        elementIdValue<P>(
            id: ElementId,
            values: string | string[]
        ): Client<P>;

        elements(selector: string): Client<RawResult<Element[]>> & RawResult<Element[]>;
        elements<P>(selector: string): Client<P>;

        execute(
            script: string | ((...args: any[]) => void),
            ...args: any[]
        ): Client<RawResult<any>> & RawResult<any>;

        executeAsync(
            script: string | ((...args: any[]) => void),
            ...args: any[]
        ): Client<RawResult<any>> & RawResult<any>;

        /** @deprecated */
        file(date: string): Client<RawResult<null>> & never;

        /** @deprecated */
        file<P>(date: string): Client<P> & never;

        forward(): Client<RawResult<null>> & RawResult<null>;
        forward<P>(): Client<P>;

        frame(id: any): Client<RawResult<null>> & RawResult<null>;
        frame<P>(id: any): Client<P>;

        frameParent(): Client<RawResult<null>> & RawResult<null>;
        frameParent<P>(): Client<P>;

        /** @deprecated */
        imeActivate(engine: string): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated */
        imeActivate<P>(engine: string): Client<P> & never;

        /** @deprecated */
        imeActivated(): Client<RawResult<boolean>> & RawResult<boolean> & never;

        /** @deprecated */
        imeActivated<P>(): Client<P>;

        /** @deprecated */
        imeActiveEngine(): Client<RawResult<string>> & string & never;

        /** @deprecated */
        imeActiveEngine<P>(): Client<P>;

        /** @deprecated */
        imeAvailableEngines(): Client<RawResult<string[]>> & RawResult<string[]> & never;

        /** @deprecated */
        imeAvailableEngines<P>(): Client<P>;

        /** @deprecated */
        imeDeactivated(): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated */
        imeDeactivated<P>(): Client<P>;

        init(capabilities?: DesiredCapabilities): Client<RawResult<null>> & RawResult<null>;
        init<P>(capabilities?: DesiredCapabilities): Client<P>;

        /** @deprecated in favour of Actions.keyDown */
        keys(value: string | string[]): Client<RawResult<null>> & RawResult<null> & Client<void>;

        /** @deprecated in favour of Actions.keyDown */
        keys<P>(value: string | string[]): Client<P>;

        /** @deprecated */
        localStorage(): Client<RawResult<StorageItems[]>> & RawResult<StorageItems[]>;

        /** @deprecated */
        localStorage<P>(): Client<P>;

        /** @deprecated */
        localStorage(
            method: Method,
            key?: string
        ): Client<RawResult<StorageItems[]>> & RawResult<StorageItems[]> & never;

        /** @deprecated */
        localStorage(
            method: Method,
            key?: string
        ): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated */
        localStorage<P>(
            method: Method,
            key?: string | StorageItems
        ): Client<P>;

        /** @deprecated */
        localStorageSize(): Client<RawResult<number>> & RawResult<number> & never;

        /** @deprecated */
        localStorageSize<P>(): Client<P>;

        /** @deprecated in favour of elementIdRect */
        location(type: GeoLocation): Client<RawResult<number>> & RawResult<number> & never;

        /** @deprecated in favour of elementIdRect */
        location<P>(type: GeoLocation): Client<P>;

        /** @deprecated */
        log(type: LoggingPreferences): Client<RawResult<LogEntry[]>> & never;

        /** @deprecated */
        log<P>(type: LoggingPreferences): Client<P>;

        /** @deprecated */
        logTypes(): Client<RawResult<LoggingPreferences[]>> & RawResult<LoggingPreferences[]> & never;

        /** @deprecated */
        logTypes<P>(): Client<P>;

        /** @deprecated in favour of Actions.pointerMove */
        moveTo(
            id: ElementId,
            xoffset: number,
            yoffset: number
        ): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.pointerMove */
        moveTo(
            xoffset: number,
            yoffset: number
        ): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.pointerMove */
        moveTo<P>(id: ElementId): Client<P>;

        /** @deprecated in favour of Actions.pointerMove */
        moveTo<P>(
            id: ElementId,
            xoffset: number,
            yoffset: number
        ): Client<P>;

        refresh(): Client<RawResult<null>> & RawResult<null>;
        refresh<P>(): Client<P>;

        screenshot(): Client<RawResult<string>> & RawResult<string>;

        session<P>(): Client<P>;

        session(
            action?: Method,
            sessionId?: string
        ): Client<RawResult<DesiredCapabilities>> & RawResult<DesiredCapabilities>;

        session<P>(action?: Method): Client<P>;

        session<P>(
            action?: Method,
            sessionId?: string
        ): Client<P> & null;

        /** @deprecated */
        sessions(): Client<RawResult<Session[]>> & RawResult<Session[]> & never;

        /** @deprecated */
        sessions<P>(): Client<P>;

        /** @deprecated */
        sessionStorage(): Client<RawResult<StorageItems>> & RawResult<StorageItems> & never;

        /** @deprecated */
        sessionStorage<P>(): Client<P>;

        /** @deprecated */
        sessionStorage(method: Method): Client<RawResult<string[]>> & RawResult<string[]> & never;

        /** @deprecated */
        sessionStorage(method: Method): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated */
        sessionStorage<P>(method: Method): Client<P>;

        /** @deprecated */
        sessionStorage(
            method: Method,
            key: string
        ): Client<RawResult<string[]>> & RawResult<string[]> & never;

        /** @deprecated */
        sessionStorage(
            method: Method,
            key: string
        ): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated */
        sessionStorage<P>(
            method: Method,
            key: string
        ): Client<P>;

        /** @deprecated */
        sessionStorage(
            method: Method,
            key: StorageItems
        ): Client<RawResult<null>> & RawResult<null>;

        /** @deprecated */
        sessionStorage<P>(
            method: Method,
            key: StorageItems
        ): Client<P>;

        /** @deprecated */
        sessionStorageSize(): Client<RawResult<number>> & RawResult<number> & never;

        /** @deprecated */
        sessionStorageSize<P>(): Client<P>;

        source(): Client<RawResult<string>> & RawResult<string>;
        source<P>(): Client<P>;

        status(): Client<RawResult<Status>> & RawResult<Status>;
        status(): Client<string>;

        /** @deprecated */
        submit(id: ElementId): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated */
        submit<P>(id: ElementId): Client<P>;

        timeouts<P>(type: Timeouts, ms: number): Client<RawResult<null>> & RawResult<null>;

        /** @deprecated in favour of timeouts */
        timeoutsAsyncScript(ms: number): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of timeouts */
        timeoutsAsyncScript<P>(ms: number): Client<P>;

        /** @deprecated in favour of timeouts */
        timeoutsImplicitWait(ms: number): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of timeouts */
        timeoutsImplicitWait<P>(ms: number): Client<P>;

        url(): Client<RawResult<string>> & RawResult<string>;
        url(url: string): Client<RawResult<null>> & RawResult<null>;
        url<P>(url?: string): Client<P>;

        title(): Client<RawResult<string>> & RawResult<string>;
        title<P>(): Client<P>;

        /** @deprecated in favour of Actions.pointerDown */
        touchClick(id: ElementId): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.pointerDown */
        touchClick<P>(id: ElementId): Client<P>;

        /** @deprecated in favour of Actions.pointerDown */
        touchDown(
            xoffset: number,
            yoffset: number
        ): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.pointerDown */
        touchDown<P>(
            xoffset: number,
            yoffset: number
        ): Client<P>;

        /** @deprecated in favour of Actions.perform */
        touchFlick(
            id: ElementId,
            xoffset: number,
            yoffset: number,
            speed: number
        ): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.perform */
        touchFlick<P>(
            id: ElementId,
            xoffset: number,
            yoffset: number,
            speed: number
        ): Client<P>;

        /** @deprecated in favour of Actions.perform */
        touchLongClick(id: ElementId): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.perform */
        touchLongClick<P>(id: ElementId): Client<P>;

        /** @deprecated in favour of Actions.pointerMove */
        touchMove(
            xoffset: number,
            yoffset: number
        ): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.pointerMove */
        touchMove<P>(
            xoffset: number,
            yoffset: number
        ): Client<P>;

        /** @deprecated in favour of Actions.perform */
        touchScroll(
            id: ElementId,
            xoffset: number,
            yoffset: number,
        ): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.perform */
        touchScroll<P>(
            id: ElementId,
            xoffset: number,
            yoffset: number,
        ): Client<P>;

        /** @deprecated in favour of Actions.pointerUp */
        touchUp(
            xoffset: number,
            yoffset: number,
        ): Client<RawResult<null>> & RawResult<null> & never;

        /** @deprecated in favour of Actions.pointerUp */
        touchUp<P>(
            xoffset: number,
            yoffset: number,
        ): Client<P>;

        window(windowHandle?: string): Client<RawResult<null>> & RawResult<null>;
        window<P>(windowHandle?: string): Client<P>;

        windowHandle(): Client<RawResult<string>> & RawResult<string>;
        windowHandle<P>(): Client<P>;

        windowHandleFullscreen(): Client<RawResult<null>> & RawResult<null>;
        windowHandleFullscreen<P>(): Client<P>;

        windowHandleMaximize(): Client<RawResult<string>> & RawResult<string>;
        windowHandleMaximize<P>(): Client<P>;

        /** @deprecated in favour of /session/{session id}/window/rect */
        windowHandlePosition(
            windowHandle?: string,
            position?: Position
        ): Client<RawResult<Position>> & RawResult<Position> & never;

        /** @deprecated in favour of /session/{session id}/window/rect */
        windowHandlePosition(
            position: Position
        ): Client<RawResult<Position>> & RawResult<Position> & never;

        /** @deprecated in favour of /session/{session id}/window/rect */
        windowHandlePosition<P>(
            windowHandle?: string,
            position?: Position
        ): Client<P>;

        /** @deprecated in favour of /session/{session id}/window/rect */
        windowHandlePosition<P>(
            position: Position
        ): Client<P>;

        /** @deprecated in favour of /session/{session id}/window/rect */
        windowHandleSize(
            windowHandle?: string,
            dimension?: Size
        ): Client<RawResult<Size>> & RawResult<Size> & never;

        /** @deprecated in favour of /session/{session id}/window/rect */
        windowHandleSize(
            dimension: Size
        ): Client<RawResult<Size>> & RawResult<Size> & never;

        /** @deprecated in favour of /session/{session id}/window/rect */
        windowHandleSize<P>(
            windowHandle?: string,
            dimension?: Size
        ): Client<P>;

        /** @deprecated in favour of /session/{session id}/window/rect */
        windowHandleSize<P>(
            dimension?: Size
        ): Client<P>;

        /** @deprecated */
        windowHandles(): Client<RawResult<string[]>> & RawResult<string[]> & never;

        /** @deprecated */
        windowHandles<P>(): Client<P> & never;
    }

    // State
    interface Client<T> {
        hasFocus(selector?: string): Client<boolean> & boolean;
        hasFocus<P>(selector?: string): Client<P>;

        isEnabled(selector?: string): Client<boolean> & boolean;
        isEnabled<P>(selector?: string): Client<P>;

        isExisting(selector?: string): Client<boolean> & boolean;
        isExisting<P>(selector?: string): Client<P>;

        isSelected(selector?: string): Client<boolean> & boolean;
        isSelected<P>(selector?: string): Client<P>;

        isVisible(selector?: string): Client<boolean> & boolean;
        isVisible<P>(selector?: string): Client<P>;

        isVisibleWithinViewport(selector?: string): Client<boolean> & boolean;
        isVisibleWithinViewport<P>(selector?: string): Client<P>;
    }

    // Utility
    interface Client<T> {
        $(selector: string): Client<RawResult<Element>> & RawResult<Element>;
        $<P>(selector: string): Client<P>;

        $$(selector: string): Array<Client<RawResult<Element>>> & Array<RawResult<Element>>;
        $$<P>(selector: string): Client<P>;

        addCommand(
            commandName: string,
            customMethod: (...args: any[]) => void,
            overwrite?: boolean
        ): Client<void> & undefined;

        addCommand<P>(
            commandName: string,
            customMethod: (...args: any[]) => void,
            overwrite?: boolean
        ): Client<P>;

        call<P>(callback: () => void): Client<P> & any;

        chooseFile(
            selector: string,
            localPath: string
        ): Client<void> & undefined;

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

        getCommandHistory(): Client<CommandHistoryEntry[]> & CommandHistoryEntry[];
        getCommandHistory<P>(): Client<P>;

        pause(milliseconds: number): Client<void>;
        pause<P>(milliseconds: number): Client<P>;

        reload(): Client<string[]> & string[];
        reload<P>(): Client<P>;

        saveScreenshot(filename?: string): Client<Buffer> & Buffer;
        saveScreenshot<P>(filename?: string): Client<P>;

        scroll(selector?: string): Client<RawResult<null>> & RawResult<null>;

        scroll(
            selector: string,
            xoffset: number,
            yoffset: number
        ): Client<RawResult<null>> & RawResult<null>;

        scroll(
            xoffset: number,
            yoffset: number
        ): Client<RawResult<null>> & RawResult<null>;

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

        uploadFile(localPath: string): Client<RawResult<string>> & RawResult<string>;
        uploadFile<P>(localPath: string): Client<P>;

        waitForEnabled(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForEnabled(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForEnabled<P>(selector?: string): Client<P>;

        waitForEnabled<P>(
            selector: string,
            milliseconds?: number,
        ): Client<P>;

        waitForEnabled<P>(milliseconds?: number): Client<P>;

        waitForEnabled<P>(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<P>;

        waitForEnabled<P>(
            milliseconds?: number,
            reverse?: boolean
        ): Client<P>;

        waitForExist(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForExist(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForExist<P>(selector?: string): Client<P>;

        waitForExist<P>(
            selector: string,
            milliseconds?: number
        ): Client<P>;

        waitForExist<P>(milliseconds: number): Client<P>;

        waitForExist<P>(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<P>;

        waitForExist<P>(
            milliseconds: number,
            reverse?: boolean
        ): Client<P>;

        waitForSelected(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForSelected(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForSelected<P>(selector?: string): Client<P>;

        waitForSelected<P>(
            selector: string,
            milliseconds?: number
        ): Client<P>;

        waitForSelected<P>(milliseconds: number): Client<P>;

        waitForSelected<P>(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<P>;

        waitForSelected<P>(
            milliseconds?: number,
            reverse?: boolean
        ): Client<P>;

        waitForText(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForText(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForText<P>(selector?: string): Client<P>;

        waitForText<P>(
            selector: string,
            milliseconds?: number
        ): Client<P>;

        waitForText<P>(milliseconds?: number): Client<P>;

        waitForText<P>(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<P>;

        waitForText<P>(
            milliseconds?: number,
            reverse?: boolean
        ): Client<P>;

        waitForValue(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForValue(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForValue<P>(selector?: string): Client<P>;

        waitForValue<P>(
            selector: string,
            milliseconds?: number
        ): Client<P>;

        waitForValue<P>(milliseconds?: number): Client<P>;

        waitForValue<P>(
            selector: string,
            milliseconds?: number,
            reverse?: boolean,
        ): Client<P>;

        waitForValue<P>(
            milliseconds?: number,
            reverse?: boolean,
        ): Client<P>;

        waitForVisible(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForVisible(
            milliseconds?: number,
            reverse?: boolean
        ): Client<boolean> & boolean;

        waitForVisible<P>(selector?: string): Client<P>;

        waitForVisible<P>(
            selector: string,
            milliseconds?: number
        ): Client<P>;

        waitForVisible<P>(milliseconds?: number): Client<P>;

        waitForVisible<P>(
            selector: string,
            milliseconds?: number,
            reverse?: boolean
        ): Client<P>;

        waitForVisible<P>(
            milliseconds?: number,
            reverse?: boolean
        ): Client<P>;

        waitUntil(
            condition: () => boolean | Promise<boolean> | Client<RawResult<any>> & RawResult<any>,
            timeout?: number,
            timeoutMsg?: string,
            interval?: number
        ): Client<boolean> & any;

        waitUntil<P>(
            condition: () => boolean | Promise<boolean> | Client<RawResult<any>> & RawResult<any>,
            timeout?: number,
            timeoutMsg?: string,
            interval?: number
        ): Client<P>;
    }

    // Window
    interface Client<T> {
        close(windowHandle?: string): Client<RawResult<null>> & RawResult<null>;
        close<P>(windowHandle?: string): Client<P>;

        getCurrentTabId(): Client<string> & string;
        getCurrentTabId<P>(): Client<P>;

        getTabIds(): Client<string[]> & string[];
        getTabIds<P>(): Client<P>;

        getViewportSize(): Client<Size> & Size;
        getViewportSize(dimension: string): Client<number> & number;
        getViewportSize<P>(dimension?: string): Client<P>;

        newWindow(
            url: string,
            windowName: string,
            windowFeatures: string
        ): Client<RawResult<null>> & RawResult<null>;

        newWindow<P>(
            url: string,
            windowName: string,
            windowFeatures: string
        ): Client<P>;

        setViewportSize(
            size: Size,
            type?: boolean
        ): Client<void> & undefined;

        setViewportSize<P>(
            size: Size,
            type?: boolean
        ): Client<P>;

        switchTab(windowHandle?: string): Client<RawResult<null>> & RawResult<null>;
        switchTab<P>(windowHandle?: string): Client<P>;
    }

    const VERSION: string;
}

declare var browser: WebdriverIO.Client<void>;

declare module "webdriverio" {
    export = WebdriverIO;
}
