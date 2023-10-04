import Box = require("3box");

(async () => {
    const box = await Box.openBox("foo", {});
    const space = await box.openSpace("bar");
    const thread = await space.joinThread("baz");
    await thread.post("hello 3box");
})();
