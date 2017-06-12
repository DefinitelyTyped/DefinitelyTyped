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
    $(selector).site('destroy') === $();
    $(selector).site('setting', 'debug', undefined) === false;
    $(selector).site('setting', 'debug') === false;
    $(selector).site('setting', 'debug', true) === $();
    $(selector).site('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
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
    }) === $();
    $(selector).site() === $();
}

import site = require('semantic-ui-site');

function test_module() {
    $.fn.site = site;
}
