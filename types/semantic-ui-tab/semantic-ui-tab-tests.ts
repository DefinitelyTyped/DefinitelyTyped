function test_tab_static() {
    $.fn.tab.settings.error!.method = 'method';
    $.fn.tab.settings.namespace = 'namespace';
    $.fn.tab.settings.name = 'name';
    $.fn.tab.settings.silent = false;
    $.fn.tab.settings.debug = true;
    $.fn.tab.settings.performance = true;
    $.fn.tab.settings.verbose = true;
}

function test_tab() {
    const selector = '.ui.tab';
    $(selector).tab('change tab', 'path'); // $ExpectType JQuery<HTMLElement>
    $(selector).tab('set state', 'path'); // $ExpectType JQuery<HTMLElement>
    $(selector).tab('get path'); // $ExpectType string
    $(selector).tab('is tab'); // $ExpectType boolean
    $(selector).tab('cache read', 'path'); // $ExpectType string | false
    $(selector).tab('cache add', 'path', 'html'); // $ExpectType JQuery<HTMLElement>
    $(selector).tab('cache remove', 'path'); // $ExpectType JQuery<HTMLElement>
    $(selector).tab('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).tab('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).tab('setting', 'debug'); // $ExpectType boolean
    $(selector).tab('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).tab('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).tab({
        auto: false,
        deactivate: 'siblings',
        history: true,
        ignoreFirstLoad: false,
        evaluateScripts: 'once',
        alwaysRefresh: true,
        cacheType: 'DOM',
        cache: false,
        apiSettings: {
            on: 'on',
            cache: true,
            stateContext: $(),
            encodeParameters: false,
            defaultData: true,
            serializeForm: false,
            throttle: 10,
            throttleFirstRequest: true,
            interruptRequests: false,
            loadingDuration: 3,
            hideError: true,
            errorDuration: 10,
            action: 'action',
            url: 'url',
            urlData: false,
            response: false,
            responseAsync(settings, callback) {
                settings; // $ExpectType Param
                callback; // $ExpectType (response: any) => void
            },
            mockResponse: false,
            mockResponseAsync(settings, callback) {
                settings; // $ExpectType Param
                callback; // $ExpectType (response: any) => void
            },
            method: 'post',
            dataType: 'xml',
            data: {},
            beforeSend(settings) {
                settings; // $ExpectType Param
            },
            beforeXHR(xhrObject) {
                xhrObject; // $ExpectType jqXHR<any>
            },
            onRequest(promise, xhr) {
                promise; // $ExpectType Deferred<any, any, any>
                xhr; // $ExpectType jqXHR<any>
            },
            onResponse(response) {
                response; // $ExpectType any
            },
            successTest(response) {
                response; // $ExpectType any

                return false;
            },
            onSuccess(response, element, xhr) {
                response; // $ExpectType any
                element; // $ExpectType JQuery<HTMLElement>
                xhr; // $ExpectType jqXHR<any>
            },
            onComplete(response, element, xhr) {
                response; // $ExpectType any
                element; // $ExpectType JQuery<HTMLElement>
                xhr; // $ExpectType jqXHR<any>
            },
            onFailure(response, element) {
                response; // $ExpectType any
                element; // $ExpectType JQuery<HTMLElement>
            },
            onError(errorMessage, element, xhr) {
                errorMessage; // $ExpectType string
                element; // $ExpectType JQuery<HTMLElement>
                xhr; // $ExpectType jqXHR<any>
            },
            onAbort(errorMessage, element, xhr) {
                errorMessage; // $ExpectType string
                element; // $ExpectType JQuery<HTMLElement>
                xhr; // $ExpectType jqXHR<any>
            },
            regExp: {
                required: /{\$*[A-z0-9]+}/g,
                optional: /{\/\$*[A-z0-9]+}/g
            },
            selector: {
                disabled: '.disabled',
                form: 'form'
            },
            className: {
                loading: 'loading',
                error: 'error'
            },
            metadata: {
                action: 'action',
                url: 'url'
            },
            error: {
                beforeSend: 'beforeSend',
                error: 'error',
                exitConditions: 'exitConditions',
                JSONParse: 'JSONParse',
                legacyParameters: 'legacyParameters',
                missingAction: 'missingAction',
                missingSerialize: 'missingSerialize',
                missingURL: 'missingURL',
                noReturnedValue: 'noReturnedValue',
                parseError: 'parseError',
                requiredParameter: 'requiredParameter',
                statusMessage: 'statusMessage',
                timeout: 'timeout'
            }
        },
        historyType: 'state',
        path: 'path',
        context: $(),
        childrenOnly: true,
        maxDepth: 10,
        loadOnce: false,
        onFirstLoad(tabPath, parameterArray, historyEvent) {
            this; // $ExpectType JQuery<HTMLElement>
            tabPath; // $ExpectType string
            parameterArray; // $ExpectType any[]
            historyEvent; // $ExpectType any
        },
        onLoad(tabPath, parameterArray, historyEvent) {
            this; // $ExpectType JQuery<HTMLElement>
            tabPath; // $ExpectType string
            parameterArray; // $ExpectType any[]
            historyEvent; // $ExpectType any
        },
        onRequest(tabPath) {
            this; // $ExpectType JQuery<HTMLElement>
            tabPath; // $ExpectType string
        },
        onVisible(tabPath) {
            this; // $ExpectType JQuery<HTMLElement>
            tabPath; // $ExpectType string
        },
        templates: {
            determineTitle(tabArray) {
                tabArray; // $ExpectType any[]

                return 'title';
            }
        },
        selector: {
            tabs: 'tabs',
            parent: 'parent'
        },
        metadata: {
            tab: 'tab',
            loaded: 'loaded',
            promise: 'promise'
        },
        className: {
            loading: 'loading',
            active: 'active'
        },
        error: {
            api: 'api',
            method: 'method',
            missingTab: 'missingTab',
            noContent: 'noContent',
            path: 'path',
            recursion: 'recursion',
            state: 'state'
        }
    });
    $(selector).tab(); // $ExpectType JQuery<HTMLElement>

    $(selector).tab('foo'); // $ExpectError
    $(selector).tab({ foo: 'bar' }); // $ExpectError
}

import tab = require('semantic-ui-tab');

function test_module() {
    tab; // $ExpectType Tab
    $.fn.tab = tab;
}
