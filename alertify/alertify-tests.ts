/// <reference path="alertify.d.ts" />

alertify.init();

alertify.alert("This is an alert");
alertify.alert("This is an alert with a callback", () => { 
    alertify.success("Alert finished");
}, "myCustomClass");


alertify.confirm("This is a confirm request");
alertify.confirm("This is a confirm request with a callback", () => { 
    alertify.success("Confirm finished");
}, "myCustomClass");

var custom = alertify.extend("custom");

alertify.log("log message 1");
alertify.log("log message 2", "success", 3000);

alertify.prompt("prompt message 1");
alertify.prompt("prompt message 2", () => { console.log("callback"); }, "ok", "myClass");

alertify.set({ delay: 1000 }); 
alertify.set({ labels: { ok: "OK", cancel: "Cancel" }});
alertify.set({ buttonFocus: "ok" });
alertify.set({ buttonReverse: true });

alertify.success("This is a success message");
alertify.error("This is an error message");

alertify.debug();
