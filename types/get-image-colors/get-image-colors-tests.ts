import getColors = require("get-image-colors");
import { Options } from "get-image-colors";

declare const buffer: Buffer;
const options: Options = {
    count: 10,
    type: "image/png",
};

(async () => {
    // $ExpectType Color[]
    await getColors("./double-rainbow.png");

    getColors("./double-rainbow.png", (err, colors) => {
        if (err) throw err;
        colors; // $ExpectType Color[]
    });

    // $ExpectType Color[]
    await getColors(buffer, options);

    // $ExpectType Color[]
    await getColors(buffer, "image/gif");

    // $ExpectType Color[]
    await getColors("./double-rainbow.png", options);
})();
