function test_sidebar_static() {
    $.fn.sidebar.settings.error!.method = 'method';
    $.fn.sidebar.settings.namespace = 'namespace';
    $.fn.sidebar.settings.name = 'name';
    $.fn.sidebar.settings.silent = false;
    $.fn.sidebar.settings.debug = true;
    $.fn.sidebar.settings.performance = true;
    $.fn.sidebar.settings.verbose = true;
}

function test_sidebar() {
    const selector = '.ui.sidebar';
    $(selector).sidebar('attach events', $(), 'toggle'); // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('show'); // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('hide'); // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('toggle'); // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('is visible'); // $ExpectType boolean
    $(selector).sidebar('is hidden'); // $ExpectType boolean
    $(selector).sidebar('push page'); // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('get direction'); // $ExpectType string
    $(selector).sidebar('pull page'); // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('add body CSS'); // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('remove body CSS'); // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('get transition event'); // $ExpectType string
    $(selector).sidebar('destroy'); // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('setting', 'debug', undefined); // $ExpectType boolean
    $(selector).sidebar('setting', 'debug'); // $ExpectType boolean
    $(selector).sidebar('setting', 'debug', true); // $ExpectType JQuery<HTMLElement>
    // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    });
    // $ExpectType JQuery<HTMLElement>
    $(selector).sidebar({
        context: $(),
        exclusive: false,
        closable: true,
        dimPage: false,
        scrollLock: true,
        returnScroll: false,
        delaySetup: true,
        transition: 'auto',
        mobileTransition: 'auto',
        defaultTransition: {
            mobile: {
                left: 'left',
                right: 'right',
                top: 'top',
                bottom: 'bottom'
            },
            computer: {
                left: 'left',
                right: 'right',
                top: 'top',
                bottom: 'bottom'
            }
        },
        useLegacy: false,
        duration: 20,
        easing: 'easeInOutQuint',
        onVisible() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onShow() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onChange() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onHide() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        onHidden() {
            this; // $ExpectType JQuery<HTMLElement>
        },
        className: {
            active: 'active',
            animating: 'animating',
            dimmed: 'dimmed',
            ios: 'ios',
            pushable: 'pushable',
            pushed: 'pushed',
            right: 'right',
            top: 'top',
            left: 'left',
            bottom: 'bottom',
            visible: 'visible'
        },
        regExp: {
            ios: /(iPad|iPhone|iPod)/g,
            mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g,
        },
        selector: {
            fixed: 'fixed',
            omitted: 'omitted',
            pusher: 'pusher',
            sidebar: 'sidebar'
        },
        error: {
            method: 'method',
            pusher: 'pusher',
            movedSidebar: 'movedSidebar',
            animation: 'animation',
            overlay: 'overlay',
            notFound: 'notFound'
        }
    });
    $(selector).sidebar(); // $ExpectType JQuery<HTMLElement>

    $(selector).sidebar('foo'); // $ExpectError
    $(selector).sidebar({ foo: 'bar' }); // $ExpectError
}

import sidebar = require('semantic-ui-sidebar');

function test_module() {
    sidebar; // $ExpectType Sidebar
    $.fn.sidebar = sidebar;
}
