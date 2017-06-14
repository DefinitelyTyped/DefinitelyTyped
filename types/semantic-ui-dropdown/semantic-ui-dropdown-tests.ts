function test_dropdown_static() {
    $.fn.dropdown.settings.error.method = 'method';
    $.fn.dropdown.settings.namespace = 'namespace';
    $.fn.dropdown.settings.name = 'name';
    $.fn.dropdown.settings.silent = false;
    $.fn.dropdown.settings.debug = true;
    $.fn.dropdown.settings.performance = true;
    $.fn.dropdown.settings.verbose = true;
}

function test_dropdown() {
    const selector = '.ui.dropdown';
    $(selector).dropdown('setup menu') === $();
    $(selector).dropdown('refresh') === $();
    $(selector).dropdown('toggle') === $();
    $(selector).dropdown('show') === $();
    $(selector).dropdown('hide') === $();
    $(selector).dropdown('clear') === $();
    $(selector).dropdown('hide others') === $();
    $(selector).dropdown('restore defaults') === $();
    $(selector).dropdown('restore default text') === $();
    $(selector).dropdown('restore placeholder text') === $();
    $(selector).dropdown('restore default value') === $();
    $(selector).dropdown('save defaults') === $();
    $(selector).dropdown('set selected', 123) === $();
    $(selector).dropdown('remove selected', false) === $();
    $(selector).dropdown('set selected', ['456']) === $();
    $(selector).dropdown('set exactly', []) === $();
    $(selector).dropdown('set text', 'hello') === $();
    $(selector).dropdown('set value', 24) === $();
    $(selector).dropdown('get text') === 'text';
    $(selector).dropdown('get value') === {};
    $(selector).dropdown('get item', 'Pennsylvania') === $();
    $(selector).dropdown('bind touch events') === $();
    $(selector).dropdown('bind mouse events') === $();
    $(selector).dropdown('bind intent') === $();
    $(selector).dropdown('unbind intent') === $();
    $(selector).dropdown('determine intent') === true;
    $(selector).dropdown('determine select action', 'text', 90) === $();
    $(selector).dropdown('set active') === $();
    $(selector).dropdown('set visible') === $();
    $(selector).dropdown('remove active') === $();
    $(selector).dropdown('remove visible') === $();
    $(selector).dropdown('is selection') === false;
    $(selector).dropdown('is animated') === false;
    $(selector).dropdown('is visible') === false;
    $(selector).dropdown('is hidden') === false;
    $(selector).dropdown('get default text') === 'default text';
    $(selector).dropdown('get placeholder text') === 'placeholder text';
    $(selector).dropdown('destroy') === $();
    $(selector).dropdown('setting', 'debug', undefined) === false;
    $(selector).dropdown('setting', 'debug') === false;
    $(selector).dropdown('setting', 'debug', true) === $();
    $(selector).dropdown('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).dropdown({
        on: 'hover',
        allowReselection: true,
        allowAdditions: false,
        hideAdditions: true,
        action(text, value, element) {
            this === $();
            text === 'text';
            if (typeof value !== 'string') {
                value === false;
            }
            element === $();
        },
        minCharacters: 2,
        match: 'text',
        selectOnKeydown: false,
        forceSelection: true,
        allowCategorySelection: false,
        placeholder: 'value',
        apiSettings: {
            cache: 'local',
            throttleFirstRequest: true,
            loadingDuration: 20
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
            value === {};
            text === 'text';
            $choice === $();
        },
        onAdd(addedValue, addedText, $addedChoice) {
            addedValue === {};
            addedText === 'addedText';
            $addedChoice === $();
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
    }) === $();
    $(selector).dropdown() === $();
}

import dropdown = require('semantic-ui-dropdown');

function test_module() {
    $.fn.dropdown = dropdown;
}
