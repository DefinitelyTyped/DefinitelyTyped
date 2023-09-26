import { SpritesmithResult } from "spritesmith";
import Spritesmith = require("spritesmith");
import { Transform } from "stream";

// Generate our spritesheet
const sprites = ["fork.png", "github.png", "twitter.png"];
// $ExpectType void
Spritesmith.run({ src: sprites }, function handleResult(err, result) {
    // $ExpectType Buffer
    result.image; // Buffer representation of image
    result.coordinates; // Object mapping filename to {x, y, width, height} of image
    result.properties; // Object with metadata about spritesheet {width, height}
});

// Create a new spritesmith and process our images
const spritesmith = new Spritesmith();
// $ExpectType void
spritesmith.createImages(sprites, function handleImages(err, images) {
    images[0].width; // Width of image
    images[0].height; // Height of image

    // Create our result
    const result: SpritesmithResult<Transform> = spritesmith.processImages(images);
    // $ExpectType Transform
    result.image; // Readable stream outputting image
    result.coordinates; // Object mapping filename to {x, y, width, height} of image
    result.properties; // Object with metadata about spritesheet {width, height}
});
