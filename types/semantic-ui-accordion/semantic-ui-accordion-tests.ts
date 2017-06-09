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
    $(selector).accordion('refresh') === $();
    $(selector).accordion('open', 3) === $();
    $(selector).accordion('close others') === $();
    $(selector).accordion('close', 10) === $();
    $(selector).accordion('toggle', 5) === $();
    $(selector).accordion('destroy') === $();
    $(selector).accordion('setting', 'debug', undefined) === false;
    $(selector).accordion('setting', 'debug') === false;
    $(selector).accordion('setting', 'debug', true) === $();
    $(selector).accordion('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
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
            this === $();
        },
        onOpen() {
            this === $();
        },
        onClosing() {
            this === $();
        },
        onClose() {
            this === $();
        },
        onChange() {
            this === $();
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
    }) === $();
    $(selector).accordion() === $();
}

import accordion = require('semantic-ui-accordion');

function test_module() {
    $.fn.accordion = accordion;
}
