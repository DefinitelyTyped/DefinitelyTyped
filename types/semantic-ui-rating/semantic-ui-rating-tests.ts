function test_rating_static() {
    $.fn.rating.settings.error!.action = 'action';
    $.fn.rating.settings.namespace = 'namespace';
    $.fn.rating.settings.name = 'name';
    $.fn.rating.settings.silent = false;
    $.fn.rating.settings.debug = true;
    $.fn.rating.settings.performance = true;
    $.fn.rating.settings.verbose = true;
}

function test_rating() {
    const selector = '.ui.rating';
    $(selector).rating('set rating', 3); // $ExpectType JQuery<HTMLElement>
    $(selector).rating('get rating'); // $ExpectType number
    $(selector).rating('disable'); // $ExpectType JQuery<HTMLElement>
    $(selector).rating('enable'); // $ExpectType JQuery<HTMLElement>
    $(selector).rating('clear rating'); // $ExpectType JQuery<HTMLElement>
    $(selector).rating('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).rating('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).rating('setting', 'debug'); // $ExpectType boolean
    $(selector).rating('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).rating('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).rating({
        initialRating: 0,
        fireOnInit: false,
        clearable: false,
        interactive: true,
        onRate(value) {
            this; // $ExpectType JQuery<HTMLElement>
            value; // $ExpectType number
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
    });
    $(selector).rating(); // $ExpectType JQuery<HTMLElement>

    $(selector).rating('foo'); // $ExpectError
    $(selector).rating({ foo: 'bar' }); // $ExpectError
}

import rating = require('semantic-ui-rating');

function test_module() {
    rating; // $ExpectType Rating
    $.fn.rating = rating;
}
