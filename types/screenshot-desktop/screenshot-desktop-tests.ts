import screenshot = require("screenshot-desktop");

screenshot().then((img) => {
    // img: Buffer filled with jpg goodness
    // ...
}).catch((err) => {
    // ...
});

screenshot({ format: "png" }).then((img) => {
    // img: Buffer filled with png goodness
    // ...
}).catch((err) => {
    // ...
});

screenshot.listDisplays().then((displays) => {
    // displays: [{ id, name }, { id, name }]
    screenshot({ screen: displays[displays.length - 1].id })
        .then((img) => {
            // img: Buffer of screenshot of the last display
        });
});

screenshot.all().then((imgs) => {
    // imgs: an array of Buffers, one for each screen
});

screenshot({ filename: "shot.jpg" }).then((imgPath) => {
    // imgPath: absolute path to screenshot
    // created in current working directory named shot.png
});

// absolute paths work too. so do pngs
screenshot({ filename: "/Users/brian/Desktop/demo.png" });
