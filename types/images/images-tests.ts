import * as images from "images";

// from https://github.com/zhangyuanwei/node-images/blob/master/demo/uploadServer.js
const tmp_path = "tmp_path";
const out_path = "out_path";
const photo = images(tmp_path);

photo.size(800)
    .draw(images('./logo.png'), 800 - 421, photo.height() - 117)
    .save(out_path, { quality: 80 });

// from https://github.com/zhangyuanwei/node-images/blob/master/test/index.js
images("input.png")
    .resize(200)
    .save("output_new.png");

images("input.png")
    .size(200)
    .save("output_old.png");

images("input.jpg")
    .resize(200)
    .save("output_new.jpg");

images("input.jpg")
    .size(200)
    .save("output_old.jpg");

images("input.gif")
    .resize(200)
    .save("output_new_gif.jpg");

images("input.gif")
    .size(200)
    .save("output_old_gif.jpg");
