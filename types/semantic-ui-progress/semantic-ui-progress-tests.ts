function test_progress_static() {
    $.fn.progress.settings.error!.method = 'method';
    $.fn.progress.settings.namespace = 'namespace';
    $.fn.progress.settings.name = 'name';
    $.fn.progress.settings.silent = false;
    $.fn.progress.settings.debug = true;
    $.fn.progress.settings.performance = true;
    $.fn.progress.settings.verbose = true;
}

function test_progress() {
    const selector = '.ui.progress';
    $(selector).progress('set percent', 10); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('set progress', 25); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('increment', 5); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('increment'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('decrement', 2); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('decrement'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('update progress', 45); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('complete'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('reset'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('set total', 100); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('get text', 'text'); // $ExpectType string
    $(selector).progress('get normalized value', 20); // $ExpectType number
    $(selector).progress('get percent'); // $ExpectType number
    $(selector).progress('get value'); // $ExpectType number
    $(selector).progress('get total'); // $ExpectType number
    $(selector).progress('is complete'); // $ExpectType boolean
    $(selector).progress('is success'); // $ExpectType boolean
    $(selector).progress('is warning'); // $ExpectType boolean
    $(selector).progress('is error'); // $ExpectType boolean
    $(selector).progress('is active'); // $ExpectType boolean
    $(selector).progress('set active'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('set warning'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('set success'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('set error'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('set duration', 4); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('set label', 'label'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('set bar label', 'bar label'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('remove active'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('remove warning'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('remove success'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('remove error'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).progress('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).progress('setting', 'debug'); // $ExpectType boolean
    $(selector).progress('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).progress('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
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
            this; // $ExpectType JQuery<HTMLElement>
            percent; // $ExpectType number
            value; // $ExpectType number
            total; // $ExpectType number
        },
        onSuccess(total) {
            this; // $ExpectType JQuery<HTMLElement>
            total; // $ExpectType number
        },
        onActive(value, total) {
            this; // $ExpectType JQuery<HTMLElement>
            value; // $ExpectType number
            total; // $ExpectType number
        },
        onError(value, total) {
            this; // $ExpectType JQuery<HTMLElement>
            value; // $ExpectType number
            total; // $ExpectType number
        },
        onWarning(value, total) {
            this; // $ExpectType JQuery<HTMLElement>
            value; // $ExpectType number
            total; // $ExpectType number
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
    });
    $(selector).progress(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).progress('foo');
    // @ts-expect-error
    $(selector).progress({ foo: 'bar' });
}

import progress = require('semantic-ui-progress');

function test_module() {
    progress; // $ExpectType Progress
    $.fn.progress = progress;
}
