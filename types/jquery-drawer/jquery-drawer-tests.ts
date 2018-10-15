const elem = $('foo');

elem.drawer();
elem.drawer({});
elem.drawer({
    class: {
        nav: 'drawer-nav',
        toggle: 'drawer-toggle',
        overlay: 'drawer-overlay',
        open: 'drawer-open',
        close: 'drawer-close',
        dropdown: 'drawer-dropdown'
    },
    iscroll: {
        mouseWheel: true,
        preventDefault: false,
    },
    showOverlay: true,
});
elem.drawer({ class: {} });
elem.drawer({
    class: {
        nav: 'drawer-nav',
        toggle: 'drawer-toggle',
        overlay: 'drawer-overlay',
        open: 'drawer-open',
        close: 'drawer-close',
        dropdown: 'drawer-dropdown'
    },
});
elem.drawer({ iscroll: {} });
elem.drawer({
    iscroll: {
        mouseWheel: true,
        preventDefault: false,
    },
});
elem.drawer({ showOverlay: true });

elem.on('drawer.opened', () => {});
elem.on('drawer.closed', () => {});

elem.drawer('open');
elem.drawer('close');
elem.drawer('toggle');
elem.drawer('destroy');
