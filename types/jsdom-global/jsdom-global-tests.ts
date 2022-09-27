import * as jsdom from 'jsdom';
import jsdomGlobal from 'jsdom-global';

jsdomGlobal();
jsdomGlobal('hello', undefined);
jsdomGlobal(undefined, {
    url: 'https://localhost/'
});
jsdomGlobal('hello', {
    contentType: 'text/html',
    url: 'https://localhost/',
    referrer: 'https://localhost/',
    includeNodeLocations: true,
    cookieJar: new jsdom.CookieJar(),
    virtualConsole: new jsdom.VirtualConsole(),
    resources: 'usable',
    runScripts: 'dangerously',
    beforeParse: () => {},
    pretendToBeVisual: true,
    storageQuota: 1,
});
