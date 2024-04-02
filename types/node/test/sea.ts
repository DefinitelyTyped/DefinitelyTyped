import { getAsset, getAssetAsBlob, isSea } from "node:sea";

{
    isSea() // $ExpectType boolean

    getAsset("a.jpg") // $ExpectType ArrayBuffer
    getAsset("b.txt", "utf8") // $ExpectType string

    getAssetAsBlob("c.png") // $ExpectType Blob
}
