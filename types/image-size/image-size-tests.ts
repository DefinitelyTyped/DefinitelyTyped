import * as url from "url";
import * as http from "http";
import sizeOf = require("image-size");

// Synchronous
const dimensions = sizeOf("images/funny-cats.png");
console.log(dimensions.width, dimensions.height);

// Asynchronous
sizeOf("images/funny-cats.png", (err, dimensions) => {
  console.log(dimensions.width, dimensions.height);
});

// From URL
const imgUrl = "http://my-amazing-website.com/image.jpeg";
const options = url.parse(imgUrl);

http.get(options, (response) => {
  const chunks: Buffer[] = [];
  response.on("data", (chunk: Buffer) => {
    chunks.push(chunk);
  }).on("end", () => {
    const buffer = Buffer.concat(chunks);
    console.log(sizeOf(buffer));
  });
});
