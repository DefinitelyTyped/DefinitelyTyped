import { Readable } from "stream";
import streamifyArray from "streamify-array";

const stream: Readable = streamifyArray([1, 2, 3]);
stream.on("data", (d) => console.log("Data: " + d));
stream.on("end", () => console.log("Done!"));

// @ts-expect-error
streamifyArray();
