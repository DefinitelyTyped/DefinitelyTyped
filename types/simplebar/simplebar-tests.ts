function test_constructorWithoutOpts() {
    new SimpleBar(document.getElementById('myElement'));
}

function test_constructor() {
    new SimpleBar(document.getElementById('myElement'), {
        autoHide: true,
        clickOnTrack: true,
        direction: 'ltr',
        forceVisible: 'x',
        scrollbarMaxSize: 20,
        scrollbarMinSize: 10,
        timeout: 300,
    });
}

function test_options_classNames() {
    new SimpleBar(document.getElementById('myElement'), {
        classNames: {
            // defaults
            content: 'simplebar-content',
            scrollContent: 'simplebar-scroll-content',
            scrollbar: 'simplebar-scrollbar',
            track: 'simplebar-track',
        },
    });
}

function test_instanceFunctions() {
    const el = new SimpleBar(document.getElementById('myElement'));
    el.recalculate();
    const contentEl: Element = el.getContentElement();
    const scrollEl: Element = el.getScrollElement();
}

function test_staticFunctions() {
    SimpleBar.removeObserver();
    SimpleBar.instances.get(new HTMLDivElement());
}
