function test_shape_static() {
    $.fn.shape.settings.error.method = 'method';
    $.fn.shape.settings.namespace = 'namespace';
    $.fn.shape.settings.name = 'name';
    $.fn.shape.settings.silent = false;
    $.fn.shape.settings.debug = true;
    $.fn.shape.settings.performance = true;
    $.fn.shape.settings.verbose = true;
}

function test_shape() {
    const selector = '.ui.shape';
    $(selector).shape('flip up') === $();
    $(selector).shape('flip down') === $();
    $(selector).shape('flip right') === $();
    $(selector).shape('flip left') === $();
    $(selector).shape('flip over') === $();
    $(selector).shape('flip back') === $();
    $(selector).shape('set next side', $()) === $();
    $(selector).shape('is animating') === false;
    $(selector).shape('reset') === $();
    $(selector).shape('queue', 'animation') === $();
    $(selector).shape('repaint') === $();
    $(selector).shape('set default side') === $();
    $(selector).shape('set stage size') === $();
    $(selector).shape('refresh') === $();
    $(selector).shape('get transform down') === { transform: 'transform' };
    $(selector).shape('get transform left') === { transform: 'transform' };
    $(selector).shape('get transform right') === { transform: 'transform' };
    $(selector).shape('get transform up') === { transform: 'transform' };
    $(selector).shape('get transform down') === { transform: 'transform' };
    $(selector).shape('destroy') === $();
    $(selector).shape('setting', 'debug', undefined) === false;
    $(selector).shape('setting', 'debug') === false;
    $(selector).shape('setting', 'debug', true) === $();
    $(selector).shape('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
    $(selector).shape({
        duration: 700,
        width: 'next',
        height: 200,
        beforeChange() {
            this === $();
        },
        onChange() {
            this === $();
        },
        selector: {
            sides: 'sides',
            side: 'side'
        },
        className: {
            animating: 'animating',
            hidden: 'hidden',
            loading: 'loading',
            active: 'active'
        },
        error: {
            side: 'side',
            method: 'method'
        }
    }) === $();
    $(selector).shape() === $();
}

import shape = require('semantic-ui-shape');

function test_module() {
    $.fn.shape = shape;
}
