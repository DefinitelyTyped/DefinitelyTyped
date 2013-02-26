// QUnit Tests for Bootbox 3.0
/// <reference path="bootbox.d.ts" />

bootbox.alert("Are we ok?");
bootbox.alert("Are we ok with Test button?", "Test");
bootbox.alert("Are we ok with callback?", function() {		
	console.log("Callback called!");
});
bootbox.alert("Are we ok with callback and custom button?", "Test", function() {		
	console.log("Callback called!");
});

bootbox.confirm("Click ok to pass test", function(result) {		
	console.log(result);
});

bootbox.confirm("Click cancel to pass test", function(result) {		
	console.log(!result);
});

bootbox.confirm("Click confirm to pass test", "Cancel?", "Confirm?", function(result) {		
	console.log(result);
});

bootbox.confirm("Click cancel to pass test", "Cancel?", "Confirm?", function(result) {
	console.log(!result);
});

bootbox.prompt("Are we ok?");

bootbox.prompt("Enter 'ok' to pass test", function(result) {		
	console.log(result);
});

bootbox.prompt("Enter 'ok' to pass test", "Cancel?", "Confirm?", function(result) {		
	console.log(result);
});

bootbox.prompt("Keep default value and click ok", "Cancel?", "Confirm?", function(result) {		
	console.log(result);
}, "Test Value");

bootbox.dialog("Test Dialog");
var handler = {
	label: "OK",
	class: "MyClass",
	callback: function () {
		console.log("Test Dialog");
	}
};

var option = {
	header: "header",
	headerCloseButton: true
};

bootbox.dialog("Test Dialog", handler);
bootbox.dialog("Test Dialog", [handler], option);

bootbox.hideAll();
bootbox.animate(false);
bootbox.backdrop("backdrop");
bootbox.classes("myClass");

var icons: BootboxIcons = {
	OK: "OK Icon",
	CANCEL: "Cancel Icon",
	CONFIRM: "Confirm Icon"
};
bootbox.setIcons(icons);

bootbox.setLocale("en");

bootbox.addLocale("klingon", { OK: "luq", CANCEL: "qIl", CONFIRM: "Confirm" });