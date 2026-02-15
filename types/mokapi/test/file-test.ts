import { read, writeString, appendString } from "mokapi/file";

// @ts-expect-error
read(123)
read("data.json");
// @ts-expect-error
const i: number = read("data.json");
const s: string = read("data.json");

writeString("data.txt", "Hello World");
// @ts-expect-error
writeString("data.txt", 123);

appendString("data.txt", "Hello Again");
// @ts-expect-error
appendString("data.txt", 123);
