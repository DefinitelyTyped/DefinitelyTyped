function test_api_static() {
    $.api.settings.className.error = 'error';
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
    $(selector).api('destroy') === $();
    $(selector).api('setting', 'debug', undefined) === false;
    $(selector).api('setting', 'debug') === false;
    $(selector).api('setting', 'debug', true) === $();
    $(selector).api('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
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
    }) === $();
    $(selector).api() === $();
}

import api = require('semantic-ui-api');

function test_module() {
    $.fn.api = api;
}
