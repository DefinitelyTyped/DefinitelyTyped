function test_tab_static() {
    $.fn.tab.settings.error.method = 'method';
    $.fn.tab.settings.namespace = 'namespace';
    $.fn.tab.settings.name = 'name';
    $.fn.tab.settings.silent = false;
    $.fn.tab.settings.debug = true;
    $.fn.tab.settings.performance = true;
    $.fn.tab.settings.verbose = true;
}

function test_tab() {
    const selector = '.ui.tab';
    $(selector).tab('change tab', 'path') === $();
    $(selector).tab('set state', 'path') === $();
    $(selector).tab('get path') === 'path';
    $(selector).tab('is tab') === false;
    $(selector).tab('cache read', 'path') === false;
    $(selector).tab('cache add', 'path', 'html') === $();
    $(selector).tab('cache remove', 'path') === $();
    $(selector).tab('destroy') === $();
    $(selector).tab('setting', 'debug', undefined) === false;
    $(selector).tab('setting', 'debug') === false;
    $(selector).tab('setting', 'debug', true) === $();
    $(selector).tab('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
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
                settings === ({} as SemanticUI.ApiSettings);
                callback === ((response: any) => { });
            },
            mockResponse: false,
            mockResponseAsync(settings, callback) {
                settings === ({} as SemanticUI.ApiSettings);
                callback === ((response: any) => { });
            },
            method: 'post',
            dataType: 'xml',
            data: {},
            beforeSend(settings) {
                settings === ({} as SemanticUI.ApiSettings);
            },
            beforeXHR(xhrObject) {
                xhrObject === ({} as JQueryXHR);
            },
            onRequest(promise, xhr) {
                promise === ({} as JQueryDeferred<any>);
                xhr === ({} as JQueryXHR);
            },
            onResponse(response) {
                response === ({} as any);
            },
            successTest(response) {
                return response === ({} as any);
            },
            onSuccess(response, element, xhr) {
                response === ({} as any);
                element === $();
                xhr === ({} as JQueryXHR);
            },
            onComplete(response, element, xhr) {
                response === ({} as any);
                element === $();
                xhr === ({} as JQueryXHR);
            },
            onFailure(response, element) {
                response === ({} as any);
                element === $();
            },
            onError(errorMessage, element, xhr) {
                errorMessage === '';
                element === $();
                xhr === ({} as JQueryXHR);
            },
            onAbort(errorMessage, element, xhr) {
                errorMessage === '';
                element === $();
                xhr === ({} as JQueryXHR);
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
            this === $();
            tabPath === 'tabPath';
            parameterArray === [];
            historyEvent === {};
        },
        onLoad(tabPath, parameterArray, historyEvent) {
            this === $();
            tabPath === 'tabPath';
            parameterArray === [];
            historyEvent === {};
        },
        onRequest(tabPath) {
            this === $();
            tabPath === 'tabPath';
        },
        onVisible(tabPath) {
            this === $();
            tabPath === 'tabPath';
        },
        templates: {
            determineTitle(tabArray) {
                tabArray === [];
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
    }) === $();
    $(selector).tab() === $();
}

import tab = require('semantic-ui-tab');

function test_module() {
    $.fn.tab = tab;
}
