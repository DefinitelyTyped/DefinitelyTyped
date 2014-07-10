/// <reference path="jquery.blockUI.d.ts" />

$.blockUI();
var opt: JQBlockUIOptions = {
    css: { border: "1px solid red" },
    message: "test"
};
$.blockUI(opt);
$.unblockUI();
$("#test").block().unblock();
$("#test").block(opt);
