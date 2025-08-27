import TinySegmenter = require("tiny-segmenter");

// sample code from http://chasen.org/~taku/software/TinySegmenter/
var segmenter = new TinySegmenter(); // インスタンス生成
var segs = segmenter.segment("私の名前は中野です"); // $ExpectType string[]
segs.join(" | "); // 表示
