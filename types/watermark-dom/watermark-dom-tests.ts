import watermarkDom  from "watermark-dom";
// $ExpectType void
watermarkDom.init({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })
// $ExpectType void
watermarkDom.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" })
// $ExpectType void
watermarkDom.remove()