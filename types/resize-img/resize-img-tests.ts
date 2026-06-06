import fs = require("fs");
import resizeImg = require("resize-img");
resizeImg(fs.readFileSync("unicorn.png"), { width: 128, height: 128 }).then(buf => {
    fs.writeFileSync("unicorn-128x128.png", buf);
});

(async () => {
    const image = await resizeImg(fs.readFileSync("unicorn.png"), {
        width: 128,
        height: 128,
        format: "png",
    });
    fs.writeFileSync("unicorn-128x128.png", image);
})();
