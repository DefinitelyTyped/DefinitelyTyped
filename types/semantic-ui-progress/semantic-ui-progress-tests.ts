function test_progress_static() {
    $.fn.progress.settings.error.method = 'method';
    $.fn.progress.settings.namespace = 'namespace';
    $.fn.progress.settings.name = 'name';
    $.fn.progress.settings.silent = false;
    $.fn.progress.settings.debug = true;
    $.fn.progress.settings.performance = true;
    $.fn.progress.settings.verbose = true;
}

function test_progress() {
    const selector = '.ui.progress';
    $(selector).progress('set percent', 10) === $();
    $(selector).progress('set progress', 25) === $();
    $(selector).progress('increment', 5) === $();
    $(selector).progress('decrement', 2) === $();
    $(selector).progress('update progress', 45) === $();
    $(selector).progress('complete') === $();
    $(selector).progress('reset') === $();
    $(selector).progress('set total', 100) === $();
    $(selector).progress('get text', 'text') === 'text';
    $(selector).progress('get normalized value', 20) === 40;
    $(selector).progress('get percent') === 22;
    $(selector).progress('get value') === 45;
    $(selector).progress('get total') === 67;
    $(selector).progress('is complete') === false;
    $(selector).progress('is success') === false;
    $(selector).progress('is warning') === false;
    $(selector).progress('is error') === false;
    $(selector).progress('is active') === false;
    $(selector).progress('set active') === $();
    $(selector).progress('set warning') === $();
    $(selector).progress('set success') === $();
    $(selector).progress('set error') === $();
    $(selector).progress('set duration', 4) === $();
    $(selector).progress('set label', 'label') === $();
    $(selector).progress('set bar label', 'bar label') === $();
    $(selector).progress('remove active') === $();
    $(selector).progress('remove warning') === $();
    $(selector).progress('remove success') === $();
    $(selector).progress('remove error') === $();
    $(selector).progress('destroy') === $();
    $(selector).progress('setting', 'debug', undefined) === false;
    $(selector).progress('setting', 'debug') === false;
    $(selector).progress('setting', 'debug', true) === $();
    $(selector).progress('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).progress({
        autoSuccess: false,
        showActivity: true,
        limitValues: false,
        label: 'percent',
        random: {
            min: 2,
            max: 5
        },
        precision: 1,
        total: 10,
        value: 20,
        onChange(percent, value, total) {
            this === $();
            percent === 10;
            value === 20;
            total === 30;
        },
        onSuccess(total) {
            this === $();
            total === 30;
        },
        onActive(value, total) {
            this === $();
            value === 20;
            total === 30;
        },
        onError(value, total) {
            this === $();
            value === 20;
            total === 30;
        },
        onWarning(value, total) {
            this === $();
            value === 20;
            total === 30;
        },
        text: {
            active: 'active',
            error: 'error',
            success: 'success',
            warning: 'warning',
            percent: 'percent',
            ratio: 'ratio'
        },
        regExp: {
            variable: /{\$*[A-z0-9]+}/g
        },
        selector: {
            bar: 'bar',
            label: 'label',
            progress: 'progress'
        },
        metadata: {
            percent: 'percent',
            total: 'total',
            value: 'value'
        },
        className: {
            active: 'active',
            error: 'error',
            success: 'success',
            warning: 'warning'
        },
        error: {
            method: 'method',
            nonNumeric: 'nonNumeric'
        }
    }) === $();
    $(selector).progress() === $();
}

import progress = require('semantic-ui-progress');

function test_module() {
    $.fn.progress = progress;
}
