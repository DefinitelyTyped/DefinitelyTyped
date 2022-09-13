function test_static() {
    $.fn.accordion.settings.namespace = 'namespace';
    $.fn.accordion.settings.name = 'name';
    $.fn.accordion.settings.silent = false;
    $.fn.accordion.settings.debug = true;
    $.fn.accordion.settings.performance = true;
    $.fn.accordion.settings.verbose = true;
}

function test_accordion() {
    const selector = '.ui.accordion';
    $(selector).accordion('refresh'); // $ExpectType JQuery<HTMLElement>
    $(selector).accordion('open', 3); // $ExpectType JQuery<HTMLElement>
    $(selector).accordion('close others'); // $ExpectType JQuery<HTMLElement>
    $(selector).accordion('close', 10); // $ExpectType JQuery<HTMLElement>
    $(selector).accordion('toggle', 5); // $ExpectType JQuery<HTMLElement>
    $(selector).accordion('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).accordion('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).accordion('setting', 'debug'); // $ExpectType boolean
    $(selector).accordion('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).accordion('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).accordion({
        exclusive: true,
        on: 'on',
        animateChildren: false,
        closeNested: true,
        collapsible: false,
        duration: 500,
        easing: 'easeInOutQuint',
        observeChanges: true,
        onOpening() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onOpen() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onClosing() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onClose() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onChange() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        selector: {
            accordion: 'accordion',
            title: 'title',
            trigger: 'trigger',
            content: 'content'
        },
        className: {
            active: 'active',
            animating: 'animating'
        },
        error: {
            method: 'method'
        }
    });
    $(selector).accordion(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).accordion('foo');
    // @ts-expect-error
    $(selector).accordion({ foo: 'bar' });
}

import accordion = require('semantic-ui-accordion');

function test_module() {
    accordion; // $ExpectType Accordion
    $.fn.accordion = accordion;
}
