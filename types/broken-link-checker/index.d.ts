export interface Options {
    acceptedSchemes?: string[];
    cacheExpiryTime?: number;
    cacheResponses?: boolean;
    excludedKeywords?: string[];
    excludedSchemes?: string[];
    excludeExternalLinks?: boolean;
    excludeInternalLinks?: boolean;
    excludeLinksToSamePage?: boolean;
    filterLevel?: 0 | 1 | 2 | 3;
    honorRobotExclusions?: boolean;
    maxSockets?: number;
    maxSocketsPerHost?: number;
    rateLimit?: number;
    requestMethod?: string;
    retry405Head?: boolean;
    userAgent?: string;
}

export interface Result {
    url: {
        original: string;
        resolved: string;
    };
    base: {
        original: string;
        resolved: string;
    };
    broken: boolean;
    excluded: boolean;
    brokenReason: string | null;
    excludedReason: string | null;
}

export interface SiteCheckerHandlers {
    link?: (result: Result, customData: object) => void;
    end?: () => void;
}
export class SiteChecker {
    constructor(options: Options, handlers: SiteCheckerHandlers);
    enqueue: (pageUrl: string, customData: object) => void;
}
