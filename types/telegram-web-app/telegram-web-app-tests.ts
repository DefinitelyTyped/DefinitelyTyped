const app = window.Telegram.WebApp;

app.ready();

if (!app.isExpanded) {
    app.expand(); // $ExpectType void
}

const btn = app.MainButton; // $ExpectType MainButton

btn.text = (app.initDataUnsafe.user?.first_name ?? "you") + " r 2 close";

btn.onClick(() => {
    app.close();
});

app.onEvent("viewportChanged", e => {
    if (e.isStateStable) console.log("Done at", app.viewportHeight);
    else console.log("Changing, currently at ", app.viewportHeight);
});

app.showPopup(
    {
        message: "Hello",
        buttons: [{ type: "default", text: "Button text", id: "btn_id" }],
    },
    btn_id => console.log(btn_id),
);

app.onEvent("popupClosed", e => {
    console.log(e.button_id);
});

app.switchInlineQuery("query", ["users"]);

app.setHeaderColor("#ff0010");
app.setHeaderColor("bg_color");

app.CloudStorage.setItem("key", "value", (err, success): void => {
    if (err) console.error(err);
    if (success) {
        console.log("success");
    }
});

app.CloudStorage.getItem("key", (err, val) => {
    if (err) console.error(err);
    if (val) {
        const test = val; // $ExpectType string
    }
});

app.CloudStorage.getItems(["key1", "key2"], (err, vals) => {
    if (err) console.error(err);
    if (vals) {
        const test = vals; // $ExpectType Record<string, string>
    }
});

app.CloudStorage.getKeys((err, keys) => {
    if (err) console.error(err);
    if (keys) {
        const test = keys; // $ExpectType string[]
    }
});

app.requestWriteAccess(success => {
    const test = success; // $ExpectType boolean
});

app.onEvent("writeAccessRequested", ({ status }) => {});
