/**
 * Represents information about a browsing context.
 * Described in https://w3c.github.io/webdriver-bidi/#type-browsingContext-Info
 */
export class BrowsingContextInfo {
    private _id: string;
    private _url: string;
    private _children: BrowsingContextInfo[];
    private _parentBrowsingContext: BrowsingContextInfo | null;

    constructor(
        id: string,
        url: string,
        children: BrowsingContextInfo[],
        parentBrowsingContext: BrowsingContextInfo | null,
    );

    /**
     * Get the ID of the browsing context.
     * @returns {string} The ID of the browsing context.
     */
    get id(): string;

    /**
     * Get the URL of the browsing context.
     * @returns {string} The URL of the browsing context.
     */
    get url(): string;

    /**
     * Get the children of the browsing context.
     * @returns {Array<BrowsingContextInfo>} The children of the browsing context.
     */
    get children(): BrowsingContextInfo[];

    /**
     * Get the parent browsing context.
     * @returns {BrowsingContextInfo} The parent browsing context.
     */
    get parentBrowsingContext(): BrowsingContextInfo | null;
}

/**
 * Represents information about a navigation.
 * Described in https://w3c.github.io/webdriver-bidi/#type-browsingContext-NavigationInfo.
 */
export class NavigationInfo {
    browsingContextId: string;
    navigationId: string;
    timestamp: number;
    url: string;

    /**
     * Constructs a new NavigationInfo object.
     * @param {string} browsingContextId - The ID of the browsing context.
     * @param {string} navigationId - The ID of the navigation.
     * @param {number} timestamp - The timestamp of the navigation.
     * @param {string} url - The URL of the page navigated to.
     */
    constructor(
        browsingContextId: string,
        navigationId: string,
        timestamp: number,
        url: string,
    );
}

export class UserPromptOpened {
    browsingContextId: string;
    type: string;
    message: string;

    constructor(browsingContextId: string, type: string, message: string);
}

export class UserPromptClosed {
    browsingContextId: string;
    accepted: boolean;
    userText?: string;

    constructor(browsingContextId: string, accepted: boolean, userText?: string);
}
