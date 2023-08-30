import { DemoData, getBoundary, Parse } from "parse-multipart";

DemoData(); // $ExpectType Buffer
getBoundary("multipart/form-data; boundary=----WebKitFormBoundaryvm5A9tzU1ONaGP5B"); // $ExpectType string
Parse(Buffer.from("hello world", "utf8"), ""); // $ExpectType ParsedFile[]
