import trayballoon from "trayballoon";

// $ExpectType Promise<void>
trayballoon();

// @ts-expect-error - `options.text` is required.
trayballoon({});

// $ExpectType Promise<void>
trayballoon({
    text: "text",
});

// $ExpectType Promise<void>
trayballoon({
    text: "text",
    title: "title",
    icon: "icon.ico",
    timeout: 5000,
});
