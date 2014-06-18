/// <reference path="jquery.pjax.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

function test_fn_pjax() {
    $(document).pjax("a");
    $(document).pjax("a", "#pjax-container");
    $(document).pjax("a", { push: true });
    $(document).pjax("a", "#pjax-container", { push: true });
}

function test_click() {
    var event = $.Event("click");
    $.pjax.click(event, "#pjax-container");
    $.pjax.click(event, { container: "#pjax-container" });
    $.pjax.click(event, "#pjax-container", { push: true });
}
