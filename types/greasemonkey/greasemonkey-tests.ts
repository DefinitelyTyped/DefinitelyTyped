// unsafeWindow

const title: string = unsafeWindow.document.title;

// GM.info

const scriptDescription: string = GM.info.script.description;
const scriptExcludes: string[] = GM.info.script.excludes;
const scriptIncludes: string[] = GM.info.script.includes;
const scriptMatches: string[] = GM.info.script.matches;
const scriptName: string = GM.info.script.name;
const scriptNamespace: string = GM.info.script.namespace;
const scriptResources = GM.info.script.resources['foo'];
const scriptResourceName: string = scriptResources.name;
const scriptResourceMimeType: string = scriptResources.mimetype;
const scriptResourceURL: string = scriptResources.url;
const scriptRunAt: string = GM.info.script.runAt;
const scriptVersion: string = GM.info.script.version;
const scriptMetaStr: string = GM.info.scriptMetaStr;
const scriptHandler: string = GM.info.scriptHandler;
const gmVersion: string = GM.info.version;

// GM.setValue

GM.setValue('a', 'foobar');
GM.setValue('b', 123);
GM.setValue('c', true);
// @ts-expect-error
GM.setValue('d', null);
// @ts-expect-error
GM.setValue('x', new Date());

// GM.getValue

async function getStringValueWithDefault() {
    const a: string = await GM.getValue('a', 'foobar');
    return a;
}

async function getNumberValueWithDefault() {
    const b: number = await GM.getValue('b', 123);
    // @ts-expect-error
    const x: string  = GM.getValue('x', 123);
    return b;
}

async function getBooleanWithDefault() {
    const c: boolean = await GM.getValue('c', true);
    return c;
}

async function getStringValue() {
    const e = await GM.getValue('e') as string | undefined;
    return e;
}

async function getNumberValue() {
    const f = await GM.getValue('f') as number | undefined;
    return f;
}

async function getBooleanValue() {
    const g = await GM.getValue('g') as boolean | undefined;
    return g;
}

async function getValue() {
    const h: string | number | boolean | undefined = await GM.getValue('h');
    return h;
}

// GN.deleteValue

GM.deleteValue('d').then(() => {
    console.log('Success');
});

// GM.listValues

GM.listValues().then(values =>
    values.forEach(async (name: string) => {
        console.log(name + ':', await GM.getValue(name));
    })
);

// GM.getResourceUrl

GM.getResourceUrl('some_res').then(url => {
    console.log('Resource url:', url);
});

// GM.notification

GM.notification('A new widget is available at the frobber.', 'New widget!');
GM.notification(
    'A new widget is available at the frobber.',
    'New widget!',
    'https://wiki.greasespot.net/images/f/f3/Book.png',
    () => {
        console.log('Notification clicked');
    }
);

// GM.openInTab

GM.openInTab('https://wiki.greasespot.net/GM.openInTab');
GM.openInTab('https://wiki.greasespot.net/GM.openInTab', true);

// GM.registerMenuCommand

GM.registerMenuCommand('Do the thing', () => {});
GM.registerMenuCommand('Do the thing', () => {}, 'd');

// GM.setClipboard

GM.setClipboard('Text from clipboard');

// GM.xmlHttpRequest

// Bare Minimum
GM.xmlHttpRequest({
    method: 'GET',
    url: 'http://www.example.com/',
    onload(response) {
        alert(response.responseText);
    }
});

// GET request
GM.xmlHttpRequest({
    method: 'GET',
    url: 'http://www.example.net/',
    headers: {
        'User-Agent': 'Mozilla/5.0',
        Accept: 'text/xml'
    },
    onload(response) {
        let responseXML = null;

        if (!response.responseXML) {
            responseXML = new DOMParser().parseFromString(
                response.responseText,
                'text/xml'
            );
        }

        console.log(
            [
                response.status,
                response.statusText,
                response.readyState,
                response.responseHeaders,
                response.responseText,
                response.finalUrl,
                responseXML
            ].join('\n')
        );
    }
});

// POST request
GM.xmlHttpRequest({
    method: 'POST',
    url: 'http://www.example.net/login',
    data: 'username=johndoe&password=xyz123',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    onload(response) {
        if (response.responseText.indexOf('Logged in as') > -1) {
            location.href = 'http://www.example.net/dashboard';
        }
    }
});

// HEAD request
GM.xmlHttpRequest({
    url: 'http://www.example.com',
    method: 'HEAD',
    onload(response) {
        console.log(response.responseHeaders);
    }
});

interface MyRequestContext {
    userId: string;
}

// All options
GM.xmlHttpRequest({
    binary: false,
    context: {},
    data: 'foo=1&bar=2',
    headers: { 'User-Agent': 'greasemonkey' },
    method: 'POST',
    onabort: (response: GM.Response<MyRequestContext>) => {},
    onerror: (response: GM.Response<MyRequestContext>) => {},
    onload: (response: GM.Response<MyRequestContext>) => {},
    onprogress: (response: GM.ProgressResponse<MyRequestContext>) => {},
    onreadystatechange: (response: GM.Response<MyRequestContext>) => {},
    ontimeout: (response: GM.Response<MyRequestContext>) => {},
    overrideMimeType: 'text/plain',
    password: 'abc123',
    synchronous: false,
    responseType: 'arraybuffer',
    timeout: 10,
    upload: {
        onabort: (response: GM.Response<MyRequestContext>) => {},
        onerror: (response: GM.Response<MyRequestContext>) => {},
        onload: (response: GM.Response<MyRequestContext>) => {},
        onprogress: (response: GM.ProgressResponse<MyRequestContext>) => {}
    },
    url: 'http://example.com/',
    user: 'guest'
});

// Response

GM.xmlHttpRequest({
    method: 'GET',
    url: 'http://example.com/',
    onload: (response: GM.Response<MyRequestContext>) => {
        const readyState: number = response.readyState;
        const responseHeaders: string = response.responseHeaders;
        const responseText: string = response.responseText;
        const status: number = response.status;
        const statusText: string = response.statusText;
        const context: any = response.context;
        const finalUrl: string = response.finalUrl;
        // NG: var loaded: number   = response.loaded;
    },
    onprogress: (response: GM.ProgressResponse<MyRequestContext>) => {
        const status: number = response.status;
        const lengthComputable: boolean = response.lengthComputable;
        const loaded: number = response.loaded;
        const total: number = response.total;
    }
});
