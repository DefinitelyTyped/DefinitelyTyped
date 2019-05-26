import Box = require("3box");

Box.getProfile("0x28F4a17f8A99AB90c1a401b85D694B2C0eA40C4b").then((ret: any) => {
    console.log(ret.name);
});
