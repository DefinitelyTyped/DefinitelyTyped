function test_fn_pjax() {
    $(document).pjax("a");
    $(document).pjax("a", "#pjax-container");
    $(document).pjax("a", { push: true });
    $(document).pjax("a", "#pjax-container", { push: true });
}

function test_pjax() {
    $.pjax();
    $.pjax({
        url: "hello.html",
        container: "#main"
    });
}

function test_click() {
    var event = $.Event("click");
    $.pjax.click(event, "#pjax-container");
    $.pjax.click(event, { container: "#pjax-container" });
    $.pjax.click(event, "#pjax-container", { push: true });
}

function test_submit() {
    var event = $.Event("submit");
    $.pjax.submit(event, "#pjax-container");
    $.pjax.submit(event, { container: "#pjax-container" });
    $.pjax.submit(event, "#pjax-container", { push: true });
}

function test_enable() {
    $.pjax.enable();
}

function test_disable() {
    $.pjax.disable();
}

function test_reload() {
    $.pjax.reload("#pjax-container");
}

function test_defauluts() {
    $.pjax.defaults = {
        timeout: 650,
        push: true,
        replace: false,
        maxCacheLength: 20,
        version: $.noop,
        scrollTo: 0,
        type: 'GET',
        dataType: 'html',
        container: "#pjax-container",
        url: "https://jquery.com/",
        target: <EventTarget>undefined,
        fragment: "#pjax-response",
    };
}

function test_support() {
    console.log($.support.pjax);
}

function test_events() {
    $(document).on('pjax:popstate', function(e) {
        if (e.direction === 'back') {
            console.log('pjax:popstate is OK');
        }
    });
}
