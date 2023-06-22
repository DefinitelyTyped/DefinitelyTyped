function test_api_static() {
    $.api.settings.className!.error = 'error';
    $.api.settings.namespace = 'namespace';
    $.api.settings.name = 'name';
    $.api.settings.silent = false;
    $.api.settings.debug = true;
    $.api.settings.performance = true;
    $.api.settings.verbose = true;

    $.fn.api.settings.namespace = 'namespace';
    $.fn.api.settings.name = 'name';
    $.fn.api.settings.silent = false;
    $.fn.api.settings.debug = true;
    $.fn.api.settings.performance = true;
    $.fn.api.settings.verbose = true;
}

function test_api() {
    const selector = '.ui.api';
    $(selector).api('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).api('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).api('setting', 'debug'); // $ExpectType boolean
    $(selector).api('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).api('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).api({
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
    });
    $(selector).api(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).api('foo');
    // @ts-expect-error
    $(selector).api({ foo: 'bar' });
}

function creating_an_api() {
    function required_parameters() {
        /* Two required variables */
        $.fn.api.settings.api = {
            'get followers': '/followers/{id}?results={count}',
        };
    }

    function optional_parameters() {
        /* One required, one optional variable */
        $.fn.api.settings.api = {
            'get followers': '/followers/{id}/{/sort}',
        };
    }

    function creating_your_api() {
        /* Define API endpoints once globally */
        $.fn.api.settings.api = {
            'get followers': '/followers/{id}?results={count}',
            'create user': '/create',
            'add user': '/add/{id}',
            'follow user': '/follow/{id}',
            search: '/search/?query={value}'
        };
    }

    function using_urls() {
        $('.search.button')
            .api({
                url: 'http://www.google.com?q={value}'
            });
    }
}

import api = require('semantic-ui-api');

function test_module() {
    api; // $ExpectType Api
    $.fn.api = api;
}
