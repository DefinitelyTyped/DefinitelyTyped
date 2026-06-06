import parse from "video-name-parser";

const meta = parse("file.mp4"); // $ExpectType VideoMetadata
meta.name.substring(0, 3); // $ExpectType string
meta.type.toLowerCase(); // $ExpectType string
meta.tag.indexOf("1080p"); // $ExpectType number
