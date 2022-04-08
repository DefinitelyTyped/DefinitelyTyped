function test_options() {

    const jqElement: JQuery = $("body").loading({
        overlay:     $(".some-class"),
        zIndex:      1000,
        message:     "some message",
        theme:       "some theme",
        shownClass:  "some-class",
        hiddenClass: "some-class",
        stoppable:   true,
        start:       true,
        onStart:     (loading: JQueryEasyLoading.LoadingObject) => console.log("starting"),
        onStop:      (loading: JQueryEasyLoading.LoadingObject) => console.log("stopping"),
        onClick:     (someVar1: any, someVar2: any) => console.log("some message"),
    });

    const jqLoading: JQueryEasyLoading.LoadingObject = $("body").Loading({
        message: "some message",
    });
}

function test_static() {

    $.Loading.setDefaults({
        message: "some message",
    });
}

function test_commands() {

    $('body')
        .loading("resize")
        .loading("start")
        .loading("stop")
        .loading("toggle");
}

import * as factory from "jquery-easy-loading";

function test_factory() {

    const $loading: JQueryStatic = factory(window, jQuery);
    $loading("body").loading("start");
}
