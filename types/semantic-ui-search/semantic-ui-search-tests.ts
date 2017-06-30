function test_search_static() {
    $.fn.search.settings.error.method = 'method';
    $.fn.search.settings.namespace = 'namespace';
    $.fn.search.settings.name = 'name';
    $.fn.search.settings.silent = false;
    $.fn.search.settings.debug = true;
    $.fn.search.settings.performance = true;
    $.fn.search.settings.verbose = true;
}

function test_search() {
    const selector = '.ui.search';
    $(selector).search('query', () => { }) === $();
    $(selector).search('display message', 'text', 'type') === $();
    $(selector).search('cancel query') === $();
    $(selector).search('search local', 'query') === $();
    $(selector).search('has minimum characters') === true;
    $(selector).search('search remote', 'query', () => { }) === $();
    $(selector).search('search object', 'query', {}, ['searchField']) === {};
    $(selector).search('cancel query') === $();
    $(selector).search('is focused') === false;
    $(selector).search('is visible') === true;
    $(selector).search('is empty') === false;
    $(selector).search('get value') === {};
    $(selector).search('get result', 'value') === {};
    $(selector).search('set value', 'value') === $();
    $(selector).search('read cache', 'query') === $();
    $(selector).search('clear cache', 'query') === $();
    $(selector).search('write cache', 'query') === $();
    $(selector).search('add results', 'html') === $();
    $(selector).search('show results', () => { }) === $();
    $(selector).search('hide results', () => { }) === $();
    $(selector).search('generate results', {}) === $();
    $(selector).search('destroy') === $();
    $(selector).search('setting', 'debug', undefined) === false;
    $(selector).search('setting', 'debug') === false;
    $(selector).search('setting', 'debug', true) === $();
    $(selector).search('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).search({
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
        minCharacters: 10,
        transition: 'fade',
        duration: 200,
        maxResults: 2,
        cache: false,
        source: {},
        selectFirstResult: true,
        showNoResults: false,
        searchFullText: true,
        fields: {
            categories: 'categories',
            categoryName: 'categoryName',
            categoryResults: 'categoryResults',
            description: 'description',
            image: 'image',
            price: 'price',
            results: 'results',
            title: 'title',
            action: 'action',
            actionText: 'actionText',
            actionURL: 'actionURL'
        },
        searchFields: [
            'field1',
            'field2'
        ],
        hideDelay: 20,
        searchDelay: 10,
        easing: 'easeOutExpo',
        onSelect(result, response) {
            this === $();
            result === {};
            response === {};
            return false;
        },
        onResultsAdd(html) {
            this === $();
            html === 'html';
            return false;
        },
        onSearchQuery(query) {
            this === $();
            query === 'query';
        },
        onResults(response) {
            this === $();
            response === {};
        },
        onResultsOpen() {
            this === $();
        },
        onResultsClose() {
            this === $();
        },
        templates: {
            escape(string) {
                return string;
            },
            message(message, type) {
                return message + type;
            },
            category(response) {
                return 'category';
            },
            standard(response) {
                return 'standard';
            }
        },
        regExp: {
            escape: /[\-\[\]\/{}()*+?.\\^$|]/g,
            beginsWith: '(?:\s|^)'
        },
        selector: {
            prompt: 'prompt',
            searchButton: 'searchButton',
            results: 'results',
            category: 'category',
            result: 'result'
        },
        metadata: {
            cache: 'cache',
            results: 'results'
        },
        className: {
            active: 'active',
            empty: 'empty',
            focus: 'focus',
            loading: 'loading',
            pressed: 'pressed'
        },
        error: {
            source: 'source',
            noResults: 'noResults',
            logging: 'logging',
            noTemplate: 'noTemplate',
            serverError: 'serverError',
            maxResults: 'maxResults',
            method: 'method'
        }
    }) === $();
    $(selector).search() === $();
}

import search = require('semantic-ui-search');

function test_module() {
    $.fn.search = search;
}
