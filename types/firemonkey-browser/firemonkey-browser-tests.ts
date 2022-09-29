// unsafeWindow

const title: string = unsafeWindow.document.title;

//#region Async APIs

async () => {
    const download = await GM.download('http://example.com');
    const downloadFilename = await GM_download('http://example.com', 'download.html');

    await GM.setValue('a', 'foobar');

    await GM.setValue('b', 123);

    await GM.setValue('c', true);

    await GM.setValue('d', { key: 'value' });

    // @ts-expect-error
    await GM.setValue('d', null);

    await GM.setValue('x', new Date());

    const a: string = await GM.getValue('a', 'foobar');

    const b: number = await GM.getValue('b', 123);

    // @ts-expect-error
    const x: string = GM.getValue('x', 123);

    // @ts-expect-error
    const c: boolean = await GM.getValue('c');

    const d: object = await GM.getValue('d', { key: 'value' });

    const e = (await GM.getValue('e')) as string;

    const f = (await GM.getValue('f')) as number;

    const g = (await GM.getValue('g')) as boolean;

    const h = (await GM.getValue('h')) as object;

    const i: string | number | boolean | object | undefined = await GM.getValue('i');

    await GM.listValues().then(values =>
        values.forEach(async (name: string) => {
            console.log(name + ':', await GM.getValue(name));
        }),
    );

    await GM.deleteValue('d').then(() => {
        console.log('Success');
    });

    await GM.getResourceUrl('some_res').then(url => {
        console.log('Resource url:', url);
    });

    await GM.getResourceText('some_res').then(text => {
        console.log('Resource text:', text);
    });

    await GM.notification('A new widget is available at the frobber.');
    await GM.notification({
        text: 'A new widget is available at the frobber.',
        image: 'https://wiki.greasespot.net/images/f/f3/Book.png',
    });

    await GM.openInTab('https://erosman.github.io/support/content/help.html#openInTab');
    await GM.openInTab('https://erosman.github.io/support/content/help.html#openInTab', true);

    await GM.setClipboard('Text to clipboard');

    await GM.fetch('https://example.com').then(response => alert(response.text));

    await GM.fetch('https://example.com', {
        method: 'GET',
        headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'text/xml' },
    }).then(res => console.log([res.status, res.statusText, res.ok, res.headers, res.url, res.text].join('\n')));

    await GM.fetch('http://example.net/login', {
        method: 'POST',
        body: new URLSearchParams('username=johndoe&password=xyz123'),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(res => {
        location.href = 'http://www.example.net/dashboard';
    });

    const res = await GM.fetch('https://example.com', { method: 'HEAD' });
    console.log(res.text);

    await GM.fetch('https://example.com', {
        anonymous: false,
        body: 'asd',
        cache: 'default',
        credentials: 'omit',
        headers: { 'User-Agent': 'FireMonkey' },
        integrity: 'md5-123456==',
        keepalive: true,
        method: 'TRACE',
        mode: 'cors',
        redirect: 'error',
        referrer: 'client',
        referrerPolicy: 'no-referrer-when-downgrade',
        responseType: 'json',
        signal: '',
    });
};
//#endregion

//#region Callback APIs

GM.addValueChangeListener('test-key1', (...arg) => {
    console.log(...arg);
});
GM_addValueChangeListener('test-key2', (key, oldValue, newValue, remote) => {
    console.log(key, oldValue, newValue, remote);
});

GM.registerMenuCommand('Do the thing', () => {});
GM_registerMenuCommand('Do thee thing', () => {});

// Bare Minimum
GM.xmlHttpRequest({
    method: 'GET',
    url: 'http://www.example.com/',
    onload(response) {
        alert(response.responseText);
    },
});

// GET request

GM.xmlHttpRequest({
    method: 'GET',
    url: 'http://www.example.net/',
    headers: {
        'User-Agent': 'Mozilla/5.0',
        Accept: 'text/xml',
    },
    onload(response) {
        let responseXML = null;

        if (!response.responseXML) {
            responseXML = new DOMParser().parseFromString(response.responseText, 'text/xml');
        }

        console.log(
            [
                response.status,
                response.statusText,
                response.readyState,
                response.responseHeaders,
                response.responseText,
                response.finalUrl,
                responseXML,
            ].join('\n'),
        );
    },
});

// POST request
GM.xmlHttpRequest({
    method: 'POST',
    url: 'http://www.example.net/login',
    data: 'username=johndoe&password=xyz123',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    onload(response) {
        if (response.responseText.indexOf('Logged in as') > -1) {
            location.href = 'http://www.example.net/dashboard';
        }
    },
});

// HEAD request
GM.xmlHttpRequest({
    url: 'http://www.example.com',
    method: 'HEAD',
    onload(response) {
        console.log(response.responseHeaders);
    },
});

interface MyRequestContext {
    userId: string;
}

// All options
GM.xmlHttpRequest({
    data: 'foo=1&bar=2',
    headers: { 'User-Agent': 'greasemonkey' },
    method: 'POST',
    onabort: (response: GM.XMLResponse<MyRequestContext>) => {},
    onerror: (response: GM.XMLResponse<MyRequestContext>) => {},
    onload: (response: GM.XMLResponse<MyRequestContext>) => {},
    ontimeout: (response: GM.XMLResponse<MyRequestContext>) => {},
    overrideMimeType: 'text/plain',
    password: 'abc123',
    responseType: 'arraybuffer',
    timeout: 10,
    url: 'http://example.com/',
    user: 'guest',
});

// Response

GM.xmlHttpRequest({
    method: 'GET',
    url: 'http://example.com/',
    onload: (response: GM.XMLResponse<MyRequestContext>) => {
        const readyState: number = response.readyState;
        const responseHeaders: string = response.responseHeaders;
        const responseText: string = response.responseText;
        const status: number = response.status;
        const statusText: string = response.statusText;
        const finalUrl: string = response.finalUrl;
    },
});
//#endregion

//#region Sync APIs

GM_setValue('a', 'foobar');

GM_setValue('b', 123);

GM_setValue('c', true);

GM_setValue('d', { key: 'value' });

// @ts-expect-error
GM_setValue('d', null);

GM_setValue('x', new Date());

const a: string = GM_getValue('a', 'foobar');

const b: number = GM_getValue('b', 123);

// @ts-expect-error
const x: string = GM_getValue('x', 123);

const c: boolean = GM_getValue('c', true);

const d: object = GM_getValue('d', { key: 'value' });

const e = GM_getValue('e') as string;

const f = GM_getValue('f') as number;

const g = GM_getValue('g') as boolean;

const h = GM_getValue('h') as object;

const i: string | number | boolean | object | undefined = GM_getValue('i');

const listValues: string[] = GM_listValues();
listValues.forEach(async (name: string) => {
    console.log(name + ':', GM_getValue(name));
});
GM_deleteValue('d');

const resourceURL = GM_getResourceUrl('some_res');
console.log('Resource url:', resourceURL);

const resourceText = GM_getResourceText('some_res');
console.log('Resource text:', resourceText);

const element1 = document.querySelector('addelement1');
const element2 = document.querySelector('addelement2');

GM.addElement('addelement1', { style: 'backgound-color: black;' }) === element1;
GM_addElement('div', 'addelement2', { style: 'backgound-color: red;' }) === element2;

function someFunc() {
    console.log('success');
}
GM.addScript(`(' + ${someFunc} + ')();`);

const js = `function sum(x, y) {
return x + y;
}`;
GM_addScript(js);

const css1 = `body {border-top: 10px solid grey;}`;
GM.addStyle(css1);

const css2 = `body {background-color:black;}`;
GM_addStyle(css2);

GM.unregisterMenuCommand('Do the thing');
GM_unregisterMenuCommand('Do thee thing');

GM.removeValueChangeListener('test-key1');
GM_removeValueChangeListener('test-key2');

GM.log('Do this thing');
GM_log('Or that');

GM.popup;
GM_popup;

const scriptDescription: string = GM.info.script.description;
const scriptExcludes: string[] = GM.info.script.excludes;
const scriptIncludes: string[] = GM.info.script.includes;
const scriptMatches: string[] = GM.info.script.matches;
const scriptName: string = GM.info.script.name;
const scriptNamespace: string | null = GM.info.script.namespace;
const scriptResources = GM.info.script.resources['foo'];
const scriptResourceName: string = scriptResources.name;
const scriptResourceMimeType: string = scriptResources.mimetype;
const scriptResourceURL: string = scriptResources.url;
const scriptRunAt: string = GM.info.script['run-at'];
const scriptVersion: string = GM.info.script.version;
const scriptMetaStr: string | null = GM.info.scriptMetaStr;
const scriptHandler: string = GM.info.scriptHandler;
const platformOS: 'mac' | 'win' | 'android' | 'cros' | 'linux' | 'openbsd' | 'fuchsia' = GM.info.platform.os;
const platformarch: 'arm' | 'x86-32' | 'x86-64' = GM.info.platform.arch;
const browserName: string = GM.info.browser.name;
const browserVendor: string = GM.info.browser.vendor;
const browserVersion: string = GM.info.browser.version;
const browserBuildID: string = GM.info.browser.buildID;
const gmVersion: string = GM.info.version;

//#endregion
