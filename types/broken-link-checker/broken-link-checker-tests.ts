import * as blc from "broken-link-checker";

() => {
    const siteChecker = new blc.SiteChecker({}, {});
};

() => {
    const siteChecker = new blc.SiteChecker(
        {
            acceptedSchemes: ["http", "https"],
            cacheExpiryTime: 3600000,
            cacheResponses: true,
            excludedKeywords: [],
            excludedSchemes: ["data", "geo", "javascript", "mailto", "sms", "tel"],
            excludeExternalLinks: false,
            excludeInternalLinks: false,
            excludeLinksToSamePage: true,
            filterLevel: 1,
            honorRobotExclusions: true,
            maxSockets: Infinity,
            maxSocketsPerHost: 1,
            rateLimit: 0,
            requestMethod: "head",
            retry405Head: true,
            userAgent: "broken-link-checker/0.7.0 Node.js/5.5.0 (OS X El Capitan; x64)",
        },
        {},
    );
};

() => {
    const siteChecker = new blc.SiteChecker(
        {},
        {
            link: result => {},
            end: () => {},
        },
    );
};
