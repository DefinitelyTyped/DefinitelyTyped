function test_pjax() {
    $.pjax();
}

function test_pjax_selector() {
    $('a').pjax();
}

function test_pjax_option() {
    $.pjax({
        area: 'body',
        load: {
            head: 'base, meta, link',
            css: true,
            script: true
        },
        cache: { click: true, submit: false, popstate: true },
        server: { query: null }
    });
}

function test_pjax_event() {
    $.pjax({
        wait: 1000
    });
    $(document).bind('pjax.request', function () {
        $('div.loading').fadeIn(100);
    });
    $(document).bind('pjax.render', function () {
        $('div.loading').fadeOut(500);
    });
}
