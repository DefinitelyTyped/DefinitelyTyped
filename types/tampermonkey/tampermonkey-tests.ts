// unsafeWindow

let title: string = unsafeWindow.document.title;

// GM_addStyle

const scriptTag: HTMLStyleElement = GM_addStyle('a { font-wight: bold }');

// GM_setValue

interface AppState {
    form: { name: string };
}

GM_setValue('a', 'foobar');
GM_setValue('b', 123);
GM_setValue('c', true);
GM_setValue('d', { form: { name: 'Bob' } });

// GM_addValueChangeListener

GM_addValueChangeListener(
    'a',
    (name: string, oldValue: string, newValue: string, remote: boolean) => {}
);
GM_addValueChangeListener(
    'b',
    (name, oldValue: number, newValue: number, remote) => {}
);
GM_addValueChangeListener(
    'c',
    (name, oldValue: boolean, newValue: boolean, remote) => {}
);
const dValueChangeListenerId = GM_addValueChangeListener(
    'd',
    (name, oldValue: AppState, newValue: AppState, remote) => {}
);

// GM_removeValueChangeListener

GM_removeValueChangeListener(dValueChangeListenerId);

// GM_getValue

const a: string = GM_getValue('a', 'foobar');
const b: number = GM_getValue('b', 123);
const c: boolean = GM_getValue('c', true);
const d: any = GM_getValue('d', null);
const e: string = GM_getValue('e');
const f: number = GM_getValue('f');
const g: boolean = GM_getValue('g');
const h: AppState = GM_getValue('h');

// GM_deleteValue

GM_deleteValue('d');

// GM_listValues

GM_listValues().forEach((name: string) => {
    console.log(name + ':', GM_getValue(name));
});

// GM_getResourceText

const template: string = GM_getResourceText('template');

// GM_getResourceURL

const templateURL: string = GM_getResourceURL('template');

// GM_registerMenuCommand

GM_registerMenuCommand('Hello, world (simple)', () => {
    GM_log('Hello, world (simple) clicked');
});
const commandId = GM_registerMenuCommand(
    'Hello, world!',
    () => {
        GM_log('Hello, world clicked');
    },
    'h'
);

// GM_unregisterMenuCommand

GM_unregisterMenuCommand(commandId);

// GM_xmlhttpRequest

// Bare Minimum
const abortHandle = GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://www.example.com/',
    onload(response) {
        alert(response.responseText);
    }
});

abortHandle.abort();

// GET request
GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://www.example.net/',
    headers: {
        'User-Agent': 'Mozilla/5.0',
        Accept: 'text/xml'
    },
    onload(response) {
        let responseXML = response.responseXML;
        // Inject responseXML into existing Object (only appropriate for XML content).
        if (!responseXML) {
            responseXML = new DOMParser().parseFromString(
                response.responseText,
                'text/xml'
            );
        }

        GM_log(
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
GM_xmlhttpRequest({
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
GM_xmlhttpRequest({
    url: 'http://www.example.com',
    method: 'HEAD',
    onload(response) {
        GM_log(response.responseHeaders);
    }
});

// All options
interface RequestContext {
    form: {
        name: string
    };
}

GM_xmlhttpRequest<RequestContext>({
    method: 'POST',
    url: 'http://example.com/',
    headers: { 'User-Agent': 'greasemonkey' },
    data: 'foo=1&bar=2',
    cookie: 'secret=42',
    nocache: true,
    revalidate: true,
    binary: false,
    timeout: 10,
    context: {
        form: {
            name: 'Alice'
        }
    },
    responseType: 'json',
    overrideMimeType: 'text/plain',
    anonymous: false,
    user: 'guest',
    password: 'abc123',
    onabort() {},
    onerror(response) {
        GM_log(response.error);
    },
    onloadstart(response) {
        GM_log(response.context.form.name);
    },
    onload(response) {
        GM_log(response.context.form.name);
    },
    onprogress(response) {
        GM_log(response.context.form.name, response.loaded);
    },
    onreadystatechange(response) {
        GM_log(response.context.form.name);
    },
    ontimeout() {}
});

// Responses
GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://example.com/',
    onload: response => {
        const readyState: number = response.readyState;
        const responseHeaders: string = response.responseHeaders;
        const responseText: string = response.responseText;
        const status: number = response.status;
        const statusText: string = response.statusText;
        const context: any = response.context;
        const finalUrl: string = response.finalUrl;
    },
    onprogress: response => {
        const status: number = response.status;
        const lengthComputable: boolean = response.lengthComputable;
        const loaded: number = response.loaded;
        const total: number = response.total;
    }
});

// GM_download

const downloadHandle = GM_download({
    url: 'http://tampermonkey.net/crx/tampermonkey.xml',
    name: 'tampermonkey.xml',
    headers: { 'User-Agent': 'greasemonkey' },
    saveAs: true,
    timeout: 3000,
    onerror(response) {
        GM_log(response.error, response.details);
    },
    ontimeout() {},
    onload() {},
    onprogress(response) {
        GM_log(response.finalUrl, response.loaded, response.total);
    }
});

downloadHandle.abort();

GM_download('http://tampermonkey.net/crx/tampermonkey.xml', 'tampermonkey.xml');

// GM_saveTab

interface TabState {
    form: { name: string };
}

const tabState: TabState = {
    form: {
        name: 'Alice'
    }
};

GM_saveTab(tabState);

// GM_getTab

GM_getTab((savedTabState: TabState) => {
    GM_log(savedTabState.form.name);
});

// GM_getTabs

GM_getTabs(tabsMap => {
    GM_log(tabsMap[0]);
});

// GM_log

GM_log('Hello, World!');
GM_log('Hello, World!', 'Again');

// GM_openInTab

GM_openInTab('http://www.example.com/');

GM_openInTab('http://www.example.com/', true);

const openTabObject = GM_openInTab('http://www.example.com/', {
    active: true,
    insert: true,
    setParent: true
});

openTabObject.onclose = () => {
    GM_log('Tab closed', openTabObject.closed);
};

openTabObject.close();

// GM_notification

const textNotification: Tampermonkey.NotificationDetails = {
    text: 'Notification text',
    title: 'Notification title',
    image: 'https://tampermonkey.net/favicon.ico',
    timeout: 5000,
    silent: true,
    onclick() {
        GM_log(`Notification with id ${this.id} is clicked`);
    },
    ondone(clicked) {
        GM_log(`Notification with id ${this.id} is clicked ${clicked}`);
    }
};

const highlightNotification: Tampermonkey.NotificationDetails = {
    highlight: true,
    onclick: textNotification.onclick,
    ondone: textNotification.ondone
};

GM_notification(textNotification);
GM_notification(highlightNotification);
GM_notification(textNotification, textNotification.ondone);

GM_notification(
    'Notification text',
    'Notification title',
    'https://tampermonkey.net/favicon.ico',
    function() {
        GM_log(`Notification with id ${this.id} is clicked`);
    }
);

// GM_setClipboard

GM_setClipboard('Some text in clipboard');
GM_setClipboard('<b>Some text in clipboard</b>', 'text');
GM_setClipboard('<b>Some text in clipboard</b>', {
    type: 'text',
    mimetype: 'text/plain'
});

// GM_info

// I created a basic userscript and copied GM_info from there for testing if the real thing fits the types
// I don't think there's a real way of testing this other than testing if it fits the original
const exampleInfo: Tampermonkey.ScriptInfo = {
    isFirstPartyIsolation: undefined,
    script: {
        antifeatures: {},
        author: null,
        blockers: [],
        copyright: null,
        description: 'A description',
        description_i18n: {},
        downloadURL: null,
        evilness: 0,
        excludes: [],
        grant: ['GM_setValue', 'GM_getValue', 'GM_deleteValue'],
        header: 'headers',
        homepage: null,
        icon: null,
        icon64: null,
        includes: [],
        lastModified: 1630000000000,
        matches: ['https://*/*'],
        name: 'Example userscript',
        name_i18n: {},
        namespace: 'namespace',
        options: {
            check_for_updates: false,
            comment: '',
            compat_foreach: false,
            compat_metadata: false,
            compat_prototypes: false,
            compat_wrappedjsobject: false,
            compatopts_for_requires: true,
            noframes: null,
            override: {
                merge_connects: true,
                merge_excludes: true,
                merge_includes: true,
                merge_matches: true,
                orig_connects: ['https://google.com'],
                orig_excludes: [],
                orig_includes: [],
                orig_matches: ['https://*/*'],
                orig_noframes: null,
                orig_run_at: 'document-idle',
                use_blockers: [],
                use_connects: [],
                use_excludes: [],
                use_includes: [],
                use_matches: [],
            },
            run_at: 'document-idle',
        },
        position: 1,
        resources: [
            {
                content: 'robots.txt',
                meta: 'application',
                name: 'github-robots.txt',
                url: 'https://github.com/robots.txt',
            },
        ],
        'run-at': 'document-idle',
        supportURL: null,
        sync: {
            imported: false,
        },
        unwrap: false,
        updateURL: null,
        uuid: 'c0ffeec0-ffee-c0ff-eec0-ffeec0ffeec0',
        version: '1.0',
        webRequest: [],
    },
    scriptMetaStr: 'metadata',
    scriptSource: 'console.log(GM_info);',
    scriptUpdateURL: undefined,
    scriptWillUpdate: false,
    version: '4.13.6136',
    scriptHandler: 'Tampermonkey',
    isIncognito: false,
    downloadMode: 'native',
};

// GM.*

// GM.info

const exampleInfo1: Tampermonkey.ScriptInfo = GM.info;

async () => {
    // GM.addStyle

    // $ExpectType HTMLStyleElement
    await GM.addStyle('div {color: #000;}');

    // GM.setValue

    // $ExpectType void
    await GM.setValue('str', 'string');
    await GM.setValue('num', 0);
    await GM.setValue('bool', true);
    await GM.setValue('obj', {
        nested: {
            values: true,
        },
    });

    // GM.getValue

    // $ExpectType string
    await GM.getValue<string>('str');

    // GM.deleteValue

    await GM.deleteValue('a');

    // GM.listValues

    // $ExpectType string[]
    await GM.listValues();

    // GM.addValueChangeListener

    // $ExpectType number
    await GM.addValueChangeListener('a', (name: string, oldValue: string, newValue: string, remote: boolean) => {});
    // $ExpectType number
    await GM.addValueChangeListener('a', (name: string, oldValue: number, newValue: number, remote: boolean) => {});

    // GM.removeValueChangeListener

    // $ExpectType void
    await GM.removeValueChangeListener(2);

    // GM.getResourceText

    // $ExpectType string
    await GM.getResourceText('template');

    // GM.getResourceUrl

    // $ExpectType string
    await GM.getResourceUrl('template');

    // GM.registerMenuCommand

    // $ExpectType number
    await GM.registerMenuCommand('Do thing', () => {});
    // $ExpectType number
    await GM.registerMenuCommand('Do other thing', () => {}, 'T');

    // GM.unregisterMenuCommand

    // $ExpectType void
    await GM.unregisterMenuCommand(1);

    // GM.xmlHttpRequest

    // Bare minimum

    const minResponse = await GM.xmlHttpRequest({
        url: 'https://github.com/',
        method: 'GET',
    });

    // $ExpectType string
    minResponse.finalUrl;
    // $ExpectType number
    minResponse.status;
    // $ExpectType string
    minResponse.responseText;

    // GET request
    await GM.xmlHttpRequest({
        method: 'GET',
        url: 'http://www.example.net/',
        headers: {
            'User-Agent': 'Mozilla/5.0',
            Accept: 'text/xml',
        },
    });

    // POST request
    await GM.xmlHttpRequest({
        method: 'POST',
        url: 'http://www.example.net/login',
        data: 'username=johndoe&password=xyz123',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    // HEAD request
    await GM.xmlHttpRequest({
        url: 'http://www.example.com',
        method: 'HEAD',
    });

    // All options
    interface RequestContext {
        form: {
            name: string;
        };
    }

    const allOptionsResponse = await GM.xmlHttpRequest<RequestContext>({
        method: 'POST',
        url: 'http://example.com/',
        headers: { 'User-Agent': 'greasemonkey' },
        data: 'foo=1&bar=2',
        cookie: 'secret=42',
        nocache: true,
        revalidate: true,
        binary: false,
        timeout: 10,
        context: {
            form: {
                name: 'Alice',
            },
        },
        responseType: 'json',
        overrideMimeType: 'text/plain',
        anonymous: false,
        user: 'guest',
        password: 'abc123',
        onabort() {},
        onerror(response) {
            // $ExpectType string
            response.error;
        },
        onloadstart(response) {
            // $ExpectType RequestContext
            response.context;
        },
        onload(response) {
            // $ExpectType RequestContext
            response.context;
        },
        onprogress(response) {
            // $ExpectType number
            response.status;
            // $ExpectType boolean
            response.lengthComputable;
            // $ExpectType number
            response.loaded;
            // $ExpectType number
            response.total;
        },
        onreadystatechange(response) {
            GM_log(response.context.form.name);
        },
        ontimeout() {},
    });

    // $ExpectType string
    allOptionsResponse.finalUrl;
    // $ExpectType RequestContext
    allOptionsResponse.context;
    // $ExpectType number
    allOptionsResponse.status;
    // $ExpectType string
    allOptionsResponse.statusText;
    // $ExpectType string
    allOptionsResponse.responseText;
    // $ExpectType ReadyState
    allOptionsResponse.readyState;
    // $ExpectType string
    allOptionsResponse.responseHeaders;
    // $ExpectType string
    allOptionsResponse.responseText;
    // $ExpectType Document | null
    allOptionsResponse.responseXML;

    // GM.download

    // $ExpectType void
    await GM.download({
        url: 'http://tampermonkey.net/crx/tampermonkey.xml',
        name: 'tampermonkey.xml',
        headers: { 'User-Agent': 'greasemonkey' },
        saveAs: true,
        timeout: 3000,
        onerror(response) {
            response.error.toUpperCase();
            // $ExpectType string | undefined
            response.details;
        },
        ontimeout() {},
        onload() {},
        onprogress(response) {
            // $ExpectType string
            response.finalUrl;
            // $ExpectType number
            response.loaded;
            // $ExpectType number
            response.total;
        },
    });

    interface TabState {
        form: { name: string };
    }

    const tabState: TabState = {
        form: {
            name: 'Alice',
        },
    };

    // GM.saveTab

    // $ExpectType void
    await GM.saveTab(tabState);

    // GM.getTab

    // $ExpectType any
    await GM.getTab();
    const tab: Record<string, string> = await GM.getTab();

    // GM.getTabs

    const tab0 = (await GM.getTabs())[0];

    // GM.log

    // $ExpectType void
    await GM.log(42);
    await GM.log('Hello', 'World!');

    // GM.openInTab

    await GM.openInTab('https://example.org');
    await GM.openInTab('https://example.org', true);

    const openTabObject = await GM.openInTab('https://example.org', {
        active: true,
        insert: false,
        setParent: true,
    });
    openTabObject.onclose = () => {};
    // $ExpectType boolean
    openTabObject.closed;
    openTabObject.close();

    // GM.notification

    // Using globals from GM_notification tests above
    // specifically textNotification and highlightNotification

    // $ExpectType boolean
    await GM.notification(textNotification);

    // $ExpectType boolean
    await GM.notification(highlightNotification);

    // $ExpectType boolean
    await GM.notification(textNotification, textNotification.ondone);

    await GM.notification('text', 'title', 'https://tampermonkey.net/favicon.ico', () => {});

    // GM.setClipboard

    // $ExpectType void
    await GM.setClipboard('Some text');
    await GM.setClipboard('Some text', 'text');
    await GM.setClipboard('Some text', {
        type: 'text',
        mimetype: 'text/plain',
    });
};
