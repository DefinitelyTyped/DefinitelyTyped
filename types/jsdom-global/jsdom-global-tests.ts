import * as jsdom from 'jsdom';
import jsdomGlobal from 'jsdom-global';

jsdomGlobal();
jsdomGlobal('hello', undefined);
jsdomGlobal(undefined, {
    url: 'https://localhost/'
});
jsdomGlobal('hello', {
    contentType: '1',
    url: '1',
    referrer: '1',
    includeNodeLocations: true,
    cookieJar: new jsdom.CookieJar(),
    virtualConsole: new jsdom.VirtualConsole(),
    resources: '1',
    runScripts: '1',
    beforeParse: () => {},
    pretendToBeVisual: true,
    storageQuota: 1,
});
