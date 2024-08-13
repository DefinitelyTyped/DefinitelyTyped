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

    get id(): string;

    get url(): string;

    get children(): BrowsingContextInfo[];

    get parentBrowsingContext(): BrowsingContextInfo | null;
}

export class NavigationInfo {
    browsingContextId: string;
    navigationId: string;
    timestamp: number;

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
