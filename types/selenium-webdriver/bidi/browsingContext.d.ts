import { WebDriver, WebElement } from "../";
import { BrowsingContextInfo } from "./browsingContextTypes";
import { CaptureScreenshotParameters } from "./captureScreenshotParameters";
import CreateContextParameters from "./createContextParameters";
import { ReferenceValue, RemoteValue, SerializationOptions } from "./protocolValue";

interface LocatorMapValue {
    type: "css" | "innerText" | "xpath";
    value: string;
    ignoreCase?: boolean;
    matchType?: string;
    maxDepth?: number;
}

declare class Locator {
    static TYPE: {
        CSS: "css";
        INNER_TEXT: "innerText";
        XPATH: "xpath";
    };

    constructor(
        type: string,
        ignoreCase: string,
        matchType: string,
        maxDepth: number,
    );

    static css(value: string): Locator;
    static xpath(value: string): Locator;
    static innerText(
        value: string,
        ignoreCase?: boolean,
        matchType?: string,
        maxDepth?: number,
    ): Locator;

    toMap(): Map<string, LocatorMapValue>;
}

type readinessState = "none" | "interactive" | "complete";

declare class BrowsingContext {
    private _driver: WebDriver;
    private _id: string;

    constructor(driver: WebDriver);

    get id(): string | undefined;

    init(options: {
        browsingContextId?: string;
        type?: "window" | "tab";
        createParameters?: string;
    }): Promise<void>;

    create(type: "window" | "tab", createParameters?: CreateContextParameters): Promise<any>;

    navigate(url: string, readinessState?: readinessState): Promise<NavigateResult>;

    getTree(maxDepth?: number): Promise<BrowsingContextInfo>;

    getTopLevelContexts(): Promise<BrowsingContextInfo[]>;

    close(): Promise<void>;

    printPage(options?: any): Promise<PrintResult>;

    captureScreenshot(
        captureScreenshotParameters?: CaptureScreenshotParameters,
    ): Promise<string>;

    captureBoxScreenshot(
        x: number,
        y: number,
        width: number,
        height: number,
    ): Promise<string>;

    captureElementScreenshot(
        sharedId: string,
        handle?: string,
    ): Promise<string>;

    activate(): Promise<void>;

    handleUserPrompt(
        accept?: boolean,
        userText?: string,
    ): Promise<void>;

    reload(
        ignoreCache?: boolean,
        readinessState?: readinessState,
    ): Promise<NavigateResult>;

    setViewport(
        width: number,
        height: number,
        devicePixelRatio?: number,
    ): Promise<void>;

    traverseHistory(delta: number): Promise<void>;

    forward(): Promise<void>;

    back(): Promise<void>;

    locateNodes(
        locator: Locator,
        maxNodeCount?: number,
        sandbox?: string,
        serializationOptions?: SerializationOptions,
        startNodes?: ReferenceValue[],
    ): Promise<RemoteValue<any>>;

    locateNode(
        locator: Locator,
        sandbox?: string,
        serializationOptions?: SerializationOptions,
        startNodes?: ReferenceValue[],
    ): Promise<RemoteValue<any>>;

    locateElement(locator: Locator): Promise<WebElement>;

    locateElements(locator: Locator): Promise<WebElement[]>;
}

declare class NavigateResult {
    private _url: string;
    private _navigationId: number;
    constructor(url: string, navigationId: number);
    get url(): string;
    get navigationId(): number;
}

declare class PrintResult {
    private _data: any;
    constructor(data: any);
    get data(): any;
}

declare function getBrowsingContextInstance(
    driver: WebDriver,
    options: {
        browsingContextId?: string;
        type?: "window" | "tab";
        createParameters?: CreateContextParameters;
    },
): Promise<BrowsingContext>;

export = getBrowsingContextInstance;
