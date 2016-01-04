/// <reference path='../jquery/jquery.d.ts'/>
/// <reference path='jquery.lazyload.d.ts'/>

/*
 * Taken from the tests section on lazyLoad
 */
$(document).ready(function () {


    $("img.lazy").lazyload();


    $("img.lazy").lazyload({
        threshold: 200
    });

    $("img.lazy").lazyload({
        event: "click"
    });
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });

    $("img.lazy").lazyload({
        container: $("#container")
    });
    $("img.lazy").lazyload({
        failure_limit: 10
    });

    $("img.lazy").lazyload({
        skip_invisible: false
    });
});