function test_embed_static() {
    $.fn.embed.settings.error!.method = 'method';
    $.fn.embed.settings.namespace = 'namespace';
    $.fn.embed.settings.name = 'name';
    $.fn.embed.settings.silent = false;
    $.fn.embed.settings.debug = true;
    $.fn.embed.settings.performance = true;
    $.fn.embed.settings.verbose = true;
}

function test_embed() {
    const selector = '.ui.embed';
    $(selector).embed('change', 'source', 'id', 'url'); // $ExpectType JQuery<HTMLElement>
    $(selector).embed('reset'); // $ExpectType JQuery<HTMLElement>
    $(selector).embed('show'); // $ExpectType JQuery<HTMLElement>
    $(selector).embed('hide'); // $ExpectType JQuery<HTMLElement>
    $(selector).embed('get id'); // $ExpectType string
    $(selector).embed('get placeholder'); // $ExpectType string
    $(selector).embed('get sources'); // $ExpectType string
    $(selector).embed('get type'); // $ExpectType string
    $(selector).embed('get url'); // $ExpectType string
    $(selector).embed('has placeholder'); // $ExpectType boolean
    $(selector).embed('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).embed('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).embed('setting', 'debug'); // $ExpectType boolean
    $(selector).embed('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).embed('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).embed({
        url: 'url',
        icon: 'icon',
        source: 'source',
        id: 'id',
        parameters: {
            key: 'value'
        },
        autoplay: true,
        color: 'color',
        hd: false,
        brandedUI: true,
        onCreate(url) {
            this; // $ExpectType JQuery<HTMLElement>
            url; // $ExpectType string
        },
        onDisplay() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onPlaceholderDisplay() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onEmbed(parameters) {
            this; // $ExpectType JQuery<HTMLElement>
            parameters; // $ExpectType _Impl

            return parameters;
        },
        selector: {
            embed: 'embed',
            placeholder: 'placeholder',
            play: 'play'
        },
        metadata: {
            id: 'id',
            icon: 'icon',
            placeholder: 'placeholder',
            source: 'source',
            url: 'url'
        },
        className: {
            active: 'active',
            embed: 'embed'
        },
        templates: {
            iframe(url, parameters) {
                url; // $ExpectType string
                parameters; // $ExpectType string

                return '<div></div>';
            },
            placeholder(image, icon) {
                image; // $ExpectType string
                icon; // $ExpectType string

                return '<div></div>';
            }
        },
        error: {
            noURL: 'noURL',
            method: 'method'
        }
    });
    $(selector).embed(); // $ExpectType JQuery<HTMLElement>

    $(selector).embed('foo'); // $ExpectError
    $(selector).embed({ foo: 'bar' }); // $ExpectError
}

import embed = require('semantic-ui-embed');

function test_module() {
    embed; // $ExpectType Embed
    $.fn.embed = embed;
}
