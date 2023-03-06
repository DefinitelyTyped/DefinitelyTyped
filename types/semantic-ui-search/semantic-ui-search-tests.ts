function test_search_static() {
    $.fn.search.settings.error!.method = 'method';
    $.fn.search.settings.namespace = 'namespace';
    $.fn.search.settings.name = 'name';
    $.fn.search.settings.silent = false;
    $.fn.search.settings.debug = true;
    $.fn.search.settings.performance = true;
    $.fn.search.settings.verbose = true;
}

function test_search() {
    const selector = '.ui.search';
    $(selector).search('query', () => { }); // $ExpectType JQuery<HTMLElement>
    $(selector).search('display message', 'text', 'type'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('cancel query'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('search local', 'query'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('has minimum characters'); // $ExpectType boolean
    $(selector).search('search remote', 'query', () => { }); // $ExpectType JQuery<HTMLElement>
    $(selector).search('search object', 'query', {}, ['searchField']); // $ExpectType any
    $(selector).search('cancel query'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('is focused'); // $ExpectType boolean
    $(selector).search('is visible'); // $ExpectType boolean
    $(selector).search('is empty'); // $ExpectType boolean
    $(selector).search('get value'); // $ExpectType any
    $(selector).search('get result', 'value'); // $ExpectType any
    $(selector).search('set value', 'value'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('read cache', 'query'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('clear cache', 'query'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('write cache', 'query'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('add results', 'html'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('show results', () => { }); // $ExpectType JQuery<HTMLElement>
    $(selector).search('hide results', () => { }); // $ExpectType JQuery<HTMLElement>
    $(selector).search('generate results', {}); // $ExpectType JQuery<HTMLElement>
    $(selector).search('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).search('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).search('setting', 'debug'); // $ExpectType boolean
    $(selector).search('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).search('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).search({
        type: 'type',
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
            this; // $ExpectType JQuery<HTMLElement>
            result; // $ExpectType any
            response; // $ExpectType any

            return false;
        },
        onResultsAdd(html) {
            this; // $ExpectType JQuery<HTMLElement>
            html; // $ExpectType string

            return false;
        },
        onSearchQuery(query) {
            this; // $ExpectType JQuery<HTMLElement>
            query; // $ExpectType string
        },
        onResults(response) {
            this; // $ExpectType JQuery<HTMLElement>
            response; // $ExpectType any
        },
        onResultsOpen() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onResultsClose() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        templates: {
            escape(string) {
                string; // $ExpectType string

                return 'escape';
            },
            message(message, type) {
                message; // $ExpectType string
                type; // $ExpectType string

                return 'message';
            },
            category(response) {
                response; // $ExpectType any

                return 'category';
            },
            standard(response) {
                response; // $ExpectType any

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
    });
    $(selector).search(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).search('foo');
    // @ts-expect-error
    $(selector).search({ foo: 'bar' });
}

import search = require('semantic-ui-search');

function test_module() {
    search; // $ExpectType Search
    $.fn.search = search;
}
