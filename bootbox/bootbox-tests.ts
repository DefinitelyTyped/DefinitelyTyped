// QUnit Tests for Bootbox 4.4.0
/// <reference path="bootbox.d.ts" />

bootbox.alert("Are we ok?");
bootbox.alert("Are we ok with callback?", function () {
	console.log("Callback called!");
});
bootbox.alert({
	size: "medium",
	message: "Are we ok with callback and custom button?",
	callback: function () {
		console.log("Callback called!");
	}
});

bootbox.confirm("Click cancel to pass test", function (result) {
	console.log(!result);
});
bootbox.confirm({
	message: "Click confirm to pass test",
	callback: function (result) {
		console.log(result);
	}
});

bootbox.prompt("Enter 'ok' to pass test", function (result) {
	console.log(result);
});
bootbox.prompt({
	message: "Enter 'ok' to pass test", callback: function (result) {
		console.log(result);
	}
});
bootbox.prompt({
	size: "large",
	message: "Enter 'ok' to pass test", callback: function (result) {
		console.log(result);
	}
});


bootbox.dialog({
	title: "Wassup?",
	message: "Test Dialog",
	callback: function (result) { }
});

// Testing the return object of the call. Using the pointer to disable the animation on success callback.
var bBox : JQuery;

bBox = bootbox.dialog({
	message: "Test Dialog",
	buttons: {
		cancel: {
			label: "Cancel"
		},
		confirm: {
			label: "Continue",
			callback: function () {
				bBox.removeClass("fade");
				console.log("Outer callback.");
			}
		}
	},
	animate: true,
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

var localeOptions: BootboxLocaleValues = {
	OK: 'Hus',
	CANCEL: 'Nai',
	CONFIRM: 'Pakka'
}

bootbox.addLocale("Nepali", localeOptions);
bootbox.setLocale("Nepali");
bootbox.removeLocale("Nepali");