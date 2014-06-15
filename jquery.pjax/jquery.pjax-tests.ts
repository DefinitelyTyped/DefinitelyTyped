/// <reference path="jquery.pjax.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

function test_fn_pjax() {
    $(document).pjax("a");
    $(document).pjax("a", "#pjax-container");
    $(document).pjax("a", {push: true});
    $(document).pjax("a", "#pjax-container", {push: true});
}
