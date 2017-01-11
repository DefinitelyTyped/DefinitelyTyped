/// <reference path="webnotifications.d.ts" />


if (Notification.permission !== "denied") {

    Notification.requestPermission(function(granted) {

        if (granted === "denied") {
            return;
        }

        var opt :NotificationOptions = {
            dir: "ltr",
            body: "You have New Messages",
            icon: "http://web.site/icon.ico",
            lang: "en-US"
        };

        var n = new Notification("Test", opt);

        n.onshow = function(event:Event) {
            console.log("notification shown", event);
        };

        n.onerror = function(event:ErrorEvent) {
            console.log("notification error", event);
        };

        n.onclick = function(event:Event) {
            console.log("notification clicked", event);
        };

        n.onclose = function(event:Event) {
            console.log("notification closed", event);
        };

        n.close();
    });
}