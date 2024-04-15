import createDMG = require("electron-installer-dmg");

createDMG({
    appPath: "",
    name: "my dmg",
}).then(() => {
    // ...
});

createDMG({
    contents: [
        { x: 448, y: 344, type: "link", path: "/Applications" },
        { x: 192, y: 344, type: "file", path: "/path/to/application.app" },
    ],
    appPath: "",
    name: "my dmg",
}).then(() => {
    // ...
});

function getContents(): createDMG.Content[] {
    return [
        { x: 448, y: 344, type: "link", path: "/Applications" },
        { x: 192, y: 344, type: "file", path: "/path/to/application.app" },
    ];
}

function getContentsWithOpts(opts: createDMG.ContentsOptions): createDMG.Content[] {
    return [
        { x: 448, y: 344, type: "link", path: "/Applications" },
        { x: 192, y: 344, type: "file", path: opts.appPath },
    ];
}

createDMG({
    contents: getContents,
    appPath: "",
    name: "my dmg",
}).then(() => {
    // ...
});

createDMG({
    contents: getContentsWithOpts,
    appPath: "",
    name: "my dmg",
}).then(() => {
    // ...
});

createDMG({
    appPath: "",
    format: "UDBZ",
    additionalDMGOptions: {
        window: {
            position: { x: 100, y: 100 },
        },
    },
    name: "my dmg",
}).then(() => {
    // ...
});
