import magic from "magic-number";

// $ExpectType string
magic.detectFile("file.zip");

declare const data: any;

// $ExpectType string
magic.detectType(data);
