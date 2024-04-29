import { getAsset, getAssetAsBlob, isSea } from "node:sea";

{
    // $ExpectType boolean
    isSea();

    // $ExpectType ArrayBuffer
    getAsset("a.jpg");
    // $ExpectType string
    getAsset("b.txt", "utf8");

    // $ExpectType Blob
    getAssetAsBlob("c.png");
}
