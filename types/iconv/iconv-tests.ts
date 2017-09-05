import Iconv = require("iconv");
import { Writable } from "stream";

const iconv: Iconv.Iconv = new Iconv("utf-8", "cp932");
const iconvFromFunction: Iconv.Iconv = Iconv("utf-8", "cp932");

iconv.writable = true;

let buffer: Buffer;

buffer = iconv.convert("hoge");
buffer = iconv.convert("hoge", "utf-8");
buffer = iconv.convert(new Buffer("hoge"), "utf-8");

let result: boolean;

result = iconv.write("hoge");
result = iconv.write("hoge", "utf-8");
result = iconv.write(new Buffer("hoge"), "utf-8");

iconv.end();
iconv.end("hoge");
iconv.end("hoge", "utf-8");
iconv.end(new Buffer("hoge"), "utf-8");

const st: Writable = iconv.pipe(new Writable, {end: true});
