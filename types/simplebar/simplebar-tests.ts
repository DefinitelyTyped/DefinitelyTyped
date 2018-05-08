function test_start() {
    new SimpleBar(document.getElementById('myElement'));
}

function test_options_wrapContent() {
    new SimpleBar(document.getElementById('myElement'), { wrapContent: false });
}

function test_options_autoHide() {
    new SimpleBar(document.getElementById('myElement'), { autoHide: false });
}

function test_options_scrollbarMinSize() {
    new SimpleBar(document.getElementById('myElement'), { scrollbarMinSize: 10 });
}

function test_options_classNames() {
    new SimpleBar(document.getElementById('myElement'), {
        classNames: {
            // defaults
            content: 'simplebar-content',
            scrollContent: 'simplebar-scroll-content',
            scrollbar: 'simplebar-scrollbar',
            track: 'simplebar-track'
        }
    });
}

function test_recalculate() {
    const el = new SimpleBar(document.getElementById('myElement'));
    el.recalculate();
}

function test_getScrollElement() {
    const el = new SimpleBar(document.getElementById('myElement'));
    el.getScrollElement();
}

function test_scrollEvent() {
    const el = new SimpleBar(document.getElementById('myElement'));
    el.getScrollElement().addEventListener('scroll', () => { });
}

function test_getContentElement() {
    const el = new SimpleBar(document.getElementById('myElement'));
    el.getContentElement();
}

function test_removeObserver() {
    SimpleBar.removeObserver();
}
