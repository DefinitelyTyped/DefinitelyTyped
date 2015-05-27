// QUnit Tests for Bootbox 3.0
/// <reference path="bootbox.d.ts" />

bootbox.alert("Are we ok?");
bootbox.alert("Are we ok with callback?", function () {
	console.log("Callback called!");
});
bootbox.alert({
	message: "Are we ok with callback and custom button?",
	callback: function () {
		console.log("Callback called!");
	}
});

bootbox.confirm("Click ok to pass test");

bootbox.confirm("Click cancel to pass test", function (result) {
	console.log(!result);
});
bootbox.confirm({
	message: "Click confirm to pass test",
	callback: function (result) {
		console.log(result);
	}
});

bootbox.prompt("Are we ok?");
bootbox.prompt("Enter 'ok' to pass test", function (result) {
	console.log(result);
});
bootbox.prompt({
	message: "Enter 'ok' to pass test", callback: function (result) {
		console.log(result);
	}
});

bootbox.dialog("Test Dialog");


bootbox.dialog("Test Dialog", function (result) {
	return result;
});

bootbox.dialog({
	message: "Test Dialog",
	callback: function (result) { }
});

var bdo: BootboxDialogOptions;
var sampleButton: BootboxButton = {
	label: 'ButtonLabelToUse',
	callback: function () {
		return 'callback of button click'
	},
	className: 'additionalButtonClassName'
};

bdo = {
	message: '',
	className: 'callName',
	buttons: {
		'ButtonTextLabel': sampleButton
	}
};

bootbox.dialog(bdo);

bootbox.setDefaults({
	locale: 'en_US',
	animate: false,
	backdrop: false,
	className: 'newClassName',
	closeButton: true,
	show: true
})

bootbox.hideAll();