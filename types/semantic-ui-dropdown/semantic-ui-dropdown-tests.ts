function test_dropdown_static() {
    $.fn.dropdown.settings.error!.method = 'method';
    $.fn.dropdown.settings.namespace = 'namespace';
    $.fn.dropdown.settings.name = 'name';
    $.fn.dropdown.settings.silent = false;
    $.fn.dropdown.settings.debug = true;
    $.fn.dropdown.settings.performance = true;
    $.fn.dropdown.settings.verbose = true;
}

function test_dropdown() {
    const selector = '.ui.dropdown';
    $(selector).dropdown('setup menu'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('refresh'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('toggle'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('show'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('hide'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('clear'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('hide others'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('restore defaults'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('restore default text'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('restore placeholder text'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('restore default value'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('save defaults'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('set selected', 123); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('remove selected', false); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('set selected', ['456']); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('set exactly', []); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('set text', 'hello'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('set value', 24); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('get text'); // $ExpectType string
    $(selector).dropdown('get value'); // $ExpectType any
    $(selector).dropdown('get item', 'Pennsylvania'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('bind touch events'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('bind mouse events'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('bind intent'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('unbind intent'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('determine intent'); // $ExpectType boolean
    $(selector).dropdown('determine select action', 'text', 90); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('set active'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('set visible'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('remove active'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('remove visible'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('is selection'); // $ExpectType boolean
    $(selector).dropdown('is animated'); // $ExpectType boolean
    $(selector).dropdown('is visible'); // $ExpectType boolean
    $(selector).dropdown('is hidden'); // $ExpectType boolean
    $(selector).dropdown('get default text') === 'default text';
    $(selector).dropdown('get placeholder text') === 'placeholder text';
    $(selector).dropdown('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).dropdown('setting', 'debug'); // $ExpectType boolean
    $(selector).dropdown('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).dropdown({
        on: 'hover',
        allowReselection: true,
        allowAdditions: false,
        hideAdditions: true,
        action(text, value, element) {
            this; // $ExpectType JQuery<HTMLElement>
            text; // $ExpectType string
            value; // $ExpectType string | false
            element; // $ExpectType JQuery<HTMLElement>
        },
        minCharacters: 2,
        match: 'text',
        selectOnKeydown: false,
        forceSelection: true,
        allowCategorySelection: false,
        placeholder: 'value',
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
        fields: {
            remoteValues: 'remoteValues',
            values: 'values',
            name: 'name',
            value: 'value'
        },
        saveRemoteData: true,
        filterRemoteData: false,
        useLabels: true,
        maxSelections: 20,
        glyphWidth: 14,
        label: {
            transition: 'horizontal flip',
            duration: 200,
            variation: 'basic'
        },
        direction: 'downward',
        keepOnScreen: false,
        context: 'body',
        fullTextSearch: 'exact',
        preserveHTML: true,
        sortSelect: false,
        showOnFocus: true,
        allowTab: false,
        transition: 'auto',
        duration: 500,
        keys: {
            backspace: 8,
            delimiter: false,
            deleteKey: 46,
            enter: 13,
            escape: 27,
            pageUp: 33,
            pageDown: 34,
            leftArrow: 37,
            upArrow: 38,
            rightArrow: 30,
            downArrow: 40
        },
        delay: {
            hide: 300,
            show: 200,
            search: 50,
            touch: 50
        },
        onChange(value, text, $choice) {
            value; // $ExpectType any
            text; // $ExpectType string
            $choice; // $ExpectType JQuery<HTMLElement>
        },
        onAdd(addedValue, addedText, $addedChoice) {
            addedValue; // $ExpectType any
            addedText; // $ExpectType string
            $addedChoice; // $ExpectType JQuery<HTMLElement>
        },
        message: {
            addResult: 'addResult',
            count: 'count',
            maxSelections: 'maxSelections',
            noResults: 'noResults',
        },
        selector: {
            addition: 'addition',
            dropdown: 'dropdown',
            icon: 'icon',
            input: 'input',
            item: 'item',
            label: 'label',
            remove: 'remove',
            siblingLabel: 'siblingLabel',
            menu: 'menu',
            message: 'message',
            menuIcon: 'menuIcon',
            search: 'search',
            text: 'text',
        },
        regExp: {
            escape: /[-[\]{}()*+?.,\\^$|#\s]/g
        },
        metadata: {
            defaultText: 'defaultText',
            defaultValue: 'defaultValue',
            placeholderText: 'placeholderText',
            text: 'text',
            value: 'value',
        },
        className: {
            active: 'active',
            addition: 'addition',
            animating: 'animating',
            disabled: 'disabled',
            dropdown: 'dropdown',
            filtered: 'filtered',
            hidden: 'hidden',
            item: 'item',
            label: 'label',
            loading: 'loading',
            menu: 'menu',
            message: 'message',
            multiple: 'multiple',
            placeholder: 'placeholder',
            search: 'search',
            selected: 'selected',
            selection: 'selection',
            upward: 'upward',
            visible: 'visible',
        },
        error: {
            action: 'action',
            alreadySetup: 'alreadySetup',
            labels: 'labels',
            method: 'method',
            noTransition: 'noTransition'
        }
    });
    $(selector).dropdown(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).dropdown('foo');
    // @ts-expect-error
    $(selector).dropdown({ foo: 'bar' });
}

import dropdown = require('semantic-ui-dropdown');

function test_module() {
    dropdown; // $ExpectType Dropdown
    $.fn.dropdown = dropdown;
}
