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

$.blockUI.defaults.css.border = '5px solid red';
$.blockUI.defaults.fadeOut = 200;

$.blockUI({ message: $('#domMessage') });
$.unblockUI({ fadeOut: 200 });

$.blockUI({
    fadeIn: 1000,
    timeout: 2000,
    onBlock: function() {
        alert('Page is now blocked; fadeIn complete');
    }
});
