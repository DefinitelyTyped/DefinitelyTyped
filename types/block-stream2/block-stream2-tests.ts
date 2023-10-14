import BlockStream2 = require("block-stream2");

(async () => {
    new BlockStream2();
    new BlockStream2({ size: 1 });
    new BlockStream2({ zeroPadding: false });
})();
