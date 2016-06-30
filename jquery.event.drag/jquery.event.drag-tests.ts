/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.event.drag.d.ts" />

$('.drag').drag(function (ev, dd) {
    $(this).css({
        top: dd.offsetY,
        left: dd.offsetX
    });
});

$('.drag')
    .drag(function (ev, dd) {
        $(this).css({
            top: dd.offsetY,
            left: dd.offsetX
        });
    }, { relative: true });

$('.drag').drag(function (ev, dd) {
    $(this).css({ left: dd.offsetX });
});

$('.drag').drag(function (ev, dd) {
    $(this).css({
        top: Math.round(dd.offsetY / 20) * 20,
        left: Math.round(dd.offsetX / 20) * 20
    });
});

var $div = $('#container');
$('.drag')
    .drag("start", function (ev, dd: any) {
        dd.limit = $div.offset();
        dd.limit.bottom = dd.limit.top + $div.outerHeight() - $(this).outerHeight();
        dd.limit.right = dd.limit.left + $div.outerWidth() - $(this).outerWidth();
    })
    .drag(function (ev, dd: any) {
        $(this).css({
            top: Math.min(dd.limit.bottom, Math.max(dd.limit.top, dd.offsetY)),
            left: Math.min(dd.limit.right, Math.max(dd.limit.left, dd.offsetX))
        });
    });

$('.drag').drag(function (ev, dd) {
    $(this).css({
        top: dd.offsetY,
        left: dd.offsetX
    });
}, { handle: ".handle" });

var z = 1;
$('.drag')
    .drag("start", function () {
        $(this).css('zIndex', z++);
    })
    .drag(function (ev, dd) {
        $(this).css({
            top: dd.offsetY,
            left: dd.offsetX
        });
    });
