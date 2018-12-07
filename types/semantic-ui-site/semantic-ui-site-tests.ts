function test_site_static() {
    $.site.settings.namespace = 'namespace';
    $.site.settings.name = 'name';
    $.site.settings.silent = false;
    $.site.settings.debug = true;
    $.site.settings.performance = true;
    $.site.settings.verbose = true;

    $.fn.site.settings.namespace = 'namespace';
    $.fn.site.settings.name = 'name';
    $.fn.site.settings.silent = false;
    $.fn.site.settings.debug = true;
    $.fn.site.settings.performance = true;
    $.fn.site.settings.verbose = true;
}

function test_site() {
    const selector = '.ui.site';
    $(selector).site('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).site('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).site('setting', 'debug'); // $ExpectType boolean
    $(selector).site('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).site('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).site({
        modules: [
            'module1',
            'module2',
        ],
        siteNamespace: 'siteNamespace',
        namespaceStub: {
            cache: {},
            config: {},
            sections: {},
            section: {},
            utilities: {}
        }
    });
    $(selector).site(); // $ExpectType JQuery<HTMLElement>

    $(selector).site('foo'); // $ExpectError
    $(selector).site({ foo: 'bar' }); // $ExpectError
}

import site = require('semantic-ui-site');

function test_module() {
    site; // $ExpectType Site
    $.fn.site = site;
}
