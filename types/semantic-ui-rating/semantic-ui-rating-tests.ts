function test_rating_static() {
    $.fn.rating.settings.error.action = 'action';
    $.fn.rating.settings.namespace = 'namespace';
    $.fn.rating.settings.name = 'name';
    $.fn.rating.settings.silent = false;
    $.fn.rating.settings.debug = true;
    $.fn.rating.settings.performance = true;
    $.fn.rating.settings.verbose = true;
}

function test_rating() {
    const selector = '.ui.rating';
    $(selector).rating('set rating', 3) === $();
    $(selector).rating('get rating') === 4;
    $(selector).rating('disable') === $();
    $(selector).rating('enable') === $();
    $(selector).rating('clear rating') === $();
    $(selector).rating('destroy') === $();
    $(selector).rating('setting', 'debug', undefined) === false;
    $(selector).rating('setting', 'debug') === false;
    $(selector).rating('setting', 'debug', true) === $();
    $(selector).rating('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).rating({
        initialRating: 0,
        fireOnInit: false,
        clearable: false,
        interactive: true,
        onRate(value) {
            this === $();
            value === 3;
        },
        selector: {
            icon: '.icon'
        },
        className: {
            active: 'active',
            hover: 'hover',
            loading: 'loading'
        },
        error: {
            action: 'action'
        }
    }) === $();
    $(selector).rating() === $();
}

import rating = require('semantic-ui-rating');

function test_module() {
    $.fn.rating = rating;
}
