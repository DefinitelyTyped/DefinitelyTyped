import Crawler = require('simplecrawler');

const crawler = new Crawler('https://github.com/');
crawler.initialURL; // $ExpectType string
crawler.host; // $ExpectType string
crawler.interval; // $ExpectType number
crawler.maxConcurrency; // $ExpectType number
crawler.timeout; // $ExpectType number
crawler.listenerTTL; // $ExpectType number
crawler.userAgent; // $ExpectType string
crawler.queue; // $ExpectType FetchQueue
crawler.respectRobotsTxt; // $ExpectType boolean
crawler.allowInitialDomainChange; // $ExpectType boolean
crawler.decompressResponses; // $ExpectType boolean
crawler.decodeResponses; // $ExpectType boolean
crawler.filterByDomain; // $ExpectType boolean
crawler.scanSubdomains; // $ExpectType boolean
crawler.ignoreWWWDomain; // $ExpectType boolean
crawler.stripWWWDomain; // $ExpectType boolean
crawler.cache; // $ExpectType Cache | undefined
crawler.useProxy; // $ExpectType boolean
crawler.proxyHostname; // $ExpectType string
crawler.proxyPort; // $ExpectType number
crawler.proxyUser; // $ExpectType string | undefined
crawler.proxyPass; // $ExpectType string | undefined
crawler.needsAuth; // $ExpectType boolean
crawler.authUser; // $ExpectType string | undefined
crawler.authPass; // $ExpectType string | undefined
crawler.acceptCookies; // $ExpectType boolean
crawler.cookies; // $ExpectType CookieJar
crawler.customHeaders; // $ExpectType object
crawler.domainWhitelist; // $ExpectType string[]
crawler.allowedProtocols; // $ExpectType RegExp[]
crawler.maxResourceSize; // $ExpectType number
crawler.supportedMimeTypes; // $ExpectType (string | RegExp)[]
crawler.downloadUnsupported; // $ExpectType boolean
crawler.urlEncoding; // $ExpectType string
crawler.stripQuerystring; // $ExpectType boolean
crawler.sortQueryParameters; // $ExpectType boolean
crawler.discoverRegex; // $ExpectType (RegExp | (() => void))[]
crawler.parseHTMLComments; // $ExpectType boolean
crawler.parseScriptTags; // $ExpectType boolean
crawler.maxDepth; // $ExpectType number
crawler.ignoreInvalidSSL; // $ExpectType boolean
crawler.httpAgent; // $ExpectType Agent
crawler.httpsAgent; // $ExpectType Agent
crawler.start();
crawler.on('fetchcomplete', (queueItem, responseBody, response) => {
    queueItem; // $ExpectType QueueItem
    responseBody; // $ExpectType string | Buffer
    response; // $ExpectType IncomingMessage
});
