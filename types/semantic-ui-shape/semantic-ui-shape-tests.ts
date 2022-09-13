function test_shape_static() {
    $.fn.shape.settings.error!.method = 'method';
    $.fn.shape.settings.namespace = 'namespace';
    $.fn.shape.settings.name = 'name';
    $.fn.shape.settings.silent = false;
    $.fn.shape.settings.debug = true;
    $.fn.shape.settings.performance = true;
    $.fn.shape.settings.verbose = true;
}

function test_shape() {
    const selector = '.ui.shape';
    $(selector).shape('flip up'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('flip down'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('flip right'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('flip left'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('flip over'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('flip back'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('set next side', $()); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('is animating'); // $ExpectType boolean
    $(selector).shape('reset'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('queue', 'animation'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('repaint'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('set default side'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('set stage size'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('refresh'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('get transform down'); // $ExpectType Translation
    $(selector).shape('get transform left'); // $ExpectType Translation
    $(selector).shape('get transform right'); // $ExpectType Translation
    $(selector).shape('get transform up'); // $ExpectType Translation
    $(selector).shape('get transform down'); // $ExpectType Translation
    $(selector).shape('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).shape('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).shape('setting', 'debug'); // $ExpectType boolean
    $(selector).shape('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).shape('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).shape({
        duration: 700,
        width: 'next',
        height: 200,
        beforeChange() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onChange() {
            this; // $ExpectType JQuery<HTMLElement>
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
    });
    $(selector).shape(); // $ExpectType JQuery<HTMLElement>

    // @ts-expect-error
    $(selector).shape('foo');
    // @ts-expect-error
    $(selector).shape({ foo: 'bar' });
}

import shape = require('semantic-ui-shape');

function test_module() {
    shape; // $ExpectType Shape
    $.fn.shape = shape;
}
