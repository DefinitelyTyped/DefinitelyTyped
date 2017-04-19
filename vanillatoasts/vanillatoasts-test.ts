/// <reference path="vanilla-toasts.d.ts" />

window.onload = () => {
	VanillaToasts.create({
		title: "Hello tittle",
		text: "dummy text",
		callback: function() {
			alert("Callback alert");
		},
		type: "error"
	});
}