import { createReadStream } from "fs";
import imageThumbnail = require("image-thumbnail");

imageThumbnail({ uri: "" }); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
imageThumbnail({ uri: "" }, { responseType: "base64" }); // $ExpectType Promise<string>

imageThumbnail(""); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
imageThumbnail("", { responseType: "base64" }); // $ExpectType Promise<string>

imageThumbnail(Buffer.from([])); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
imageThumbnail(Buffer.from([]), { responseType: "base64" }); // $ExpectType Promise<string>

imageThumbnail(createReadStream("")); // $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
imageThumbnail(createReadStream(""), { responseType: "base64" }); // $ExpectType Promise<string>
