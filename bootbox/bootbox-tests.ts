// QUnit Tests for Bootbox 3.0
/// <reference path="bootbox.d.ts" />
/// <reference path="../qunit/qunit.d.ts" />

test("Bootbox alert with message", function () {
	ok(bootbox.alert("Are we ok?"), "Passed!");
});

test("Bootbox alert with message and custom text in button", function () {
	ok(bootbox.alert("Are we ok with Test button?", "Test"), "Passed!");
});

asyncTest("Bootbox alert with message and callback", function() {
	bootbox.alert("Are we ok with callback?", function() {		
		ok(true, "Callback called!");
		start();
	});
});

asyncTest("Bootbox alert with message and callback and custom text", function() {
	bootbox.alert("Are we ok with callback and custom button?", "Test", function() {		
		ok(true, "Callback called!");
		start();
	});
});

asyncTest("Bootbox confirm (ok) with message and callback", function() {
	bootbox.confirm("Click ok to pass test", function(result) {		
		ok(result, "Callback called!");
		start();
	});
});

asyncTest("Bootbox confirm (cancel) with message and callback", function() {
	bootbox.confirm("Click cancel to pass test", function(result) {		
		ok(!result, "Callback called!");
		start();
	});
});

asyncTest("Bootbox confirm (confirm?) with message and callback and custom text", function() {
	bootbox.confirm("Click confirm to pass test", "Cancel?", "Confirm?", function(result) {		
		ok(result, "Callback called!");
		start();
	});
});

asyncTest("Bootbox confirm (cancel?) with message and callback and custom text", function() {
	bootbox.confirm("Click cancel to pass test", "Cancel?", "Confirm?", function(result) {
		ok(!result, "Callback called!");
		start();
	});
});

test("Bootbox prompt with message", function () {
	ok(bootbox.prompt("Are we ok?"), "Passed!");
});

asyncTest("Bootbox prompt with message and callback", function() {
	bootbox.prompt("Enter 'ok' to pass test", function(result) {		
		equal(result.toLowerCase(), "ok", "Callback called!");
		start();
	});
});

asyncTest("Bootbox prompt with message and callback and custom text", function() {
	bootbox.prompt("Enter 'ok' to pass test", "Cancel?", "Confirm?", function(result) {		
		equal(result.toLowerCase(), "ok", "Callback called!");
		start();
	});
});

asyncTest("Bootbox prompt with message and callback and custom text and default value", function() {
	bootbox.prompt("Keep default value and click ok", "Cancel?", "Confirm?", function(result) {		
		equal(result, "Test Value", "Callback called!");
		start();
	}, "Test Value");
});
