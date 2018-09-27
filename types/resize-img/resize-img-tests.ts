import * as fs from "fs";
import resizeImg = require("resize-img");

resizeImg(fs.readFileSync("images/dog.jpg"), {
    width: 128,
    height: 128,
}).then((buf) => {
    fs.writeFileSync("resized.jpg", buf);
});
