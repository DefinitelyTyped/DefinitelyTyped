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
    username: 'guest',
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

openTabObject.onclosed = () => {
    GM_log('Tab closed', openTabObject.closed);
};

openTabObject.close();

// GM_notification

const textNotification: Tampermonkey.NotificationDetails = {
    text: 'Notification text',
    title: 'Notification title',
    image: 'https://tampermonkey.net/favicon.ico',
    timeout: 5000,
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
