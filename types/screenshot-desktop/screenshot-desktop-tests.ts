import screenshot = require("screenshot-desktop");

// Buffer filled with jpg goodness
// $ExpectType Promise<NonSharedBuffer> || Promise<Buffer>
screenshot();

// Buffer filled with png goodness
// $ExpectType Promise<NonSharedBuffer> || Promise<Buffer>
screenshot({ format: "png" });

// Buffer when filename is empty
// $ExpectType Promise<NonSharedBuffer> || Promise<Buffer>
screenshot({ filename: "" });

// absolute path to screenshot
// created in current working directory named shot.jpg
// $ExpectType Promise<string>
screenshot({ filename: "shot.jpg" });

// absolute paths work too. so do pngs
// $ExpectType Promise<string>
screenshot({ filename: "/Users/$USER/Desktop/demo.png" });

// an array of available displays
// $ExpectType Promise<Display[]>
screenshot.listDisplays();

screenshot.listDisplays().then((displays) => {
    // Buffer of screenshot of the last display
    // $ExpectType Promise<NonSharedBuffer> || Promise<Buffer>
    screenshot({ screen: displays[displays.length - 1].id });
});

// an array of Buffers or strings, one for each screen
// $ExpectType Promise<NonSharedBuffer[]> || Promise<Buffer[]>
screenshot.all();
