function test_embed_static() {
    $.fn.embed.settings.error.method = 'method';
    $.fn.embed.settings.namespace = 'namespace';
    $.fn.embed.settings.name = 'name';
    $.fn.embed.settings.silent = false;
    $.fn.embed.settings.debug = true;
    $.fn.embed.settings.performance = true;
    $.fn.embed.settings.verbose = true;
}

function test_embed() {
    const selector = '.ui.embed';
    $(selector).embed('change', 'source', 'id', 'url') === $();
    $(selector).embed('reset') === $();
    $(selector).embed('show') === $();
    $(selector).embed('hide') === $();
    $(selector).embed('get id') === 'get';
    $(selector).embed('get placeholder') === 'get';
    $(selector).embed('get sources') === 'get';
    $(selector).embed('get type') === 'get';
    $(selector).embed('get url') === 'get';
    $(selector).embed('has placeholder') === true;
    $(selector).embed('destroy') === $();
    $(selector).embed('setting', 'debug', undefined) === false;
    $(selector).embed('setting', 'debug') === false;
    $(selector).embed('setting', 'debug', true) === $();
    $(selector).embed('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
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
            this === $();
            url === 'url';
        },
        onDisplay() {
            this === $();
        },
        onPlaceholderDisplay() {
            this === $();
        },
        onEmbed(parameters) {
            this === $();
            parameters.key = 'value';
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
                url === 'url';
                parameters === 'parameters';
                return url + parameters;
            },
            placeholder(image, icon) {
                image === 'image';
                icon === 'icon';
                return image + icon;
            }
        },
        error: {
            noURL: 'noURL',
            method: 'method'
        }
    }) === $();
    $(selector).embed() === $();
}

import embed = require('semantic-ui-embed');

function test_module() {
    $.fn.embed = embed;
}
