/// <reference path="jquery.pjax.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

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

function test_pjax_progressbar() {
    $('body').append('<div class="loading" style="background:rgba(0,0,0,.2);display:none;position:fixed;bottom:0;left:0;z-index:9999;width:100%;height:5px;">\
  <div style="background:#f77;position:absolute;top:0;left:0;width:0;height:3px;"></div>\
</div>');
    $.pjax({
        area: 'div.pjax',
        callbacks: {
            before: function () {
                $('div.loading').children().width('');
                $('div.loading').fadeIn(0);
            },
            ajax: {
                xhr: function () {
                    var xhr = jQuery.ajaxSettings.xhr();

                    $('div.loading').children().width('5%');
                    if (xhr instanceof Object && 'onprogress' in xhr) {
                        xhr.addEventListener('progress', function (event) {
                            var percentage = event.total ? event.loaded / event.total : 0.4;
                            percentage = percentage * 90 + 5;
                            $('div.loading').children().width(percentage + '%');
                        }, false);
                        xhr.addEventListener('load', function (event) {
                            $('div.loading').children().width('95%');
                        }, false);
                        xhr.addEventListener('error', function (event) {
                            $('div.loading').children().css('background-color', '#00f');
                        }, false);
                    }
                    return xhr;
                }
            },
            update: {
                content: {
                    after: function () {
                        $('div.loading').children().width('96.25%');
                    }
                },
                css: {
                    after: function () {
                        $('div.loading').children().width('97.5%');
                    }
                },
                script: {
                    after: function () {
                        $('div.loading').children().width('98.75%');
                    }
                },
                render: {
                    after: function () {
                        $('div.loading').children().width('100%');
                        $('div.loading').fadeOut(50);
                    }
                }
            }
        },
        ajax: { timeout: 3000 },
        wait: 1000
    });
}