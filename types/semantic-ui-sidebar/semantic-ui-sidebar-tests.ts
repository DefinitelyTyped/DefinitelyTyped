function test_sidebar_static() {
    $.fn.sidebar.settings.error.method = 'method';
    $.fn.sidebar.settings.namespace = 'namespace';
    $.fn.sidebar.settings.name = 'name';
    $.fn.sidebar.settings.silent = false;
    $.fn.sidebar.settings.debug = true;
    $.fn.sidebar.settings.performance = true;
    $.fn.sidebar.settings.verbose = true;
}

function test_sidebar() {
    const selector = '.ui.sidebar';
    $(selector).sidebar('attach events', $(), 'toggle') === $();
    $(selector).sidebar('show') === $();
    $(selector).sidebar('hide') === $();
    $(selector).sidebar('toggle') === $();
    $(selector).sidebar('is visible') === false;
    $(selector).sidebar('is hidden') === true;
    $(selector).sidebar('push page') === $();
    $(selector).sidebar('get direction') === 'top';
    $(selector).sidebar('pull page') === $();
    $(selector).sidebar('add body CSS') === $();
    $(selector).sidebar('remove body CSS') === $();
    $(selector).sidebar('get transition event') === 'transition';
    $(selector).sidebar('destroy') === $();
    $(selector).sidebar('setting', 'debug', undefined) === false;
    $(selector).sidebar('setting', 'debug') === false;
    $(selector).sidebar('setting', 'debug', true) === $();
    $(selector).sidebar('setting', {
        namespace: 'namespace',
        name: 'name',
        silent: false,
        debug: true,
        performance: true,
        verbose: true
    }) === $();
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
            this === $();
        },
        onShow() {
            this === $();
        },
        onChange() {
            this === $();
        },
        onHide() {
            this === $();
        },
        onHidden() {
            this === $();
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
    }) === $();
    $(selector).sidebar() === $();
}

import sidebar = require('semantic-ui-sidebar');

function test_module() {
    $.fn.sidebar = sidebar;
}
