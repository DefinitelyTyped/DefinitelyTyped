/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.event.drop.d.ts" />

$('.drop').drop(function () {
    $(this).toggleClass('dropped');
});

$('.drop')
    .drop("start", function () {
        $(this).addClass("active");
    })
    .drop("end", function () {
        $(this).removeClass("active");
    });

$('.drop td')
    .drop("start", function () {
        $(this).addClass("active");
    })
    .drop(function (ev, dd) {
        $(this).toggleClass("dropped");
    })
    .drop("end", function () {
        $(this).removeClass("active");
    });
$.drop({ mode: "overlap" });

$('.drop td')
    .drop("start", function () {
        $(this).addClass("active");
    })
    .drop(function (ev, dd) {
        $(this).toggleClass("dropped");
    })
    .drop("end", function () {
        $(this).removeClass("active");
    })
$.drop({ mode: "intersect" });

$('.drop')
    .drop("start", function () {
        $(this).addClass("active");
    })
    .drop(function (ev, dd) {
        $(this).toggleClass("dropped");
    })
    .drop("end", function () {
        $(this).removeClass("active");
    });
$.drop({
    multi: true,
    tolerance: function (event, proxy, target) {
        var r = target.width / 2, x = target.left + r, y = target.top + r,
            h = Math.min(Math.abs(x - proxy.left), Math.abs(x - proxy.right)),
            v = Math.min(Math.abs(y - proxy.top), Math.abs(y - proxy.bottom));
        if (proxy.top < y && proxy.bottom > y)
            return h <= r ? 1 : 0;
        else if (proxy.left < x && proxy.right > x)
            return v <= r ? 1 : 0;
        else
            return Math.sqrt(h * h + v * v) <= r ? 1 : 0;
    }
});
